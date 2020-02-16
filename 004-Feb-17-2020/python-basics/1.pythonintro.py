# Printing is done like this
print("Hello World!")

# you don't need to specify types in python
x = 42

print("What's the meaning of life?")
while True: # Boolean True and False is present in python
    ans = input() # to get user input
    if int(ans) == x: # typecasting ans to int for comparison as ans is orginally a string
        print("Correct Answer!")
        break
    else:
        print("Tough luck kid :(")
        print("Try again!")

