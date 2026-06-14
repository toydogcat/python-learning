# 第 4.4 節 – Python 中的作用域 (Scopes)

在本節中，您將學習作用域的概念，區分區域變數與全域變數，以及如何使用 `global` 關鍵字。

## 4.4.1 什麼是作用域？

作用域是指變數在程式碼中「可以被識別」的範圍。

*   **區域變數 (Local Variables)**：定義在函式內部的變數。它們只能在該函式內使用。
*   **全域變數 (Global Variables)**：定義在所有函式外部的變數。它們在整個程式中（包含函式內部）都可以被存取。

```python
def scope_test():
    x = 123  # 區域變數
    print(x)

scope_test()
# print(x)  # 這會報錯！因為 x 在函式外不可見
```

## 4.4.2 變數遮蔽 (Shadowing)

如果函式內部的變數名稱與全域變數相同，則函式內部的變數會「遮蔽」外部的變數。

```python
var = 1  # 全域變數

def my_function():
    var = 2  # 區域變數，遮蔽了全域的 var
    print("函式內：", var)

my_function()  # 輸出 2
print("函式外：", var)  # 輸出 1
```

## 4.4.3 global 關鍵字

如果您想在函式內部「修改」全域變數的值，必須使用 **`global`** 關鍵字宣告。

```python
var = 1

def my_function():
    global var
    var = 2  # 這會修改全域變數

my_function()
print(var)  # 輸出 2
```

## 4.4 本節測驗

<Quiz 
  question="1. 定義在函式內部的變數稱為什麼？" 
  :options="['全域變數', '區域變數', '靜態變數']" 
  :answer="1" 
/>

<Quiz 
  question="2. 如何在函式內部修改全域變數的值？" 
  :options="['直接賦值', '使用 global 關鍵字宣告', '無法修改']" 
  :answer="1" 
/>

<Quiz 
  question="3. 在函式外存取函式內定義的區域變數會發生什麼事？" 
  :options="['正常執行', '得到 None', '發生 NameError 錯誤']" 
  :answer="2" 
/>
