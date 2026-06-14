xml version='1.0' encoding='utf-8'?





Section 4.2 – How functions communicate with their environment

In this section, you will learn about parameterless and parameterized functions, as well as how to write one-, two- and three-parameter functions and pass arguments to them. Let's begin!

4.2.1 Parameterized functions

The function's full power reveals itself when it can be equipped with an interface that is able to accept data provided by the invoker. Such data can modify the function's behavior, making it more flexible and adaptable to changing conditions.

A parameter is actually a variable, but there are two important factors that make parameters different and special:

* parameters exist only inside functions in which they have been defined, and the only place where the parameter can be defined is a space between a pair of parentheses in the def statement;
* assigning a value to the parameter is done at the time of the function's invocation, by specifying the corresponding argument.

def function(parameter):

###

Don't forget:

* parameters live inside functions (this is their natural environment)
* arguments exist outside functions, and are carriers of values passed to corresponding parameters.

There is a clear and unambiguous frontier between these two worlds.

Let's enrich the function with just one parameter ‒ we're going to use it to show the user the number of a value the function asks for.

We have to rebuild the def statement ‒ this is what it looks like now:

def message(number):

###

The definition specifies that our function operates on just one parameter named number. You can use it as an ordinary variable, but only inside the function ‒ it isn't visible anywhere else.

Let's now improve the function's body:

1. def message(number):
2. print("Enter a number:", number)

We've made use of the parameter. Note: we haven't assigned the parameter with any value. Is it correct?

Yes, it is.

A value for the parameter will arrive from the function's environment.

Remember: specifying one or more parameters in a function's definition is also a requirement, and you have to fulfil it during invocation. You must provide as many arguments as there are defined parameters.

Failure to do so will cause an error.

Try to run the code.

This is what you'll see in the console:

TypeError: message() missing 1 required positional argument: 'number'

This looks better, for sure:

1. def message(number):
2. print("Enter a number:", number)
3. message(1)

Moreover, it behaves better. The code will produce the following output:

Enter a number: 1

Can you see how it works? The value of the argument used during invocation (1) has been passed into the function, setting the initial value of the parameter named number.

We have to make you sensitive to one important circumstance.

It's legal, and possible, to have a variable named the same as a function's parameter.

The snippet illustrates the phenomenon:

1. def message(number):
2. print("Enter a number:", number)
3. number = 1234
4. message(1)
5. print(number)

A situation like this activates a mechanism called shadowing:

* parameter x shadows any variable of the same name, but…
* … only inside the function defining the parameter.

The parameter named number is a completely different entity from the variable named number.

This means that the previous snippet will produce the following output:

Enter a number: 1

1234

A function can have as many parameters as you want, but the more parameters you have, the harder it is to memorize their roles and purposes.

Let's modify the function ‒ it has two parameters now:

def message(what, number):

print("Enter", what, "number", number)

This also means that invoking the function will require two arguments.

The first new parameter is intended to carry the name of the desired value.

Here it is:

1. def message(what, number):
2. print("Enter", what, "number", number)
3. message("telephone", 11)
4. message("price", 5)
5. message("number", "number")

This is the output you're about to see:

Enter telephone number 11

Enter price number 5

Enter number number number

Run the code, modify it, add more parameters, and see how this affects the output.

4.2.2 Positional parameter passing

A technique which assigns the ith (first, second, and so on) argument to the ith (first, second, and so on) function parameter is called positional parameter passing, while arguments passed in this way are named positional arguments.

You've used it already, but Python can offer a lot more. We're going to tell you about it now.

1. def my\_function(a, b, c):
2. print(a, b, c)
4. my\_function(1, 2, 3)

Note: positional parameter passing is intuitively used by people in many social occasions. For example, it may be generally accepted that when we introduce ourselves we mention our first name(s) before our last name, e.g. "My name's John Doe."

Incidentally, Hungarians do it in reverse order.

Let's implement that social custom in Python. The following function will be responsible for introducing somebody:

1. def introduction(first\_name, last\_name):
2. print("Hello, my name is", first\_name, last\_name)
4. introduction("Luke", "Skywalker")
5. introduction("Jesse", "Quick")
6. introduction("Clark", "Kent")

Can you guess the output? Run the code and find out if you're right.

Now imagine that the same function is being used in Hungary. In this case, the code would look like this:

1. def introduction(first\_name, last\_name):
2. print("Hello, my name is", first\_name, last\_name)
4. introduction("Skywalker", "Luke")
5. introduction("Quick", "Jesse")
6. introduction("Kent", "Clark")

The output will look different. Can you guess it?

Run the code to see if you're right here, too. Are you surprised?

Can you make the function more culture-independent?

4.2.3 Keyword argument passing

Python offers another convention for passing arguments, where the meaning of the argument is dictated by its name, not by its position ‒ it's called keyword argument passing.

Take a look at the snippet:

1. def introduction(first\_name, last\_name):
2. print("Hello, my name is", first\_name, last\_name)
4. introduction(first\_name = "James", last\_name = "Bond")
5. introduction(last\_name = "Skywalker", first\_name = "Luke")

The concept is clear ‒ the values passed to the parameters are preceded by the target parameters' names, followed by the = sign.

The position doesn't matter here ‒ each argument's value knows its destination on the basis of the name used.

You should be able to predict the output. Run the code to check if you're right.

Of course, you mustn't use a non-existent parameter name.

The following snippet will cause a runtime error:

1. def introduction(first\_name, last\_name):
2. print("Hello, my name is", first\_name, last\_name)
4. introduction(surname="Skywalker", first\_name="Luke")

This is what Python will tell you:

TypeError: introduction() got an unexpected keyword argument 'surname'

Try it out yourself.

4.2.4 Mixing positional and keyword arguments

You can mix both styles if you want ‒ there is only one unbreakable rule: you have to put positional arguments before keyword arguments.

If you think for a moment, you'll certainly guess why.

To show you how it works, we'll use the following simple three-parameter function:

1. def adding(a, b, c):
2. print(a, "+", b, "+", c, "=", a + b + c)

Its purpose is to evaluate and present the sum of all its arguments.

The function, when invoked in the following way:

1. adding(1, 2, 3)

will output:

1 + 2 + 3 = 6

It was ‒ as you may suspect ‒ a pure example of positional argument passing.

Of course, you can replace such an invocation with a purely keyword variant, like this:

1. adding(c = 1, a = 2, b = 3)

Our program will output a line like this:

2 + 3 + 1 = 6

Note the order of the values.

Let's try to mix both styles now.

Look at the following function invocation:

1. adding(3, c = 1, b = 2)

Let's analyze it:

* the argument (3) for the a parameter is passed using the positional way;
* the arguments for c and b are specified as keyword ones.

This is what you'll see in the console:

3 + 2 + 1 = 6

Be careful, and beware of mistakes. If you try to pass more than one value to one argument, all you'll get is a runtime error.

Look at the following invocation – it seems that we've tried to set a twice:

1. adding(3, a = 1, b = 2)

Python's response:

TypeError: adding() got multiple values for argument 'a'

Look at the following snippet. A code like this is fully correct, but it doesn't make much sense:

1. adding(4, 3, c = 2)

Everything is right, but leaving in just one keyword argument looks a bit weird ‒ what do you think?

4.2.5 Parametrized functions – more details

It happens at times that a particular parameter's values are in use more often than others. Such arguments may have their default (predefined) values taken into consideration when their corresponding arguments have been omitted.

They say that the most popular English last name is Smith. Let's try to take this into account.

The default parameter's value is set using clear and pictorial syntax:

1. def introduction(first\_name, last\_name="Smith"):
2. print("Hello, my name is", first\_name, last\_name)

You only have to extend the parameter's name with the = sign, followed by the default value.

Let's invoke the function as usual:

1. introduction("James", "Doe")

Can you guess the output of the program? Run it and check if you're right.

And? Everything looks the same, but when you invoke the function in a way that looks a bit suspicious at first sight, like this:

1. introduction("Henry")

or this:

1. introduction(first\_name="William")

there will be no error, and both invocations will succeed, while the console will show the following output:

Hello, my name is Henry Smith

Hello, my name is William Smith

Test it.

You can go further if it's useful. Both parameters have their default values now, look at the following code:

1. def introduction(first\_name="John", last\_name="Smith"):
2. print("Hello, my name is", first\_name, last\_name)

This makes the following invocation absolutely valid:

1. introduction()

And this is the expected output:

Hello, my name is John Smith

If you use one keyword argument, the remaining one will take the default value:

1. introduction(last\_name="Hopkins")

The output is:

Hello, my name is John Hopkins

Test it.

Congratulations ‒ you have just learned some basic techniques for communicating with functions.

4.2 SECTION SUMMARY

1. You can pass information to functions by using parameters. Your functions can have as many parameters as you need.

An example of a one-parameter function:

1. def hi(name):
2. print("Hi,", name)
4. hi("Greg")

An example of a two-parameter function:

1. def hi\_all(name\_1, name\_2):
2. print("Hi,", name\_2)
3. print("Hi,", name\_1)
5. hi\_all("Sebastian", "Konrad")

An example of a three-parameter function:

1. def address(street, city, postal\_code):
2. print("Your address is:", street, "St.,", city, postal\_code)
4. s = input("Street: ")
5. p\_c = input("Postal Code: ")
6. c = input("City: ")
7. address(s, c, p\_c)

2. You can pass arguments to a function using the following techniques:

* positional argument passing in which the order of arguments passed matters (Ex. 1)
* keyword (named) argument passing in which the order of arguments passed doesn't matter (Ex. 2)
* a mix of positional and keyword argument passing (Ex. 3.)

1. Ex. 1
2. def subtra(a, b):
3. print(a – b)
5. subtra(5, 2) # outputs: 3
6. subtra(2, 5) # outputs: -3

9. Ex. 2
10. def subtra(a, b):
11. print(a – b)
13. subtra(a=5, b=2) # outputs: 3
14. subtra(b=2, a=5) # outputs: 3
16. Ex. 3
17. def subtra(a, b):
18. print(a – b)
20. subtra(5, b=2) # outputs: 3
21. subtra(5, 2) # outputs: 3

It's important to remember that positional arguments mustn't follow keyword arguments. That's why if you try to run the following snippet:

1. def subtra(a, b):
2. print(a – b)
4. subtra(5, b=2) # outputs: 3
5. subtra(a=5, 2) # Syntax Error

Python will not let you do it by signaling a SyntaxError.

3. You can use the keyword argument-passing technique to pre-define a value for a given argument:

1. def name(first\_name, last\_name="Smith"):
2. print(first\_name, last\_name)
4. name("Andy") # outputs: Andy Smith
5. name("Betty", "Johnson") # outputs: Betty Johnson (the keyword argument replaced by "Johnson")

4.2 SECTION QUIZ

Question 1: What is the output of the following snippet?

1. def intro(a="James Bond", b="Bond"):
2. print("My name is"".", a + ".")
4. intro()

Question 2: What is the output of the following snippet?

1. def intro(a="James Bond", b="Bond"):
2. print("My name is", b + ".", a + ".")
4. intro(b="Sean Connery")

Question 3: What is the output of the following snippet?

1. def intro(a, b="Bond"):
2. print("My name is", b + ".", a + ".")
4. intro("Susan")

Question 4: What is the output of the following snippet?

1. def add\_numbers(a, b=2, c):
2. print(a + b + c)
4. add\_numbers(a=1, c=3)

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor371)

Section 4.3 – Returning a result from a function

In this part of the course, you will learn about the effects and results of functions, the return expression, and the None value. You will also learn how to pass lists as function arguments, how to return lists as function results, and how to assign function results to variables. Let's go!

4.3.1 Effects and results: the return instruction

All the previously presented functions have some kind of effect ‒ they produce some text and send it to the console.

Of course, functions ‒ like their mathematical siblings ‒ may have results.

To get functions to return a value (but not only for this purpose) you use the return instruction.

This word gives you a full picture of its capabilities. Note: it's a Python keyword.

The return instruction has two different variants ‒ let's consider them separately.

return without an expression

Let's consider the following function:

1. def happy\_new\_year(wishes = True):
2. print("Three…")
3. print("Two…")
4. print("One…")
5. if not wishes:
6. return
8. print("Happy New Year!")

When invoked without any arguments:

happy\_new\_year()

the function causes a little noise ‒ the output will look like this:

Three…

Two…

One…

Happy New Year!

Providing False as an argument:

happy\_new\_year(False)

will modify the function's behavior ‒ the return instruction will cause its termination just before the wishes ‒ this is the updated output:

Three…

Two…

One…

return with an expression

The second return variant is extended with an expression:

1. def function():
2. return expression

There are two consequences of using it:

* it causes the immediate termination of the function's execution (nothing new compared to the first variant)
* moreover, the function will evaluate the expression's value and will return it (hence the name once again) as the function's result.

Yes, we already know ‒ this example isn't really sophisticated:

1. def boring\_function():
2. return 123
4. x = boring\_function()
6. print("The boring\_function has returned its result. It's:", x)

The snippet writes the following text to the console:

The boring\_function has returned its result. It's:

123

Let's investigate it for a while.

Analyze this figure:

The return instruction, enriched with the expression (the expression is very simple here), "transports" the expression's value to the place where the function has been invoked.

The result may be freely used here, e.g. to be assigned to a variable.

It may also be completely ignored and lost without a trace.

Note: we're not being too polite here — the function returns a value, and we ignore it (we don't use it in any way):

1. def boring\_function():
2. print("'Boredom Mode' ON!")
3. return(123)
5. print("This lesson is interesting!")
6. boring\_function()
7. print("This lesson is boring!")

The program produces the following output:

This lesson is interesting!

'Boredom Mode' ON.

This lesson is boring…

Is it punishable? Not at all.

The only disadvantage is that the result has been irretrievably lost.

Don't forget:

* you are always allowed to ignore the function's result, and be satisfied with the function's effect (if the function has any)
* if a function is intended to return a useful result, it must contain the second variant of the return instruction.

Wait a minute ‒ does this mean that there are useless results, too? Yes, in some sense.

4.3.2 A few words about None

Let us introduce you to a very curious value (to be honest, a none value) named None.

Its data doesn't represent any reasonable value ‒ actually, it's not a value at all; hence, it mustn't take part in any expressions.

For example, a snippet like this:

print(None + 2)

will cause a runtime error, described by the following diagnostic message:

TypeError: unsupported operand type(s) for +:

 'NoneType' and 'int'

NOTE None is a keyword.

There are only two kinds of circumstances when None can be safely used:

* when you assign it to a variable (or return it as a function's result)
* when you compare it with a variable to diagnose its internal state.

Just like here:

1. value = None
2. if value is None:
3. print("Sorry, you don't carry any value")

Don't forget this: if a function doesn't return a certain value using a return expression clause, it is assumed that it implicitly returns None.

Let's test it.

Take a look at the following code.

1. def strange\_function(n):
2. if(n % 2 == 0):
3. return True

It's obvious that the strange\_function function returns True when its argument is even.

What does it return otherwise?

We can use the following code to check it:

1. print(strange\_function(2))
2. print(strange\_function(1))

This is what we see in the console:

True

None

Don't be surprised next time you see None as a function result ‒ it may be the symptom of a subtle mistake inside the function.

4.3.3 Effects and results: lists and functions

There are two additional questions that should be answered here.

The first is: may a list be sent to a function as an argument?

Of course it may! Any entity recognizable by Python can play the role of a function argument, although it has to be assured that the function is able to cope with it.

So, if you pass a list to a function, the function has to handle it like a list.

A function like this one here:

1. def list\_sum(lst):
2. s = 0
4. for elem in lst:
5. s += elem
7. return s

and invoked like this:

print(list\_sum([5, 4, 3]))

will return 12 as a result, but you should expect problems if you invoke it in this risky way:

print(list\_sum(5))

Python's response will be unequivocal:

TypeError: 'int' object is not iterable

This is caused by the fact that a single integer value mustn't be iterated through by the for loop.

The second question is: may a list be a function result?

Yes, of course! Any entity recognizable by Python can be a function result.

Look at the following code:

1. def strange\_list\_fun(n):
2. strange\_list = []
4. for i in range(0, n):
5. strange\_list.insert(0, i)
7. return strange\_list
8. print(strange\_list\_fun(5))

The program's output will look like this:

[4, 3, 2, 1, 0]

Now you can write functions with and without results.

Let's dive a little deeper into the issues connected with variables in functions. This is essential for creating effective and safe functions.

LAB 26 A leap year: writing your own functions

Your task is to write and test a function which takes one argument (a year) and returns True if the year is a leap year, or False otherwise.

The seed of the function is already sown in the following skeleton code.

Note: we've also prepared a short testing code, which you can use to test your function.

The code uses two lists ‒ one with the test data, and the other containing the expected results. The code will tell you if any of your results are invalid.

Code

1. def is\_year\_leap(year):
2. #
3. # Write your code here.
4. #
6. test\_data = [1900, 2000, 2016, 1987]
7. test\_results = [False, True, True, False]
8. for i in range(len(test\_data)):
9. yr = test\_data[i]
10. print(yr,"-&gt;",end="")
11. result = is\_year\_leap(yr)
12. if result == test\_results[i]:
13. print("OK")
14. else:
15. print("Failed")

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor315)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor345)

LAB 27 How many days: writing and using your own functions

Your task is to write and test a function which takes two arguments (a year and a month) and returns the number of days for the given year-month pair (while only February is sensitive to the year value, your function should be universal).

The initial part of the function is ready. Now, convince the function to return None if its arguments don't make sense.

Of course, you can (and should) use the previously written and tested function (LAB 26). It may be very helpful. We encourage you to use a list filled with the months' lengths. You can create it inside the function ‒ this trick will significantly shorten the code.

We've prepared a testing code. Expand it to include more test cases.

Code

1. def is\_year\_leap(year):
2. #
3. # Your code from the previous LAB.
4. #
6. def days\_in\_month(year, month):
7. #
8. # Write your new code here.
9. #
11. test\_years = [1900, 2000, 2016, 1987]
12. test\_months = [2, 2, 1, 11]
13. test\_results = [28, 29, 31, 30]
14. for i in range(len(test\_years)):
15. yr = test\_years[i]
16. mo = test\_months[i]
17. print(yr, mo, "-&gt;", end="")
18. result = days\_in\_month(yr, mo)
19. if result == test\_results[i]:
20. print("OK")
21. else:
22. print("Failed")

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor316)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor346)

LAB 28 Day of the year: writing and using your own functions

Your task is to write and test a function which takes three arguments (a year, a month, and a day of the month) and returns the corresponding day of the year, or returns None if any of the arguments is invalid.

Use the previously written and tested functions. Add your own test cases to the code.

Code

1. def is\_year\_leap(year):
2. #
3. # Your code from the previous lab.
4. #
6. def days\_in\_month(year, month):
7. #
8. # Your code from the previous lab.
9. #
11. def day\_of\_year(year, month, day):
12. #
13. # Write your new code here.
14. #
16. print(day\_of\_year(2000, 12, 31))

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor317)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor347)

LAB 29 Prime numbers ‒ how to find them

A natural number is prime if it is greater than 1 and has no divisors other than 1 and itself.

Complicated? Not at all. For example, 8 isn't a prime number, as you can divide it by 2 and 4 (we can't use divisors equal to 1 and 8, as the definition prohibits this).

On the other hand, 7 is a prime number, as we can't find any legal divisors for it.

Your task is to write a function checking whether a number is prime or not.

The function:

* is called is\_prime;
* takes one argument (the value to check)
* returns True if the argument is a prime number, and False otherwise.

Hint: try to divide the argument by all subsequent values (starting from 2) and check the remainder ‒ if it's zero, your number cannot be a prime; think carefully about when you should stop the process.

If you need to know the square root of any value, you can utilize the \*\* operator. Remember: the square root of x is the same as x0.5.

Complete the code.

Run your code and check whether your output is the same as ours.

Expected output:

2 3 5 7 11 13 17 19

Code

1. def is\_prime(num):
2. #
3. # Write your code here.
4. #
6. for i in range(1, 20):
7. if is\_prime(i + 1):
8. print(i + 1, end=" ")
9. print()

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor318)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor348)

LAB 30 Converting fuel consumption

A car's fuel consumption may be expressed in many different ways. For example, in Europe, it is shown as the amount of fuel consumed per 100 kilometers.

In the USA, it is shown as the number of miles traveled by a car using one gallon of fuel.

Your task is to write a pair of functions converting l/100km into mpg, and vice versa.

The functions:

* are named liters\_100km\_to\_miles\_gallon and miles\_gallon\_to\_liters\_100km respectively;
* take one argument (the value corresponding to their names)

Complete the following code and run it to check whether your output is the same as ours.

Here is some information to help you:

* 1 American mile = 1609.344 meters;
* 1 American gallon = 3.785411784 liters.

Expected output:

60.31143162393162

31.36194444444444

23.52145833333333

3.9007393587617467

7.490910297239916

10.009131205673757

Code

1. def liters\_100km\_to\_miles\_gallon(liters):
2. #
3. &lt;    # Write your code here.
4. #
6. def miles\_gallon\_to\_liters\_100km(miles):
7. #
8. # Write your code here.
9. #
11. print(liters\_100km\_to\_miles\_gallon(3.9))
12. print(liters\_100km\_to\_miles\_gallon(7.5))
13. print(liters\_100km\_to\_miles\_gallon(10.))
14. print(miles\_gallon\_to\_liters\_100km(60.3))
15. print(miles\_gallon\_to\_liters\_100km(31.4))
16. print(miles\_gallon\_to\_liters\_100km(23.5))

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor319)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor349)

4.3 SECTION SUMMARY

1. You can use the return keyword to tell a function to return some value. The return statement exits the function, e.g.:

1. def multiply(a, b):
2. return a \* b
4. print(multiply(3, 4)) # outputs: 12

7. def multiply(a, b):
8. return
10. print(multiply(3, 4)) # outputs: None

2. The result of a function can be easily assigned to a variable, e.g.:

1. def wishes():
2. return "Happy Birthday!"
4. w = wishes()
6. print(w) # outputs: Happy Birthday!

Look at the difference in output in the following two examples:

1. # Example 1
2. def wishes():
3. print("My Wishes")
4. return "Happy Birthday"
6. wishes() # outputs: My Wishes

9. # Example 2
10. def wishes():
11. print("My Wishes")
12. return "Happy Birthday"
14. print(wishes())
16. # outputs: My Wishes
17. # Happy Birthday

3. You can use a list as a function's argument, e.g.:

1. def hi\_everybody(my\_list):
2. for name in my\_list:
3. print("Hi,", name)
5. hi\_everybody(["Adam", "John", "Lucy"])

4. A list can be a function result, too, e.g.:

1. def create\_list(n):
2. my\_list = []
3. for i in range(n):
4. my\_list.append(i)
5. return my\_list
7. print(create\_list(5))

4.3 SECTION QUIZ

Question 1: What is the output of the following snippet?

1. def hi():
2. return
3. print("Hi!")
5. hi()

Question 2: What is the output of the following snippet?

1. def is\_int(data):
2. if type(data) == int:
3. return True
4. elif type(data) == float:
5. return False
7. print(is\_int(5))
8. print(is\_int(5.0))
9. print(is\_int("5"))

Question 3: What is the output of the following snippet?

1. def even\_num\_lst(ran):
2. lst = []
3. for num in range(ran):
4. if num % 2 == 0:
5. lst.append(num)
6. return lst
8. print(even\_num\_lst(11))

Question 4: What is the output of the following snippet?

1. def list\_updater(lst):
2. upd\_list = []
3. for elem in lst:
4. elem \*\*= 2
5. upd\_list.append(elem)
6. return upd\_list
8. foo = [1, 2, 3, 4, 5]
9. print(list\_updater(foo))

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor372)

Section 4.4 – Scopes in Python

In this part of the course, you will learn about scopes in Python, and the global keyword. By the end of the section you will be able to distinguish between local and global variables, and know how to utilize the mechanism of namespaces in your programs.

4.4.1 Functions and scopes

Let's start with a definition:

The scope of a name (e.g. a variable name) is the part of a code where the name is properly recognizable.

For example, the scope of a function's parameter is the function itself. The parameter is inaccessible outside the function.

Let's check it. Look at the following code. What will happen when you run it?

1. def scope\_test():
2. x = 123

5. scope\_test()
6. print(x)

The program will fail when run. The error message will read:

NameError: name 'x' is not defined

This is to be expected.

We're going to conduct some experiments with you to show you how Python constructs scopes, and how you can use these to your benefit.

Let's start by checking whether or not a variable created outside any function is visible inside the functions. In other words, does a variable's name propagate into a function's body?

Look at the following code. Our guinea pig is there.

1. def my\_function():
2. print("Do I know that variable?", var)

5. var = 1
6. my\_function()
7. print(var)

The result of the test is positive ‒ the code outputs:

Do I know that variable? 1

1

The answer is: a variable existing outside a function has scope inside the function's body.

&lt; has a very important exception. Let's try to find it.

Let's make a smaange to the code:

1. def my\_function():
2. var = 2
3. print("Do I know that variable?", var)

6. var = 1
7. my\_function()
8. print(var)

The result has changed, too ‒ the code produces a slightly different output now:

Do I know that variable? 2

1

What's happened?

* the var variable created inside the function is not the same as when defined outside it ‒ it seems that there two different variables of the same name;
* moreover, the function's variable shadows the variable coming from the outside world.

We can make the previous rule more precise and adequate:

A variable existing outside a function has scope inside the function's body, excluding those which define a variable of the same name.

It also means that the scope of a variable existing outside a function is supported only when getting its value (reading). Assigning a value forces the creation of the function's own variable.

Make sure you understand this well and carry out your own experiments.

4.4.2 Functions and scopes: the global keyword

Hopefully, you should now have arrived at the following question: does this mean that a function is not able to modify a variable defined outside it? This would create a lot of discomfort.

Fortunately, the answer is no.

There's a special Python method which can extend a variable's scope in a way which includes the function's body (even if you want not only to read the values, but also to modify them).

Such an effect is caused by a keyword named global:

1. global name
2. global name1, name2, …

Using this keyword inside a function with the name (or names separated with commas) of a variable (or variables), forces Python to refrain from creating a new variable inside the function ‒ the one accessible from outside will be used instead.

In other words, this name becomes global (it has global scope, and it doesn't matter whether it's the subject of read or assign).

Look at the following code.

1. def my\_function():
2. global var
3. var = 2
4. print("Do I know that variable?", var)

7. var = 1
8. my\_function()
9. print(var)

We've added global to the function.

The code now outputs:

Do I know that variable?

2

This should be sufficient evidence to show that the global keyword does what it promises.

4.4.3 How the function interacts with its arguments

Now let's find out how the function interacts with its arguments.

The following code should teach you something. As you can see, the function changes the value of its parameter. Does the change affect the argument?

1. def my\_function(n):
2. print("I got", n)
3. n += 1
4. print("I have", n)

7. var = 1
8. my\_function(var)
9. print(var)

Run the program and check.

The code's output is:

I got 1

I have 2

1

The conclusion is obvious ‒ changing the parameter's value doesn't propagate outside the function (in any case, not when the variable is a scalar, like in the example).

This also means that a function receives the argument's value, not the argument itself. This is true for scalars.

Is it worth checking how it works with lists (do you recall the peculiarities of assigning list slices versus assigning lists as a whole?).

The following example will shed some light on the issue:

1. def my\_function(my\_list\_1):
2. print("Print #1:", my\_list\_1)
3. print("Print #2:", my\_list\_2)
4. my\_list\_1 = [0, 1]
5. print("Print #3:", my\_list\_1)
6. print("Print #4:", my\_list\_2)

9. my\_list\_2 = [2, 3]
10. my\_function(my\_list\_2)
11. print("Print #5:", my\_list\_2)

The code's output is:

Print #1: [2, 3]

Print #2: [2, 3]

Print #3: [0, 1]

Print #4: [2, 3]

Print #5: [2, 3]

It seems that the former rule still works.

Finally, can you see the difference in the example:

1. def my\_function(my\_list\_1):
2. print("Print #1:", my\_list\_1)
3. print("Print #2:", my\_list\_2)
4. del my\_list\_1[0] # Pay attention to this line.
5. print("Print #3:", my\_list\_1)
6. print("Print #4:", my\_list\_2)

9. my\_list\_2 = [2, 3]
10. my\_function(my\_list\_2)
11. print("Print #5:", my\_list\_2)

We don't change the value of the parameter my\_list\_1 (we already know it will not affect the argument), but instead modify the list identified by it.

The output may be surprising. Run the code and check:

Print #1: [2, 3]

Print #2: [2, 3]

Print #3: [3]

Print #4: [3]

Print #5: [3]

Can you explain it?

Let's try:

* if the argument is a list, then changing the value of the corresponding parameter doesn't affect the list (remember: variables containing lists are stored in a different way than scalars)
* but if you change a list identified by the parameter (note: the list, not the parameter!), the list will reflect the change.

It's time to write some example functions. You'll do that in the next section.

4.4 SECTION SUMMARY

1. A variable that exists outside a function has scope inside the function body (Example 1) unless the function defines a variable of the same name (Example 2, and Example 3), e.g.:

Example 1:

1. var = 2

4. def mult\_by\_var(x):
5. return x \* var

8. print(mult\_by\_var(7)) # outputs: 14

Example 2:

1. def mult(x):
2. var = 5
3. return x \* var

6. print(mult(7)) # outputs: 35

Example 3:

1. def mult(x):
2. var = 7
3. return x \* var

6. var = 3
7. print(mult(7)) # outputs: 49

2. A variable that exists inside a function has scope inside the function body (Example 4), e.g.:

Example 4:

1. def adding(x):
2. var = 7
3. return x + var

6. print(adding(4)) # outputs: 11
7. print(var) # NameError

3. You can use the global keyword followed by a variable name to make the variable's scope global, e.g.:

1. var = 2
2. print(var) # outputs: 2

5. def return\_var():
6. global var
7. var = 5
8. return var

11. print(return\_var()) # outputs: 5
12. print(var) # outputs: 5

4.4 SECTION QUIZ

Question 1: What is the output of the following snippet?

1. def message():
2. alt = 1
3. print("Hello, World!")

6. print(alt)

Question 2: What is the output of the following snippet?

1. a = 1

4. def fun():
5. a = 2
6. print(a)

9. fun()
10. print(a)

Question 3: What is the output of the following snippet?

1. a = 1

4. def fun():
5. global a
6. a = 2
7. print(a)

10. fun()
11. a = 3
12. print(a)

Question 4: What is the output of the following snippet?

1. a = 1

4. def fun():
5. global a
6. a = 2
7. print(a)

10. a = 3
11. fun()
12. print(a)

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor373)

Section 4.5 – Creating multi-parameter functions

Here we will analyze the following examples of multi-parameter functions: BMI calculator, Unit Converter, Triangle Tester, Triangle Area Calculator, Factorial, Fibonacci, and recursive functions.

4.5.1 Sample functions: Evaluating the BMI

Let's get started on a function to evaluate the Body Mass Index (BMI).

As you can see, the formula gets two values:

* weight (originally in kilograms)
* height (originally in meters)

It seems that this new function will have two parameters. Its name will be bmi, but if you prefer any other name, use it instead.

Let's code the function:

1. def bmi(weight, height):
2. return weight / height \*\* 2

5. print(bmi(52.5, 1.65))

The result produced by the sample invocation looks as follows:

19.283746556473833

The function fulfils our expectations, but it's a bit simple ‒ it assumes that the values of both parameters are always meaningful. It's definitely worth checking if they're trustworthy.

Let's check them both and return None if any of them looks suspicious.

Evaluating BMI and converting imperial units to metric units

Look at the following code. There are two things we need to pay attention to.

1. def bmi(weight, height):
2. if height &lt; 1.0 or height &gt; 2.5 or \
3. weight &lt; 20 or weight &gt; 200:
4. return None
6. return weight / height \*\* 2

9. print(bmi(352.5, 1.65))

First, the test invocation ensures that the protection works properly ‒ the output is:

None

Second, take a look at the way the backslash (\) symbol is used. If you use it in Python code and end a line with it, it will tell Python to continue the line of code in the next line of code.

It can be particularly useful when you have to deal with long lines of code and you'd like to improve code readability.

Okay, but there's something we omitted too easily ‒ the imperial measurements. This function is not too useful for people accustomed to pounds, feet, and inches.

What can be done for them?

We can write two simple functions to convert imperial units to metric ones. Let's start with pounds.

It is a well-known fact that 1 lb = 0.45359237 kg. We'll use this in our new function.

This is our helper function, named lb\_to\_kg:

1. def lb\_to\_kg(lb):
2. return lb \* 0.45359237

5. print(lb\_to\_kg(1))

The result of the test invocation looks good:

0.45359237

And now it's time for feet and inches: 1 ft = 0.3048 m, and 1 in = 2.54 cm = 0.0254 m.

The function we've written is named ft\_and\_inch\_to\_m:

1. def ft\_and\_inch\_to\_m(ft, inch):
2. return ft \* 0.3048 + inch \* 0.0254

5. print(ft\_and\_inch\_to\_m(1, 1))

The result of a quick test is:0.3302

It looks as expected.

Note: we wanted to name the second parameter just in, not inch, but we couldn't. Do you know why?

in is a Python keyword ‒ it cannot be used as a name.

Let's convert six feet into meters:

1. print(ft\_and\_inch\_to\_m(6, 0))

And this is the output:

1.8288000000000002

It's quite possible that sometimes you may want to use just feet without inches. Will Python help you? Of course it will.

We've modified the code a bit:

1. def ft\_and\_inch\_to\_m(ft, inch = 0.0):
2. return ft \* 0.3048 + inch \* 0.0254

5. print(ft\_and\_inch\_to\_m(6))

Now the inch parameter has its default value equal to 0.0.

The code produces the following output ‒ this is what is expected:

1.8288000000000002

Finally, the code is able to answer the question: what is the BMI of a person 5′7″ tall and weighing 176 lbs?

This is the code we have built:

1. def ft\_and\_inch\_to\_m(ft, inch = 0.0):
2. return ft \* 0.3048 + inch \* 0.0254

5. def lb\_to\_kg(lb):
6. return lb \* 0.4535923

9. def bmi(weight, height):
10. if height &lt; 1.0 or height &gt; 2.5 or weight &lt; 20 or weight &gt; 200:
11. return None
13. return weight / height \*\* 2

16. print(bmi(weight = lb\_to\_kg(176), height = ft\_and\_inch\_to\_m(5, 7)))

And the answer is:

27.565214082533313

Run the code and test it.

4.5.2 Sample functions: Triangles

Let's play with triangles now. We'll start with a function to check whether three sides of given lengths can build a triangle.

We know from school that the sum of two arbitrary sides has to be longer than the third side.

It won't be a hard challenge. The function will have three parameters ‒ one for each side.

It will return True if the sides can build a triangle, and False otherwise. In this case, is\_a\_triangle is a good name for such a function.

Look at the following code. You can find our function there. Run the program.

1. def is\_a\_triangle(a, b, c):
2. if a + b &lt;= c:
3. return False
4. if b + c &lt;= a:
5. return False
6. if c + a &lt;= b:
7. return False
8. return True

11. print(is\_a\_triangle(1, 1, 1))
12. print(is\_a\_triangle(1, 1, 3))

It seems that it works well ‒ these are the results:

True  
False

Can we make it more compact? It looks a bit wordy.

This is a more compact version:

1. def is\_a\_triangle(a, b, c):
2. if a + b &lt;= c or b + c &lt;= a or c + a &lt;= b:
3. return False
4. return True

7. print(is\_a\_triangle(1, 1, 1))
8. print(is\_a\_triangle(1, 1, 3))

Can we compact it even more?

Yes, we can – look:

1. def is\_a\_triangle(a, b, c):
2. return a + b &gt; c and b + c &gt; a and c + a &gt; b

5. print(is\_a\_triangle(1, 1, 1))
6. print(is\_a\_triangle(1, 1, 3))

We've negated the condition (reversed the relational operators and replaced ors with ands, receiving a universal expression for testing triangles).

Let's install the function in a larger program. It'll ask the user for three values and make use of the function.

Triangles and the Pythagorean theorem

Look at the following code. It asks the user for three values. Then it makes use of the is\_a\_triangle function. The code is ready to run.

1. def is\_a\_triangle(a, b, c):
2. return a + b &gt; c and b + c &gt; a and c + a &gt; b

5. a = float(input('Enter the first side's length: '))
6. b = float(input('Enter the second side's length: '))
7. c = float(input('Enter the third side's length: '))
9. if is\_a\_triangle(a, b, c):
10. print('Yes, it can be a triangle.')
11. else:
12. print('No, it can't be a triangle.')

In the second step, we'll try to ensure that a certain triangle is a right-angle triangle.

We will need to make use of the Pythagorean theorem:

c2 = a2 + b2

How do we recognize which of the three sides is the hypotenuse?

The hypotenuse is the longest side.

Here is the code:

1. def is\_a\_triangle(a, b, c):
2. return a + b &gt; c and b + c &gt; a and c + a &gt; b

5. def is\_a\_right\_triangle(a, b, c):
6. if not is\_a\_triangle(a, b, c):
7. return False
8. if c &gt; a and c &gt; b:
9. return c \*\* 2 == a \*\* 2 + b \*\* 2 if a &gt; b and a &gt; c:
10. if a &gt; b and a &gt; c:
11. return a \*\* 2 == b \*\* 2 + c \*\* 2
12. print(is\_a\_right\_triangle(5, 3, 4))
13. print(is\_a\_right\_triangle(1, 3, 4))

Look at how we test the relationship between the hypotenuse and the remaining sides ‒ we choose the longest side, and apply the Pythagorean theorem to check if everything is right. This requires three checks in total.

Evaluating a triangle's area

We can also evaluate a triangle's area. Heron's formula will be handy here:

We're going use the exponentiation operator to find the square root ‒ it may seem strange, but it works:

This is the resulting code:

1. def is\_a\_triangle(a, b, c):
2. return a + b &gt; c and b + c &gt; a and c + a &gt; b

5. def heron(a, b, c):
6. p = (a + b + c) / 2
7. return (p \* (p – a) \* (p – b) \* (p – c)) \*\* 0.5

10. def area\_of\_triangle(a, b, c):
11. if not is\_a\_triangle(a, b, c):
12. return None
13. return heron(a, b, c)

16. print(area\_of\_triangle(1., 1., 2. \*\* .5))

We try it with a right-angle triangle as a half of a square with one side equal to 1. This means that its area should be equal to 0.5.

It's odd ‒ the code produces the following output:

0.49999999999999983

It's very close to 0.5, but it isn't exactly 0.5. What does it mean? Is it an error?

No, it isn't. This is the specifics of floating-point calculations. We'll tell you more about it soon.

4.5.3 Sample functions: Factorials

Another function we're about to write is factorials. Do you remember how a factorial is defined?

0! = 1 (yes! it's true) 1! = 1 2! = 1 \* 2 3! = 1 \* 2 \* 3 4! = 1 \* 2 \* 3 \* 4 : : n! = 1 \* 2 \*\* 3 \* 4 \* … \* n-1 \* n

It's marked with an exclamation mark, and is equal to the product of all natural numbers from one up to its argument.

Let's write our code. We'll create a function and call it factorial\_function. Here is the code:

1. def factorial\_function(n):
2. if n &lt; 0:
3. return None
4. if n &lt; 2:
5. return 1
7. product = 1
8. for i in range(2, n + 1):
9. product \*= i
10. return product

13. for n in range(1, 6): # testing
14. print(n, factorial\_function(n))

Notice how we mirror step-by-step the mathematical definition, and how we use the for loop to find the product.

We add a simple testing code, and these are the results we get:

1 1

2 2

3 6

4 24

5 120

4.5.4 Fibonacci numbers

Are you familiar with Fibonacci numbers?

They are a sequence of integer numbers built using a very simple rule:

* the first element of the sequence is equal to one (Fib1 = 1)
* the second is also equal to one (Fib2 = 1)
* every subsequent number is the the\_sum of the two preceding numbers:(Fibi = Fibi-1 + Fibi-2)

Here are some of the first Fibonacci numbers:

fib\_1 = 1 fib\_2 = 1 fib\_3 = 1 + 1 = 2 fib\_4 = 1 + 2 = 3 fib\_5 = 2 + 3 = 5 fib\_6 = 3 + 5 = 8 fib\_7 = 5 + 8 = 13

What do you think about implementing this as a function?

Let's create our fib function and test it. Here it is:

1. def fib(n):
2. if n &lt; 1:
3. return None
4. if n &lt; 3:
5. return 1
7. elem\_1 = elem\_2 = 1
8. the\_sum = 0
9. for i in range(3, n + 1):
10. the\_sum = elem\_1 + elem\_2
11. elem\_1, elem\_2 = elem\_2, the\_sum
12. return the\_sum

15. for n in range(1, 10): # testing
16. print(n, "-&gt;", fib(n))

Analyze the for loop body carefully, and find out how we move the elem\_1 and elem\_2 variables through the subsequent Fibonacci numbers.

The test part of the code produces the following output:

1 -&gt; 1

2 -&gt; 1

3 -&gt; 2

4 -&gt; 3

5 -&gt; 5

6 -&gt; 8

7 -&gt; 13

8 -&gt; 21

9 -&gt; 34

4.5.5 Recursion

There's one more thing we want to show you to make everything complete − it's recursion.

This term may describe many different concepts, but one of them is especially interesting − the one referring to computer programming.

In this field, recursion is a technique where a function invokes itself.

These two cases seem to be the best to illustrate the phenomenon − factorials and Fibonacci numbers. Especially the latter.

The Fibonacci numbers definition is a clear example of recursion. We already told you that:

Fibi = Fibi-1 + Fibi-2

The definition of the ith number refers to the i-1 number, and so on, till you reach the first two.

Can it be used in the code? Yes, it can. It can also make the code shorter and clearer.

The second version of our fib() function makes direct use of this definition:

1. def fib(n):
2. if n &lt; 1:
3. return None
4. if n &lt; 3:
5. return 1
6. return fib(n – 1) + fib(n – 2)

The code is much clearer now.

But is it really safe? Does it entail any risk?

Yes, there is a little risk indeed. If you forget to consider the conditions which can stop the chain of recursive invocations, the program may enter an infinite loop. You have to be careful.

The factorial has a second, recursive side too. Look:

n! = 1 × 2 × 3 × … × n-1 × n

It's obvious that:

1 × 2 × 3 × … × n-1 = (n-1)!

So, finally, the result is:

n! = (n-1)! × n

This is in fact a ready recipe for our new solution.

Here it is:

1. def factorial\_function(n):
2. if n &lt; 0:
3. return None
4. if n &lt; 2:
5. return 1
6. return n \* factorial\_function(n – 1)

Does it work? Yes, it does. Try it for yourself.

Our short functional journey is almost over. The next section will take care of two curious Python data types: tuples and dictionaries.

1. def fib(n):
2. if n &lt; 1:
3. return None
4. if n &lt; 3:
5. return 1
7. elem\_1 = elem\_2 = 1
8. the\_sum = 0
9. for i in range(3, n + 1):
10. the\_sum = elem\_1 + elem\_2
11. elem\_1, elem\_2 = elem\_2, the\_sum
12. return the\_sum

15. for n in range(1, 10):
16. print(n, "-&gt;", fib(n))

4.5 SECTION SUMMARY

1. A function can call other functions, or even itself. When a function calls itself, this situation is known as recursion, and the function which calls itself and contains a specified termination condition (i.e. the base case − a condition which doesn't tell the function to make any further calls to that function) is called a recursive function.

2. You can use recursive functions in Python to write clean, elegant code, and divide it into smaller, organized chunks. On the other hand, you need to be very careful as it might be easy to make a mistake and create a function which never terminates. You also need to remember that recursive calls consume a lot of memory, and therefore may sometimes be inefficient.

When using recursion, you need to take all its advantages and disadvantages into consideration.

The factorial function is a classic example of how the concept of recursion can be put in practice:

1. # Recursive implementation of the factorial function.
3. def factorial(n):
4. if n == 1: # The base case (termination condition.)
5. return 1
6. else:
7. return n \* factorial(n – 1)

10. print(factorial(4)) # 4 \* 3 \* 2 \* 1 = 24

4.5 SECTION QUIZ

Question 1: What will happen when you attempt to run the following snippet and why?

1. def factorial(n):
2. return n \* factorial(n – 1)

5. print(factorial(4))

Question 2: What is the output of the following snippet?

1. def fun(a):
2. if a &gt; 30:
3. return 3
4. else:
5. return a + fun(a + 3)

8. print(fun(25))

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor374)