/**
 * @OnlyCurrentDoc
 *
 * 當文件開啟時，這個函式會自動執行，並在 Google 文件 UI 中建立一個自訂選單。
 */
function onOpen() {
  DocumentApp.getUi()
      .createMenu('一鍵選取工具')
      .addItem('選取所有亞洲字元', 'selectAllAsianChars')
      .addItem('選取所有非亞洲字元 (英文/數字/符號)', 'selectAllNonAsianChars')
      .addToUi();
}

/**
 * 選取文件內所有的亞洲字元。
 * 這包括 CJK 漢字、日文假名、全形符號等。
 */
function selectAllAsianChars() {
  // 【修正】這個正規表示式已更新，加入了 CJK 部首補充、相容漢字補充等範圍，並啟用了 'u' 旗標以支援罕見字。
  // \u3000-\u303F: CJK 符號和標點
  // \u3040-\u309F: 日文平假名
  // \u30A0-\u30FF: 日文片假名
  // \uFF00-\uFFEF: 全形字元
  // \u4e00-\u9FFF: CJK 統一漢字 (常用及擴充)
  // \u3400-\u4DBF: CJK 統一漢字擴充 A
  // \u2F00-\u2FDF: 康熙部首 (已修正完整範圍)
  // \u2E80-\u2EFF: CJK 部首補充
  // \u{2F800}-\u{2FA1F}: CJK 相容漢字補充 (需要 'u' 旗標)
  const asianRegex = /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4e00-\u9FFF\u3400-\u4DBF\u2F00-\u2FDF\u2E80-\u2EFF\u{2F800}-\u{2FA1F}]+/gu;
  selectTextByManualIteration(asianRegex, '文件中沒有找到任何亞洲字元。');
}

/**
 * 選取文件內所有非亞洲字元。
 * 這包括英文字母、數字、半形標點符號等。
 */
function selectAllNonAsianChars() {
  // 【修正】這個正規表示式使用 ^ 來反向選取，同樣更新了範圍並啟用了 'u' 旗標。
  // 它會選取所有「不是」亞洲字元，也「不是」空白字元 (\s) 的字元。
  const nonAsianRegex = /[^\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4e00-\u9FFF\u3400-\u4DBF\u2F00-\u2FDF\u2E80-\u2EFF\u{2F800}-\u{2FA1F}\s]+/gu;
  selectTextByManualIteration(nonAsianRegex, '文件中沒有找到任何非亞洲字元。');
}

/**
 * 【核心函式】
 * 透過手動迭代的方式，在文件的所有部分中尋找並選取匹配正規表示式的文字。
 * 這個方法比 findText 更可靠，尤其是在處理複雜格式的文件時。
 * @param {RegExp} regex - 用於尋找目標文字的正規表示式物件。
 * @param {string} notFoundMessage - 如果找不到任何匹配項時要顯示的訊息。
 */
function selectTextByManualIteration(regex, notFoundMessage) {
  const doc = DocumentApp.getActiveDocument();
  const allRanges = [];

  /**
   * 遞迴輔助函式，用於掃描指定元素及其所有子元素。
   * @param {Element} element - 要掃描的 Google 文件元素。
   */
  function findTextInElement(element) {
    // 如果元素不存在，則直接返回
    if (!element) {
      return;
    }

    // 情況一：如果元素是文字節點 (TEXT)
    if (element.getType() === DocumentApp.ElementType.TEXT) {
      const textElement = element.asText();
      const text = textElement.getText();
      
      // 每次處理新的文字片段時，必須重設正規表示式的 lastIndex
      regex.lastIndex = 0;
      
      let match;
      // 使用 regex.exec() 迴圈來找出所有匹配項
      while ((match = regex.exec(text)) !== null) {
        const start = match.index;
        const end = start + match[0].length - 1; // 結束位移是包含性的
        
        // 為這個匹配項建立一個精確的範圍 (Range)
        const range = doc.newRange().addElement(textElement, start, end).build();
        allRanges.push(range);
      }
    } 
    // 情況二：如果元素是容器 (Container)，則遞迴掃描其所有子元素
    else if (typeof element.getNumChildren === 'function') {
      const container = element;
      for (let i = 0; i < container.getNumChildren(); i++) {
        findTextInElement(container.getChild(i));
      }
    }
  }

  // 從文件的所有主要部分開始進行掃描
  findTextInElement(doc.getBody());
  findTextInElement(doc.getHeader());
  findTextInElement(doc.getFooter());
  
  const footnotes = doc.getFootnotes();
  if (footnotes) {
    footnotes.forEach(footnote => findTextInElement(footnote));
  }

  // 如果找到了任何範圍，就將它們全部選取
  if (allRanges.length > 0) {
    const rangeBuilder = doc.newRange();
    allRanges.forEach(range => rangeBuilder.addRange(range));
    doc.setSelection(rangeBuilder.build());
  } else {
    // 否則，顯示未找到的提示訊息
    DocumentApp.getUi().alert(notFoundMessage);
  }
}
