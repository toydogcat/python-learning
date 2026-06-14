# 第 4.3 節 – 函式的返回值

函式不僅可以產生效果（如印出文字），還可以將計算結果「回傳」給呼叫者。

## 4.3.1 return 指令

使用 **`return`** 關鍵字來回傳值。

```python
def multiply(a, b):
    return a * b

result = multiply(3, 4)
print(result)  # 12
```

**`return` 的兩個作用：**
1.  **立即終止**函式的執行。
2.  **回傳**一個值給呼叫端。

## 4.3.2 關於 None

如果一個函式沒有使用 `return` 回傳任何值，或者只有單獨一個 `return` 而沒有接任何東西，Python 會預設回傳一個特殊的值：**`None`**。

```python
def hi():
    print("Hi!")
    # 沒有 return，預設回傳 None

result = hi()
print(result)  # None
```

`None` 代表「無」或「空」，它可以用來檢查函式的狀態，但不能參與數學運算。

## 4.3.3 列表與函式

您可以將列表作為參數傳入函式，也可以讓函式回傳一個列表。

```python
def create_list(n):
    new_list = []
    for i in range(n):
        new_list.append(i)
    return new_list

print(create_list(5))  # [0, 1, 2, 3, 4]
```

## 4.3 本節測驗

<Quiz 
  question="1. return 關鍵字的主要用途是什麼？" 
  :options="['印出結果到螢幕', '結束函式並將值傳回呼叫處', '跳過目前迴圈']" 
  :answer="1" 
/>

<Quiz 
  question="2. 如果函式中沒有寫 return，它預設會回傳什麼？" 
  :options="['0', 'False', 'None']" 
  :answer="2" 
/>

<Quiz 
  question="3. x = multiply(2, 3)，如果 multiply 函式內只有 print(a * b) 而沒有 return，變數 x 的值會是什麼？" 
  :options="['6', 'None', 'SyntaxError']" 
  :answer="1" 
/>
