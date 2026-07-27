# 🚀 JavaScript Fundamentals — Complete Notes

> 📌 A complete beginner-to-advanced reference covering JS basics, history, variables, scope, hoisting, data types, conditionals, loops, functions, closures, execution context, and strings — with interview-style tricky questions and edge cases.

---

## 📑 Table of Contents

1. [🧩 What is JavaScript?](#1--what-is-javascript)
2. [🕰️ History of JavaScript](#2-️-history-of-javascript)
3. [⚙️ Characteristics / Features of JavaScript](#3-️-characteristics--features-of-javascript)
4. [☕ Java vs JavaScript](#4--java-vs-javascript)
5. [✍️ Ways to Write & Execute JavaScript](#5-️-ways-to-write--execute-javascript)
6. [🔤 Tokens](#6--tokens)
7. [📦 Variables: var, let, const](#7--variables-var-let-const)
8. [🌐 Scopes](#8--scopes)
9. [🪜 Hoisting & TDZ](#9--hoisting--tdz)
10. [🔢 Data Types](#10--data-types)
11. [➗ Operators & Comparisons](#11--operators--comparisons)
12. [🔀 Conditional Statements](#12--conditional-statements)
13. [🔁 Looping Statements](#13--looping-statements)
14. [🧰 Functions](#14--functions)
15. [⚡ IIFE (Immediately Invoked Function Expression)](#15--iife-immediately-invoked-function-expression)
16. [🎯 Higher Order Functions (HOF)](#16--higher-order-functions-hof)
17. [📞 Callback Functions](#17--callback-functions)
18. [🪆 Nested Functions & Closures](#18--nested-functions--closures)
19. [🧠 Execution Context & Call Stack](#19--execution-context--call-stack)
20. [🔡 Strings & String Methods](#20--strings--string-methods)
21. [🎤 Tricky Interview Questions](#21--tricky-interview-questions)
22. [⚠️ Edge Cases & Points to Remember](#22-️-edge-cases--points-to-remember)
23. [✅ Quick Revision Cheatsheet](#23--quick-revision-cheatsheet)

---

## 1. 🧩 What is JavaScript?

JavaScript is a **scripting / high-level programming language** used to make websites **interactive and dynamic**.

- 🌐 It can be used in **Frontend development** (browser) as well as **Backend development** (via Node.js).
- Without JavaScript, a webpage is just static text and images — JS is what makes buttons respond, forms validate, and pages update without reloading.

> 💡 **Extra Insight:** JavaScript is one of the only languages that runs natively inside every modern web browser — no installation needed by the end user. That's a huge reason for its popularity.

---

## 2. 🕰️ History of JavaScript

In **1995**, websites were very simple — they only showed text and images. There was no interactivity: no popups, no form validation, no animations. These were called **static web pages**.

**Netscape Communications** (the company behind the Netscape Navigator browser) wanted websites to behave dynamically — buttons that react, forms that validate, pages that respond to users.

- 👨‍💻 Netscape hired a young engineer named **Brendan Eich**.
- ⏱️ He created JavaScript in just **10 days**.
- Why only 10 days? Netscape was in a browser race against Microsoft and urgently needed a scripting language.

**The language's name changed over time:**
```
Mocha → LiveScript → JavaScript
```
Java was extremely popular in 1995, so the name "JavaScript" was chosen mainly for **marketing purposes** — not because JavaScript is technically related to Java.

**Standardization:**
- 📜 In **1997**, JavaScript was standardized by **ECMA**. The official name became **ECMAScript (ECMA-262)**.
- 🎉 In **2015**, **ES6** was released — one of the biggest updates in JavaScript history, making JS far more powerful and modern (introduced `let`, `const`, arrow functions, classes, promises, etc.).

> 📝 **Note:** The current ECMAScript version (as of these notes) is **ES2025**. A new ES version is released every year.

---

## 3. ⚙️ Characteristics / Features of JavaScript

### 1️⃣ Single Threaded
JavaScript is a single-threaded language — it executes **one operation at a time** on a single thread. A program uses only one call stack to execute instructions.
> Example: Online banking website OTP validation — one step waits for the previous to finish.

### 2️⃣ Dynamically Typed
The type of a variable is determined **based on the value stored, at runtime** — you don't declare a type upfront.
```js
var a = 10;
let b = "abc";
const c = true;
```

### 3️⃣ Interpreted
JavaScript code is processed **line by line**, rather than compiled all at once beforehand.
> Example: Like a translator reading a book aloud sentence by sentence, rather than translating the whole book first.

### 4️⃣ Synchronous
Tasks execute in **sequential order** — each task waits for the previous one to finish before starting.
> Example: A toll gate or coin box — one vehicle/coin is processed at a time.

> 💡 **Extra Insight:** JavaScript itself is synchronous & single-threaded, but the **browser environment** (Web APIs, Event Loop, Callback Queue) allows it to *appear* asynchronous — that's how things like `setTimeout`, `fetch`, and Promises work without freezing the page.

### 5️⃣ Loosely Typed / Weakly Typed
JavaScript doesn't attach variables to a specific data type — it can change type as needed during operations.
```js
console.log("122" + 2); // "1222"  → string
console.log("122" - 2); // 120    → number
```
> **Type Coercion** is the process by which JavaScript automatically converts one data type into another while performing an operation.

### 6️⃣ Object-Based & 7️⃣ Object-Oriented

| Object-Based | Object-Oriented |
|---|---|
| No mandatory classes | Class-based, blueprints mandatory |
| Objects can be created directly | Objects are created from classes |
| Supports objects, but **not** all OOP principles | Supports objects and all major OOP principles: Encapsulation, Abstraction, Inheritance, Polymorphism |
| Does **not** support inheritance (traditionally) | Supports inheritance |

> 📝 **Note:** JavaScript became object-oriented from the **ES6+** version onward, thanks to `class` syntax and prototype-based inheritance.

---

## 4. ☕ Java vs JavaScript

A very common interview mix-up — despite the similar name, Java and JavaScript are **unrelated** languages.

| Java | JavaScript |
|---|---|
| Programming language | Programming **and** Scripting language |
| Strictly typed language | Weakly / Loosely typed |
| Statically typed | Dynamically typed |
| Runs on JVM | Runs inside a browser / Node.js |
| Compiled & interpreted language | Interpreted language |
| Multi-threaded | Single-threaded |

---

## 5. ✍️ Ways to Write & Execute JavaScript

### Ways to Write JS Code

**1) Internal** — using a `<script>` tag inside the HTML file:
```html
<script>
  console.log("We Love Javascript");
</script>
```

**2) External** — linking a separate `.js` file:
```html
<script src="./fileName.js"></script>
```

### Ways to Execute a JavaScript File
1. 🌐 Using an HTML file (open in browser, view via browser console).
2. 🟢 Using **Node.js** — run in terminal: `node filename`

### Why Is JavaScript Written at the End of the `<body>` Tag?
Because the browser reads HTML **top to bottom, line by line**. If JS loads *before* the HTML content:
- It may try to access elements that don't exist yet.
- It may try to manipulate the DOM before it's created.
- This can cause errors or blank pages.

Placing `<script>` at the bottom of `<body>` ensures the HTML is fully loaded first.

### Why Not Put JS in `<head>`?
You *can*, but only if you add `defer` or `async`:
```html
<script src="app.js" defer></script>
<!-- or -->
<script src="app.js" async></script>
```
Without `defer` or `async`, a script placed in `<head>` **blocks/delays** the rendering of the entire page.

> 💡 **Extra Insight:** `defer` scripts run **in order**, after HTML parsing is complete. `async` scripts run **as soon as they're downloaded**, which can be *before* parsing finishes — so `async` is best for independent scripts (like analytics), and `defer` is best when your script depends on the DOM or other scripts.

---

## 6. 🔤 Tokens

**Tokens** are the smallest meaningful units of a JavaScript program. The JavaScript engine recognizes them during the **lexical analysis (tokenization)** phase.

> **Lexical analysis (tokenization) phase:** The phase where the JS engine reads source code character by character and converts it into tokens.

### Types of Tokens
- 🔑 Keywords
- 🏷️ Identifiers
- ➕ Operators
- 🔢 Literals
- 🔡 Separators
- 💬 Comments
- 🧰 Functions

### Keywords
Reserved words with a predefined meaning, used to declare variables, functions, or classes.
> Examples: `var`, `let`, `const`, `function`, `class`, etc.

- Keywords **cannot** be used as variable names.
- Keywords are **case-sensitive**.
- Their behavior is fixed by JavaScript.

### Identifiers
The name given to a variable, function, or class to identify it uniquely in a program.

**Rules for Identifiers:**
- Cannot start with a number.
- Cannot contain spaces.
- Cannot use special symbols except `$` and `_`.
- Cannot be a JavaScript keyword.

---

## 7. 📦 Variables: var, let, const

### `var`
- A variable declaration keyword used before ES6.
- Declares **function-scoped** or **globally-scoped** variables.
- Using `var` you can: declare, initialise, declare & initialise, redeclare, reinitialise, and redeclare & initialise a variable.

```js
var a;       // declaration
a = 20;      // initialisation

var b = 30;  // declare & initialise together
console.log(b);

var a = 200; // redeclare & reinitialise — totally allowed
console.log(a);
```

### `let`
- An ES6 keyword used to declare **block-scoped** variables.
- Using `let` you can: declare, initialise, declare & initialise, and reinitialise.
- ❌ **Redeclaring** the same variable with `let` in the same scope is **not allowed**.

```js
let a;      // declaration
a = 20;     // initialisation

let b = 30; // declare & initialise
console.log(b);

a = 500;    // reinitialise — allowed
console.log(a);

// let a;   // ❌ Error: 'a' has already been declared
```

### `const`
- Declares **block-scoped constants** whose value **cannot be reassigned**.
- Using `const` you can **only** declare & initialise **together, at the same time** — you cannot declare first and initialise later.

```js
const b = 30;   // must declare + initialise together
console.log(b);

// const a;     // ❌ Error: Missing initializer in const declaration
// b = 500;     // ❌ Error: Assignment to constant variable
```

### var vs let vs const — Quick Table

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function / Global | Block | Block |
| Redeclare | ✅ Allowed | ❌ Not Allowed | ❌ Not Allowed |
| Reinitialise | ✅ Allowed | ✅ Allowed | ❌ Not Allowed |
| Must initialise at declaration? | No | No | ✅ Yes (mandatory) |
| Hoisted? | ✅ Yes (initialised as `undefined`) | ✅ Yes (in TDZ) | ✅ Yes (in TDZ) |

> 💡 **Extra Insight:** `const` doesn't mean "immutable value" — it means the **binding** (the variable name itself) can't be reassigned. Objects and arrays declared with `const` can still have their **contents** changed!
```js
const arr = [1, 2, 3];
arr.push(4);       // ✅ Allowed — mutating contents, not reassigning
console.log(arr);  // [1, 2, 3, 4]

// arr = [5, 6];   // ❌ Error — reassigning the variable itself
```

---

## 8. 🌐 Scopes

### Global Scope
Variables accessible from **anywhere** in the program. Variables declared with `var` (outside any function) belong to global scope.
```js
var a = 10; // global scope
```

### Script Scope
Variables declared with `let` and `const` at the **top level** of a JS file (or directly inside a `<script>` tag, not inside any block/function).
```js
let x = 10;
const y = 20;
```

### Function Scope
Variables declared inside a function are accessible **only inside that function**.
```js
function test() {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
}
test();          // 10
console.log(a);  // ❌ ReferenceError
```

### Block Scope
Variables declared with `let` and `const` inside `{ }` are accessible **only inside that block**.
```js
if (true) {
  let x = 10;
  const y = 20;
  console.log(x); // 10
  console.log(y); // 20
}

console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError
```

> ⚠️ **Important:** `var` ignores block scope entirely — a `var` declared inside `{ }` "leaks" out to the enclosing function/global scope.
```js
{
  var a = 20;
}
console.log(a); // 20 — accessible outside the block!
```

---

## 9. 🪜 Hoisting & TDZ

### Hoisting
**Hoisting** is a JavaScript mechanism where variable and function **declarations** are moved to the top of their scope during compilation.
- Only **declarations** are hoisted, **not initializations**.
- Hoisting occurs for all three keywords: `var`, `let`, and `const`.

```js
console.log(a); // undefined (var is hoisted & initialised as undefined)
console.log(b); // ❌ ReferenceError (TDZ)
console.log(c); // ❌ ReferenceError (TDZ)

var a = 10;
let b = 20;
const c = 30;
```

### TDZ (Temporal Dead Zone)
The **Temporal Dead Zone** is the time between a variable's declaration and its initialization, during which accessing the variable causes a `ReferenceError`.
- TDZ applies **only** to `let` and `const`.

### Why does TDZ occur only in `let`/`const`, not `var`?
- `var` declarations are hoisted to the top of their scope **and immediately initialised with the value `undefined`**.
- `let` and `const` are also hoisted, but they are **not** initialised — they exist in memory in an inaccessible state (the TDZ) until the actual line of initialisation is reached.

---

## 10. 🔢 Data Types

### Checking Types with `typeof`
```js
console.log(typeof 10);      // "number"
console.log(typeof 10n);     // "bigint"
console.log(typeof "js");    // "string"
console.log(typeof true);    // "boolean"
console.log(typeof typeof 10); // "string" (typeof always returns a string)
```

### `null` vs `undefined`

| | Meaning |
|---|---|
| `undefined` | A variable has been declared but **not assigned** a value yet. |
| `null` | An **intentional absence** of value, explicitly assigned by the programmer. |

```js
console.log(null == undefined);   // true  (loose equality — same "emptiness")
console.log(null === undefined);  // false (different types)

console.log(0 == undefined);      // false

console.log(10 + null);       // 10   (null is treated as 0)
console.log(10 - null);       // 10
console.log(10 + undefined);  // NaN  (undefined cannot convert to a number)
```

### `NaN` (Not a Number)
```js
console.log(typeof NaN);  // "number"  (yes, NaN is technically of type number!)
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false     (NaN is never equal to itself)
```

### `==` vs `===`

| Operator | Name | Behavior |
|---|---|---|
| `==` | Loose equality | Compares values **after** type conversion |
| `===` | Strict equality | Compares both **value and type**, no conversion |

```js
console.log(5 == 5);    // true
console.log(5 == "5");  // true   (string "5" converted to number 5)
console.log(5 === "5"); // false  (different types)
```

---

## 11. ➗ Operators & Comparisons

### Exponentiation
```js
console.log(2 ** 3); // 8   (2 to the power of 3)
```

### Ternary Operator
Shorthand for a simple `if-else`.
```js
console.log(10 > 5 ? "true" : "false"); // "true"
```
**Syntax:** `condition ? valueIfTrue : valueIfFalse`

---

## 12. 🔀 Conditional Statements

Conditional statements execute different code blocks based on a condition. These statements evaluate to a **boolean** (`true`/`false`) and are also called **decision-making statements**.

### 1) `if` Statement
Executes code only when the condition is `true`. Used for single condition checking.
```js
let age = 19;
if (age >= 18) {
  console.log("eligible to cast vote");
}
```

### 2) `if-else` Statement
Provides two possible outputs — one block runs if true, the other if false.
```js
let age = 21;
if (age >= 18) {
  console.log("eligible to cast vote");
} else {
  console.log("not eligible to cast vote");
}
```

### 3) `else if` Ladder
Used when multiple conditions need to be checked. Only one condition executes (checked top to bottom).
```js
let marks = 42;
if (marks >= 90) {
  console.log("Toppers be like: Teacher's favorite");
} else if (marks >= 75) {
  console.log("Parents are happy, Netflix unlocked!");
} else if (marks >= 60) {
  console.log("Pass is pass… respect +1");
} else if (marks >= 35) {
  console.log("Just passed… God is great!");
} else {
  console.log("Fail… see you in supplementary exam!");
}
```

### 4) Nested `if`
An `if` inside another `if` — used for **dependent** conditions.
```js
let balance = 5000;
let amount = 3000;

if (balance > 0) {
  if (amount <= balance) {
    console.log("Withdraw Successful");
  } else {
    console.log("Insufficient Balance");
  }
}
```

### 5) `switch` Statement
Used when comparing one value against multiple cases — better readability than a long `else if` chain.
```js
let day = 6;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Working Day");
}
```
> ⚠️ Don't forget `break` — without it, execution **falls through** to the next case(s).

---

## 13. 🔁 Looping Statements

Looping statements execute the same block of code repeatedly **until a condition becomes false**. Instead of writing the same code again and again, we use loops — this reduces code length.

### `for` Loop
Used when the **number of iterations is known in advance**. Initialization, condition, and increment/decrement are all specified together.

**Syntax:**
```js
for (initialization; condition; increment/decrement) {
  // code to execute
}
```

**Example:**
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### `while` Loop
Executes code **as long as a condition is true**. The condition is checked **before** execution — number of iterations is not known in advance. Initialization is done separately, before the loop.

**Syntax:**
```js
while (condition) {
  // code to execute
}
```

> ⚠️ **Note:** If you forget to update the loop variable, it causes an **infinite loop**.

**Example:**
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### `do...while` Loop
Executes the code **at least once**, even if the condition is false (condition checked **after** execution).

**Syntax:**
```js
do {
  // code to execute
} while (condition);
```

**Example:**
```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### Practice Examples

**Print even numbers from 1–50:**
```js
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

**Print the multiplication table of 2:**
```js
for (let i = 1; i <= 10; i++) {
  console.log("2 x " + i + " = " + (2 * i));
}
```

---

## 14. 🧰 Functions

A **function** is a block of reusable code used to perform a specific operation. Instead of writing the same code again and again, we write it once and reuse it. The code block executes only when the function is **called**, and it can be called multiple times to re-execute the same logic.

### Basic Function Syntax
```js
function functionName() {
  // code
}
```

**Example:**
```js
function greet() {              // Function Declaration
  console.log("Hello JavaScript"); // Function body
}
greet(); // Function invocation
```

### Parameters vs Arguments

| Term | Meaning |
|---|---|
| **Parameters** | Variables used in the function *definition* — act as placeholders |
| **Arguments** | The actual values passed during function *invocation* |

```js
function add(a, b) {   // a, b = parameters
  console.log(a + b);
}
add(10, 20);            // 10, 20 = arguments
```

### Default Parameters
If an argument is missing, it defaults to `undefined` — unless you set a **default parameter value**.
```js
function sum(x, y = 10) {
  return x + y;
}
console.log(sum(5)); // 15  (y defaults to 10)
```

### `return` Statement
- Sends a value back to the caller.
- If no value is returned, the function returns `undefined`.
- **Stops** function execution — code written after `return` will **not** execute.

```js
function sum(a, b) {
  return a + b;
}
let result = sum(5, 10);
console.log(result); // 15
```

---

### Types of Functions

#### 1) Normal / Named Function
Declared using the `function` keyword and an identifier (name). Invoked using the same identifier followed by `()`.
- The `arguments` object can be used inside it.
- 🌟 **Function hoisting is allowed only for normal/named functions.**

```js
function demo() {
  console.log("I am demo function");
}
demo();
```

```js
function sum(a, b) {
  console.log(arguments); // Arguments object: [10, 20]
  return a + b;
}
console.log(sum(10, 20)); // 30
```

#### 2) Anonymous Function
A function declared **without an identifier** (no name). It must be stored in a variable to be executed/invoked.

**Syntax:**
```js
var variableName = function (params) {
  // code to execute
};
variableName(args);
```

**Example:**
```js
var add = function (a, b) {
  return a + b;
};
console.log(add(10, 20)); // 30
```

#### 3) Arrow Function
A shorter, cleaner syntax for writing functions, introduced in **ES6 (2015)**. Best suited for **callbacks**.

**Syntax:**
```js
const functionName = (parameters) => {
  // function body
};
```
> `=>` is called the **"fat arrow"**.

**Examples:**
```js
let arrow = () => {
  console.log("arrow function");
};
arrow();

const add = (a, b) => {
  return a + b;
};
add(20, 30);
```

**Arrow Function Characteristics:**

**a) No arguments:**
```js
() => {
  // function body
}
```

**b) Exactly one argument** (parentheses optional):
```js
let square = a => {
  console.log(a * a);
};
square(2);
```

**c) More than one argument** (parentheses required):
```js
const add = (a, b) => {
  console.log(a + b);
};
add(20, 30);
```

**d) Implicit Return:** if the function body has only **one expression** (one line), it automatically returns it — no `{}` or `return` needed.
```js
const square = x => x * x;
square(3); // 9
```

**e) Explicit Return:** needed when using `return` explicitly, or when the function has **more than one line** of code — requires `{}`.
```js
const add = (a, b) => {
  return a + b;
};
console.log(add(50, 60)); // 110

const greet = (name) => {
  console.log("Hello");
  console.log(name);
};
greet("John");
```

**Limitations of Arrow Functions:**
- ❌ Arrow functions do **not** have their own `this` keyword (they inherit `this` from the enclosing scope).
- ❌ Arrow functions **cannot** be used as constructors (can't be used with `new`).
- ❌ Arrow functions do **not** have their own `arguments` object.

### Function Types — Quick Comparison

| Type | Named? | Hoisted? | Has own `this`? | Has `arguments`? | Best for |
|---|---|---|---|---|---|
| Normal/Named | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | General-purpose functions |
| Anonymous | ❌ No | ❌ No | ✅ Yes | ✅ Yes | One-off functions stored in variables |
| Arrow | Depends on variable | ❌ No | ❌ No (inherits) | ❌ No | Callbacks, short one-liners |

---

## 15. ⚡ IIFE (Immediately Invoked Function Expression)

A function that **executes immediately** after it is defined.
- No need to call it separately.
- Runs **only once**.

> 📝 **Note:**
> - An IIFE must be wrapped in `( )`.
> - A semicolon *before* an IIFE is often recommended to avoid accidental errors when concatenated with the previous statement.

**Syntax:**
```js
(function (params) {
  // code
})(arguments);
```

**Example:**
```js
(function () {
  console.log("IIFE executed");
})();
```

> 💡 **Extra Insight:** IIFEs were historically the go-to way to create **private scope** and avoid polluting the global namespace — before ES6 block scoping (`let`/`const`) and modules became common. They're still widely used in libraries to wrap code safely.

```js
// IIFE with arguments
(function (name) {
  console.log("Hello " + name);
})("Sourabh");
```

---

## 16. 🎯 Higher Order Functions (HOF)

A function that:
- **accepts another function as an argument**, OR
- **returns a function**

**Example 1 — accepts a function as argument:**
```js
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(10, 5, add)); // 15
```

**Example 2 — returns a function:**
```js
function mul(a) {
  return function (b) {
    return a * b;
  };
}

let double = mul(2);
double(5); // 10
```

> 💡 **Extra Insight:** Many built-in array methods are Higher Order Functions — `map()`, `filter()`, `reduce()`, `forEach()`, and `sort()` all accept a function as an argument.
```js
let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2); // HOF in action
console.log(doubled); // [2, 4, 6, 8]
```

---

## 17. 📞 Callback Functions

A function passed as an **argument** to another function. It will be **executed later**, by that other function.

```js
function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function bye() {
  console.log("Bye");
}

greet("Rahul", bye);
// Output:
// Hello Rahul
// Bye
```

> 💡 **Extra Insight:** A callback is a specific *use* of a Higher Order Function — every callback function is passed into a HOF, but not every HOF necessarily takes a "callback" in the traditional async sense. Callbacks are the foundation of asynchronous JS (`setTimeout`, event listeners, `fetch().then()`, etc.).

```js
// Common real-world pattern
setTimeout(function () {
  console.log("Runs after 2 seconds");
}, 2000);
```

---

## 18. 🪆 Nested Functions & Closures

### Nested Function
A function written **inside another function**.
- The inner function can access the outer function's variables.
- An inner function is accessible **only inside its outer function** (unless returned).

**Example 1 — Basic Nested Function:**
```js
function outer() {
  console.log("Outer function");

  function inner() {
    console.log("Inner function");
  }

  inner(); // calling inner
}

outer();
```

**Example 2 — Accessing outer variables:**
```js
function outer() {
  let name = "John"; // Outer function variable

  function inner() {
    console.log("Hello " + name);
  }

  inner(); // Output: "Hello John"
}

outer();
```
> 📝 **Note:** `inner()` is written inside `outer()`, so it can access the variable `name`. This behavior is called **lexical scoping**.

**Example 3 — Creating a counter using nested functions:**
```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }

  return inner;
}

let counter = outer();

counter(); // 1
counter(); // 2
```

**Explanation:**
- `outer()` runs once.
- `inner()` is returned.
- `count` is still **remembered** even after `outer()` has finished executing.
- This is a **closure**.

### Closure
A **closure** is a function that remembers and has access to the declarations of its outer function, even after the outer function has finished executing.
> A closure is generated for the outer function **only when** the inner function actually accesses the outer function's declarations.

> 💡 **Extra Insight — Why closures matter:**
> - They power **data privacy / private variables** in JS (before `#privateFields` existed in classes).
> - They're the backbone of things like `debounce`, `throttle`, memoization, and module patterns.
```js
function bankAccount(balance) {
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    }
  };
}

let account = bankAccount(1000);
console.log(account.deposit(500));  // 1500
console.log(account.withdraw(200)); // 1300
// 'balance' is completely private — inaccessible from outside!
```

---

## 19. 🧠 Execution Context & Call Stack

### GEC — Global Execution Context

When JavaScript starts, a **Global Execution Context (GEC)** is created and pushed onto the **Call Stack**.

Every JavaScript file executes in **two phases**:
1. **Memory allocation phase** (a.k.a. Creation Phase)
2. **Execution phase**

### 🧠 Memory Allocation Phase
- `var` variables are hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but remain **uninitialized** (Temporal Dead Zone — TDZ).
- Functions are **fully hoisted** and stored in memory with their **complete definitions**.

### ▶️ Execution Phase
- Code executes **line by line**.
- Variables are assigned their actual values.
- `let` and `const` get initialized when execution reaches them.
- Function declarations are already available in memory due to hoisting, so no extra execution happens at their declaration.

### FEC — Function Execution Context

When a function is **invoked**:
- A new **Function Execution Context (FEC)** is created.
- It is **pushed on top of** the GEC (or whichever context called it).

**Inside the function:**
1. **Memory phase** runs → local variables are hoisted, parameters are initialized, inner functions are stored.
2. **Execution phase** runs → function code executes line by line.

**After function execution:**
- The Function Execution Context is **popped** from the Call Stack.
- Control returns to the previous context (usually GEC).
- The Call Stack follows **LIFO** (Last In, First Out).

**After all code execution completes:**
- The Global Execution Context is removed from the Call Stack, and the Call Stack becomes empty.

> 💡 **Extra Insight — Visualizing the Call Stack:**
```js
function a() {
  b();
  console.log("a finished");
}
function b() {
  console.log("b running");
}
a();

// Call Stack timeline:
// 1. [GEC]
// 2. [GEC, a()]
// 3. [GEC, a(), b()]   → "b running" logs
// 4. [GEC, a()]        → b() popped, back in a()  → "a finished" logs
// 5. [GEC]              → a() popped
// 6. []                 → GEC popped, program ends
```

> ⚠️ This is also why **"stack overflow"** errors happen — if a function calls itself infinitely (bad recursion with no base case), the Call Stack keeps growing until it runs out of memory.

---

## 20. 🔡 Strings & String Methods

A **string** is a primitive data type in JavaScript used to store and manipulate a sequence of characters — essentially text.

- 🔒 Strings are **immutable** (cannot be changed in place — every method returns a **new** string).
- Stored inside quotes: `' '`, `" "`, or `` ` ` `` (backticks — template literals).
- Indexing starts from **0**.
- JavaScript automatically converts strings to objects when calling methods on them — this is called **auto-boxing**.

> **Auto-boxing:** the process where JavaScript automatically converts a primitive value into its corresponding **object wrapper** when you try to access properties or methods on it. This happens only during that access — after execution, the temporary object is destroyed.

```js
let name = "JavaScript";
let name2 = 'JavaScript';

let name3 = `JavaScript is 
             scripting and
             programming language`;
```

**Finding string length** — use the `.length` property:
```js
console.log(name3.length);
```

> ⚠️ **All string methods return a new string — they never modify the original.**

### 📋 String Methods Reference

| # | Method | Purpose |
|---|---|---|
| 1 | `toLowerCase()` | Converts string to lowercase |
| 2 | `toUpperCase()` | Converts string to uppercase |
| 3 | `toString()` | Converts a value (number, boolean, array, object) to a string |
| 4 | `trimStart()` | Removes spaces from the **start** only |
| 5 | `trimEnd()` | Removes spaces from the **end** only |
| 6 | `trim()` | Removes spaces from **both** ends |
| 7 | `replace(search, new)` | Replaces the **first** occurrence only |
| 8 | `replaceAll(search, new)` | Replaces **all** occurrences |
| 9 | `slice(start, end)` | Extracts part of a string by index (supports negative index) |
| 10 | `split(separator)` | Converts string → array, based on a separator |
| 11 | `concat(...strings)` | Joins multiple strings into a new string |
| 12 | `indexOf(value)` | Returns **first** occurrence index (-1 if not found) |
| 13 | `lastIndexOf(value)` | Returns **last** occurrence index (-1 if not found) |
| 14 | `includes(value)` | Checks if a string contains a value → `true`/`false` |
| 15 | `charAt(index)` | Returns the character at a given index |
| 16 | `startsWith(value)` | Checks if a string starts with a given value |
| 17 | `endsWith(value)` | Checks if a string ends with a given value |
| 18 | `repeat(count)` | Repeats the string `count` times |

### 1) `toLowerCase()`
```js
let sub = "JAVASCRIPT";
console.log(sub.toLowerCase()); // "javascript"

"HELLO".toLowerCase(); // "hello"
```

### 2) `toUpperCase()`
```js
let sub2 = "html";
console.log(sub2.toUpperCase()); // "HTML"
```

### 3) `toString()`
Converts a value into a string. Works on numbers, booleans, arrays, objects. Returns a **new** string; does not modify the original value.
```js
let num = 123;
console.log(num.toString());   // "123"
// or
console.log((123).toString());

let bool = true;
console.log(bool.toString());  // "true"

let arr = [1, 2, 3];
console.log(arr.toString());   // "1,2,3"
```
> ⚠️ We should **not** use `toString()` with `null` and `undefined` — it causes an error.

### 4) `trimStart()`
```js
let str4 = "   hi";
console.log(str4.trimStart()); // "hi"
```

### 5) `trimEnd()`
```js
let str5 = "hi   ";
console.log(str5.trimEnd()); // "hi"
```

### 6) `trim()`
```js
let str6 = "   hi   ";
console.log(str6.trim()); // "hi"
```

### 7) `replace(searchValue, newValue)`
Replaces the **first** occurrence only. Case-sensitive.
```js
let str7 = "Java Java";
let result7 = str7.replace("Java", "JS");
console.log(result7); // "JS Java"
```

### 8) `replaceAll(searchValue, newValue)`
Replaces **all** occurrences. Case-sensitive.
```js
let str8 = "Java Java";
let result8 = str8.replaceAll("Java", "JS");
console.log(result8); // "JS JS"
```

### 9) `slice(startIndex, endIndex)`
Extracts part of a string based on index. End index **not** included. Supports negative indexes. **Most preferred** method for extracting substrings.
```js
let str11 = "JavaScript";
let result11 = str11.slice(-6);
console.log(result11); // "Script"
```

### 10) `split(separator)`
Converts a string to an **array**, using a separator. Returns a new array — the original string doesn't change.
```js
let str12 = "ap&ple,ban&ana,man&go";
let result12 = str12.split(",");
console.log(result12); // ["ap&ple", "ban&ana", "man&go"]
console.log(str12.split("&")); // ["ap", "ple,ban", "ana,man", "go"]
```

### 11) `concat()`
`string1.concat(string2, string3, ...)` — joins multiple strings, returns a new string. The `+` operator or template literals are more commonly used in modern code.
```js
let a = "Hello";
let b = "JS";
let result13 = a.concat(" ", b);
console.log(result13); // "Hello JS"
```

### 12) `indexOf()`
`string.indexOf(searchValue)` — returns the **first** occurrence index. Returns `-1` if not found. Case-sensitive. Searches left → right.
```js
let str14 = "JavaScript";
console.log(str14.indexOf("a")); // 1  (first 'a')
console.log(str14.indexOf("r")); // 8
```

### 13) `lastIndexOf()`
`string.lastIndexOf(searchValue)` — returns the **last** occurrence index. Returns `-1` if not found. Case-sensitive. Searches right → left.
```js
let str15 = "banana";
console.log(str15.lastIndexOf("a")); // 5  (last 'a')
```

### 14) `includes()`
`string.includes(searchValue)` — checks if a string contains a specified value. Returns `true`/`false`. Case-sensitive.
```js
let str16 = "I love JavaScript";
console.log(str16.includes("JavaScript")); // true
console.log(str16.includes("Java"));       // true
console.log(str16.lastIndexOf("a"));       // last 'a' index
```

### 15) `charAt(index)`
Returns the character at a given index. Returns empty string if index is negative or out of range.
```js
let str17 = "JavaScript";
console.log(str17.charAt(0)); // "J"
console.log(str17.charAt(5)); // "c"
```

### 16) `startsWith()`
`string.startsWith(searchString)` — checks whether a string **starts** with a specified value. Returns boolean. Case-sensitive.
```js
let str = "JavaScript";
console.log(str.startsWith("Java"));   // true
console.log(str.startsWith("Script")); // false
```

### 17) `endsWith()`
`string.endsWith(searchString)` — checks whether a string **ends** with a given value. Returns boolean. Case-sensitive.
```js
let str = "JavaScript";
console.log(str.endsWith("Script")); // true
console.log(str.endsWith("Java"));   // false
```

### 18) `repeat()`
Creates a new string by repeating the original string a specified number of times. The original string does not change.

**Syntax:** `string.repeat(count)`
- `count` → number of times to repeat. Must be an integer ≥ 0.

```js
let str = "Hi! ";
console.log(str.repeat(3));    // "Hi! Hi! Hi! "
console.log("abc".repeat(5));  // "abcabcabcabcabc"
```

**Edge cases for `repeat()`:**
- `count = 0` → returns an **empty string**.
- `count` is **negative** → throws a **RangeError**.
- `count` is a **decimal** → gets converted to an integer.

---

## 21. 🎤 Tricky Interview Questions

**Q1. What will this print?**
```js
console.log(typeof null);
```
**Answer:** `"object"`
**Why:** This is a famous, long-standing **bug in JavaScript** (kept for backward compatibility). `null` is a primitive, but `typeof null` incorrectly returns `"object"`.

---

**Q2. What's the output?**
```js
console.log(1 + "1");
console.log(1 - "1");
```
**Answer:** `"11"` then `0`
**Why:** `+` with a string triggers **string concatenation**. `-` forces numeric conversion since there's no string-subtraction operation.

---

**Q3. Predict the output:**
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```
**Answer:** `3 3 3`
**Why:** `var` is function/global-scoped — all three callbacks share the **same** `i`, which is `3` by the time they run.

**Q4. Now with `let`:**
```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```
**Answer:** `0 1 2`
**Why:** `let` is block-scoped — a **new** `i` is created for each loop iteration (this is a classic **closure** interview question).

---

**Q5. What happens here?**
```js
console.log(a);
let a = 5;
```
**Answer:** `ReferenceError: Cannot access 'a' before initialization`
**Why:** `a` is hoisted but sits in the **TDZ** until its declaration line executes.

---

**Q6. Output?**
```js
function foo() {
  console.log(this);
}
const arrowFoo = () => {
  console.log(this);
};
foo();
arrowFoo();
```
**Why it's tricky:** A **regular function** called standalone has `this` = the global object (or `undefined` in strict mode). An **arrow function** has **no own `this`** — it inherits `this` from its surrounding lexical scope.

---

**Q7. What does this print?**
```js
console.log([] == false);
console.log([] == "");
console.log([] == 0);
```
**Answer:** all `true`
**Why:** These are classic loose-equality (`==`) coercion traps — an empty array gets converted to an empty string, which further converts to `0` during comparison.

---

**Q8. Closure counter trap:**
```js
function counter() {
  var count = 0;
  return function () {
    return count++;
  };
}
const c1 = counter();
const c2 = counter();
console.log(c1()); // ?
console.log(c1()); // ?
console.log(c2()); // ?
```
**Answer:** `0, 1, 0`
**Why:** `c1` and `c2` are two **separate closures**, each with its own private `count` — they don't share state.

---

**Q9. What's logged?**
```js
console.log("5" + 3 - 1);
```
**Answer:** `52`
**Why:** Evaluated **left to right**: `"5" + 3` → `"53"` (string concat), then `"53" - 1` → `52` (numeric subtraction forces conversion).

---

**Q10. Tricky `switch` with no strict typing:**
```js
let x = "1";
switch (x) {
  case 1:
    console.log("Number one");
    break;
  case "1":
    console.log("String one");
    break;
  default:
    console.log("Nothing matched");
}
```
**Answer:** `"String one"`
**Why:** `switch` uses **strict equality (`===`)** internally — `"1"` (string) does not match `1` (number).

---

## 22. ⚠️ Edge Cases & Points to Remember

### 🔑 Variables & Scope
- `var` inside a block **leaks out** — it does not respect `{ }` boundaries.
- Redeclaring a `let`/`const` in the **same** scope throws an error, but redeclaring in a **nested/child** scope is totally fine (shadowing).
- `const` objects/arrays are mutable in content — only the reference/binding is frozen.

### 🔑 Equality & Type Coercion
- `NaN` is the **only** value in JS that is not equal to itself (`NaN !== NaN`).
- `typeof null` returns `"object"` — a known quirk, not a bug you caused.
- Always prefer `===` over `==` unless you have an explicit reason to allow coercion.
- `null == undefined` is `true`, but `null === undefined` is `false`.

### 🔑 Hoisting
- Function **declarations** are fully hoisted (you can call them before their definition in code).
- Function **expressions** and **arrow functions** assigned to `var`/`let`/`const` are **not** callable before their line runs.
```js
sayHi(); // ✅ Works — full hoisting
function sayHi() { console.log("Hi"); }

sayBye(); // ❌ TypeError — sayBye is undefined at this point
var sayBye = function () { console.log("Bye"); };
```

### 🔑 Functions & Closures
- Every function call creates a **new execution context** and (if applicable) a new closure scope.
- Arrow functions cannot be used as constructors and don't have their own `arguments` object.
- Closures can accidentally cause **memory leaks** if they hold references to large objects/DOM nodes that are never released.

### 🔑 Strings
- Strings are **immutable** — `str[0] = "X"` silently does nothing (no error, no change).
- `slice()` supports negative indexes; `substring()` does not (clamps negative to 0) — a common trap in interviews.
- `repeat()` with a negative count throws a `RangeError` — always validate `count >= 0`.

### 🔑 Loops & Async
- A `for` loop with `var` shares one variable across all iterations — this bites people badly with `setTimeout` inside loops.
- An empty `for(...);` (semicolon right after) is legal but creates an empty-bodied loop — easy typo to miss.

---

## 23. ✅ Quick Revision Cheatsheet

- JavaScript was created by **Brendan Eich** in **10 days** at Netscape (1995), originally named **Mocha**, then **LiveScript**, then **JavaScript**.
- Standardized as **ECMAScript** by ECMA in 1997; **ES6 (2015)** was the biggest update.
- JS is **single-threaded, dynamically typed, interpreted, synchronous, loosely typed**, and became object-oriented from **ES6+**.
- `var` → function/global scope, redeclare & reinitialise both allowed.
- `let` → block scope, reinitialise allowed, redeclare not allowed.
- `const` → block scope, must declare + initialise together, cannot reassign (but contents of objects/arrays can change).
- All three (`var`, `let`, `const`) are **hoisted**, but only `var` is initialised (`undefined`) immediately — `let`/`const` sit in the **TDZ** until their declaration line runs.
- `==` compares value only (with type coercion); `===` compares value **and** type.
- `null == undefined` → `true`, but `null === undefined` → `false`.
- `NaN === NaN` → always `false`.
- Conditional statements: `if`, `if-else`, `else-if`, nested `if`, `switch`.
- Loops: `for` (known iterations), `while` (condition-first, unknown iterations), `do-while` (runs at least once).
- Functions: **Normal/Named** (hoisted, has `arguments` & `this`), **Anonymous** (stored in a variable), **Arrow** (short syntax, no own `this`/`arguments`, great for callbacks).
- **IIFE** → runs immediately once, used for private scope.
- **HOF** → accepts and/or returns a function (`map`, `filter`, `reduce` are all HOFs).
- **Callback** → a function passed to run later inside another function.
- **Closure** → an inner function remembering its outer function's variables, even after the outer function has returned.
- **Execution Context**: GEC created first → Memory phase (hoisting) → Execution phase; each function call pushes a new FEC onto the (LIFO) Call Stack.
- Strings are **immutable** — every string method returns a new string.
- `slice()` is the preferred way to extract substrings (supports negative indexes); `replace()` hits only the first match, `replaceAll()` hits every match.
