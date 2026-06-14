# 第 2.4 節 – 變數 (Variables)

變數就像是電腦記憶體中的「盒子」，讓您可以儲存資料並在之後使用。

## 2.4.1 變數的組成
每個變數都有：
*   一個**名稱** (Name)
*   一個**值** (Value)

## 2.4.2 命名規則
在 Python 中命名變數必須遵守以下規則：
1.  只能包含字母（大寫或小寫）、數字和底線 `_`。
2.  必須以**字母**或**底線**開頭（不能以數字開頭）。
3.  **區分大小寫**（`var` 和 `Var` 是不同的變數）。
4.  不能使用 Python 的**保留字**（Keywords，如 `if`, `while`, `True` 等）。

> **建議**：根據 [PEP 8](https://peps.python.org/pep-0008/) 標準，變數名稱建議使用小寫字母，並用底線分隔單字（例如 `my_variable`）。

## 2.4.3 建立與使用變數
在 Python 中，您不需要事先宣告變數類型。賦值給變數時，變數就會被自動建立。

```python
var = 1
print(var)
```

### 使用變數
您可以在運算式中使用變數：
```python
a = 3.0
b = 4.0
c = (a ** 2 + b ** 2) ** 0.5
print("c =", c)  # 計算畢氏定理
```

## 2.4.4 複合賦值運算子 (Shortcut Operators)
當您想要更新變數的值時，可以使用縮寫：
*   `x = x + 1` 可以寫成 `x += 1`
*   `x = x * 2` 可以寫成 `x *= 2`
*   `x = x / 2` 可以寫成 `x /= 2`

## 2.4 本節測驗

<Quiz 
  question="1. 下列哪一個變數名稱在 Python 中是「不合法」的？" 
  :options="['my_var', '101var', '_var']" 
  :answer="1" 
/>

<Quiz 
  question="2. var = 1; var = var + 1; print(var) 的輸出是？" 
  :options="['1', '2', 'SyntaxError']" 
  :answer="1" 
/>

<Quiz 
  question="3. x = 2; x *= 3 + 1; print(x) 的輸出是？ (提示：先算等號右邊)" 
  :options="['7', '8', '6']" 
  :answer="1" 
/>
