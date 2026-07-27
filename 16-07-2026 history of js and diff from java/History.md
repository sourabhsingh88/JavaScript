# JavaScript - Class Notes

**Date:** 16-07-2026

---

# Introduction to JavaScript

JavaScript is a **high-level, interpreted (JIT-compiled in modern engines), dynamically typed scripting and programming language** primarily used to make web pages **dynamic** and **interactive**.

It allows developers to:
- Respond to user actions (clicks, keyboard input, etc.)
- Validate forms
- Update page content without reloading
- Create animations
- Communicate with servers using APIs
- Build both frontend and backend applications (using Node.js)

---

# History of JavaScript

In the mid-1990s, browsers could only display **static web pages** using HTML. There was a need for a language that could make web pages interactive.

During the browser competition between **Netscape Communications** and **Microsoft**, Netscape decided to develop a scripting language for the browser.

### Timeline

- **1995**
  - JavaScript was created by **Brendan Eich** at **Netscape Communications**.
  - He developed the first version in just **10 days**.

- **Original Name:** **Mocha**
  - Submitted for standardization but not accepted.

- **Second Name:** **LiveScript**
  - Also rejected.

- **Final Name:** **JavaScript**
  - Accepted and released to the market.
  - Later standardized by **ECMA International** as **ECMAScript (ES)**.

> **Note:** Historically, JavaScript was created in **1995**. ECMAScript standardization began in **1997**. Your trainer may have referred to 1997 as the year it became standardized.

---

# Why was it named JavaScript?

Java was very popular during that period.

Netscape renamed **LiveScript** to **JavaScript** as a marketing strategy to attract developers.

> Although their names are similar, **Java and JavaScript are completely different programming languages.**

---

# Ways to Write JavaScript Code

There are **two ways** to write JavaScript in a web application.

## 1. Internal JavaScript

The JavaScript code is written directly inside the HTML file using the `<script>` tag.

Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal JavaScript</title>
</head>
<body>

<h1>Hello World</h1>

<script>
    console.log("Hello JavaScript");
</script>

</body>
</html>
```

### Advantages
- Easy for small programs
- No additional file required

### Disadvantages
- Difficult to manage in large projects
- Mixing HTML and JavaScript reduces readability

---

## 2. External JavaScript

The JavaScript code is written in a separate **`.js`** file and linked to the HTML using the `src` attribute.

**HTML**

```html
<script src="app.js"></script>
```

**app.js**

```javascript
console.log("Hello JavaScript");
```

### Advantages
- Better code organization
- Easy to maintain
- Code can be reused across multiple pages
- Preferred for real-world projects

---

# Ways to Execute JavaScript

There are two common ways to execute JavaScript.

## 1. Using the Browser

Open the browser's **Developer Tools** (`F12`) and use the **Console** tab to write and execute JavaScript code.

Example:

```javascript
console.log("Hello World");
```

---

## 2. Using Node.js

Node.js allows JavaScript to run **outside the browser**.

Suppose the file name is **app.js**.

```bash
node app.js
```

or

```bash
node app
```

(If the file has a `.js` extension, Node can usually infer it.)

---

# Difference Between Java and JavaScript

| JavaScript | Java |
|------------|------|
| Scripting + Programming language | Programming language |
| Single-threaded | Multi-threaded |
| Dynamically typed | Statically typed |
| Loosely typed | Strongly typed |
| Runs in browsers and Node.js | Runs on the JVM |
| Used for Frontend and Backend | Commonly used for Backend, Desktop, Android, Enterprise applications |
| Executed by a JavaScript engine (V8, SpiderMonkey, etc.) | Compiled to bytecode and executed by the JVM |
| File extension: `.js` | File extension: `.java` |

---

# Java Example

```java
int age = 20;
String name = "Rahul";
```

The datatype must be declared before the variable.

---

# JavaScript Example

```javascript
let age = 20;
let name = "Rahul";
```

The datatype is automatically determined at runtime.

---

# Quick Revision

- JavaScript was created by **Brendan Eich**.
- It was developed at **Netscape Communications**.
- The first version was completed in **10 days**.
- Initial names:
  - Mocha
  - LiveScript
  - JavaScript
- JavaScript was standardized as **ECMAScript (ES)**.
- JavaScript makes web pages **dynamic** and **interactive**.
- JavaScript can be written in two ways:
  1. Internal (`<script>`)
  2. External (`app.js`)
- JavaScript can be executed:
  - In the browser (Developer Tools → Console)
  - Using Node.js (`node app.js`)
- JavaScript is **single-threaded**, **dynamically typed**, and used for **frontend and backend**.
- Java is **multi-threaded**, **statically typed**, and runs on the **JVM**.

---

# Important Interview Questions

### 1. Who invented JavaScript?
**Answer:** Brendan Eich.

### 2. Which company developed JavaScript?
**Answer:** Netscape Communications.

### 3. Why was JavaScript created?
**Answer:** To make web pages dynamic and interactive.

### 4. How many days did Brendan Eich take to create JavaScript?
**Answer:** 10 days.

### 5. What were the previous names of JavaScript?
**Answer:** Mocha and LiveScript.

### 6. What is ECMAScript?
**Answer:** The official standard/specification for JavaScript.

### 7. What are the two ways to include JavaScript in HTML?
**Answer:** Internal and External JavaScript.

### 8. How can JavaScript be executed?
**Answer:** Using the browser's Developer Tools or Node.js.

### 9. Is JavaScript the same as Java?
**Answer:** No. They are different programming languages with different purposes and execution environments.

### 10. Can JavaScript be used for backend development?
**Answer:** Yes, using **Node.js**.