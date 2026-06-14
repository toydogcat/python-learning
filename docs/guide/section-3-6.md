# 第 3.6 節 – 列表進階操作

在本節中，您將學習如何使用**切片 (Slices)**、以及 `in` 和 `not in` 運算子來處理列表。

## 3.6.1 列表的內部運作 (記憶體參考)

列表與普通變數有一個很大的不同：賦值不會複製內容，只會複製「位址」。

```python
list_1 = [1]
list_2 = list_1
list_1[0] = 2
print(list_2)  # 輸出 [2]！
```
因為 `list_1` 和 `list_2` 指向的是同一個記憶體區塊。

## 3.6.2 強大的切片 (Slices)

切片允許您建立列表的「副本」或其中的一部分。

語法：`my_list[start:end]`
*   `start`：開始的索引（包含）。
*   `end`：結束的索引（不包含，即到 `end-1` 為止）。

```python
my_list = [10, 8, 6, 4, 2]
new_list = my_list[1:3]  # 取索引 1 和 2
print(new_list)  # [8, 6]

# 複製整個列表
copy_list = my_list[:]
```

### 切片的各種寫法
*   `my_list[:3]`：從頭開始取到索引 2。
*   `my_list[3:]`：從索引 3 取到最後。
*   `my_list[1:-1]`：從索引 1 取到倒數第二個。

## 3.6.3 in 與 not in 運算子

這兩個運算子可以用來檢查某個元素是否存在於列表中，結果為布林值。

```python
my_list = [0, 3, 12, 8, 2]
print(5 in my_list)      # False
print(12 in my_list)     # True
print(5 not in my_list)  # True
```

## 3.6 本節測驗

<Quiz 
  question="1. list_1 = [1, 2]; list_2 = list_1[:]; list_1[0] = 9; print(list_2) 的輸出是？" 
  :options="['[1, 2]', '[9, 2]', 'SyntaxError']" 
  :answer="0" 
/>

<Quiz 
  question="2. my_list = [10, 20, 30, 40, 50]; print(my_list[1:4]) 的結果是？" 
  :options="['[10, 20, 30]', '[20, 30, 40]', '[20, 30, 40, 50]']" 
  :answer="1" 
/>

<Quiz 
  question="3. 哪一個運算子可以用來快速檢查列表中是否「不包含」某個元素？" 
  :options="['is absent', 'not in', '!in']" 
  :answer="1" 
/>
