xml version='1.0' encoding='utf-8'?





Section 4.6 – Tuples and dictionaries

In this section, you will learn about sequence types and the concept of mutability. You will learn what tuples and dictionaries are, and how you can use them to store and process data values. Let's go!v

4.6.1 Sequence types and mutability

Before we start talking about tuples and dictionaries, we have to introduce two important concepts: sequence types and mutability.

A sequence type is a type of data in Python which is able to store more than one value (or less than one, as a sequence may be empty), and these values can be sequentially (hence the name) browsed, element by element.

As the for loop is a tool especially designed to iterate through sequences, we can express the definition as: a sequence is data which can be scanned by the for loop.

You've encountered one Python sequence so far − the list. The list is a classic example of a Python sequence, although there are some other sequences worth mentioning, and we're going to present them to you now.

The second notion − mutability − is a property of any Python data that describes its readiness to be freely changed during program execution. There are two kinds of Python data: mutable and immutable.

Mutable data can be freely updated at any time − we call such an operation in situ.

Mutable data can be freely updated at any time − we call such an operation in situ.

In situ is a Latin phrase that translates as literally in position. For example, the following instruction modifies the data in situ:

1. list.append(1)

Immutable data cannot be modified in this way.

Imagine that a list can only be assigned and read over. You would be able neither to append an element to it, nor remove any element from it. This means that appending an element to the end of the list would require the recreation of the list from scratch.

You would have to build a completely new list, consisting of the all elements of the already existing list, plus the new element.

The data type we want to tell you about now is a tuple. A tuple is an immutable sequence type. It can behave like a list, but it can't be modified in situ.

4.6.2 Tuples

The first and the clearest distinction between lists and tuples is the syntax used to create them – tuples prefer to use parenthesis, whereas lists like to see brackets, although it's also possible to create a tuple just from a set of values separated by commas.

Look at the example:

1. tuple\_1 = (1, 2, 4, 8)
2. tuple\_2 = 1., .5, .25, .125

"&gt;There are two tuples, both containing four elements.

Let's print them:&lt;

1. tuple\_1 = (1, 2, 4, 8)
2. tuple\_2 = 1., .5, .25, .125
4. print(tuple\_1)
5. print(tuple\_2)

This is what you should see in the console:

(1, 2, 4, 8)

(1.0, 0.5, 0.25, 0.125)

Note: each tuple element may be of a different type (floating-point, integer, or any other not-as-yet-introduced kind of data).

How to create a tuple

It is possible to create an empty tuple – parentheses are required then:

1. empty\_tuple = ()

If you want to create a one-element tuple, you have to take into consideration the fact that, due to syntax reasons (a tuple has to be distinguishable from an ordinary, single value), you must end the value with a comma:

one\_element\_tuple\_1 = (1, )

one\_element\_tuple\_2 = 1.,

Removing the commas won't spoil the program in any syntactical sense, but you will instead get two single variables, not tuples.

How to use a tuple

If you want to get the elements of a tuple in order to read them over, you can use the same conventions to which you're accustomed while using lists.

Take a look at the following code.

1. my\_tuple = (1, 10, 100, 1000)
3. print(my\_tuple[0])
4. print(my\_tuple[-1])
5. print(my\_tuple[1:])
6. print(my\_tuple[:-2])
8. for elem in my\_tuple:
9. print(elem)

The program should produce the following output − run it and check:

1

1000

(10, 100, 1000)

(1, 10)

1

10

100

1000

The similarities may be misleading − don't try to modify a tuple's contents! It's not a list!

All of these instructions (except the topmost one) will cause a runtime error:

1. my\_tuple = (1, 10, 100, 1000)
3. my\_tuple.append(10000)
4. del my\_tuple[0]
5. my\_tuple[1] = -10

This is the message that Python will give you in the console window:

AttributeError: 'tuple' object has no attribute 'append'

What else can tuples do for you?

* the len() function accepts tuples, and returns the number of elements contained inside;
* the + operator can join tuples together (we've shown you this already)
* the \* operator can multiply tuples, just like lists;
* the in and not in operators work in the same way as in lists.

The following snippet presents them all.

1. my\_tuple = (1, 10, 100)
2. t1 = my\_tuple + (1000, 10000)
3. t2 = my\_tuple \* 3
4. print(len(t2))
5. print(t1)
6. print(t2)
7. print(10 in my\_tuple)
8. print(-10 not in my\_tuple)

The output should look as follows:

9

(1, 10, 100, 1000, 10000)

(1, 10, 100, 1, 10, 100, 1, 10, 100)

True

True

One of the most useful tuple properties is their ability to appear on the left side of the assignment operator. You saw this phenomenon some time ago, when it was necessary to find an elegant tool to swap two variables' values.

Take a look at the following snippet:

1. var = 123
3. t1 = (1, )
4. t2 = (2, )
5. t3 = (3, var)
7. t1, t2, t3 = t2, t3, t1
9. print(t1, t2, t3)

It shows three tuples interacting − in effect, the values stored in them "circulate" − t1 becomes t2, t2 becomes t3, and t3 becomes t1.

Note: the example presents one more important fact: a tuple's elements can be variables, not only literals. Moreover, they can be expressions if they're on the right side of the assignment operator.

4.6.3 Dictionaries

The dictionary is another Python data structure. It's not a sequence type (but can be easily adapted to sequence processing) and it is mutable.

To explain what the Python dictionary actually is, it is important to understand that it is literally a dictionary.

How to make a dictionary

If you want to assign some initial pairs to a dictionary, you should use the following syntax:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
2. phone\_numbers = {'boss': 5551234567, 'Suzy': 22657854310}
3. empty\_dictionary = {}
5. print(dictionary)
6. print(phone\_numbers)
7. print(empty\_dictionary)

In the first example, the dictionary uses keys and values which are both strings. In the second one, the keys are strings, but the values are integers. The reverse layout (keys → numbers, values → strings) is also possible, as well as number-number combinations.

The list of pairs is surrounded by curly braces, while the pairs themselves are separated by commas, and the keys and values by colons.

The first of our dictionaries is a very simple English-French dictionary. The second − a very tiny telephone directory.

The empty dictionary is constructed by an empty pair of curly braces − nothing unusual.

The Python dictionary works in the same way as a bilingual dictionary. For example, you have an English word (e.g. cat) and need its French equivalent. You browse the dictionary in order to find the word (you may use different techniques to do that − it doesn't matter) and eventually you get it. Next, you check the French counterpart and it is (most probably) the word "chat".

In Python's world, the word you look for is named a key. The word you get from the dictionary is called a value.

This means that a dictionary is a set of key-value pairs. Note:

* each key must be unique − it's not possible to have more than one key of the same value;
* a key may be any immutable type of object: it can be a number (integer or float), or even a string, but not a list;
* a dictionary is not a list − a list contains a set of numbered values, while a dictionary holds pairs of values;
* the len() function works for dictionaries, too − it returns the number of key-value elements in the dictionary;
* a dictionary is a one-way tool − if you have an English-French dictionary, you can look for French equivalents of English terms, but not vice versa.

Now we can show you some working examples.

The dictionary as a whole can be printed with a single print() invocation. The snippet may produce the following output:

{'dog': 'chien', 'horse': 'cheval', 'cat': 'chat'}

{'Suzy': 5557654321, 'boss': 5551234567}

{}

Have you noticed anything surprising? The order of the printed pairs is different than in the initial assignment. What does that mean?

First of all, it's a confirmation that dictionaries are not lists – they don't preserve the order of their data, as the order is completely meaningless (unlike in real, paper dictionaries). The order in which a dictionary stores its data is completely out of your control, and your expectations. That's normal.

NOTE

In Python 3.6x dictionaries have become ordered collections by default. Your results may vary depending on what Python version you're using.

How to use a dictionary

Analyze the following code:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
2. phone\_numbers = {'boss' : 5551234567, 'Suzy' : 22657854310}
3. empty\_dictionary = {}
5. # Print the values here.

If you want to get any of the values, you have to deliver a valid key value:

1. print(dictionary['cat'])
2. print(phone\_numbers['Suzy'])

Getting a dictionary's value resembles indexing, especially thanks to the brackets surrounding the key's value.

Note:

* if the key is a string, you have to specify it as a string;
* keys are case-sensitive: 'Suzy' is something different from 'suzy'.

The snippet outputs two lines of text:

chat

5557654321

And now the most important news: you mustn't use a non-existent key. Trying something like this:

print(phone\_numbers['president'])

will cause a runtime error. Try to do it.

Fortunately, there's a simple way to avoid such a situation. The in operator, together with its companion, not in, can salvage this situation.

The following code safely searches for some French words:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
2. words = ['cat', 'lion', 'horse']
4. for word in words:
5. if word in dictionary:
6. print(word, "-&gt;", dictionary[word])
7. else:
8. print(word, "is not in dictionary")

The code's output looks as follows:

cat -&gt; chat

lion is not in dictionary

horse -&gt; cheval

NOTE

When you write a big or lengthy expression, it may be a good idea to keep it vertically aligned. This is how you can make your code more readable and more programmer-friendly, e.g.:

1. # Example 1:
2. dictionary = {
3. "cat": "chat",
4. "dog": "chien",
5. "horse": "cheval"
6. }
7. # Example 2:
8. phone\_numbers = {'boss': 5551234567,
9. 'Suzy': 22657854310
10. }

This kind of formatting is called a hanging indent.

4.6.4 Dictionary methods and functions

The keys() method

Can dictionaries be browsed using the for loop, like lists or tuples?

No and yes.

No, because a dictionary is not a sequence type − the for loop is useless with it.

Yes, because there are simple and very effective tools that can adapt any dictionary to the for loop requirements (in other words, building an intermediate link between the dictionary and a temporary sequence entity).

The first of them is a method named keys(), possessed by each dictionary. The method returns an iterable object consisting of all the keys gathered within the dictionary. Having a group of keys enables you to access the whole dictionary in an easy and handy way.

Just like here:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
3. for key in dictionary.keys():
4. print(key, "-&gt;", dictionary[key]

Let's now have a look at a dictionary method called items(). The method returns tuples (this is the first example where tuples are something more than just an example of themselves) where each tuple is a key-value pair.

This is how it works:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
3. for english, french in dictionary.items():
4. print(english, "-&gt;", french)

Note the way in which the tuple has been used as a for loop variable.

Modifying and adding values

Assigning a new value to an existing key is simple − as dictionaries are fully mutable, there are no obstacles to modifying them.

We're going to replace the value "chat" with "minou", which is not very accurate, but it will work well with our example.

Look:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
3. dictionary['cat'] = 'minou'
4. print(dictionary)

The code's output looks as follows:

horse -&gt; cheval

dog -&gt; chien

cat -&gt; chat

The example prints:

cat -&gt; chat

dog -&gt; chien

horse -&gt; cheval

The output is:

{'cat': 'minou', 'dog': 'chien', 'horse': 'cheval'}

Do you want it sorted? Just enrich the for loop to get such a form:

1. for key in sorted(dictionary.keys()):

The sorted() function will do its best — the output will look like this:

cat -&gt; chat  
dog -&gt; chien  
horse -&gt; cheval

How to use a dictionary: the items() and values() methods

Another way is based on using a dictionary's method named items(). The method returns tuples (this is the first example where tuples are something more than just an example of themselves) where each tuple is a key-value pair.

This is how it works:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
3. for english, french in dictionary.items():
4. print(english, "-&gt;", french)

Note the way in which the tuple has been used as a for loop variable.

The example prints:

cat -&gt; chat  
dog -&gt; chien  
horse -&gt; cheval

There is also a method called values(), which works similarly to keys(), but returns values.

Here is a simple example:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
3. for french in dictionary.values():
4. print(french)

As the dictionary is not able to automatically find a key for a given value, the role of this method is rather limited.

Here is the expected output:

cheval  
chien  
chat

How to use a dictionary: modifying and adding values

Assigning a new value to an existing key is simple — as dictionaries are fully mutable,
there are no obstacles to modifying them.

We're going to replace the value "chat" with "minou" , which is not very accurate, but will work well with our example.

Look:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
3. dictionary['cat'] = 'minou'
4. print(dictionary)

The output is:

{'cat': 'minou', 'dog': 'chien', 'horse': 'cheval'}

Adding a new key

Adding a new key-value pair to a dictionary is as simple as changing a value – you only have to assign a value to a new, previously non-existent key.

Note: this is very different behavior compared to lists, which don't allow you to assign values to non-existing indices.

Let's add a new pair of words to the dictionary − a bit weird, but still valid:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
3. dictionary['swan'] = 'cygne'
4. print(dictionary)

The example outputs:

{'cat': 'chat', 'dog': 'chien', 'horse': 'cheval', 'swan': 'cygne'}

NOTE

You can also insert an item to a dictionary by using the update() method, e.g.:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
3. dictionary.update({"duck": "canard"})
4. print(dictionary)

Removing a key

Can you guess how to remove a key from a dictionary?

Note: removing a key will always cause the removal of the associated value. Values cannot exist without their keys.

This is done with the del instruction.

Here's the example:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
3. del dictionary['dog']
4. print(dictionary)

Note: removing a non-existing key causes an error.

The example outputs:

{'cat': 'chat', 'horse': 'cheval'}

EXTRA

To remove the last item in a dictionary, you can use the popitem() method:

1. dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
3. dictionary.popitem()
4. print(dictionary) # outputs: {'cat': 'chat', 'dog': 'chien'}

In the older versions of Python, i.e. before 3.6.7, the popitem() method removes a random item from a dictionary.

4.6.5 Tuples and dictionaries can work together

We've prepared a simple example, showing how tuples and dictionaries can work together.

Let's imagine the following problem:

* you need a program to evaluate the students' average scores;
* the program should ask for the student's name, followed by her/his single score;
* the names may be entered in any order;
* entering an empty name finishes the inputting of the data (note 1: entering an empty score will raise the ValueError exception, but don't worry about that now, you'll see how to handle such cases when we talk about exceptions in the second part of the Python Essentials course series)
* a list of all names, together with the evaluated average score, should be then emitted.

Look at the following code. This how to do it.

1. school\_class = {}
3. while True:
4. name = input("Enter the student's name: ")
5. if name == ":
6. break
8. score = int(input("Enter the student's score (0-10): "))
9. if score not in range(0, 11):
10. break
12. if name in school\_class:
13. school\_class[name] += (score,)
14. else:
15. school\_class[name] = (score,)
17. for name in sorted(school\_class.keys()):
18. adding = 0
19. counter = 0
20. for score in school\_class[name]:
21. adding += score
22. counter += 1
23. print(name, ":", adding / counter)

Now, let's analyze it line by line:

* line 1: create an empty dictionary for the input data; the student's name is used as a key, while all the associated scores are stored in a tuple (the tuple may be a dictionary value – that's not a problem at all)
* line 3: enter an "infinite" loop (don't worry, it'll break at the right moment)
* line 4: read the student's name here;
* line 5-6: if the name is an empty string ( ), leave the loop;
* line 8: ask for one of the student's scores (an integer from the range 0-10)
* line 9-10: if the score entered is not within the range from 0 to 10, leave the loop;
* line 12-13: if the student's name is already in the dictionary, lengthen the associated tuple with the new score (note the += operator)
* line 14-15: if this is a new student (unknown to the dictionary), create a new entry – its value is a one-element tuple containing the entered score;
* line 17: iterate through the sorted students' names;
* line 18-19: initialize the data needed to evaluate the average (sum and counter)
* line 20-22: we iterate through the tuple, taking all the subsequent scores and updating the sum, together with the counter;
* line 23: evaluate and print the student's name and average score.

This is a record of the conversation we had with our program:

Enter the student's name: Bob

Enter the student's score (0-10): 7

Enter the student's name: Andy

Enter the student's score (0-10): 3

Enter the student's name: Bob

Enter the student's score (0-10): 2

Enter the student's name: Andy

Enter the student's score (0-10): 10

Enter the student's name: Andy

Enter the student's score (0-10): 3

Enter the student's name: Bob

Enter the student's score (0-10): 9

Enter the student's name:

Andy : 5.333333333333333

Bob : 6.0

4.6 SECTION SUMMARY

Key takeaways: tuples

1. Tuples are ordered and unchangeable (immutable) collections of data. They can be thought of as immutable lists. They are written in round brackets:

1. my\_tuple = (1, 2, True, "a string", (3, 4), [5, 6], None)
2. print(my\_tuple)
4. my\_list = [1, 2, True, "a string", (3, 4), [5, 6], None]
5. print(my\_list)

Each tuple element may be of a different type (i.e. integers, strings, booleans, etc.). What is more, tuples can contain other tuples or lists (and the other way round).

2. You can create an empty tuple like this:

1. empty\_tuple = ()
2. print(type(empty\_tuple)) # outputs: `&lt;class 'tuple'&gt;`

3. A one-element tuple may be created as follows:

1. one\_elem\_tuple\_1 = ("one", ) # Brackets and a comma.
2. one\_elem\_tuple\_2 = "one", # No brackets, just a comma.

If you remove the comma, you will tell Python to create a variable, not a tuple:

1. my\_tuple\_1 = 1,
2. print(type(my\_tuple\_1)) # outputs: `&lt;class 'tuple'&gt;`
4. my\_tuple\_2 = 1 # This is not a tuple.
5. print(type(my\_tuple\_2)) # outputs: `&lt;class 'int'&gt;`

4. You can access tuple elements by indexing them:

1. my\_tuple = (1, 2.0, "string", [3, 4], (5, ), True)
2. print(my\_tuple[3]) # outputs: [3, 4]

5. Tuples are immutable, which means you cannot change their elements (you cannot append tuples, or modify, or remove tuple elements). The following snippet will cause an exception:

1. my\_tuple = (1, 2.0, "string", [3, 4], (5, ), True)
2. my\_tuple[2] = "guitar" # The TypeError exception will be raised.

However, you can delete a tuple as a whole:

1. my\_tuple = 1, 2, 3,
2. del my\_tuple
3. print(my\_tuple) # NameError: name 'my\_tuple' is not defined

6. You can loop through a tuple elements (Example 1), check if a specific element is (not)present in a tuple (Example 2), use the len() function to check how many elements there are in a tuple (Example 3), or even join/multiply tuples (Example 4):

1. # Example 1
2. tuple\_1 = (1, 2, 3)
3. for elem in tuple\_1:
4. print(elem)
6. # Example 2
7. tuple\_2 = (1, 2, 3, 4)
8. print(5 in tuple\_2)
9. print(5 not in tuple\_2)
11. # Example 3
12. tuple\_2 = (1, 2, 3, 4)
13. print(len(tuple\_3))
14. print(5 not in tuple\_2)
15. # Example 4
16. tuple\_4 = tuple\_1 + tuple\_2
17. tuple\_5 = tuple\_3 \* 2
19. print(tuple\_4)
20. print(tuple\_5)

EXTRA

You can also create a tuple using a Python built-in function called tuple(). This is particularly useful when you want to convert a certain iterable (e.g. a list, range, string, etc.) to a tuple:

1. my\_tuple = tuple((1, 2, "string"))
2. print(my\_tuple)
4. my\_list = [2, 4, 6]
5. print(my\_list) # outputs: [2, 4, 6]
6. print(type(my\_list)) # outputs: `&lt;class 'list'&gt;`
7. tup = tuple(my\_list)
8. print(tup) # outputs: (2, 4, 6)
9. print(type(tup)) # outputs: `&lt;class 'tuple'&gt;`

By the same fashion, when you want to convert an iterable to a list, you can use a Python built-in function called list():

1. tup = 1, 2, 3,
2. my\_list = list(tup)
3. print(type(my\_list)) # outputs: `&lt;class 'list'&gt;`

Key takeaways: dictionaries

1. Dictionaries are unordered\*, changeable (mutable), and indexed collections of data. (\*Since Python 3.6x dictionaries have become ordered by default.)

Each dictionary is a set of key: value pairs. You can create it by using the following syntax:

1. my\_dictionary = {
2. key1: value1,
3. key2: value2,
4. key3: value3,
5. }

2. If you want to access a dictionary item, you can do so by making a reference to its key inside a pair of square brackets (ex. 1) or by using the get() method (ex. 2):

1. pol\_eng\_dictionary = {
2. "kwiat": "flower",
3. "woda": "water",
4. "gleba": "soil"
5. }
7. item\_1 = pol\_eng\_dictionary["gleba"] # ex. 1
8. print(item\_1) # outputs: soil
10. item\_2 = pol\_eng\_dictionary.get("woda") # ex. 2
11. print(item\_2) # outputs: water

3. If you want to change the value associated with a specific key, you can do so by referring to the item's key name in the following way:

1. pol\_eng\_dictionary = {
2. "zamek": "castle",
3. "woda": "water",
4. "gleba": "soil"
5. }
7. pol\_eng\_dictionary["zamek"] = "lock"
8. item = pol\_eng\_dictionary["zamek"]
9. print(item) # outputs: lock

4. To add or remove a key (and the associated value), use the following syntax:

1. phonebook = {} # an empty dictionary
3. phonebook["Adam"] = 3456783958 # create/add a key-value pair
4. print(phonebook) # outputs: {'Adam': 3456783958}
6. del phonebook["Adam"]
7. print(phonebook) # outputs: {}

You can also insert an item into a dictionary by using the update() method, and remove the last element by using the popitem() method, e.g.:

1. pol\_eng\_dictionary = {"kwiat": "flower"}
3. pol\_eng\_dictionary.update({"gleba": "soil"})
4. print(pol\_eng\_dictionary) # outputs: {'kwiat': 'flower', 'gleba': 'soil'}
6. pol\_eng\_dictionary.popitem()
7. print(pol\_eng\_dictionary) # outputs: {'kwiat': 'flower'}

5. You can use the for loop to loop through a dictionary, e.g.:

1. pol\_eng\_dictionary = {
2. "zamek": "castle",
3. "woda": "water",
4. "gleba": "soil"
5. }
7. for item in pol\_eng\_dictionary:
8. print(item)
10. #          woda
11. #          gleba

6. If you want to loop through a dictionary's keys and values, you can use the items() method, e.g.:

1. pol\_eng\_dictionary = {
2. "zamek": "castle",
3. "woda": "water",
4. "gleba": "soil"
5. }
7. for key, value in pol\_eng\_dictionary.items():
8. print("Pol/Eng -&gt;", key, ":", value)

7. To check if a given key exists in a dictionary, you can use the in keyword:

1. pol\_eng\_dictionary = {
2. "zamek": "castle",
3. "woda": "water",
4. "gleba": "soil"
5. }
7. if "zamek" in pol\_eng\_dictionary:
8. print("Yes")
9. else:
10. print("No")

8. You can use the del keyword to remove a specific item, or delete a dictionary. To remove all the dictionary's items, you need to use the clear() method:

1. pol\_eng\_dictionary = {
2. "zamek": "castle",
3. "woda": "water",
4. "gleba": "soil"
5. }
7. print(len(pol\_eng\_dictionary)) # outputs: 3
8. del pol\_eng\_dictionary["zamek"] # remove an item
9. print(len(pol\_eng\_dictionary)) # outputs: 2
11. pol\_eng\_dictionary.clear() # removes all the items
12. print(len(pol\_eng\_dictionary)) # outputs: 0
14. del pol\_eng\_dictionary # removes the dictionary

9. To copy a dictionary, use the copy() method:

1. pol\_eng\_dictionary = {
2. "zamek": "castle",
3. "woda": "water",
4. "gleba": "soil"
5. }
7. copy\_dictionary = pol\_eng\_dictionary.copy()

4.6 SECTION QUIZ

Question 1: What happens when you attempt to run the following snippet?

1. my\_tup = (1, 2, 3)
2. print(my\_tup[2])

Question 2: What is the output of the following snippet?

1. tup = 1, 2, 3
2. a, b, c = tup
4. print(a \* b \* c)

Question 3: Complete the code to correctly use the count() method to find the number of duplicates of 2 in the following tuple.

1. tup = 1, 2, 3, 2, 4, 5, 6, 2, 7, 2, 8, 9
2. duplicates = # Write your code here.
4. print(duplicates) # outputs: 4

Question 4: Write a program that will "glue" the two dictionaries (d1 and d2) together and create a new one (d3).

1. d1 = {'Adam Smith': 'A', 'Judy Paxton': 'B+'}
2. d2 = {'Mary Louis': 'A', 'Patrick White': 'C'}
3. d3 = {}
5. for item in (d1, d2):
6. # Write your code here.
8. print(d3)

Question 5: Write a program that will convert the my\_list list to a tuple.

1. my\_list = ["car", "Ford", "flower", "Tulip"]
3. t = # Write your code here.
4. print(t)

Question 6: Write a program that will convert the colors tuple to a dictionary.

1. colors = (("green", "#008000"), ("blue", "#0000FF"))
3. # Write your code here.
5. print(colors\_dictionary)

Question 7: What will happen when you run the following code?

1. my\_dictionary = {"A": 1, "B": 2}
2. copy\_my\_dictionary = my\_dictionary.copy()
3. my\_dictionary.clear()
5. print(copy\_my\_dictionary)

Question 8: What is the output of the following program?

1. colors = {
2. "white": (255, 255, 255),
3. "grey": (128, 128, 128),
4. "red": (255, 0, 0),
5. "green": (0, 128, 0)
6. }
8. for col, rgb in colors.items():
9. print(col, ":", rgb)

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor375)

Section 4.7 – Exceptions

Welcome to the last section in the course, where you will learn about the exception handling mechanism in Python. You will explore the topics of errors in code, and learn what you can do to prevent program termination. You will also cover the subject of code testing and debugging, and learn some tips about how to make your code writing process better and less error-prone. Let's begin!

4.7.1 Errors – the developer's daily bread

It seems indisputable that all programmers (including you) want to write error-free code and do their best to achieve this goal. Unfortunately, nothing is perfect in this world and software is no exception. Pay attention to the word exception as we'll see it again very soon in a meaning that has nothing in common with the absolute.

To err is human. It's impossible to make no mistakes, and it's impossible to write error-free code. Don't get us wrong – we don't want to convince you that writing messy and faulty programs is a virtue. We rather want to explain that even the most careful programmer is not able to avoid minor or major defects. It's only those who do nothing that make no mistakes.

Paradoxically, accepting this difficult truth can make you a better programmer and may improve your code quality.

"How could this be possible?", you may ask.

We'll try to show you.

Errors in data vs. errors in code

Dealing with programming errors has (at least) two sides. The one appears when you get into trouble because your – apparently correct – code is fed with bad data. For example, you expect the code will input an integer value, but your careless user enters some random letters instead.

It may happen that your code will be terminated then, and the user will be left alone with a terse and ambiguous error message on the screen. The user will be unsatisfied, and you should be unsatisfied, too.

We're going to show you how to protect your code from this kind of failure and how not to provoke the user's anger.

The other side of dealing with programming errors reveals itself when undesirable code behavior is caused by mistakes you made when you were writing your program. This kind of error is commonly called a "bug", which is a manifestation of a well-established belief that if a program works badly, it must be caused by malicious bugs which live inside the computer hardware and cause short circuits or other interference.

This idea is not as mad as it may look – such incidents were common in times when computers occupied large halls, consumed kilowatts of electricity, and produced enormous amounts of heat. Fortunately or not, these times are gone forever and the only bugs which can spoil your code are those you sowed in the code yourself. Therefore, we will try to show you how to find and eliminate your bugs, in other words, how to debug your code.

Let's start the journey through the land of errors and bugs.

4.7.2 When data is not what it should be

Let's write a piece of extremely trivial code – it will read a natural number (a non-negative integer) and print its reciprocal. In this way, 2 will turn into 0.5 (1/2) and 4 into 0.25 (1/4). Here's the program:

1. value = int(input('Enter a natural number: '))
2. print('The reciprocal of', value, 'is', 1/value)

Is there anything that can go wrong with it? The code is so brief and so compact that it doesn't seem like we'll find any trouble there.

It seems that you already know where we are going. Yes, you're right – entering data that is not an integer (which also includes entering nothing at all) will completely ruin the program execution. This is what the code's user will see:

Traceback (most recent call last):

File "code.py", line 1, in `&lt;module&gt;`

value = int(input('Enter a natural number: '))

ValueError: invalid literal for int() with base 10: "

All the lines Python shows you are meaningful and important, but the last line seems to be the most valuable. The first word in the line is the name of the exception which causes your code to stop. It's ValueError here. The rest of the line is just a brief explanation which more precisely specifies the cause of the occurred exception.

How do you deal with it? How do you protect your code from termination, the user from disappointment, and yourself from the user's dissatisfaction?

The very first thought that can come to your mind is to check if the data provided by the user is valid and to refuse to cooperate if the data is incorrect. In this case, the check can rely on the fact that we expect the input string to contain digits only.

You should already be able to implement this check and write it yourself, shouldn't you? It is also possible to check if the value variable's type is an int (Python has a special means for these kinds of checks – it's an operator named is. The check itself may look like this:

1. type(value) is int

and evaluates to true if the current value variable's type is int.

Please forgive us if we don't spend any more time on it now – you will find more detailed explanations of the is operator in a course module devoted to Object-Oriented Programming.

You may be surprised to learn that we don't want you to do any preliminary data validation. Why? Because this is not the way Python recommends. Really.

4.7.3 The try-except branch

In the Python world, there is a rule that says: "It's better to beg for forgiveness than to ask for permission".

Let's stop here for a moment. Don't get us wrong – we don't want you to apply the rule in your everyday life. Don't take anyone's car without permission in the hope that you can be so convincing that you will avoid conviction. The rule is about something else.

Actually, the rule reads: "it's better to handle an error when it happens than to try to avoid it".

"Okay," you may say now, 'but how should I beg for forgiveness when the program is terminated and there is nothing left that can be done?" This is where the exception comes on the scene.

Look at the following code:

1. try:
2. # It's a place where
3. # you can do something
4. # without asking for permission.
5. except:
6. # It's a spot dedicated to
7. # solemnly begging for forgiveness.

You can see two branches here:

* first, starting with the try keyword – this is the place where you put the code you suspect is risky and may be terminated in case of error; note: this kind of error is called an exception, while the exception occurrence is called raising – we can say that an exception is (or was) raised;
* second, the part of the code starting with the except keyword is designed to handle the exception; it's up to you what you want to do here: you can clean up the mess or you can just sweep the problem under the carpet (although we would prefer the first solution).

So, we could say that these two blocks work like this:

* the try keyword marks the place where you try to do something without permission;
* the except keyword starts a location where you can show off your apology talents.

As you can see, this approach accepts errors (treats them as a normal part of the program's life) instead of escalating efforts to avoid errors at all.

4.7.4 The exception proves the rule

Let's rewrite the code to adopt the Python approach to life:

1. try:
2. value = int(input('Enter a natural number: '))
3. print('The reciprocal of', value, 'is', 1/value)
4. except:
5. print('I do not know what to do.')

Let us summarize what we talked about:

* any part of the code placed between try and except is executed in a very special way – any error which occurs here won't terminate program execution. Instead, the control will immediately jump to the first line situated after the except keyword, and no other part of the try branch is executed;
* the code in the except branch is activated only when an exception has been encountered inside the try block. There is no way to get there by any other means;
* when either the try block or the except block is executed successfully, the control returns to the normal path of execution, and any code located beyond in the source file is executed as if nothing happened.

Now we want to ask you an innocent question: is ValueError the only way the control could fall into the except branch?

Analyze the code carefully and think over your answer!

4.7.5 How to deal with more than one exception

The answer is obviously "no" – there is more than one possible way to raise an exception. For example, a user may enter zero as an input – can you predict what will happen next?

Yes, you're right – the division placed inside the print() function invocation will raise the ZeroDivisionError. As you may expect, the code's behavior will be the same as in the previous case – the user will see the "I do not know what to do…" message, which seems to be quite reasonable in this context, but it's also possible that you would want to handle this kind of problem in a bit different way.

Is it possible? Of course, it is. There are at least two approaches you can implement here.

The first of them is simple and complicated at the same time: you can just add two separate try blocks, one including the input() function invocation where the ValueError may be raised, and the second devoted to handling possible issues induced by the division. Both these try blocks would have their own except branches, and in effect you will gain full control over two different errors.

This solution is good, but it is a bit lengthy – the code becomes unnecessarily bloated. Moreover, it's not the only danger that awaits you. Note that leaving the first try-except block leaves a lot of uncertainty – you will have to add extra code to ensure that the value the user has entered is safe to use in division. This is how a seemingly simple solution becomes overly complicated.

Fortunately, Python offers a simpler way to deal with this kind of challenge.

Two exceptions after one try

Look at the following code. As you can see, we've just introduced the second except branch. This is not the only difference – note that both branches have exception names specified. In this variant, each of the expected exceptions has its own way of handling the error, but it must be emphasized that only one of all branches can intercept the control – if one of the branches is executed, all the other branches remain idle.

1. try:
2. value = int(input('Enter a natural number: '))
3. print('The reciprocal of', value, 'is', 1/value)
4. except ValueError:
5. print('I do not know what to do.')
6. except ZeroDivisionError:
7. print('Division by zero is not allowed in our Universe.')

Additionally, the number of except branches is not limited – you can specify as many or as few of them as you need, but don't forget that none of the exceptions can be specified more than once.

But this still isn't the last Python word on exceptions. Stay tuned.

4.7.6 The default exception and how to use it

The code has changed again – can you see the difference?

1. try:
2. value = int(input('Enter a natural number: '))
3. print('The reciprocal of', value, 'is', 1/value)
4. except ValueError:
5. print('I do not know what to do.')
6. except ZeroDivisionError:
7. print('Division by zero is not allowed in our Universe.')
8. except:
9. print('Something strange has happened here… Sorry!')

We've added a third except branch, but this time it has no exception name specified – we can say it's anonymous or (what is closer to its actual role) it's the default. You can expect that when an exception is raised and there is no except branch dedicated to this exception, it will be handled by the default branch.

NOTE

The default except branch must be the last except branch. Always!

4.7.7 Some useful exceptions

Let's discuss in more detail some useful (or rather, the most common) exceptions you may experience.

ZeroDivisionError

This appears when you try to force Python to perform any operation which provokes division in which the divider is zero, or is indistinguishable from zero. Note that there is more than one Python operator which may cause this exception to raise. Can you guess them all?

Yes, they are: /, //, and %.

ValueError

Expect this exception when you're dealing with values which may be inappropriately used in some context. In general, this exception is raised when a function (like int() or float()) receives an argument of a proper type, but its value is unacceptable.

TypeError

This exception shows up when you try to apply a data whose type cannot be accepted in the current context. Look at the example:

1. short\_list = [1]
2. one\_value = short\_list[0.5]

You're not allowed to use a float value as a list index (the same rule applies to tuples, too). TypeError is an adequate name to describe the problem, and an adequate exception to raise.

AttributeError

This exception arrives – among other occasions – when you try to activate a method which doesn't exist in an item you're dealing with. For example:

1. short\_list = [1]
2. short\_list.append(2)
3. short\_list.depend(3)

The third line of our example attempts to make use of a method which isn't contained in the lists. This is the place where AttributeError is raised.

SyntaxError

This exception is raised when the control reaches a line of code which violates Python's grammar. It may sound strange, but some errors of this kind cannot be identified without first running the code. This kind of behavior is typical of interpreted languages – the interpreter always works in a hurry and has no time to scan the whole source code. It is content with checking the code which is currently being run. An example of such a category of issues will be presented very soon.

It's a bad idea to handle this exception in your programs. You should produce code that is free of syntax errors, instead of masking the faults you've caused.

4.7.8 Why you can't avoid testing your code

Although we're going to wrap up our exceptional considerations here, don't think it's all Python can offer to help you with begging for forgiveness. Python's exception machinery is far more complex, and its capabilities allow you to build expanded error handling strategies. We'll return to these issues – we promise. Feel free to conduct your experiments and to dive into exceptions yourself.

Now we want to tell you about the second side of the never-ending struggle with errors – the inevitable destiny of a developer's life. As you are not able to avoid making bugs in your code, you must always be ready to seek out and destroy them. Don't bury your head in the sand – ignoring errors won't make them disappear.

An important duty for developers is to test the newly created code, but you must not forget that testing isn't a way to prove that the code is error-free. Paradoxically, the only proof testing can provide is that your code contains errors. Don't think you can relax after a successful test.

The second important aspect of software testing is strictly psychological. It's a truth known for years that authors – even those who are reliable and self-aware – aren't able to objectively evaluate and verify their works.

This is why each novelist needs an editor and each programmer needs a tester. Some say – a little spitefully but truthfully – that developers test the code to show their perfection, not to find problems that may frustrate them. Testers are free of such dilemmas, and this is why their work is more effective and profitable.

Of course, this doesn't absolve you from being attentive and careful. Test your code as best you can. Don't make the testers' work too easy.

Your primary duty is to ensure that you've checked all execution paths your code can go through. Does that sound mysterious? Nothing of the kind!

Tracing the execution paths

Now look at the following code. Suppose you've just finished writing it.

1. temperature = float(input('Enter current temperature:'))
3. if temperature &gt; 0:
4. print("Above zero")
5. elif temperature &lt; 0:
6. print("Below zero")
7. else:
8. print("Zero")

There are three independent execution paths in the code – can you see them? They are determined by the if-elif-else statements. Of course, the execution paths can be built by many other statements, like loops, or even try-except blocks.

If you're going to test your code fairly and you want to sleep soundly and to dream without nightmares (nightmares about bugs can be devastating for a developer's performance) you are obliged to prepare a test data set that will force your code to negotiate all possible paths.

In our example, the set should contain at least three float values: one positive, one negative, and zero.

4.7.9 When Python closes its eyes

Such a test is crucial. We want to show you why you mustn't skip it. Look at the following code.

1. temperature = float(input('Enter current temperature:'))
3. if temperature &gt; 0:
4. print("Above zero")
5. elif temperature &lt; 0:
6. prin("Below zero")
7. else:
8. print("Zero")

We intentionally introduced an error into the code – we hope your watchful eyes noticed it immediately. Yes, we removed just one letter and in effect, the valid print() function invocation turns into the obviously invalid clause prin(). There is no such function as prin() in our program's scope, but is it really obvious for Python?

Run the code and enter 0.

As you can see, the code finishes its execution without any obstacles.

How is that possible? Why does Python overlook such an evident developer mistake?

Can you find the answers to these fundamental questions?

4.7.10 Tests, testing, and testers

The answer is simpler than you may expect, and a bit disappointing, too. Python – as you know for sure – is an interpreted language. This means that the source code is parsed and executed at the same time. Consequently, Python may not have time to analyze the code lines which aren't subject to execution. As an old developer's saying states: "it's a feature, not a bug" (please don't use this phrase to justify your code's weird behavior).

Do you understand now why passing through all execution paths is so vital and inevitable?

Let's assume that you complete your code and the tests you've made are successful. You deliver your code to the testers and – fortunately! – they found some bugs in it. We're using the word "fortunately" completely consciously. You need to accept that, firstly, testers are the developer's best friends – don't treat the bugs they discover as an offense or a malignancy; and, secondly, each bug the testers find is a bug that won't affect the users. Both factors are valuable and worth your attention.

You already know that your code contains a bug or bugs (the latter is more likely). How do you locate them and how do you fix your code?

Bug vs. debug

The basic measure a developer can use against bugs is – unsurprisingly – a debugger, while the process during which bugs are removed from the code is called debugging. According to an old joke, debugging is a complicated mystery game in which you are simultaneously the murderer, the detective, and – the most painful part of the intrigue – the victim. Are you ready to play all these roles? Then you must arm yourself with a debugger.

A debugger is a specialized piece of software that can control how your program is executed. Using the debugger, you can execute your code line-by-line, inspect all the variables' states and change their values on demand without modifying the source code, stop program execution when certain conditions are or aren't met, and do lots of other useful tasks.

We can say that every IDE is equipped with a more or less advanced debugger. Even IDLE has one, although you may find its handling a bit complicated and troublesome. If you want to make use of IDLE's integrated debugger, you should activate it using the "Debug" entry in the main IDLE window menu bar. It's the start point for all debugger facilities.

[Click here to see the screenshots](https://www.cs.uky.edu/~keen/help/debug-tutorial/debug.html) that show the IDLE debugger during a simple debugging session. (Thank you, University of Kentucky!)

You can see how the debugger visualizes variables and parameter values, and note the call stack which shows the chain of invocations leading from the currently executed function to the interpreter level.

If you want to know more about the IDLE debugger, consult [the IDLE documentation](https://docs.python.org/3/library/idle.html).

4.7.11 print debugging

This form of debugging, which can be applied to your code using any kind of debugger, is sometimes called interactive debugging. The meaning of the term is self-explanatory – the process needs your (the developer's) interaction to be performed.

Some other debugging techniques can be used to hunt bugs. It's possible that you aren't able or don't want to use a debugger (the reasons may vary). Are you helpless then? Absolutely not!

You may use one of the simplest and the oldest (but still useful) debugging tactics known as print debugging. The name speaks for itself – you just insert several additional print() invocations inside your code to output data which illustrates the path your code is currently negotiating. You can output the values of the variables which may affect the execution.

These printouts may output meaningful text like "I am here", "I entered the foo() function", "The result is 0", or they may contain sequences of characters that are legible only to you. Please don't use obscene or indecent words for the purpose, even though you may feel a strong temptation – your reputation can be ruined in a moment if these antics leak to the public.

As you can see, this kind of debugging isn't really interactive at all, or is interactive only to a small extent, when you decide to apply the input() function to stop or delay code execution.

After the bugs are found and removed, the additional printouts may be commented out or removed – it's up to you. Don't let them be executed in the final code – they may confuse both testers and users, and bring bad karma down upon you.

4.7.12 Some useful tips

Here are some tips which may help you to find and eliminate the bugs. None of them is either ultimate or definitive. Use them flexibly and rely on your intuition. Don't believe yourself – check everything twice.

Try to tell someone (for example, your friend or coworker) what your code is expected to do and how it actually behaves. Be concrete and don't omit details. Answer all questions your helper asks. You'll likely realize the cause of the problem while telling your story, as speaking activates these parts of your brain which remain idle during coding. If no human can help you with the problem, use a yellow rubber duck instead. We're not kidding – consult the Wikipedia article to learn more about this commonly used technique: [Rubber Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging).

Try to isolate the problem. You can extract the part of your code that is suspected of being responsible for your troubles and run it separately. You can comment out parts of the code that obscure the problem. Assign concrete values to variables instead of reading them from the input. Test your functions by applying predictable argument values. Analyze the code carefully. Read it aloud.

If the bug has appeared recently and didn't show up earlier, analyze all the changes you've introduced into your code – one of them may be the reason.

Take a break, drink a cup of coffee, take your dog and go for a walk, read a good book for a moment or two, make a phone call to your best friend – you'll be surprised how often it helps.

Be optimistic – you'll find the bug eventually; we promise you this.

4.7.13 Unit testing – a higher level of coding

There is also one important and widely used programming technique that you will have to adopt sooner or later during your developer career – it's called unit testing. The name may a bit confusing, as it's not only about testing the software, but also (and most of all) about how the code is written.

To make a long story short – unit testing assumes that tests are inseparable parts of the code and preparing the test data is an inseparable part of coding. This means that when you write a function or a set of cooperating functions, you're also obliged to create a set of data for which your code's behavior is predictable and known.

Moreover, you should equip your code with an interface that can be used by an automated testing environment. In this approach, any amendment made to the code (even the least significant) should be followed by the execution of all the unit tests accompanied by your source.

To standardize this approach and make it easier to apply, Python provides a dedicated module named unittest. We're not going to discuss it here – it's a broad and complex topic.

Therefore, we've prepared a separate course and certification path for this subject. It is called "Testing Essentials with Python", and we invite you to participate in it.

See you soon!

4.7 SECTION SUMMARY

1. In Python, there is a distinction between two kinds of errors:

* syntax errors (parsing errors), which occur when the parser comes across a statement that is incorrect. For example:

Trying to execute the following line:

1. print("Hello, World!)

will cause a SyntaxError, and result in the following (or similar) message being displayed in the console:

Pay attention to the arrow – it indicates the place where the Python parser has run into trouble. In our case, it's the missing double quote. Did you notice it?

File "main.py", line 1

print("Hello, World!)

^

SyntaxError: EOL while scanning string literal

Exceptions, which occur even when a statement/expression is syntactically correct; these are the errors that are detected during execution when your code results in an error which is not unconditionally fatal. For example:

Trying to execute the following line:

1. print(1/0)

will cause a ZeroDivisionError exception, and result in the following (or similar) message being displayed in the console:

Traceback (most recent call last):

File "main.py", line 1, in `&lt;module&gt;`

print(1/0)

ZeroDivisionError: division by zero

Pay attention to the last line of the error message – it actually tells you what happened. There are many different types of exceptions, such as ZeroDivisionError, NameError, TypeError, and many more; and this part of the message informs you of what type of exception has been raised. The preceding lines show you the context in which the exception has occurred.

2. You can "catch" and handle exceptions in Python by using the try-except block. So, if you have a suspicion that any particular snippet may raise an exception, you can write the code that will gracefully handle it, and will not interrupt the program. Look at the example:

1. while True:
2. try:
3. number = int(input("Enter an integer number: "))
4. print(number/2)
5. break
6. except:
7. print("Warning: the value entered is not a valid number. Try again…")

This code asks the user for input until they enter a valid integer number. If the user enters a value that cannot be converted to an int, the program will print Warning: the value entered is not a valid number. Try again…, and ask the user to enter a number again. What happens in such a case?

* The program enters the while loop.
* The try block/clause is executed. The user enters a wrong value, for example: hello!.
* An exception occurs, and the rest of the try clause is skipped. The program jumps to the except block, executes it, and then continues running after the try-except block.

If the user enters a correct value and no exception occurs, the subsequent instructions in the try block are executed.

3. You can handle multiple exceptions in your code block. Look at the following examples:

1. while True:
2. try:
3. number = int(input("Enter an int number: "))
4. print(5/number)
5. break
6. except ValueError:
7. print("Wrong value.")
8. except ZeroDivisionError:
9. print("Sorry. I cannot divide by zero.")
10. except:
11. print("I don't know what to do…")

You can use multiple except blocks within one try statement, and specify particular exception names. If one of the except branches is executed, the other branches will be skipped. Remember: you can specify a particular built-in exception only once. Also, don't forget that the default (or generic) exception, that is the one with no name specified, should be placed at the bottom of the branch (use the more specific exceptions first, and the more general last).

You can also specify and handle multiple built-in exceptions within a single except clause:

1. while True:
2. try:
3. number = int(input("Enter an int number: "))
4. print(5/number)
5. break
6. except (ValueError, ZeroDivisionError):
7. print("Wrong value or No division by zero rule broken.")
8. except:
9. print("Sorry, something went wrong…")

4. Some of the most useful Python built-in exceptions are: ZeroDivisionError, ValueError, TypeError, AttributeError, and SyntaxError. One more exception that, in our opinion, deserves your attention is the KeyboardInterrupt exception, which is raised when the user hits the interrupt key (CTRL-C or Delete). Run the code and hit the key combination to see what happens.

To learn more about the Python built-in exceptions, consult the official [Python documentation](https://docs.python.org/3/library/exceptions.html#bltin-exceptions).

5. Last but not least, you should remember about testing and debugging your code. Use such debugging techniques as print debugging; if possible – ask someone to read your code and help you to find bugs in it or to improve it; try to isolate the fragment of code that is problematic and susceptible to errors: test your functions by applying predictable argument values, and try to handle the situations when someone enters wrong values; comment out the parts of the code that obscure the issue. Finally, take breaks and come back to your code after some time with a fresh pair of eyes.

4.7 SECTION QUIZ

Question 1: What is the output of the following program if the user enters 0?

1. try:
2. value = int(input("Enter a value: "))
3. print(value/value)
4. except ValueError:
5. print("Bad input…")
6. except ZeroDivisionError:
7. print("Very bad input…")
8. except:
9. print("Booo!")

Question 2: What is the expected behavior of the following program if the user enters 0?

1. value = input("Enter a value: ")
2. print(10/value)

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor376)