# 第 4.2 節 – 函式與環境的溝通

在本節中，您將學習如何撰寫帶有參數的函式，以及如何向它們傳遞資料。

## 4.2.1 帶參數的函式 (Parameterized Functions)

函式的強大之處在於它可以接收外部提供的資料。這些資料稱為**參數 (Parameters)**。

*   **參數 (Parameters)**：定義在函式內部，像是函式的專屬變數。
*   **引數 (Arguments)**：在呼叫函式時，實際傳遞進去的值。

```python
def message(number):
    print("輸入的數字是：", number)

message(1)  # '1' 就是引數，傳遞給參數 'number'
```

## 4.2.2 參數傳遞方式

### 1. 位置引數 (Positional Arguments)
引數的順序必須與定義時的參數順序一致。
```python
def introduction(first_name, last_name):
    print("你好，我是", first_name, last_name)

introduction("Luke", "Skywalker")
```

### 2. 關鍵字引數 (Keyword Arguments)
明確指定哪個值給哪個參數，順序就不重要了。
```python
introduction(last_name="Skywalker", first_name="Luke")
```

### 3. 預設參數 (Default Parameters)
您可以為參數提供一個預設值，如果呼叫時沒傳入該參數，就會使用預設值。
```python
def introduction(first_name, last_name="Smith"):
    print("你好，我是", first_name, last_name)

introduction("James")  # 輸出：你好，我是 James Smith
```

## 4.2.3 重要的規則
**位置引數必須放在關鍵字引數之前**。
```python
# 正確
my_function(10, b=20)
# 錯誤 (SyntaxError)
# my_function(a=10, 20)
```

## 4.2 本節測驗

<Quiz 
  question="1. 定義函式時寫在括號內的變數稱為？" 
  :options="['引數 (Argument)', '參數 (Parameter)', '全域變數']" 
  :answer="1" 
/>

<Quiz 
  question="2. 在呼叫函式時，使用 name='James' 這種方式傳遞值，稱為？" 
  :options="['位置引數', '關鍵字引數', '預設引數']" 
  :answer="1" 
/>

<Quiz 
  question="3. 如果函式定義為 def hi(name='Guest'):，呼叫 hi() 的結果是？" 
  :options="['報錯', '輸出 Hi, Guest', '什麼都不輸出']" 
  :answer="1" 
/>
