xml version='1.0' encoding='utf-8'?





Appendices

Appendix A: LAB Hints

LAB 4

1. print(“I’m\nlearning Python”)

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor062)

LAB 9

1. a = float(input(“Enter first value: “))
2. b = float(input(“Enter second value: “))
3. # output the result of addition here
4. # output the result of subtraction here
5. # output the result of multiplication here
6. # output the result of division here
7. print(”\nThat’s all, folks!”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor114)

LAB 11

1. hour = int(input(“Starting time (hours): “))
2. mins = int(input(“Starting time (minutes): “))
3. dura = int(input(“Event duration (minutes): “))
4. # find the total of all minutes
5. # find the number of hours hidden in minutes and update the hour
6. # correct minutes to fall in the (0..59) range
7. # correct hours to fall in the (0..23) range
8. print(hour, “:”, mins, sep=”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor119)

LAB 16

1. secret\_number = 777
2. print(
3. ”””
4. +================================+
5. | Welcome to my game, muggle!    |
6. | Enter an integer number        |
7. | and guess what number I’ve     |
8. | picked for you.                |
9. | So, what is the secret number? |
10. +================================+
11. ”””)
12. # Prompt the user to enter an integer number.
13. # Write a while loop and the rest of your code.

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor149)

LAB 17

1. import time
2. # Write a for loop that counts to five.
3. # Body of the loop – print the loop iteration number and the word “Mississippi”.
4. time.sleep(1)
5. # Write a print function with the final message.

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor153)

LAB 18

1. while True:
2. # Write code in the body of the loop.
3. # Put a conditional statement.
4. # Exit the loop here.
5. # Print the message.

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor156)

LAB 19

1. user\_word = input(“Enter your word: “)
2. user\_word = user\_word.upper()
4. for letter in user\_word:
5. # if-elif-else block, nest continue statements
6. # …
7. # …
8. # …
9. else:
10. print(letter)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor159)

LAB 20

1. word\_without\_vowels = ””
3. user\_word = input(“Enter your word: “)
4. user\_word = user\_word.upper()
5. for letter in user\_word:
7. if letter == “A”:
8. continue
9. elif letter == “E”:
10. continue
11. elif letter == “I”:
12. continue
13. elif letter == “O”:
14. continue
15. elif letter == “U”:
16. continue
17. else:
18. # Write your code here.
20. # Print the word assigned to word\_without\_vowels.

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor160)

LAB 21

1. blocks = int(input(“Enter the number of blocks: “))
3. height = 0
4. in\_layer = 1
5. while in\_layer <= blocks:
6. # The body of the while loop.
8. print(“The height of the pyramid:”, height)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor164)

LAB 22

1. c0 = int(input(“Enter c0: “))
3. if c0 > 1:
4. steps = 0
5. # The while loop goes here.
6. if c0 %2 != 0:
7. # Write your code here.
8. else:
9. cnew = c0 // 2
10. #
11. # Write your code here.
12. #
13. print(“steps =”,steps)
14. else:
15. print(“Bad c0 value”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor167)

LAB 23

1. hat\_list = [1, 2, 3, 4, 5]
3. # Step 1
4. hat\_list[2] = int(input(“Enter an integer number: “))
6. # Step 2: write a line of code that removes the last element from the list.
8. # Step 3: write a line of code that prints the length of the existing list.
10. print(hat\_list)

[Back](Python_Essentials_1_split_003.xhtml#idTextAnchor187)

LAB 24

1. # step 1:
2. Beatles = []
3. #
5. # step 2:
7. Beatles.append(“John Lennon”)
8. #
9. #
10. #
12. # step 3:
13. for members in range(2):
14. #
15. #
17. # step 4:
18. del Beatles[-1]
19. #
20. #
22. # step 5:
23. #
24. #
25. #

[Back](Python_Essentials_1_split_003.xhtml#idTextAnchor193)

LAB 25

1. my\_list = [1, 2, 4, 4, 1, 4, 2, 6, 2, 9]
2. new\_list = []
3. # Browse all numbers from the source list.
4. # If the number doesn’t appear within the new list…
5. # …append it here.
6. # Make a copy of new\_list.
7. print(“The list with unique elements only:”)
8. print(my\_list)

[Back](Python_Essentials_1_split_004.xhtml#idTextAnchor212)

LAB 26

1. def is\_year\_leap(year):
2. if year % 4 != 0:
3. #
4. # elif statement
5. #
6. # elif statement
7. #
8. # else statement
10. test\_data = [1900, 2000, 2016, 1987]
11. test\_results = [False, True, True, False]
12. for i in range(len(test\_data)):
13. yr = test\_data[i]
14. print(yr,“-> “,end=””)
15. result = is\_year\_leap(yr)
16. if result == test\_results[i]:
17. print(“OK”)
18. else:
19. print(“Failed”)

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor244)

LAB 27

1. def is\_year\_leap(year):
2. if year % 4 != 0:
3. return False
4. elif year % 100 != 0:
5. return True
6. elif year % 400 != 0:
7. return False
8. else:
9. return True
11. def days\_in\_month(year, month):
12. # if statement
13. # …
14. days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
15. res = days[month – 1]
16. if month == 2 and is\_year\_leap(year):
17. res = 29
18. return res
20. test\_years = [1900, 2000, 2016, 1987]
21. test\_months = [ 2, 2, 1, 11]
22. test\_results = [28, 29, 31, 30]
23. for i in range(len(test\_years)):
24. yr = test\_years[i]
25. mo = test\_months[i]
26. print(yr,mo,“-> “,end=””)
27. result = days\_in\_month(yr, mo)
28. if result == test\_results[i]:
29. print(“OK”)
30. else:
31. print(“Failed”)

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor247)

LAB 28

1. def is\_year\_leap(year):
2. if year % 4 != 0:
3. return False
4. elif year % 100 != 0:
5. return True
6. elif year % 400 != 0:
7. return False
8. else:
9. return True
11. def days\_in\_month(year,month):
12. if year < 1582 or month < 1 or month > 12:
13. return None
14. days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
15. res = days[month – 1]
16. if month == 2 and is\_year\_leap(year):
17. res = 29
18. return res
20. def day\_of\_year(year, month, day):
21. days = 0
22. for m in range(1, month):
23. # …
24. # if statement
25. # …
26. days += md
27. md = days\_in\_month(year, month)
28. if day >= 1 and day <= md:
29. # …
30. else:
31. # …
33. print(day\_of\_year(2000, 12, 31))

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor249)

LAB 29

1. def is\_prime(num):
2. # the for loop
3. # the if statement
4. return False
5. return True
7. for i in range(1, 20):
8. if is\_prime(i + 1):
9. print(i + 1, end=” “)
10. print()

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor251)

LAB 30

1. # 1 American mile = 1609.344 meters
2. # 1 American gallon = 3.785411784 liters
4. def liters\_100km\_to\_miles\_gallon(liters):
5. gallons = liters / 3.785411784
6. miles = 100 \* 1000 / 1609.344
7. return miles / gallons
9. def miles\_gallon\_to\_liters\_100km(miles):
10. # …
11. # …
12. # …
14. print(liters\_100km\_to\_miles\_gallon(3.9))
15. print(liters\_100km\_to\_miles\_gallon(7.5))
16. print(liters\_100km\_to\_miles\_gallon(10.))
17. print(miles\_gallon\_to\_liters\_100km(60.3))
18. print(miles\_gallon\_to\_liters\_100km(31.4))
19. print(miles\_gallon\_to\_liters\_100km(23.5))

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor253)

Appendix B: LAB Sample Solutions

LAB 1

1. # Sample Solution
2. print(“Hello, Python!”)
3. # print(“Greg”)
4. # print(Greg)
5. # print”Greg”
6. # print(‘Greg’)
7. # print(“Greg”) print(“Python”)
8. # …</sampleSolution>

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor041)

LAB 2

1. print(“Programming”,“Essentials”,“in”, sep=“\*\*\*”, end=“…”)
2. print(“Python”)

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor048)

LAB 3

1. # Sample Solution
3. ###################
4. print(“original version:”)
5. ###################
6. print(”    \*”)
7. print(”   \* \*”)
8. print(”  \*   \*”)
9. print(” \*     \*”)
10. print(“\*\*\*   \*\*\*”)
11. print(”  \*   \*”)
12. print(”  \*   \*”)
13. print(”  \*\*\*\*\*”)
14. ###################
15. print(“with fewer ‘print()’ invocations:”)
16. ###################
17. print(”    \*\n   \* \*\n  \*   \*\n \*     \*\n\*\*\*   \*\*\*”)
18. print(”  \*   \*\n  \*   \*\n  \*\*\*\*\*”)
19. ###################
20. print(“higher:”)
21. ###################
22. print(”        \*”)
23. print(”       \* \*”)
24. print(”      \*   \*”)
25. print(”     \*     \*”)
26. print(”    \*       \*”)
27. print(”   \*         \*”)
28. print(”  \*           \*”)
29. print(” \*             \*”)
30. print(“\*\*\*\*\*\*     \*\*\*\*\*\*”)
31. print(”     \*     \*”)
32. print(”     \*     \*”)
33. print(”     \*     \*”)
34. print(”     \*     \*”)
35. print(”     \*     \*”)
36. print(”     \*     \*”)
37. print(”     \*\*\*\*\*\*\*”)
38. ###################
39. print(“doubled:”)
40. ###################
41. print(”        \*        ”\*2)
42. print(”       \* \*       ”\*2)
43. print(”      \*   \*      ”\*2)
44. print(”     \*     \*     ”\*2)
45. print(”    \*       \*    ”\*2)
46. print(”   \*         \*   ”\*2)
47. print(”  \*           \*  ”\*2)
48. print(” \*             \* ”\*2)
49. print(“\*\*\*\*\*\*     \*\*\*\*\*\*”\*2)
50. print(”     \*     \*     ”\*2)
51. print(”     \*     \*     ”\*2)
52. print(”     \*     \*     ”\*2)
53. print(”     \*     \*     ”\*2)
54. print(”     \*     \*     ”\*2)
55. print(”     \*     \*     ”\*2)
56. print(”     \*\*\*\*\*\*\*     ”\*2)

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor051)

LAB 4

1. print(”"I’m"\n""learning""\n"""Python"""”)

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor062)

LAB 5

1. john = 3
2. mary = 5
3. adam = 6
4. print(john, mary, adam, sep=’,’)
5. total\_apples = john + mary + adam
6. print(total\_apples)
7. # peter = 12.5
8. # suzy = 2
9. # print(peter / suzy)
10. # print(“Total number of apples:”, total\_apples)

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor087)

LAB 6

1. kilometers = 12.25
2. miles = 7.38
3. miles\_to\_kilometers = miles \* 1.61
4. kilometers\_to\_miles = kilometers / 1.61
5. print(miles, “miles is”, round(miles\_to\_kilometers, 2), “kilometers”)
6. print(kilometers, “kilometers is”, round(kilometers\_to\_miles, 2), “miles”)

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor091)

LAB 7

1. x = 0
2. x = float(x)
3. y = 3 \* x\*\*3 – 2 \* x\*\*2 + 3 \* x – 1
4. print(“y =”, y)
5. x = 1
6. x = float(x)
7. y = 3 \* x\*\*3 – 2 \* x\*\*2 + 3 \* x – 1
8. print(“y =”, y)
9. x = -1
10. x = float(x)
11. y = 3 \* x\*\*3 – 2 \* x\*\*2 + 3 \* x – 1
12. print(“y =”, y)

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor092)

LAB 9

1. a = float(input(“Enter first value: “))
2. b = float(input(“Enter second value: “))
3. print(“Addition:”, a + b)
4. print(“Subtraction:”, a – b)
5. print(“Multiplication:”, a \* b)
6. print(“Division:”, a / b)
7. print(”\nThat’s all, folks!”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor114)

LAB 10

1. x = float(input(“Enter value for x: “))
2. y = 1./(x + 1./(x + 1./(x + 1./x)))
3. print(“y =”, y)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor117)

LAB 11

1. hour = int(input(“Starting time (hours): “))
2. mins = int(input(“Starting time (minutes): “))
3. dura = int(input(“Event duration (minutes): “))
4. mins = mins + dura # find a total of all minutes
5. hour = hour + mins // 60 # find a number of hours hidden in minutes and update the hour
6. mins = mins % 60 # correct minutes to fall in the (0..59) range
7. hour = hour % 24 # correct hours to fall in the (0..23) range
8. print(hour, “:”, mins, sep=”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor119)

LAB 12

1. n = int(input(“Enter a number: “))
2. print(n >= 100)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor131)

LAB 13

1. name = input(“Enter flower name: “)
2. if name == “Spathiphyllum”:
3. print(“Yes – Spathiphyllum is the best plant ever!”)
4. elif name == “spathiphyllum”:
5. print(“No, I want a big Spathiphyllum!”)
6. else:
7. print(“Spathiphyllum! Not”, name + “!”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor137)

LAB 14

1. income = float(input(“Enter the annual income: “))
2. if income < 85528:
3. tax = income \* 0.18 – 556.02
4. else:
5. tax = (income – 85528) \* 0.32 + 14839.02
6. if tax < 0.0:
7. tax = 0.0
8. tax = round(tax, 0)
9. print(“The tax is:”, tax, “thalers”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor138)

LAB 15

1. year = int(input(“Enter a year: “))
3. if year < 1582:
4. print(“Not within the Gregorian calendar period”)
5. else:
6. if year % 4 != 0:
7. print(“Common year”)
8. elif year % 100 != 0:
9. print(“Leap year”)
10. elif year % 400 != 0:
11. print(“Common year”)
12. else:
13. print(“Leap year”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor141)

LAB 16

1. secret\_number = 777
3. print(
4. ”””
5. +================================+
6. | Welcome to my game, muggle!    |
7. | Enter an integer number        |
8. | and guess what number I’ve     |
9. | picked for you.                |
10. | So, what is the secret number? |
11. +================================+
12. ”””)
14. user\_number = int(input(“Enter the number: “))
16. while user\_number != secret\_number:
17. print(“Ha ha! You’re stuck in my loop!”)
18. user\_number = int(input(“Enter the number again: “))
19. print(secret\_number, “Well done, muggle! You are free now.”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor149)

LAB 17

1. import time
3. for second in range(1, 6):
4. print(second, “Mississippi”)
5. time.sleep(1)
7. print(“Ready or not, here I come!”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor153)

LAB 18

1. while True:
2. word = input(“You’re stuck in an infinite loop!\nEnter the secret word to leave the loop: “)
3. if word == “chupacabra”:
4. break
5. print(“You’ve successfully left the loop!”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor156)

LAB 19

1. user\_word = input(“Enter your word: “)
2. user\_word = user\_word.upper()
4. for letter in user\_word:
5. if letter == “A”:
6. continue
7. elif letter == “E”:
8. continue
9. elif letter == “I”:
10. continue
11. elif letter == “O”:
12. continue
13. elif letter == “U”:
14. continue
15. else:
16. print(letter)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor159)

LAB 20

1. word\_without\_vowels = ””
3. user\_word = input(“Enter your word: “)
4. user\_word = user\_word.upper()
6. for letter in user\_word:
7. if letter == “A”:
8. continue
9. elif letter == “E”:
10. continue
11. elif letter == “I”:
12. continue
13. elif letter == “O”:
14. continue
15. elif letter == “U”:
16. continue
17. else:
18. word\_without\_vowels += letter
20. print(word\_without\_vowels)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor160)

LAB 21

1. blocks = int(input(“Enter the number of blocks: “))
3. height = 0
4. in\_layer = 1
5. while in\_layer <= blocks:
6. height += 1
7. blocks -= in\_layer
8. in\_layer += 1
9. print(“The height of the pyramid:”, height)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor164)

LAB 22

1. c0 = int(input(“Enter c0: “))
3. if c0 > 1:
4. steps = 0
5. while c0 != 1:
6. if c0 %2 != 0:
7. cnew = 3 \* c0 + 1
8. else:
9. cnew = c0 // 2
10. print(c0)
11. c0 = cnew
12. steps += 1
13. print(“steps =”,steps)
14. else:
15. print(“Bad c0 value”)

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor167)

LAB 23

1. hat\_list = [1, 2, 3, 4, 5]
3. # Step 1
4. hat\_list[2] = int(input(“Enter an integer number: “))
6. # Step 2
7. del hat\_list[-1]
9. # Step 3
10. print(len(hat\_list))

[Back](Python_Essentials_1_split_003.xhtml#idTextAnchor187)

LAB 24

1. # step 1:
2. Beatles = []
3. print(“Step 1:”, Beatles)
5. # step 2:
7. Beatles.append(“John Lennon”)
8. Beatles.append(“Paul McCartney”)
9. Beatles.append(“George Harrison”)
10. print(“Step 2:”, Beatles)
12. # step 3:
13. for members in range(2):
14. Beatles.append(input(“New band member: “))
15. print(“Step 3:”, Beatles)
17. # step 4:
18. del Beatles[-1]
19. del Beatles[-1]
20. print(“Step 4:”, Beatles)
22. # step 5:
23. Beatles.insert(0, “RingoStarr”)
24. print(“Step 5:”, Beatles)
25. print(“The Fab:”,len(Beatles))

[Back](Python_Essentials_1_split_003.xhtml#idTextAnchor193)

LAB 25

1. my\_list = [1, 2, 4, 4, 1, 4, 2, 6, 2, 9]
2. new\_list = []
3. for number in my\_list:  # Browse all numbers from the source list.
4. if number not in new\_list:  # If the number doesn’t appear within the new list…
5. new\_list.append(number)  # …append it here.
6. my\_list = new\_list[:]  # Make a copy of new\_list.
7. print(“The list with unique elements only:”)
8. print(my\_list)

[Back](Python_Essentials_1_split_004.xhtml#idTextAnchor212)

LAB 26

1. def is\_year\_leap(year):
2. if year % 4 != 0:
3. return False
4. elif year % 100 != 0:
5. return True
6. elif year % 400 != 0:
7. return False
8. else:
9. return True
11. test\_data = [1900, 2000, 2016, 1987]
12. test\_results = [False, True, True, False]
13. for i in range(len(test\_data)):
14. yr = test\_data[i]
15. print(yr,“-> “,end=””)
16. result = is\_year\_leap(yr)
17. if result == test\_results[i]:
18. print(“OK”)
19. else:
20. print(“Failed”)

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor244)

LAB 27

1. def is\_year\_leap(year):
2. if year % 4 != 0:
3. return False
4. elif year % 100 != 0:
5. return True
6. elif year % 400 != 0:
7. return False
8. else:
9. return True
11. def days\_in\_month(year,month):
12. if year < 1582 or month < 1 or month > 12:
13. return None
14. days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
15. res = days[month – 1]
16. if month == 2 and is\_year\_leap(year):
17. res = 29
18. return res
20. test\_years = [1900, 2000, 2016, 1987]
21. test\_months = [ 2, 2, 1, 11]
22. test\_results = [28, 29, 31, 30]
23. for i in range(len(test\_years)):
24. yr = test\_years[i]
25. mo = test\_months[i]
26. print(yr,mo,“-> “,end=””)
27. result = days\_in\_month(yr, mo)
28. if result == test\_results[i]:
29. print(“OK”)
30. else:
31. print(“Failed”)

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor247)

LAB 28

1. def is\_year\_leap(year):
2. if year % 4 != 0:
3. return False
4. elif year % 100 != 0:
5. return True
6. elif year % 400 != 0:
7. return False
8. else:
9. return True
10. def days\_in\_month(year, month):
11. if year < 1582 or month < 1 or month > 12:
12. return None
13. days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
14. res = days[month – 1]
15. if month == 2 and is\_year\_leap(year):
16. res = 29
17. return res
19. def day\_of\_year(year, month, day):
20. days = 0
21. for m in range(1, month):
22. md = days\_in\_month(year, m)
23. if md == None:
24. return None
25. days += md
26. md = days\_in\_month(year, month)
27. if day >= 1 and day <= md:
28. return days + day
29. else:
30. return None
32. print(day\_of\_year(2000, 12, 31))

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor249)

LAB 29

1. def is\_prime(num):
2. for i in range(2, int(1 + num \*\* 0.5)):
3. if num % i == 0:
4. return False
5. return True
7. for i in range(1, 20):
8. if is\_prime(i + 1):
9. print(i + 1, end=” “)
10. print()

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor251)

LAB 30

1. # 1 American mile = 1609.344 meters
2. # 1 American gallon = 3.785411784 liters
4. def liters\_100km\_to\_miles\_gallon(liters):
5. gallons = liters / 3.785411784
6. miles = 100 \* 1000 / 1609.344
7. return miles / gallons
9. def miles\_gallon\_to\_liters\_100km(miles):
10. km100 = miles \* 1609.344 / 1000 / 100
11. liters = 3.785411784
12. return liters / km100
14. print(liters\_100km\_to\_miles\_gallon(3.9))
15. print(liters\_100km\_to\_miles\_gallon(7.5))
16. print(liters\_100km\_to\_miles\_gallon(10.))
17. print(miles\_gallon\_to\_liters\_100km(60.3))
18. print(miles\_gallon\_to\_liters\_100km(31.4))
19. print(miles\_gallon\_to\_liters\_100km(23.5))

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor253)

Appendix C: Answers

Section 2.1 Quiz

Question 1

My

name

is

Bond. James Bond.

Question 2

File “main.py”, line 1

print(sep=”&”, “fish”, “chips”)

^

SyntaxError: positional argument follows keyword argument

Question 3

Line 5 will raise SyntaxError, because the ‘ symbol in the Greg’s book. string requires an escape character.

[Back](Python_Essentials_1_split_000.xhtml#idTextAnchor002)

Section 2.2.4

Sample Solution 1

1. print(‘I'm Monty Python.’)

Sample Solution 2

1. print(“I’m Monty Python.”)

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor059)

Section 2.2 Quiz

Question 1

They’re both strings/string literals.

Question 2

The first is a string, the second is a numerical literal (a float), the third is a numerical literal (an integer), and the fourth is a boolean literal.

Question 3

It’s 11, because (2\*\*0) + (2\*\*1) + (2\*\*3) = 11

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor065)

Section 2.3.2

3.0 – not 3 but 3.0. The rule still works:

* 12 // 4.5 gives 2.0,
* 2.0 \* 4.5 gives 9.0,
* 12 – 9.0 gives 3.0.

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor069)

Section 2.3.3

Operators and their bindings

-9

-8

-9

List of priorities

1

Operators and parentheses

10.0

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor073)

Section 2.3 Quiz

Question 1

16 8.0 8

Question 2

-0.5 0.5 0 -1

Question 3

-2 2 512

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor075)

Section 2.4.4

Python version: 3.8.5

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor082)

Section 2.4.5

500 ‒ why? Well, first, the var variable is created and assigned a value of 100. Then, the same variable is assigned a new value: the result of adding 200 to 300, which is 500.

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor084)

Section 2.4.6

C = 5.0

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor086)

Section 2.4 Quiz

Question 1

3

Question 2

101

m 101

del

Question 3

11

Question 4

1.0

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor096)

Section 2.5 Quiz

Question 1

String #2

Question 2

SyntaxError: invalid syntax

[Back](Python_Essentials_1_split_001.xhtml#idTextAnchor104)

Section 2.6 Quiz

Question 1

55

Question 2

<class ‘str’>

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor122)

Section 3.1.3

Question 1

True – of course, 2 is equal to 2. Python will answer True (remember this pair of predefined literals, True and False – they’re Python keywords, too).

Question 2

This question is not as easy as the first one. Luckily, Python is able to convert the integer value into its real equivalent, and consequently, the answer is True.

Question 3

This should be easy. The answer will be (or rather, always is) False.

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor127)

Section 3.1 Quiz

Question 1

False

True

Question 2

False

True

Question 3

True

False

Question 4

True

True

else

Question 5

four

five

Question 6

one

two

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor144)

Section 3.2 Quiz

Question 1

for i in range(0, 11):

if i % 2 != 0:

print(i)

Question 2

x = 1 while x < 11:

if x % 2 != 0:

      print(x)

x += 1

Question 3

for ch in “john.smith@pythoninstitute.org”:

if ch == “@”:

break

print(ch, end=””)

Question 4

for digit in “0165031806510”:

if digit == “0”:

print(“x”, end=””)

continue

print(digit, end=””)

Question 5

4

3

2

0

Question 6

-1

0

1

2

3

Question 7

0

3

[Back](Python_Essentials_1_split_002.xhtml#idTextAnchor170)

Section 3.3 Quiz

Question 1

False

Question 2

0 5 -5 1 1 16

[Back](Python_Essentials_1_split_003.xhtml#idTextAnchor180)

Section 3.4 Quiz

Question 1

[6, 2, 3, 4, 5, 1]

Question 2

[1, 3, 6, 10, 15]

Question 3

NameError: name ‘lst’ is not defined

Question 4

[2, 3]

3

[Back](Python_Essentials_1_split_003.xhtml#idTextAnchor197)

Section 3.5 Quiz

Question 1

[‘A’, ‘D’, ‘F’, ‘Z’]

Question 2

[1, 2, 3]

Question 3

[‘ ‘, ‘C’, ‘B’, ‘A’]

[Back](Python_Essentials_1_split_004.xhtml#idTextAnchor204)

Section 3.6 Quiz

Question 1

[‘C’]

Question 2

[‘B’, ‘C’]

Question 3

[]

Question 4

[‘A’, ‘B’, ‘C’]

Question 5

1. my\_list = [1, 2, “in”, True, “ABC”]
3. print(1 in my\_list) # outputs True
4. print(“A” not in my\_list) # outputs True
5. print(3 not in my\_list) # outputs True
6. print(False in my\_list) # outputs False

[Back](Python_Essentials_1_split_004.xhtml#idTextAnchor215)

Section 4.1 Quiz

Question 1

b – it’s a built-in function.

Question 2

An exception is thrown (the NameError exception to be more precise).

Question 3

An exception will be thrown (the TypeError exception to be more precise) – the hi() function doesn’t take any arguments.

[Back](Python_Essentials_1_split_004.xhtml#idTextAnchor230)

Section 4.2 Quiz

Question 1

My name is Bond. James Bond.

Question 2

My name is Sean Connery. James Bond.

Question 3

My name is Bond. Susan.

Question 4

SyntaxError – a non-default argument (c) follows a default argument (b=2).

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor239)

Section 4.3 Quiz

Question 1

The function will return an implicit None value.

Question 2

True

False

None

Question 3

[0, 2, 4, 6, 8, 10]

Question 4

[1, 4, 9, 16, 25

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor256)

Section 4.4 Quiz

Question 1

The NameError exception will be thrown:

NameError: name ‘alt’ is not defined

Question 2

2

1

Question 3

2

3

Question 4

2

2

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor263)

Section 4.5 Quiz

Question 1

The factorial function has no termination condition (no base case) so Python will raise an exception (RecursionError: maximum recursion depth exceeded)

Question 2

56

[Back](Python_Essentials_1_split_005.xhtml#idTextAnchor272)

Section 4.6 Quiz

Question 1

The program will print 3 to the screen.

Question 2

The program will print 6 to the screen. The tup tuple elements have been “unpacked” in the a, b, and c variables.

Question 3

tup = 1, 2, 3, 2, 4, 5, 6, 2, 7, 2, 8, 9

duplicates = tup.count(2)

print(duplicates)    # outputs: 4

Question 4

d1 = {‘Adam Smith’: ‘A’, ‘Judy Paxton’: ‘B+’}

d2 = {‘Mary Louis’: ‘A’, ‘Patrick White’: ‘C’}

d3 = {}

for item in (d1, d2):

d3.update(item)

print(d3)

Question 5

my\_list = [“car”, “Ford”, “flower”, “Tulip”]

t = tuple(my\_list)

print(t)

Question 6

colors = ((“green”, “#008000”), (“blue”, “#0000FF”))

colors\_dictionary = dict(colors)

print(colors\_dictionary)

Question 7

The program will print {‘A’: 1, ‘B’: 2} to the screen.

Question 8

white : (255, 255, 255)

grey : (128, 128, 128)

red : (255, 0, 0)

green : (0, 128, 0)

[Back](Python_Essentials_1_split_006.xhtml#idTextAnchor281)

Section 4.7 Quiz

Question 1

The program will output: Very bad input….

Question 2

The program will raise the TypeError exception.

[Back](Python_Essentials_1_split_006.xhtml#idTextAnchor299)

Appendix D: PCEP Exam Syllabus

The exam consists of four sections:

|  |  |  |
| --- | --- | --- |
| Section 1 | 7 items | Max Raw Score: 180 (18%) |
| Section 2 | 8 items | Max Raw Score: 290 (29%) |
| Section 3 | 7 items | Max Raw Score: 250 (25%) |
| Section 4 | 8 items | Max Raw Score: 280 (28%) |

Section 1: Computer Programming and Python Fundamentals

PCEP-30-02 1.1 – Understand fundamental terms and definitions

* interpreting and the interpreter, compilation and the compiler
* lexis, syntax, and semantics

PCEP-30-02 1.2 – Understand Python’s logic and structure

* keywords
* instructions
* indentation
* comments

PCEP-30-02 1.3 – Introduce literals and variables into code and use different numeral systems

* Boolean, integers, floating-point numbers
* scientific notation
* strings
* binary, octal, decimal, and hexadecimal numeral systems
* variables
* naming conventions
* implementing PEP-8 recommendations

PCEP-30-02 1.4 – Choose operators and data types adequate to the problem

* numeric operators: \*\* \* / % // + –
* string operators: \* +
* assignment and shortcut operators
* unary and binary operators
* priorities and binding
* bitwise operators: ~ & ^ | << >>
* Boolean operators: not, and, or
* Boolean expressions
* relational operators: == != > >= < <=
* the accuracy of floating-point numbers
* type casting

PCEP-30-02 1.5 – Perform Input/Output console operations

* the print() and input() functions
* the sep= and end= keyword parameters
* the int() and float() functions

Section 2: Control Flow – Conditional Blocks and Loops

• PCEP-30-02 2.1 – Make decisions and branch the flow with the if instruction

* conditional statements: if, if-else, if-elif, if-elif-else
* multiple conditional statements
* nesting conditional statements

PCEP-30-02 2.2 – Perform different types of iterations

* the pass instruction
* building loops with while, for, range(), and in
* iterating through sequences
* expanding loops with while-else and for-else
* nesting loops and conditional statements
* controlling loop execution with break and continue

Section 3: Data Collections – Tuples, Dictionaries, Lists, Strings

PCEP-30-02 3.1 – Collect and process data using lists

* constructing vectors
* indexing and slicing
* the len() function
* list methods: append(), insert(), index(), etc.
* functions: len(), sorted()
* the del instruction
* iterating through lists with the for loop
* initializing loops
* the in and not in operators
* list comprehensions
* copying and cloning
* lists in lists: matrices and cubes

PCEP-30-02 3.2 – Collect and process data using tuples

* tuples: indexing, slicing, building, immutability
* tuples vs. lists: similarities and differences
* lists inside tuples and tuples inside lists

PCEP-30-02 3.3 Collect and process data using dictionaries

* dictionaries: building, indexing, adding and removing keys
* iterating through dictionaries and their keys and values
* checking the existence of keys
* methods: keys(), items(), and values()

PCEP-30-02 3.4 Operate with strings

* constructing strings
* indexing, slicing, immutability
* escaping using the \ character
* quotes and apostrophes inside strings
* multi-line strings
* basic string functions and methods

Section 4: Functions and Exceptions

PCEP-30-02 4.1 – Decompose the code using functions

* defining and invoking user-defined functions and generators
* the return keyword, returning results
* the None keyword
* recursion

PCEP-30-02 4.2 – Organize interaction between the function and its environment

* parameters vs. arguments
* positional, keyword, and mixed argument passing
* default parameter values
* name scopes, name hiding (shadowing), and the global keyword

PCEP-30-02 4.3 – Python Built-In Exceptions Hierarchy

* BaseException
* Exception
* SystemExit
* KeyboardInterrupt
* abstract exceptions
* ArithmeticError
* LookupError
* IndexError
* KeyError
* TypeError
* ValueError

PCEP-30-02 4.4 – Basics of Python Exception Handling

* try-except / the try-except Exception
* ordering the except branches
* propagating exceptions through function boundaries
* delegating responsibility for handling exceptions

Now that you have completed Python Essentials 1, book an exam and take the PCEP Certified Entry-Level Python Programmer Exam.

Go to [www.PythonInstitute.Org](http://www.pythoninstitute.org) to purchase an exam voucher.