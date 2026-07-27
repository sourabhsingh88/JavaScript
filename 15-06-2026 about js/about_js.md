# JavaScript Notes

**Date:** 15-07-2026

---

# What is JavaScript?

JavaScript (JS) is a **high-level scripting and programming language** used to make web pages **dynamic** and **interactive**.

With JavaScript, we can:
- Respond to user actions (clicks, keyboard input, mouse events)
- Validate forms
- Create animations
- Update page content without reloading
- Communicate with servers (APIs)
- Build frontend and backend applications (using Node.js)

---

# Features of JavaScript

## 1. Single-Threaded

JavaScript is a **single-threaded** language.

This means it executes **one task at a time** using a single execution thread.

Example:

```javascript
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

**Output**

```
Task 1
Task 2
Task 3
```

The next statement executes only after the previous one finishes.

---

## 2. Synchronous

By default, JavaScript executes code **synchronously**.

Each statement waits until the previous statement has completed.

Example:

```javascript
console.log("Start");
console.log("Processing...");
console.log("End");
```

Execution order:

```
Start
↓
Processing...
↓
End
```

> **Note:** JavaScript can also perform asynchronous operations using callbacks, Promises, and `async/await`.

---

## 3. Dynamically Typed

JavaScript is a **dynamically typed** language.

The datatype of a variable is determined at runtime and can change during execution.

Example:

```javascript
let value = 10;

value = "Hello";

value = true;
```

The same variable stores:
- Number
- String
- Boolean

No datatype declaration is required.

---

## 4. Loosely Typed (Loose Coupling)

JavaScript is **loosely typed**, meaning you do **not** need to specify the datatype of a variable.

Example:

```javascript
let age = 20;
let name = "Rahul";
```

Unlike Java:

```java
int age = 20;
String name = "Rahul";
```

### Semicolons

Semicolons (`;`) are **optional** in many cases because JavaScript automatically inserts them when possible (Automatic Semicolon Insertion - ASI).

Example:

```javascript
let x = 10
let y = 20

console.log(x + y)
```

Using semicolons is still considered good practice.

> **Correction:** Curly braces `{}` are **not optional**. They are required in many language constructs (functions, classes, blocks, loops, etc.), although they can sometimes be omitted for single-line `if` statements.

---

## 5. Interpreted Language

JavaScript is often called an **interpreted language** because it executes code without a separate compilation step by the developer.

Modern JavaScript engines (such as **V8**) actually use **Just-In-Time (JIT) compilation**, which combines interpretation and compilation for better performance.

Example:

```javascript
console.log("Hello");
console.log("World");
```

The code is processed and executed in sequence.

---

## 6. High-Level Language

JavaScript is a **high-level language**.

Its syntax is close to English, making it easier to read and write than low-level languages like Assembly.

Example:

```javascript
let name = "Rahul";

console.log(name);
```

---

# Object-Based JavaScript (Before ES6)

Before **ECMAScript 6 (ES6)**, JavaScript was mainly considered an **object-based language**.

Characteristics:

- Classes were not available.
- Objects could be created directly.
- Constructor functions and prototypes were used instead of classes.
- Inheritance was achieved using prototypes.

Example:

```javascript
let student = {
    name: "Rahul",
    age: 20
};

console.log(student.name);
```

---

# Object-Oriented JavaScript (ES6 and Later)

From **ES6 (2015)** onwards, JavaScript introduced the `class` keyword, making object-oriented programming easier.

Example:

```javascript
class Student {

    constructor(name) {
        this.name = name;
    }
}

let s1 = new Student("Rahul");
```

Features available in modern JavaScript:

- Classes
- Objects
- Inheritance
- Encapsulation
- Polymorphism (through prototypes and method overriding)

> **Note:** Classes are **not mandatory** in JavaScript. You can still create objects directly without using classes. The `class` syntax is an additional feature, not a requirement.

---

# Browser Rendering

A browser understands:

- HTML → Structure
- CSS → Styling

However, browsers **cannot execute JavaScript directly** without a JavaScript engine.

The JavaScript engine reads, parses, compiles (JIT), and executes JavaScript code.

```
HTML
   ↓
Browser Renderer
   ↓
Web Page

CSS
   ↓
Browser Renderer
   ↓
Styled Web Page

JavaScript
   ↓
JavaScript Engine
   ↓
Execution
```

---

# JavaScript Engines

Different browsers use different JavaScript engines.

| Browser | JavaScript Engine |
|----------|-------------------|
| Google Chrome | V8 |
| Microsoft Edge (Modern) | V8 |
| Mozilla Firefox | SpiderMonkey |
| Safari | JavaScriptCore (Nitro) |
| Opera | V8 |

> **Correction:** Older versions of Microsoft Edge used the **Chakra** engine. Modern Edge (Chromium-based) uses **V8**, the same engine as Google Chrome.

---

# How JavaScript Executes

```
JavaScript Code
        ↓
JavaScript Engine
        ↓
Lexical Analysis
        ↓
Parsing
        ↓
Abstract Syntax Tree (AST)
        ↓
JIT Compilation & Optimization
        ↓
Execution
```

Modern engines optimize frequently executed code for better performance.

---

# Quick Revision

- JavaScript is a scripting and programming language.
- It makes web pages dynamic and interactive.
- It is:
  - Single-threaded
  - Synchronous (by default)
  - Dynamically typed
  - Loosely typed
  - High-level
  - Interpreted/JIT-compiled
- Before ES6, JavaScript was mainly object-based.
- ES6 introduced classes and modern object-oriented features.
- Browsers use JavaScript engines to execute JavaScript code.
- Common engines:
  - Chrome → V8
  - Edge → V8 from 2020 and before chakra 
  - Firefox → SpiderMonkey
  - Safari → JavaScriptCore (Nitro)

---

# Interview Questions

### 1. Why is JavaScript called a single-threaded language?
Because it executes one task at a time using a single execution thread.

### 2. What is a dynamically typed language?
A language where variable types are determined at runtime and can change during execution.

### 3. What is the difference between object-based and object-oriented JavaScript?
Object-based JavaScript allows direct object creation without classes. ES6 added classes and enhanced object-oriented programming support.

### 4. Which JavaScript engine does Google Chrome use?
V8.

### 5. Which engine does Firefox use?
SpiderMonkey.

### 6. Does modern Microsoft Edge use Chakra?
No. Modern Edge uses the **V8** engine. Chakra was used only in the legacy version of Edge.

### 7. Is JavaScript interpreted or compiled?
Modern JavaScript engines use **Just-In-Time (JIT) compilation**, combining interpretation and compilation for efficient execution.