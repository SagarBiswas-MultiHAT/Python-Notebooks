# Python Notebooks

## The Pythonic Odyssey

**PDF:** [click here](<The Pythonic Odyssey.pdf>)

**📘 Finally finished my Python notes and I am sharing it with you all for FREE!**

Hey everyone! 👋 So I have been studying Python for a while now and I compiled everything I learned into one big notebook; and honestly I think it turned out pretty solid, so here it is!

----------

> Here is everything that are covered (it is a lot 😅):

🔹  We start from the absolute basics; **what Python even is, why it is useful**, and how to use **modules, PIP, and comments** ***(Part 1)***. Then straight into **variables, data types, operators, and typecasting**; like how Python stores integers, floats, strings, booleans, and None values (Part 2).

🔹 After that comes **Strings**; slicing, indexing, and like 20+ string functions like .upper(), .split(), .replace(), .join() and more ***(Part 3)***. Then **Lists and Tuples**; how to store, sort, insert, remove, and loop through data, and why tuples are immutable ***(Part 4)***.

🔹 ***Part 5*** covers **Dictionaries and Sets**; key-value pairs, set operations like union, intersection, difference, and symmetric difference. ***Part 6*** is all about **if, elif, else** and how conditional logic works with relational and logical operators.

🔹 Then **Loops**; both while and for loops, the range() function, break, continue, pass, and even for-else ***(Part 7)***. ***Part 8*** covers **Functions and Recursion**; defining functions, arguments, default parameters, return values, and how recursion works (with a factorial example). There is also a **Snake, Water, Gun game project** built using these concepts! 🐍

🔹 ***Part 9*** is **File I/O**; reading, writing, and appending files using open(), different file modes (r, w, a), readline(), readlines(), and the with statement.

----------

Then we get into the big stuff 👇

🔹 ***Part 10***; **Object Oriented Programming (OOP)**: classes, objects, class vs instance attributes, the __init__() constructor, self, static methods, and how to model real-world problems in code.

🔹 ***Part 11***; **Inheritance**: single, multiple, and multilevel inheritance, the super() method, class methods (@classmethod), property decorators (@property), getters & setters, and **operator overloading** using dunder/magic methods like __add__, __str__, __len__ etc. There is also a **number guessing game project** here! 🎮

🔹 ***Part 12***; **Advanced Python 1**: the walrus operator (:=), type hints, match-case/switch statements, dictionary merge operators (|), and full **exception handling** with try, except, else, finally, and custom exceptions. Also explains if __name__ == '__main__', the global keyword, enumerate(), and **list comprehensions**.

🔹 ***Part 13***; **Advanced Python 2**: lambda functions, the map(), filter(), and reduce() functions, the format() method, and the join() method.

🔹 And finally ***Part 14***; **Virtual Environments**: what they are, how to create and activate them, and how to use pip freeze with requirements.txt to share your environment with others.

🔹 There is also a **Tricks section** at the end with cool shortcuts like variable swapping, string reversing with slicing, zip(), Counter, defaultdict, and more 🔥

This covers like everything from beginner to intermediate Python. Whether you are just starting out or want to revise before an interview or exam; I think this will help. Drop a comment if you have any questions, I'll try my best to answer! 🙌

---

## Python for CyberSecurity

**PDF:** [click here](<Python for CyberSecurity.pdf>)

Hey everyone! 👋 I have been learning Python for cybersecurity for a while now and I finally put together my full notes as a clean document. Sharing it here for anyone who is on the same journey. Hope it helps! 😄

> 📌 What is inside? Everything I covered:

🔹 **Why Python for Cybersecurity?** Python is easy to learn, versatile, cross-platform, has tons of libraries, and a huge community. It is great for automation, data analysis, AI integration, and saving time on repetitive hacking tasks. Tools like Zaproxy, OWA3F, and Acunetix are even built/modified using Python!

**🔹 Key Features of Python**
- Easy to use & learn 
- Versatile for many tasks 
- Extensive library support 
- Works on any OS (Cross-Platform) 
- Massive community for support

**🔹 Python Syntax (The Basics)**
- **Indentation** → Python uses 4 spaces instead of {} braces, so spacing actually matters! 
- **Comments** → # for single-line, ''' ''' or """ """ for multi-line 
- **Variables** → No need to declare types. Just write name = "Sagar" and Python figures it out 
- **Statements** & Line Breaks → One statement per line; use ; for multiple on one line 
- **Line Continuation** → Use \ or wrap in () to split long lines 
- **Functions** → Defined with def, followed by name and parentheses[:] (e.g., def greet():) 
- **Strings** → Single/double quotes for one-liners, triple quotes for multi-line — Whitespace → Tabs and spaces shouldnot be mixed! 
- **Importing Libraries** → Just write import math and you are good 
- **Keywords** → Words like if, else, for, while, def, True, False are reserved; can't use them as variable names

**🔹 Python Variables & Data Types**: Variables are just containers for data. No type declaration needed; Python handles it automatically!
- **int** → Whole numbers → example: age = 22 
- **float** → Decimal numbers → example: price = 3.99 
- **str** → Text/characters → example: name = "Sagar" 
- **bool** → True or False → example: is_active = False 
- **list** → Ordered, changeable collection → example: [10, 20, 30] 
- **tuple** → Ordered, unchangeable collection → example: (10, 20, 30) 
- **dict** → Key-value pairs → example: {"name": "Sagar", "age": 22} 
- **set** → Unique, unordered items → example: {1, 2, 3, 4}
Also covered: **Integers, Floats, Complex numbers, Boolean operators** (AND, OR, NOT), and how to work with **Lists** (append, insert, extend, remove, pop, clear), - **Dictionaries** (great for mapping attack types to severity!), and **Sets** (perfect for storing unique IPs!)

🔹 **Conditional Statements**: if, elif, else; lets your program make decisions based on conditions. For example, checking if a user's status is "active", "inactive", or "unknown."

🔹 **Loops** 
**For Loop** → iterate through a list (e.g., scanning multiple IP addresses one by one) 
**While Loop** → keeps running as long as a condition is true (e.g., repeated scanning attempts)

🔹 **File Handling in Python**: Python's open() function lets you read, write, and append files easily: 
- **r** → Read only
- **w** → Write (overwrites existing content)
- **a** → Append (adds to the end) 
- **r**+ → Read + Write together
Super useful for reading log files or saving scan results!

🔹 **User Input in Python**: input() makes your scripts interactive. You can take input from the user and convert it to the right type, like int(input(...)) for port numbers.

🔹 **Error Handling in Python**: Uses try, except, and finally blocks. So if a file doesn't exist or permissions are wrong, your script doesn't just crash; it gives a proper error message and handles it cleanly.

🔹 **Functions in Python**: Reusable blocks of code defined with def. Instead of repeating the same code 10 times, write it once as a function and call it wherever needed!

🔹 **PIP (Python's Package Manager)**: Think of it as the "Play Store" for Python libraries 😄 
- **pip install requests** → install a library 
- **pip list** → see all installed packages 
- **pip uninstall requests** → remove a library 
- **pip install -r requirements.txt** → install all project dependencies at once 
- **Use --break-system-packages flag if you get errors on Kali Linux**

🔹 **Top Python Libraries for Hackers**: These are the libraries every cybersecurity student should know:
- 🖥️ **OS** → Interact with the operating system (create folders, list files, manage processes) 
- ⚙️ **Subprocess** → Run terminal/shell commands directly from Python 
- 🌐 **Socket** → Network programming; build basic TCP servers and clients 
- 📦 **Scapy** → Craft and send custom network packets (great for pen testing) 
- 🔐 **Cryptography** → Encrypt and decrypt data using Fernet encryption 
- 🌍 **Requests** → Make HTTP requests; automate web interactions or scrape websites 
- 🔑 **Paramiko** → SSH into remote servers and run commands from Python 
- 🔍 **Python-nmap** → Automate Nmap port scanning directly from Python 
- 📡 **Pyshark** → Python wrapper for Wireshark; capture and analyze live network packets 
- 🛡️ **Impacket** → Work with network protocols like SMB/RDP; list shared resources remotely

🔹 **Task Automation Using Subprocess** 
subprocess.run() → run a single terminal command from Python 
capture_output=True → capture and use the command's output inside your script 
subprocess.Popen() → for real-time/continuous output (like a live ping)

🔹 **Security Tips for Using Subprocess** ⚠️ This part is super important and often overlooked: 
❌ **Never use shell=True with untrusted input** → it opens the door to shell injection attacks (imagine someone typing ; rm -rf / as input 😱) 
✅ **Always sanitize inputs** → remove special characters like ; and & before using user input in commands 
✅ **Use subprocess.run() over os.system()** → it's safer, doesn't invoke the shell by default, and gives better error handling and output control


**🔹 Projects Included 🚀**

**Project 1: MAC Address Changer** A Python script that automates changing your network interface's MAC address using macchanger. Includes root permission checking, interface bring-down/bring-up, error handling, and two versions (basic v1.0 and clean v1.1 with proper functions).

**Project 2: Network Communication Scripts (Netcat Automation)** Automates nc (Netcat) for creating server-client connections over TCP. Includes port validation, error handling, and even a tip on using ngrok to expose your local server to the internet! Two versions (v1.0 basic, v1.1 with full validation).

**Project 3: IP Scanner Using Nmap** A Python-powered Nmap scanner with 12 different scan types — SYN Scan, Aggressive Scan, Service Version Detection, Vulnerability Scan, Heartbleed Test, HTTP Security Headers, SQL Injection Test, SMB Vulnerability Scan, SSL/TLS Cipher Scan, NSE Script Discovery, OS Detection, and Custom Scan. Features a colored terminal banner using pyfiglet and termcolor, open port filtering, and input validation. Two versions (v1.0 simple, v1.6 full-featured).

**Project 4: Malicious Folder Creator** A script that creates folders in a loop (Malicious1, Malicious2...) to demonstrate how malicious automation works and why it is dangerous. Also includes terminal cleanup commands to remove all created folders safely.

**Project 5: Python Keylogger** Records every keystroke and emails the logs using Gmail's SMTP server when Esc is pressed. Features retry logic (3 attempts with 10-second delays), log file management (saves to keylog.txt and clears after sending), captures special keys like space, backspace, enter, and esc. Also includes auto-start setup for **both Linux (systemd service) and Windows (Startup Folder shortcut)**.

⚠️ For educational purposes only. Always get permission before using on any device.

Drop a issue if anything is confusing or if you want me to explain any part in more detail. Lets learn together! 💪

---



