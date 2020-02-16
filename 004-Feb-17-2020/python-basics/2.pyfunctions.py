# Python Functions

def factorial(x): # recursive method
    '''
    This function calculates the factorial
    of a number, recursively.
    '''

    if x == 0 or x == 1:
        return 1

    return x*factorial(x-1)

def factorialnr(x): # non recursive method
    if x == 0 or x == 1:
        return 1
    fact = 1
    for i in range(1, x+1):
        fact = fact * i 
    return fact

def main():
    num = input("Enter the number:")
    fact = factorialnr(int(num))
    #print("Factorial of %d is %d", num, fact)
    print(f"Factorial of {num} is {fact}")

# https://stackoverflow.com/questions/419163/what-does-if-name-main-do
if __name__ == "__main__":
    main()

