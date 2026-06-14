# 第 3.3 節 – Python 中的邏輯與位元運算

在本節中，您將學習 Python 中的邏輯運算子與位元運算子，以及真值表 (Truth Table) 和位元位移 (Bit Shifting) 等概念。

## 3.3.1 邏輯運算子

當我們需要結合多個條件時，會使用邏輯運算子。

### and (且)
只有當兩邊的條件都為真時，結果才為真。
*   `True and True` → `True`
*   `True and False` → `False`

### or (或)
只要其中一邊的條件為真，結果就為真。
*   `True or False` → `True`
*   `False or False` → `False`

### not (非)
反轉條件的真假值。
*   `not True` → `False`
*   `not False` → `True`

## 3.3.2 位元運算子 (Bitwise Operators)

位元運算子會直接處理數字內部的二進位位元 (Bits)。

*   **`&`** (位元且)：兩邊位元都是 1 則結果為 1。
*   **`|`** (位元或)：任一邊位元是 1 則結果為 1。
*   **`~`** (位元非)：將位元 0 變 1，1 變 0。
*   **`^`** (位元互斥或 / XOR)：兩邊位元不同則結果為 1。

## 3.3.3 位移運算子 (Shift Operators)

位移運算子會將二進位位元向左或向右移動。

*   **`<<`** (左移)：每向左移動一位，相當於**乘以 2**。
*   **`>>`** (右移)：每向右移動一位，相當於**整數除以 2**。

```python
var = 17  # 二進位: 0001 0001
var_left = var << 2   # 17 * 4 = 68
var_right = var >> 1  # 17 // 2 = 8
```

## 3.3 本節測驗

<Quiz 
  question="1. (True or False) and not False 的結果是什麼？" 
  :options="['True', 'False', 'SyntaxError']" 
  :answer="0" 
/>

<Quiz 
  question="2. 將數字 5 (二進位 101) 左移一位 (5 << 1) 的結果是多少？" 
  :options="['2', '10', '25']" 
  :answer="1" 
/>

<Quiz 
  question="3. 哪一個運算子會執行「位元互斥或 (XOR)」？" 
  :options="['&', '|', '^']" 
  :answer="2" 
/>
