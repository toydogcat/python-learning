xml version='1.0' encoding='utf-8'?





Section 3.5 – Sorting simple lists: the bubble sort algorithm

In this section, you will learn how to sort simple lists using the Bubble sort algorithm.

3.5.1 The bubble sort

Now that you can effectively juggle the elements of lists, it's time to learn how to sort them. Many sorting algorithms have been invented so far, which differ a lot in speed, as well as in complexity. We are going to show you a very simple algorithm, easy to understand, but unfortunately not too efficient, either. It's used very rarely, and certainly not for large and extensive lists.

Let's say that a list can be sorted in two ways:

* increasing (or more precisely ‒ non-decreasing) ‒ if in every pair of adjacent elements, the former element is not greater than the latter;
* decreasing (or more precisely ‒ non-increasing) ‒ if in every pair of adjacent elements, the former element is not less than the latter.

In the following sections, we'll sort the list in increasing order, so that the numbers will be ordered from the smallest to the largest.

Here's the list:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 8 | 10 | 6 | 2 | 4 |

We'll try to use the following approach: we'll take the first and the second elements and compare them; if we determine that they're in the wrong order (i.e. the first is greater than the second), we'll swap them round; if their order is valid, we'll do nothing. A glance at our list confirms the latter ‒ the elements 01 and 02 are in the proper order, as in 8 &lt; 10.

Now look at the second and the third elements. They're in the wrong positions. We have to swap them:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 8 | 6 | 10 | 2 | 4 |

We go further, and look at the third and the fourth elements. Again, this is not what it's supposed to be like. We have to swap them:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 8 | 6 | 2 | 10 | 4 |

Now we check the fourth and the fifth elements. Yes, they too are in the wrong positions. Another swap occurs:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 8 | 6 | 2 | 4 | 10 |

The first pass through the list is already finished. We're still far from finishing our job, but something curious has happened in the meantime. The largest element, 10, has already gone to the end of the list. Note that this is the desired place for it. All the remaining elements form a picturesque mess, but this one is already in place.

Now, for a moment, try to imagine the list in a slightly different way ‒ namely, like this:

|  |
| --- |
| 10 |
| 4 |
| 2 |
| 6 |
| 8 |

Look ‒ 10 is at the top. We could say that it floated up from the bottom to the surface, just like the bubble in a glass of champagne. The sorting method derives its name from the same observation ‒ it's called a bubble sort.

Now we start with the second pass through the list. We look at the first and second elements – a swap is necessary:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 6 | 8 | 2 | 4 | 10 |

Time for the second and third elements: we have to swap them too:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 6 | 2 | 8 | 4 | 10 |

Now the third and fourth elements, and the second pass is finished, as 8 is already in place:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 6 | 2 | 4 | 8 | 10 |

We start the next pass immediately. Watch the first and the second elements carefully – another swap is needed:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 2 | 6 | 4 | 8 | 10 |

Now 6 needs to go into place. We swap the second and the third elements:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 2 | 4 | 6 | 8 | 10 |

The list is already sorted. We have nothing more to do. This is exactly what we want.

As you can see, the essence of this algorithm is simple: we compare the adjacent elements, and by swapping some of them, we achieve our goal.

Let's code into Python all the actions performed during a single pass through the list, and then we'll consider how many passes we actually need in order to perform it. We haven't explained this so far, and we'll do that a little later.

3.5.2 Sorting a list

How many passes do we need to sort the entire list?

We solve this issue in the following way: we introduce another variable; its task is to observe if any swap has been done during the pass or not; if there is no swap, then the list is already sorted, and nothing more has to be done. We create a variable named swapped, and we assign a value of False to it, to indicate that there are no swaps. Otherwise, it will be assigned True.

1. my\_list = [8, 10, 6, 2, 4]  # list to sort
3. for i in range(len(my\_list) – 1):  # we need (5 – 1) comparisons
4. if my\_list[i] &gt; my\_list[i + 1]:  # compare adjacent elements
5. my\_list[i], my\_list[i + 1] = my\_list[i + 1], my\_list[i]  # If we end up here, we have to swap the elements.

You should be able to read and understand this program without any problems:

1. my\_list = [8, 10, 6, 2, 4]  # list to sort
2. swapped = True  # It's a little fake, we need it to enter the while loop.
4. while swapped:
5. swapped = False  # no swaps so far
6. for i in range(len(my\_list) – 1):
7. if my\_list[i] &gt; my\_list[i + 1]:
8. swapped = True  # a swap occurred!
9. my\_list[i], my\_list[i + 1] = my\_list[i + 1], my\_list[i]
10. print(my\_list)

Run the program and test it.

3.5.3 The bubble sort – interactive version

Take a look at the following complete program, enriched by a conversation with the user, and allowing the user to enter and to print elements from the list: The bubble sort ‒ final interactive version.

1. my\_list = []
2. swapped = True
3. num = int(input("How many elements do you want to sort: "))
5. for i in range(num):
6. val = float(input("Enter a list element: "))
7. my\_list.append(val)
9. while swapped:
10. swapped = False
11. for i in range(len(my\_list) – 1):
12. if my\_list[i] &gt; my\_list[i + 1]:
13. swapped = True
14. my\_list[i], my\_list[i + 1] = my\_list[i + 1], my\_list[i]
16. print("\nSorted:")
17. print(my\_list)

Python, however, has its own sorting mechanisms. No one needs to write their own sorts, as there is a sufficient number of ready-to-use tools.

We explained this sorting system to you because it's important to learn how to process a list's contents, and to show you how real sorting may work.

If you want Python to sort your list, you can do it like this:

1. my\_list = [8, 10, 6, 2, 4]
2. my\_list.sort()
3. print(my\_list)

It is as simple as that.

The snippet's output is as follows:

[2, 4, 6, 8, 10]

As you can see, all the lists have a method named sort(), which sorts them as fast as possible. You've already learned about some of the list methods before, and you're going to learn more about others very soon.

3.5 SECTION SUMMARY

1. You can use the sort() method to sort elements of a list, e.g.:

1. lst = [5, 3, 1, 2, 4]
2. print(lst)
4. lst.sort()
5. print(lst)  # outputs: [1, 2, 3, 4, 5]

2. There is also a list method called reverse(), which you can use to reverse the list, e.g.:

1. lst = [5, 3, 1, 2, 4]
2. print(lst)
4. lst.reverse()
5. print(lst)  # outputs: [4, 2, 1, 3, 5]

3.5 SECTION QUIZ

Question 1: What is the output of the following snippet?

1. lst = ["D", "F", "A", "Z"]
2. lst.sort()
4. print(lst)

Question 2: What is the output of the following snippet?

1. a = 3
2. b = 1
3. c = 2
5. lst = [a, c, b]
6. lst.sort()
8. print(lst)

Question 3: What is the output of the following snippet?

1. a = "A"
2. b = "B"
3. c = "C"
4. d = " "
6. lst = [a, b, c, d]
7. lst.reverse()
9. print(lst)

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor368)

Section 3.6 – Operations on lists

In this section, you will learn how to process lists using slices and the in and not in operators. You will also analyze a few simple programs utilizing the concept of lists to learn how to apply them in more challenging projects.

3.6.1 The inner life of lists

Now we want to show you one important, and very surprising, feature of lists, which strongly distinguishes them from ordinary variables.

We want you to memorize it ‒ it may affect your future programs, and cause severe problems if forgotten or overlooked.

Take a look at the following snippet.

1. list\_1 = [1]
2. list\_2 = list\_1
3. list\_1[0] = 2
4. print(list\_2)

The program:

* creates a one-element list named list\_1;
* assigns it to a new list named list\_2;
* changes the only element of list\_1;
* prints out list\_2.

The surprising part is the fact that the program will output: [2], not [1], which seems to be the obvious solution.

Lists (and many other complex Python entities) are stored in different ways than ordinary (scalar) variables.

You could say that:

* the name of an ordinary variable is the name of its content;
* the name of a list is the name of a memory location where the list is stored.

Read these two lines once more ‒ the difference is essential for understanding what we are going to talk about next.

The assignment: list\_2 = list\_1 copies the name of the array, not its contents. In effect, the two names (list\_1 and list\_2) identify the same location in the computer memory. Modifying one of them affects the other, and vice versa.

How do you cope with that?

3.6.2 Powerful slices

Fortunately, the solution is at your fingertips ‒ it's called a slice.

A slice is an element of Python syntax that allows you to make a brand new copy of a list, or parts of a list.

It actually copies the list's contents, not the list's name.

This is exactly what you need. Take a look at the following snippet:

1. list\_1 = [1]
2. list\_2 = list\_1[:]
3. list\_1[0] = 2
4. print(list\_2)

Its output is [1].

The inconspicuous part of the code described as [:] is able to produce a brand new list.

One of the most general forms of the slice looks as follows:

my\_list[start:end-1]

As you can see, it resembles indexing, but the colon inside makes a big difference.

A slice of this form makes a new (target) list, taking elements from the source list ‒ the elements of the indices from start to end – 1.

Note: not to end but to end – 1. An element with an index equal to end is the first element which does not take part in the slicing.

Using negative values for both start and end is possible (just like in indexing).

Take a look at the snippet:

1. my\_list = [10, 8, 6, 4, 2]
2. new\_list = my\_list[1:3]
3. print(new\_list)

The new\_list list will have end – start (3 – 1 = 2) elements ‒ the ones with indices equal to 1 and 2 (but not 3).

The snippet's output is: [8, 6]

Run the following code to see how Python copies the entire list, and some fragment of a list. Feel free to experiment!

1. # Copying the entire list.
2. list\_1 = [1]
3. list\_2 = list\_1[:]
4. list\_1[0] = 2
5. print(list\_2)
6. # Copying some part of the list.
7. my\_list = [10, 8, 6, 4, 2]
8. new\_list = my\_list[1:3]
9. print(new\_list)

3.6.3 Slices – negative indices

Look at the following snippet:

my\_list[start:end]

To repeat:

* start is the index of the first element included in the slice;
* end is the index of the first element not included in the slice.

This is how negative indices work with the slice:

1. my\_list = [10, 8, 6, 4, 2]
2. new\_list = my\_list[1:-1]
3. print(new\_list)

The snippet's output is:

[8, 6, 4]

If the start specifies an element lying further than the one described by the end (from the list's beginning), the slice will be empty:

my\_list = [10, 8, 6, 4, 2]

new\_list = my\_list[-1:1]

print(new\_list)

The snippet's output is:

[]

If you omit the start in your slice, it is assumed that you want to get a slice beginning at the element with index 0.

In other words, the slice of this form:

my\_list[:end]

is a more compact equivalent of:

my\_list[0:end]

Look at the following snippet:

1. my\_list = [10, 8, 6, 4, 2]
2. new\_list = my\_list[:3]
3. print(new\_list)

This is why its output is: [10, 8, 6].

Similarly, if you omit the end in your slice, it is assumed that you want the slice to end at the element with the index len(my\_list).

In other words, the slice of this form:

my\_list[start:]

is a more compact equivalent of:

my\_list[start:len(my\_list)]

Look at the following snippet:

1. my\_list = [10, 8, 6, 4, 2]
2. new\_list = my\_list[3:]
3. print(new\_list)

Its output is therefore: [4, 2].

As we've said before, omitting both start and end makes a copy of the whole list:

1. my\_list = [10, 8, 6, 4, 2]
2. new\_list = my\_list[:]
3. print(new\_list)

The snippet's output is: [10, 8, 6, 4, 2].

More about the del instruction

The previously described del instruction is able to delete more than just a list's elements at once ‒ it can delete slices too:

1. my\_list = [10, 8, 6, 4, 2]
2. del my\_list[1:3]
3. print(my\_list)

Note: in this case, the slice doesn't produce any new list!

The snippet's output is: [10, 4, 2].

Deleting all the elements at once is possible too:

1. my\_list = [10, 8, 6, 4, 2]
2. del my\_list[:]
3. print(my\_list)

The list becomes empty, and the output is: [].

Removing the slice from the code changes its meaning dramatically.

Take a look:

1. my\_list = [10, 8, 6, 4, 2]
2. del my\_list
3. print(my\_list)

The del instruction will delete the list itself, not its content.

The print() function invocation from the last line of the code will then cause a runtime error.

3.6.4 The in and not in operators

Python offers two very powerful operators, able to look through the list in order to check whether a specific value is stored inside the list or not.

These operators are:

1. elem in my\_list
2. elem not in my\_list

The first of them (in) checks if a given element (its left argument) is currently stored somewhere inside the list (the right argument) ‒ the operator returns True in this case.

The second (not in) checks if a given element (its left argument) is absent in a list ‒ the operator returns True in this case.

Look at the following code. The snippet shows both operators in action. Can you guess its output? Run the program to check if you were right.

1. my\_list = [0, 3, 12, 8, 2]
3. print(5 in my\_list)
4. print(5 not in my\_list)
5. print(12 in my\_list)

3.6.5 Lists – some simple programs

Now we want to show you some simple programs utilizing lists.

The first of them tries to find the greater value in the list. Look at the following code.

1. my\_list = [17, 3, 11, 5, 1, 9, 7, 15, 13]
2. largest = my\_list[0]
4. for i in range(1, len(my\_list)):
5. if my\_list[i] &gt; largest:
6. largest = my\_list[i]
8. print(largest)

The concept is rather simple ‒ we temporarily assume that the first element is the largest one, and check the hypothesis against all the remaining elements in the list.

The code outputs 17 (as expected).

The code may be rewritten to make use of the newly introduced form of the for loop:

1. my\_list = [17, 3, 11, 5, 1, 9, 7, 15, 13]
2. largest = my\_list[0]
4. for i in my\_list:
5. if i &gt; largest:
6. largest = i
8. print(largest)



This program performs one unnecessary comparison, when the first element is compared with itself, but this isn't a problem at all.

The code outputs 17, too (nothing unusual).

If you need to save computer power, you can use a slice:

1. my\_list = [17, 3, 11, 5, 1, 9, 7, 15, 13]
2. largest = my\_list[0]
4. for i in my\_list[1:]:
5. if i &gt; largest:
6. largest = i
8. print(largest)

The question is: which of these two actions consumes more computer resources ‒ just one comparison, or slicing almost all of a list's elements?

Now let's find the location of a given element inside a list:

1. my\_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
2. to\_find = 5
3. found = False
5. for i in range(len(my\_list)):
6. found = my\_list[i] == to\_find
7. if found:
8. break
10. if found:
11. print("Element found at index", i)
12. else:
13. print("absent")

Note:

* the target value is stored in the to\_find variable;
* the current status of the search is stored in the found variable (True/False)
* when found becomes True, the for loop is exited.

Let's assume that you've chosen the following numbers in the lottery: 3, 7, 11, 42, 34, 49.

The numbers that have been drawn are: 5, 11, 9, 42, 3, 49.

The question is: how many numbers have you hit?

This program will give you the answer:

1. drawn = [5, 11, 9, 42, 3, 49]
2. bets = [3, 7, 11, 42, 34, 49]

5. for number in bets:
6. if number in drawn:
7. hits += 1
9. print(hits)

Note:

* the drawn list stores all the drawn numbers;
* the bets list stores your bets;
* the hits variable counts your hits.

The program output is: 4.

LAB 25 Operating with lists ‒ basics

Imagine a list ‒ not very long, not very complicated, just a simple list containing some integer numbers. Some of these numbers may be repeated, and this is the clue. We don't want any repetitions. We want them to be removed.

Your task is to write a program which removes all the number repetitions from the list. The goal is to have a list in which all the numbers appear not more than once.

Note: assume that the source list is hard-coded inside the code ‒ you don't have to enter it from the keyboard. Of course, you can improve the code and add a part that can carry out a conversation with the user and obtain all the data from her/him.

Hint: we encourage you to create a new list as a temporary work area ‒ you don't need to update the list in situ.

We've provided no test data, as that would be too easy. You can use our skeleton instead.

Code

1. my\_list = [1, 2, 4, 4, 1, 4, 2, 6, 2, 9]
2. #
3. # Write your code here.
4. #
5. print("The list with unique elements only:")
6. print(my\_list)

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor314)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor344)

3.6 SECTION SUMMARY

1. If you have a list list\_1, then the following assignment: list\_2 = list\_1 does not make a copy of the list\_1 list, but makes the variables list\_1 and list\_2 point to one and the same list in memory. For example:

1. vehicles\_one = ['car', 'bicycle', 'motor']
2. print(vehicles\_one) # outputs: ['car', 'bicycle', 'motor']
4. vehicles\_two = vehicles\_one
5. del vehicles\_one[0] # deletes 'car'
6. print(vehicles\_two) # outputs: ['bicycle', 'motor']

2. If you want to copy a list or part of the list, you can do it by performing slicing:

1. colors = ['red', 'green', 'orange']
3. copy\_whole\_colors = colors[:]  # copy the entire list
4. copy\_part\_colors = colors[0:2]  # copy part of the list

3. You can use negative indices to perform slices, too. For example:

1. sample\_list = ["A", "B", "C", "D", "E"]
2. new\_list = sample\_list[2:-1]
3. print(new\_list)  # outputs: ['C', 'D']

4. The start and end parameters are optional when performing a slice: list[start:end], e.g.:

1. my\_list = [1, 2, 3, 4, 5]
2. slice\_one = my\_list[2: ]
3. slice\_two = my\_list[ :2]
4. slice\_three = my\_list[-2: ]
6. print(slice\_one)  # outputs: [3, 4, 5]
7. print(slice\_two)  # outputs: [1, 2]
8. print(slice\_three)  # outputs: [4, 5]

5. You can delete slices using the del instruction:

1. my\_list = [1, 2, 3, 4, 5]
2. del my\_list[0:2]
3. print(my\_list)  # outputs: [3, 4, 5]
5. del my\_list[:]
6. print(my\_list)  # deletes the list content, outputs: []

6. You can test if some items exist in a list or not using the keywords in and not in, e.g.:

1. my\_list = ["A", "B", 1, 2]
3. print("A" in my\_list)  # outputs: True
4. print("C" not in my\_list)  # outputs: True
5. print(2 not in my\_list)  # outputs: False

3.6 SECTION QUIZ

Question 1: What is the output of the following snippet?

1. list\_1 = ["A", "B", "C"]
2. list\_2 = list\_1
3. list\_3 = list\_2
5. del list\_1[0]
6. del list\_2[0]
8. print(list\_3)

Question 2: What is the output of the following snippet?

1. list\_1 = ["A", "B", "C"]
2. list\_2 = list\_1
3. list\_3 = list\_2
4. del list\_1[0]
5. del list\_2
7. print(list\_3)

Question 3: What is the output of the following snippet?

1. list\_1 = ["A", "B", "C"]
2. list\_2 = list\_1
3. list\_3 = list\_2
5. del list\_1[0]
6. del list\_2[:]
8. print(list\_3)

Question 4: What is the output of the following snippet?

1. list\_1 = ["A", "B", "C"]
2. list\_2 = list\_1[:]
3. list\_3 = list\_2[:]
5. del list\_1[0]
6. del list\_2[0]
8. print(list\_3)

Question 5: Insert in or not in instead of ??? so that the code outputs the expected result.

1. my\_list = [1, 2, "in", True, "ABC"]
3. print(1 ??? my\_list)  # outputs True
4. print("A" ??? my\_list)  # outputs True
5. print(3 ??? my\_list)  # outputs True
6. print(False ??? my\_list)  # outputs False

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor369)

Section 3.7 – Lists in advanced applications

In this section, you will learn about arrays, nested lists (matrices), and list comprehensions.

3.7.1 Lists in lists

Lists can consist of scalars (namely numbers) and elements of a much more complex structure (you've already seen such examples as strings, booleans, or even other lists in the previous Section Summary lessons). Let's have a closer look at the case where a list's elements are just lists.

We often find such arrays in our lives. Probably the best example of this is a chessboard.

A chessboard is composed of rows and columns. There are eight rows and eight columns. Each column is marked with the letters A through H. Each line is marked with a number from one to eight.

The location of each field is identified by letter-digit pairs. Thus, we know that the bottom left corner of the board (the one with the white rook) is A1, while the opposite corner is H8.

Let's assume that we're able to use the selected numbers to represent any chess piece. We can also assume that every row on the chessboard is a list.

Look at the following code:

1. row = []
3. for i in range(8):
4. row.append(WHITE\_PAWN)

It builds a list containing eight elements representing the second row of the chessboard ‒ the one filled with pawns (assume that WHITE\_PAWN is a predefined symbol representing a white pawn).

List comprehensions

The same effect may be achieved by means of a list comprehension, the special syntax used by Python in order to fill massive lists.

A list comprehension is actually a list, but created on-the-fly during program execution, and is not described statically.

Take a look at the snippet:

1. row = [WHITE\_PAWN for i in range(8)]

The part of the code placed inside the brackets specifies:

the data to be used to fill the list (WHITE\_PAWN)

the clause specifying how many times the data occurs inside the list (for i in range(8)).

Take a look at some other list comprehension examples:

Example #1:

1. squares = [x \*\* 2 for x in range(10)]

The snippet produces a ten-element list filled with squares of ten integer numbers starting from zero (0, 1, 4, 9, 16, 25, 36, 49, 64, 81)

Example #2:

1. twos = [2 \*\* i for i in range(8)]

The snippet creates an eight-element array containing the first eight powers of two (1, 2, 4, 8, 16, 32, 64, 128)

Example #3:

1. odds = [x for x in squares if x % 2 != 0 ]

The snippet makes a list with only the odd elements of the squares list.

3.7.2 Two-dimensional arrays

Let's also assume that a predefined symbol named EMPTY designates an empty field on the chessboard.

So, if we want to create a list of lists representing the whole chessboard, it may be done in the following way:

1. board = []
3. for i in range(8):
4. row = [EMPTY for i in range(8)]
5. board.append(row)

Note:

* the inner part of the loop creates a row consisting of eight elements (each of them equal to EMPTY) and appends it to the board list;
* the outer part repeats it eight times;
* in total, the board list consists of 64 elements (all equal to EMPTY)

This model perfectly mimics the real chessboard, which is in fact an eight-element list of elements, all being single rows. Let's summarize our observations:

* the elements of the rows are fields, eight of them per row;
* the elements of the chessboard are rows, eight of them per chessboard.

The board variable is now a two-dimensional array. It's also called, by analogy to algebraic terms, a matrix.

As list comprehensions can be nested, we can shorten the board creation in the following way:

1. board = [[EMPTY for i in range(8)] for j in range(8)]

The inner part creates a row, and the outer part builds a list of rows.

Access to the selected field of the board requires two indices ‒ the first selects the row; the second ‒ the field number inside the row, which is de facto a column number.

Take a look at the chessboard. Every field contains a pair of indices which should be given to access the field's contents:

Glancing at the previous figure, let's set some chess pieces on the board. First, let's add all the rooks:

1. board[0][0] = ROOK
2. board[0][7] = ROOK
3. board[7][0] = ROOK
4. board[7][7] = ROOK

If you want to add a knight to C4, you do it as follows:

1. board[4][2] = KNIGHT

And now a pawn to E5:

1. board[3][4] = PAWN

And now ‒ experiment with the code yourself.

3.7.3 Multidimensional nature of lists: advanced applications

Let's go deeper into the multidimensional nature of lists. To find any element of a two-dimensional list, you have to use two coordinates:

* a vertical one (row number)
* and a horizontal one (column number).

Imagine that you're developing a piece of software for an automatic weather station. The device records the air temperature on an hourly basis and does it throughout the month. This gives you a total of 24 × 31 = 744 values. Let's try to design a list capable of storing all these results.

First, you have to decide which data type would be adequate for this application. In this case, a float would be best, since this thermometer is able to measure the temperature with an accuracy of 0.1ºC.

Then you take an arbitrary decision that the rows will record the readings every hour on the hour (so the row will have 24 elements) and each of the rows will be assigned to one day of the month (let's assume that each month has 31 days, so you need 31 rows). Here's the appropriate pair of comprehensions (h is for hour, d for day):

1. temps = [[0.0 for h in range(24)] for d in range(31)]

The whole matrix is filled with zeros now. You can assume that it's updated automatically using special hardware agents. The thing you have to do is to wait for the matrix to be filled with measurements.

Now it's time to determine the monthly average noon temperature. Add up all 31 readings recorded at noon and divide the sum by 31. You can assume that the midnight temperature is stored first. Here's the relevant code:

1. temps = [[0.0 for h in range(24)] for d in range(31)]
2. #
3. # The matrix is magically updated here.
4. #
6. total = 0.0
8. for day in temps:
9. total += day[11]
11. average = total / 31
13. print("Average temperature at noon:", average)

Note: the day variable used by the for loop is not a scalar ‒ each pass through the temps matrix assigns it with the subsequent rows of the matrix; hence, it's a list. It has to be indexed with 11 to access the temperature value measured at noon.

Now find the highest temperature during the whole month ‒ see the code:

1. temps = [[0.0 for h in range(24)] for d in range(31)]
2. #
3. # The matrix is magically updated here.
4. #
6. highest = -100.0
8. for day in temps:
9. for temp in day:
10. if temp &gt; highest:
11. highest = temp
13. print("The highest temperature was:", highest)

NOTE

* the day variable iterates through all the rows in the temps matrix;
* the temp variable iterates through all the measurements taken in one day.

Now count the days when the temperature at noon was at least 20ºC:

1. temps = [[0.0 for h in range(24)] for d in range(31)]
2. #
3. # The matrix is magically updated here.
4. #
6. hot\_days = 0
8. for day in temps:
9. if day[11] &gt; 20.0:
10. hot\_days += 1
12. print(hot\_days, "days were hot.")

Python does not limit the depth of list-in-list inclusion. Here you can see an example of a three-dimensional array:

1. rooms = [[[False for r in range(20)] for f in range(15)] for t in range(3)]

Imagine a hotel. It's a huge hotel consisting of three buildings, 15 floors each. There are 20 rooms on each floor. For this, you need an array which can collect and process information on the occupied/free rooms.

First step ‒ the type of the array's elements. In this case, a Boolean value (True/False) would fit.

Step two ‒ calm analysis of the situation. Summarize the available information: three buildings, 15 floors, 20 rooms.

Now you can create the array:

1. rooms = [[[False for r in range(20)] for f in range(15)] for t in range(3)]

The first index (0 through 2) selects one of the buildings; the second (0 through 14) selects the floor, the third (0 through 19) selects the room number. All rooms are initially free.

Now you can book a room for two newlyweds: in the second building, on the tenth floor, room 14:

1. rooms[1][9][13] = True

and release the second room on the fifth floor located in the first building:

1. rooms[0][4][1] = False

Check if there are any vacancies on the 15th floor of the third building:

1. vacancy = 0
3. for room\_number in range(20):
4. if not rooms[2][14][room\_number]:
5. vacancy += 1

The vacancy variable contains 0 if all the rooms are occupied, or the number of available rooms otherwise.

Congratulations! You've made it to the end of the module. Keep up the good work!

3.7 SECTION SUMMARY

1. List comprehension allows you to create new lists from existing ones in a concise and elegant way. The syntax of a list comprehension looks as follows:

[expression for element in list if conditional]

which is actually an equivalent of the following code:

for element in list:

if conditional:

expression

Here's an example of a list comprehension ‒ the code creates a five-element list filled with the first five natural numbers raised to the power of 3:

1. cubed = [num \*\* 3 for num in range(5)]
2. print(cubed) # outputs: [0, 1, 8, 27, 64]

2. You can use nested lists in Python to create matrices (i.e. two-dimensional lists). For example:

1. # A four-column/four-row table ‒ a two dimensional array (4x4)
3. table = [[":(", ":)", ":(", ":)"],
4. [":)", ":(", ":)", ":)"],
5. [":(", ":)", ":)", ":("],
6. [":)", ":)", ":)", ":("]]
8. print(table)
9. print(table[0][0])  # outputs: ':('
10. print(table[0][3])  # outputs: ':)'

3. You can nest as many lists in lists as you want, thereby creating n-dimensional lists, e.g. three-, four- or even sixty-four-dimensional arrays. For example:

1. # Cube – a three-dimensional array (3x3x3)
3. cube = [[[':(', 'x', 'x'],
4. [':)', 'x', 'x'],
5. [':(', 'x', 'x']],
7. [[':)', 'x', 'x'],
8. [':(', 'x', 'x'],
9. [':)', 'x', 'x']],
11. [[':(', 'x', 'x'],
12. [':)', 'x', 'x'],
13. [':)', 'x', 'x']]]
15. print(cube)
16. print(cube[0][0][0])  # outputs: ':('
17. print(cube[2][2][0])  # outputs: ':)'

Module 4: Functions, Tuples, Dictionaries, Exceptions, and Data Processing

Section 4.1 – Functions

Welcome to Module 4! In this section, you will learn how to create, use, and call your own functions. Let's start!

4.1.1 Why do we need functions?

You've come across functions many times so far, but the view on their merits that we have given you has been rather one-sided. You've only invoked functions by using them as tools to make life easier, and to simplify time-consuming and tedious tasks.

When you want some data to be printed on the console, you use print(). When you want to read the value of a variable, you use input(), coupled with either int() or float().

You've also made use of some methods, which are in fact functions, but declared in a very specific way.

Now you'll learn how to write and use your own functions. We'll write several functions together, from the very simple to the rather complex, which will require your focus and attention.

It often happens that a particular piece of code is repeated many times in your program. It's repeated either literally, or with only a few minor modifications, consisting of the use of other variables in the same algorithm. It also happens that a programmer cannot resist simplifying their work, and begins to clone such pieces of code using the clipboard and copy-paste operations.

It could end up as greatly frustrating when suddenly it turns out that there was an error in the cloned code. The programmer will have a lot of drudgery to find all the places that need corrections. There's also a high risk of the corrections causing errors.

We can now define the first condition which can help you decide when to start writing your own functions: if a particular fragment of the code begins to appear in more than one place, consider the possibility of isolating it in the form of a function invoked from the points where the original code was placed before.

It may happen that the algorithm you're going to implement is so complex that your code begins to grow in an uncontrolled manner, and suddenly you notice that you're not able to navigate through it so easily anymore.

You can try to cope with the issue by commenting the code extensively, but soon you find that this dramatically worsens your situation ‒ too many comments make the code larger and harder to read. Some say that a well-written function should be viewed entirely in one glance.

A good, attentive developer divides the code (or more accurately: the problem) into well-isolated pieces, and encodes each of them in the form of a function.

This considerably simplifies the work of the program, because each piece of code can be encoded separately, and tested separately. The process described here is often called decomposition.

We can now state the second condition: if a piece of code becomes so large that reading and understating it may cause a problem, consider dividing it into separate, smaller problems, and implement each of them in the form of a separate function.

This decomposition continues until you get a set of short functions, easy to understand and test.

4.1.2 Decomposition

It often happens that the problem is so large and complex that it cannot be assigned to a single developer, and a team of developers have to work on it. The problem must be split between several developers in a way that ensures their efficient and seamless cooperation.

It seems inconceivable that more than one programmer should write the same piece of code at the same time, so the job has to be dispersed among all the team members.

This kind of decomposition has a different purpose to the one described previously ‒ it's not only about sharing the work, but also about sharing the responsibility among many developers.

Each of them writes a clearly defined and described set of functions, which when combined into the module (we'll tell you about this a bit later) will give the final product.

This leads us directly to the third condition: if you're going to divide the work among multiple programmers, decompose the problem to allow the product to be implemented as a set of separately written functions packed together in different modules.

4.1.3 Where do functions come from?

In general, functions come from at least three places:

From Python itself ‒ numerous functions (like print()) are an integral part of Python, and are always available without any additional effort on behalf of the programmer; we call these functions built-in functions;

From Python's preinstalled modules ‒ a lot of functions, very useful ones, but used significantly less often than built-in ones, are available in a number of modules installed together with Python; the use of these functions requires some additional steps from the programmer in order to make them fully accessible (we'll tell you about this in a while);

Directly from your code ‒ you can write your own functions, place them inside your code, and use them freely;

There is one other possibility, but it's connected with classes, so we'll omit it for now.

4.1.4 Your first function

Take a look at the following snippet:

1. print("Enter a value: ")
2. a = int(input())
4. print("Enter a value: ")
5. b = int(input())
7. print("Enter a value: ")
8. c = int(input())

It's rather simple, but we only want it to be an example of transforming a repeating part of a code into a function.

The messages sent to the console by the print() function are always the same. Of course, there's nothing really bad in such a code, but try to imagine what you would have to do if your boss asked you to change the message to make it more polite, e.g. to start it with the phrase "Please".

It seems that you'd have to spend some time changing all the occurrences of the message (you'd use a clipboard, of course, but it wouldn't make your life much easier). It's obvious that you'd probably make some mistakes during the amendment process, and you (and your boss) would get a bit frustrated.

Is it possible to separate such a repeatable part of the code, name it, and make it reusable? It would mean that a change made once in one place would be propagated to all the places where it's used.

Of course, a code like this should work only when it's explicitly launched.

Yes, it's possible. This is exactly what functions are for.

You need to define it. The word define is significant here.

This is what the simplest function definition looks like:

def function\_name():

function\_body

* It always starts with the keyword def (for define)
* next after def goes the name of the function (the rules for naming functions are exactly the same as for naming variables)
* after the function name, there's a place for a pair of parentheses (they contain nothing here, but that will change soon)
* the line has to be ended with a colon;
* the line directly after def begins the function body ‒ a couple (at least one) of necessarily nested instructions, which will be executed every time the function is invoked; note: the function ends where the nesting ends, so you have to be careful.

We're ready to define our prompting function. We'll name it message ‒ here it is:

1. def message():
2. print("Enter a value: ")

The function is extremely simple, but fully usable. We've named it message, but you can label it according to your taste. Let's use it.

Our code contains the function definition now:

1. def message():
2. print("Enter a value: ")
3. print("We start here.")
4. print("We end here.")

Note: we don't use the function at all ‒ there's no invocation of it inside the code.

When you run it, you see the following output:

We start here.

We end here.

This means that Python reads the function's definitions and remembers them, but won't launch any of them without your permission.

We've modified the code now ‒ we've inserted the function's invocation between the start and end messages:

1. def message():
2. print("Enter a value: ")
3. print("We start here.")
4. message()
5. print("We end here.")

The output looks different now:

We start here.

Enter a value:

We end here.

Test the code, modify it, experiment with it.

4.1.5 How functions work

Look at the picture on the right.

It tries to show you the whole process:

* when you invoke a function, Python remembers the place where it happened and jumps into the invoked function;
* the body of the function is then executed;
* reaching the end of the function forces Python to return to the place directly after the point of invocation.

There are two, very important, catches. Here's the first of them:

You mustn't invoke a function which is not known at the moment of invocation.

Remember – Python reads your code from top to bottom. It's not going to look ahead in order to find a function you forgot to put in the right place ("right" means "before invocation".)

We've inserted an error into this code ‒ can you see the difference?

1. print("We start here.")
2. message()
3. print("We end here.")
4. def message():
5. print("Enter a value: ")

We've moved the function to the end of the code. Is Python able to find it when the execution reaches the invocation?

No, it isn't. The error message will read:

NameError: name 'message' is not defined

Don't try to force Python to look for functions you didn't deliver at the right time.

The second catch sounds a little simpler:

You mustn't have a function and a variable of the same name.

The following snippet is erroneous:

1. def message():
2. print("Enter a value: ")
3. message = 1

Assigning a value to the name message causes Python to forget its previous role. The function named message becomes unavailable.

Fortunately, you're free to mix your code with functions ‒ you're not obliged to put all your functions at the top of your source file.

Look at the snippet:

1. print("We start here.")
2. def message():
3. print("Enter a value: ")
4. message()
5. print("We end here.")

It may look strange, but it's completely correct, and works as intended.

Let's return to our primary example, and employ the function for the right job, like here:

1. def message():
2. print("Enter a value: ")
3. message()
4. a = int(input())
5. message()
6. b = int(input())
7. message()
8. c = int(input())

Modifying the prompting message is now easy and clear – you can do it by changing the code in just one place ‒ inside the function's body.

Try it yourself.

4.1 SECTION SUMMARY

1. A function is a block of code that performs a specific task when the function is called (invoked). You can use functions to make your code reusable, better organized, and more readable. Functions can have parameters and return values.

2. There are at least four basic types of functions in Python:

built-in functions which are an integral part of Python (such as the print() function). You can see a complete list of built-in Python functions at &lt;https://docs.python.org/3/library/functions.html&gt;.

the ones that come from pre-installed modules (you'll learn about them in the Python Essentials 2 course)

user-defined functions which are written by users for users ‒ you can write your own functions and use them freely in your code,

the lambda functions (you'll learn about them in the Python Essentials 2 course.)

3. You can define your own function using the def keyword and the following syntax:

def your\_function(optional parameters):

  # the body of the function

You can define a function which doesn't take any arguments, e.g.:

1. def message(): # defining a function
2. print("Hello") # body of the function
3. message() # calling the function

You can define a function which takes arguments, too, just like the following one-parameter function:

1. def hello(name): # defining a function
2. print("Hello,", name) # body of the function
3. name = input("Enter your name: ")
4. hello(name) # calling the function

We'll tell you more about parametrized functions in the next section. Don't worry.

4.1 SECTION QUIZ

Question 1: The input() function is an example of a:

a) user-defined function

b) built-in function

Question 2: What happens when you try to invoke a function before you define it? Example:

1. hi()
2. def hi():
3. print("hi!")

Question 3: What will happen when you run the following code?

1. def hi():
2. print("hi")
4. hi(5)

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor370)