# 第 4.7 節 – 例外處理 (Exceptions)

歡迎來到本課程的最後一節！在本節中，您將學習 Python 的例外處理機制，了解如何防止程式因為錯誤而突然中斷。

## 4.7.1 錯誤是開發者的日常

沒有人能寫出完全沒有錯誤的程式碼。在 Python 中，當程式發生非預期的錯誤時，會拋出一個「例外 (Exception)」。

## 4.7.2 try-except 結構

Python 建議「與其事先檢查，不如事後處理錯誤」。我們使用 `try-except` 來攔截錯誤。

```python
try:
    value = int(input('請輸入一個整數：'))
    print('倒數是：', 1 / value)
except ValueError:
    print('錯誤：請輸入數字，不要輸入文字。')
except ZeroDivisionError:
    print('錯誤：除數不能為零。')
except:
    print('發生了未知的錯誤。')
```

**運作邏輯：**
1.  **`try` 區塊**：放置可能出錯的程式碼。
2.  **`except` 區塊**：如果 `try` 內發生對應的錯誤，程式會跳到這裡執行，而不會崩潰。

## 4.7.3 常見的例外型別
*   **`ZeroDivisionError`**：除以零時發生。
*   **`ValueError`**：傳入的值不符合函式期待（如將文字轉為數字）。
*   **`TypeError`**：操作了錯誤的型別（如將數字當作列表索引）。
*   **`AttributeError`**：呼叫了物件不存在的方法。

## 4.7 本節測驗

<Quiz 
  question="1. try-except 的主要目的是什麼？" 
  :options="['加速程式執行', '防止程式因為錯誤而崩潰', '自動修復程式碼中的邏輯錯誤']" 
  :answer="1" 
/>

<Quiz 
  question="2. 如果多個 except 區塊中包含一個沒有指定名稱的 except:，它應該放在哪裡？" 
  :options="['放在最前面', '放在中間', '必須放在最後面']" 
  :answer="2" 
/>

<Quiz 
  question="3. 1 / 0 會觸發哪一種例外？" 
  :options="['ValueError', 'TypeError', 'ZeroDivisionError']" 
  :answer="2" 
/>
