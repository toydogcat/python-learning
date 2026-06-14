# 第 2.6 節 – 與使用者互動

在本節中，您將學習如何與電腦交談：您將熟悉 `input()` 函式、執行型別轉換，並學習如何使用字串運算子。

## 2.6.1 input() 函式

`print()` 函式將資料傳送到主控台，而 `input()` 函式則從主控台獲取資料。

```python
print("告訴我任何事...")
anything = input()
print("嗯...", anything, "... 真的嗎？")
```

**運作方式**：
1. 當程式執行到 `input()` 時，它會暫停並等待使用者輸入。
2. 使用者輸入文字並按下 **Enter** 鍵。
3. `input()` 函式會將輸入的內容作為**字串 (String)** 回傳。
4. **重要**：您必須將結果賦值給一個變數，否則輸入的資料會遺失。

## 2.6.2 帶有參數的 input() 函式

您可以在 `input()` 的括號中加入提示訊息，這樣就不需要另外使用 `print()` 了。

```python
anything = input("告訴我任何事...")
print("嗯...", anything, "...真的嗎？")
```

## 2.6.3 input() 的結果永遠是字串

這是初學者最容易犯錯的地方：**`input()` 回傳的結果永遠是字串**，即使您輸入的是數字。
如果您嘗試對它進行數學運算，會產生 `TypeError`。

```python
anything = input("輸入一個數字: ")
something = anything ** 2.0  # 這會報錯！因為 anything 是字串
```

## 2.6.4 型別轉換 (Type Casting)

為了處理輸入的數字，我們需要使用轉換函式：
*   **`int()`**：將字串轉換為整數。
*   **`float()`**：將字串轉換為浮點數。

```python
anything = float(input("輸入一個數字: "))
something = anything ** 2.0
print(anything, "的平方是", something)
```

## 2.6.5 字串運算子

字串也可以進行「運算」，但意義與數字不同：

### 字串串接 (Concatenation)
使用 `+` 號將兩個字串「黏」在一起。
```python
fnam = input("名字: ")
lnam = input("姓氏: ")
print("您的全名是 " + lnam + fnam)
```

### 字串重複 (Replication)
使用 `*` 號將字串重複多次。
```python
print("James" * 3)  # 輸出: JamesJamesJames
```

## 2.6 本節測驗

<Quiz 
  question="1. input() 函式回傳的資料型別是什麼？" 
  :options="['整數 (Integer)', '浮點數 (Float)', '字串 (String)']" 
  :answer="2" 
/>

<Quiz 
  question="2. 如何將使用者的輸入轉換為整數？" 
  :options="['int(input())', 'float(input())', 'str(input())']" 
  :answer="0" 
/>

<Quiz 
  question="3. '2' * 3 的結果是什麼？" 
  :options="['6', '222', 'SyntaxError']" 
  :answer="1" 
/>
