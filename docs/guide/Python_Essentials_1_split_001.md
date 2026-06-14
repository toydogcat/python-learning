xml version='1.0' encoding='utf-8'?





Section 1.2 – Introduction to Python

Here, we will learn a little bit about the history of Python, different Python versions and implementations, and the impact that Python has had on modern-day programming. Let's begin.

Python – a tool, not a reptile

What is Python?

Python is a widely-used, interpreted, object-oriented, and high-level programming language with dynamic semantics, used for general-purpose programming.

And while you may know the python as a large snake, the name of the Python programming language comes from an old BBC television comedy sketch series called Monty Python's Flying Circus.

At the height of its success, the Monty Python team were performing their sketches to live audiences across the world, including at the Hollywood Bowl.

Since Monty Python is considered one of the two fundamental nutrients to a programmer (the other being pizza), Python's creator named the language in honor of the TV show.

Who created Python?

One of the amazing features of Python is the fact that it is actually one person's work. Usually, new programming languages are developed and published by large companies employing lots of professionals, and due to copyright rules, it is very hard to name any of the people involved in the project. Python is an exception.

There are not many languages whose authors are known by name. Python was created by [Guido van Rossum](https://en.wikipedia.org/wiki/Guido_van_Rossum), born in 1956 in Haarlem, the Netherlands. Of course, Guido van Rossum did not develop and evolve all the Python components himself.

The speed with which Python has spread around the world is a result of the continuous work of thousands (very often anonymous) programmers, testers, users (many of them aren't IT specialists) and enthusiasts, but it must be said that the very first idea (the seed from which Python sprouted) came to one head – Guido's.

A hobby programming project

The circumstances in which Python was created are a bit puzzling. According to Guido van Rossum:

In December 1989, I was looking for a "hobby" programming project that would keep me occupied during the week around Christmas. My office (…) would be closed, but I had a home computer, and not much else on my hands. I decided to write an interpreter for the new scripting language I had been thinking about lately: a descendant of ABC that would appeal to Unix/C hackers. I chose Python as a working title for the project, being in a slightly irreverent mood (and a big fan of Monty Python's Flying Circus).

— Guido van Rossum

Python goals

In 1999, Guido van Rossum defined his goals for Python:

* an easy and intuitive language just as powerful as those of the major competitors;
* open source, so anyone can contribute to its development;
* code that is as understandable as plain English;
* suitable for everyday tasks, allowing for short development times.

About 20 years later, it is clear that all these intentions have been fulfilled. Some sources say that Python is the most popular programming language in the world, while others claim it's the second or the third.

Either way, it still occupies a high rank in the top ten of the [PYPL PopularitY of Programming Language](http://pypl.github.io/PYPL.html) and the [TIOBE Programming Community Index](https://www.tiobe.com/tiobe-index/).

Python isn't a young language anymore. It is mature and trustworthy. It's not a one-hit wonder. It's a bright star in the programming firmament, and time spent learning Python is a very good investment.

What makes Python so special?

Why Python?

How does it happen that programmers, young and old, experienced and novice, want to use it? How did it happen that large companies adopted Python and implemented their flagship products using it?

There are many reasons – we've listed some of them already, but let's enumerate them again in a more practical manner:

* it's easy to learn – the time needed to learn Python is shorter than for many other languages; this means that it's possible to start the actual programming faster;
* it's easy to teach – the teaching workload is smaller than that needed by other languages; this means that the teacher can put more emphasis on general (language-independent) programming techniques, not wasting energy on exotic tricks, strange exceptions and incomprehensible rules;
* it's easy to use for writing new software – it's often possible to write code faster when using Python;
* it's easy to understand – it's also often easier to understand someone else's code faster if it is written in Python;
* it's easy to obtain, install and deploy – Python is free, open and multiplatform; not all languages can boast that.

Python rivals

Python has two direct competitors, with comparable properties and predispositions. These are:

* Perl – a scripting language originally authored by Larry Wall;
* Ruby – a scripting language originally authored by Yukihiro Matsumoto.

The former is more traditional and more conservative than Python, and resembles some of the old languages derived from the classic C programming language.

In contrast, the latter is more innovative and more full of fresh ideas than Python. Python itself lies somewhere between these two creations.

The Internet is full of forums with infinite discussions on the superiority of one of these three over the others, should you wish to learn more about each of them.

Where can we see Python in action?

We see it every day and almost everywhere. It's used extensively to implement complex Internet services like search engines, cloud storage and tools, social media and so on. Whenever you use any of these services, you are actually very close to Python, although you wouldn't know it.

Many developing tools are implemented in Python. More and more everyday-use applications are being written in Python. Lots of scientists have abandoned expensive proprietary tools and switched to Python. Lots of IT project testers have started using Python to carry out repeatable test procedures. The list is long.

Why not Python?

Despite Python's growing popularity, there are still some niches where Python is absent, or is rarely seen:

* low-level programming (sometimes called "close to metal" programming): if you want to implement an extremely effective driver or graphical engine, you wouldn't use Python;
* applications for mobile devices: although this territory is still waiting to be conquered by Python, it will most likely happen someday.

There is more than one Python

Python 2 vs. Python 3

There are two main kinds of Python, called Python 2 and Python 3.

Python 2 is an older version of the original Python. Its development has since been intentionally stalled, although that doesn't mean that there are no updates to it. On the contrary, the updates are issued on a regular basis, but they are not intended to modify the language in any significant way. They rather fix any freshly discovered bugs and security holes. Python 2's development path has reached a dead end already, but Python 2 itself is still very much alive.

Python 3 is the newer (or to be more precise, the current) version of the language. It's going through its own evolutionary path, creating its own standards and habits.

These two versions of Python aren't compatible with each other. Python 2 scripts won't run in a Python 3 environment and vice versa, so if you want the old Python 2 code to be run by a Python 3 interpreter, the only possible solution is to rewrite it, not from scratch, of course, as large parts of the code may remain untouched, but you do have to revise all the code to find all possible incompatibilities. Unfortunately, this process cannot be fully automatized.

It's too hard, too time-consuming, too expensive, and too risky to migrate an old Python 2 application to a new platform, and it's even possible that rewriting the code will introduce new bugs into it. It's easier, and more sensible, to leave these systems alone and to improve the existing interpreter, instead of trying to work inside the already functioning source code.

Python 3 isn't just a better version of Python 2 – it is a completely different language, although it's very similar to its predecessor. When you look at them from a distance, they appear to be the same, but when you look closely, though, you notice a lot of differences.

If you're modifying an old existing Python solution, then it's highly likely that it was coded in Python 2. This is the reason why Python 2 is still in use. There are too many existing Python 2 applications to discard it altogether.

NOTE

If you're going to start a new Python project, you should use Python 3, and this is the version of Python that will be used during this course.

It is important to remember that there may be smaller or bigger differences between subsequent Python 3 releases (e.g. Python 3.6 introduced ordered dictionary keys by default under the CPython implementation) – the good news, though, is that all the newer versions of Python 3 are backward compatible with the previous versions of Python 3. Whenever meaningful and important, we will always try to highlight those differences in the course.

All the code samples you will find during the course have been tested against Python 3.4, Python 3.6, Python 3.7, Python 3.8, and Python 3.9.

Python implementations

In addition to Python 2 and Python 3, there is more than one version of each.

Following the [Python wiki page](https://wiki.python.org/moin/PythonImplementations), an implementation of Python refers to "a program or environment, which provides support for the execution of programs written in the Python language, as represented by the CPython reference implementation."

The traditional implementation of Python, called CPython, is Guido van Rossum's reference version of the Python computing language, and it's most often called just "Python". When you hear the name CPython, it's most probably used to distinguish it from other, non-traditional, alternative implementations.

But, first things first. There are the Pythons which are maintained by the people gathered around the PSF ([Python Software Foundation](https://www.python.org/psf-landing/)), a community that aims to develop, improve, expand, and popularize Python and its environment. The PSF's president is Guido von Rossum himself, and for this reason, these Pythons are called canonical. They are also considered to be reference Pythons, as any other implementation of the language should follow all standards established by the PSF.

Guido van Rossum used the "C" programming language to implement the very first version of his language and this decision is still in force. All Pythons coming from the PSF are written in the "C" language. There are many reasons for this approach. One of them (probably the most important) is that thanks to it, Python may be easily ported and migrated to all platforms with the ability to compile and run "C" language programs (virtually all platforms have this feature, which opens up many expansion opportunities for Python).

This is why the PSF implementation is often referred to as CPython. This is the most influential Python among all the Pythons in the world.

This component is a flipcard comprised of flippable cards containing display image. Select the front face image to flip to the back face of these card to display associated text.

Cython is one of a possible number of solutions to the most painful of Python's traits – the lack of efficiency. Large and complex mathematical calculations may be easily coded in Python (much easier than in "C" or any other traditional language), but the resulting code execution may be extremely time-consuming.

How are these two contradictions reconciled? One solution is to write your mathematical ideas using Python, and when you're absolutely sure that your code is correct and produces valid results, you can translate it into "C". Certainly, "C" will run much faster than pure Python.

This is what Cython is intended to do – to automatically translate the Python code (clean and clear, but not too swift) into "C" code (complicated and talkative, but agile).

Another version of Python is called Jython.

"J" is for "Java". Imagine a Python written in Java instead of C. This is useful, for example, if you develop large and complex systems written entirely in Java and want to add some Python flexibility to them. The traditional CPython may be difficult to integrate into such an environment, as C and Java live in completely different worlds and don't share many common ideas.

Jython can communicate with existing Java infrastructure more effectively. This is why some projects find it useful and necessary.

Note: the current Jython implementation follows Python 2 standards. There is no Jython conforming to Python 3, so far.

The PyPy logo is a rebus. Can you solve it? It means: a Python within a Python. In other words, it represents a Python environment written in Python-like language named RPython (Restricted Python). It is actually a subset of Python.

The source code of PyPy is not run in the interpretation manner, but is instead translated into the C programming language and then executed separately.

This is useful because if you want to test any new feature that may be (but doesn't have to be) introduced into mainstream Python implementation, it's easier to check it with PyPy than with CPython. This is why PyPy is rather a tool for people developing Python than for the rest of the users.

This doesn't make PyPy any less important or less serious than CPython, of course.

In addition, PyPy is compatible with the Python 3 language.

There are many more different Pythons in the world. You'll find them if you look, but this course will focus on CPython.

MicroPython is an efficient open source software implementation of Python 3 that is optimized to run on microcontrollers. It includes a small subset of the Python Standard Library, but it is largely packed with a large number of features such as interactive prompt or arbitrary precision integers, as well as modules that give the programmer access to low-level hardware.

Originally created by Damien George, an Australian programmer, who in the year 2013 ran a successful campaign on Kickstarter, and released the first MicroPython version with an STM32F4-powered development board called pyboard.

In 2017, MicroPython was used to create CircuitPython, another one open source programming language that runs on the microcontroller hardware, which is a derivative of the MicroPython language.

Section 1.3 – Downloading and Installing Python

Here we will talk about the ways of obtaining, installing, and configuring Python on your local computer. This section is optional, as throughout the course you will be able to launch, test, and experiment with all your Python programs in Edube Interactive™, the programming environment that we have integrated with the learning platform and these study resources. Still, if you can download and install Python on your local machine, we strongly recommend it.

Begin your Python journey

How to get Python and how to use it

There are several ways to get your own copy of Python 3, depending on the operating system you use.

Linux users most probably have Python already installed – this is the most likely scenario, as Python's infrastructure is intensively used by many Linux OS components.

For example, some distributors may couple their specific tools together with the system and many of these tools, like package managers, are often written in Python. Some parts of graphical environments available in the Linux world may use Python, too.

If you're a Linux user, open the terminal/console, and type:

python3

at the shell prompt, press Enter and wait. If you see something like this:

then you don't have to do anything else.

If Python 3 is absent, then refer to your Linux documentation in order to find out how to use your package manager to download and install a new package – the one you need is named python3 or its name begins with that.

All non-Linux users can download a copy at &lt;https://www.python.org/downloads/&gt;.

How to download, install, and configure Python

Because the browser tells the site you've entered the OS you use, the only step you have to take is to click the appropriate Python version you want.

In this case, select Python 3. The site always offers you the latest version of it.

If you're a Windows user, start the downloaded .exe file and follow all the steps.

Leave the default settings the installer suggests for now, with one exception – look at the checkbox named Add Python 3.x to PATH and check it.

This will make things easier.

If you're a macOS user, a version of Python 2 may already have been preinstalled on your computer, but since we will be working with Python 3, you will still need to download and install the relevant .pkg file from the Python site.

Starting your work with Python

Now that you have Python 3 installed, it's time to check if it works and make the very first use of it.

This will be a very simple procedure, but it should be enough to convince you that the Python environment is complete and functional.

There are many ways of utilizing Python, especially if you're going to be a Python developer.

To start your work, you need the following tools:

* an editor which will support you in writing the code (it should have some special features, not available in simple tools); this dedicated editor will give you more than the standard OS equipment;
* a console in which you can launch your newly written code and stop it forcibly when it gets out of control;
* a tool named a debugger, able to launch your code step-by-step, which will allow you to inspect it at each moment of execution.

Besides its many useful components, the Python 3 standard installation contains a very simple but extremely useful application named IDLE.

IDLE is an acronym: Integrated Development and Learning Environment.

Navigate through your OS menus, find IDLE somewhere under Python 3.x and launch it. This is what you should see:

Your very first program before your first program…

It is now time to write and run your first Python 3 program. It will be very simple, for now.

The first step is to create a new source file and fill it with code. Click File in the IDLE menu and choose New file.

As you can see, IDLE opens a new window for you. You can use it to write and amend your code.

This is the editor window. Its only purpose is to be a workplace in which your source code is treated. Do not confuse the editor window with the shell window. They perform different functions.

The editor window is currently untitled, but it's good practice to start work by naming the source file.

Click File (in the new window), then click Save as…, select a folder for the new file (the desktop is a good place for your first programming attempts) and chose a name for the new file.

Note: don't set any extension for the file name you are going to use. Python needs its files to have the .py extension, so you should rely on the dialog window's defaults. Using the standard .py extension enables the OS to properly open these files.

Now put just one line into your newly opened and named editor window.

The line looks like this:

print("Hisssssss…")

You can use the clipboard to copy the text into the file.

We're not going to explain the meaning of the program right now. You'll find a detailed discussion in the next chapter.

Take a closer look at the quotation marks. These are the simplest form of quotation marks (neutral, straight, dumb, etc.) commonly used in source files. Do not try to use typographic quotes (curved, curly, smart, etc.), used by advanced text processors, as Python doesn't accept them.

Save the file (File -&gt; Save) and run the program (Run -&gt; Run Module).

If everything goes okay and there are no mistakes in the code, the console window will show you the effects caused by running the program.

In this case, the program hisses.

Try to run it once again. And once more.

Now close both windows now and return to the desktop.

How to spoil and fix your code

Now start IDLE again.

* Click File, Open, point to the file you saved previously and let IDLE read it in.
* Try to run it again by pressing F5 when the editor window is active.

As you can see, IDLE is able to save your code and retrieve it when you need it again.

IDLE contains one additional and helpful feature.

* First, remove the closing parenthesis.
* Then enter the parenthesis again.

Your code should look like the one down here:

Hisssssss…

Every time you put the closing parenthesis in your program, IDLE will show the part of the text limited with a pair of corresponding parentheses. This helps you to remember to place them in pairs.

Remove the closing parenthesis again. The code becomes erroneous. It contains a syntax error now. IDLE should not let you run it.

Try to run the program again. IDLE will remind you to save the modified file. Follow the instructions.

Watch all the windows carefully.

A new window appears – it says that the interpreter has encountered an EOF (end-of-file) although (in its opinion) the code should contain some more text.

The editor window shows clearly where it happened.

Fix the code now. It should look like this:

print("Hisssssss…")

Run it to see if it "hisses" again.

Let's spoil the code one more time. Remove one letter from the word print. Run the code by pressing F5. What happens now? As you can see, Python is not able to recognize the instruction.

You may have noticed that the error message generated for the previous error is quite different from the first one.

This is because the nature of the error is different and the error is discovered at a different stage of interpretation.

The editor window will not provide any useful information regarding the error, but the console windows might.

The message (in red) shows (in the subsequent lines):

* the traceback (which is the path that the code traverses through different parts of the program – you can ignore it for now, as it is empty in such a simple code);
* the location of the error (the name of the file containing the error, line number and module name); note: the number may be misleading, as Python usually shows the place where it first notices the effects of the error, not necessarily the error itself;
* the content of the erroneous line; note: IDLE's editor window doesn't show line numbers, but it displays the current cursor location at the bottom-right corner; use it to locate the erroneous line in a long source code;
* the name of the error and a short explanation.

Experiment with creating new files and running your code. Try to output a different message to the screen, e.g. roar!, meow, or even maybe an oink!. Try to spoil and fix your code – see what happens.

Module 2: Python Data Types, Variables, Operators, and Basic I/O Operations

Section 2.1 – The "Hello, World!" Program

Welcome to Module two! In the first section, we will learn about the most essential elements of syntax and semantics of the Python language, and use them to build your very first Python program – "Hello, World!".

2.1.1 Your very first program

It's time to start writing some real, working Python code. It'll be very simple for the time being.

As we're going to show you some fundamental concepts and terms, these snippets of code won't be all that serious or complex.

Run the following code. If everything goes okay here, you'll see the line of text in the console window.

Alternatively, launch IDLE, create a new Python source file, fill it with this code, name the file and save it. Now run it. If everything goes okay, you'll see the text contained within the quotation marks in the IDLE console window. The code you have run should look familiar. You saw something very similar when we led you through the setting up of the IDLE environment.

1. print("Hello, world!")

Now we'll spend some time showing and explaining to you what you're actually seeing, and why it looks like this.

As you can see, this first program consists of the following parts:

* the word print;
* an opening parenthesis;
* a quotation mark;
* a line of text: Hello, World!;
* another quotation mark;
* a closing parenthesis.

Each of these plays a very important role in the code.

2.1.2 The print() function

Look at this line of code:

1. print("Hello, World!")

The word print that you can see here is a function name. That doesn't mean that wherever the word appears it is always a function name. The meaning of the word comes from the context in which the word has been used.

You've probably encountered the term function many times before, during math classes. You can probably also list several names of mathematical functions, like sine or log.

Python functions, however, are more flexible, and can contain more content than their mathematical siblings.

A function (in this context) is a separate part of the computer code able to:

* cause some effect (e.g. send text to the terminal, create a file, draw an image, play a sound, etc.); this is something completely unheard of in the world of mathematics;
* evaluate a value (e.g. the square root of a value or the length of a given text) and return it as the function's result; this is what makes Python functions the relatives of mathematical concepts.

Moreover, many Python functions can do these two things together.

Where do functions come from?

* From Python itself: they may come from Python itself; the print function is one of this kind; such a function is an added value received together with Python and its environment (it is built-in); you don't have to do anything special (e.g. ask anyone for anything) if you want to make use of it;
* From modules: they may come from one or more of Python's add-ons named modules; some of the modules come with Python, others may require separate installation – whatever the case, they all need to be explicitly connected with your code (we'll show you how to do that soon);
* From your code: you can write them yourself, placing as many functions as you want and need inside your program to make it simpler, clearer and more elegant.

The name of the function should be significant (the name of the print function is self-evident).

Of course, if you're going to make use of any already existing function, you have no influence on its name, but when you start writing your own functions, you should consider carefully your choice of names.

2.1.3 Function arguments

As we said before, a function may have:

* an effect;
* a result.

There's also a third, very important, function component ‒ the argument(s).

Mathematical functions usually take one argument. For example, sin(x) takes an x, which is the measure of an angle.

Python functions, on the other hand, are more versatile. Depending on the individual needs, they may accept any number of arguments ‒ as many as necessary to perform their tasks. Note: When we said any number, that includes zero ‒ some Python functions don't need any argument.

print("Hello, World!")

In spite of the number of needed/provided arguments, Python functions strongly demand the presence of a pair of parentheses ‒ opening and closing ones, respectively.

If you want to deliver one or more arguments to a function, you place them inside the parentheses. If you're going to use a function which doesn't take any argument, you still have to have the parentheses.

Note: to distinguish ordinary words from function names, place a pair of empty parentheses after their names, even if the corresponding function wants one or more arguments. This is a standard convention.

The function we're talking about here is print().

Does the print() function in our example have any arguments?

Of course it does, but what are they?

A string as an argument of the print() function

The only argument delivered to the print() function in this example is a string:

print("Hello, World!")

As you can see, the string is delimited with quotes ‒ in fact, the quotes make the string ‒ they cut out a part of the code and assign a different meaning to it.

You can imagine that the quotes say something like: the text between us is not code. It isn't intended to be executed, and you should take it as is.

Almost anything you put inside the quotes will be taken literally, not as code, but as data. Try to play with this particular string ‒ modify it, enter some new content, delete some of the existing content.

There's more than one way to specify a string inside Python's code, but for now, though, this one is enough.

So far, you have learned about two important parts of the code: the function and the string. We've talked about them in terms of syntax, but now it's time to discuss them in terms of semantics.

2.1.4 Function invocation

The function name (print in this case) along with the parentheses and argument(s), forms the function invocation.

1. print("Hello, world!")

We'll discuss this in more depth soon, but let's just shed a little light on it right now.

What happens when Python encounters an invocation like this one?

function\_name(argument)

Let's see:

* First, Python checks if the name specified is legal (it browses its internal data in order to find an existing function of the name; if this search fails, Python aborts the code)
* second, Python checks if the function's requirements for the number of arguments allows you to invoke the function in this way (e.g. if a specific function demands exactly two arguments, any invocation delivering only one argument will be considered erroneous, and will abort the code's execution)
* third, Python leaves your code for a moment and jumps into the function you want to invoke; of course, it takes your argument(s) too and passes it/them to the function;
* fourth, the function executes its code, causes the desired effect (if any), evaluates the desired result(s) (if any) and finishes its task;
* finally, Python returns to your code (to the place just after the invocation) and resumes its execution.

LAB 1 Working with the print() function

The print() command, which is one of the easiest directives in Python, simply prints out a line to the screen.

In your first lab:

* Use the print() function to print the line Hello, Python! to the screen. Use double quotes around the string.
* Having done that, use the print() function again, but this time print your first name.
* Remove the double quotes and run your code. Watch Python's reaction. What kind of error is thrown?
* Then, remove the parentheses, put back the double quotes, and run your code again. What kind of error is thrown this time?
* Experiment as much as you can. Change double quotes to single quotes, use multiple print() functions on the same line, and then on different lines. See what happens.

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor321)

2.1.5 The print() function and its effect, arguments, and values returned

Three important questions have to be answered as soon as possible:

1. What effect does the print() function cause?

The effect is very useful and very spectacular. The function:

* takes its arguments (it may accept more than one argument and may also accept less than one argument)
* converts them into human-readable form if needed (as you may suspect, strings don't require this action, as the string is already readable)
* and sends the resulting data to the output device (usually the console); in other words, anything you put into the print() function will appear on your screen.

No wonder then, that from now on, you'll utilize print() very intensively to see the results of your operations and evaluations.

2. What arguments does print() expect?

Any. We'll show you soon that print() is able to operate with virtually all types of data offered by Python. Strings, numbers, characters, logical values, objects ‒ any of these may be successfully passed to print().

3. What value does the print() function return?

None. Its effect is enough.

2.1.6 Instructions

You have already seen a computer program that contains one function invocation. A function invocation is one of many possible kinds of Python instruction.

Of course, any complex program usually contains many more instructions than one. The question is: how do you couple more than one instruction into the Python code?

Python's syntax is quite specific in this area. Unlike most programming languages, Python requires that there cannot be more than one instruction in a line.

A line can be empty (i.e. it may contain no instruction at all) but it must not contain two, three or more instructions. This is strictly prohibited.

Note: Python makes one exception to this rule ‒ it allows one instruction to spread across more than one line (which may be helpful when your code contains complex constructions).

Let's expand the code a bit. Run it and note what you see.

1. print("The itsy bitsy spider climbed up the waterspout.")
2. print("Down came the rain and washed the spider out.")

Your Python console should now look like this:

The itsy bitsy spider climbed up the waterspout.  
Down came the rain and washed the spider out.

This is a good opportunity to make some observations:

* the program invokes the print() function twice, and you can see two separate lines in the console ‒ this means that print() begins its output from a new line each time it starts its execution; you can change this behavior, but you can also use it to your advantage;
* each print() invocation contains a different string, as its argument, and the console content reflects it ‒ this means that the instructions in the code are executed in the same order in which they have been placed in the source file; no subsequent instruction is executed until the previous one is completed (there are some exceptions to this rule, but you can ignore them for now.)

We've changed the example a bit ‒ we've added one empty print() function invocation. We call it empty because we haven't delivered any arguments to the function.

You can see it here. Run the code.

What happens?

1. print("The itsy bitsy spider climbed up the waterspout.")
2. print()
3. print("Down came the rain and washed the spider out.")

If everything goes right, you should see something like this:

The itsy bitsy spider climbed up the waterspout.  
Down came the rain and washed the spider out.

As you can see, the empty print() invocation is not as empty as you may have expected ‒ it does output an empty line, or (this interpretation is also correct) it outputs a newline.

This is not the only way to produce a newline in the output console. We're now going to show you another way.

2.1.7 Python escape and newline characters

We've modified the code again. Look at it carefully.

There are two very subtle changes ‒ we've inserted a strange pair of characters inside the rhyme. They look like this: \n.

1. print("The itsy bitsy spider\nclimbed up the waterspout.")
2. print()
3. print("Down came the rain\nand washed the spider out.")

Interestingly, while you can see two characters, Python sees one.

The backslash (\) has a very special meaning when used inside strings ‒ this is called the escape character.

The word escape should be understood specifically ‒ it means that the series of characters in the string escapes for the moment (a very short moment) to introduce a special inclusion.

In other words, the backslash doesn't mean anything in itself, but is only a kind of announcement, that the next character after the backslash has a different meaning too.

The letter n placed after the backslash comes from the word newline.

Both the backslash and the n form a special symbol named a newline character, which urges the console to start a new output line.

Run the code. Your console should now look like this:

The itsy bitsy spider  
climbed up the waterspout.  
Down came the rain  
and washed the spider out.

As you can see, two newlines appear in the nursery rhyme, in the places where the \n have been used.

This convention has two important consequences:

1. If you want to put just one backslash inside a string, don't forget its escaping nature ‒ you have to double it. For example, an invocation like this will cause an error:

print("")

while this one won't:

print("\")

2. Not all escape pairs (the backslash coupled with another character) mean something.

Experiment with your code, run it, and see what happens.

1. print("The itsy bitsy spider\nclimbed up the waterspout.")
2. print()
3. print("Down came the rain\nand washed the spider out.")

2.1.8 Using multiple arguments

So far we have tested the print() function behavior with no arguments, and with one argument. It's also worth trying to feed the print() function with more than one argument.

This is what we're going to test now:

1. print("The itsy bitsy spider" , "climbed up" , "the waterspout.")

There is one print() function invocation, but it contains three arguments. All of them are strings.

The arguments are separated by commas. We've surrounded them with spaces to make them more visible, but it's not really necessary, and we won't be doing it anymore.

In this case, the commas separating the arguments play a completely different role than the comma inside the string. The former is a part of Python's syntax, while the latter is intended to be shown in the console.

If you look at the code again, you'll see that there are no spaces inside the strings.

Run the code and see what happens.

The console should now be showing the following text:

The itsy bitsy spider climbed up the waterspout.

The spaces, removed from the strings, have appeared again. Can you explain why?

Two conclusions emerge from this example:

a print() function invoked with more than one argument outputs them all on one line;

* the print() function puts a space between the outputted arguments on its own initiative.

2.1.9 Positional arguments

Now that you know a bit about print() function customs, we're going to show you how to change them.

You should be able to predict the output without running the code.

1. print("My name is", "Python.")
2. print("Monty Python.")

The way in which we are passing the arguments into the print() function is the most common in Python, and is called the positional way. This name comes from the fact that the meaning of the argument is dictated by its position (e.g. the second argument will be outputted after the first, not the other way round).

Run the code and check if the output matches your predictions.

2.1.10 Keyword arguments

Python offers another mechanism for the passing of arguments, which can be helpful when you want to convince the print() function to change its behavior a bit.

We aren't going to explain it in depth right now. We plan to do this when we talk about functions. For now, we simply want to show you how it works. Feel free to use it in your own programs.

The mechanism is called keyword arguments. The name stems from the fact that the meaning of these arguments is taken not from its location (position) but from the special word (keyword) used to identify them.

The print() function has two keyword arguments that you can use for your purposes. The first is called end.

Here's a very simple example how to use a keyword argument.

1. print("My name is", "Python.", end=" ")
2. print("Monty Python.")

In order to use it, it is necessary to know some rules:

* a keyword argument consists of three elements: a keyword identifying the argument (end here); an equal sign (=); and a value assigned to that argument;
* any keyword arguments have to be put after the last positional argument (this is very important)

In our example, we have made use of the end keyword argument, and set it to a string containing one space.

Run the code to see how it works.

The console should now be showing the following text:

My name is Python. Monty Python.

As you can see, the end keyword argument determines the characters the print() function sends to the output once it reaches the end of its positional arguments.

The default behavior reflects the situation where the end keyword argument is implicitly used in the following way: end="\n".

And now it's time to try something more difficult.

If you look carefully, you'll see that we've used the end argument, but the string assigned to it is empty (it contains no characters at all).

What will happen now? Run the program to find out.

1. print("My name is ", end="")
2. print("Monty Python.")

As the end argument has been set to nothing, the print() function outputs nothing too, once its positional arguments have been exhausted.

The console should now be showing the following text:

My name is Monty Python.

Note: no newlines have been sent to the output.

The string assigned to the end keyword argument can be of any length. Experiment with it if you want.

We said previously that the print() function separates its outputted arguments with spaces. This behavior can be changed, too.

The keyword argument that can do this is named sep (as in separator).

Look at the following code and run it.

1. print("My", "name", "is", "Monty", "Python.", sep="-")

The sep argument delivers the following results:

My-name-is-Monty-Python.

The print() function now uses a dash, instead of a space, to separate the outputted arguments.

Note: the sep argument's value may be an empty string, too. Try it for yourself.

Both keyword arguments may be mixed in one invocation, just like here.

1. print("My", "name", "is", sep="\_", end="\*")
2. print("Monty", "Python.", sep="\*", end="\*\n")

The example doesn't make much sense, but it visibly presents the interactions between end and sep.

Can you predict the output?

Run the code and see if it matches your predictions.

Now that you understand the print() function, you're ready to consider how to store and process data in Python.

Without print(), you wouldn't be able to see any results.

LAB 2 The print() function and its arguments

Modify the first line of code, using the sep and end keywords, to match the expected output. Use the two print() functions.

Don't change anything in the second print() invocation.

Expected output

Programming\*\*\*Essentials\*\*\*in…Python

Code

1. print("Programming","Essentials","in")
2. print("Python")

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor322)

LAB 3 Formatting the output

We strongly encourage you to play with the code we've written for you, and make some (maybe even destructive) amendments. Feel free to modify any part of the code, but there is one condition ‒ learn from your mistakes and draw your own conclusions.

Try to:

* minimize the number of print() function invocations by inserting the \n sequence into the strings;
* make the arrow twice as large (but keep the proportions)
* duplicate the arrow, placing both arrows side by side; note: a string may be multiplied by using the following trick: "string" \* 2 will produce "stringstring" (we'll tell you more about it soon)
* remove any of the quotes, and look carefully at Python's response; pay attention to where Python sees an error ‒ is this the place where the error really exists?
* do the same with some of the parentheses;
* change any of the print words into something else, differing only in case (e.g. Print) ‒ what happens now?
* replace some of the quotes with apostrophes; watch what happens carefully.

Code

1. print("    \*")
2. print("   \* \*")
3. print("  \*   \*")
4. print(" \*     \*")
5. print("\*\*\*   \*\*\*")
6. print("  \*   \*")
7. print("  \*   \*")
8. print("  \*\*\*\*\*")

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor323)

2.1 SECTION SUMMARY

1. The print() function is a built-in function. It prints/outputs a specified message to the screen/console window.

2. Built-in functions, contrary to user-defined functions, are always available and don't have to be imported. Python 3.8 comes with 69 built-in functions. You can find their full list provided in alphabetical order in the [Python Standard Library](https://docs.python.org/3/library/functions.html).

3. To call a function (this process is known as function invocation or function call), you need to use the function name followed by parentheses. You can pass arguments into a function by placing them inside the parentheses. You must separate arguments with a comma, e.g. print("Hello,", "world!"). An "empty" print() function outputs an empty line to the screen.

4. Python strings are delimited with quotes, e.g. "I am a string" (double quotes), or 'I am a string, too' (single quotes).

5. Computer programs are collections of instructions. An instruction is a command to perform a specific task when executed, e.g. to print a certain message to the screen.

6. In Python strings the backslash (\) is a special character which announces that the next character has a different meaning, e.g. \n (the newline character) starts a new output line.

7. Positional arguments are the ones whose meaning is dictated by their position, e.g. the second argument is outputted after the first, the third is outputted after the second, etc.

8. Keyword arguments are the ones whose meaning is not dictated by their location, but by a special word (keyword) used to identify them.

9. The end and sep parameters can be used for formatting the output of the print() function. The sep parameter specifies the separator between the outputted arguments, e.g. print("H", "E", "L", "L", "O", sep="-"), whereas the end parameter specifies what to print at the end of the print statement.

2.1 SECTION QUIZ

Question 1: What is the output of the following program?

1. print("My\nname\nis\nBond.", end=" ")
2. print("James Bond.")

Question 2: What is the output of the following program?

1. print(sep="&", "fish", "chips")

Question 3: Which of the following print() function invocations will cause a SyntaxError?

print('Greg's book.')  
print("'Greg's book.'")  
print('"Greg's book."')  
print("Greg's book.")  
print('"Greg's book."')

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor351)

Section 2.2 – Python literals

Now it's time to talk about Python literals.

2.2.1 Literals – the data in itself

Now that you have a little knowledge of some of the powerful features offered by the print() function, it's time to learn about some new issues, and one important new term ‒ the literal.

A literal is data whose values are determined by the literal itself.

As this is a difficult concept to understand, a good example may be helpful.

Take a look at the following set of digits:

123

Can you guess what value it represents? Of course you can ‒ it's one hundred twenty three.

But what about this:

c

Does it represent any value? Maybe. It can be the symbol of the speed of light, for example. It can also be the constant of integration. Or even the length of a hypotenuse in the sense of a Pythagorean theorem. There are many possibilities.

You cannot choose the right one without some additional knowledge.

And this is the clue: 123 is a literal, and c is not.

You use literals to encode data and to put them into your code. We're now going to show you some conventions you have to obey when using Python.

Let's start with a simple experiment ‒ take a look at the following snippet.

1. print("2")
2. print(2)

The first line looks familiar. The second seems to be erroneous due to the visible lack of quotes.

Try to run it.

If everything goes okay, you'll now see two identical lines.

What happened? What does it mean?

Through this example, you encounter two different types of literals:

* a string, which you already know,
* and an integer number, something completely new.

The print() function presents them in exactly the same way ‒ this example is obvious, as their human-readable representation is also the same. Internally, in the computer's memory, these two values are stored in completely different ways ‒ the string exists as just a string ‒ a series of letters.

The number is converted into machine representation (a set of bits). The print() function is able to show them both in a form readable to humans.

We're now going to be spending some time discussing numeric literals and their internal life.

2.2.2 Integers

You may already know a little about how computers perform calculations on numbers. Perhaps you've heard of the binary system, and know that it's the system computers use for storing numbers, and that those computers can perform any operation upon them.

We won't explore the intricacies of positional numeric systems here, but we will say that the numbers handled by modern computers are of two types:

* integers, that is, those which are devoid of the fractional part;
* and floating-point numbers (or simply floats), that contain (or are able to contain) the fractional part.

This definition is not entirely accurate, but quite sufficient for now. The distinction is very important, and the boundary between these two types of numbers is very strict. Both of these kinds of numbers differ significantly in how they're stored in a computer memory and in the range of acceptable values.

The characteristic of the numeric value which determines its kind, range, and application, is called the type.

If you encode a literal and place it inside Python code, the form of the literal determines the representation (type) Python will use to store it in the memory.

For now, let's leave the floating-point numbers aside (we'll come back to them soon) and consider the question of how Python recognizes integers.

The process is almost like how you would write them with a pencil on paper – it's simply a string of digits that make up the number. But there's a reservation ‒ you must not interject any characters that are not digits inside the number.

Take, for example, the number eleven million one hundred eleven thousand one hundred eleven. If you took a pencil in your hand right now, you would write the number like this: 11,111,111, or like this: 11.111.111, or even like this: 11 111 111.

It's clear that this provision makes it easier to read, especially when the number consists of many digits. However, Python doesn't accept things like these. It's prohibited. What Python does allow, though, is the use of underscores in numeric literals.\*

Therefore, you can write this number either like this: 11111111, or like this: 11\_111\_111.

NOTE Python 3.6 has introduced underscores in numeric literals, allowing for the placement of single underscores between digits and after base specifiers for improved readability. This feature is not available in older versions of Python.

And how do we code negative numbers in Python? As usual ‒ by adding a minus. You can write: -11111111, or -11\_111\_111.

Positive numbers do not need to be preceded by the plus sign, but it's permissible, if you wish to do it. The following lines describe the same number: +11111111 and 11111111.

Octal and hexadecimal numbers

There are two additional conventions in Python that are unknown to the world of mathematics. The first allows us to use numbers in an octal representation.

If an integer number is preceded by an 0O or 0o prefix (zero-o), it will be treated as an octal value. This means that the number must contain digits taken from the [0..7] range only.

0o123 is an octal number with a (decimal) value equal to 83.

The print() function does the conversion automatically. Try this:

1. print(0o123)

The second convention allows us to use hexadecimal numbers. Such numbers should be preceded by the prefix 0x or 0X (zero-x).

0x123 is a hexadecimal number with a (decimal) value equal to 291. The print() function can manage these values too. Try this:

1. print(0x123)

2.2.3 Floats

Now it's time to talk about another type, which is designed to represent and to store the numbers that (as a mathematician would say) have a non-empty decimal fraction.

They are the numbers that have (or may have) a fractional part after the decimal point, and although such a definition is very poor, it's certainly sufficient for what we wish to discuss.

Whenever we use a term like two and a half or minus zero point four, we think of numbers which the computer considers floating-point numbers:

2.5  
-0.4

Note: two and a half looks normal when you write it in a program, although if your native language prefers to use a comma instead of a point in the number, you should ensure that your number doesn't contain any commas at all.

Python will not accept that, or (in very rare but possible cases) may misunderstand your intentions, as the comma itself has its own reserved meaning in Python.

If you want to use just a value of two and a half, you should write it as shown previously. Note once again: there is a point between 2 and 5, not a comma.

As you can probably imagine, the value of zero point four could be written in Python as:

0.4

But don't forget this simple rule ‒ you can omit zero when it is the only digit in front of or after the decimal point.

In essence, you can write the value 0.4 as:

.4

For example: the value of 4.0 could be written as:

4.

This will change neither its type nor its value.

Ints vs. floats

The decimal point is essential for recognizing floating-point numbers in Python.

Look at these two numbers:

4  
4.0

You may think that they are exactly the same, but Python sees them in a completely different way.

4 is an integer number, whereas 4.0 is a floating-point number.

The point is what makes a float.

On the other hand, it's not only points that make a float. You can also use the letter e.

When you want to use any numbers that are very large or very small, you can use scientific notation.

Take, for example, the speed of light, expressed in meters per second. Written directly it would look like this: 300000000.

To avoid writing out so many zeros, physics textbooks use an abbreviated form, which you have probably already seen: 3 x 108.

It reads: three times ten to the power of eight.

In Python, the same effect is achieved in a slightly different way ‒ take a look:

3E8

The letter E (you can also use the lower-case letter e ‒ it comes from the word exponent) is a concise record of the phrase times ten to the power of.

Note:

* the exponent (the value after the E) has to be an integer;
* the base (the value in front of the E) may be either an integer or a float.

Coding floats

Let's see how this convention is used to record numbers that are very small (in the sense of their absolute value, which is close to zero).

A physical constant called Planck's constant (and denoted as h), according to the textbooks, has the value of: 6.62607 x 10-34.

If you would like to use it in a program, you should write it this way:

6.62607E-34

Note: the fact that you've chosen one of the possible forms of coding float values doesn't mean that Python will present it the same way.

Python may sometimes choose different notation than you.

For example, let's say you've decided to use the following float literal:

0.0000000000000000000001

When you run this literal through Python:

print(0.0000000000000000000001)

this is the result:

1e-22

Python always chooses the more economical form of the number's presentation, and you should take this into consideration when creating literals.

2.2.4 Strings

Strings are used when you need to process text (like names of all kinds, addresses, novels, etc.), not numbers.

You already know a bit about them, e.g. that strings need quotes the way floats need points.

This is a very typical string: "I am a string."

However, there is a catch. The catch is how to encode a quote inside a string which is already delimited by quotes.

Let's assume that we want to print a very simple message saying:

I like "Monty Python"

How do we do it without generating an error? There are two possible solutions.

The first is based on the concept we already know of the escape character, which you should remember is played by the backslash. The backslash can escape quotes too. A quote preceded by a backslash changes its meaning ‒ it's not a delimiter, but just a quote. This will work as intended:

1. print("I like "Monty Python"")

Note: there are two escaped quotes inside the string ‒ can you see them both?

The second solution may be a bit surprising. Python can use an apostrophe instead of a quote. Either of these characters may delimit strings, but you must be consistent.

If you open a string with a quote, you have to close it with a quote.

If you start a string with an apostrophe, you have to end it with an apostrophe.

This example will work too:

1. print('I like "Monty Python"')

Note: you don't need to do any escaping here.

Coding strings

Now, the next question is: how do you embed an apostrophe into a string placed between apostrophes?

You should already know the answer, or to be precise, two possible answers.

Try to print out a string containing the following message:

I'm Monty Python.

1. print('I'm Monty Python.')

Do you know how to do it? Click Check to see if you were right:

[Check (Sample Solutions)](Python_Essentials_1_split_007.xhtml#idTextAnchor352)

As you can see, the backslash is a very powerful tool ‒ it can escape not only quotes, but also apostrophes.

We've shown it already, but we want to emphasize this phenomenon once more: a string can be empty ‒ it may contain no characters at all.

An empty string still remains a string:

"  
""

2.2.5 Boolean values

To conclude with Python's literals, there are two additional ones.

They're not as obvious as any of the previous ones, as they're used to represent a very abstract value ‒ truthfulness.

Each time you ask Python if one number is greater than another, the question results in the creation of some specific data ‒ a Boolean value.

The name comes from George Boole (1815-1864), the author of the fundamental work, The Laws of Thought, which contains the definition of Boolean algebra ‒ a part of algebra which makes use of only two distinct values: True and False, denoted as 1 and 0.

A programmer writes a program, and the program asks questions. Python executes the program, and provides the answers. The program must be able to react according to the received answers.

Fortunately, computers know only two kinds of answers:

* Yes, this is true;
* No, this is false.

You'll never get a response like: I don't know or Probably yes, but I don't know for sure.

Python, then, is a binary reptile.

These two Boolean values have strict denotations in Python:

True  
False

You cannot change anything ‒ you have to take these symbols as they are, including case-sensitivity.

Challenge: What will be the output of the following snippet of code?

1. print(True &gt; False)
2. print(True &lt; False)

Run the code to check. Can you explain the result?

LAB 4 Python literals – strings

Write a one-line piece of code, using the print() function, as well as the newline and escape characters, to match the expected result outputted on three lines.

Expected output

"I'm"  
""learning""  
"""Python"""

[Hint](Python_Essentials_1_split_007.xhtml#idTextAnchor302)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor324)

2.2 SECTION SUMMARY

1. Literals are notations for representing some fixed values in code. Python has various types of literals – for example, a literal can be a number (numeric literals, e.g. 123), or a string (string literals, e.g. "I am a literal.").

2. The binary system is a system of numbers that employs 2 as the base. Therefore, a binary number is made up of 0s and 1s only, e.g. 1010 is 10 in decimal.

Octal and hexadecimal numeration systems, similarly, employ 8 and 16 as their bases respectively. The hexadecimal system uses the decimal numbers and six extra letters.

3. Integers (or simply ints) are one of the numerical types supported by Python. They are numbers written without a fractional component, e.g. 256, or -1 (negative integers).

4. Floating-point numbers (or simply floats) are another one of the numerical types supported by Python. They are numbers that contain (or are able to contain) a fractional component, e.g. 1.27.

5. To encode an apostrophe or a quote inside a string, you can either use the escape character, e.g. 'I'm happy.', or open and close the string using an opposite set of symbols to the ones you wish to encode, e.g. "I'm happy." to encode an apostrophe, and 'He said "Python", not "typhoon"' to encode a (double) quote.

6. Boolean values are the two constant objects True and False used to represent truth values (in numeric contexts 1 is True, while 0 is False.

EXTRA

There is one more, special literal that is used in Python: the None literal. This literal is a NoneType object, and it is used to represent the absence of a value. We'll tell you more about it soon.

2.2 SECTION QUIZ

Question 1: What types of literals are the following two examples?

"Hello ", "007"

Question 2: What types of literals are the following four examples?

"1.5", 2.0, 528, False

Question 3: What is the decimal value of the following binary number?

1011

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor353)

Section 2.3 – Operators: data manipulation tools

In this section, we will talk about Python operators.

2.3.1 Python as a calculator

Now, we're going to show you a completely new side of the print() function. You already know that the function is able to show you the values of the literals passed to it by arguments.

1. print(2+2)

Run the code. Can you guess the output?

You should see the number four. Feel free to experiment with other operators.

Without taking this too seriously, you've just discovered that Python can be used as a calculator. Not a very handy one, and definitely not a pocket one, but a calculator nonetheless.

Taking it more seriously, we are now entering the province of operators and expressions.

2.3.2 Basic operators

An operator is a symbol of the programming language, which is able to operate on the values.

For example, just as in arithmetic, the + (plus) sign is the operator which is able to add two numbers, giving the result of the addition.

Not all Python operators are as obvious as the plus sign, though, so let's go through some of the operators available in Python, and we'll explain which rules govern their use, and how to interpret the operations they perform.

We'll begin with the operators which are associated with the most widely recognizable arithmetic operations:

+

-

\*

/

//

%

\*\*

The order of their appearance is not accidental. We'll talk more about it once we've gone through them all.

Remember: Data and operators when connected together form expressions. The simplest expression is a literal itself.

Exponentiation

Look at the following example:

1. print(2 \*\* 3)
2. print(2 \*\* 3.)
3. print(2. \*\* 3)
4. print(2. \*\* 3.)

Note: we've surrounded the double asterisks with spaces in our examples. It's not compulsory, but it improves the readability of the code.

The examples show a very important feature of virtually all Python numerical operators.

Run the code and look carefully at the results it produces. Can you see any regularity here?

Remember: It's possible to formulate the following rules based on this result:

* when both \*\* arguments are integers, the result is an integer, too;
* when at least one \*\* argument is a float, the result is a float, too.

This is an important distinction to remember.

Multiplication

An \* (asterisk) sign is a multiplication operator.

Run the following code and check if our integer vs. float rule is still working.

1. print(2 \* 3)
2. print(2 \* 3.)
3. print(2. \* 3)
4. print(2. \* 3.)

Division

A / (slash) sign is a division operator.

The value in front of the slash is a dividend, the value behind the slash, a divisor.

Run the following code and analyze the results.

1. print(6 / 3)
2. print(6 / 3.)
3. print(6. / 3)
4. print(6. / 3.)

You should see that there is an exception to the rule.

The result produced by the division operator is always a float, regardless of whether or not the result seems to be a float at first glance: 1 / 2, or if it looks like a pure integer: 2 / 1.

Is this a problem? Yes, it is. It happens sometimes that you really need a division that provides an integer value, not a float.

Fortunately, Python can help you with that.

Integer division (floor division)

A // (double slash) sign is an integer division operator. It differs from the standard / operator in two details:

* its result lacks the fractional part ‒ it's absent (for integers), or is always equal to zero (for floats); this means that the results are always rounded;
* it conforms to the integer vs. float rule.

Run the following example and see the results:

1. print(6 // 3)
2. print(6 // 3.)
3. print(6. // 3)
4. print(6. // 3.)

As you can see, integer by integer division gives an integer result. All other cases produce floats.

Let's do some more advanced tests.

Look at the following snippet:

1. print(6 // 4)
2. print(6. // 4)

Imagine that we used / instead of // ‒ could you predict the results?

Yes, it would be 1.5 in both cases. That's clear.

But what results should we expect with // division?

Run the code and see for yourself.

What we get is two ones ‒ one integer and one float.

The result of integer division is always rounded to the nearest integer value that is less than the real (not rounded) result.

This is very important: rounding always goes to the lesser integer.

Look at the following code and try to predict the results once again:

1. print(-6 // 4)
2. print(6. // -4)

Note: some of the values are negative. This will obviously affect the result. But how?

The result is two negative twos. The real (not rounded) result is -1.5 in both cases. However, the results are the subjects of rounding. The rounding goes toward the lesser integer value, and the lesser integer value is -2, hence: -2 and -2.0.

NOTE

Integer division can also be called floor division. You will definitely come across this term in the future.

Remainder (modulo)

The next operator is quite a peculiar one, because it has no equivalent among traditional arithmetic operators.

Its graphical representation in Python is the % (percent) sign, which may look a bit confusing.

Try to think of it as a slash (division operator) accompanied by two funny little circles.

The result of the operator is a remainder left after the integer division.

In other words, it's the value left over after dividing one value by another to produce an integer quotient.

Note: the operator is sometimes called modulo in other programming languages.

Take a look at the snippet ‒ try to predict its result and then run it:

1. print(14 % 4)

As you can see, the result is two. This is why:

* 14 // 4 gives 3 → this is the integer quotient;
* 3 \* 4 gives 12 → as a result of quotient and divisor multiplication;
* 14 – 12 gives 2 → this is the remainder.

This example is somewhat more complicated:

1. print(12 % 4.5)

What is the result?

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor354)

How not to divide

As you probably know, division by zero doesn't work.

Do not try to:

* perform a division by zero;
* perform an integer division by zero;
* find a remainder of a division by zero.

Addition

The addition operator is the + (plus) sign, which is fully in line with mathematical standards.

Again, take a look at the snippet of the following program:

1. print(-4 + 4)
2. print(-4. + 8)

The result should be nothing surprising. Run the code to check it.

The subtraction operator, unary and binary operators

The subtraction operator is obviously the – (minus) sign, although you should note that this operator also has another meaning ‒ it can change the sign of a number.

This is a great opportunity to present a very important distinction between unary and binary operators.

In subtracting applications, the minus operator expects two arguments: the left (a minuend in arithmetical terms) and right (a subtrahend).

For this reason, the subtraction operator is considered to be one of the binary operators, just like the addition, multiplication and division operators.

But the minus operator may be used in a different (unary) way ‒ take a look at the last line of the snippet:

1. print(-4 – 4)
2. print(4. – 8)
3. print(-1.1)

By the way: there is also a unary + operator. You can use it like this:

1. print(+2)

The operator preserves the sign of its only argument – the right one.

Although such a construction is syntactically correct, using it doesn't make much sense, and it would be hard to find a good rationale for doing so.

Take a look at the previous snippet ‒ can you guess its output?

2.3.3 Operators and their priorities

So far, we've treated each operator as if it had no connection with the others. Obviously, such an ideal and simple situation is a rarity in real programming.

Also, you will very often find more than one operator in one expression, and then things are no longer so simple.

Consider the following expression:

2 + 3 \* 5

You probably remember from school that multiplications precede additions.

You surely remember that you should first multiply 3 by 5 and, keeping the 15 in your memory, then add it to 2, thus getting the result of 17.

The phenomenon that causes some operators to act before others is known as the hierarchy of priorities.

Python precisely defines the priorities of all operators, and assumes that operators of a higher priority perform their operations before the operators of a lower priority.

So, if you know that \* has a higher priority than +, the computation of the final result should be obvious.

Operators and their bindings

The binding of the operator determines the order of computations performed by some operators with equal priority, put side by side in one expression.

Most of Python's operators have left-sided binding, which means that the calculation of the expression is conducted from left to right.

1. print(9 % 6 % 2)

There are two possible ways of evaluating this expression:

* from left to right: first 9 % 6 gives 3, and then 3 % 2 gives 1;
* from right to left: first 6 % 2 gives 0, and then 9 % 0 causes a fatal error.

Run the example and see what you get.

1. print(9 % 6 % 2)

The result should be 1. This operator has left-sided binding. But there's one interesting exception.

Repeat the experiment, but now with exponentiation.

Use this snippet of code:

1. print(2 \*\* 2 \*\* 3)

The two possible results are:

* 2 \*\* 2 → 4; 4 \*\* 3 → 64
* 2 \*\* 3 → 8; 2 \*\* 8 → 256

Run the code. What do you see?

The result clearly shows that the exponentiation operator uses right-sided binding.

This has an interesting effect. If the exponentiation operator uses right-sided binding, can you guess the output of the following snippet?

1. print(-3 \*\* 2)
2. print(-2 \*\* 3)
3. print(-(3 \*\* 2))

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor355)

List of priorities

Since you're new to Python operators, we don't want to present the complete list of operator priorities right now.

Instead, we'll show you a truncated form, and we'll expand it consistently as we introduce new operators.

Look at the following table:

|  |  |  |
| --- | --- | --- |
| Priority | Operator |  |
| 1 | \*\* |  |
| 2 | +, – (note: unary operators located next to the right of the power operator bind more strongly) | unary |
| 3 | \*, /, //, % |  |
| 4 | +, - | binary |

Note: we've enumerated the operators in order from the highest (1) to the lowest (4) priorities.

Try to work through the following expression:

1. print(2 \* 3 % 5)

Both operators (\* and %) have the same priority, so the result can be guessed only when you know the binding direction. What do you think? What is the result?

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor355)

Operators and parentheses

Of course, you're always allowed to use parentheses, which can change the natural order of a calculation.

In accordance with the arithmetic rules, subexpressions in parentheses are always calculated first.

You can use as many parentheses as you need, and they're often used to improve the readability of an expression, even if they don't change the order of the operations.

An example of an expression with multiple parentheses is here:

1. print((5 \* ((25 % 13) + 100) / (2 \* 13)) // 2)

Try to compute the value that's printed to the console. What's the result of the print() function?

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor355)

2.3 SECTION SUMMARY

Key takeaways

1. An expression is a combination of values (or variables, operators, calls to functions ‒ you will learn about them soon) which evaluates to a certain value, e.g. 1 + 2.

2. Operators are special symbols or keywords which are able to operate on the values and perform (mathematical) operations, e.g. the \* operator multiplies two values: x \* y.

3. Arithmetic operators in Python: + (addition), – (subtraction), \* (multiplication), / (classic division ‒ always returns a float), % (modulus ‒ divides left operand by right operand and returns the remainder of the operation, e.g. 5 % 2 = 1), \*\* (exponentiation ‒ left operand raised to the power of right operand, e.g. 2 \*\* 3 = 2 \* 2 \* 2 = 8), // (floor/integer division ‒ returns a number resulting from division, but rounded down to the nearest whole number, e.g. 3 // 2.0 = 1.0)

4. A unary operator is an operator with only one operand, e.g. -1, or +3.

5. A binary operator is an operator with two operands, e.g. 4 + 5, or 12 % 5.

6. Some operators act before others – the hierarchy of priorities:

* the \*\* operator (exponentiation) has the highest priority;
* then the unary + and – (note: a unary operator to the right of the exponentiation operator binds more strongly, for example 4 \*\* -1 equals 0.25)
* then: \*, /, and %,
* and finally, the lowest priority: binary + and -.

7. Subexpressions in parentheses are always calculated first, e.g. 15 – 1 \* (5 \* (1 + 2)) = 0.

8. The exponentiation operator uses right-sided binding, e.g. 2 \*\* 2 \*\* 3 = 256.

2.3 SECTION QUIZ

Question 1: What is the expected output of the following snippet?

1. print((2 \*\* 4), (2 \* 4.), (2 \* 4))

Question 2: What is the expected output of the following snippet?

1. print((-2 / 4), (2 / 4), (2 // 4), (-2 // 4))

Question 3: What is the expected output of the following snippet?

1. print((2 % -4), (2 % 4), (2 \*\* 3 \*\* 2))

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor356)

Section 2.4 – Variables

This part of the course focuses on variables – we will learn what they are, how to use them, and what the rules are that govern them. Ready?

2.4.1 Variables – data-shaped boxes

It seems fairly obvious that Python should allow you to encode literals carrying number and text values.

You already know that you can do some arithmetic operations with these numbers: add, subtract, etc. You'll be doing that many times.

But it's quite a normal question to ask how to store the results of these operations, in order to use them in other operations, and so on.

How do you save the intermediate results, and use them again to produce subsequent ones?

Python will help you with that. It offers special "boxes" (or "containers" as we may call them) for that purpose, and these boxes are called variables ‒ the name itself suggests that the content of these containers can be varied in (almost) any way.

What does every Python variable have?

* a name;
* a value (the content of the container)

Let's start with the issues related to a variable's name.

Variables do not appear in a program automatically. As a developer, you must decide how many and which variables to use in your programs.

You must also name them.

2.4.2 Variable names

If you want to give a name to a variable, you must follow some strict rules:

* the name of the variable must be composed of upper-case or lower-case letters, digits, and the character \_ (underscore)
* the name of the variable must begin with a letter;
* the underscore character is a letter;
* upper- and lower-case letters are treated as different (a little differently than in the real world – Alice and ALICE are the same first names, but in Python they are two different variable names, and consequently, two different variables);
* the name of the variable must not be any of Python's reserved words (the keywords – we'll explain more about this soon).

Note that the same restrictions apply to function names.

Python does not impose restrictions on the length of variable names, but that doesn't mean that a long variable name is always better than a short one.

Here are some correct, but not always convenient variable names:

* MyVariable
* i
* l
* t34
* Exchange\_Rate
* counter
* days\_to\_christmas
* TheNameIsTooLongAndHardlyReadable
* \_

These variable names are also correct:

* Adiós\_Señora
* sûr\_la\_mer
* Einbahnstraße
* переменная

Python lets you use not only Latin letters but also characters specific to languages that use other alphabets.

And now for some incorrect names:

* 10t (does not begin with a letter)
* !important (does not begin with a letter)
* exchange rate (contains a space).

NOTE

The [PEP 8 — Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/) recommends the following naming convention for variables and functions in Python:

* variable names should be lowercase, with words separated by underscores to improve readability (e.g. var, my\_variable)
* function names follow the same convention as variable names (e.g. fun, my\_function)
* it's also possible to use mixed case (e.g. myVariable), but only in contexts where that's already the prevailing style, to retain backward compatibility with the adopted convention.

Keywords

Take a look at the list of words that play a very special role in every Python program.

['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']

They are called keywords or (more precisely) reserved keywords. They are reserved because you mustn't use them as names: neither for your variables, nor functions, nor any other named entities you want to create.

The meaning of the reserved word is predefined, and mustn't be changed in any way.

Fortunately, due to the fact that Python is case-sensitive, you can modify any of these words by changing the case of any letter, thus creating a new word, which is not reserved anymore.

For example ‒ you can't name your variable like this:

import

You mustn't have a variable named in such a way ‒ it is prohibited. But you can do this instead:

Import

These words might be a mystery to you now, but you'll soon learn the meaning of them.

2.4.3 How to create a variable

What can you put inside a variable?

Anything.

You can use a variable to store any value of any of the already presented kinds, and many more of the ones we haven't shown you yet.

The value of a variable is what you have put into it. It can vary as often as you need or want. It can be an integer one moment, and a float a moment later, eventually becoming a string.

Let's talk now about two important things ‒ how variables are created, and how to put values inside them (or rather ‒ how to give or pass values to them).

REMEMBER

A variable comes into existence as a result of assigning a value to it. Unlike in other languages, you don't need to declare it in any special way.

If you assign any value to a non-existent variable, the variable will be automatically created. You don't need to do anything else.

The creation (in other words, its syntax) is extremely simple: just use the name of the desired variable, then the equal sign (=) and the value you want to put into the variable.

Take a look at the following snippet:

1. var = 1
2. print(var)

It consists of two simple instructions:

* The first of them creates a variable named var, and assigns a literal with an integer value equal to 1.
* The second prints the value of the newly created variable to the console.

As you can see, print() has yet another side to it ‒ it can handle variables too. Do you know what the output of the snippet will be? Run the code to check.

2.4.4 How to use a variable

You're allowed to use as many variable declarations as you need to achieve your goal, like this:

1. var = 1
2. account\_balance = 1000.0
3. client\_name = 'John Doe'
4. print(var, account\_balance, client\_name)
5. print(var)

However, you're not allowed to use a variable which doesn't exist (in other words, a variable that was not assigned a value).

This example will cause an error:

1. var = 1
2. print(Var)

Do you know why? We've tried to use a variable named Var, which doesn't have any value (note: var and Var are different entities, and have nothing in common as far as Python's concerned).

REMEMBER

You can use the print() function and combine text and variables using the + operator to output strings and variables. For example:

1. var = "3.8.5"
2. print("Python version: " + var)

Can you guess the output of the snippet?

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor357)

2.4.5 How to assign a new value to an already existing variable

How do you assign a new value to a variable that already exists? In the same way. You just need to use the equal sign.

The equal sign is in fact an assignment operator. Although this may sound strange, the operator has a simple syntax and unambiguous interpretation.

It assigns the value of its right argument to the left, while the right argument may be an arbitrarily complex expression involving literals, operators and already defined variables.

Look at the code:

1. var = 1
2. print(var)
3. var = var + 1
4. print(var)

The code sends two lines to the console:

1  
2

The first line of the snippet creates a new variable named var and assigns 1 to it.

The statement reads: assign a value of 1 to a variable named var.

We can say it shorter: assign 1 to var.

Some prefer to read such a statement as: var becomes 1.

The third line assigns the same variable with the new value taken from the variable itself, summed with 1. Seeing a record like that, a mathematician would probably protest ‒ no value may be equal to itself plus one. This is a contradiction. But Python treats the sign = not as equal to, but as assign a value.

So how do you read such a record in the program?

Take the current value of the variable var, add 1 to it and store the result in the variable var.

In effect, the value of variable var has been incremented by one, which has nothing to do with comparing the variable with any value.

Do you know what the output of the following snippet will be?

1. var = 100
2. var = 200 + 300
3. print(var)

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor358)

2.4.6 Solving simple mathematical problems

Now you should be able to construct a short program solving simple mathematical problems such as the Pythagorean theorem:

The square of the hypotenuse is equal to the sum of the squares of the other two sides.

The following code evaluates the length of the hypotenuse (i.e. the longest side of a right-angled triangle, the one opposite of the right angle) using the Pythagorean theorem:

1. a = 3.0
2. b = 4.0
3. c = (a \*\* 2 + b \*\* 2) \*\* 0.5
4. print("c =", c)

Note: we need to make use of the \*\* operator to evaluate the square root as:

√(x) = x(½)

and

c = √(a2 + b2)

Can you guess the output of the code?

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor359)

LAB 5 Variables

Here is a short story:

Once upon a time in Appleland, John had three apples, Mary had five apples, and Adam had six apples. They were all very happy and lived for a long time. End of story.

Your task is to:

* create the variables: john, mary, and adam;
* assign values to the variables. The values must be equal to the numbers of fruit possessed by John, Mary, and Adam respectively;
* having stored the numbers in the variables, print the variables on one line, and separate each of them with a comma;
* now create a new variable named total\_apples equal to the addition of the three previous variables;
* print the value stored in total\_apples to the console;
* experiment with your code: create new variables, assign different values to them, and perform various arithmetic operations on them (e.g. +, -, \*, /, //, etc.). Try to print a string and an integer together on one line, e.g. "Total number of apples:" and total\_apples.

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor325)

2.4.7 Shortcut operators

It's time for the next set of operators that make a developer's life easier. Very often, we want to use one and the same variable both to the right and left sides of the = operator.

For example, if we need to calculate a series of successive values of powers of 2, we may use a piece like this:

1. x = x \* 2

You may use an expression like this if you can't fall asleep and you're trying to deal with it using some good, old-fashioned methods:

1. sheep = sheep + 1

Python offers you a shortened way of writing operations like these, which can be coded as follows:

1. x \*= 2
2. sheep += 1

Let's try to present a general description for these operations. If op is a two-argument operator (this is a very important condition) and the operator is used in the following context…:

variable = variable op expression

…then it can be simplified and shown as follows:

variable op= expression

Take a look at the following examples. Make sure you understand them all.

|  |  |
| --- | --- |
| Expression | Shortcut operator |
| i = i + 2 \* j | i += 2 \* j |
| var = var / 2 | var /= 2 |
| rem = rem % 10 | rem %= 10 |
| j = j – (i + var + rem) | j -= (i + var + rem) |
| x = x \*\* 2 | x \*\*= 2 |

LAB 6 Variables ‒ a simple converter

Miles and kilometers are units of length or distance.

Bearing in mind that 1 mile is equal to approximately 1.61 kilometers, complete the program so that it converts:

* miles to kilometers;
* kilometers to miles.

Do not change anything in the existing code. Write your code in the places indicated by ###. Test your program with the data we've provided in the source code.

Pay particular attention to what is going on inside the print() function. Analyze how we provide multiple arguments to the function, and how we output the expected data.

Note that some of the arguments inside the print() function are strings (e.g. "miles is", whereas some other are variables (e.g. miles).

TIP

There's one more interesting thing happening there. Can you see another function inside the print() function? It's the round() function. Its job is to round the outputted result to the number of decimal places specified in the parentheses, and return a float (inside the round() function you can find the variable name, a comma, and the number of decimal places we're aiming for). We're going to talk about functions very soon, so don't worry that everything may not be fully clear yet. We just want to spark your curiosity.

After completing the lab, open the Sandbox, and experiment some more. Try to write different converters, e.g. a USD to EUR converter, a temperature converter, etc. ‒ let your imagination fly! Try to output the results by combining strings and variables. Try to use and experiment with the round() function to round your results to one, two, or three decimal places. Check out what happens if you don't provide any number of digits. Remember to test your programs.

Experiment, draw conclusions, and learn. Be curious.

Expected output

7.38 miles is 11.88 kilometers  
12.25 kilometers is 7.61 miles

Code

1. kilometers = 12.25
2. miles = 7.38
3. miles\_to\_kilometers = ###
4. kilometers\_to\_miles = ###
5. print(miles, "miles is", round(miles\_to\_kilometers, 2), "kilometers")
6. print(kilometers, "kilometers is", round(kilometers\_to\_miles, 2), "miles")

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor326)

LAB 7 Operators and expressions

Take a look at the following code: it reads a float value, puts it into a variable named x, and prints the value of a variable named y. Your task is to complete the code in order to evaluate the following expression:

3x3 – 2x2 + 3x – 1

The result should be assigned to y.

Remember that classical algebraic notation likes to omit the multiplication operator ‒ you need to use it explicitly. Note how we change data type to make sure that x is of type float.

Keep your code clean and readable, and test it using the data we've provided, each time assigning it to the x variable (by hardcoding it). Don't be discouraged by any initial failures. Be persistent and inquisitive.

Sample input

x = 0  
x = 1  
x = -1

Sample output

y = -1.0  
y = 3.0  
y = -9.0

Code

1. x =  # Hardcode your test data here.
2. x = float(x)
3. # Write your code here.
4. print("y =", y)

[Sample Solution](Python_Essentials_1_split_007.xhtml#idTextAnchor327)

2.4 SECTION SUMMARY

1. A variable is a named location reserved to store values in the memory. A variable is created or initialized automatically when you assign a value to it for the first time. (Section 2.4.1)

2. Each variable must have a unique name ‒ an identifier. A legal identifier name must be a non-empty sequence of characters, must begin with the underscore(\_), or a letter, and it cannot be a Python keyword. The first character may be followed by underscores, letters, and digits. Identifiers in Python are case-sensitive.

3. Python is a dynamically-typed language, which means you don't need to declare variables in it. (Section 2.4.3) To assign values to variables, you can use a simple assignment operator in the form of the equal (=) sign, i.e. var = 1.

4. You can also use compound assignment operators (shortcut operators) to modify values assigned to variables, for example: var += 1, or var /= 5 \* 2.

5. You can assign new values to already existing variables using the assignment operator or one of the compound operators, for example:

1. var = 2
2. print(var)
3. var = 3
4. print(var)
5. var += 1
6. print(var)

6. You can combine text and variables using the + operator, and use the print() function to output strings and variables, for example:

1. var = "007"
2. print("Agent " + var)

2.4 SECTION QUIZ

Question 1: What is the output of the following code?

1. var = 2
2. var = 3
3. print(var)

* 3
* 2
* 5

Question 2: Which of the following variable names are illegal in Python?  (Select three answers)

* my\_var
* m
* 101
* averylongVariablename
* m101
* m 101
* Del
* del

Question 3: What is the output of the following snippet?

1. a = '1'
2. b = "1"
3. print(a + b)

* 1
* 11
* 2

Question 4: What is the output of the following snippet?

1. a = 6
2. b = 3
3. a /= 2 \* b
4. print(a)

* 1.0
* 1
* 9
* 6
* 6.0

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor360)

Section 2.5 – Comments

In this section, we want to share with you a few comments on comments. You will learn here why it is important to document your code, and why you should leave comments. You will also learn how to do it, and when comments are considered good practice. Let's go!

2.5.1 Comments – why, when, and how?

You may want to put in a few words addressed not to Python but to humans, usually to explain to other readers of the code how the tricks used in the code work, or the meanings of the variables, and eventually, in order to keep stored information on who the author is and when the program was written.

A remark inserted into the program, which is omitted at runtime, is called a comment.

How do you leave this kind of comment in the source code? It has to be done in a way that won't force Python to interpret it as part of the code.

Whenever Python encounters a comment in your program, the comment is completely transparent to it ‒ from Python's point of view, this is only one space (regardless of how long the real comment is).

In Python, a comment is a piece of text that begins with a # (hash) sign and extends to the end of the line.

If you want a comment that spans several lines, you have to put a hash in front of them all. Just like here:

1. # This program evaluates the hypotenuse c.
2. # a and b are the lengths of the legs.
3. a = 3.0
4. b = 4.0
5. c = (a \*\* 2 + b \*\* 2) \*\* 0.5  # We use \*\* instead of a square root.
6. print("c =", c)

Responsible developers describe each important piece of code, for example, by explaining the role of the variables. Although it must be stated that the best way of commenting variables is to name them in an unambiguous manner.

For example, if a particular variable is designed to store an area of some unique square, the name square\_area will obviously be better than aunt\_jane.

We say that the first name is self-commenting.

2.5.2 Marking fragments of code

Comments may be useful in another respect ‒ you can use them to mark a piece of code that currently isn't needed for whatever reason. Look at the following example, if you uncomment the highlighted line, this will affect the output of the code:

1. # This is a test program.
2. x = 1
3. y = 2
4. # y = y + x
5. print(x + y)

This is often done during the testing of a program, in order to isolate the place where an error might be hidden.

TIP

If you'd like to quickly comment or uncomment multiple lines of code, select the line(s) you wish to modify and use the following keyboard shortcut: CTRL + / (Windows) or CMD + / (Mac OS). It's a very useful trick, isn't it? Now experiment with the following code.

1. # uncomment\_me = 1
2. # uncomment\_me\_too = 3
3. # uncomment\_me\_also = 5
4. print(uncomment\_me, uncomment\_me\_too, uncomment\_me\_also, sep="\n")

LAB 8 Comments

The code contains comments. Try to improve it: add or remove comments where you find it appropriate (yes, sometimes removing a comment can make the code more readable), and change variable names where you think this will improve code comprehension.

NOTE

Comments are very important. They are used not only to make your programs easier to understand, but also to disable those pieces of code that are currently not needed (e.g. when you need to test some parts of your code only, and ignore others). Good programmers describe each important piece of code, and give self-commenting names to variables, as sometimes it is simply much better to leave information in the code.

It's good to use readable variable names, and sometimes it's better to divide your code into named pieces (e.g. functions). In some situations, it's a good idea to write the steps of computations in a clearer way.

One more thing: it may happen that a comment contains a wrong or incorrect piece of information ‒ you should never do that on purpose!

Code

1. #this program computes the number of seconds in a given number of hours
2. # this program was written two days ago
3. a = 2 # number of hours
4. seconds = 3600 # number of seconds in 1 hour
5. print("Hours: ", a) #printing the number of hours
6. # print("Seconds in Hours: ", a \* seconds) # printing the number of seconds in a given number of hours
7. #here we should also print "Goodbye", but a programmer didn't have time to write any code
8. #this is the end of the program that computes the number of seconds in 3 hours

2.5 SECTION SUMMARY

1. Comments can be used to leave additional information in code. They are omitted at runtime. The information left in the source code is addressed to human readers. In Python, a comment is a piece of text that begins with #. The comment extends to the end of the line.

2. If you want to place a comment that spans several lines, you need to place # in front of them all. Moreover, you can use a comment to mark a piece of code that is not needed at the moment (see the last line of the following snippet), for example:

1. # This program prints
2. # an introduction to the screen.
3. print("Hello!")  # Invoking the print() function
4. # print("I'm Python.")

3. Whenever possible and justified, you should give self-commenting names to variables, e.g. if you're using two variables to store the length and width of something, the variable names length and width may be a better choice than myvar1 and myvar2.

4. It's important to use comments to make programs easier to understand, and to use readable and meaningful variable names in code. However, it's equally important not to use variable names that are confusing, or leave comments that contain wrong or incorrect information!

5. Comments can be important when you are reading your own code after some time (trust us, developers do forget what their own code does), and when others are reading your code (they can help them understand what your programs do and how they do it more quickly).

2.5 SECTION QUIZ

Question 1: What is the output of the following snippet?

1. # print("String #1")
2. print("String #2")

Question 2: What will happen when you run the following code?

1. # This is
2. a multiline
3. comment. #
4. print("Hello!")

[Check](Python_Essentials_1_split_007.xhtml#idTextAnchor361)