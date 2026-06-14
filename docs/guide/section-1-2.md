# 第 1.2 節 – Python 簡介

在此，我們將了解一些 Python 的歷史、不同的 Python 版本與實作方式，以及 Python 對現代程式設計的影響。

## Python – 是工具，不是爬蟲類

### 什麼是 Python？
Python 是一種廣泛使用的、直譯式的、物件導向的、高階程式設計語言。雖然你可能知道「Python」是大蟒蛇的意思，但這個名稱其實來自於一個舊的 BBC 電視喜劇系列——《蒙提·派森的飛行馬戲團》(Monty Python's Flying Circus)。

### 誰創造了 Python？
Python 是由 **Guido van Rossum** 於 1989 年 12 月創造的。他的目標是開發一種簡單直觀、開源、且程式碼如純英文般易懂的語言。

### 為什麼 Python 如此特別？
*   **易於學習**：學習所需時間比許多其他語言短。
*   **易於教學**：老師可以更專注於通用的程式設計技術。
*   **易於理解**：閱讀別人的程式碼通常更容易。
*   **免費、開源且跨平台**。

## Python 的不同版本

### Python 2 vs. Python 3
*   **Python 2** 是舊版本，開發已經停止，僅進行錯誤修正和安全更新。
*   **Python 3** 是目前的版本，是這門課程使用的版本。
*   **兩者不相容**：Python 2 的腳本通常無法直接在 Python 3 環境中運行。

### Python 的實作版本
*   **CPython**：這是最傳統、也是參考標準的實作版本，使用 C 語言編寫。
*   **Cython**：將 Python 程式碼翻譯成 C 程式碼以提高效率。
*   **Jython**：使用 Java 實作的 Python，可以與 Java 基礎設施進行有效溝通。
*   **PyPy**：使用 RPython 編寫，專注於執行速度。

# 第 1.3 節 – 下載與安裝 Python

## 開始您的 Python 旅程

### 如何獲取 Python
*   **Linux 使用者**：很可能已經預裝了 Python。可以在終端機輸入 `python3` 檢查。
*   **Windows/macOS 使用者**：可以從 [python.org/downloads](https://www.python.org/downloads/) 下載安裝程式。安裝時務必勾選 **"Add Python 3.x to PATH"**。

### IDLE (整合開發與學習環境)
Python 標準安裝包含一個名為 **IDLE** 的簡單工具。它包含：
*   **編輯器 (Editor)**：用於編寫程式碼。
*   **控制台 (Console/Shell)**：用於執行程式碼並查看結果。
*   **偵錯器 (Debugger)**：用於逐步執行程式碼。

## 1.2 - 1.3 本節測驗

<Quiz 
  question="1. Python 這個名稱的由來是什麼？" 
  :options="['一種大蟒蛇', '一個電視喜劇系列', '希臘神話']" 
  :answer="1" 
/>

<Quiz 
  question="2. 在 Windows 上安裝 Python 時，哪一個步驟能讓你在終端機更方便地執行 Python？" 
  :options="['設定桌面捷徑', '勾選 Add Python to PATH', '安裝所有擴充功能']" 
  :answer="1" 
/>
