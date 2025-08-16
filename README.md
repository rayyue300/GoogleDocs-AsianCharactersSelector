# Google Docs™ - 亞洲字元一鍵選取 Asian Characters Selector (Developer Documentation)

A Google Apps Script for selecting all Asian or non-Asian characters in Google Docs™ with one click, making it easy to set different fonts for different character types.

**UI Language:** Traditional Chinese & English (Auto-detect)

**[中文版說明請點此 (Click here for Chinese version)](#中文版說明-chinese-version)**

> **For End-Users:** For a user-friendly guide and installation, please visit our **[Homepage](https://rayyue300.github.io/GoogleDocs-AsianCharactersSelector/)**.

### Disclaimer

This project is an unofficial tool developed by the community. This project and its developers are not affiliated with, authorized by, or endorsed by Google LLC. Google Docs™ is a trademark of Google LLC.

---

## Project Goal

When working with documents containing both Chinese and English text, it's often desirable to set different fonts for Asian characters (e.g., Noto Serif TC) and Western characters (e.g., Times New Roman) for optimal readability. Manually selecting each text block is time-consuming. This tool aims to solve this problem by providing a one-click selection method.

## Key Features

* **Select All Asian Characters**: Selects all Asian characters in the entire document (including body, header, footer, and footnotes), such as CJK ideographs, Japanese Kana, full-width symbols, and radicals.
* **Select All Non-Asian Characters**: Selects all characters except for Asian characters and whitespace, including Latin letters, numbers, and standard punctuation.

## Project Structure

* `Code.gs`: The main Google Apps Script file containing all the logic for the add-on.
* `appsscript.json`: The manifest file for the classic Editor Add-on, defining necessary scopes and settings.
* `index.html`: The source code for the user-facing homepage, served via GitHub Pages.
* `images/`: Contains all graphical assets, such as the icon and screenshots.
* `LICENSE`: The MIT License file.
* `PRIVACY_POLICY.md`: The privacy policy for the add-on.

## Manual Installation for Development & Testing

This method is for developers who want to run the latest version of the code directly from the repository.

1.  **Open a Google Doc** and navigate to `Extensions` > `Apps Script`.
2.  **Copy the Code**: Open the [`Code.gs`](https://github.com/rayyue300/GoogleDocs-AsianCharactersSelector/blob/main/Code.gs) file from this repository and copy its entire content.
3.  **Paste the Code**: Paste the copied code into the script editor in your Google Doc, replacing any default code.
4.  **Copy the Manifest**: Open the [`appsscript.json`](https://github.com/rayyue300/GoogleDocs-AsianCharactersSelector/blob/main/appsscript.json) file from this repository and copy its content.
5.  **Paste the Manifest**: In the script editor, make sure the `appsscript.json` file is visible (via Project Settings) and paste the copied content there.
6.  **Save and Reload**: Save the project in the script editor and reload your Google Doc. The add-on menu should now appear under `Extensions`.

## Contributing

Contributions, bug reports, and feature suggestions are welcome! Please feel free to open an issue or submit a pull request.

## Credits

* The core logic of this script was developed with the assistance of **Gemini**, a large language model from Google™.
* The project icon was generated using the **Lovart.ai** AI image generation tool.

## Privacy Policy

For details on how this project handles your data, please see our [**Privacy Policy**](PRIVACY_POLICY.md).

## License

This project is licensed under the [MIT License](LICENSE).

---
---

## 中文版說明 (Chinese Version)

一個 Google Apps Script，用於在 Google Docs™ 中一鍵選取所有亞洲或非亞洲字元，方便快速設定不同字體。

**介面語言：** 繁體中文 & 英文 (自動偵測)

> **給一般使用者：** 如果您想尋找簡單易懂的安裝與使用教學，請前往我們的 **[官方網站](https://rayyue300.github.io/GoogleDocs-AsianCharactersSelector/)**。

### 免責聲明

本專案為由社群開發的非官方工具，旨在擴充 Google Docs™ 的功能。本專案及其開發者與 Google LLC 沒有任何關聯、未受其授權、也未經其認可。

---

### 專案目標

在處理中英混排的文件時，我們常希望能為「中文字體」和「英文/數字字體」設定不同的字型（例如：中文用思源宋體，英文用 Times New Roman），以達到最佳的排版閱讀效果。手動逐一選取設定非常耗時，這個工具旨在解決此問題，實現一鍵區分選取。

### 主要功能

* **選取所有亞洲字元**：一鍵選取文件（包含內文、頁首、頁尾、註腳）中所有的 CJK 漢字、日文假名、全形符號、部首等亞洲字元。
* **選取所有非亞洲字元**：一鍵選取除了亞洲字元和空格以外的所有字元，包括英文字母、數字、半形標點符號等。

### 專案結構

* `Code.gs`: 包含所有外掛程式邏輯的主要 Apps Script 檔案。
* `appsscript.json`: 經典版編輯器外掛的設定檔，定義了必要的權限範圍和設定。
* `index.html`: 透過 GitHub Pages 發布、給使用者看的首頁原始碼。
* `images/`: 包含所有圖像資源，如圖示和螢幕截圖。
* `LICENSE`: MIT 授權條款檔案。
* `PRIVACY_POLICY.md`: 外掛程式的隱私權政策檔案。

### 手動安裝以供開發測試

此方法適用於希望直接從本倉庫執行最新版本程式碼的開發者。

1.  **開啟 Google 文件** 並前往 `擴充功能` > `Apps Script`。
2.  **複製程式碼**：打開本倉庫的 [`Code.gs`](https://github.com/rayyue300/GoogleDocs-AsianCharactersSelector/blob/main/Code.gs) 檔案並複製其所有內容。
3.  **貼上程式碼**：將複製的程式碼貼到您 Google 文件的指令碼編輯器中，取代任何預設程式碼。
4.  **複製設定檔**：打開本倉庫的 [`appsscript.json`](https://github.com/rayyue300/GoogleDocs-AsianCharactersSelector/blob/main/appsscript.json) 檔案並複製其內容。
5.  **貼上設定檔**：在指令碼編輯器中，確保 `appsscript.json` 檔案可見（透過「專案設定」）並貼上複製的內容。
6.  **儲存並重新載入**：在指令碼編輯器中儲存專案，然後重新整理您的 Google 文件。外掛選單現在應該會出現在「擴充功能」下方。

### 貢獻

如果您發現任何問題 (Bug)，或是有任何功能建議，歡迎透過本專案的 [Issues](https://github.com/rayyue300/GoogleDocs-AsianCharactersSelector/issues) 功能回報，非常感謝！

### 致謝

* 本專案的核心程式碼由 Google™ 的大型語言模型 **Gemini** 協助編寫與除錯。
* 專案圖示由 **Lovart.ai** AI 圖像生成工具產生。

### 隱私權政策

關於本專案如何處理您的資料，請參閱我們的[**隱私權政策檔案**](PRIVACY_POLICY.md)。

### 授權條款

本專案採用 [MIT License](LICENSE) 授權。
