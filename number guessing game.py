import random

num = random.randint(1, 10)

while True:
    guess = int(input("Guess (1-10): "))
    if guess == num:
        print("Correct!")
        break
    else:
        print("Try again")