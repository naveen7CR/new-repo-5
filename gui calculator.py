import tkinter as tk

def click(value):
    entry.insert(tk.END, value)

def clear():
    entry.delete(0, tk.END)

def calculate():
    try:
        result = eval(entry.get())
        entry.delete(0, tk.END)
        entry.insert(tk.END, result)
    except:
        entry.delete(0, tk.END)
        entry.insert(tk.END, "Error")

root = tk.Tk()
root.title("Calculator")

entry = tk.Entry(root, width=20, font=("Arial", 18))
entry.grid(row=0, column=0, columnspan=4)

buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','C','=','+'
]

row, col = 1, 0

for b in buttons:
    action = lambda x=b: click(x) if x not in ['=', 'C'] else calculate() if x == '=' else clear()
    tk.Button(root, text=b, width=5, height=2, command=action).grid(row=row, column=col)
    
    col += 1
    if col > 3:
        col = 0
        row += 1

root.mainloop()