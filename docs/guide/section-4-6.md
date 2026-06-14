# 第 4.6 節 – 元組與字典 (Tuples and Dictionaries)

在本節中，您將學習 Python 的另外兩種重要資料結構：元組與字典。

## 4.6.1 可變性 (Mutability)

在深入學習之前，我們必須區分兩個概念：
*   **可變 (Mutable)**：資料建立後可以被修改（例如：列表 List）。
*   **不可變 (Immutable)**：資料一旦建立就不能修改（例如：元組 Tuple）。

## 4.6.2 元組 (Tuples)

元組是一種**不可變**的序列型別。

```python
# 使用小括號定義
my_tuple = (1, 2, 4, 8)

# 存取方式與列表相同
print(my_tuple[0])  # 1

# 注意：不可修改！
# my_tuple[0] = 0  # 這會報錯 (TypeError)
```

**單元素元組**：如果您只想建立包含一個元素的元組，必須加上逗號：`one_tup = (1, )`。

## 4.6.3 字典 (Dictionaries)

字典是一種**可變**的、**鍵值對 (Key-Value pairs)** 結構。它不是序列，而是透過「鍵 (Key)」來找「值 (Value)」。

```python
dictionary = {
    "cat": "chat",
    "dog": "chien",
    "horse": "cheval"
}

# 存取值
print(dictionary["cat"])  # chat
```

### 常用字典方法
*   **`keys()`**：獲取所有鍵。
*   **`values()`**：獲取所有值。
*   **`items()`**：獲取所有鍵值對（元組形式）。
*   **`update()`**：新增或更新字典。

## 4.6 本節測驗

<Quiz 
  question="1. 列表 (List) 與元組 (Tuple) 最大的差別在於？" 
  :options="['儲存的內容型別', '括號的形狀', '可變性 (Mutability)']" 
  :answer="2" 
/>

<Quiz 
  question="2. 字典中每一筆資料是由什麼組成的？" 
  :options="['索引與值', '鍵與值 (Key-Value)', '只有值']" 
  :answer="1" 
/>

<Quiz 
  question="3. 嘗試修改元組中的元素會發生什麼事？" 
  :options="['正常修改', '靜默失敗（無反應）', '發生 TypeError 錯誤']" 
  :answer="2" 
/>
