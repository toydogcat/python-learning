# 第 3.4 節 – 列表 (Lists)

在本節中，您將學習 Python 的**列表 (Lists)** 及其相關操作，包括索引、更新、刪除以及重要的列表方法。

## 3.4.1 為什麼需要列表？
當您需要儲存大量相關資料（例如 1000 個數字）時，為每個數字建立一個變數是不切實際的。列表允許您將多個值儲存在一個變數中。

```python
numbers = [10, 5, 7, 2, 1]
```
列表使用中括號 `[]` 定義，元素之間用逗號分隔。

## 3.4.2 索引與存取 (Indexing)
列表中的元素從 **0** 開始編號。
*   `numbers[0]` 是第一個元素 (`10`)。
*   `numbers[4]` 是第五個元素 (`1`)。

### 負數索引
Python 支援負數索引：
*   `numbers[-1]` 是最後一個元素。
*   `numbers[-2]` 是倒數第二個元素。

## 3.4.3 修改列表
您可以直接透過索引來修改列表內容：
```python
numbers[0] = 111  # 將第一個元素改為 111
del numbers[1]     # 刪除索引為 1 的元素
```

## 3.4.4 列表常用函式與方法
*   **`len(list)`**：獲取列表的長度（元素個數）。
*   **`list.append(value)`**：在列表**末尾**新增一個元素。
*   **`list.insert(index, value)`**：在**指定位置**插入一個元素，後方的元素會往後移。

```python
my_list = []
my_list.append(1)  # [1]
my_list.insert(0, 2) # [2, 1]
```

## 3.4.5 遍歷列表 (Iteration)
使用 `for` 迴圈可以輕鬆走訪列表中的每個元素：
```python
my_list = [10, 1, 8, 3, 5]
for i in my_list:
    print(i)
```

## 3.4 本節測驗

<Quiz 
  question="1. my_list = [1, 2, 3]; print(my_list[-1]) 的輸出是什麼？" 
  :options="['1', '3', 'SyntaxError']" 
  :answer="1" 
/>

<Quiz 
  question="2. 想要在列表的最末端加入一個新元素，應該使用哪一個方法？" 
  :options="['add()', 'insert()', 'append()']" 
  :answer="2" 
/>

<Quiz 
  question="3. len([10, 20, 30]) 的結果是多少？" 
  :options="['2', '3', '4']" 
  :answer="1" 
/>
