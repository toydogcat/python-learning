# 第 3.5 節 – 簡單列表排序：泡沫排序法 (Bubble Sort)

既然您已經學會如何操作列表元素，現在是時候學習如何對它們進行**排序**了。

## 3.5.1 泡沫排序法原理

泡沫排序是一種簡單但效率較低的演算法。它的核心思想是：**比較相鄰的兩個元素，如果順序錯誤就交換它們。**

想像一個列表：`[8, 10, 6, 2, 4]`

1.  比較 8 和 10：順序正確，不變。
2.  比較 10 和 6：10 > 6，交換 → `[8, 6, 10, 2, 4]`
3.  比較 10 和 2：10 > 2，交換 → `[8, 6, 2, 10, 4]`
4.  比較 10 和 4：10 > 4，交換 → `[8, 6, 2, 4, 10]`

第一輪結束後，最大的數字 `10` 就像泡泡一樣「浮」到了列表的最末端。

## 3.5.2 在 Python 中實作排序

我們可以使用 `while` 迴圈搭配一個旗標變數 `swapped` 來持續檢查是否還需要交換。

```python
my_list = [8, 10, 6, 2, 4]
swapped = True

while swapped:
    swapped = False
    for i in range(len(my_list) - 1):
        if my_list[i] > my_list[i + 1]:
            swapped = True
            my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]

print(my_list)
```

## 3.5.3 Python 內建排序工具

在實際開發中，您不需要手寫排序演算法，Python 提供了現成的工具：

*   **`list.sort()`**：將列表本身進行排序（小到大）。
*   **`list.reverse()`**：將列表元素反轉。

```python
my_list = [8, 10, 6, 2, 4]
my_list.sort()
print(my_list)  # [2, 4, 6, 8, 10]
```

## 3.5 本節測驗

<Quiz 
  question="1. 泡沫排序法的主要操作是什麼？" 
  :options="['隨機排列元素', '比較並交換相鄰元素', '將列表分成兩半']" 
  :answer="1" 
/>

<Quiz 
  question="2. my_list = [5, 2, 8]; my_list.sort(); print(my_list) 的結果是？" 
  :options="['[5, 2, 8]', '[8, 5, 2]', '[2, 5, 8]']" 
  :answer="2" 
/>

<Quiz 
  question="3. 想要將列表 [1, 2, 3] 變成 [3, 2, 1]，應該使用哪一個方法？" 
  :options="['sort()', 'reverse()', 'append()']" 
  :answer="1" 
/>
