xml version='1.0' encoding='utf-8'?





Section 3.3 – Logic and bit operations in Python

In this section, you will learn about logical and bitwise operators in Python, and such concepts as the truth table and bit shifting.

3.3.1 Computer logic

Have you noticed that the conditions we've used so far have been very simple, not to say, quite primitive? The conditions we use in real life are much more complex. Let's look at this sentence:

If we have some free time, and the weather is good, we will go for a walk.

We've used the conjunction and, which means that going for a walk depends on the simultaneous fulfilment of these two conditions. In the language of logic, such a connection of conditions is called a conjunction. And now another example:

If you are in the mall or I am in the mall, one of us will buy a gift for Mom.

The appearance of the word or means that the purchase depends on at least one of these conditions. In logic, such a compound is called a disjunction.

It's clear that Python must have operators to build conjunctions and disjunctions. Without them, the expressive power of the language would be substantially weakened. They're called logical operators.

The and operator

One logical conjunction operator in Python is the word and. It's a binary operator with a priority that is lower than the one expressed by the comparison operators. It allows us to code complex conditions without the use of parentheses like this one:

counter &gt; 0 and value == 100

The result provided by the and operator can be determined on the basis of the truth table.

If we consider the conjunction of A and B, the set of possible values of arguments and corresponding values of the conjunction looks as follows:

|  |  |  |
| --- | --- | --- |
| Argument A | Argument B | A and B |
| False | False | False |
| False | True | False |
| True | False | False |
| True | True | True |

The or operator

A disjunction operator is the word or. It's a binary operator with a lower priority than and (just like + compared to). Its truth table is as follows:

|  |  |  |
| --- | --- | --- |
| Argument A | Argument B | A or B |
| False | False | False |
| False | True | True |
| True | False | True |
| True | True | True |

The not operator

In addition, there's another operator that can be applied to the construction of conditions. It's a unary operator performing a logical negation. Its operation is simple: it turns truth into falsehood and falsehood into truth.

This operator is written as the word not, and its priority is very high: the same as the unary + and -. Its truth table is simple:

|  |  |
| --- | --- |
| Argument | not Argument |
| False | True |
| True | False |

3.3.2 Logical expressions

Let's create a variable named var and assign 1 to it. The following conditions are pairwise equivalent:

# Example 1:

print(var &gt; 0)

print(not (var &lt;= 0))

# Example 2:

print(var != 0)

print(not (var == 0))

You may be familiar with De Morgan's laws. They say that:

The negation of a conjunction is the disjunction of the negations.

The negation of a disjunction is the conjunction of the negations.

Let's write the same thing using Python:

not (p and q) == (not p) or (not q)

not (p or q) == (not p) and (not q)

Note how the parentheses have been used to code the expressions ‒ we put them there to improve readability.

We should add that none of these two-argument operators can be used in the abbreviated form known as op=. This exception is worth remembering.

3.3.3 Logical values vs. single bits

Logical operators take their arguments as a whole regardless of how many bits they contain. The operators are aware only of the value: zero (when all the bits are reset) means False; not zero (when at least one bit is set) means True.

The result of their operations is one of these values: False or True. This means that this snippet will assign the value True to the j variable if i is not zero; otherwise, it will be False.

i = 1

j = not not i

3.3.4 Bitwise operators

However, there are four operators that allow you to manipulate single bits of data. They are called bitwise operators.

They cover all the operations we mentioned before in the logical context, and one additional operator. This is the xor (as in exclusive or) operator, and is denoted as ^ (caret).

Here are all of them:

* & (ampersand) ‒ bitwise conjunction;
* | (bar) ‒ bitwise disjunction;
* ~ (tilde) ‒ bitwise negation;
* ^ (caret) ‒ bitwise exclusive or (xor).

Bitwise operations (&, |, and ^)

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Argument A | Argument B | A & B | A | B | A ^ B |
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 |

Bitwise operations (~)

|  |  |
| --- | --- |
| Argument | ~ Argument |
| 0 | 1 |
| 1 | 0 |

Let's make it easier:

* & requires exactly two 1s to provide 1 as the result;
* | requires at least one 1 to provide 1 as the result;
* ^ requires exactly one 1 to provide 1 as the result.

Let us add an important remark: the arguments of these operators must be integers; we must not use floats here.

The difference in the operation of the logical and bit operators is important: the logical operators do not penetrate into the bit level of its argument. They're only interested in the final integer value.

Bitwise operators are stricter: they deal with every bit separately. If we assume that the integer variable occupies 64 bits (which is common in modern computer systems), you can imagine the bitwise operation as a 64-fold evaluation of the logical operator for each pair of bits of the arguments. This analogy is obviously imperfect, as in the real world all these 64 operations are performed at the same time (simultaneously).

Logical vs. bit operations

We'll now show you an example of the difference in operation between the logic and bit operations. Let's assume that the following assignments have been performed:

i = 15

j = 22

If we assume that the integers are stored with 32 bits, the bitwise image of the two variables will be as follows:

i: 00000000000000000000000000001111

j: 00000000000000000000000000010110

The assignment is given:

log = i and j

We are dealing with a logical conjunction here. Let's trace the course of the calculations. Both variables i and j are not zeros, so will be deemed to represent True. Consulting the truth table for the and operator, we can see that the result will be True. No other operations are performed.

log: True

Now the bitwise operation ‒ here it is:

bit = i & j

The & operator will operate with each pair of corresponding bits separately, producing the values of the relevant bits of the result. Therefore, the result will be as follows:

|  |  |
| --- | --- |
| i | 00000000000000000000000000001111 |
| j | 00000000000000000000000000010110 |
| bit = i & j | 00000000000000000000000000000110 |

These bits correspond to the integer value of six.

Let's look at the negation operators now. First the logical one:

logneg = not i

The logneg variable will be set to False ‒ nothing more needs to be done.

The bitwise negation goes like this:

bitneg = ~i

It may be a bit surprising: the bitneg variable value is -16. This may seem strange, but isn't at all. If you wish to learn more, you should check out the binary numeral system and the rules governing two's complement numbers.

|  |  |
| --- | --- |
| i | 00000000000000000000000000001111 |
| bitneg = ~i | 11111111111111111111111111110000 |

Each of these two-argument operators can be used in abbreviated form. These are the examples of their equivalent notations:

|  |  |
| --- | --- |
| x = x & y | x &= y |
| x = x | y | x |= y |
| x = x ^ y | x ^= y |

3.3.5 How do we deal with single bits?

We'll now show you what you can use bitwise operators for. Imagine that you're a developer obliged to write an important piece of an operating system. You've been told that you're allowed to use a variable assigned in the following way:

flag\_register = 0x1234

The variable stores the information about various aspects of system operation. Each bit of the variable stores one yes/no value. You've also been told that only one of these bits is yours ‒ the third (remember that bits are numbered from zero, and bit number zero is the lowest one, while the highest is number 31). The remaining bits are not allowed to change, because they're intended to store other data. Here's your bit marked with the letter x:

flag\_register = 0000000000000000000000000000x000

You may be faced with the following tasks:

1. Check the state of your bit ‒ you want to find out the value of your bit; comparing the whole variable to zero will not do anything, because the remaining bits can have completely unpredictable values, but you can use the following conjunction property:

x & 1 = x

x & 0 = 0

If you apply the & operation to the flag\_register variable along with the following bit image:

00000000000000000000000000001000

(note the 1 at your bit's position) as the result, you obtain one of the following bit strings:

00000000000000000000000000001000 if your bit was set to 1

00000000000000000000000000000000 if your bit was reset to 0

Such a sequence of zeros and ones, whose task is to grab the value or to change the selected bits, is called a bit mask.

Let's build a bit mask to detect the state of your bit. It should point to the third bit. That bit has the weight of 23 = 8. A suitable mask could be created by the following declaration:

the\_mask = 8

You can also make a sequence of instructions depending on the state of your bit. Here it is:

if flag\_register & the\_mask:

# My bit is set.

else:

# My bit is reset.

2. Reset your bit ‒ you assign a zero to the bit while all the other bits must remain unchanged; let's use the same property of the conjunction as before, but let's use a slightly different mask ‒ exactly as follows:

11111111111111111111111111110111

Note that the mask was created as a result of the negation of all the bits of the\_mask variable. Resetting the bit is simple, and looks like this (choose the one you like more):

flag\_register = flag\_register & ~the\_mask

flag\_register &= ~the\_mask

3. Set your bit ‒ you assign a 1 to your bit, while all the remaining bits must remain unchanged; use the following disjunction property:

x | 1 = 1

x | 0 = x

You're now ready to set your bit with one of the following instructions:

flag\_register = flag\_register | the\_mask

flag\_register |= the\_mask

4. Negate your bit ‒ you replace a 1 with a 0 and a 0 with a 1. You can use an interesting property of the xor operator:

x ^ 1 = ~x

x ^ 0 = x

and negate your bit with the following instructions:

flag\_register = flag\_register ^ the\_mask

flag\_register ^= the\_mask

3.3.6 Binary left shift and binary right shift

Python offers yet another operation relating to single bits: shifting. This is applied only to integer values, and you mustn't use floats as arguments for it.

You already apply this operation very often and quite unconsciously. How do you multiply any number by ten? Take a look:

12345 × 10 = 123450

As you can see, multiplying by ten is in fact a shift of all the digits to the left and filling the resulting gap with zero.

Division by ten? Take a look:

12340 ÷ 10 = 1234

Dividing by ten is nothing but shifting the digits to the right.

The same kind of operation is performed by the computer, but with one difference: as two is the base for binary numbers (not 10), shifting a value one bit to the left thus corresponds to multiplying it by two; respectively, shifting one bit to the right is like dividing by two (notice that the rightmost bit is lost).

The shift operators in Python are a pair of digraphs: &lt;&lt; and &gt;&gt;, clearly suggesting in which direction the shift will act.

value &lt;&lt; bits

value &gt;&gt; bits

The left argument of these operators is an integer value whose bits are shifted. The right argument determines the size of the shift.

It shows that this operation is certainly not commutative.

The priority of these operators is very high. You'll see them in the updated table of priorities, which we'll show you at the end of this section.

Take a look at the shifts in the code.

1. var = 17
2. var\_right = var &gt;&gt; 1
3. var\_left = var &lt;&lt; 2
4. print(var, var\_left, var\_right)

The final print() invocation produces the following output:

17 68 8

Note:

* 17 &gt;&gt; 1 → 17 // 2 (17 floor-divided by 2 to the power of 1) → 8 (shifting to the right by one bit is the same as integer division by two)
* 17 &lt;&lt; 2 → 17 \* 4 (17 multiplied by 2 to the power of 2) → 68 (shifting to the left by two bits is the same as integer multiplication by four)

And here is the updated priority table, containing all the operators introduced so far:

|  |  |  |
| --- | --- | --- |
| Priority | Operator |  |
| 1 | ~, +, - | unary |
| 2 | \*\* |  |
| 3 | \*, /, //, % |  |
| 4 | +, - | binary |
| 5 | &lt;&lt;, &gt;&gt; |  |
| 6 | &lt;, &lt;=, &gt;, &gt;= |  |
| 7 | ==, != |  |
| 8 | & |  |
| 9 | | |  |
| 10 | =, +=, -=, \*=, /=, %=, &=, ^=, |=, &gt;&gt;=, &lt;&lt;= |  |

3.3 SECTION SUMMARY

1. Python supports the following logical operators:

* and → if both operands are true, the condition is true, e.g. (True and True) is True
* or → if any of the operands are true, the condition is true, e.g. (True or False) is True
* not → returns false if the result is true, and returns true if the result is false, e.g. not True is False.

2. You can use bitwise operators to manipulate single bits of data. The following sample data:

* x = 15, which is 0000 1111 in binary,
* y = 16, which is 0001 0000 in binary.

will be used to illustrate the meaning of bitwise operators in Python. Analyze the following examples:

* & does a bitwise and, e.g. x & y = 0, which is 0000 0000 in binary,
* | does a bitwise or, e.g. x | y = 31, which is 0001 1111 in binary,
* ˜ does a bitwise not, e.g. ˜ x = 240\*, which is 1111 0000 in binary,
* ^ does a bitwise xor, e.g. x ^ y = 31, which is 0001 1111 in binary,
* &gt;&gt; does a bitwise right shift, e.g. y &gt;&gt; 1 = 8, which is 0000 1000 in binary,
* &lt;&lt; does a bitwise left shift, e.g. y &lt;&lt; 3 = , which is 1000 0000 in binary,

\* -16 (decimal from signed 2's complement) — read more about the [Two's complement](https://en.wikipedia.org/wiki/Two%27s_complement) operation.

3.3 SECTION QUIZ

Question 1: What is the output of the following snippet?

1. x = 1
2. y = 0
4. z = ((x == y) and (x == y)) or not(x == y)
5. print(not(z))

Question 2: What is the output of the following snippet?

1. x = 4
2. y = 1
4. a = x & y
5. b = x | y
6. c = ~x  # tricky!
7. d = x ^ 5
8. e = x &gt;&gt; 2
9. f = x &lt;&lt; 2
11. print(a, b, c, d, e, f)

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor366)

Section 3.4 – Lists

Here you will learn about Python lists and how to perform various operations on them. You will learn how to index, update, and delete list elements, how to perform slices, and how to use some of the most important list functions and methods.

3.4.1 Why do we need lists?

It may happen that you have to read, store, process, and finally, print dozens, maybe hundreds, perhaps even thousands of numbers. What then? Do you need to create a separate variable for each value? Will you have to spend long hours writing statements like the following one?

var1 = int(input())

var2 = int(input())

var3 = int(input())

var4 = int(input())

var5 = int(input())

var6 = int(input())

:

:

If you don't think that this is a complicated task, then take a piece of paper and write a program that:

* reads five numbers;
* prints them in order from the smallest to the largest (NB, this kind of processing is called sorting).

You should find that you don't even have enough paper to complete the task.

So far, you've learned how to declare variables that are able to store exactly one given value at a time. Such variables are sometimes called scalars by analogy with mathematics. All the variables you've used so far are actually scalars.

Think of how convenient it would be to declare a variable that could store more than one value. For example, a hundred, or a thousand or even ten thousand. It would still be one and the same variable, but very wide and capacious. Sounds appealing? Perhaps, but how would it handle such a container full of different values? How would it choose just the one you need?

What if you could just number them? And then say: give me the value number 2; assign the value number 15; increase the value number 10000.

We'll show you how to declare such multi-value variables. We'll do this with the example we just suggested. We'll write a program that sorts a sequence of numbers. We won't be particularly ambitious ‒ we'll assume that there are exactly five numbers.

Let's create a variable called numbers; it's assigned with not just one number, but is filled with a list consisting of five values (note: the list starts with an open square bracket and ends with a closed square bracket; the space between the brackets is filled with five numbers separated by commas).

numbers = [10, 5, 7, 2, 1]

Let's say the same thing using adequate terminology: numbers is a list consisting of five values, all of them numbers. We can also say that this statement creates a list of length equal to five (as in there are five elements inside it).

The elements inside a list may have different types. Some of them may be integers, others floats, and yet others may be lists.

Python has adopted a convention stating that the elements in a list are always numbered starting from zero. This means that the item stored at the beginning of the list will have the number zero. Since there are five elements in our list, the last of them is assigned the number four. Don't forget this.

You'll soon get used to it, and it'll become second nature.

Before we go any further in our discussion, we have to state the following: our list is a collection of elements, but each element is a scalar.

3.4.2 Indexing lists

How do you change the value of a chosen element in the list?

Let's assign a new value of 111 to the first element in the list. We do it this way:

1. numbers = [10, 5, 7, 2, 1]
2. print("Original list contents:", numbers)  # Printing original list contents.
4. numbers[0] = 111
5. print("New list contents: ", numbers)  # Current list contents.

And now we want the value of the fifth element to be copied to the second element ‒ can you guess how to do it?

1. numbers = [10, 5, 7, 2, 1]
2. print("Original list contents:", numbers)  # Printing original list contents.
4. numbers[0] = 111
5. print("\nPrevious list contents:", numbers)  # Printing previous list contents.
7. numbers[1] = numbers[4]  # Copying value of the fifth element to the second.
8. print("New list contents:", numbers)  # Printing current list contents.

The value inside the brackets which selects one element of the list is called an index, while the operation of selecting an element from the list is known as indexing.

We're going to use the print() function to print the list content each time we make the changes. This will help us follow each step more carefully and see what's going on after a particular list modification.

Note: all the indices used so far are literals. Their values are fixed at runtime, but any expression can be the index, too. This opens up lots of possibilities.

3.4.3 Accessing list content

Each of the list's elements may be accessed separately. For example, it can be printed:

1. print(numbers[0]) # Accessing the list's first element.

Assuming that all of the previous operations have been completed successfully, the snippet will send 111 to the console.

1. numbers = [10, 5, 7, 2, 1]
2. print("Original list contents:", numbers)  # Printing original list contents.
4. numbers[0] = 111
5. print("\nPrevious list contents:", numbers)  # Printing previous list contents.
7. numbers[1] = numbers[4]  # Copying value of the fifth element to the second.
8. print("Previous list contents:", numbers)  # Printing previous list contents.
10. print("\nList length:", len(numbers))  # Printing the list's length.

As you can see, the list may also be printed as a whole – just like here:

1. print(numbers) # Printing the whole list.

As you've probably noticed before, Python decorates the output in a way that suggests that all the presented values form a list. The output from the example snippet looks like this:

[111, 1, 7, 2, 1]

The len() function

The length of a list may vary during execution. New elements may be added to the list, while others may be removed from it. This means that the list is a very dynamic entity.

If you want to check the list's current length, you can use a function named len() (its name comes from length).

The function takes the list's name as an argument, and returns the number of elements currently stored inside the list (in other words ‒ the list's length).

Look at the last line of the previous code, run the program and check what value it will print to the console. Can you guess?

3.4.4 Removing elements from a list

Any of the list's elements may be removed at any time ‒ this is done with an instruction named del (delete). Note: it's an instruction, not a function.

You have to point to the element to be removed ‒ it'll vanish from the list, and the list's length will be reduced by one.

Look at the following snippet. Can you guess what output it will produce? Run the program and check.

1. del numbers[1]
2. print(len(numbers))
3. print(numbers)

You can't access an element which doesn't exist ‒ you can neither get its value nor assign it a value. Both of these instructions will cause runtime errors now:

1. print(numbers[4])
2. numbers[4] = 1

Add the previous snippet after the last line of code, run the program and check what happens.

1. numbers = [10, 5, 7, 2, 1]
2. print("Original list content:", numbers)  # Printing original list content.
4. numbers[0] = 111
5. print("\nPrevious list content:", numbers)  # Printing previous list content.
7. numbers[1] = numbers[4]  # Copying value of the fifth element to the second.
8. print("Previous list content:", numbers)  # Printing previous list content.
10. print("\nList's length:", len(numbers))  # Printing previous list length.
12. ###
14. del numbers[1]  # Removing the second element from the list.
15. print("New list's length:", len(numbers))  # Printing new list length.
16. print("\nNew list content:", numbers)  # Printing current list content.
18. ###

Note: we've removed one of the list's elements ‒ there are only four elements in the list now. This means that et number four doesn't exist.

3.4.5 Negative indices are legal

It may look strange, but negative indices are legal, and can be very useful.

An element with an index equal to -1 is the last one in the list.

1. numbers = [111, 7, 2, 1]
2. print(numbers[-1])

The example snippet will output 1. Run the program and check.

Similarly, the element with an index equal to -2 is the one before last in the list.

1. numbers = [111, 7, 2, 1]
2. print(numbers[-2])

The example snippet will output 2.

The last accessible element in our list is numbers[-4] (the first one) ‒ don't try to go any further!

LAB 23 The basics of lists

There once was a hat. The hat contained no rabbit, but a list of five numbers: 1, 2, 3, 4, and 5.

Your task is to:

* write a line of code that prompts the user to replace the middle number in the list with an integer number entered by the user (Step 1)
* write a line of code that removes the last element from the list (Step 2)
* write a line of code that prints the length of the existing list (Step 3).

Ready for this challenge?

Code

1. hat\_list = [1, 2, 3, 4, 5]  # This is an existing list of numbers hidden in the hat.
3. # Step 1: write a line of code that prompts the user
4. # to replace the middle number with an integer number entered by the user.
6. # Step 2: write a line of code that removes the last element from the list.
8. # Step 3: write a line of code that prints the length of the existing list.
10. print(hat\_list)

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor312)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor342)

3.4.6 Functions vs. methods

A method is a specific kind of function ‒ it behaves like a function and looks like a function, but differs in the way in which it acts, and in its invocation style.

A function doesn't belong to any data ‒ it gets data, it may create new data and it (generally) produces a result.

A method does all these things, but is also able to change the state of a selected entity.

A method is owned by the data it works for, while a function is owned by the whole code.

This also means that invoking a method requires some specification of the data from which the method is invoked.

It may sound puzzling here, but we'll deal with it in depth when we delve into object-oriented programming.

In general, a typical function invocation may look like this:

result = function(arg)

The function takes an argument, does something, and returns a result.

A typical method invocation usually looks like this:

result = data.method(arg)

NOTE the name of the method is preceded by the name of the data which owns the method. Next, you add a dot, followed by the method name, and a pair of parenthesis enclosing the arguments.

The method will behave like a function, but can do something more ‒ it can change the internal state of the data from which it has been invoked.

You may ask: why are we talking about methods, not about lists?

This is an essential issue right now, as we're going to show you how to add new elements to an existing list. This can be done with methods owned by all the lists, not by functions.

3.4.7 Adding elements to a list: append() and insert()

A new element may be glued to the end of the existing list:

list.append(value)

Such an operation is performed by a method named append(). It takes its argument's value and puts it at the end of the list which owns the method.

The list's length then increases by one.

The insert() method is a bit smarter ‒ it can add a new element at any place in the list, not only at the end.

list.insert(location, value)

It takes two arguments:

* the first shows the required location of the element to be inserted; note: all the existing elements that occupy locations to the right of the new element (including the one at the indicated position) are shifted to the right, in order to make space for the new element;
* the second is the element to be inserted.

Look at the following code. See how we use the append() and insert() methods. Pay attention to what happens after using insert(): the former first element is now the second, the second the third, and so on.

1. numbers = [111, 7, 2, 1]
2. print(len(numbers))
3. print(numbers)
5. ###
7. numbers.append(4)
9. print(len(numbers))
10. print(numbers)
12. ###
14. numbers.insert(0, 222)
15. print(len(numbers))
16. print(numbers)
18. #

Add the following snippet after the last line of code:

1. numbers.insert(1, 333)

Print the final list content to the screen and see what happens. This snippet inserts 333 into the list, making it the second element. The former second element becomes the third, the third the fourth, and so on.

You can start a list's life by making it empty (this is done with an empty pair of square brackets) and then adding new elements to it as needed.

Take a look at the following snippet. Try to guess its output after the for loop execution. Run the program to check if you were right.

1. my\_list = []  # Creating an empty list.
3. for i in range(5):
4. my\_list.append(i + 1)
6. print(my\_list)

It'll be a sequence of consecutive integer numbers from 1 (you then add one to all the appended values) to 5.

We've modified the snippet a bit:

1. my\_list = []  # Creating an empty list.
3. for i in range(5):
4. my\_list.insert(0, i + 1)
6. print(my\_list)

What happens now? Run the program and check if this time you're right, too.

You should get the same sequence, but in reverse order (this is the merit of using the insert() method).

3.4.8 Making use of lists

The for loop has a special variant that can process lists very effectively ‒ let's take a look at that.

1. my\_list = [10, 1, 8, 3, 5]
2. total = 0
4. for i in range(len(my\_list)):
5. total += my\_list[i]
7. print(total)

Let's assume that you want to calculate the sum of all the values stored in the my\_list list.

You need a variable whose sum will be stored and initially assigned a value of 0 ‒ its name will be total. (Note: we're not going to name it sum as Python uses the same name for one of its built-in functions: sum(). Using the same name would generally be considered bad practice.) Then you add to it all the elements of the list using the for loop. Take a look at the previous snippet.

Let's comment on this example:

* the list is assigned a sequence of five integer values;
* the i variable takes the values 0, 1, 2, 3, and 4, and then it indexes the list, selecting the subsequent elements: the first, second, third, fourth and fifth;
* each of these elements is added together by the += operator to the total variable, giving the final result at the end of the loop;
* note the way in which the len() function has been employed ‒ it makes the code independent of any possible changes in the list's contents.

The second aspect of the for loop

But the for loop can do much more. It can hide all the actions connected to the list's indexing, and deliver all the list's elements in a handy way.

This modified snippet shows how it works:

1. my\_list = [10, 1, 8, 3, 5]
2. total = 0
4. for i in my\_list:
5. total += i
7. print(total)

What happens here?

* the for instruction specifies the variable used to browse the list (i here) followed by the in keyword and the name of the list being processed (my\_list here)
* the i variable is assigned the values of all the subsequent list's elements, and the process occurs as many times as there are elements in the list;
* this means that you use the i variable as a copy of the elements' values, and you don't need to use indices;
* the len() function is not needed here, either.

3.4.9 Lists in action

Let's leave lists aside for a short moment and look at one intriguing issue.

Imagine that you need to rearrange the elements of a list, i.e. reverse the order of the elements: the first and the fifth as well as the second and fourth elements will be swapped. The third one will remain untouched.

Question: how can you swap the values of two variables?

Take a look at the snippet:

1. variable\_1 = 1
2. variable\_2 = 2
4. variable\_2 = variable\_1
5. variable\_1 = variable\_2

If you do something like this, you would lose the value previously stored in variable\_2. Changing the order of the assignments will not help. You need a third variable that serves as an auxiliary storage.

This is how you can do it:

1. variable\_1 = 1
2. variable\_2 = 2
4. auxiliary = variable\_1
5. variable\_1 = variable\_2
6. variable\_2 = auxiliary

Python offers a more convenient way of doing the swap – take a look:

1. variable\_1 = 1
2. variable\_2 = 2
4. variable\_1, variable\_2 = variable\_2, variable\_1

Clear, effective and elegant – isn't it?

Now you can easily swap the list's elements to reverse their order:

1. my\_list = [10, 1, 8, 3, 5]
3. my\_list[0], my\_list[4] = my\_list[4], my\_list[0]
4. my\_list[1], my\_list[3] = my\_list[3], my\_list[1]
6. print(my\_list)

Run the snippet. Its output should look like this:

[5, 3, 8, 1, 10]

It looks fine with five elements.

Will it still be acceptable with a list containing 100 elements? No, it won't.

Can you use the for loop to do the same thing automatically, irrespective of the list's length? Yes, you can.

This is how we've done it:

1. for i in range(length // 2):
2. my\_list[i], my\_list[length – i – 1] = my\_list[length – i – 1], my\_list[i]
4. print(my\_list)

Note:

* we've assigned the length variable with the current list's length (this makes our code a bit clearer and shorter)
* we've launched the for loop to run through its body length // 2 times (this works well for lists with both even and odd lengths, because when the list contains an odd number of elements, the middle one remains untouched)
* we've swapped the ith element (from the beginning of the list) with the one with an index equal to (length – i – 1) (from the end of the list); in our example, for i equal to 0 the (length – i – 1) gives 4; for i equal to 1, it gives 3 ‒ this is exactly what we needed.

Lists are extremely useful, and you'll encounter them very often.

LAB 24 The basics of lists ‒ the Beatles

The Beatles were one of the most popular music groups of the 1960s, and the best-selling band in history. Some people consider them to be the most influential act of the rock era. Indeed, they were included in Time magazine's compilation of the 20th Century's 100 most influential people.

The band underwent many line-up changes, culminating in 1962 with the line-up of John Lennon, Paul McCartney, George Harrison, and Richard Starkey (better known as Ringo Starr).

Write a program that reflects these changes and lets you practice with the concept of lists. Your task is to:

* step 1: create an empty list named beatles;
* step 2: use the append() method to add the following members of the band to the list: John Lennon, Paul McCartney, and George Harrison;
* step 3: use the for loop and the append() method to prompt the user to add the following members of the band to the list: Stu Sutcliffe, and Pete Best;
* step 4: use the del instruction to remove Stu Sutcliffe and Pete Best from the list;
* step 5: use the insert() method to add Ringo Starr to the beginning of the list.

By the way, are you a Beatles fan? (The Beatles is one of Greg's favorite bands. But wait…who's Greg…?)

Code

1. # step 1
2. print("Step 1:", beatles)
4. # step 2
5. print("Step 2:", beatles)
7. # step 3
8. print("Step 3:", beatles)
10. # step 4
11. print("Step 4:", beatles)
13. # step 5
14. print("Step 5:", beatles)

17. # testing list length
18. print("The Fab", len(beatles))

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor313)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor343)

3.4 SECTION SUMMARY

1. The list is a type of data in Python used to store multiple objects. It is an ordered and mutable collection of comma-separated items between square brackets, e.g.:

1. my\_list = [1, None, True, "I am a string", 256, 0]

2. Lists can be indexed and updated, e.g.:

1. my\_list = [1, None, True, 'I am a string', 256, 0]
2. print(my\_list[3])  # outputs: I am a string
3. print(my\_list[-1])  # outputs: 0
5. my\_list[1] = '?
6. print(my\_list)  # outputs: [1, '?', True, 'I am a string', 256, 0]
8. my\_list.insert(0, "first")
9. my\_list.append("last")
10. print(my\_list)  # outputs: ['first', 1, '?', True, 'I am a string', 256, 0, 'last']

3. Lists can be nested, e.g.:

1. my\_list = [1, 'a', ["list", 64, [0, 1], False]]

You will learn more about nesting in Module 3.7 ‒ for the time being, we just want you to be aware that something like this is possible, too.

4. List elements and lists can be deleted, e.g.:

1. my\_list = [1, 2, 3, 4]
2. del my\_list[2]
3. print(my\_list)  # outputs: [1, 2, 4]
5. del my\_list  # deletes the whole list

Again, you will learn more about this in Module 3.6 ‒ don't worry. For the time being just try to experiment with this code and check how changing it affects the output.

5. Lists can be iterated through using the for loop, e.g.:

1. my\_list = ["white", "purple", "blue", "yellow", "green"]
3. for color in my\_list:
4. print(color)

6. The len() function may be used to check the list's length, e.g.:

1. my\_list = ["white", "purple", "blue", "yellow", "green"]
2. print(len(my\_list))  # outputs 5
4. del my\_list[2]
5. print(len(my\_list))  # outputs 4

7. A typical function invocation looks as follows: result = function(arg), while a typical method invocation looks like this: result = data.method(arg).

3.4 SECTION QUIZ

Question 1: What is the output of the following snippet?

1. lst = [1, 2, 3, 4, 5]
2. lst.insert(1, 6)
3. del lst[0]
4. lst.append(1)
6. print(lst)

Question 2: What is the output of the following snippet?

1. lst = [1, 2, 3, 4, 5]
2. lst\_2 = []
3. add = 0
5. for number in lst:
6. add += number
7. lst\_2.append(add)
9. print(lst\_2)

Question 3: What is the output of the following snippet?

1. lst = []
2. del lst
3. print(lst)

Question 4: What is the output of the following snippet?

1. lst = [1, [2, 3], 4]
2. print(lst[1])
3. print(len(lst))

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor367)