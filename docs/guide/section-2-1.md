# 第 2.1 節 – "Hello, World!" 程式

歡迎來到第二模組！在第一節中，我們將學習 Python 語言最基本的語法與語義要素，並使用它們來建立您的第一個 Python 程式 – "Hello, World!"。

## 2.1.1 您的第一個程式

是時候開始編寫一些真實且可運行的 Python 程式碼了。目前這會非常簡單。

執行以下程式碼。如果一切正常，您將在主控台窗口中看到一行文字。

```python
print("Hello, World!")
```

現在我們將解釋您看到的內容。這個程式由以下部分組成：
* `print` 函數名稱。
* 一對括號 `()`。
* 引號內的內容 `"Hello, World!"`。

## 2.1.2 print() 函數

`print` 是一個函數名稱。在 Python 中，函數是一個獨立的程式碼部分，能夠：
1. 導致一個效應（例如：將文字輸出到螢幕）。
2. 計算一個值（例如：求平方根）。

## 2.1.3 函數參數

Python 函數可以接收**參數**。參數放在函數名稱後的括號中。

```python
print("Hello, World!")
```

在上面的例子中，`"Hello, World!"` 就是一個字串參數。

## 2.1.4 函數調用

函數名稱連同括號和參數構成了**函數調用 (Function Invocation)**。

## 2.1.5 print() 函數的效應與返回值

1. **效應：** 將參數轉換為人類可讀的形式並輸出到螢幕。
2. **參數：** `print()` 可以接收幾乎任何類型的數據，如字串、數字等。
3. **返回值：** `print()` 不返回任何值（返回 `None`）。

## 2.1.6 指令 (Instructions)

函數調用是一種指令。Python 要求**一行只能有一個指令**（除非使用特殊續行符號）。

## 2.1.7 跳脫字元與換行字元

反斜線 `\` 是**跳脫字元 (Escape character)**。它告訴 Python 下一個字元有特殊意義。
* `\n`：換行字元 (Newline character)。

```python
print("The itsy bitsy spider\nclimbed up the waterspout.")
```

## 2.1.8 使用多個參數

`print()` 可以接收多個參數，中間用逗號 `,` 隔開。

```python
print("The itsy bitsy spider", "climbed up", "the waterspout.")
```

預設情況下，`print()` 會在多個參數之間自動加入空格。

## 2.1.9 位置參數 (Positional Arguments)

當參數的意義由其**位置**決定時，稱為位置參數。

## 2.1.10 關鍵字參數 (Keyword Arguments)

Python 提供了另一種傳遞參數的機制：關鍵字參數。
* `end`：決定輸出結束時的字元（預設為換行 `\n`）。
* `sep`：決定多個參數之間的間隔字元（預設為空格）。

```python
print("My name is", "Python.", end=" ")
print("Monty Python.")
# 輸出: My name is Python. Monty Python.

print("My", "name", "is", "Monty", "Python.", sep="-")
# 輸出: My-name-is-Monty-Python.
```

## 2.1 本節小結

1. `print()` 是內建函數。
2. 字串可以用雙引號 `"` 或單引號 `'` 定義。
3. 位置參數由位置決定意義，關鍵字參數由名稱決定。

## 2.1 本節測驗

<Quiz 
  question="1. 以下程式的輸出為何？" 
  :options="['My name is Bond.James Bond.', 'My name is Bond. James Bond.', 'My name is Bond. [換行] James Bond.']" 
  :answer="1" 
/>

<Quiz 
  question="2. 以下程式的輸出為何？ print(sep='&', 'fish', 'chips')" 
  :options="['fish&chips', 'SyntaxError', '&fishchips']" 
  :answer="1" 
/>

<Quiz 
  question="3. 以下哪一個 print() 調用會導致 SyntaxError？" 
  :options="['print(\'Gregs book.\')', 'print(\'Gregs book.\')', 'print(\'Gregs book.\')']" 
  :answer="1" 
/>
