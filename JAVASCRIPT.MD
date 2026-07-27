# 📘 JavaScript Fundamentals — Complete Notes

A complete beginner-to-intermediate reference covering JavaScript basics, history, variables, scope, hoisting, data types, conditionals, loops, and functions.

---

## 📑 Table of Contents

1. [What is JavaScript?](#1-what-is-javascript)
2. [History of JavaScript](#2-history-of-javascript)
3. [Characteristics / Features of JavaScript](#3-characteristics--features-of-javascript)
4. [Java vs JavaScript](#4-java-vs-javascript)
5. [Ways to Write & Execute JavaScript](#5-ways-to-write--execute-javascript)
6. [Tokens](#6-tokens)
7. [Variables: var, let, const](#7-variables-var-let-const)
8. [Scopes](#8-scopes)
9. [Hoisting & TDZ](#9-hoisting--tdz)
10. [Data Types](#10-data-types)
11. [Operators & Comparisons](#11-operators--comparisons)
12. [Conditional Statements](#12-conditional-statements)
13. [Looping Statements](#13-looping-statements)
14. [Functions](#14-functions)
15. [Quick Revision Cheatsheet](#15-quick-revision-cheatsheet)

---

## 1. What is JavaScript?

JavaScript is a **scripting / high-level programming language** used to make websites **interactive and dynamic**.

- It can be used in **Frontend development** (browser) as well as **Backend development** (via Node.js).
- Without JavaScript, a webpage is just static text and images — JS is what makes buttons respond, forms validate, and pages update without reloading.

---

## 2. History of JavaScript

In **1995**, websites were very simple — they only showed text and images. There was no interactivity: no popups, no form validation, no animations. These were called **static web pages**.

**Netscape Communications** (the company behind the Netscape Navigator browser) wanted websites to behave dynamically — buttons that react, forms that validate, pages that respond to users.

- Netscape hired a young engineer named **Brendan Eich**.
- He created JavaScript in just **10 days**.
- Why only 10 days? Netscape was in a browser race against Microsoft and urgently needed a scripting language.

**The language's name changed over time:**
```
Mocha → LiveScript → JavaScript
```
Java was extremely popular in 1995, so the name "JavaScript" was chosen mainly for **marketing purposes** — not because JavaScript is technically related to Java.

**Standardization:**
- In **1997**, JavaScript was standardized by **ECMA**. The official name became **ECMAScript (ECMA-262)**.
- In **2015**, **ES6** was released — one of the biggest updates in JavaScript history, making JS far more powerful and modern (introduced `let`, `const`, arrow functions, classes, promises, etc.).

> 📝 **Note:** The current ECMAScript version (as of these notes) is **ES2025**. A new ES version is released every year.

---

## 3. Characteristics / Features of JavaScript

### 1) Single Threaded
JavaScript is a single-threaded language — it executes **one operation at a time** on a single thread. A program uses only one call stack to execute instructions.
> Example: Online banking website OTP validation — one step waits for the previous to finish.

### 2) Dynamically Typed
The type of a variable is determined **based on the value stored, at runtime** — you don't declare a type upfront.
```js
var a = 10;
let b = "abc";
const c = true;
```

### 3) Interpreted
JavaScript code is processed **line by line**, rather than compiled all at once beforehand.
> Example: Like a translator reading a book aloud sentence by sentence, rather than translating the whole book first.

### 4) Synchronous
Tasks execute in **sequential order** — each task waits for the previous one to finish before starting.
> Example: A toll gate or coin box — one vehicle/coin is processed at a time.

### 5) Loosely Typed / Weakly Typed
JavaScript doesn't attach variables to a specific data type — it can change type as needed during operations.
```js
console.log("122" + 2); // "1222"  → string
console.log("122" - 2); // 120    → number
```
> **Type Coercion** is the process by which JavaScript automatically converts one data type into another while performing an operation.

### 6) Object-Based & 7) Object-Oriented

| Object-Based | Object-Oriented |
|---|---|
| No mandatory classes | Class-based, blueprints mandatory |
| Objects can be created directly | Objects are created from classes |
| Supports objects, but **not** all OOP principles | Supports objects and all major OOP principles: Encapsulation, Abstraction, Inheritance, Polymorphism |
| Does **not** support inheritance (traditionally) | Supports inheritance |

> 📝 **Note:** JavaScript became object-oriented from the **ES6+** version onward, thanks to `class` syntax and prototype-based inheritance.

---

## 4. Java vs JavaScript

A very common interview mix-up — despite the similar name, Java and JavaScript are unrelated languages.

| Java | JavaScript |
|---|---|
| Programming language | Programming **and** Scripting language |
| Strictly typed language | Weakly / Loosely typed |
| Statically typed | Dynamically typed |
| Runs on JVM | Runs inside a browser / Node.js |
| Compiled & interpreted language | Interpreted language |
| Multi-threaded | Single-threaded |

---

## 5. Ways to Write & Execute JavaScript

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
1. Using an HTML file (open in browser, view via browser console).
2. Using **Node.js** — run in terminal: `node filename`

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

---

## 6. Tokens

**Tokens** are the smallest meaningful units of a JavaScript program. The JavaScript engine recognizes them during the **lexical analysis (tokenization)** phase.

> **Lexical analysis (tokenization) phase:** The phase where the JS engine reads source code character by character and converts it into tokens.

### Types of Tokens
- Keywords
- Identifiers
- Operators
- Literals
- Separators
- Comments
- Functions

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

## 7. Variables: var, let, const

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

---

## 8. Scopes

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

## 9. Hoisting & TDZ

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

## 10. Data Types

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

## 11. Operators & Comparisons

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

## 12. Conditional Statements

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

## 13. Looping Statements

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

## 14. Functions

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

## 15. Quick Revision Cheatsheet

- JavaScript was created by **Brendan Eich** in **10 days** at Netscape (1995), originally named **Mocha**, then **LiveScript**, then **JavaScript**.
- Standardized as **ECMAScript** by ECMA in 1997; **ES6 (2015)** was the biggest update.
- JS is **single-threaded, dynamically typed, interpreted, synchronous, loosely typed**, and became object-oriented from **ES6+**.
- `var` → function/global scope, redeclare & reinitialise both allowed.
- `let` → block scope, reinitialise allowed, redeclare not allowed.
- `const` → block scope, must declare + initialise together, cannot reassign.
- All three (`var`, `let`, `const`) are **hoisted**, but only `var` is initialised (`undefined`) immediately — `let`/`const` sit in the **TDZ** until their declaration line runs.
- `==` compares value only (with type coercion); `===` compares value **and** type.
- `null == undefined` → `true`, but `null === undefined` → `false`.
- `NaN === NaN` → always `false`.
- Conditional statements: `if`, `if-else`, `else-if`, nested `if`, `switch`.
- Loops: `for` (known iterations), `while` (condition-first, unknown iterations), `do-while` (runs at least once).
- Functions: **Normal/Named** (hoisted, has `arguments` & `this`), **Anonymous** (stored in a variable), **Arrow** (short syntax, no own `this`/`arguments`, great for callbacks).