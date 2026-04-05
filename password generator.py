import random
import string

def generate_password(length=8):
    chars = string.ascii_letters + string.digits + "!@#$%"
    password = ''.join(random.choice(chars) for _ in range(length))
    return password

print("Generated Password:", generate_password(10))