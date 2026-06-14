# 第 3.7 節 – 列表的高階應用

在本節中，您將學習陣列、巢狀列表（矩陣）以及**列表推導式 (List Comprehensions)**。

## 3.7.1 列表推導式 (List Comprehensions)

列表推導式是 Python 一種簡潔且優雅的語法，用於快速建立列表。

```python
# 建立一個包含 0 到 9 平方的列表
squares = [x ** 2 for x in range(10)]
# 結果: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# 建立一個包含 0 到 9 之間奇數平方的列表
odds = [x ** 2 for x in range(10) if x % 2 != 0]
```

## 3.7.2 二維陣列 (矩陣)

列表的元素也可以是另一個列表，這就形成了二維陣列。最常見的例子是**西洋棋盤**或**溫度記錄表**。

### 建立棋盤
```python
EMPTY = "-"
board = [[EMPTY for i in range(8)] for j in range(8)]
```

### 存取元素
存取二維陣列需要兩個索引：第一個代表**列 (Row)**，第二個代表**欄 (Column)**。
```python
board[0][0] = "ROOK"  # 在左上角放一個城堡
```

## 3.7.3 多維陣列

Python 對於列表巢狀的深度沒有限制。您可以建立三維甚至更高維度的陣列。
例如：一間由 3 棟建築、每棟 15 層、每層 20 個房間組成的飯店。
```python
rooms = [[[False for r in range(20)] for f in range(15)] for t in range(3)]
```

## 3.7 本節測驗

<Quiz 
  question="1. [x for x in range(3)] 的結果是什麼？" 
  :options="['[1, 2, 3]', '[0, 1, 2]', '[0, 1, 2, 3]']" 
  :answer="1" 
/>

<Quiz 
  question="2. 如何存取二維列表 my_list 的第一列第二個元素？" 
  :options="['my_list[1][2]', 'my_list[0][1]', 'my_list[1, 2]']" 
  :answer="1" 
/>

<Quiz 
  question="3. 列表推導式主要用於？" 
  :options="['刪除列表', '簡潔地建立新列表', '排序列表']" 
  :answer="1" 
/>
