# JavaScript — Complete Study Notes (Fundamentals → Node.js/Express)

> Interview-ready reference. Read once, understand fully. Corrected and cleaned up from class notes.

---

## Table of Contents

1. [Introduction & History](#1-introduction-history)
2. [Characteristics of JavaScript](#2-characteristics-of-javascript)
3. [Java vs JavaScript](#3-java-vs-javascript)
4. [Writing & Executing JS](#4-writing-executing-js)
5. [Tokens](#5-tokens)
6. [Variables: var, let, const](#6-variables-var-let-const)
7. [Scopes](#7-scopes)
8. [Hoisting & TDZ](#8-hoisting-tdz)
9. [Data Types](#9-data-types)
10. [Operators & Comparisons](#10-operators-comparisons)
11. [Conditional Statements](#11-conditional-statements)
12. [Loops](#12-loops)
13. [Functions](#13-functions)
14. [IIFE](#14-iife)
15. [Higher Order Functions & Callbacks](#15-higher-order-functions-callbacks)
16. [Closures](#16-closures)
17. [Execution Context & Call Stack](#17-execution-context-call-stack)
18. [Strings & String Methods](#18-strings-string-methods)
19. [Arrays](#19-arrays)
20. [Objects](#20-objects)
21. [call(), apply(), bind()](#21-call-apply-bind)
22. [Math Object](#22-math-object)
23. [Date Object](#23-date-object)
24. [BOM (Browser Object Model)](#24-bom-browser-object-model)
25. [DOM — Selectors, Reading & Manipulating Content](#25-dom-selectors-reading-manipulating-content)
26. [Events](#26-events)
27. [Event Propagation & Event Delegation](#27-event-propagation-event-delegation)
28. [Promises](#28-promises)
29. [async / await](#29-async-await)
30. [fetch()](#30-fetch)
31. [Event Loop: Microtask vs Macrotask Queue](#31-event-loop-microtask-vs-macrotask-queue)
32. [ES6 Features: Destructuring, Spread & Rest](#32-es6-features-destructuring-spread-rest)
33. [Shallow Copy vs Deep Copy](#33-shallow-copy-vs-deep-copy)
34. [Remaining JS Concepts](#34-remaining-js-concepts)
35. [Node.js Basics](#35-nodejs-basics)
36. [Express.js Basics](#36-expressjs-basics)
37. [Quick Interview Cheatsheet](#37-quick-interview-cheatsheet)
38. [Interview Q&A — All Questions, Answered](#38-interview-qa-all-questions-answered)

---

## 1. Introduction & History

**What is JavaScript?**
A scripting / high-level, interpreted programming language used to make web pages interactive and dynamic. Used for **frontend** (in the browser) and **backend** (via Node.js).

**History (interview favorite):**
- **1995** — Websites were static (only text/images). Netscape wanted dynamic behavior.
- **Brendan Eich** (Netscape) created JS in **10 days**.
- Name evolution: `Mocha → LiveScript → JavaScript` (renamed for marketing — Java was popular in 1995; JS is **not** derived from Java).
- **1997** — Standardized by **ECMA** → official name **ECMAScript (ECMA-262)**.
- **2015** — **ES6 (ES2015)** released: biggest update — `let`, `const`, arrow functions, classes, promises, template literals, etc.
- A new ECMAScript version releases every year (ES2016, ES2017 … current is ES2025+).

---

## 2. Characteristics of JavaScript

| # | Feature | Meaning |
|---|---|---|
| 1 | **Single-threaded** | One call stack → executes one operation at a time. |
| 2 | **Dynamically typed** | Variable type is decided at runtime, based on the value assigned. |
| 3 | **Interpreted** | Code runs line by line (via a JS engine), not compiled ahead of time as a whole. |
| 4 | **Synchronous by default** | Each statement waits for the previous one to finish — *but* the browser's Web APIs + Event Loop + Callback/Microtask Queue let JS *behave* asynchronously (`setTimeout`, `fetch`, Promises). |
| 5 | **Loosely / weakly typed** | JS auto-converts types during operations → **type coercion**. |
| 6 | **Object-based** | Supports objects but not all OOP pillars natively (pre-ES6). |
| 7 | **Object-oriented (from ES6)** | `class` syntax + prototypal inheritance → supports Encapsulation, Abstraction, Inheritance, Polymorphism. |

```js
console.log("122" + 2); // "1222" → string (concatenation)
console.log("122" - 2); // 120    → number (coercion, - only works numerically)
```

> **Type Coercion**: JS automatically converting one data type to another while performing an operation.

---

## 3. Java vs JavaScript

| Java | JavaScript |
|---|---|
| Programming language | Programming **and** scripting language |
| Strictly / statically typed | Weakly / dynamically typed |
| Runs on the JVM | Runs in a browser or Node.js runtime |
| Compiled then interpreted (bytecode) | Interpreted (JIT-compiled internally by engines like V8) |
| Multi-threaded | Single-threaded |

Unrelated languages — same-era naming coincidence only.

---

## 4. Writing & Executing JS

**Ways to write JS:**
```html
<!-- Internal -->
<script>
  console.log("Hello");
</script>

<!-- External -->
<script src="./app.js"></script>
```

**Ways to execute:**
- In the browser (open HTML file, check browser console).
- In Node.js from terminal: `node filename.js`

**Why put `<script>` at the end of `<body>`?**
Browser parses HTML top-to-bottom. A script placed early may try to access/manipulate DOM elements that don't exist yet → errors or blank behavior. Placing it at the bottom guarantees the DOM is ready first.

**Using `<head>` instead — `defer` vs `async`:**
```html
<script src="app.js" defer></script>
<script src="app.js" async></script>
```
- **`defer`** — downloads in background, executes **in order**, only **after** HTML parsing completes. Use when the script needs the DOM or depends on other scripts.
- **`async`** — downloads in background, executes **as soon as it's ready** (may interrupt parsing, order not guaranteed). Use for independent scripts (e.g., analytics).
- Without either, a `<head>` script **blocks** page rendering until it finishes downloading + executing.

---

## 5. Tokens

**Tokens** = smallest meaningful units the JS engine recognizes during **lexical analysis (tokenization)** — reading source code character by character and converting it into tokens.

**Types:** Keywords, Identifiers, Operators, Literals, Separators, Comments, Functions.

- **Keywords** — reserved words with fixed meaning (`var`, `let`, `function`, `class`…). Cannot be used as variable names. Case-sensitive.
- **Identifiers** — names given to variables/functions/classes.
  - Cannot start with a number.
  - No spaces.
  - Only `$` and `_` allowed as special characters.
  - Cannot be a reserved keyword.

---

## 6. Variables: var, let, const

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function / Global | Block | Block |
| Redeclare (same scope) | ✅ Allowed | ❌ Error | ❌ Error |
| Reinitialize (reassign) | ✅ Allowed | ✅ Allowed | ❌ Error |
| Must initialize at declaration | No | No | ✅ Yes, mandatory |
| Hoisted | ✅ Yes → initialized as `undefined` | ✅ Yes → in TDZ | ✅ Yes → in TDZ |

```js
// var
var a;        // declare
a = 20;       // initialize
var a = 200;  // redeclare + reinitialize → totally fine

// let
let b;        // declare
b = 30;       // initialize
b = 500;      // reinitialize → fine
// let b;     // ❌ Error: already declared

// const
const c = 30; // must declare + initialize together
// const d;   // ❌ Error: missing initializer
// c = 40;    // ❌ Error: assignment to constant variable
```

> **Interview trap:** `const` does **not** make a value immutable — it locks the **binding** (variable name), not the contents.
```js
const arr = [1, 2, 3];
arr.push(4);     // ✅ allowed — mutating contents
console.log(arr); // [1, 2, 3, 4]
// arr = [5, 6]; // ❌ Error — reassigning the variable itself
```

---

## 7. Scopes

- **Global scope** — `var` declared outside any function; accessible everywhere.
- **Script scope** — `let` / `const` declared at top level of a file (not inside any block/function).
- **Function scope** — variables declared inside a function; accessible only inside it.
- **Block scope** — `let` / `const` inside `{ }`; accessible only inside that block.

```js
function test() {
  var a = 10;
  let b = 20;
  console.log(a); // 10
}
test();
console.log(a); // ❌ ReferenceError

if (true) {
  let x = 10;
  console.log(x); // 10
}
console.log(x); // ❌ ReferenceError
```

> ⚠️ **`var` ignores block scope** — it "leaks" out of `{ }` into the enclosing function/global scope.
```js
{
  var a = 20;
}
console.log(a); // 20 — accessible outside the block!
```

---

## 8. Hoisting & TDZ

**Hoisting** — variable/function **declarations** are moved to the top of their scope during the compilation phase. Only declarations are hoisted, not initializations. Happens for `var`, `let`, and `const`.

```js
console.log(a); // undefined  → var hoisted & auto-initialized to undefined
console.log(b); // ❌ ReferenceError → TDZ
console.log(c); // ❌ ReferenceError → TDZ

var a = 10;
let b = 20;
const c = 30;
```

**TDZ (Temporal Dead Zone)** — the time between a `let`/`const` variable's hoisting and its actual initialization line. Accessing it during this window throws a `ReferenceError`. TDZ applies **only** to `let` and `const` (not `var`, since `var` is auto-initialized to `undefined` on hoist).

---

## 9. Data Types

**Primitive:** `number`, `string`, `boolean`, `undefined`, `null`, `bigint`, `symbol`
**Non-primitive (reference):** `object`, `array`, `function`

```js
console.log(typeof 10);         // "number"
console.log(typeof 10n);        // "bigint"
console.log(typeof "js");       // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (a long-standing JS bug, memorize this!)
console.log(typeof typeof 10);  // "string" (typeof always returns a string)
```

**`null` vs `undefined`:**

| | Meaning |
|---|---|
| `undefined` | Variable declared but not yet assigned a value. |
| `null` | Intentional, explicit "no value" set by the developer. |

```js
console.log(null == undefined);   // true  → loose equality, both "empty"
console.log(null === undefined);  // false → different types
console.log(0 == undefined);      // false

console.log(10 + null);      // 10   → null coerces to 0
console.log(10 + undefined); // NaN  → undefined cannot convert to a number
```

**`NaN` (Not a Number):**
```js
console.log(typeof NaN);   // "number" (yes, really)
console.log(NaN == NaN);   // false — NaN is never equal to itself
console.log(NaN === NaN);  // false
// To check: Number.isNaN(value)
```

**`==` vs `===`:**

| Operator | Name | Behavior |
|---|---|---|
| `==` | Loose equality | Converts types before comparing |
| `===` | Strict equality | Compares value **and** type, no conversion |

```js
console.log(5 == "5");  // true  → "5" coerced to 5
console.log(5 === "5"); // false → different types
```
> **Best practice:** always prefer `===` / `!==` to avoid unexpected coercion bugs.

---

## 10. Operators & Comparisons

```js
console.log(2 ** 3);              // 8 → exponentiation
console.log(10 > 5 ? "yes" : "no"); // ternary → condition ? ifTrue : ifFalse
```

---

## 11. Conditional Statements

```js
// if
if (age >= 18) { /* ... */ }

// if-else
if (age >= 18) { /* ... */ } else { /* ... */ }

// else-if ladder (checked top to bottom, only ONE branch runs)
if (marks >= 90) { /* ... */ }
else if (marks >= 75) { /* ... */ }
else { /* ... */ }

// nested if — for dependent conditions
if (balance > 0) {
  if (amount <= balance) { /* withdraw */ }
}

// switch — better readability for multiple fixed values
switch (day) {
  case 1:
    console.log("Monday");
    break;
  default:
    console.log("Working Day");
}
```
> ⚠️ Forgetting `break` in `switch` causes **fall-through** — execution continues into the next case(s).

---

## 12. Loops

| Loop | Use when | Condition checked |
|---|---|---|
| `for` | Number of iterations is known | Before each iteration |
| `while` | Number of iterations unknown | Before each iteration |
| `do...while` | Must run **at least once** | After each iteration |

```js
for (let i = 1; i <= 5; i++) { console.log(i); }

let i = 1;
while (i <= 5) { console.log(i); i++; }

let j = 1;
do { console.log(j); j++; } while (j <= 5);
```
> ⚠️ Forgetting to update the loop variable in `while` causes an **infinite loop**.

---

## 13. Functions

A **function** is a reusable block of code that runs when it's **called** (invoked).

```js
function greet() {              // declaration
  console.log("Hello");         // body
}
greet();                        // invocation
```

**Parameters vs Arguments:**

| Term | Meaning |
|---|---|
| Parameter | Placeholder variable in the function **definition** |
| Argument | Actual value passed at **invocation** |

```js
function add(a, b) { return a + b; } // a, b = parameters
add(10, 20);                          // 10, 20 = arguments
```

**Default parameters:**
```js
function sum(x, y = 10) { return x + y; }
console.log(sum(5)); // 15 → y defaults to 10 since not passed
```

**`return`:**
- Sends a value back to the caller.
- Stops function execution immediately — code after `return` never runs.
- If nothing is returned, the function returns `undefined`.

**Function types:**
```js
function fn1() {}             // function declaration — hoisted fully
const fn2 = function () {};   // function expression — not hoisted (only the var is)
const fn3 = () => {};         // arrow function — no own `this`, inherits from enclosing scope
```

---

## 14. IIFE

**Immediately Invoked Function Expression** — a function that runs as soon as it's defined, without being called separately. Used to create an isolated scope (avoid polluting global scope).

```js
(function () {
  console.log("Runs immediately");
})();

(() => {
  console.log("Arrow IIFE");
})();
```

---

## 15. Higher Order Functions & Callbacks

- **Higher Order Function (HOF)** — a function that either **takes another function as an argument** or **returns a function**. Examples: `map`, `filter`, `reduce`, `forEach`.
- **Callback Function** — a function passed as an argument to another function, to be executed later (after some operation completes).

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
greet("Sam", () => console.log("Callback executed"));
```

---

## 16. Closures

A **closure** is formed when an inner (nested) function retains access to its outer function's variables, even **after** the outer function has finished executing.

```js
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2 → `count` is remembered between calls
```
> Closures power patterns like private variables, function factories, and `setTimeout`/event-handler callbacks that need to "remember" data.

---

## 17. Execution Context & Call Stack

**Execution Context** — the environment in which JS code is evaluated and executed. Two main types:
- **Global Execution Context (GEC)** — created once, when the script starts running.
- **Function Execution Context (FEC)** — created every time a function is invoked.

Each execution context has two phases:
1. **Memory / Creation phase** — variables (`var` → `undefined`) and function declarations are hoisted into memory.
2. **Execution phase** — code runs line by line, values get assigned.

**Call Stack** — a stack (LIFO — Last In, First Out) data structure that tracks execution contexts. The GEC sits at the bottom; every function call pushes a new context on top, and it's popped off once the function returns.

```js
function a() { b(); }
function b() { console.log("in b"); }
a();
// Stack: GEC → a() → b()  → pops b → pops a → back to GEC
```

---

## 18. Strings & String Methods

Strings are primitive but have a wrapper object giving them built-in methods (immutable — methods return a **new** string, never modify the original).

| Method | Description | Example |
|---|---|---|
| `indexOf(value, startIndex?)` | First occurrence index; `-1` if not found | `"name".indexOf("a")` → `1` |
| `lastIndexOf(value)` | Last occurrence index (searches right→left); `-1` if not found | `"banana".lastIndexOf("a")` → `5` |
| `repeat(n)` | Repeats the string `n` times; error on negative n | `"js".repeat(2)` → `"jsjs"` |
| `startsWith(value)` | Checks if string starts with value; case-sensitive; returns boolean | `"name".startsWith("n")` → `true` |
| `endsWith(value)` | Checks if string ends with value; case-sensitive; returns boolean | `"name".endsWith("e")` → `true` |
| `charAt(index)` | Returns char/string at index | `"name".charAt(0)` → `"n"` |
| `toString()` | Converts other data types into a string; throws error on `null`/`undefined` | `(123).toString()` → `"123"` |

**Reversing a string (classic interview question):**
```js
let str = "I am indian";

// reverse word order → "indian am I"
let byWords = str.split(' ').reverse().join(' ');

// reverse every character → "naidni ma I"
let byChars = str.split('').reverse().join('');
```

---

## 19. Arrays

An **array** is a non-primitive, ordered collection that can hold homogeneous or heterogeneous values. Dynamic in length. **Mutable**, and internally stored as an object. Index starts at `0`.

### Creating Arrays
```js
// 1. Using literal (preferred)
let arr = [10, 20, 30];

// 2. Using `new Array()`
let arr2 = new Array();          // empty array
let arr3 = new Array(10, 20, 30); // [10, 20, 30]

// ⚠️ gotcha: a single number argument sets LENGTH, not a value
let arr4 = new Array(5); // creates empty array with length 5, no elements
```

### Insertion / Modification / Deletion (manual)
```js
let a = [];
a[0] = 10;          // insert
a[1] = 200;         // modify
delete a[1];        // deletion → leaves an empty slot (length unchanged)
```

### Array Mutating Methods (modify the original array)

| Method | Description |
|---|---|
| `push(...items)` | Adds element(s) to the **end**. Returns new length. |
| `pop()` | Removes the **last** element. Returns the removed element (`undefined` if empty). No args. |
| `unshift(...items)` | Adds element(s) to the **start**. Returns new length. Slower than push (reindexes). |
| `shift()` | Removes the **first** element. Returns removed element. Slower than pop. |
| `splice(start, deleteCount, ...items)` | Add/remove/replace at any index. Returns array of removed elements. |
| `sort(compareFn)` | Sorts in place. Default sorts as **strings**! For numbers, always pass a compare function. Returns the sorted array. |
| `reverse()` | Reverses element order in place. |

```js
let arr = [10, 20];
arr.push(30, 40);        // [10, 20, 30, 40]
arr.pop();                // [10, 20, 30]
arr.unshift(0);           // [0, 10, 20, 30]
arr.shift();               // [10, 20, 30]

let removed = arr.splice(1, 1, 99); // remove 1 elem at index 1, insert 99
console.log(arr);      // [10, 99, 30]
console.log(removed);  // [20]

// Sorting numbers correctly:
let nums = [100, 10, 3, 420, 5];
nums.sort((a, b) => a - b); // ascending
nums.sort((a, b) => b - a); // descending
```
> **Why `(a,b) => a-b` for sort?** If result is negative → `a` before `b`. If positive → `b` before `a`. If `0` → order unchanged. Number.sort() with no compare function sorts lexicographically (as strings) — `[100, 25, 3]` becomes `[100, 25, 3]` sorted as strings → wrong numeric order.

### Array Non-Mutating Methods (return new data, original untouched)

| Method | Description |
|---|---|
| `indexOf(value)` | Index of first occurrence; `-1` if not found. |
| `lastIndexOf(value)` | Index of last occurrence; `-1` if not found. |
| `includes(value)` | `true`/`false` if value exists. |
| `concat(arr2, ...)` | Merges two or more arrays, returns a **new** array. |
| `slice(start, end)` | Returns a copy of a portion (end index **excluded**). Supports negative indices. |
| `join(separator)` | Joins elements into a string. Default separator is `","`. |
| `flat(depth)` | Flattens nested arrays. Default depth `1`. Use `Infinity` for unknown depth. Removes empty slots. |

```js
let arr = [1, 2, 3];
arr.concat([4, 5]);       // [1,2,3,4,5] — new array
arr.slice(1, 3);           // portion from index 1 to 2 (3 excluded)

[1, [2, 3]].flat();        // [1, 2, 3]
[1, [2, [3]]].flat();      // [1, 2, [3]] (default depth 1)
[1, [2, [3]]].flat(Infinity); // [1, 2, 3]

[10, 20, 30].join();       // "10,20,30"
[10, 20, 30].join(' - '); // "10 - 20 - 30"
```

### Array Loops

| Loop | Access | Notes |
|---|---|---|
| `for...of` | Values directly | Cannot access index directly. Works on arrays & strings. Preferred for arrays. |
| `for...in` | Indexes (as strings) | Not recommended for arrays; better suited to objects. |

```js
let snacks = ["Chips", "Biscuit"];
for (let item of snacks) console.log(item);   // values
for (let index in snacks) console.log(index); // indexes (as strings: "0","1")
```

### Array Advanced (Higher-Order) Methods

**Common points for all advanced methods:**
1. All accept a **callback function** as an argument.
2. All are Higher Order Functions.
3. Callback receives up to 3 params: `(element, index, array)` — index & array are optional.

| Method | Purpose | Returns |
|---|---|---|
| `forEach(cb)` | Just iterate over each element (side effects only) | `undefined` — no chaining, no new array |
| `find(cb)` | First element matching condition | The matched **value** (not array); `undefined` if none match |
| `filter(cb)` | All elements matching condition | A **new array** (may be empty) |
| `map(cb)` | Transform each element | A **new array**, same length |
| `some(cb)` | At least one element satisfies condition | `true`/`false`. On empty array → always `false` |
| `every(cb)` | All elements satisfy condition | `true`/`false`. On empty array → always `true` |
| `reduce(cb, initialValue)` | Reduce array to a single value | The accumulated result |

```js
let arr = [10, 20, 21, 22];

arr.forEach((el, i, a) => console.log(el, i));

arr.find(el => el % 2 === 0);        // 10 (first even)
arr.filter(el => el % 2 === 0);      // [10, 20, 22]
arr.map(el => el * 2);               // [20, 40, 42, 44]
arr.some(el => el % 2 === 1);        // true (21 is odd)
arr.every(el => el % 2 === 0);       // false (21 fails)
```

**`reduce()` deep dive:**
```js
arr.reduce((accumulator, current, index, array) => {
  return updatedAccumulator;
}, initialValue);
```
- Must **always return the accumulator** — this becomes the new accumulator for the next iteration.
- If `initialValue` is **not passed**, the first array element becomes the initial accumulator, and iteration starts from the 2nd element.
- No chaining support after reduce (it returns a single value, not an array).
- To get an **object** as the final result, pass an **empty object `{}`** as the initial value.

```js
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, cur) => acc + cur, 0); // 15

// frequency counter
let freq = ["a", "b", "a", "c"].reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {}); // { a: 2, b: 1, c: 1 }
```

**`map()` vs `forEach()`:**
- `map()` returns a **new array** with transformed values — use when you need the result.
- `forEach()` returns `undefined` — use only for side effects (logging, DOM updates), no chaining.

---

## 20. Objects

An **object** is a non-primitive, **mutable** data type — a collection of **key : value** pairs (each pair is called a **property**). Values can be anything: strings, numbers, booleans, arrays, functions, even other objects.

### Ways to Create Objects

**1. Object literal `{}`** — simplest, most common:
```js
let person = { name: "Smith", age: 20 };
```

**2. `new Object()`** — rarely used in modern JS, literals preferred:
```js
let obj = new Object();
obj.name = "Rahul";
```

**3. Constructor function** — used before ES6, for creating multiple similar objects:
```js
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
const p1 = new Person("John", "Doe", 30);
```
> **What `new` does internally:** (1) creates an empty object `{}` → (2) binds `this` to that object → (3) assigns passed arguments as properties → (4) returns the object automatically.

**4. ES6 Class** — cleanest modern syntax, internally still prototype-based:
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() { console.log("Hello " + this.name); }
}
let p1 = new Person("Rahul", 25);
p1.greet();
```

### Accessing / Modifying Properties
```js
let person = { name: "Smith", age: 20 };

person.name;         // dot notation
person["age"];       // bracket notation (needed for dynamic/variable keys)

person.city = "NY";   // add
person.age = 26;      // update
delete person.city;   // delete
```

### Object Methods (all static — accessed via `Object.method()`)

| Method | Purpose | Returns |
|---|---|---|
| `Object.keys(obj)` | Get all keys | Array of keys |
| `Object.values(obj)` | Get all values | Array of values |
| `Object.entries(obj)` | Get key-value pairs | Array of `[key, value]` pairs |
| `Object.assign(target, ...sources)` | Merge/copy objects | The mutated target object |
| `Object.seal(obj)` | Prevents **add/delete** of properties; **update is allowed** | The same object, now sealed |
| `Object.freeze(obj)` | Prevents **add/delete/update** entirely — fully immutable | The same object, now frozen |
| `Object.isSealed(obj)` | Check if sealed | `true`/`false` |
| `Object.isFrozen(obj)` | Check if frozen | `true`/`false` |

```js
let user = { name: "Rahul", age: 25 };

Object.keys(user);    // ["name", "age"]
Object.values(user);  // ["Rahul", 25]
Object.entries(user); // [["name","Rahul"], ["age",25]]

let merged = Object.assign({}, {x: 1}, {y: 2}); // {x:1, y:2}
// recommended: first argument = {} (empty), so originals aren't mutated

Object.seal(user);
user.age = 20;      // ✅ allowed — update
user.city = "Blr";  // ❌ not allowed — add
delete user.name;   // ❌ not allowed — delete

Object.freeze(user);
user.age = 30;       // ❌ not allowed at all
```
> **Note:** Every frozen object is also sealed, but not every sealed object is frozen (sealed still allows updates).
> `Object.freeze()` is **shallow** — nested objects inside a frozen object are NOT automatically frozen.

### The `this` Keyword

- `this` points to the **current object** — i.e., the object that is "calling" the function.
- If there is **no current/owning object**, `this` falls back to the **global object** (`window` in browsers).
- `this` is **dynamic** — its value depends on *how* a function is called, not where it's written.

```js
let std = {
  fn: "Sourabh",
  greet: function () {
    console.log(this); // std object — because std.greet() calls it
  }
};
std.greet();

function demo() {
  console.log(this); // window — no owning object
}
demo();
```

**Arrow functions and `this`:**
Arrow functions do **not** have their own `this`. They inherit `this` from their **enclosing (lexical) scope**.
```js
let std = {
  fn: "Sourabh",
  arrow: () => {
    console.log(this); // window — NOT std, because arrow fns don't bind their own `this`
  }
};
```
> **Rule of thumb:** `this` inside a regular function/method = the object it's called on. `this` inside an arrow function = whatever `this` was in the surrounding (outer) code.

---

## 21. call(), apply(), bind()

`this` is dynamic in JS — it depends on *how* a function is invoked, not where it's defined. `call`, `apply`, and `bind` let you **explicitly control what `this` refers to**, and let you **reuse/borrow** functions across different objects.

```js
function greet() { console.log(this.name); }
greet(); // undefined (or throws in strict mode) — no controlling object
```

### `call()`
Invokes the function **immediately**, arguments passed **individually**.
```js
function.call(thisArg, arg1, arg2, ...)
```
```js
function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}
let person = { name: "Anita" };
introduce.call(person, "Delhi", "India"); // Anita from Delhi, India
```

### `apply()`
Same as `call()`, invokes **immediately**, but arguments are passed as a **single array**.
```js
function.apply(thisArg, [arg1, arg2, ...])
```
```js
introduce.apply(person, ["Delhi", "India"]); // Anita from Delhi, India
```

### `bind()`
Does **NOT** invoke immediately. Returns a **new function** with `this` permanently bound (and optionally, pre-filled/partial arguments). Call the returned function whenever needed.
```js
const newFn = function.bind(thisArg, arg1, arg2, ...);
newFn(); // invoked later
```
```js
function greet() { console.log(this.name); }
let user = { name: "Rahul" };
let boundGreet = greet.bind(user);
boundGreet(); // Rahul — this is now permanently user

// partial application
function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}
let intro = introduce.bind(person, "AP");
intro("India"); // Anita from AP, India
```

### Quick Comparison

| Method | Invokes immediately? | Arguments format | Typical use |
|---|---|---|---|
| `call()` | ✅ Yes | Comma-separated | Invoke now with a specific `this` |
| `apply()` | ✅ Yes | Array | Invoke now, args already in array form |
| `bind()` | ❌ No — returns a new function | Comma-separated | Fix `this` for later use (callbacks, events) |

---

## 22. Math Object

`Math` is a built-in **global** object (non-primitive) for mathematical operations. All properties/methods are **static** — call directly as `Math.method()`. Works only with `Number` type.

| Method | Description | Example |
|---|---|---|
| `Math.abs(n)` | Absolute (positive) value | `Math.abs(-10)` → `10` |
| `Math.round(n)` | Round to nearest integer | `Math.round(4.6)` → `5` |
| `Math.floor(n)` | Round **down** | `Math.floor(4.9)` → `4`, `Math.floor(-4.1)` → `-5` |
| `Math.ceil(n)` | Round **up** | `Math.ceil(4.1)` → `5` |
| `Math.sqrt(n)` | Square root | `Math.sqrt(25)` → `5` |
| `Math.cbrt(n)` | Cube root | `Math.cbrt(27)` → `3` |
| `Math.pow(base, exp)` | Exponentiation | `Math.pow(10, 3)` → `1000` |
| `Math.min(...n)` | Smallest of the given numbers | `Math.min(10,20,-50)` → `-50` |
| `Math.max(...n)` | Largest of the given numbers | `Math.max(10,20,-50)` → `20` |
| `Math.random()` | Random decimal, always **between 0 (inclusive) and 1 (exclusive)** | e.g. `0.4821` |

> `Math.min()`/`Math.max()` only work on individual numbers passed as arguments, **not** directly on an array (use spread: `Math.max(...arr)`).

**Generating a random number/OTP in a range:**
```js
Math.floor(Math.random() * (max - min + 1) + min);

// 4-digit OTP (1000–9999)
let otp = Math.floor(Math.random() * 9000 + 1000);

// 6-digit OTP (100000–999999)
let otp6 = Math.floor(Math.random() * 900000 + 100000);
```

---

## 23. Date Object

`Date` is a built-in object used to work with date & time. Internally stores time as **milliseconds since Jan 1, 1970** (the "epoch" / reference date).

```js
let today = new Date();          // current date & time
today.toDateString();             // e.g. "Sun Aug 23 2026"
today.toTimeString();
today.toString();
```

**Creating a custom date:**
```js
let customDate = new Date("2026-11-21");     // "YYYY-MM-DD" format
let customDate2 = new Date(2026, 10, 21);    // year, month(0-indexed!), day
console.log(customDate); // returns the complete date object
```
> ⚠️ Month is **0-indexed** (`0` = January, `11` = December).

**Get methods (read from a date):**

| Method | Returns |
|---|---|
| `getFullYear()` | Year (4-digit) |
| `getMonth()` | Month, **0-indexed** (0–11) |
| `getDate()` | Day of month (1–31) |
| `getDay()` | Day of week, 0-indexed (0 = Sunday) |
| `getHours()` / `getMinutes()` / `getSeconds()` | Time components |

**Set methods (update parts, rest stays the same):**

| Method | Purpose |
|---|---|
| `setFullYear(year)` | Updates the year |
| `setMonth(month)` | Updates the month (0-indexed) |
| `setDate(day)` | Updates the day of month |
| `setHours()` / `setMinutes()` | Updates time components |

```js
let d = new Date();
d.setFullYear(2030);
d.setMonth(1);   // February
d.setDate(1);
console.log(d);
```

**`Date.now()`** — returns current time in milliseconds since epoch (useful for measuring elapsed time / performance):
```js
console.log(Date.now());
```

---

## 24. BOM (Browser Object Model)

**BOM** lets JavaScript communicate with the **browser itself** (not the page content — that's the DOM's job). It's part of the browser environment, **not** part of core JS.

| | Represents |
|---|---|
| **DOM** | What is *inside* the webpage (the HTML content) |
| **BOM** | What is *around* the webpage, in the browser (window, tabs, history, screen…) |

All BOM objects live inside the global **`window`** object — `window` is the parent-most object.

### Key `window` Properties

| Property | Purpose |
|---|---|
| `document` | Represents the loaded HTML page; gives access to the DOM. Technically part of DOM, but reached via BOM (`window.document`). |
| `screen` | Read-only info about the user's monitor: `screen.width`, `screen.height`. Cannot be changed (hardware property). |
| `history` | Tracks visited pages within the session. |
| `location` | Info about the current URL (`location.href`, etc.); can be set to redirect. |
| `innerWidth` / `innerHeight` | Visible viewport area of the page (excludes browser chrome). Used in responsive design. |
| `outerWidth` / `outerHeight` | Full browser window size, including tabs/address bar/borders. |

```js
console.log(screen.width, screen.height);
console.log(location.href);
location.href = "https://www.google.com"; // redirect

console.log(window.innerWidth, window.innerHeight);
console.log(window.outerWidth, window.outerHeight);
```

**`history` methods:**
```js
history.back();     // go to previous page
history.forward();  // go to next page
history.go(-2);     // jump back 2 pages (negative = back, positive = forward)
history.go(2);
```

### Dialog Methods (Window / Browser Methods)

| Method | Purpose | Returns |
|---|---|---|
| `alert(message)` | Shows a message box with OK button. Blocks execution until dismissed. | No return value |
| `prompt(message, default?)` | Takes user text input. | A **string** if entered; `null` if cancelled — input is always a string, convert with `Number()` if needed |
| `confirm(message)` | Asks for confirmation. | `true` (OK) or `false` (Cancel) |

```js
alert("Look here!");

let name = prompt("Enter Name"); // always a string
let num = Number(prompt("Enter number")); // convert to number

let ok = confirm("Are you sure you want to exit?"); // true/false
```

### Timer Methods (Asynchronous JavaScript basics)

> ⚠️ `setTimeout`/`setInterval` are **not** part of core JS — they are **BOM/browser Web APIs** (runtime APIs) used to schedule JavaScript execution.

**`setTimeout(callback, delay)`**
Executes the callback **once**, after the given delay (in milliseconds).
```js
setTimeout(() => {
  console.log("Runs after 3 seconds");
}, 3000);
```

**`clearTimeout(timeoutId)`**
Cancels a pending `setTimeout` **before** it executes. Must store the ID returned by `setTimeout` to be able to cancel it.
```js
let timeId = setTimeout(() => {
  console.log("This will never run");
}, 5000);

clearTimeout(timeId); // cancelled before it fires
```

**`setInterval(callback, interval)`**
Executes the callback **repeatedly**, once every `interval` milliseconds, until stopped.
```js
setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);
```

**`clearInterval(intervalId)`**
Stops a running interval. If you don't stop it, it runs forever.
```js
let intervalId = setInterval(() => {
  console.log("tick");
}, 1000);

clearInterval(intervalId); // stops the repeating execution
```

---

## 25. DOM — Selectors, Reading & Manipulating Content

**DOM (Document Object Model)** — a tree-like structure/object representation of an HTML document, created by the browser when the HTML file loads. It provides complete programmatic access to the HTML page.

```
document
   └── html
         ├── head
         │     ├── meta
         │     ├── meta
         │     └── title
         └── body
               ├── h1
               ├── p
               └── script
```
- `document` → `html` (parent/child relationship). Elements at the same level (e.g. two `<meta>` tags, or `<h1>`/`<p>`/`<script>` inside `<body>`) are called **siblings**.
- **DOM Node** — everything in the DOM is organized as a node: **Document node**, **Element node** (`<body>`, `<h1>`…), **Text node** (the actual text inside an element), **Comment node**.
- `document` is the object (provided by the browser) used to access and manipulate the DOM.
- `document` technically belongs to the DOM, but is exposed to JS **through** the BOM (`window.document`) — that's why DOM and BOM are closely linked even though they represent different things.

---

### DOM Selectors

To access any DOM method, we use the global `document` object.

| Method | Returns | Notes |
|---|---|---|
| `document.getElementById('id')` | A **single** element | Fastest. Returns first match; recommended to use only 1 unique id (no duplicate ids). |
| `document.getElementsByClassName('class')` | **HTMLCollection** (array-like, not a real array) | Live collection; supports index access, **not** `forEach`. |
| `document.getElementsByTagName('tag')` | **HTMLCollection** | Same class name as above — array-like, not real array. |
| `document.querySelector('css selector')` | The **first** matching element | Accepts **any** CSS selector (`#id`, `.class`, `tag`, universal, etc.) |
| `document.querySelectorAll('css selector')` | A **NodeList** | Similar to an array; **supports `forEach`**, but is **not** a true array (can't use `map`/`filter`/`reduce` directly — convert with `Array.from()` if needed). |

```js
document.getElementById('title');
document.getElementsByClassName('box');
document.getElementsByTagName('p');
document.querySelector('.container');   // first match
document.querySelectorAll('.item');     // NodeList of all matches
```

> **HTMLCollection vs NodeList (interview favorite):**
> | | HTMLCollection | NodeList |
> |---|---|---|
> | Returned by | `getElementsBy...` methods | `querySelectorAll` |
> | `forEach` support | ❌ No | ✅ Yes |
> | Live/static | Live (auto-updates with DOM changes) | Usually static (snapshot) |
> | True array? | ❌ No | ❌ No (array-like) |

### Reading Content

| Property | Returns |
|---|---|
| `element.innerText` | Rendered text content — **only what's visible on the UI** (ignores hidden/CSS-hidden elements) |
| `element.innerHTML` | The full HTML markup inside the element (tags + text), visible content only |
| `element.textContent` | **All** text content — including hidden elements (ignores CSS display), but strips out HTML tags |

```js
let box = document.querySelector('.box');
console.log(box.innerText);
console.log(box.innerHTML);
console.log(box.textContent);
```

### Creating & Inserting Elements

```js
// 1. Create the element
let h1 = document.createElement("h1");

// 2. Add text content
h1.textContent = "DOM";

// 3. Set attributes
h1.setAttribute("id", "dom");

// 4. Insert into the page (attach to parent)
document.body.append(h1);       // or:
document.body.appendChild(h1);
```

| Method | Notes |
|---|---|
| `append(...)` | Can append **multiple** elements/text at once; also works on **text content**, not only nodes. |
| `appendChild(node)` | Accepts **only one** node at a time; works on nodes only. |
| `prepend()` | Inserts **before** the first child (needs no argument requirement beyond node/text). |

```js
p.append(p2, "I am from somewhere"); // multiple items, mixed types allowed
```

### Setting / Removing Attributes & Classes

```js
h1.setAttribute('class', '1');
h1.setAttribute('class', '2'); // ⚠️ overrides previous value — doesn't append

h1.removeAttribute('id');      // removes the id attribute entirely

// To add MULTIPLE classes without overriding existing ones, use classList:
p.classList.add("demo");
p.classList.add("jsp");
p.classList.remove("demo");    // remove a class
```

### CSS Styling via JS

Can be done 3 ways: **inline**, **internal**, **external**. Via JS, we do it **inline**, which is **not recommended** for large-scale styling (better to toggle classes instead). CSS property names always use **camelCase** in JS (`fontSize`, not `font-size`).

```js
let a = document.querySelector('div');

a.style.color = "blue";
a.style.fontSize = "10px";
```

### Removing Elements

```js
div.remove();  // removes the element directly from the DOM
p.remove();
```

---

## 26. Events

An **event** is a set of actions triggered by the browser or by a user.

**Types of event triggers:**
- **User-triggered events** — e.g., adding an item to a cart (click-driven).
- **Browser-triggered events** — e.g., page load, resize (login/pop-up-style automatic triggers).

**Types of events:**
1. Mouse events
2. Keyboard events
3. Form events
4. Browser events (e.g. `load`, `resize`)

### Ways to Attach an Event to an Element

**1. Using an HTML attribute (prefix `on`)** — least recommended:
```html
<button onclick="console.log('you clicked')">Click</button>
<button onmousedown="alert('you are good')">Press</button>
```
- Must add the `on` prefix: `onclick`, `ondblclick`, `onmousedown`, `onmousemove`, etc.
- ⚠️ **Downsides:** can't attach the same event multiple times this way (it overrides the previous handler); mixes JS logic into HTML → HTML structure gets messy/complex.

**2. Using a DOM element property** (`element.onclick = function(){...}`) — better, but still only one handler per event type (assigning again overrides the previous one).

**3. `addEventListener()`** — ✅ **most recommended.** No `on` prefix needed; supports attaching **multiple** listeners to the same event on the same element.
```js
element.addEventListener('click', callbackFunction);
```

### Mouse Events

| Event | Fires when |
|---|---|
| `click` | Element is clicked |
| `dblclick` | Element is double-clicked |
| `mousedown` | Mouse button goes down (left or right click) |
| `mouseup` | Mouse button is released |
| `mousemove` | Mouse pointer moves over the element (fires continuously — tracks pixel position while moving) |

### Keyboard Events

| Event | Fires when |
|---|---|
| `keydown` | A key is pressed down |
| `keypress` | *(largely deprecated — prefer `keydown`)* |
| `keyup` | A key is released |

```js
input.addEventListener('keydown', (e) => {
  console.log("you pressed a key");
  console.log(e.key); // gives the exact key pressed
});
```

### Form Events

No `on` prefix needed when using `addEventListener`.

| Event | Fires when |
|---|---|
| `submit` | A form is submitted (attach to the `<form>` element) |
| `input` | The value of an input field changes (fires on every keystroke) |
| `change` | An input's value changes **and loses focus** (fires once, on blur) |

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();      // stops the default page-reload/navigation behavior
  console.log('form submitted');
});

form.addEventListener('input', (e) => {
  console.log(e.target.value); // current input value
});

form.addEventListener('change', (e) => {
  console.log(e.target.value);
});
```

> **`preventDefault()`** — the default behavior of a `submit` event is to **reload the page**. To stop this default action, call `e.preventDefault()` inside the handler. Other default behaviors it can stop: unchecking a checked checkbox, following an `<a>` link's navigation.

### The Event Object (`e`)

The callback for any event automatically receives an **event object** — conventionally named `e` — which:
- Controls the event's **default behavior** (`e.preventDefault()`).
- Gives info about the event (`e.target` → the element that triggered it, `e.key` → key pressed, etc.).
- Powers advanced patterns like **debouncing** and **throttling** (performance techniques to limit how often a handler runs — covered separately).

---

## 27. Event Propagation & Event Delegation

**Event Propagation** — the complete process of how an event travels through the DOM tree: **Capturing phase → Target → Bubbling phase**.

```
Capturing:  DOM/parent  → → →  target/child   (top to bottom)
Bubbling:   target/child → → → DOM/parent     (bottom to top)
```

- **Event Capturing** — the process of an event moving from the DOM/parent **down to** the target/child element.
- **Event Bubbling** — the process of an event moving from the target/child **up to** the DOM/parent, after the event is triggered. **This is the default flow in JS.**

```
Example structure: div > sec > btn
Click on btn → default bubbling order: btn → sec → div
```

**Enabling capturing phase:**
By default, `addEventListener` listens during the **bubbling** phase. To switch to the **capturing** phase, pass `true` as the 3rd argument:
```js
element.addEventListener('click', callback, true); // capturing phase
element.addEventListener('click', callback);        // bubbling phase (default) — same as passing `false`
```

**`stopPropagation()`**
Stops the event from continuing further along its path (either phase).
```js
div.stopPropagation();
```
- In the **capturing** phase → stops the event from traveling further **toward** the target.
- In the **bubbling** phase → stops the event from moving further **up toward the parent**; it stays only on the target where it was called.

### Event Delegation

**Event Delegation** — attaching **one** event listener to a common **parent**, and using **event bubbling** to handle events for all its child elements (instead of attaching a separate listener to every child).

```js
// Instead of attaching a click listener to every <li>...
ul.addEventListener('click', (e) => {
  console.log(e.target); // the actual child element clicked
});
```

**Why delegation matters:**
- **Without delegation**, you must attach a listener to each child individually — and if a **new** child element is added later (dynamically), you'd have to remember to attach the event to it too. Not scalable/proactive.
- **With delegation**, a single listener on the parent automatically handles clicks on **any** child — including ones added dynamically later — because the click always bubbles up to the parent.

---

## 28. Promises

A **Promise** is an **object**, introduced in **ES6**. It's a **placeholder** for a value that will be available in the future — used to handle the eventual **success or failure** of an **asynchronous** operation.

> Mental model: *"I don't have the result right now, but I will give it to you later."*

### The 3 States of a Promise

| State | Meaning |
|---|---|
| **Pending** | Still waiting — initial state |
| **Fulfilled** | Operation succeeded |
| **Rejected** | Operation failed |

### Creating a Promise

```js
let promise1 = new Promise((resolve, reject) => {
  // resolve(value)  → marks the promise as fulfilled
  // reject(error)   → marks the promise as rejected
});
```
- The `Promise` constructor takes **one callback function**, which itself receives **2 parameters**: `resolve` and `reject`.

```js
let p1 = new Promise((resolve, reject) => {
  let a = 10;
  if (a === 10) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});
```

**Direct resolve (shortcut, no executor logic needed):**
```js
Promise.resolve("Biryani Ordered");
Promise.reject("Paneer Ordered");
```

### Handling a Promise — `.then()` and `.catch()`

```js
p1.then((msg) => {
  console.log(msg);      // runs if the promise resolves
}).catch((err) => {
  console.log(err);      // runs if the promise rejects
});
```

**With `setTimeout` inside (simulating a delayed operation):**
```js
let p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Resolved");
  }, 200);
});

p2.then((msg) => {
  console.log(msg);
}).catch((err) => {
  console.log(err);
});
```

### Promise Static Methods (4 methods)

| Method | Behavior |
|---|---|
| `Promise.any([...])` | Returns the **first resolved/fulfilled** promise. Throws an error only if **all** are rejected. |
| `Promise.all([...])` | Returns an array of results **only if all** promises resolve. If **any one rejects**, immediately returns/throws that first rejection. |
| `Promise.allSettled([...])` | Waits for **all** promises to settle (resolve or reject) and returns an array of objects describing the **status** (`fulfilled`/`rejected`) and value/reason of **each**. |
| `Promise.race([...])` | Returns whichever promise **settles first** — resolved or rejected, irrespective of status. |

```js
let biryani  = Promise.resolve('Biryani Ordered');
let chicken65 = Promise.resolve('Chicken 65 ordered');
let paneer   = Promise.reject('Paneer order failed');

// any() — first RESOLVED
Promise.any([biryani, chicken65, paneer])
  .then((msg) => console.log(msg))   // "Biryani Ordered"
  .catch((err) => console.log(err));

// all() — fails fast on first rejection
Promise.all([biryani, chicken65, paneer])
  .then((msgs) => console.log(msgs))
  .catch((err) => console.log(err)); // "Paneer order failed"

// allSettled() — waits for everything, reports status of each
Promise.allSettled([biryani, chicken65, paneer])
  .then((results) => console.log(results));
  // [{status:'fulfilled', value:'Biryani Ordered'}, ..., {status:'rejected', reason:'Paneer order failed'}]

// race() — first to SETTLE, resolved or rejected
Promise.race([biryani, chicken65, paneer])
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
```

---

## 29. async / await

`async` and `await` are a **pair of keywords**, introduced in **ES6**, used to overcome messy **promise chaining** and make asynchronous code look and behave like synchronous code.

- **`async`** — makes a function asynchronous. An `async` function **always returns a Promise** automatically — even a plain return value gets auto-wrapped inside a Promise.
- **`await`** — pauses execution and waits until the Promise **settles** (resolves or rejects) **without blocking the main thread**. Lets you extract the resolved value directly, without `.then()` chaining.
- They **must be used together** — `await` is only valid inside an `async` function.
- The code **after** an `await` is scheduled to continue as a **microtask** once the awaited promise settles.

```js
let fetchData = async () => {
  let response = await fetch("URL");
  let finalData = await response.json();
  console.log(finalData);
};
fetchData();
```

**Error handling with `try...catch`:**
```js
let fetchData = async () => {
  try {
    let response = await fetch("URL");
    let finalData = await response.json();
    console.log(finalData);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
```

> **Why async/await over `.then()` chains:** it improves readability, simplifies promise handling, and makes error handling cleaner (one `try/catch` block instead of scattered `.catch()`s).

---

## 30. fetch()

`fetch()` is a built-in browser method, introduced in **ES6**, used to make network requests — commonly used to extract data from an API for testing/consuming.

- It **returns a Promise**.
- Before ES6, `XMLHttpRequest` (XHR) was used to make API calls — verbose and callback-heavy. `fetch()` replaced it with a cleaner, promise-based syntax and it's why every page used to fully **refresh** after every API call/POST before AJAX-style requests became common.

**Using `.then()` chaining:**
```js
let fetchData = fetch("URL");

fetchData.then((response) => {
  console.log(response);
  return response.json();       // parses the response body as JSON — also returns a Promise
}).then((finalData) => {
  console.log(finalData);
}).catch((error) => {
  console.error(error);
});
```

**Using `async/await` (cleaner):**
```js
let fetchData = async () => {
  let response = await fetch("URL");
  let finalData = await response.json();
  console.log(finalData);
};
fetchData();
```

### Promise Chaining

Using multiple `.then()` blocks back-to-back is called **Promise Chaining**. It quickly becomes hard to read/maintain for nested async steps — this is **not recommended** for complex flows. `async`/`await` exists specifically to overcome this.

---

## 31. Event Loop: Microtask vs Macrotask Queue

JavaScript is **single-threaded and synchronous**, so it needs a mechanism to handle async callbacks (`setTimeout`, Promises, fetch, etc.) without blocking. That's the job of the **Event Loop**, which checks task **priority** for execution — synchronous code first, then queued async callbacks.

**Execution priority order:**
1. **Synchronous code** — always runs first, completely, top to bottom (the call stack).
2. **Microtask queue** — runs next. Comes from: **Promises** (`.then`/`.catch`/`.finally`, `async/await` continuations).
3. **Macrotask queue** — runs last (lower priority than microtasks). Comes from: `setTimeout`, `setInterval`.

> **Rule of thumb:** the entire microtask queue is fully drained **before** the event loop picks even a single macrotask — so a `Promise.resolve().then()` will always run before a `setTimeout(fn, 0)`, even though the timeout has "0" delay.

```js
console.log("1");                              // sync
setTimeout(() => console.log("2 - macrotask"), 0);
Promise.resolve().then(() => console.log("3 - microtask"));
console.log("4");                              // sync

// Output order: 1, 4, 3 - microtask, 2 - macrotask
```

---

## 32. ES6 Features: Destructuring, Spread & Rest

### Destructuring

A concise way to **extract values from an array or properties from an object** and assign them directly to variables.

**Array destructuring:**
```js
let arr = [1, 2, 3];
let [a, b, c] = arr;
// a = 1, b = 2, c = 3

// Nested arrays:
let arr2 = [10, [20, [30], 40], 50];
let [a1, [b1, [c1], d1], e1] = arr2;
// a1=10, b1=20, c1=30, d1=40, e1=50
```

**Object destructuring:**
```js
let std = {
  name: 'Sourabh',
  phn: 12345,
  age: 21,
  add: { state: 'MP', city: 'Indore' },
  skills: ['Java', 'Python']
};

// Keys MUST match property names exactly (order doesn't matter, unlike arrays)
let { name, skills, addr: { state } } = std;
```

### Spread Operator (`...`)

Used to **expand** the elements of an array or the properties of an object **into** a new array or object. Used on the **right-hand side** (source being expanded).

```js
let combined = [...arr1, ...arr2];    // merges two arrays

let obj3 = { ...obj1, ...obj2 };      // merges two objects
// If keys overlap, the LATER spread's properties override earlier ones.
// A key present in the old object but absent in the new one is kept as-is.
```

### Rest Operator (`...`)

Used to **collect** the remaining elements/properties into a **new array or object**. Looks identical to spread (`...`) but works in the **opposite direction** — used on the **left-hand side** (destination gathering leftovers).

```js
let arr = [10, 20, 30, 40, 50];
let [a, b, c, ...rest] = arr;
// a=10, b=20, c=30, rest=[40, 50]
```
- `...rest` always collects into an **array** (for arrays) or **object** (for objects).
- The rest element must be **last** — you can't have anything after it in the destructuring pattern.
- The rest variable name isn't fixed — can be any valid identifier.

> **Rest vs Spread — quick distinction:** **Rest** is always on the **left side** (collecting/gathering). **Spread** is always on the **right side** (expanding/unpacking).

---

## 33. Shallow Copy vs Deep Copy

### Shallow Copy

A concept/technique used to create a **duplicate copy** of a non-primitive (object/array), so that modifying the copy does **not** affect the original — **but only at the top (first) level.**

```js
let a = [1, 2, 3];
let b = [...a];       // shallow copy via spread
b.push(4);
console.log(a);        // [1, 2, 3]     — original untouched
console.log(b);        // [1, 2, 3, 4]
```

> ⚠️ **Shallow copy does NOT work for nested structures.** If the array/object contains a **nested** object/array inside it, that nested part is copied **by reference** — modifying the nested part in the copy **will** affect the original too.

### Deep Copy

Used to create a **duplicate copy** especially for **nested** structures — modifying any level (including nested objects/arrays) in the copy does **not** affect the original at all. Works for both arrays and objects.

**Method 1 — using `JSON.stringify()` + `JSON.parse()`:**
```js
let orgObj = { name: "Manoj Bhai", addr: { city: "Bhopal" } };

let stringify = JSON.stringify(orgObj);   // converts JS object → JSON string
let deepCopy = JSON.parse(stringify);      // converts JSON string → back to a JS object (new reference)

deepCopy.name = "Manoj Sir";
deepCopy.addr.city = "Bhopal";  // modifying nested value only affects the copy
```
> **Drawbacks of the JSON method:** `undefined` values and `Date` objects are removed/converted to strings incorrectly; **functions are also removed entirely** (JSON has no concept of a function).

**Method 2 — using `structuredClone()`** *(modern, preferred — no drawbacks of JSON method for most data types):*
```js
let strClone = structuredClone(orgObj); // returns a new, fully independent object
strClone.name = "Manoj";
strClone.addr.city = "Bhopal";
```
> `structuredClone()` throws an error if the object/array contains a **function** — it can't clone functions either, but it correctly handles `Date`, `Map`, `Set`, nested structures, etc. (unlike the JSON method).

**JS Object vs JSON (quick comparison):**

| | JS Object | JSON |
|---|---|---|
| Value types | Any JS value | Only **string** values (after stringify) |
| Keys | Any valid identifier | **Key & value both must be strings** |
| Portability | JS-specific | Language-independent (used for data exchange) |
| Related methods | — | `JSON.stringify()`, `JSON.parse()` |

---

## 34. Remaining JS Concepts

**Template Literals / String Interpolation** — backtick-delimited strings (`` ` ``) that allow embedded expressions via `${}`, and support multi-line strings without `\n`.
```js
let name = "Sourabh";
console.log(`Hello ${name}, welcome!`); // string interpolation
```

**Optional Chaining (`?.`)** — safely access deeply nested object properties without throwing an error if an intermediate property is `null`/`undefined`.
```js
let user = {};
console.log(user?.address?.city); // undefined, no error thrown
```

**Nullish Coalescing Operator (`??`)** — returns the right-hand value **only** when the left-hand value is `null` or `undefined` (unlike `||`, which also treats `0`, `""`, `false` as falsy).
```js
let count = 0;
console.log(count || 10); // 10  → 0 is falsy, so || falls through (often a bug!)
console.log(count ?? 10); // 0   → 0 is not null/undefined, so ?? keeps it
```

**`Set`** — a collection of **unique** values (no duplicates allowed). Useful for de-duplicating arrays.
```js
let s = new Set([1, 2, 2, 3]);
console.log(s);           // Set(3) {1, 2, 3}
console.log([...s]);      // [1, 2, 3] — back to array
```

**`Map`** — a collection of key-value pairs (like an object), but **keys can be any type** (not just strings), and it maintains insertion order.
```js
let m = new Map();
m.set("name", "Rahul");
m.set(1, "one");
console.log(m.get("name")); // "Rahul"
```

**Modules (`import` / `export`)** — split JS code across multiple files.
```js
// utils.js
export function add(a, b) { return a + b; }
export default function greet() { console.log("Hi"); }

// main.js
import greet, { add } from './utils.js';
```

**`"use strict"`** — enables strict mode, which catches common coding mistakes (like assigning to an undeclared variable) by throwing errors instead of failing silently.

**Autoboxing** — JavaScript automatically **wraps a primitive value** (string, number, boolean) in a temporary **wrapper object** when you call a method on it, so you can use methods like `.toUpperCase()` on a plain string primitive. The wrapper object is discarded right after the operation.
```js
let str = "hello";
console.log(str.toUpperCase()); // JS temporarily "boxes" str into a String object to call this method
```

**Generators (brief overview)** — functions that can pause and resume execution using `function*` and `yield`, producing a sequence of values on demand instead of all at once.
```js
function* gen() {
  yield 1;
  yield 2;
}
let g = gen();
console.log(g.next().value); // 1
console.log(g.next().value); // 2
```

**Local Storage & Session Storage** — browser-provided key-value storage (part of the Web Storage API, similar in spirit to BOM):
| | `localStorage` | `sessionStorage` |
|---|---|---|
| Persistence | Survives even after closing the browser | Cleared when the tab/browser closes |
| Scope | Shared across all tabs of the same origin | Limited to a single tab |

```js
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"
localStorage.removeItem("theme");
```

---

## 35. Node.js Basics

**Node.js** is a **JavaScript runtime environment** built on Chrome's **V8 engine**, that lets JavaScript run **outside the browser** — e.g., on a server, directly on your machine's operating system.

- Before Node.js, JS could only run inside a browser (no BOM/DOM available outside one). Node.js gave JS access to the **file system, operating system, networking**, etc. — turning JS into a full backend language.
- Node.js is **single-threaded** (like browser JS) but handles concurrency using an **event loop** + **non-blocking I/O**, making it efficient for I/O-heavy tasks (APIs, servers, file operations).
- Uses the **CommonJS module system** by default (`require`/`module.exports`), though modern Node also supports ES Modules (`import`/`export`).

**Running a file:**
```bash
node app.js
```

**Core built-in modules:**
| Module | Purpose |
|---|---|
| `fs` | File system — read/write files |
| `http` | Create a basic web server |
| `path` | Work with file/directory paths |
| `os` | Get operating system info |

```js
// CommonJS module system
const fs = require('fs');
module.exports = someFunction;
```

**Creating a basic server with the built-in `http` module:**
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**`npm` (Node Package Manager)** — installed automatically with Node.js. Used to install, manage, and share reusable JS packages/libraries.
```bash
npm init -y            # creates a package.json file
npm install express    # installs a package, adds it to package.json
```

**`package.json`** — the manifest file of a Node project: lists project metadata, dependencies, and scripts (e.g. `npm start`, `npm run dev`).

---

## 36. Express.js Basics

**Express.js** is a minimal, unopinionated **web framework for Node.js**, used to build web servers and APIs quickly — without manually handling all the low-level details the raw `http` module requires (routing, request parsing, etc.).

**Installing & basic setup:**
```bash
npm install express
```
```js
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### Routing

Express lets you define **routes** — a combination of an HTTP method + a URL path — each with a handler function.

```js
app.get('/', (req, res) => {
  res.send("Home Page");
});

app.get('/about', (req, res) => {
  res.send("About Page");
});

app.post('/submit', (req, res) => {
  res.send("Form submitted");
});
```
- `req` (request) — contains info about the incoming request: URL params, query params, request body, headers.
- `res` (response) — used to send data back: `res.send()`, `res.json()`, `res.status()`.

### Middleware

A **middleware** function runs **between** the incoming request and the final route handler — used for logging, authentication, parsing request bodies, etc. It has access to `req`, `res`, and a `next()` function to pass control to the next middleware/handler.

```js
app.use(express.json()); // built-in middleware — parses incoming JSON request bodies

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // must call next() to continue to the next handler
});
```

### Route Parameters & Query Parameters

```js
// Route parameter — part of the URL path itself
app.get('/user/:id', (req, res) => {
  console.log(req.params.id); // e.g. /user/5 → "5"
});

// Query parameter — after "?" in the URL
app.get('/search', (req, res) => {
  console.log(req.query.term); // e.g. /search?term=js → "js"
});
```

### Sending JSON Responses (typical for APIs)
```js
app.get('/api/user', (req, res) => {
  res.json({ name: "Rahul", age: 25 });
});
```

> Express is the most widely used Node.js framework for building REST APIs, forming the "E" in the popular **MERN** stack (MongoDB, Express, React, Node).

---

## 37. Quick Interview Cheatsheet

- **JS created in:** 10 days, by Brendan Eich, 1995 (Netscape). Standardized as **ECMAScript** in 1997.
- **`var` vs `let` vs `const`:** scope (function/global vs block), redeclaration, TDZ.
- **`==` vs `===`:** loose (coerces types) vs strict (no coercion) — always prefer `===`.
- **`null` vs `undefined`:** intentional absence vs "not yet assigned".
- **`typeof null` is `"object"`** — famous JS quirk/bug, kept for backward compatibility.
- **Hoisting:** declarations move to top; `var` → `undefined`, `let`/`const` → TDZ (ReferenceError until initialized).
- **Closures:** inner function "remembers" outer function's variables even after outer returns.
- **`this`:** dynamic, decided by *how* a function is called. Arrow functions don't have their own `this` — they inherit it lexically.
- **`call`/`apply`/`bind`:** all control `this`. `call`/`apply` invoke immediately (comma args vs array args); `bind` returns a new function for later use.
- **`map` vs `forEach`:** `map` returns a new array (chainable); `forEach` returns `undefined` (side effects only).
- **`reduce`:** must always return the accumulator; pass `{}` as initial value to build an object result.
- **`Object.seal` vs `Object.freeze`:** seal blocks add/delete but allows update; freeze blocks everything.
- **DOM vs BOM:** DOM = the page content (tree of the HTML); BOM = the browser environment around the page (window, history, screen, location, timers).
- **`setTimeout`/`setInterval`:** browser Web APIs, not core JS — this is the entry point into async JS.
- **`getElementsBy...` vs `querySelector(All)`:** the former return a live **HTMLCollection** (no `forEach`); `querySelectorAll` returns a **NodeList** (supports `forEach`, still not a true array).
- **Event capturing vs bubbling:** capturing = parent→child (top-down); bubbling = child→parent (bottom-up, the JS default). `stopPropagation()` halts further travel in either phase.
- **Event delegation:** attach one listener to a parent, rely on bubbling — handles current AND future dynamically-added children automatically.
- **Promise states:** pending → fulfilled/rejected (settled), never both, never reversible.
- **`Promise.all` vs `allSettled` vs `race` vs `any`:** `all` fails fast on first rejection; `allSettled` always waits for every promise and reports status of each; `race` returns whichever settles first (win or lose); `any` returns the first fulfilled one, only errors if ALL reject.
- **`async`/`await`:** syntactic sugar over promises — makes async code read like sync code; always wrap in `try/catch` for error handling.
- **Event loop order:** synchronous code → microtasks (Promises) → macrotasks (`setTimeout`/`setInterval`). Microtask queue always fully empties before the next macrotask runs.
- **Spread vs Rest:** identical `...` syntax; spread **expands** (right-hand side), rest **collects** (left-hand side).
- **Shallow vs deep copy:** shallow copy (`{...obj}`/spread) only protects the top level — nested objects are still shared by reference; deep copy (`structuredClone()` or JSON stringify/parse) fully isolates nested data too.
- **Node.js:** a runtime (not a language/framework) that lets JS run outside the browser, built on V8, using an event loop for non-blocking I/O.
- **Express.js:** a minimal Node.js web framework for building servers/APIs — handles routing and middleware so you don't have to use the raw `http` module.

---

## 38. Interview Q&A — All 31 Questions, Trainer-Style

> Every answer below is built strictly from the concepts already covered in sections 1–37 of this document — nothing new is introduced. Each answer follows the same 4-step interview structure: **Definition → Why it exists / Purpose → Example → Interview Point**, with a flow diagram wherever it helps a beginner visualize the concept.

---

### Q1. What is JavaScript? What are its characteristics?

**Definition:** JavaScript is a high-level, interpreted, dynamically-typed scripting/programming language used to make web pages interactive (frontend, in the browser) and to build applications outside the browser too (backend, via Node.js).

**Why it's built this way:** It needed to run instantly inside every browser without installation or compilation — so it had to be lightweight, interpreted, and forgiving with types.

**Characteristics (§2):**
```
JavaScript
   ├── Single-threaded        → one call stack, one thing at a time
   ├── Dynamically typed      → type decided at runtime
   ├── Interpreted            → runs line by line
   ├── Synchronous by default → but LOOKS async via Event Loop + Web APIs
   ├── Loosely/weakly typed   → auto type coercion
   ├── Object-based           → pre-ES6, objects without full OOP
   └── Object-oriented        → from ES6, via `class` + prototypes
```

**Example:**
```js
console.log("122" + 2); // "1222" → coerced to string
console.log("122" - 2); // 120    → coerced to number
```

**Interview point:** JavaScript and Java are **unrelated** — the name was purely a 1995 marketing decision (§3). Don't confuse the two.

---

### Q2. What is Hoisting? (with example)

**Definition:** Hoisting is JS moving variable and function **declarations** to the top of their scope during the compilation/memory-creation phase, before any code actually runs. Only declarations are hoisted — never the assigned value.

**Why it happens:** Every execution context has a "memory creation phase" that scans the code first and reserves space for every `var`, `let`, `const`, and function — that's what makes hoisting possible (§8, §17).

**Flow diagram:**
```
Code written by you:              What the JS engine does first (Memory phase):
─────────────────────             ──────────────────────────────────────────────
console.log(a);                   var a = undefined      ← reserved in advance
var a = 10;                       let b  = <TDZ>          ← reserved but locked
console.log(b);                   const c = <TDZ>         ← reserved but locked
let b = 20;
                                   THEN Execution phase runs top to bottom:
                                   console.log(a) → undefined
                                   a = 10
                                   console.log(b) → ReferenceError (still in TDZ)
                                   b = 20
```

**Example:**
```js
console.log(a); // undefined  (var is hoisted, pre-filled with undefined)
var a = 10;

console.log(b); // ReferenceError (let is hoisted but stuck in TDZ)
let b = 20;
```

**Interview point:** Hoisting does **not** mean JS physically rearranges your code — it means declarations are registered in memory before execution starts (§8).

---

### Q3. What is TDZ (Temporal Dead Zone)?

**Definition:** TDZ is the window of time between a `let`/`const` variable being hoisted (declared) and the line where it's actually initialized. Trying to access it in that window throws a `ReferenceError`.

**Why it exists:** It stops you from accidentally using a `let`/`const` variable before you meant to define it — `var` doesn't protect against this (it silently gives `undefined` instead).

**Flow diagram:**
```
Scope starts
     │
     │   ← TDZ (variable exists in memory but is "locked")
     │      accessing it here = ReferenceError
     ▼
let x = 10;   ← declaration line — TDZ ends HERE
     │
     ▼
x is now safely accessible
```

**Example:**
```js
console.log(x); // ❌ ReferenceError — still in TDZ
let x = 10;
```

**Interview point:** TDZ applies **only** to `let` and `const`. `var` has no TDZ — it's auto-initialized to `undefined` the moment it's hoisted (§8).

---

### Q4. Difference between `var`, `let`, and `const`?

**Definition:** Three different keywords for declaring variables, each with different scope and mutability rules (§6).

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function/Global | Block | Block |
| Redeclare | ✅ Allowed | ❌ Error | ❌ Error |
| Reassign | ✅ Allowed | ✅ Allowed | ❌ Error |
| Must initialize immediately | No | No | ✅ Yes |
| Hoisting behavior | `undefined` | TDZ | TDZ |

**Example:**
```js
var a = 10; var a = 20;   // ✅ redeclare allowed
let b = 10; b = 20;       // ✅ reassign allowed, redeclare NOT allowed
const c = 10;              // ❌ cannot reassign c later
```

**Interview point (trap):** `const` locks the **binding** (the variable name), not the value's contents.
```js
const arr = [1, 2, 3];
arr.push(4); // ✅ allowed — mutating contents, not reassigning the variable
```

---

### Q5. Difference between `==` and `===`?

**Definition:** `==` is loose equality — it converts types before comparing. `===` is strict equality — it compares both **value and type**, with zero conversion (§9).

**Flow diagram:**
```
5 == "5"
   │
   ▼
Convert "5" (string) → 5 (number)   ← coercion happens
   │
   ▼
5 == 5 → true

5 === "5"
   │
   ▼
No conversion — types differ (number vs string) → false immediately
```

**Example:**
```js
console.log(5 == "5");  // true  → coercion
console.log(5 === "5"); // false → no coercion, types differ
```

**Interview point:** Always prefer `===`/`!==` in real code — `==` produces surprising, hard-to-debug results (§9).

---

### Q6. Difference between `null` and `undefined`?

**Definition:** `undefined` means a variable has been declared but **never assigned** a value (JS's own default). `null` means the developer **intentionally** set "no value" (§9).

**Example:**
```js
let x;
console.log(x); // undefined — JS's own default, nobody assigned anything

let y = null;
console.log(y); // null — the developer deliberately chose "empty"

console.log(null == undefined);  // true  → both are "kinds of empty" (loose)
console.log(null === undefined); // false → different types
console.log(typeof null);        // "object" — a long-standing JS quirk
```

**Interview point:** `typeof null` returning `"object"` is a famous historical bug in JS that was never fixed for backward compatibility — memorize this one, it's asked constantly.

---

### Q7. What is an arrow function, HOF, callback, and closure? (with example)

**Definitions (§13–16):**
- **Arrow function** — short function syntax `() => {}` with **no own `this`**; it borrows `this` from its surrounding scope.
- **HOF (Higher Order Function)** — a function that takes another function as an argument, or returns a function. (`map`, `filter`, `reduce`, `forEach` are all HOFs.)
- **Callback** — a function passed into another function, to be run later.
- **Closure** — an inner function that keeps access to its outer function's variables, even after the outer function has already finished running.

**How they relate:**
```
HOF        → a function that RECEIVES or RETURNS another function
   │
   └── Callback → the function you PASS IN to a HOF (or any function)
                       │
                       └── Closure → happens when that inner function
                                      "remembers" outer variables
```

**Example (all four in one):**
```js
function outer() {                 // outer function
  let count = 0;                   // variable that will be "remembered"
  return function inner() {        // inner function → this IS the closure
    count++;
    console.log(count);
  };
}

const counter = outer();  // outer() has already finished running here!
counter(); // 1
counter(); // 2   → `count` is still remembered — that's the closure at work
```

**Interview point:** A single function can be a callback AND form a closure at the same time, depending on how it's used (§16).

---

### Q8. What is an array?

**Definition:** A non-primitive, ordered, **dynamic** (resizable) collection of values — homogeneous or heterogeneous — internally stored as an object, index starting from `0` (§19).

**Example:**
```js
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]);     // "Apple"
console.log(fruits.length); // 3
```

**Interview point:** Arrays are **mutable** — most common methods (`push`, `pop`, `splice`, `sort`, `reverse`) change the original array directly (§19).

---

### Q9. Difference between `slice()` and `splice()`?

**Definition:** `slice(start, end)` is **non-mutating** — it returns a **new** array (a copy of a portion, end excluded); the original stays untouched. `splice(start, deleteCount, ...items)` is **mutating** — it removes/inserts elements directly inside the **original** array (§19).

**Flow diagram:**
```
slice(1, 3)  → COPIES a portion out, original array unchanged  → 📄 new array
splice(1, 2) → CUTS a portion directly out of the original      → ✂️ original array changes
```

**Example:**
```js
let arr = [10, 20, 30, 40];

let sliced = arr.slice(1, 3);         // [20, 30]  — new array
console.log(arr);                     // [10, 20, 30, 40] — untouched

let removed = arr.splice(1, 2, 99);   // removes 20,30 and inserts 99
console.log(arr);                     // [10, 99, 40] — original CHANGED
console.log(removed);                 // [20, 30] — what got removed
```

**Interview point:** If you need to preserve the original array, use `slice()`. If you intentionally want to edit the array in place, use `splice()`.

---

### Q10. Difference between `split()` and `join()`?

**Definition:** `split(separator)` is a **string** method that breaks a string into an **array**. `join(separator)` is an **array** method that combines elements back into a single **string** (§18–19).

**Flow diagram:**
```
"a-b-c"  ──split('-')──▶  ["a","b","c"]
["a","b","c"]  ──join('-')──▶  "a-b-c"
```

**Example:**
```js
"JavaScript is easy".split(" ");        // ["JavaScript", "is", "easy"]
["JavaScript", "is", "easy"].join(" "); // "JavaScript is easy"
```

**Interview point:** They're exact inverses of each other — remember the direction: string → array (`split`), array → string (`join`).

---

### Q11. `filter()` vs `map()` vs `reduce()`? (with example)

**Definition (§19):**
- `map()` — **transforms** every element, returns a new array of the **same length**.
- `filter()` — **selects** elements that pass a condition, returns a new array that may be **shorter**.
- `reduce()` — **combines** every element into a **single final value**.

**Flow diagram:**
```
[1, 2, 3, 4]

map(x => x*2)      →  [2, 4, 6, 8]        (same length, every value transformed)
filter(x => x%2==0)→  [2, 4]              (shorter, only matching values kept)
reduce((a,c)=>a+c) →  10                  (collapsed into ONE value)
```

**Example:**
```js
let nums = [1, 2, 3, 4];

nums.map(n => n * 2);            // [2, 4, 6, 8]
nums.filter(n => n % 2 === 0);   // [2, 4]
nums.reduce((acc, n) => acc + n, 0); // 10
```

**Interview point:** `reduce()` must **always return the accumulator** in its callback — forgetting the `return` breaks the whole chain (§19).

---

### Q12. `map()` vs `forEach()`?

**Definition:** `map()` returns a **new array** with transformed values (chainable). `forEach()` returns `undefined` — it's used purely for side effects like logging or DOM updates, with **no** returned array (§19).

**Example:**
```js
let nums = [1, 2, 3];

let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

let result = nums.forEach(n => n * 2);
console.log(result); // undefined
```

**Interview point:** If you need a transformed array back, use `map()`. If you just want to "do something" for every element (no returned data needed), use `forEach()`.

---

### Q13. Ways to create an object?

**Definition (§20):** JavaScript offers 4 ways to create an object:
```
1. Object literal        →  { name: "Rahul" }               (simplest, most common)
2. new Object()          →  let obj = new Object();          (rarely used)
3. Constructor function  →  function Person(){ this.x=1 }    (pre-ES6 pattern)
4. ES6 class             →  class Person { constructor(){} } (modern, clean)
```

**Example:**
```js
// literal
let person = { name: "Rahul" };

// constructor function
function Person(name) { this.name = name; }
let p1 = new Person("Rahul");

// class
class PersonClass {
  constructor(name) { this.name = name; }
}
let p2 = new PersonClass("Rahul");
```

**Interview point:** `new` internally does 4 things: creates an empty object → binds `this` to it → assigns the passed arguments as properties → returns the object automatically (§20).

---

### Q14. `this` keyword — all behaviors?

**Definition:** `this` refers to the **current object** calling the function. Its value depends **entirely on how the function is called**, not where it's written (§20).

**Decision flow diagram:**
```
How was the function called?
        │
        ├── obj.method()          → this = obj
        │
        ├── plain function call   → this = window (global object)
        │
        ├── new Constructor()     → this = the newly created object
        │
        ├── fn.call/apply/bind()  → this = whatever you explicitly passed
        │
        └── arrow function        → this = whatever `this` was in the
                                      SURROUNDING (enclosing) scope
                                      (arrow fns have NO `this` of their own)
```

**Example:**
```js
let std = {
  fn: "Sourabh",
  greet: function () { console.log(this); } // std object
};
std.greet(); // this = std

function demo() { console.log(this); } // window — no owning object
demo();

let std2 = {
  fn: "Sourabh",
  arrow: () => { console.log(this); } // this = window, NOT std2
};
```

**Interview point:** For a normal function ask "how was it called?" — for an arrow function ask "what was `this` in the code AROUND it?" (§20).

---

### Q15. `call()`, `apply()`, `bind()`?

**Definition:** All three let you explicitly control what `this` refers to inside a function (§21).

**Flow diagram:**
```
call(thisArg, a, b, c)     → runs NOW,  args passed one by one
apply(thisArg, [a, b, c])  → runs NOW,  args passed as an array
bind(thisArg, a, b)        → does NOT run now — returns a NEW function to call LATER
```

**Example:**
```js
function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}
let user = { name: "Anita" };

introduce.call(user, "Delhi", "India");   // runs immediately
introduce.apply(user, ["Delhi", "India"]); // runs immediately, args as array

let laterFn = introduce.bind(user, "Delhi", "India");
laterFn(); // runs whenever YOU call it
```

**Interview point:** `bind()` is the only one of the three that does **not** invoke the function right away — it hands you back a ready-to-use function for later (§21).

---

### Q16. Generate a 4-digit OTP.

**Definition:** Uses `Math.random()` (gives a decimal between 0 inclusive and 1 exclusive) combined with `Math.floor()` to land inside a fixed numeric range (§22).

**Example:**
```js
let otp = Math.floor(Math.random() * 9000 + 1000); // range: 1000–9999
console.log(otp);
```

**How the math works:**
```
Math.random()            → 0 up to (but never reaching) 1
Math.random() * 9000     → 0 up to (but never reaching) 9000
+ 1000                   → 1000 up to (but never reaching) 10000
Math.floor(...)          → rounds down → final range: 1000 to 9999
```

**Interview point:** The same pattern generalizes: `Math.floor(Math.random() * (max - min + 1) + min)` gives any custom OTP length (§22).

---

### Q17. `setTimeout()` vs `setInterval()`? (classic loop/event-loop question)

**Definition:** `setTimeout(cb, delay)` runs the callback **once**, after the delay. `setInterval(cb, interval)` runs the callback **repeatedly** until `clearInterval()` stops it. Both are BOM/Web APIs, not core JS — they go into the **macrotask** queue (§24, §31).

**Classic interview question — what logs first?**
```js
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
```
**Flow diagram (Event Loop priority, §31):**
```
Step 1: Run ALL synchronous code first   → logs "1", "3"
Step 2: Drain the microtask queue        → (none here)
Step 3: THEN run macrotasks (setTimeout) → logs "2"

Output: 1, 3, 2   ← NOT 1, 2, 3 — setTimeout(fn, 0) does NOT mean "run instantly"
```

**The classic `var` vs `let` loop trap:**
```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Logs: 4, 4, 4 → var is function-scoped; by the time the callbacks
// finally run, the loop has already finished and i is 4 for all of them.

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Logs: 1, 2, 3 → let is block-scoped, so each loop iteration gets its
// OWN fresh `i`, captured correctly by that iteration's closure.
```

**Interview point:** This question tests 3 things at once — closures, `var` vs `let` scoping, and the event loop's macrotask queue (§16, §6, §31).

---

### Q18. What is the DOM? (all — including form validation)

**Definition:** The DOM (Document Object Model) is a tree-like object representation of an HTML document, created by the browser, giving JS complete access to read and modify the page (§25).

**Flow diagram — the DOM tree:**
```
document
   └── html
         ├── head → meta, meta, title
         └── body → h1, p, script  (siblings of each other)
```

**Selecting elements (§25):**
```
document.getElementById('id')            → single element
document.getElementsByClassName('class') → HTMLCollection (no forEach)
document.getElementsByTagName('tag')     → HTMLCollection (no forEach)
document.querySelector('css')            → first matching element
document.querySelectorAll('css')         → NodeList (supports forEach)
```

**Manipulating elements (§25):**
```
Create  → document.createElement("p")
Read    → el.innerText / el.innerHTML / el.textContent
Update  → el.setAttribute(), el.style.color, el.classList.add()
Insert  → parent.append(el) / parent.appendChild(el)
Delete  → el.remove()
```

**Form validation example (built from DOM selectors + events + preventDefault, §25–26):**
```js
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();                       // stop the default page reload
  let email = document.getElementById("email").value.trim();

  if (email === "") {
    alert("Email is required");             // dialog method
    return;
  }
  console.log("Form is valid");
});
```

**Interview point:** DOM is the page **content**, while BOM is everything **around** the page (window, history, screen, location, timers) — they're different but linked, since `document` is technically reached through `window.document` (§24–25).

---

### Q19. What are events? What is `addEventListener()`?

**Definition:** An event is an action triggered by the browser or the user — click, keypress, form submit, page load, etc. (§26).

**3 ways to attach an event, and why one wins:**
```
1. HTML attribute (onclick="...")   → overrides itself if attached twice ❌
2. DOM property (el.onclick = fn)   → also overrides itself if reassigned ❌
3. addEventListener(type, callback) → supports MULTIPLE listeners ✅ (most recommended)
```

**Example:**
```js
const button = document.getElementById("btn");

button.addEventListener("click", function (e) {
  console.log("Button clicked");
  console.log(e.target); // the actual element that triggered it
});
```

**Interview point:** The callback always receives an **event object** (`e`), which controls default behavior (`e.preventDefault()`) and tells you what triggered the event (`e.target`) (§26).

---

### Q20. Event Propagation & Event Delegation?

**Definition:** Event Propagation is the full journey an event takes through the DOM: **capturing phase → target → bubbling phase**. Event Delegation is a technique that uses bubbling to handle events for many children with just **one** listener on their parent (§27).

**Flow diagram:**
```
              Capturing (top → down)
   DOM ──────────────────────────▶ target
   (parent)                       (child clicked)
   DOM ◀────────────────────────── target
              Bubbling (down → up, JS DEFAULT)
```

**Example — propagation:**
```js
parent.addEventListener("click", () => console.log("parent"));
child.addEventListener("click", () => console.log("child"));

// Clicking the child button logs:
// "child"  → then →  "parent"     (because it bubbles UP by default)
```

**`stopPropagation()`** halts the event mid-journey, in either phase:
```js
child.addEventListener("click", (e) => {
  e.stopPropagation(); // event won't continue bubbling up to "parent"
});
```

**Example — delegation:**
```js
// ONE listener on the parent handles clicks on EVERY <li>, even future ones
list.addEventListener("click", (e) => {
  if (e.target.matches("li")) console.log(e.target.textContent);
});
```

**Interview point:** Without delegation, every new dynamically-added child needs its own manually-attached listener. With delegation, new children are automatically handled — because their click still bubbles up to the same parent (§27).

---

### Q21. What are Promises? Their states and methods, with example?

**Definition:** A Promise is an object (ES6) representing the eventual result — success or failure — of an asynchronous operation. Mental model: *"I don't have the result right now, but I will give it to you later."* (§28)

**State flow diagram:**
```
                 ┌────────────┐
   new Promise ─▶│  Pending   │  (still waiting — initial state)
                 └─────┬──────┘
              resolve()│reject()
             ┌─────────┴─────────┐
             ▼                   ▼
      ┌────────────┐      ┌────────────┐
      │ Fulfilled  │      │  Rejected  │
      └────────────┘      └────────────┘
      (settled — never goes back to Pending, never flips between the two)
```

**Example:**
```js
let p = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Done") : reject("Failed");
});

p.then(msg => console.log(msg))    // handles fulfilled
 .catch(err => console.log(err));  // handles rejected
```

**Static methods (§28):**
```
Promise.all([...])        → waits for ALL, fails fast on first rejection
Promise.any([...])        → returns first FULFILLED, errors only if ALL reject
Promise.allSettled([...]) → waits for ALL, reports status of EACH (never rejects)
Promise.race([...])       → returns whichever SETTLES first (win or lose)
```

**Interview point:** A Promise settles **once** — it can never move from fulfilled back to pending, or flip from fulfilled to rejected (§28).

---

### Q22. What is Promise Chaining, and how do you overcome its downsides?

**Definition:** Promise Chaining is linking multiple `.then()` blocks back-to-back to run sequential async steps (§30).

**Flow diagram:**
```
fetch(url)
   .then(response  ➜ response.json())     ← returns a NEW promise
   .then(finalData ➜ console.log(finalData))
   .catch(error    ➜ console.log(error))
```

**The downside:** for deeply nested or complex flows, stacking many `.then()`s becomes hard to read and maintain.

**How it's overcome:** `async`/`await` lets the exact same sequential logic be written to **look and behave like synchronous code**, with one clean `try/catch` block instead of scattered `.catch()`s (§29–30).

```js
// promise chaining version
fetch("URL").then(r => r.json()).then(d => console.log(d)).catch(e => console.log(e));

// async/await version — same result, easier to read
async function getData() {
  try {
    let r = await fetch("URL");
    let d = await r.json();
    console.log(d);
  } catch (e) {
    console.log(e);
  }
}
```

**Interview point:** Async/await doesn't replace Promises — it's **syntactic sugar built on top of them** (§29).

---

### Q23. What are `async`/`await`? What is `fetch()`? Syntax & example?

**Definitions (§29–30):**
- `async` — marks a function as asynchronous; it **always returns a Promise**, even if you just `return` a plain value.
- `await` — pauses execution inside an `async` function until a Promise **settles**, without blocking the rest of the page (the main thread).
- `fetch(url)` — a built-in browser method that makes a network request and **returns a Promise**; commonly used to call APIs.

**Flow diagram:**
```
async function fetchData() {
  let response = await fetch("URL");     ← pauses HERE until the network reply arrives
  let data = await response.json();      ← pauses HERE until the body is parsed
  console.log(data);                     ← only runs after both awaits settle
}
```

**Example (with error handling):**
```js
let fetchData = async () => {
  try {
    let response = await fetch("URL");
    let finalData = await response.json();
    console.log(finalData);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
```

**Interview point:** `await` only pauses the **current async function** — it does NOT freeze the whole browser/page; other code keeps running because JS is still single-threaded and using the event loop underneath (§29).

---

### Q24. What are the Spread and Rest operators?

**Definition:** Both use `...`, but work in opposite directions (§32).

**Flow diagram:**
```
Spread  ...  →  EXPANDS/unpacks values OUT      (used on the right-hand side)
Rest    ...  →  COLLECTS values IN               (used on the left-hand side)

let combined = [...arr1, ...arr2];         ← spread: unpack arr1, arr2 into a new array
let [a, b, ...rest] = [1, 2, 3, 4, 5];     ← rest: collect leftovers into `rest`
```

**Example:**
```js
// Spread — expanding
let arr1 = [1, 2], arr2 = [3, 4];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

let obj1 = { x: 1 }, obj2 = { y: 2 };
let merged = { ...obj1, ...obj2 }; // { x: 1, y: 2 }

// Rest — collecting
let [first, ...remaining] = [10, 20, 30];
console.log(first);     // 10
console.log(remaining); // [20, 30]
```

**Interview point:** The rest element must always come **last** in a destructuring pattern — you can't have anything after it (§32).

---

### Q25. What is Destructuring?

**Definition:** A concise syntax to extract values from an **array** (by position) or properties from an **object** (by matching key name), and assign them directly to variables in one line (§32).

**Example:**
```js
// Array destructuring — order matters
let [a, b, c] = [10, 20, 30];
console.log(a, b, c); // 10 20 30

// Object destructuring — key NAME matters, not order
let { name, age } = { name: "Rahul", age: 22 };
console.log(name, age); // Rahul 22
```

**Interview point:** In array destructuring, position decides which variable gets which value. In object destructuring, the variable name **must match the property key** exactly (§32).

---

### Q26. Shallow Copy vs Deep Copy?

**Definition:** Shallow copy duplicates only the **top level** of an object/array — nested objects inside are still shared by reference. Deep copy fully isolates **every level**, including nested structures (§33).

**Flow diagram:**
```
SHALLOW COPY:
original = { name: "A", address: { city: "Indore" } }
copy = { ...original }

copy.name = "B"              → original.name still "A"   ✅ safe
copy.address.city = "Bhopal" → original.address.city ALSO becomes "Bhopal"  ❌ shared!

                original                    copy
                ┌─────────┐              ┌─────────┐
                │ name: A │              │ name: B │   ← independent
                │ address ┼──┐        ┌──┼ address │   ← SAME object in memory!
                └─────────┘  │        │  └─────────┘
                              ▼        ▼
                          { city: "Bhopal" }  ← shared reference


DEEP COPY (via structuredClone or JSON methods):
copy.address.city = "Bhopal" → original.address.city STAYS "Indore"  ✅ fully independent
```

**Example:**
```js
let original = { name: "A", address: { city: "Indore" } };

let shallow = { ...original };
shallow.address.city = "Bhopal";
console.log(original.address.city); // "Bhopal" ❌ affected original!

let deep = structuredClone(original);
deep.address.city = "Pune";
console.log(original.address.city); // "Indore" ✅ untouched
```

**Interview point:** `JSON.parse(JSON.stringify(obj))` is the older deep-copy trick, but it drops `undefined` values and functions and can mishandle `Date` — `structuredClone()` is the modern, safer choice (§33).

---

### Q27. What are the Dialog Methods?

**Definition:** Browser/BOM methods for simple built-in popups that interact with the user (§24).

```
alert(message)          → shows a message, no return value, blocks until dismissed
prompt(message, def?)   → takes text input, returns a STRING or null if cancelled
confirm(message)        → asks yes/no, returns true (OK) or false (Cancel)
```

**Example:**
```js
alert("Look here!");

let name = prompt("Enter your name"); // always a string, or null

let ok = confirm("Are you sure?"); // true / false
if (ok) console.log("User confirmed");
```

**Interview point:** `prompt()` **always** returns a string — if you need a number, wrap it: `Number(prompt("Enter number"))` (§24).

---

### Q28. What is String Interpolation?

**Definition:** Using template literals (backtick strings `` ` ``) with `${expression}` syntax to embed variables/expressions directly inside a string, instead of concatenating with `+` (§34).

**Example:**
```js
let name = "Rahul", age = 22;

// old way — concatenation
"Hello " + name + ", age " + age;

// string interpolation — cleaner
`Hello ${name}, age ${age}`;

// expressions work too
console.log(`Sum = ${10 + 20}`); // "Sum = 30"
```

**Interview point:** Template literals also support **multi-line strings** natively, without needing `\n` (§34).

---

### Q29. Difference between Java and JavaScript?

**Definition:** Unrelated languages sharing a name for marketing reasons in 1995 (§3).

| Java | JavaScript |
|---|---|
| Programming language | Programming **and** scripting language |
| Strictly/statically typed | Weakly/dynamically typed |
| Runs on the JVM | Runs in a browser or Node.js |
| Compiled then interpreted | Interpreted |
| Multi-threaded | Single-threaded |

**Interview point:** The similar name is the #1 confusion in interviews — always clarify upfront that they are separate, unrelated languages (§3).

---

### Q30. What is Autoboxing?

**Definition:** JavaScript automatically wraps a primitive value (string, number, boolean) in a **temporary wrapper object** whenever you call a method on it — so a plain primitive can still use built-in methods like `.toUpperCase()`. The wrapper is discarded immediately after (§34).

**Flow diagram:**
```
"hello".toUpperCase()
       │
       ▼
JS temporarily creates a String wrapper object around "hello"
       │
       ▼
calls .toUpperCase() on that wrapper
       │
       ▼
returns "HELLO", wrapper is discarded
       │
       ▼
typeof "hello" is STILL "string" — it was never permanently boxed
```

**Example:**
```js
let str = "hello";
console.log(str.toUpperCase()); // "HELLO"
console.log(typeof str);        // "string" — still a primitive
```

**Interview point:** This is why primitives "seem" to have methods even though primitives themselves can't hold properties/methods directly (§34).

---

### Q31. What is GEC (Global Execution Context)?

**Definition:** GEC is the base/default execution context JS creates once, automatically, the moment a script starts running — before any function is even called (§17).

**Flow diagram:**
```
Script starts
     │
     ▼
Global Execution Context (GEC) created
     │
     ├── Memory/Creation phase → hoist all var (=undefined) & function declarations
     └── Execution phase       → run code top to bottom

Now, every time a function is called:
GEC ──▶ pushes a new Function Execution Context (FEC) onto the Call Stack
     ──▶ that FEC is popped off once the function finishes/returns
     ──▶ control goes back down to GEC
```

**Example:**
```js
var a = 10;                 // lives in GEC

function test() {
  let b = 20;                // lives in test()'s own FEC
  console.log(a, b);          // test() can still see `a` from GEC
}

test();
// Call Stack while test() runs:  GEC → test()
// Call Stack after test() ends:  GEC
```

**Interview point:** GEC sits at the **bottom** of the call stack for the entire lifetime of the program — it's the only execution context that's never popped off (§17).

---


*End of notes — Fundamentals through BOM, DOM, Events, Promises, async/await, ES6 features, Node.js, Express.js, and a full trainer-style interview Q&A recap with flow diagrams.*

