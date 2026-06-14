# 第 4.5 節 – 建立簡單函式與遞迴

在本節中，我們將透過一些經典的數學例子（階層、費氏數列）來練習撰寫函式，並學習一個重要的概念：**遞迴 (Recursion)**。

## 4.5.1 範例：階層 (Factorials)

階層（記作 `n!`）是從 1 到 n 所有正整數的乘積。
例如：`5! = 1 * 2 * 3 * 4 * 5 = 120`

```python
def factorial_function(n):
    if n < 0: return None
    if n < 2: return 1
    
    product = 1
    for i in range(2, n + 1):
        product *= i
    return product

for n in range(1, 6):
    print(n, factorial_function(n))
```

## 4.5.2 費氏數列 (Fibonacci Numbers)

費氏數列的規則是：前兩個數是 1，之後的每個數都是前兩個數的和。
`1, 1, 2, 3, 5, 8, 13, 21, ...`

```python
def fib(n):
    if n < 1: return None
    if n < 3: return 1

    elem_1 = elem_2 = 1
    the_sum = 0
    for i in range(3, n + 1):
        the_sum = elem_1 + elem_2
        elem_1, elem_2 = elem_2, the_sum
    return the_sum
```

## 4.5.3 遞迴 (Recursion)

遞迴是指**函式呼叫自己本身**的技術。許多數學定義本身就是遞迴的。

**遞迴版階層：**
```python
def factorial(n):
    if n == 1:  # 終止條件
        return 1
    return n * factorial(n - 1)
```

> **重要提示**：使用遞迴時，一定要設定**終止條件 (Base case)**，否則程式會進入無窮迴圈並導致記憶體溢位。

## 4.5 本節測驗

<Quiz 
  question="1. 什麼是遞迴 (Recursion)？" 
  :options="['一種特殊的迴圈語法', '函式呼叫自己本身的技術', '一種刪除變數的方法']" 
  :answer="1" 
/>

<Quiz 
  question="2. 使用遞迴時，哪一個要素最為重要，以防止程式當機？" 
  :options="['函式名稱要長', '設定終止條件 (Base case)', '使用 global 關鍵字']" 
  :answer="1" 
/>

<Quiz 
  question="3. 遞迴呼叫會消耗什麼資源？" 
  :options="['硬碟空間', '記憶體 (Stack)', '網路頻寬']" 
  :answer="1" 
/>
