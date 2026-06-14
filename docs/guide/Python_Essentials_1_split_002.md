xml version='1.0' encoding='utf-8'?





Section 2.6 – Interaction with the user

In this section, you will learn how to talk to a computer: you will familiarize yourself with the input() function, perform type conversions, and learn how to use string operators.

2.6.1 The input() function

We're now going to introduce you to a completely new function, which seems to be a mirror reflection of the good old print() function.

Why? Well, print() sends data to the console.

The new function gets data from it.

print() has no usable result. The meaning of the new function is to return a very usable result.

The function is named input(). The name of the function says everything.

The input() function is able to read data entered by the user and to return the same data to the running program.

The program can manipulate the data, making the code truly interactive.

Virtually all programs read and process data. A program which doesn't get a user's input is a deaf program.

Take a look at our example:

1. print("Tell me anything…")
2. anything = input()
3. print("Hmm…", anything, "… Really?")

It shows a very simple case of using the input() function.

NOTE

* The program prompts the user to input some data from the console (most likely using a keyboard, although it is also possible to input data using voice or image)
* the input() function is invoked without arguments (this is the simplest way of using the function); the function will switch the console to input mode; you'll see a blinking cursor, and you'll be able to input some keystrokes, finishing off by hitting the Enter key; all the inputted data will be sent to your program through the function's result;
* note: you need to assign the result to a variable; this is crucial ‒ missing out this step will cause the entered data to be lost;
* then we use the print() function to output the data we get, with some additional remarks.

Run the code and let the function show you what it can do for you.

1. print("Tell me anything…")
2. anything = input()
3. print("Hmm…", anything, "… Really?")

2.6.2 The input() function with an argument

The input() function can do something else: it can prompt the user without any help from print().

We've modified our example a bit, look at the code:

1. anything = input("Tell me anything…")
2. print("Hmm…", anything, "…Really?")

Note:

* the input() function is invoked with one argument ‒ it's a string containing a message;
* the message will be displayed on the console before the user is given an opportunity to enter anything;
* input() will then do its job.

This variant of the input() invocation simplifies the code and makes it clearer.

2.6.3 The result of the input() function

We've said it already, but it must be unambiguously stated once again: the result of the input() function is a string.

A string containing all the characters the user enters from the keyboard. It is not an integer or a float.

This means that you mustn't use it as an argument of any arithmetic operation, e.g. you can't use this data to square it, divide it by anything, or divide anything by it.

1. anything = input("Enter a number: ")
2. something = anything \*\* 2.0
3. print(anything, "to the power of 2 is", something)

2.6.4 The input() function – prohibited operations

Look at the following code. Run it, enter any number, and press Enter.

1. # Testing a TypeError message.
2. anything = input("Enter a number: ")
3. something = anything \*\* 2.0
4. print(anything, "to the power of 2 is", something)

What happens? Python should have given you the following output:

Traceback (most recent call last):  
File ".main.py", line 4, in `&lt;module&gt;`  
something = anything \*\* 2.0

TypeError: unsupported operand type(s) for \*\* or pow(): 'str' and 'float'

The last line of the sentence explains everything ‒ you tried to apply the \*\* operator to 'str' (string) accompanied with 'float'.

This is prohibited.

This should be obvious – can you predict the value of "to be or not to be" raised to the power of 2?

We can't. Python can't, either.

Have we fallen into a deadlock? Is there a solution to this issue? Of course there is.

2.6.5 Type casting (type conversions)

Python offers two simple functions to specify a type of data and solve this problem ‒ here they are: int() and float().

Their names are self-commenting:

* the int() function takes one argument (e.g. a string: int(string)) and tries to convert it into an integer; if it fails, the whole program will fail too (there is a workaround for this situation, but we'll show you this a little later);
* the float() function takes one argument (e.g. a string: float(string)) and tries to convert it into a float (the rest is the same).

This is very simple and very effective. Moreover, you can invoke any of the functions by passing the input() results directly to them. There's no need to use any variable as an intermediate storage.

We've implemented the idea ‒ take a look at the code.

Can you imagine how the string entered by the user flows from input() into print()?

Try to run the modified code. Don't forget to enter a valid number.

Check some different values, small and big, negative and positive. Zero is a good input, too.

1. anything = float(input("Enter a number: "))
2. something = anything \*\* 2.0
3. print(anything, "to the power of 2 is", something)

2.6.6 More about input() and type casting

Having a team consisting of the trio input() – int() – float() opens up lots of new possibilities.

You'll eventually be able to write complete programs, accepting data in the form of numbers, processing them and displaying the results.

Of course, these programs will be very primitive and not very usable, as they cannot make decisions, and consequently are not able to react differently to different situations.

This is not really a problem, though; we'll show you how to overcome it soon.

Our next example refers to the earlier program to find the length of a hypotenuse. Let's run it and make it able to read the lengths of the legs from the console.

Check out the code ‒ this is what it looks like now:

1. leg\_a = float(input("Input first leg length: "))
2. leg\_b = float(input("Input second leg length: "))
3. hypo = (leg\_a\*\*2 + leg\_b\*\*2) \*\* .5
4. print("Hypotenuse length is", hypo)

The program asks the user for the lengths of both legs, evaluates the hypotenuse and prints the result. Run it and try to input some negative values.

The program, unfortunately, doesn't react to this obvious error. Let's ignore this weakness for now. We'll come back to it soon.

Note that in the program that you can see, the hypo variable is used for only one purpose ‒ to save the calculated value between the execution of the adjoining line of code.

As the print() function accepts an expression as its argument, you can remove the variable from the code.

Just like this:

1. leg\_a = float(input("Input first leg length: "))
2. leg\_b = float(input("Input second leg length: "))
3. print("Hypotenuse length is", (leg\_a\*\*2 + leg\_b\*\*2) \*\* .5)

2.6.7 String operators

It's time to return to these two arithmetic operators: + and \*.

We want to show you that they have a second function. They are able to do something more than just add and multiply.

We've seen them in action where their arguments are numbers (floats or integers, it doesn't matter).

Now we're going to show you that they can handle strings, too, albeit in a very specific way.

The + (plus) sign, when applied to two strings, becomes a concatenation operator:

1. string + string

It simply concatenates (glues) two strings into one. Of course, like its arithmetic sibling, it can be used more than once in one expression, and in such a context it behaves according to left-sided binding.

In contrast to its arithmetic sibling, the concatenation operator is not commutative, i.e. "ab" + "ba" is not the same as "ba" + "ab".

Don't forget ‒ if you want the + sign to be a concatenator, not an adder, you must ensure that both its arguments are strings.

You cannot mix types here.

This simple program shows the + sign in its second use:

1. fnam = input("May I have your first name, please? ")
2. lnam = input("May I have your last name, please? ")
3. print("Thank you.")
4. print("\nYour name is " + fnam + " " + lnam + ".")

Note: using + to concatenate strings lets you construct the output in a more precise way than with a pure print() function, even if enriched with the end= and sep= keyword arguments.

Run the code and see if the output matches your predictions.

Replication

The \* (asterisk) sign, when applied to a string and number (or a number and string, as it remains commutative in this position) becomes a replication operator:

1. string \* number
2. number \* string

It replicates the string the same number of times specified by the number.

For example:

* "James" \* 3 gives "JamesJamesJames"
* 3 \* "an" gives "ananan"
* 5 \* "2" (or "2" \* 5) gives "22222" (not 10!)

REMEMBER

A number less than or equal to zero produces an empty string.

This simple program "draws" a rectangle, making use of an old operator (+) in a new role:

1. print("+" + 10 \* "-" + "+")
2. print(("|" + " " \* 10 + "|\n") \* 5, end="")
3. print("+" + 10 \* "-" + "+")

Note the way in which we've used the parentheses in the second line of the code.

Try practicing to create other shapes or your own artwork!

2.6.8 Type conversions once again

str()

You already know how to use the int() and float() functions to convert a string into a number.

This type of conversion is not a one-way street. You can also convert a number into a string, which is way easier and safer ‒ this kind of operation is always possible.

A function capable of doing that is called str():

1. str(number)

To be honest, it can do much more than just transform numbers into strings, but that can wait for later.

The right-angle triangle again

Here is our "right-angle triangle" program again:

1. leg\_a = float(input("Input first leg length: "))
2. leg\_b = float(input("Input second leg length: "))
3. print("Hypotenuse length is " + str((leg\_a\*\*2 + leg\_b\*\*2) \*\* .5))

We've modified it a bit to show you how the str() function works. Thanks to this, we can pass the whole result to the print() function as one string, forgetting about the commas.

You've made some serious strides on your way to Python programming.

You already know the basic data types, and a set of fundamental operators. You know how to organize the output and how to get data from the user. These are very strong foundations for Module 3. But before we move on to the next module, let's do a few labs, and recap all that you've learned in this section.

LAB 9 Simple input and output

Your task is to complete the code in order to evaluate the results of four basic arithmetic operations.

The results have to be printed to the console.

You may not be able to protect the code from a user who wants to divide by zero. That's okay, don't worry about it for now.

Test your code ‒ does it produce the results you expect?

We won't show you any test data ‒ that would be too simple.

Code

1. # input a float value for variable a here
2. # input a float value for variable b here
3. # output the result of addition here
4. # output the result of subtraction here
5. # output the result of multiplication here
6. # output the result of division here
7. print("\nThat's all, folks!")

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor303)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor328)

LAB 10 Operators and expressions

Your task is to complete the code in order to evaluate the following expression:

The result should be assigned to y. Be careful ‒ watch the operators and keep their priorities in mind. Don't hesitate to use as many parentheses as you need.

You can use additional variables to shorten the expression (but it's not necessary). Test your code carefully.

Sample input:

1

Expected output:

y = 0.6000000000000001

Sample input:

10

Expected output:

y = 0.09901951266867294

Sample input:

100

Expected output:

y = 0.009999000199950014

Sample input:

-5

Expected output:

y = -0.19258202567760344

Code

1. x = float(input("Enter value for x: "))
2. # Write your code here.
3. print("y =", y)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor329)

LAB 11 Operators and expressions 2

Your task is to prepare a simple code able to evaluate the end time of a period of time, given as a number of minutes (it could be arbitrarily large). The start time is given as a pair of hours (0..23) and minutes (0..59). The result has to be printed to the console.

For example, if an event starts at 12:17 and lasts 59 minutes, it will end at 13:16.

Don't worry about any imperfections in your code ‒ it's okay if it accepts an invalid time ‒ the most important thing is that the code produces valid results for valid input data.

Test your code carefully. Hint: using the % operator may be the key to success.

Sample input:

12

17

59

Expected output:

13:16

Sample input:

23

58

642

Expected output:

10:40

Sample input:

0

1

2939

Expected output:

1:0

Code

1. hour = int(input("Starting time (hours): "))
2. mins = int(input("Starting time (minutes): "))
3. dura = int(input("Event duration (minutes): "))
4. # Write your code here.

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor304)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor330)

2.6 SECTION SUMMARY

The print() function sends data to the console, while the input() function gets data from the console.

The input() function comes with an optional parameter: the prompt string. It allows you to write a message before the user input, e.g.:

1. name = input("Enter your name: ")
2. print("Hello, " + name + ". Nice to meet you!")

When the input() function is called, the program's flow is stopped, the prompt symbol keeps blinking (it prompts the user to take action when the console is switched to input mode) until the user has entered an input and/or pressed the Enter key.

NOTE

You can test the functionality of the input() function in its full scope locally on your machine. For resource optimization reasons, we have limited the maximum program execution time in Edube to a few seconds. Go to the Sandbox, copy-paste the previous snippet, run the program, and do nothing ‒ just wait a few seconds to see what happens. Your program should be stopped automatically after a short moment. Now open IDLE, and run the same program there ‒ can you see the difference?

Tip: this feature of the input() function can be used to prompt the user to end a program. Look at the following code:

1. name = input("Enter your name: ")
2. print("Hello, " + name + ". Nice to meet you!")
3. print("\nPress Enter to end the program.")
4. input()
5. print("THE END.")

* The result of the input() function is a string. You can add strings to each other using the concatenation (+) operator. Check out this code:

1. num\_1 = input("Enter the first number: ") # Enter 12
2. num\_2 = input("Enter the second number: ") # Enter 21
3. print(num\_1 + num\_2) # the program returns 1221

* You can also multiply (\* ‒ replication) strings, e.g.:

1. my\_input = input("Enter something: ") # Example input: hello
2. print(my\_input \* 3) # Expected output: hellohellohello

2.6 SECTION QUIZ

Question 1: What is the output of the following snippet?

1. x = int(input("Enter a number: ")) # The user enters 2
2. print(x \* "5")

Question 2: What is the expected output of the following snippet?

1. x = input("Enter a number: ") # The user enters 2
2. print(type(x))

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor362)

Module 3: Boolean Values, Conditional Execution, Loops, Lists and List Processing, Logical and Bitwise Operations

Section 3.1 – Making decisions in Python

Welcome to Module three! In the first section, we will learn about conditional statements and how to use them to make decisions in Python.

3.1.1 Questions and answers

A programmer writes a program and the program asks questions.

A computer executes the program and provides the answers. The program must be able to react according to the received answers.

Fortunately, computers know only two kinds of answers:

* yes, this is true;
* no, this is false.

You will never get a response like Let me think…., I don't know, or Probably yes, but I don't know for sure.

To ask questions, Python uses a set of very special operators. Let's go through them one after another, illustrating their effects on some simple examples.

3.1.2 Comparison: equality operator

Question: are two values equal?

To ask this question, you use the == (equal equal) operator.

Don't forget this important distinction:

* = is an assignment operator, e.g. a = b assigns a with the value of b;
* == is the question are these values equal? so a == b compares a and b.

It is a binary operator with left-sided binding. It needs two arguments and checks if they are equal.

3.1.3 Exercises

Now let's ask a few questions. Try to guess the answers.

Question 1: What is the result of the following comparison?

2 == 2

Question 2: What is the result of the following comparison?

2 == 2.

Question 3: What is the result of the following comparison?

1 == 2

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor363)

3.1.4 Operators

Equality: the equal to operator (==)

The == (equal to) operator compares the values of two operands. If they are equal, the result of the comparison is True. If they are not equal, the result of the comparison is False.

Look at the equality following comparison – what is the result of this operation?

var == 0

Note that we cannot find the answer if we do not know what value is currently stored in the variable var.

If the variable has been changed many times during the execution of your program, or its initial value is entered from the console, the answer to this question can be given only by Python and only at runtime.

Now imagine a programmer who suffers from insomnia, and has to count black and white sheep separately as long as there are exactly twice as many black sheep as white ones.

The question will be as follows:

black\_sheep == 2 \* white\_sheep

Due to the low priority of the == operator, the question shall be treated as equivalent to this one:

black\_sheep == (2 \* white\_sheep)

So, let's practice your understanding of the == operator now – can you guess the output of the code?

1. var = 0  # Assigning 0 to var
2. print(var == 0)
3. var = 1  # Assigning 1 to var
4. print(var == 0)

Run the code and check if you're right.

Inequality: the not equal to operator (!=)

The != (not equal to) operator compares the values of two operands, too. Here is the difference: if they are equal, the result of the comparison is False. If they are not equal, the result of the comparison is True.

Now take a look at the following inequality comparison – can you guess the result of this operation?

var = 0 # Assigning 0 to var

print(var != 0)

var = 1  # Assigning 1 to var

print(var != 0)

Run the code and check if you're right.

Comparison operators: greater than

You can also ask a comparison question using the &gt; (greater than) operator.

If you want to know if there are more black sheep than white ones, you can write it as follows:

black\_sheep &gt; white\_sheep  # Greater than

True confirms it; False denies it.

Comparison operators: greater than or equal to

The greater than operator has another special, non-strict variant, but it's denoted differently than in classical arithmetic notation: &gt;= (greater than or equal to).

There are two subsequent signs, not one.

Both of these operators (strict and non-strict), as well as the two others discussed in the next section, are binary operators with left-sided binding, and their priority is greater than that shown by == and !=.

If we want to find out whether or not we have to wear a warm hat, we ask the following question:

centigrade\_outside &gt;= 0.0. # Greater than or equal to

Comparison operators: less than/less than or equal to

As you've probably already guessed, the operators used in this case are: the &lt; (less than) operator and its non-strict sibling: &lt;= (less than or equal to).

Look at this simple example:

current\_velocity\_mph &lt; 85  # Less than

current\_velocity\_mph &lt;= 85  # Less than or equal to

We're going to check if there's a risk of being fined by the highway police (the first question is strict, the second isn't).

3.1.5 Making use of the answers

What can you do with the answer (i.e. the result of a comparison operation) you get from the computer?

There are at least two possibilities: first, you can memorize it (store it in a variable) and make use of it later. How do you do that? Well, you use an arbitrary variable like this:

answer = number\_of\_lions &gt;= number\_of\_lionesses

The content of the variable will tell you the answer to the question asked.

The second possibility is more convenient and far more common: you can use the answer you get to make a decision about the future of the program.

You need a special instruction for this purpose, and we'll discuss it very soon.

Now we need to update our priority table, and put all the new operators into it. It now looks as follows:

|  |  |  |
| --- | --- | --- |
| Priority | Operator |  |
| 1 | +, - | unary |
| 2 | \*\* |  |
| 3 | \*, /, //, % |  |
| 4 | +, - | binary |
| 5 | &lt;, &lt;=, &gt;, &gt;= |  |
| 6 | ==, != |  |

LAB 12 Variables ‒ Questions and answers

Using one of the comparison operators in Python, write a simple two-line program that takes the parameter n as input, which is an integer, and prints False if n is less than 100, and True if n is greater than or equal to 100.

Don't create any if blocks (we're going to talk about them very soon). Test your code using the data we've provided for you.

Sample input:

55

Expected output:

False

Sample input:

99

Expected output:

False

Sample input:

100

Expected output:

True

Sample input:

101

Expected output:

True

Sample input:

-5

Expected output:

False

Sample input:

+123

Expected output:

True

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor331)

3.1.6 Conditions and conditional execution

You already know how to ask Python questions, but you still don't know how to make reasonable use of the answers. You have to have a mechanism which will allow you to do something if a condition is met, and not do it if it isn't.

It's just like in real life: you do certain things or you don't when a specific condition is met or not, e.g. you go for a walk if the weather is good, or stay home if it's wet and cold.

To make such decisions, Python offers a special instruction. Due to its nature and its application, it's called a conditional instruction (or conditional statement).

There are several variants of it. We'll start with the simplest, increasing the difficulty slowly.

The first form of a conditional statement is written very informally but figuratively:

if true\_or\_not:

do\_this\_if\_true

This conditional statement consists of the following, strictly necessary, elements in this and this order only:

* the if keyword;
* one or more white spaces;
* an expression (a question or an answer) whose value will be interpreted solely in terms of True (when its value is non-zero) and False (when it is equal to zero);
* a colon followed by a newline;
* an indented instruction or set of instructions (at least one instruction is absolutely required); the indentation may be achieved in two ways – by inserting a particular number of spaces (the recommendation is to use four spaces of indentation), or by using the tab character; note: if there is more than one instruction in the indented part, the indentation should be the same in all lines; even though it may look the same if you use tabs mixed with spaces, it's important to make all indentations exactly the same – Python 3 does not allow the mixing of spaces and tabs for indentation.

How does that statement work?

* If the true\_or\_not expression represents the truth (i.e. its value is not equal to zero), the indented statement(s) will be executed;
* if the true\_or\_not expression does not represent the truth (i.e. its value is equal to zero), the indented statement(s) will be omitted (ignored), and the next executed instruction will be the one after the original indentation level.

In real life, we often express a desire:

if the weather is good, we'll go for a walk

then, we'll have lunch

As you can see, having lunch is not a conditional activity and doesn't depend on the weather.

Knowing what conditions influence our behavior, and assuming that we have the parameterless functions go\_for\_a\_walk() and have\_lunch(), we can write the following snippet:

1. if the\_weather\_is\_good:
2. go\_for\_a\_walk()
3. have\_lunch()

Conditional execution: the if statement

If a certain sleepless Python developer falls asleep when he or she counts 120 sheep, and the sleep-inducing procedure may be implemented as a special function named sleep\_and\_dream(), the whole code takes the following shape:

1. if sheep\_counter &gt;= 120: # Evaluate a test expression
2. sleep\_and\_dream() # Execute if test expression is True

You can read it as: if sheep\_counter is greater than or equal to 120, then fall asleep and dream (i.e. execute the sleep\_and\_dream function.)

We've said that conditionally executed statements have to be indented. This creates a very legible structure, clearly demonstrating all possible execution paths in the code.

Take a look at the following code:

1. if sheep\_counter &gt;= 120:
2. make\_a\_bed()
3. take\_a\_shower()
4. sleep\_and\_dream()
5. feed\_the\_sheepdogs()

As you can see, making a bed, taking a shower and falling asleep and dreaming are all executed conditionally – when sheep\_counter reaches the desired limit.

Feeding the sheepdogs, however, is always done (i.e. the feed\_the\_sheepdogs() function is not indented and does not belong to the if block, which means it is always executed.)

Now we're going to discuss another variant of the conditional statement, which also allows you to perform an additional action when the condition is not met.

Conditional execution: the if-else statement

We started out with a simple phrase which read: If the weather is good, we will go for a walk.

Note: there is not a word about what will happen if the weather is bad. We only know that we won't go outdoors, but what we could do instead is not known. We may want to plan something in case of bad weather, too.

We can say, for example: If the weather is good, we will go for a walk, otherwise we will go to a theater.

Now we know what we'll do if the conditions are met, and we know what we'll do if not everything goes our way. In other words, we have a "Plan B".

Python allows us to express such alternative plans. This is done with a second, slightly more complex form of the conditional statement, the if-else statement:

1. if true\_or\_false\_condition:
2. perform\_if\_condition\_true
3. else:
4. perform\_if\_condition\_false

Thus, there is a new word: else – this is a keyword.

The part of the code which begins with else says what to do if the condition specified for the if is not met (note the colon after the word).

The if-else execution goes as follows:

* if the condition evaluates to True (its value is not equal to zero), the perform\_if\_condition\_true statement is executed, and the conditional statement comes to an end;
* if the condition evaluates to False (it is equal to zero), the perform\_if\_condition\_false statement is executed, and the conditional statement comes to an end.

The if-else statement: more conditional execution

By using this form of conditional statement, we can describe our plans as follows:

1. if the\_weather\_is\_good:
2. go\_for\_a\_walk()
3. else:
4. go\_to\_a\_theater()
5. have\_lunch()

If the weather is good, we'll go for a walk. Otherwise, we'll go to a theater. No matter if the weather is good or bad, we'll have lunch afterwards (after the walk or after going to the theater).

Everything we've said about indentation works in the same manner inside the else branch:

1. if the\_weather\_is\_good:
2. go\_for\_a\_walk()
3. have\_fun()
4. else:
5. go\_to\_a\_theater()
6. enjoy\_the\_movie()
7. have\_lunch()

Nested if-else statements

Now let's discuss two special cases of the conditional statement.

First, consider the case where the instruction placed after the if is another if.

Read what we have planned for this Sunday. If the weather is fine, we'll go for a walk. If we find a nice restaurant, we'll have lunch there. Otherwise, we'll eat a sandwich. If the weather is poor, we'll go to the theater. If there are no tickets, we'll go shopping in the nearest mall.

Let's write the same in Python. Consider carefully the code here:

1. if the\_weather\_is\_good:
2. if nice\_restaurant\_is\_found:
3. have\_lunch()
4. else:
5. eat\_a\_sandwich()
6. else:
7. if tickets\_are\_available:
8. go\_to\_the\_theater()
9. else:
10. go\_shopping()

Here are two important points:

* this use of the if statement is known as nesting; remember that every else refers to the if which lies at the same indentation level; you need to know this to determine how the ifs and elses pair up;
* consider how the indentation improves readability, and makes the code easier to understand and trace.

The elif statement

The second special case introduces another new Python keyword: elif. As you probably suspect, it's a shorter form of else if.

elif is used to check more than just one condition, and to stop when the first statement which is true is found.

Our next example resembles nesting, but the similarities are very slight. Again, we'll change our plans and express them as follows: If the weather is fine, we'll go for a walk, otherwise if we get tickets, we'll go to the theater, otherwise if there are free tables at the restaurant, we'll go for lunch; if all else fails, we'll stay home and play chess.

Have you noticed how many times we've used the word otherwise? This is the stage where the elif keyword plays its role.

Let's write the same scenario using Python:

1. if the\_weather\_is\_good:
2. go\_for\_a\_walk()
3. elif tickets\_are\_available:
4. go\_to\_the\_theater()
5. elif table\_is\_available:
6. go\_for\_lunch()
7. else:
8. play\_chess\_at\_home()

The way to assemble subsequent if-elif-else statements is sometimes called a cascade.

Notice again how the indentation improves the readability of the code.

Some additional attention has to be paid in this case:

* you mustn't use else without a preceding if;
* else is always the last branch of the cascade, regardless of whether you've used elif or not;
* else is an optional part of the cascade, and may be omitted;
* if there is an else branch in the cascade, only one of all the branches is executed;
* if there is no else branch, it's possible that none of the available branches is executed.

This may sound a little puzzling, but hopefully some simple examples will help shed more light.

3.1.7 Analyzing code samples

Now we're going to show you some simple yet complete programs. We won't explain them in detail, because we consider the comments (and the variable names) inside the code to be sufficient guides.

All the programs solve the same problem – they find the largest of several numbers and print it out.

Example 1:

We'll start with the simplest case – how to identify the larger of two numbers:

1. # Read two numbers
2. number1 = int(input("Enter the first number: "))
3. number2 = int(input("Enter the second number: "))
4. # Choose the larger number
5. if number1 &gt; number2:
6. larger\_number = number1
7. else:
8. larger\_number = number2
9. # Print the result
10. print("The larger number is:", larger\_number)

This snippet should be clear – it reads two integer values, compares them, and finds which is the larger.

Example 2:

Now we're going to show you one intriguing fact. Python has an interesting feature – look at the following code:

1. # Read two numbers
2. number1 = int(input("Enter the first number: "))
3. number2 = int(input("Enter the second number: "))
4. # Choose the larger number
5. if number1 &gt; number2: larger\_number = number1
6. else: larger\_number = number2
7. # Print the result
8. print("The larger number is:", larger\_number)

Note: if any of the if-elif-else branches contains just one instruction, you may code it in a more comprehensive form (you don't need to make an indented line after the keyword, but just continue the line after the colon).

This style, however, may be misleading, and we're not going to use it in our future programs, but it's definitely worth knowing if you want to read and understand someone else's programs.

There are no other differences in the code.

Example 3:

It's time to complicate the code – let's find the largest of three numbers. Will it enlarge the code? A bit.

We assume that the first value is the largest. Then we verify this hypothesis with the two remaining values.

Look at the following code:

1. # Read three numbers
2. number1 = int(input("Enter the first number: "))
3. number2 = int(input("Enter the second number: "))
4. number3 = int(input("Enter the third number: "))
5. # We temporarily assume that the first number
6. # is the largest one.
7. # We will verify this soon.
8. largest\_number = number1
9. # We check if the second number is larger than the current largest\_number
10. # and update the largest\_number if needed.
11. if number2 &gt; largest\_number:
12. largest\_number = number2
13. # We check if the third number is larger than the current largest\_number
14. # and update the largest\_number if needed.
15. if number3 &gt; largest\_number:
16. largest\_number = number3
17. # Print the result
18. print("The largest number is:", largest\_number)

This method is significantly simpler than trying to find the largest number all at once, by comparing all possible pairs of numbers (i.e. first with second, second with third, third with first). Try to rebuild the code for yourself.

3.1.8 Pseudocode and introduction to loops

You should now be able to write a program which finds the largest of four, five, six, or even ten numbers.

You already know the scheme, so extending the size of the problem will not be particularly complex.

But what happens if we ask you to write a program that finds the largest of two hundred numbers? Can you imagine the code?

You'll need two hundred variables. If two hundred variables isn't bad enough, try to imagine searching for the largest of a million numbers.

Imagine a code that contains 199 conditional statements and two hundred invocations of the input() function. Luckily, you don't need to deal with that. There's a simpler approach.

We'll ignore the requirements of Python syntax for now, and try to analyze the problem without thinking about the real programming. In other words, we'll try to write the algorithm, and when we're happy with it, we'll implement it.

In this case, we'll use a kind of notation which is not an actual programming language (it can be neither compiled nor executed), but it is formalized, concise and readable. It's called pseudocode.

Let's look at our pseudocode:

1. largest\_number = -999999999
2. number = int(input())
3. if number == -1:
4. print(largest\_number)
5. exit()
6. if number &gt; largest\_number:
7. largest\_number = number
8. # Go to line 02

What's happening in it?

Firstly, we can simplify the program if, at the very beginning of the code, we assign the variable largest\_number with a value which will be smaller than any of the entered numbers. We'll use -999999999 for that purpose.

Secondly, we assume that our algorithm will not know in advance how many numbers will be delivered to the program. We expect that the user will enter as many numbers as she/he wants – the algorithm will work well with one hundred and with one thousand numbers. How do we do that?

We make a deal with the user: when the value -1 is entered, it will be a sign that there are no more data and the program should end its work.

Otherwise, if the entered value is not equal to -1, the program will read another number, and so on.

The trick is based on the assumption that any part of the code can be performed more than once – precisely, as many times as needed.

Performing a certain part of the code more than once is called a loop. The meaning of this term is probably obvious to you.

Lines 02 through 08 make a loop. We'll pass through them as many times as needed to review all the entered values.

Can you use a similar structure in a program written in Python? Yes, you can.

EXTRA

Python often comes with a lot of built-in functions that will do the work for you. For example, to find the largest number of all, you can use a Python built-in function called max(). You can use it with multiple arguments. Analyze the following code:

1. # Read three numbers.
2. number1 = int(input("Enter the first number: "))
3. number2 = int(input("Enter the second number: "))
4. number3 = int(input("Enter the third number: "))
5. # Check which one of the numbers is the greatest
6. # and pass it to the largest\_number variable.
7. largest\_number = max(number1, number2, number3)
8. # Print the result.
9. print("The largest number is:", largest\_number)

By the same fashion, you can use the min() function to return the lowest number. You can rebuild this code and experiment with it in the Sandbox.

We're going to talk about these (and many other) functions soon. For the time being, our focus will be on conditional execution and loops to let you gain more confidence in programming and teach you the skills that will let you fully understand and apply the two concepts in your code. So, for now, we're not taking any shortcuts.

LAB 13 Comparison operators and conditional execution

[Spathiphyllum](https://upload.wikimedia.org/wikipedia/commons/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg), more commonly known as a peace lily or white sail plant, is one of the most popular indoor houseplants that filters out harmful toxins from the air. Some of the toxins that it neutralizes include benzene, formaldehyde, and ammonia.

Imagine that your computer program loves these plants. Whenever it receives an input in the form of the word Spathiphyllum, it involuntarily shouts to the console the following string: "Spathiphyllum is the best plant ever!"

Write a program that utilizes the concept of conditional execution, takes a string as input, and:

* prints the sentence "Yes – Spathiphyllum is the best plant ever!" to the screen if the inputted string is "Spathiphyllum" (upper-case)
* prints "No, I want a big Spathiphyllum!" if the inputted string is "spathiphyllum" (lower-case)
* prints "Spathiphyllum! Not [input]!" otherwise. Note: [input] is the string taken as input.

Test your code using the data we've provided for you. And get yourself a Spathiphyllum, too!

Sample input:

spathiphyllum

Expected output:

No, I want a big Spathiphyllum!

Sample input:

pelargonium

Expected output:

Spathiphyllum! Not pelargonium!

Sample input:

Spathiphyllum

Expected output:

Yes – Spathiphyllum is the best plant ever!

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor332)

LAB 14 Essentials of the if-else statement

Once upon a time there was a land – a land of milk and honey, inhabited by happy and prosperous people. The people paid taxes, of course – their happiness had limits. The most important tax, called the Personal Income Tax (PIT for short) had to be paid once a year, and was evaluated using the following rule:

* if the citizen's income was not higher than 85,528 thalers, the tax was equal to 18% of the income minus 556 thalers and 2 cents (this was what they called tax relief)
* if the income was higher than this amount, the tax was equal to 14,839 thalers and 2 cents, plus 32% of the surplus over 85,528 thalers.

Your task is to write a tax calculator.

* It should accept one floating-point value: the income.
* Next, it should print the calculated tax, rounded to full thalers. There's a function named round() which will do the rounding for you – you'll find it in the following skeleton code.

Note: this happy country never returned any money to its citizens. If the calculated tax was less than zero, it would only mean no tax at all (the tax was equal to zero). Take this into consideration during your calculations.

Look at the code – it only reads one input value and outputs a result, so you need to complete it with some smart calculations.

Test your code using the data we've provided.

Sample input:

10000

Expected output:

The tax is: 1244.0 thalers

Sample input:

100000

Expected output:

The tax is: 19470.0 thalers

Sample input:

1000

Expected output:

The tax is: 0.0 thalers

Sample input:

-100

Expected output:

The tax is: 0.0 thalers

Code

1. income = float(input("Enter the annual income: "))
2. if income &lt; 85528:
3. tax = income \* 0.18 – 556.02
4. # Write the rest of your code here.
5. tax = round(tax, 0)
6. print("The tax is:", tax, "thalers")

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor333)

LAB 15 Essentials of the if-elif-else statement

As you surely know, due to some astronomical reasons, years may be leap or common. The former are 366 days long, while the latter are 365 days long.

Since the introduction of the Gregorian calendar (in 1582), the following rule is used to determine the kind of year:

* if the year number isn't divisible by four, it's a common year;
* otherwise, if the year number isn't divisible by 100, it's a leap year;
* otherwise, if the year number isn't divisible by 400, it's a common year;
* otherwise, it's a leap year.

Look at the following code – it only reads a year number, and needs to be completed with the instructions implementing the test we've just described.

The code should output one of two possible messages, which are Leap year or Common year, depending on the value entered.

It would be good to verify if the entered year falls into the Gregorian era, and output a warning otherwise: Not within the Gregorian calendar period. Tip: use the != and % operators.

Test your code using the data we've provided.

Sample input:

2000

Expected output:

Leap year

Sample input:

2015

Expected output:

Common year

Sample input:

1999

Expected output:

Common year

Sample input:

1996

Expected output:

Leap year

Sample input:

1580

Expected output:

Not within the Gregorian calendar period

Code

1. year = int(input("Enter a year: "))
2. if year &lt; 1582:
3. print("Not within the Gregorian calendar period")
4. else:
5. # Write the if-elif-elif-else block here.

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor334)

3.1 SECTION SUMMARY

1. The comparison (otherwise known as relational) operators are used to compare values. The following table illustrates how the comparison operators work, assuming that x = 0, y = 1, and z = 0:

|  |  |  |
| --- | --- | --- |
| Operator | Description | Example |
| == | returns True if operands' values are equal, and False otherwise | x == y #False  x == z # True |
| != | returns True if operands' values are not equal, and False otherwise | x != y # True  x != z # False |
| &gt; | True if the left operand's value is greater than the right operand's value, and False otherwise | x &gt; y # False  y &gt; z # True |
| &lt; | True if the left operand's value is less than the right operand's value, and False otherwise | x &lt; y # True  y &lt; z # False |
| &gt;= | True if the left operand's value is greater than or equal to the right operand's value, and False otherwise | x &gt;= y # False  x &gt;= z # True  y &gt;= z # True |
| &lt;= | True if the left operand's value is less than or equal to the right operand's value, and False otherwise | x &lt;= y # True  x &lt;= z # True  y &lt;= z # False |

2. When you want to execute some code only if a certain condition is met, you can use a conditional statement:

a single if statement, e.g.:

1. x = 10
2. if x == 10: # condition
3. print("x is equal to 10")  # Executed if the condition is True.

a series of if statements, e.g.:

1. x = 10
2. if x &gt; 5: # condition one
3. print("x is greater than 5")  # Executed if condition one is True.
4. if x &lt; 10: # condition two
5. print("x is less than 10")  # Executed if condition two is True.
6. if x == 10: # condition three
7. print("x is equal to 10")  # Executed if condition three is True.

Each if statement is tested separately.

an if-else statement, e.g.:

1. x = 10
2. if x &lt; 10: # condition
3. print("x is less than 10")  # Executed if the condition is True.
4. else:
5. print("x is greater than or equal to 10")  # Executed if the condition is False.

a series of if statements followed by an else, e.g.:

1. x = 10
2. if x &gt; 5: # condition one
3. print("x is greater than 5")  # Executed if condition one is True.
4. if x &lt; 10: # condition two
5. print("x is less than 10")  # Executed if condition two is True.
6. if x == 10: # condition three
7. print("x is equal to 10")  # Executed if condition three is True.

Each if is tested separately. The body of else is executed if the last if is False.

* The if-elif-else statement, e.g.:

1. x = 10
2. if x == 10: # True
3. print("x == 10")
4. if x &gt; 15: # False
5. print("x &gt; 15")
6. elif x &gt; 10: # False
7. print("x &gt; 10")
8. elif x &gt; 5: # True
9. print("x &gt; 5")
10. else:
11. print("else will not be executed")

If the condition for if is False, the program checks the conditions of the subsequent elif blocks – the first elif block that is True is executed. If all the conditions are False, the else block will be executed.

* Nested conditional statements, e.g.:

1. x = 10
2. if x &gt; 5: # True
3. if x == 6: # False
4. print("nested: x == 6")
5. elif x == 10: # True
6. print("nested: x == 10")
7. else:
8. print("nested: else")
9. else:
10. print("else")

3.1 SECTION QUIZ

Question 1: What is the output of the following snippet?

x = 5

y = 10

z = 8

print(x &gt; y)

print(y &gt; z)

Question 2: What is the output of the following snippet?

x, y, z = 5, 10, 8

print(x &gt; z)

print((y – 5) == x)

Question 3: What is the output of the following snippet?

x, y, z = 5, 10, 8

x, y, z = z, y, x

print(x &gt; z)

print((y – 5) == x)

Question 4: What is the output of the following snippet?

x = 10

if x == 10:

print(x == 10)

if x &gt; 5:

print(x &gt; 5)

if x &lt; 10:

print(x &lt; 10)

else:

print("else")

Question 5: What is the output of the following snippet?

x = "1"

if x == 1:

print("one")

elif x == "1":

if int(x) &gt; 1:

print("two")

elif int(x) &lt; 1:

print("three")

else:

print("four")

if int(x) == 1:

print("five")

else:

print("six")

Question 6: What is the output of the following snippet?

x = 1

y = 1.0

z = "1"

if x == y:

print("one")

if y == int(z):

print("two")

elif x == y:

print("three")

else:

print("four")

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor364)

Section 3.2 – Loops in Python

Here you will learn about loops in Python, and specifically – the while and for loops. You will learn how to create (and avoid falling into) infinite loops, how to exit loops, and skip particular loop iterations. Ready?

3.2.1 Looping your code with while

Do you agree with the following statement?

while there is something to do

do it

Note that this record also declares that if there is nothing to do, nothing at all will happen.

In general, in Python, a loop can be represented as follows:

while

instruction

If you notice some similarities to the if instruction, that's quite all right. Indeed, the syntactic difference is only one: you use the word while instead of the word if.

The semantic difference is more important: when the condition is met, if performs its statements only once; while repeats the execution as long as the condition evaluates to True.

Note: all the rules regarding indentation are applicable here, too. We'll show you this soon.

Look at the following algorithm:

while conditional\_expression:

instruction\_one

 instruction\_two

instruction\_three

:

:

instruction\_n

It is now important to remember that:

* if you want to execute more than one statement inside one while loop, you must (as with if) indent all the instructions in the same way;
* an instruction or set of instructions executed inside the while loop is called the loop's body;
* if the condition is False (equal to zero) as early as when it is tested for the first time, the body is not executed even once (note the analogy of not having to do anything if there is nothing to do);
* the body should be able to change the condition's value, because if the condition is True at the beginning, the body might run continuously to infinity – notice that doing a thing usually decreases the number of things to do).

3.2.2 An infinite loop

An infinite loop, also called an endless loop, is a sequence of instructions in a program which repeat indefinitely (loop endlessly.)

Here's an example of a loop that is not able to finish its execution:

1. while True:
2. print("I'm stuck inside a loop.")

This loop will infinitely print "I'm stuck inside a loop." on the screen.

NOTE

If you want to get the best learning experience from seeing how an infinite loop behaves, launch IDLE, create a New File, copy-paste the previous code, save your file, and run the program. What you will see is the never-ending sequence of "I'm stuck inside a loop." strings printed to the Python console window. To terminate your program, just press Ctrl-C (or Ctrl-Break on some computers). This will cause a KeyboardInterrupt exception and let your program get out of the loop. We'll talk about it later in the course.

Let's go back to the sketch of the algorithm we showed you recently. We're going to show you how to use this newly learned loop to find the largest number from a large set of entered data.

Analyze the program carefully. See where the loop starts (line 8). Locate the loop's body and find out how the body is exited:

1. # Store the current largest number here.
2. largest\_number = -999999999
3. # Input the first value.
4. number = int(input("Enter a number or type -1 to stop: "))
5. # If the number is not equal to -1, continue.
6. while number != -1:
7. # Is number larger than largest\_number?
8. if number &gt; largest\_number:
9. # Yes, update largest\_number.
10. largest\_number = number
11. # Input the next number.
12. number = int(input("Enter a number or type -1 to stop: "))
13. # Print the largest number.
14. print("The largest number is:", largest\_number)

Check how this code implements the algorithm we showed you earlier.

3.2.3 The while loop: more examples

Let's look at another example employing the while loop. Follow the comments to find out the idea and the solution.

1. # A program that reads a sequence of numbers
2. # and counts how many numbers are even and how many are odd.
3. # The program terminates when zero is entered.
4. odd\_numbers = 0
5. even\_numbers = 0
6. # Read the first number.
7. number = int(input("Enter a number or type 0 to stop: "))
8. # 0 terminates execution.
9. while number != 0:
10. # Check if the number is odd.
11. if number % 2 == 1:
12. # Increase the odd\_numbers counter.
13. odd\_numbers += 1
14. else:
15. # Increase the even\_numbers counter.
16. even\_numbers += 1
17. # Read the next number.
18. number = int(input("Enter a number or type 0 to stop: "))
19. # Print results.
20. print("Odd numbers count:", odd\_numbers)
21. print("Even numbers count:", even\_numbers)

Certain expressions can be simplified without changing the program's behavior.

Try to recall how Python interprets the truth of a condition, and note that these two forms are equivalent:

while number != 0: and while number:.

The condition that checks if a number is odd can be coded in these equivalent forms, too:

if number % 2 == 1: and if number % 2:.

Using a counter variable to exit a loop

Look at the following snippet:

1. counter = 5
2. while counter != 0:
3. print("Inside the loop.", counter)
4. counter -= 1
5. print("Outside the loop.", counter)

This code is intended to print the string "Inside the loop." and the value stored in the counter variable during a given loop exactly five times. Once the condition has not been met (the counter variable has reached 0), the loop is exited, and the message "Outside the loop." as well as the value stored in counter is printed.

But there's one thing that can be written more compactly – the condition of the while loop.

Can you see the difference?

1. counter = 5
2. while counter:
3. print("Inside the loop.", counter)
4. counter -= 1
5. print("Outside the loop.", counter)

Is it more compact than previously? A bit. Is it more legible? That's disputable.

REMEMBER

Don't feel obliged to code your programs in a way that is always the shortest and the most compact. Readability may be a more important factor. Keep your code ready for a new programmer.

LAB 16 Guess the secret number

A junior magician has picked a secret number. He has hidden it in a variable named secret\_number. He wants everyone who runs his program to play the Guess the secret number game, and guess what number he has picked for them. Those who don't guess the number will be stuck in an endless loop forever! Unfortunately, he does not know how to complete the code.

Your task is to help the magician complete the code in such a way so that the code:

* will ask the user to enter an integer number;
* will use a while loop;
* will check whether the number entered by the user is the same as the number picked by the magician. If the number chosen by the user is different than the magician's secret number, the user should see the message "Ha ha! You're stuck in my loop!" and be prompted to enter a number again. If the number entered by the user matches the number picked by the magician, the number should be printed to the screen, and the magician should say the following words: "Well done, muggle! You are free now."

The magician is counting on you! Don't disappoint him.

EXTRA

By the way, look at the print() function. The way we've used it here is called multi-line printing. You can use triple quotes to print strings on multiple lines in order to make text easier to read, or create a special text-based design. Experiment with it.

Code

1. secret\_number = 777
2. print(
3. """
4. +================================+
5. | Welcome to my game, muggle!    |
6. | Enter an integer number        |
7. | and guess what number I've     |
8. | picked for you.                |
9. | So, what is the secret number? |
10. +================================+
11. """)

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor305)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor335)

3.2.4 Looping your code with for

Another kind of loop available in Python comes from the observation that sometimes it's more important to count the "turns" of the loop than to check the conditions.

Imagine that a loop's body needs to be executed exactly one hundred times. If you would like to use the while loop to do it, it may look like this:

1. i = 0
2. while i &lt; 100:
3. # do\_something()
4. i += 1

It would be nice if somebody could do this boring counting for you. Is that possible?

Of course it is – there's a special loop for these kinds of tasks, and it is named for.

Actually, the for loop is designed to do more complicated tasks – it can "browse" large collections of data item by item. We'll show you how to do that soon, but right now we're going to present a simpler variant of its application.

Take a look at the snippet:

1. for i in range(100):
2. # do\_something()
3. pass

There are some new elements. Let us tell you about them:

* the for keyword opens the for loop; note – there's no condition after it; you don't have to think about conditions, as they're checked internally, without any intervention;
* any variable after the for keyword is the control variable of the loop; it counts the loop's turns, and does it automatically;
* the in keyword introduces a syntax element describing the range of possible values being assigned to the control variable;
* the range() function (this is a very special function) is responsible for generating all the desired values of the control variable; in our example, the function will create (we can even say that it will feed the loop with) subsequent values from the following set: 0, 1, 2 .. 97, 98, 99; note: in this case, the range() function starts its job from 0 and finishes it one step (one integer number) before the value of its argument;
* note the pass keyword inside the loop body – it does nothing at all; it's an empty instruction – we put it here because the for loop's syntax demands at least one instruction inside the body (by the way – if, elif, else and while express the same thing)

Our next examples will be a bit more modest in the number of loop repetitions.

Take a look at the following snippet. Can you predict its output?

1. for i in range(10):
2. print("The value of i is currently", i)

Run the code to check if you were right.

NOTE

* the loop has been executed ten times (it's the range() function's argument)
* the last control variable's value is 9 (not 10, as it starts from 0, not from 1)

The range() function invocation may be equipped with two arguments, not just one:

1. for i in range(2, 8):
2. print("The value of i is currently", i)

In this case, the first argument determines the initial (first) value of the control variable.

The last argument shows the first value the control variable will not be assigned.

Note: the range() function accepts only integers as its arguments, and generates sequences of integers.

Can you guess the output of the program? Run it to check if you were right now, too.

The first value shown is 2 (taken from the range()'s first argument.)

The last is 7 (although the range()'s second argument is 8).

3.2.5 More about the for loop and the range() function with three arguments

The range() function may also accept three arguments – take a look at the following code.

1. for i in range(2, 8, 3):
2. print("The value of i is currently", i)

The third argument is an increment – it's a value added to control the variable at every loop turn (as you may suspect, the default value of the increment is 1).

Can you tell us how many lines will appear in the console and what values they will contain?

Run the program to find out if you're right.

You should be able to see the following lines in the console window:

The value of i is currently 2

The value of i is currently 5

Do you know why? The first argument passed to the range() function tells us what the starting number of the sequence is (hence 2 in the output). The second argument tells the function where to stop the sequence (the function generates numbers up to the number indicated by the second argument, but does not include it). Finally, the third argument indicates the step, which actually means the difference between each number in the sequence of numbers generated by the function.

2 (starting number) → 5 (2 increment by 3 equals 5 – the number is within the range from 2 to 8) → 8 (5 increment by 3 equals 8 – the number is not within the range from 2 to 8, because the stop parameter is not included in the sequence of numbers generated by the function.)

Note: if the set generated by the range() function is empty, the loop won't execute its body at all.

Just like here – there will be no output:

1. for i in range(1, 1):
2. print("The value of i is currently", i)

 Note: the set generated by the range() has to be sorted in ascending order. There's no way to force the range() to create a set in a different form when the range() function accepts exactly two arguments. This means that the range()'s second argument must be greater than the first.

Thus, there will be no output here, either:

1. for i in range(2, 1):
2. print("The value of i is currently", i)

Let's have a look at a short program whose task is to write some of the first powers of two:

1. power = 1
2. for expo in range(16):
3. print("2 to the power of", expo, "is", power)
4. power \*= 2

The expo variable is used as a control variable for the loop, and indicates the current value of the exponent. The exponentiation itself is replaced by multiplying by two. Since 20 is equal to 1, then 2 × 1 is equal to 21, 2 × 21 is equal to 22, and so on. What is the greatest exponent for which our program still prints the result?

Run the code and check if the output matches your expectations.

LAB 17 Essentials of the for loop – counting mississippily

Do you know what Mississippi is? Well, it's the name of one of the states and rivers in the United States. The Mississippi River is about 2,340 miles long, which makes it the second longest river in the United States (the longest being the Missouri River). It's so long that a single drop of water needs 90 days to travel its entire length!

The word Mississippi is also used for a slightly different purpose: to count mississippily.

If you're not familiar with the phrase, we're here to explain to you what it means: it's used to count seconds.

The idea behind it is that adding the word Mississippi to a number when counting seconds aloud makes them sound closer to clock-time, and therefore "one Mississippi, two Mississippi, three Mississippi" will take approximately an actual three seconds of time! It's often used by children playing hide-and-seek to make sure the seeker does an honest count.

Your task is very simple here: write a program that uses a for loop to "count mississippily" to five. Having counted to five, the program should print to the screen the final message "Ready or not, here I come!"

Use the skeleton we've provided for you.

EXTRA

Note that the code contains two elements which may not be fully clear to you at this moment: the import time statement, and the sleep() method. We're going to talk about them soon.

For the time being, we'd just like you to know that we've imported the time module and used the sleep() method to suspend the execution of each subsequent print() function inside the for loop for one second, so that the message outputted to the console resembles an actual counting. Don't worry – you'll soon learn more about modules and methods.

Expected output:

1 Mississippi

2 Mississippi

3 Mississippi

4 Mississippi

5 Mississippi

Code

1. import time
2. # Write a for loop that counts to five.
3. # Body of the loop – print the loop iteration number and the word "Mississippi".
4. # Body of the loop – use: time.sleep(1)
5. # Write a print function with the final message.

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor306)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor336)

3.2.5 The break and continue statements

So far, we've treated the body of the loop as an indivisible and inseparable sequence of instructions that are performed completely at every turn of the loop. However, as a developer, you could be faced with the following choices:

* it appears that it's unnecessary to continue the loop as a whole; you should refrain from further execution of the loop's body and go further;
* it appears that you need to start the next turn of the loop without completing the execution of the current turn.

Python provides two special instructions for the implementation of both these tasks. Let's say for the sake of accuracy that their existence in the language is not necessary – an experienced programmer is able to code any algorithm without these instructions. Such additions, which don't improve the language's expressive power, but only simplify the developer's work, are sometimes called syntactic candy, or syntactic sugar.

These two instructions are:

* break – exits the loop immediately, and unconditionally ends the loop's operation; the program begins to execute the nearest instruction after the loop's body;
* continue – behaves as if the program has suddenly reached the end of the body; the next turn is started and the condition expression is tested immediately.

Both these words are keywords.

Now we'll show you two simple examples to illustrate how the two instructions work. Look at the following code. Run the program and analyze the output. Modify the code and experiment.

1. # break – example
3. print("The break instruction:")
4. for i in range(1, 6):
5. if i == 3:
6. break
7. print("Inside the loop.", i)
8. print("Outside the loop.")

11. # continue – example
13. print("\nThe continue instruction:")
14. for i in range(1, 6):
15. if i == 3:
16. continue
17. print("Inside the loop.", i)
18. print("Outside the loop.")

The break and continue statements: more examples

Let's return to our program that recognizes the largest among the entered numbers. We'll convert it twice, using the break and continue instructions.

Analyze the code, and judge whether and how you would use either of them.

The break variant goes here:

1. largest\_number = -99999999
2. counter = 0
4. while True:
5. number = int(input("Enter a number or type -1 to end the program: "))
6. if number == -1:
7. break
8. counter += 1
9. if number &gt; largest\_number:
10. largest\_number = number
11. if counter != 0:
12. print("The largest number is", largest\_number)
13. else:
14. print("You haven't entered any number.")

Run it, test it, and experiment with it.

And now the continue variant:

1. largest\_number = -99999999
2. counter = 0
4. number = int(input("Enter a number or type -1 to end program: "))
6. while number != -1:
7. if number == -1:
8. continue
9. counter += 1
11. if number &gt; largest\_number:
12. largest\_number = number
13. number = int(input("Enter a number or type -1 to end the program: "))
15. if counter:
16. print("The largest number is", largest\_number)
17. else:
18. print("You haven't entered any number.")

Look carefully, the user enters the first number before the program enters the while loop. The subsequent number is entered when the program is already in the loop.

Again – run the program, test it, and experiment with it.

LAB 18 The break statement – Stuck in a loop

The break statement is used to exit/terminate a loop.

Design a program that uses a while loop and continuously asks the user to enter a word unless the user enters "chupacabra" as the secret exit word, in which case the message "You've successfully left the loop." should be printed to the screen, and the loop should terminate.

Don't print any of the words entered by the user. Use the concept of conditional execution and the break statement.

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor307)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor337)

LAB 19 The continue statement – the Ugly Vowel Eater

The continue statement is used to skip the current block and move ahead to the next iteration, without executing the statements inside the loop.

It can be used with both the while and for loops.

Your task here is very special: you must design a vowel eater! Write a program that uses:

* a for loop;
* the concept of conditional execution (if-elif-else)
* the continue statement.

Your program must:

* ask the user to enter a word;
* use user\_word = user\_word.upper() to convert the word entered by the user to upper case; we'll talk about string methods and the upper() method very soon – don't worry;
* use conditional execution and the continue statement to "eat" the following vowels A, E, I, O, U from the inputted word;
* print the uneaten letters to the screen, each one of them on a separate line.

Test your program with the data we've provided for you.

Sample input:

Gregory

Expected output:

G

R

G

R

Y

Sample input:

abstemious

Expected output:

B

S

T

M

S

Sample input:

IOUEA

Expected output:

Code

1. # Prompt the user to enter a word
2. # and assign it to the user\_word variable.
4. for letter in user\_word:
5. # Complete the body of the for loop.

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor308)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor338)

LAB 20 The continue statement – the Pretty Vowel Eater

Your task here is even more special than before: you must redesign the (ugly) vowel eater from the previous lab and create a better, upgraded (pretty) vowel eater! Write a program that uses:

* a for loop;
* the concept of conditional execution (if-elif-else)
* the continue statement.

Your program must:

* ask the user to enter a word;
* use user\_word = user\_word.upper() to convert the word entered by the user to upper case; we'll talk about string methods and the upper() method very soon – don't worry;
* use conditional execution and the continue statement to "eat" the following vowels A, E, I, O, U from the inputted word;
* assign the uneaten letters to the word\_without\_vowels variable and print the variable to the screen.

Look at the following code. We've created word\_without\_vowels and assigned an empty string to it. Use concatenation operation to ask Python to combine selected letters into a longer string during subsequent loop turns, and assign it to the word\_without\_vowels variable.

Test your program with the data we've provided for you.

Sample input:

Gregory

Expected output:

GRGRY

Sample input:

abstemious

Expected output:

BSTMS

Sample input:

IOUEA

Expected output:

Code

1. word\_without\_vowels = ""
3. # Prompt the user to enter a word
4. # and assign it to the user\_word variable.

7. for letter in user\_word:
8. # Complete the body of the loop.
10. # Print the word assigned to word\_without\_vowels.

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor309)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor339)

3.2.6 The while loop and the else branch

Both loops, while and for, have one interesting (and rarely used) feature.

We'll show you how it works – try to judge for yourself if it's usable and whether you can live without it or not.

In other words, try to convince yourself if the feature is valuable and useful, or is just syntactic sugar.

Take a look at the following snippet. There's something strange at the end – the else keyword.

As you may have suspected, loops may have the else branch too, like ifs.

The loop's else branch is always executed once, regardless of whether the loop has entered its body or not.

Can you guess the output? Run the program to check if you were right.

1. i = 1
2. while i &lt; 5:
3. print(i)
4. i += 1
5. else:
6. print("else:", i)

Modify the snippet a bit so that the loop has no chance to execute its body even once:

The while's condition is False at the beginning – can you see it?

Run and test the program, and check whether the else branch has been executed or not.

3.2.7 The for loop and the else branch

for loops behave a bit differently – take a look at the following snippet and run it.

1. for i in range(5):
2. print(i)
3. else:
4. print("else:", i)

The output may be a bit surprising.

The i variable retains its last value.

Modify the code a bit to carry out one more experiment.

1. i = 111
2. for i in range(2, 1):
3. print(i)
4. else:
5. print("else:", i)

Can you guess the output?

The loop's body won't be executed here at all. Note: we've assigned the i variable before the loop.

Run the program and check its output.

When the loop's body isn't executed, the control variable retains the value it had before the loop.

Note: if the control variable doesn't exist before the loop starts, it won't exist when the execution reaches the else branch.

How do you feel about this variant of else?

Soon we'll tell you about some other kinds of variables. Our current variables can only store one value at a time, but there are variables that can do much more – they can store as many values as you want. But let's do some labs, first.

LAB 21 Essentials of the while loop

Listen to this story: a boy and his father, a computer programmer, are playing with wooden blocks. They are building a pyramid.

Their pyramid is a bit weird, as it is actually a pyramid-shaped wall – it's flat. The pyramid is stacked according to one simple principle: each lower layer contains one block more than the layer above.

The figure illustrates the rule used by the builders:

Your task is to write a program which reads the number of blocks the builders have, and outputs the height of the pyramid that can be built using these blocks.

Note: the height is measured by the number of fully completed layers – if the builders don't have a sufficient number of blocks and cannot complete the next layer, they finish their work immediately.

Test your code using the data we've provided.

Sample input:

6

Expected output:

The height of the pyramid: 3

Sample input:

20

Expected output:

The height of the pyramid: 3

Sample input:

1000

Expected output:

The height of the pyramid: 44

Sample input:

2

Expected output:

The height of the pyramid: 1

Code

1. blocks = int(input("Enter the number of blocks: "))
2. #
3. # Write your code here.
4. #
5. print("The height of the pyramid:", height)

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor310)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor340)

LAB 22 Collatz's hypothesis

In 1937, a German mathematician named Lothar Collatz formulated an intriguing hypothesis (it still remains unproven) which can be described in the following way:

take any non-negative and non-zero integer number and name it c0;

if it's even, evaluate a new c0 as c0 ÷ 2;

otherwise, if it's odd, evaluate a new c0 as 3 × c0 + 1;

if c0 ≠ 1, go back to point 2.

The hypothesis says that regardless of the initial value of c0, it will always go to 1.

Of course, it's an extremely complex task to use a computer in order to prove the hypothesis for any natural number (it may even require artificial intelligence), but you can use Python to check some individual numbers. Maybe you'll even find the one which would disprove the hypothesis.

Write a program which reads one natural number and executes these steps as long as c0 remains different from 1. We also want you to count the steps needed to achieve the goal. Your code should output all the intermediate values of c0, too.

Hint: the most important part of the problem is how to transform Collatz's idea into a while loop – this is the key to success.

Test your code using the data we've provided.

Sample input:

15

Expected output:

46

46

70

35

106

53

160

80

40

20

10

5

16

8

4

2

1

steps = 17

Sample input:

16

Expected output:

8

4

2

1

steps = 4

Sample input:

1023

Expected output:

3070

1535

4606

2303

6910

3455

10366

5183

15550

7775

23326

11663

34990

17495

52486

26243

78730

39365

118096

59048

29524

14762

7381

22144

11072

5536

2768

1384

692

346

173

173

260

130

65

196

98

49

148

74

37

37

56

28

14

7

22

11

34

17

52

26

13

40

20

10

5

16

8

4

2

1

2

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor311)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor341)

3.2 SECTION SUMMARY

1. There are two types of loops in Python: while and for:

the while loop executes a statement or a set of statements as long as a specified boolean condition is true, e.g.:

1. # Example 1
2. while True:
3. print("Stuck in an infinite loop.")
5. # Example 2
6. counter = 5
7. while counter &gt; 2:
8. print(counter)
9. counter -= 1

The for loop executes a set of statements many times; it's used to iterate over a sequence (e.g. a list, a dictionary, a tuple, or a set – you will learn about them soon) or other iterable objects (e.g. strings). You can use the for loop to iterate over a sequence of numbers using the built-in range function. Look at the following examples:

1. # Example 1
2. word = "Python"
3. for letter in word:
4. print(letter, end="\*")
6. # Example 2
7. for i in range(1, 10):
8. if i % 2 == 0:
9. print(i)

2. You can use the break and continue statements to change the flow of a loop:

You use break to exit a loop, e.g.:

1. text = "OpenEDG Python Institute"
2. for letter in text:
3. if letter == "P":
4. break
5. print(letter, end="")

You use continue to skip the current iteration, and continue with the next iteration, e.g.:

1. text = "pyxpyxpyx"
2. for letter in text:
3. if letter == "x":
4. continue
5. print(letter, end="")

3. The while and for loops can also have an else clause in Python. The else clause executes after the loop finishes its execution as long as it has not been terminated by break, e.g.:

1. n = 0
3. while n != 3:
4. print(n)
5. n += 1
6. else:
7. print(n, "else")
9. print()
11. for i in range(0, 3):
12. print(i)
13. else:
14. print(i, "else")

4. The range() function generates a sequence of numbers. It accepts integers and returns range objects. The syntax of range() looks as follows: range(start, stop, step), where:

* start is an optional parameter specifying the starting number of the sequence (0 by default)
* stop is an optional parameter specifying the end of the sequence generated (it is not included),
* and step is an optional parameter specifying the difference between the numbers in the sequence (1 by default.)

Example code:

1. for i in range(3):
2. print(i, end=" ")  # Outputs: 0 1 2
4. for i in range(6, 1, -2):
5. print(i, end=" ")  # Outputs: 6, 4, 2

3.2 SECTION QUIZ

Question 1: Create a for loop that counts from 0 to 10, and prints odd numbers to the screen. Use the following skeleton:

for i in range(1, 11):

  # Line of code.

      # Line of code.

Question 2: Create a while loop that counts from 0 to 10, and prints odd numbers to the screen. Use the following skeleton:

x = 1

while x &lt; 11:

  # Line of code.

      # Line of code.

  # Line of code.

Question 3: Create a program with a for loop and a break statement. The program should iterate over characters in an email address, exit the loop when it reaches the @ symbol, and print the part before @ on one line. Use the following skeleton:

for ch in "john.smith@pythoninstitute.org":

if ch == "@":

# Line of code.

  # Line of code.

Question 4: Create a program with a for loop and a continue statement. The program should iterate over a string of digits, replace each 0 with x, and print the modified string to the screen. Use the following skeleton:

for digit in "0165031806510":

    if digit == "0":

# Line of code.

      # Line of code.

  # Line of code.

Question 5: What is the output of the following code?

n = 3

while n &gt; 0:

print(n + 1)

n -= 1

else:

print(n)

Question 6: What is the output of the following code?

n = range(4)

for num in n:

print(num – 1)

else:

print(num)

Question 7: What is the output of the following code?

for i in range(0, 6, 3):

print(i)

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor365)