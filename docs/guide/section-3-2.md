# 第 3.2 節 – Python 中的迴圈

在此您將學習 Python 中的迴圈，特別是 `while` 和 `for` 迴圈。您將學習如何建立（以及如何避免）無窮迴圈、如何跳出迴圈以及跳過特定的迭代。

## 3.2.1 while 迴圈

`while` 迴圈會在條件成立（為 True）時，重複執行其內部的程式碼區塊。

```python
while 條件:
    指令
```

**範例：找出最大數**
```python
largest_number = -999999999
number = int(input("輸入數字（輸入 -1 停止）："))

while number != -1:
    if number > largest_number:
        largest_number = number
    number = int(input("輸入數字（輸入 -1 停止）："))

print("最大的數字是：", largest_number)
```

## 3.2.2 無窮迴圈 (Infinite Loop)

如果迴圈的條件永遠為真，它就會永無止境地執行下去。
```python
while True:
    print("我卡在迴圈裡了。")
```
> **提示**：在終端機中，您可以按 `Ctrl+C` 來強制終止執行中的無窮迴圈。

## 3.2.3 for 迴圈與 range() 函式

如果您知道程式碼需要執行確定的次數，`for` 迴圈是更好的選擇。它通常與 `range()` 函式搭配使用。

```python
for i in range(5):
    print("目前 i 的值是", i)
```
這會輸出 0 到 4（不包含 5）。

### range() 的多種用法
*   **`range(stop)`**：從 0 開始，到 `stop - 1` 結束。
*   **`range(start, stop)`**：從 `start` 開始，到 `stop - 1` 結束。
*   **`range(start, stop, step)`**：從 `start` 開始，每次增加 `step`，直到 `stop` 之前結束。

## 3.2.4 break 與 continue 語句

這兩個指令可以改變迴圈的正常流程：
*   **`break`**：立即結束並跳出整個迴圈。
*   **`continue`**：停止當前的這一次執行，直接跳到下一次迴圈的開始。

```python
for i in range(1, 6):
    if i == 3:
        break  # 當 i 等於 3 時，直接結束迴圈
    print(i)
```

## 3.2 本節測驗

<Quiz 
  question="1. for i in range(2, 5) 會產生哪些數字？" 
  :options="['2, 3, 4, 5', '2, 3, 4', '0, 1, 2, 3, 4']" 
  :answer="1" 
/>

<Quiz 
  question="2. 想要在迴圈中跳過當前這一次，直接進入下一個回合，應該使用哪一個關鍵字？" 
  :options="['break', 'skip', 'continue']" 
  :answer="2" 
/>

<Quiz 
  question="3. while True: 建立的是哪一種迴圈？" 
  :options="['執行一次的迴圈', '無窮迴圈', '語法錯誤']" 
  :answer="1" 
/>
