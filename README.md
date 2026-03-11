# Python Notebooks

<div align="right">

![Python CI](https://img.shields.io/github/actions/workflow/status/SagarBiswas-MultiHAT/Python-Notebooks/python-ci.yml?branch=main&label=python%20ci)
![Pages](https://img.shields.io/github/actions/workflow/status/SagarBiswas-MultiHAT/Python-Notebooks/pages.yml?branch=main&label=pages)
![Release](https://img.shields.io/github/v/release/SagarBiswas-MultiHAT/Python-Notebooks)
![Last Commit](https://img.shields.io/github/last-commit/SagarBiswas-MultiHAT/Python-Notebooks)
![License](https://img.shields.io/github/license/SagarBiswas-MultiHAT/Python-Notebooks)

</div>

This repository is a focused learning hub for two PDF notebooks:

1. **The Pythonic Odyssey**: a structured guide to Python fundamentals through intermediate concepts.
2. **Python for CyberSecurity**: a practical bridge from Python scripting into cybersecurity-oriented use cases.

Together, they form a clear progression. The first notebook helps a learner become comfortable with Python itself. The second shows how those Python skills can be used in security-focused labs, automation tasks, and tool-oriented workflows.

## Quick Access

- **GitHub Pages site:** https://sagarbiswas-multihat.github.io/Python-Notebooks/
- **The Pythonic Odyssey PDF:** [Open the notebook](<The Pythonic Odyssey.pdf>)
- **Python for CyberSecurity PDF:** [Open the notebook](<Python for CyberSecurity.pdf>)

## What This Repository Contains

This project is intentionally simple. It contains:

- Two published PDF notebooks.
- A GitHub Pages website for browsing the material in a polished format.
- CI validation to make sure the public-facing files and links stay healthy.
- Supporting documentation for safe use, contribution, and repository quality.

If someone lands on this repository for the first time, the goal is that they can understand what each notebook covers, who it is for, how to read them in order, and where to start.

## Why These Two Notebooks Belong Together

Many learners hit the same problem: they study Python syntax in one place, then cybersecurity scripting in another, but the connection between the two is never explained cleanly. This repository solves that by keeping both learning tracks together.

- **The Pythonic Odyssey** answers: "How do I become comfortable with Python as a language?"
- **Python for CyberSecurity** answers: "Once I know Python, how do I apply it in security-related workflows?"

That makes the repository useful for beginners, self-learners, and anyone who wants a single revision hub instead of scattered notes.

## Who This Repository Is For

This project will be most useful if you are one of the following:

- A beginner who wants one Python resource that starts from the basics and grows gradually.
- A student preparing for exams, interviews, or revision sessions.
- A self-learner who wants a clearer path from Python fundamentals into cybersecurity scripting.
- A security learner who already knows basic Python and wants project-oriented examples and tool awareness.

## Recommended Reading Order

If you are not sure where to begin, use this order:

1. Start with **The Pythonic Odyssey**.
2. Finish the sections on core syntax, collections, conditions, loops, functions, file handling, and object-oriented programming.
3. Move to **Python for CyberSecurity** once you can comfortably read and write basic Python scripts.
4. Treat the cybersecurity material as educational material for safe lab use, not as permission to target real systems.

## The Pythonic Odyssey

**Best for:** beginner to intermediate Python learners  
**Purpose:** build strong Python fundamentals in a structured, example-driven way  
**Notebook:** [The Pythonic Odyssey](<The Pythonic Odyssey.pdf>)

### What it teaches

The notebook begins at the absolute basics and steadily moves into more capable Python usage. It is written as a full learning journey rather than a disconnected set of tips.

### Main topics and subtopics

#### 1. Python Basics and Setup

- What Python is and why it is useful
- Modules and package usage
- Pip basics
- Comments and simple program structure

#### 2. Variables, Data Types, and Operators

- Variables and assignment
- Integers, floats, strings, booleans, and `None`
- Arithmetic, comparison, and logical operators
- Type casting fundamentals

#### 3. Strings

- Indexing and slicing
- String immutability
- Common string methods such as uppercase conversion, splitting, replacing, joining, and trimming

#### 4. Lists and Tuples

- Creating and reading ordered collections
- Adding, removing, sorting, and iterating through list data
- Why tuples are immutable and when that matters

#### 5. Dictionaries and Sets

- Key-value storage using dictionaries
- Set behavior and uniqueness
- Union, intersection, difference, and symmetric difference

#### 6. Conditional Logic

- `if`, `elif`, and `else`
- Relational and logical conditions
- Branching program behavior from user or program state

#### 7. Loops

- `while` loops
- `for` loops
- `range()`
- `break`, `continue`, `pass`, and `for-else`

#### 8. Functions and Recursion

- Defining functions with `def`
- Parameters and return values
- Default arguments
- Recursive thinking and a factorial-style example
- A Snake, Water, Gun project based on these ideas

#### 9. File Handling

- Reading files
- Writing and appending
- File modes such as `r`, `w`, and `a`
- `readline()`, `readlines()`, and the `with` statement

#### 10. Object-Oriented Programming

- Classes and objects
- Constructors with `__init__`
- `self`
- Class attributes versus instance attributes
- Static methods

#### 11. Inheritance and Class Patterns

- Single, multiple, and multilevel inheritance
- `super()`
- `@classmethod`
- Properties, getters, and setters
- Operator overloading with magic methods such as `__add__`, `__str__`, and `__len__`
- A number guessing project in the same learning arc

#### 12. Advanced Python I

- Walrus operator
- Type hints
- Match-case usage
- Dictionary merge operators
- Exception handling with `try`, `except`, `else`, and `finally`
- Custom exceptions
- `if __name__ == "__main__"`
- `global`, `enumerate()`, and list comprehensions

#### 13. Advanced Python II

- Lambda functions
- `map()`, `filter()`, and `reduce()`
- Formatting values
- Joining collections into strings

#### 14. Virtual Environments and Useful Tricks

- Why virtual environments matter
- Creating and activating them
- Using `pip freeze` and `requirements.txt`
- Short practical Python tricks for cleaner everyday coding

### What makes this notebook valuable

- It covers the core learning path in one place.
- It includes projects instead of stopping at theory.
- It is suitable both for first-time learning and later revision.

## Python for CyberSecurity

**Best for:** learners who already know basic Python and want security-oriented applications  
**Purpose:** show how Python supports automation, networking, scanning, and security tool workflows  
**Notebook:** [Python for CyberSecurity](<Python for CyberSecurity.pdf>)

### What it teaches

This notebook explains why Python is widely used in cybersecurity, then ties Python fundamentals to practical scripting and tool-based tasks. It is especially useful for learners who want context around how common libraries and automation habits map to real security work.

### Main topics and subtopics

#### 1. Why Python Is Useful in Cybersecurity

- Easy syntax and fast learning curve
- Cross-platform use
- Strong library ecosystem
- Large community and widespread tooling support
- Good fit for automation and repeated tasks

#### 2. Core Python Refresher for Security Scripts

- Indentation and syntax rules
- Comments and structure
- Variables and data types
- Statements and line continuation
- Functions and imports
- Strings, whitespace, and reserved keywords

#### 3. Data Types and Core Constructs

- `int`, `float`, `str`, `bool`
- Lists, tuples, dictionaries, and sets
- Conditional statements
- `for` and `while` loops
- Input handling
- File handling for logs and scan results
- Error handling for safer scripts

#### 4. Package Management

- Installing libraries with `pip`
- Listing and removing packages
- Installing dependencies from `requirements.txt`
- General package workflow awareness for lab environments

#### 5. Important Libraries for Security Learning

- `os` for system interaction
- `subprocess` for command execution
- `socket` for network programming
- `scapy` for packet work
- `cryptography` for encryption tasks
- `requests` for HTTP automation
- `paramiko` for SSH automation
- `python-nmap` for scan automation
- `pyshark` for packet inspection
- `impacket` for protocol-focused work

#### 6. Safer Automation Practices

- Why `subprocess.run()` is preferable to `os.system()` in many cases
- Why untrusted input should not be passed through `shell=True`
- Why input validation matters before constructing commands
- Why clean error handling improves tool reliability

#### 7. Project-Oriented Learning

The notebook includes several applied examples, including:

- MAC address changer automation
- Netcat-based network communication scripts
- An Nmap-powered IP scanner with multiple scan modes
- A folder creation demonstration used to explain malicious automation patterns
- A keylogger example framed as educational material and marked with an explicit warning

### Important interpretation note

Some project topics are security-sensitive. They should be read as educational material for understanding scripting, automation, and risk, not as instructions for unauthorized use. That distinction matters, and this repository now makes that boundary explicit in both the README and the security policy.

## How the Two Notebooks Complement Each Other

The easiest way to understand this repository is to view the notebooks as two halves of one learning path.

- **Notebook one** gives you the language.
- **Notebook two** gives you a practical application area.

The combination is useful because many security learners do not actually need abstract Python knowledge alone. They need to know which Python concepts become important once scripts start touching files, processes, libraries, networks, and command execution.

## GitHub Pages

This repository now includes a static website for GitHub Pages.

### What the website does

- Presents both notebooks clearly on a clean landing page.
- Explains the purpose of each notebook before a visitor opens the PDFs.
- Gives a recommended learning order.
- Highlights the major topics and subtopics in each notebook.
- Provides direct PDF access from a more polished public page.

### Expected site URL

If GitHub Pages is enabled for the repository, the site URL is:

**https://sagarbiswas-multihat.github.io/Python-Notebooks/**

## Automation and Quality Checks

This project now includes GitHub Actions workflows that do more than print a placeholder message.

### Python CI

The validation workflow checks the repository structure by running automated tests that confirm:

- required files are present
- the README still covers both notebooks and key onboarding sections
- the website does not contain broken local links to assets or PDFs

### GitHub Pages Deployment

The Pages workflow publishes the repository as a static website from the main branch.

## Repository Structure

```text
.
├── .github/
│   └── workflows/
│       ├── pages.yml
│       └── python-ci.yml
├── assets/
│   ├── app.js
│   └── styles.css
├── tests/
│   └── test_repository.py
├── CONTRIBUTING.md
├── index.html
├── LICENSE
├── Python for CyberSecurity.pdf
├── README.md
├── SECURITY.md
└── The Pythonic Odyssey.pdf
```

## How to Use This Repository

1. Read this README to understand the full scope of both notebooks.
2. Open the GitHub Pages site if you want a cleaner public overview.
3. Open the PDF that matches your current learning stage.
4. Use the first notebook for Python foundations.
5. Use the second notebook for security-oriented applications once your basics are strong.

## Top Reasons This Repository Is Useful

- It is easy to understand what the project is about.
- It keeps the learning path focused instead of mixing in unrelated content.
- It helps a newcomer decide where to start.
- It combines theory, examples, and project-oriented learning.
- It now has public presentation, CI validation, and safer repository documentation.

## Projects

Beyond these two notebooks, the same author keeps a catalog of related AI and automation experiments. These are not bundled into this repository, but they illustrate the learning spirit behind the notes.

- **AI & Automation**: [Web_Vulnerability_Scanner-AI](https://github.com/SagarBiswas-MultiHAT/Web_Vulnerability_Scanner-AI), [Speech2Speech-AIAssistant](https://github.com/SagarBiswas-MultiHAT/Speech2Speech-AIAssistant), [PythonicHackathon-CLI](https://github.com/SagarBiswas-MultiHAT/PythonicHackathon-CLI), [Ai-Resume-Analyzer](https://github.com/SagarBiswas-MultiHAT/Ai-Resume-Analyzer), [Ai-Phishy-Playground](https://github.com/SagarBiswas-MultiHAT/Ai-Phishy-Playground), [Chat-Automation-Bot_Ai-Assistant](https://github.com/SagarBiswas-MultiHAT/Chat-Automation-Bot_Ai-Assistant), [Cyber-Command_AI-Assistant.exe](https://github.com/SagarBiswas-MultiHAT/Cyber-Command_AI-Assistant.exe).
- **Tools & Automation**: [MacChanger-V1-MAX](https://github.com/SagarBiswas-MultiHAT/MacChanger-V1-MAX), [Phoneint-OSINT-Toolkit](https://github.com/SagarBiswas-MultiHAT/Phoneint-OSINT-Toolkit), [WebSource-Harvester](https://github.com/SagarBiswas-MultiHAT/WebSource-Harvester), [HashAttackDemos](https://github.com/SagarBiswas-MultiHAT/HashAttackDemos), [A_Pythonic-Keylogger](https://github.com/SagarBiswas-MultiHAT/A_Pythonic-Keylogger), [BruteforceLab2](https://github.com/SagarBiswas-MultiHAT/BruteforceLab2), [EmailBomber](https://github.com/SagarBiswas-MultiHAT/EmailBomber), [NmapScanningTool-V1-MAX](https://github.com/SagarBiswas-MultiHAT/NmapScanningTool-V1-MAX), [WiFi-Dictionary-Attack](https://github.com/SagarBiswas-MultiHAT/WiFi-Dictionary-Attack), [SeleniumFirefoxGoogleSearchAutomation](https://github.com/SagarBiswas-MultiHAT/SeleniumFirefoxGoogleSearchAutomation), [TextBombing-Toolkit](https://github.com/SagarBiswas-MultiHAT/TextBombing-Toolkit).
- **Infrastructure & Development**: [TCP-Playground](https://github.com/SagarBiswas-MultiHAT/TCP-Playground), [Saved-WiFi-Restore](https://github.com/SagarBiswas-MultiHAT/Saved-WiFi-Restore), [domain2ip](https://github.com/SagarBiswas-MultiHAT/domain2ip), [SharpLink-URL-Allies](https://github.com/SagarBiswas-MultiHAT/SharpLink-URL-Allies), [Photo-PDF-Bidirectional-Converter](https://github.com/SagarBiswas-MultiHAT/Photo-PDF-Bidirectional-Converter), [Library-Management-System](https://github.com/SagarBiswas-MultiHAT/Library-Management-System), [PyTextEditor](https://github.com/SagarBiswas-MultiHAT/PyTextEditor), [SafeTodoManager](https://github.com/SagarBiswas-MultiHAT/SafeTodoManager), [Student-Management-MVC-Learning-Project](https://github.com/SagarBiswas-MultiHAT/Student-Management-MVC-Learning-Project), [TicTacToe-Game](https://github.com/SagarBiswas-MultiHAT/TicTacToe-Game), [SecureBankingSystem](https://github.com/SagarBiswas-MultiHAT/SecureBankingSystem), [PyCalculator](https://github.com/SagarBiswas-MultiHAT/PyCalculator), [Contact-Management-System](https://github.com/SagarBiswas-MultiHAT/Contact-Management-System), [SnakeWaterGun-Game](https://github.com/SagarBiswas-MultiHAT/SnakeWaterGun-Game), [PyAlarmClock](https://github.com/SagarBiswas-MultiHAT/PyAlarmClock), [Port_Scanner-Python](https://github.com/SagarBiswas-MultiHAT/Port_Scanner-Python), [virusNewFolder](https://github.com/SagarBiswas-MultiHAT/virusNewFolder).

Each link lives on GitHub under the same username and shows how Python concepts scale into automation, security tooling, networking scripts, and small product ideas.

## Responsible Use

The cybersecurity notebook includes topics that can become harmful if misused. Use the material only in authorized labs, personal practice environments, classrooms, or systems where you have explicit permission.

## License

This repository is licensed under the [MIT License](LICENSE).