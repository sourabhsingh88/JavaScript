# JavaScript Interview Preparation — 31 Job-Ready Questions

> **Goal:** Understand the concept once, explain it clearly in an interview, and write a small working example when asked.

---

## Q1. What is JavaScript? What are its characteristics?

### Interview Answer

**JavaScript is a high-level, dynamically typed, interpreted/JIT-compiled, single-threaded programming language mainly used to make web pages interactive and to build applications on both the client side and server side.**

JavaScript was originally created for browsers, but today it can also run outside the browser using environments such as Node.js.

### Important characteristics

1. **High-level** — We do not manually manage memory like in C/C++.
2. **Dynamically typed** — A variable can hold different types of values at different times.
3. **Single-threaded** — JavaScript executes one main piece of JavaScript code at a time.
4. **Synchronous by default** — Normal JavaScript statements execute in order.
5. **Asynchronous capabilities** — APIs such as timers, network requests and promises allow non-blocking operations.
6. **Interpreted/JIT compiled** — Modern engines such as V8 use JIT compilation for performance.
7. **Prototype-based** — Objects can inherit behavior through the prototype chain.
8. **First-class functions** — Functions can be stored in variables, passed as arguments and returned from other functions.
9. **Event-driven** — Browser applications commonly react to events such as click, input and submit.
10. **Cross-platform** — It runs in browsers and environments such as Node.js.

### Example

```js
let x = 10;
x = "Hello";

console.log(x); // Hello
```

The same variable can hold a number and later a string, which demonstrates dynamic typing.

### Interview trap

**JavaScript is not the same as Java.** They are separate programming languages with different designs and execution models.

---

# Q2. What is Hoisting?

### Interview Answer

**Hoisting is the behavior in which JavaScript's execution environment processes declarations before executing the code in that scope.**

It is important to remember that **declaration handling is different for `var`, `let`, `const`, and functions.**

### `var`

```js
console.log(a); // undefined

var a = 10;
```

Conceptually, the declaration is available before the assignment:

```js
var a;
console.log(a); // undefined
a = 10;
```

### `let` and `const`

```js
console.log(a); // ReferenceError
let a = 10;
```

They are also processed during scope creation, but they remain in the **Temporal Dead Zone (TDZ)** until execution reaches their declaration.

### Function declaration

```js
sayHello();

function sayHello() {
    console.log("Hello");
}
```

This works because the function declaration is available before the call during the setup of the execution context.

### Key interview line

> Hoisting does not mean JavaScript physically moves code to the top. It means declarations are processed during the creation/setup phase of an execution context.

---

# Q3. What is TDZ (Temporal Dead Zone)?

### Interview Answer

**The Temporal Dead Zone is the period between entering a scope and reaching the declaration of a `let`, `const`, or `class` variable during execution. Accessing the variable during this period causes a `ReferenceError`.**

### Example

```js
console.log(x); // ReferenceError

let x = 10;
```

The variable `x` exists in the scope's lexical environment, but it cannot be accessed before its declaration is executed.

### Timeline

```text
Scope starts
     |
     |  TDZ
     |
let x = 10;
     |
     |  x can now be accessed
```

### Why does TDZ exist?

It prevents accidental use of variables before their declaration.

### Important

```js
var a = 10;   // undefined before initialization if accessed after declaration processing
let b = 20;   // TDZ before declaration
const c = 30; // TDZ before declaration
```

---

# Q4. Difference between `var`, `let`, and `const`

| Feature                     | `var`           | `let`        | `const`      |
| --------------------------- | --------------- | ------------ | ------------ |
| Scope                       | Function scoped | Block scoped | Block scoped |
| Redeclaration in same scope | Yes             | No           | No           |
| Reassignment                | Yes             | Yes          | No           |
| TDZ                         | No              | Yes          | Yes          |
| Must initialize immediately | No              | No           | Yes          |

### Example

```js
var a = 10;
var a = 20; // allowed

let b = 10;
b = 20;     // allowed
// let b = 30; // error

const c = 10;
// c = 20;    // error
```

### Important interview point

`const` means the **binding cannot be reassigned**. It does not make an object or array immutable.

```js
const user = {
    name: "Rahul"
};

user.name = "Amit"; // allowed
```

The object can change; the variable cannot be reassigned to another object.

---

# Q5. Difference between `==`, `===`, `=` and `!==`

### `=` — Assignment

Assigns a value.

```js
let a = 10;
a = 20;
```

### `==` — Loose equality

Compares values after possible type coercion.

```js
5 == "5"; // true
```

### `===` — Strict equality

Compares both **value and type** without automatic type conversion.

```js
5 === "5"; // false
5 === 5;   // true
```

### `!=`

Loose not-equal comparison.

```js
5 != "6"; // true
```

### `!==`

Strict not-equal comparison.

```js
5 !== "5"; // true
```

### Interview recommendation

In normal application code, prefer:

```js
=== 
!==
```

because the comparison is predictable and avoids unwanted type coercion.

---

# Q6. Difference between `null` and `undefined`

Both represent absence of a useful value, but they have different meanings.

## `undefined`

Usually means:

> A value has not been assigned/provided.

```js
let x;
console.log(x); // undefined
```

A missing object property also gives `undefined`:

```js
let user = {};
console.log(user.name); // undefined
```

## `null`

Usually means:

> The programmer intentionally says there is no value.

```js
let selectedUser = null;
```

### Type difference

```js
typeof undefined; // "undefined"

typeof null;      // "object"
```

`typeof null === "object"` is a long-standing historical behavior in JavaScript.

### Interview line

> `undefined` generally represents an uninitialized or missing value, while `null` is an intentional empty value.

---

# Q7. What are Array, HOF, Callback and Closure?

## 1. Array

An **array** is an ordered collection of values.

```js
let arr = [10, 20, 30];
```

It can contain different data types:

```js
let data = [10, "hello", true, { id: 1 }];
```

## 2. Higher-Order Function (HOF)

A function is a **higher-order function** if it:

* accepts another function as an argument, or
* returns a function.

Example:

```js
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculate(10, 20, add)); // 30
```

`calculate` is a HOF because it receives a function.

## 3. Callback

A **callback is a function passed to another function so that it can be called later or during some operation.**

```js
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("Amit", function () {
    console.log("Welcome!");
});
```

The anonymous function is the callback.

## 4. Closure

A **closure occurs when an inner function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.**

```js
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

let counter = outer();

counter(); // 1
counter(); // 2
```

`inner` remembers `count`.

### Important relationship

```text
HOF       -> function accepts/returns another function
Callback  -> function passed to another function
Closure   -> function remembers outer lexical variables
```

A function can be both a callback and a closure depending on how it is used.

---

# Q8. What is an Array?

### Interview Answer

**An array is an ordered, zero-indexed collection used to store multiple values in a single variable.**

```js
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Apple
console.log(fruits.length); // 3
```

### Important characteristics

* Zero-indexed
* Dynamic size
* Can contain mixed types
* Has a `length` property
* Provides many built-in methods

```js
let arr = [10, 20, 30];

arr.push(40);    // add at end
arr.pop();       // remove from end
arr.shift();     // remove from beginning
arr.unshift(5);  // add at beginning
```

---

# Q9. Difference between `<div>` and `<span>`

Both are HTML container elements, but their default layout behavior differs.

## `<div>`

`div` is a **block-level element**.

It normally starts on a new line and takes available horizontal space.

```html
<div>Hello</div>
<div>World</div>
```

## `<span>`

`span` is an **inline element**.

It normally occupies only the space needed by its content.

```html
<span>Hello</span>
<span>World</span>
```

### Typical use

```html
<div class="card">
    <h2>Product</h2>
    <p>Price: <span>$100</span></p>
</div>
```

Use `div` for larger layout/sections and `span` for small inline portions of content.

---

# Q10. Difference between `split()` and `join()`

They perform opposite types of operations.

## `split()`

Converts a **string into an array**.

```js
let str = "JavaScript is easy";

let result = str.split(" ");

console.log(result);
// ["JavaScript", "is", "easy"]
```

## `join()`

Converts an **array into a string**.

```js
let arr = ["JavaScript", "is", "easy"];

let result = arr.join(" ");

console.log(result);
// "JavaScript is easy"
```

### Easy memory trick

```text
String  --split()-->  Array
Array   --join()--->  String
```

---

# Q11. Difference between `filter()`, `map()` and `reduce()`

These are important array higher-order methods.

## `map()`

Used when you want to **transform every element**.

It returns a new array with the same number of elements.

```js
let nums = [1, 2, 3];

let result = nums.map(x => x * 2);

console.log(result); // [2, 4, 6]
```

## `filter()`

Used when you want to **select elements that satisfy a condition**.

It returns a new array that can have fewer elements.

```js
let nums = [1, 2, 3, 4, 5];

let result = nums.filter(x => x % 2 === 0);

console.log(result); // [2, 4]
```

## `reduce()`

Used when you want to **combine array elements into one final result**.

```js
let nums = [1, 2, 3, 4];

let sum = nums.reduce((acc, current) => {
    return acc + current;
}, 0);

console.log(sum); // 10
```

### How `reduce()` works

```text
Initial acc = 0

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

### Interview comparison

| Method     | Main purpose       | Result            |
| ---------- | ------------------ | ----------------- |
| `map()`    | Transform          | New array         |
| `filter()` | Select             | New array         |
| `reduce()` | Accumulate/combine | Usually one value |

---

# Q12. Difference between `map()` and `forEach()`

## `map()`

Returns a **new array**.

```js
let nums = [1, 2, 3];

let result = nums.map(x => x * 2);

console.log(result); // [2, 4, 6]
```

## `forEach()`

Used when you simply want to perform an operation for each element.

```js
let nums = [1, 2, 3];

nums.forEach(x => {
    console.log(x * 2);
});
```

`forEach()` does not return a transformed array.

```js
let result = nums.forEach(x => x * 2);

console.log(result); // undefined
```

### Interview line

> Use `map()` when you need a new transformed array. Use `forEach()` when you only need to execute an operation for each element.

---

# Q13. What are the ways to create an Object in JavaScript?

There are several ways.

## 1. Object literal

Most common.

```js
let user = {
    name: "Amit",
    age: 22
};
```

## 2. `new Object()`

```js
let user = new Object();

user.name = "Amit";
user.age = 22;
```

## 3. Constructor function

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}

let user1 = new User("Amit", 22);
```

## 4. `Object.create()`

Creates an object using a specified prototype.

```js
let person = {
    greet() {
        console.log("Hello");
    }
};

let user = Object.create(person);

user.greet();
```

## 5. ES6 Class

```js
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let user = new User("Amit", 22);
```

### Interview point

The most common approaches you should mention are:

* Object literal
* Constructor function
* `Object.create()`
* Class

---

# Q14. What is the `this` keyword? Explain its behavior.

### Interview Answer

**`this` refers to the object/context associated with the current function call. Its value is determined mainly by how the function is called, not simply where the function is written.**

## 1. In an object method

```js
let user = {
    name: "Amit",

    greet() {
        console.log(this.name);
    }
};

user.greet(); // Amit
```

Here `this` refers to `user`.

## 2. Regular function

In strict mode:

```js
"use strict";

function test() {
    console.log(this);
}

test(); // undefined
```

In non-strict browser-style JavaScript, a plain function call may have `this` as the global object.

## 3. Constructor with `new`

```js
function User(name) {
    this.name = name;
}

let u = new User("Amit");

console.log(u.name); // Amit
```

Here `this` refers to the newly created object.

## 4. Explicit binding

Using `call`, `apply`, or `bind`:

```js
function greet() {
    console.log(this.name);
}

let user = { name: "Amit" };

greet.call(user); // Amit
```

## 5. Arrow function

Arrow functions do **not create their own `this`**.

They capture `this` from the surrounding lexical scope.

```js
let user = {
    name: "Amit",

    greet: function () {
        let inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

user.greet(); // Amit
```

### Critical interview rule

For normal functions, ask:

> **How was the function called?**

For arrow functions, ask:

> **What is the surrounding lexical `this`?**

---

# Q15. Explain `call()`, `apply()` and `bind()`

All three are used to control the value of `this` for a function.

```js
function introduce(city, country) {
    console.log(this.name, city, country);
}

let user = {
    name: "Amit"
};
```

## `call()`

Calls the function **immediately** and passes arguments separately.

```js
introduce.call(user, "Indore", "India");
```

## `apply()`

Calls the function **immediately**, but passes arguments as an array.

```js
introduce.apply(user, ["Indore", "India"]);
```

## `bind()`

Does **not execute immediately**.

It returns a new function with `this` permanently bound to the supplied object.

```js
let fn = introduce.bind(user, "Indore", "India");

fn();
```

### Easy comparison

```text
call  -> execute now + arguments separately
apply -> execute now + arguments as array
bind  -> execute later + returns new function
```

---

# Q16. How do you generate a 4-digit OTP?

A 4-digit numeric OTP should normally be between `1000` and `9999`.

```js
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

console.log(generateOTP());
```

### How it works

`Math.random()` gives a value from `0` up to but not including `1`.

```text
Math.random() * 9000
=> 0 to <9000

1000 + ...
=> 1000 to <10000

Math.floor(...)
=> 1000 to 9999
```

### Important security point

For a real authentication system, do **not** rely on `Math.random()` for security-sensitive OTP generation.

For browser cryptographic randomness:

```js
const array = new Uint32Array(1);
crypto.getRandomValues(array);

const otp = 1000 + (array[0] % 9000);

console.log(otp);
```

For a backend authentication system, use a cryptographically secure random generator provided by the server/runtime.

---

# Q17. `setTimeout()` vs `setInterval()` — and a common interview question

## `setTimeout()`

Executes a callback **once after at least the specified delay**.

```js
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

It does not guarantee exact execution at 2000 ms. It means the callback becomes eligible after the delay and must wait until JavaScript can execute it.

## `setInterval()`

Executes a callback repeatedly at approximately the specified interval.

```js
setInterval(() => {
    console.log("Hello");
}, 2000);
```

### Interview question

**What is the output?**

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

### Answer

```text
A
C
B
```

### Why?

`setTimeout(..., 0)` does not mean "execute immediately."

The callback is scheduled as a task and runs after the current synchronous JavaScript finishes.

### Another important question

```js
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

Output:

```text
1
4
3
2
```

### Why?

General simplified order:

```text
Synchronous code
       ↓
Microtasks (Promise callbacks)
       ↓
Tasks/macrotasks (such as timer callbacks)
```

---

# Q18. What is DOM? Explain DOM manipulation and form validation.

## What is DOM?

**DOM stands for Document Object Model.**

When a browser loads an HTML document, it creates an object-based representation of that document.

Example:

```html
<body>
    <h1 id="title">Hello</h1>
</body>
```

JavaScript can access it:

```js
let title = document.getElementById("title");

title.textContent = "Hello JavaScript";
```

### Common DOM selection methods

```js
document.getElementById("id");

document.getElementsByClassName("class");

document.getElementsByTagName("p");

document.querySelector(".box");

document.querySelectorAll(".box");
```

### Common DOM manipulation

```js
element.textContent = "Hello";

element.innerHTML = "<b>Hello</b>";

element.style.color = "red";

element.classList.add("active");

element.classList.remove("active");

element.setAttribute("id", "newId");
```

### Creating elements

```js
let p = document.createElement("p");

p.textContent = "New paragraph";

document.body.appendChild(p);
```

## Form validation

Form validation checks whether user input is acceptable before processing/submitting it.

```html
<form id="form">
    <input id="email" type="text">
    <button type="submit">Submit</button>
</form>
```

```js
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (email === "") {
        alert("Email is required");
        return;
    }

    console.log("Form is valid");
});
```

### Important

Client-side validation improves user experience, but **server-side validation is still mandatory** because users can bypass browser-side checks.

---

# Q19. What are events and `addEventListener()`?

An **event** is an action or occurrence that JavaScript can respond to.

Examples:

* `click`
* `dblclick`
* `mouseover`
* `keydown`
* `keyup`
* `input`
* `change`
* `submit`
* `load`

### `addEventListener()`

It registers a function to run when a particular event occurs.

```js
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    console.log("Button clicked");
});
```

### Event object

The browser provides an event object containing information about the event.

```js
button.addEventListener("click", function (event) {
    console.log(event.type);
    console.log(event.target);
});
```

### Why use `addEventListener()`?

It allows multiple listeners for the same event and gives better control than inline HTML event handlers.

---

# Q20. Event Propagation and Event Delegation

## Event propagation

When an event occurs on a nested element, it travels through the DOM.

The major phases are:

```text
1. Capturing phase
2. Target phase
3. Bubbling phase
```

Example:

```html
<div id="parent">
    <button id="child">Click</button>
</div>
```

```js
parent.addEventListener("click", () => {
    console.log("parent");
});

child.addEventListener("click", () => {
    console.log("child");
});
```

Clicking the button normally results in:

```text
child
parent
```

because the event bubbles from the target toward ancestors.

### Stop propagation

```js
child.addEventListener("click", (event) => {
    event.stopPropagation();
});
```

This prevents the event from continuing through the propagation path.

## Event delegation

**Event delegation means attaching one event listener to a parent instead of attaching separate listeners to every child.**

```js
const list = document.getElementById("list");

list.addEventListener("click", function (event) {
    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }
});
```

### Why delegation is useful

* Fewer event listeners
* Better for large lists
* Works well for dynamically added children

### Interview line

> Event propagation describes how an event travels through the DOM; event delegation uses that propagation, especially bubbling, to handle child events from a parent.

---

# Q21. What is a Promise? Explain its states and methods.

### Interview Answer

**A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.**

A Promise has three states:

```text
Pending
  |
  +----> Fulfilled
  |
  +----> Rejected
```

## 1. Pending

Operation is still in progress.

## 2. Fulfilled

Operation completed successfully.

## 3. Rejected

Operation failed.

### Example

```js
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data received");
    } else {
        reject("Something went wrong");
    }
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finished");
    });
```

### Important Promise methods

## `then()`

Handles fulfillment.

```js
promise.then(value => console.log(value));
```

## `catch()`

Handles rejection.

```js
promise.catch(error => console.log(error));
```

## `finally()`

Runs whether the Promise fulfills or rejects.

```js
promise.finally(() => {
    console.log("Cleanup");
});
```

## Static methods

### `Promise.all()`

Waits for all promises. Rejects if any input promise rejects.

```js
Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(error => console.log(error));
```

### `Promise.allSettled()`

Waits for all and gives the status of every promise.

### `Promise.race()`

Settles when the first input promise settles.

### `Promise.any()`

Fulfills when the first input promise fulfills. It rejects only if all input promises reject.

---

# Q22. What is Promise Chaining? How do you overcome callback hell?

## Promise chaining

Promise chaining means returning a Promise from `.then()` and using another `.then()` for the next asynchronous operation.

```js
getUser()
    .then(user => {
        return getOrders(user.id);
    })
    .then(orders => {
        return getPayment(orders[0].id);
    })
    .then(payment => {
        console.log(payment);
    })
    .catch(error => {
        console.log(error);
    });
```

The important rule is:

> **Return the next Promise from the `.then()` callback.**

## Callback hell

Deeply nested callbacks can become difficult to read and maintain.

```js
getUser(function (user) {
    getOrders(user.id, function (orders) {
        getPayment(orders[0].id, function (payment) {
            console.log(payment);
        });
    });
});
```

This is often called **callback hell** or the **pyramid of doom**.

### How to overcome it

1. Use named functions where appropriate.
2. Use Promises.
3. Use Promise chaining.
4. Prefer `async/await` for sequential asynchronous workflows.

Example:

```js
async function process() {
    try {
        const user = await getUser();
        const orders = await getOrders(user.id);
        const payment = await getPayment(orders[0].id);

        console.log(payment);
    } catch (error) {
        console.log(error);
    }
}
```

---

# Q23. What are `async` and `await`? What is `fetch()`? What is synchronous vs asynchronous?

## `async`

An `async` function **always returns a Promise**.

```js
async function test() {
    return 10;
}

test().then(value => console.log(value));
```

The returned value `10` is automatically wrapped in a fulfilled Promise.

## `await`

`await` waits for a Promise to settle **inside an async function**.

```js
async function test() {
    const result = await Promise.resolve("Hello");
    console.log(result);
}
```

### Important mental model

`await` makes asynchronous code **look sequential and easier to read**. It does not make the underlying operation synchronous or block the entire JavaScript runtime.

## `fetch()`

`fetch()` is a Web API used to make HTTP requests. It returns a Promise.

```js
async function getData() {
    const response = await fetch("https://example.com/data");

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
}
```

### Why two `await`s?

```js
const response = await fetch(url);
const data = await response.json();
```

The first Promise gives the HTTP response.

The second Promise parses the response body as JSON.

### Synchronous

Code executes sequentially and the next statement waits for the current synchronous statement to finish.

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

### Asynchronous

An operation can be started and completed later while JavaScript continues with other work.

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");
```

Output:

```text
A
C
B
```

### Interview line

> `async/await` improves readability and error handling for Promise-based asynchronous code; it does not convert asynchronous operations into synchronous operations.

---

# Q24. What are Spread and Rest operators?

Both use `...`, but their jobs are different.

## Spread

**Expands/unpacks** an iterable or object into individual elements/properties.

### Array

```js
let a = [1, 2];
let b = [3, 4];

let result = [...a, ...b];

console.log(result); // [1, 2, 3, 4]
```

### Object

```js
let user = {
    name: "Amit",
    age: 22
};

let copy = { ...user };
```

## Rest

**Collects multiple values into one array or object.**

### Function parameters

```js
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(10, 20, 30)); // 60
```

### Destructuring

```js
let [first, ...remaining] = [10, 20, 30];

console.log(first);     // 10
console.log(remaining); // [20, 30]
```

### Easy memory trick

```text
Spread -> unpack
Rest   -> collect
```

---

# Q25. What is Destructuring?

**Destructuring is a syntax that allows us to extract values from arrays or properties from objects into variables.**

## Array destructuring

```js
let numbers = [10, 20, 30];

let [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

## Object destructuring

```js
let user = {
    name: "Amit",
    age: 22
};

let { name, age } = user;

console.log(name);
console.log(age);
```

## Rename variables

```js
let user = {
    name: "Amit"
};

let { name: userName } = user;

console.log(userName);
```

## Default values

```js
let [a, b = 100] = [10];

console.log(a); // 10
console.log(b); // 100
```

### Function parameters

```js
function display({ name, age }) {
    console.log(name, age);
}

display({
    name: "Amit",
    age: 22
});
```

---

# Q26. Shallow Copy vs Deep Copy

## Shallow copy

A shallow copy creates a new outer object/array, but nested objects are still referenced.

```js
let original = {
    name: "Amit",
    address: {
        city: "Indore"
    }
};

let copy = { ...original };

copy.name = "Rahul";

console.log(original.name); // Amit
```

But:

```js
copy.address.city = "Bhopal";

console.log(original.address.city);
// Bhopal
```

Why?

Because both objects reference the same nested `address` object.

### Common shallow-copy techniques

```js
let copy1 = { ...obj };
let copy2 = Object.assign({}, obj);

let arrCopy = [...arr];
```

## Deep copy

A deep copy creates independent copies of nested structures.

### `structuredClone()`

```js
let copy = structuredClone(original);

copy.address.city = "Bhopal";

console.log(original.address.city);
// Indore
```

### JSON technique

```js
let copy = JSON.parse(JSON.stringify(original));
```

But this has limitations. It can lose or alter values such as `undefined`, functions, `Date`, `Map`, `Set`, special numeric values, and circular structures can cause errors.

### Interview line

> Shallow copy copies the outer structure but shares nested references; deep copy recursively creates independent nested data.

---

# Q27. What are JavaScript dialog methods?

JavaScript provides browser dialog methods such as:

## `alert()`

Displays a message.

```js
alert("Hello");
```

## `confirm()`

Asks the user to confirm or cancel.

It returns a boolean.

```js
let result = confirm("Are you sure?");

if (result) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}
```

## `prompt()`

Asks the user to enter a value.

```js
let name = prompt("Enter your name");

console.log(name);
```

### Important

These are browser APIs and are synchronous/modal from the page's point of view. They block interaction with the page until the dialog is handled.

---

# Q28. What is String Interpolation?

**String interpolation means inserting expressions/variables directly inside a string.**

In JavaScript, template literals use backticks.

```js
let name = "Amit";
let age = 22;

let message = `My name is ${name} and I am ${age} years old.`;

console.log(message);
```

### Expressions are also allowed

```js
let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);
```

### Why use it?

It is cleaner than repeatedly concatenating strings.

```js
// Concatenation
"Hello " + name + ", age " + age;

// Template literal
`Hello ${name}, age ${age}`;
```

---

# Q29. Difference between Java and JavaScript

| Java                                         | JavaScript                                                         |
| -------------------------------------------- | ------------------------------------------------------------------ |
| General-purpose programming language         | Scripting/programming language used heavily for web and beyond     |
| Statically typed                             | Dynamically typed                                                  |
| Class-based object model                     | Prototype-based object model                                       |
| Commonly compiled to JVM bytecode            | Executed by JavaScript engines using interpretation/JIT techniques |
| Runs on JVM                                  | Runs in browsers and environments such as Node.js                  |
| Strong compile-time type checking            | Runtime type behavior                                              |
| Common in enterprise/backend/Android history | Common in web frontend and Node.js backend                         |

### Important

Java and JavaScript are **not versions of the same language**.

They have different syntax details, type systems, object models and runtimes.

### Interview answer

> Java is a statically typed, class-oriented language commonly executed on the JVM, while JavaScript is dynamically typed and prototype-based, commonly executed by JavaScript engines in browsers and server runtimes such as Node.js.

---

# Q30. What is Autoboxing?

**Autoboxing is the automatic conversion of a primitive value into its corresponding wrapper object when an object is needed.**

For example:

```js
let num = 10;

console.log(num.toString());
```

JavaScript allows primitive values to access methods through temporary wrapper objects.

Conceptually, for a number:

```text
primitive number
      ↓
temporary Number wrapper
      ↓
method execution
      ↓
temporary wrapper discarded
```

Example:

```js
let str = "hello";

console.log(str.toUpperCase()); // HELLO
```

The string is still a primitive:

```js
typeof str; // "string"
```

### Important JavaScript nuance

In JavaScript, people often use the term **autoboxing** to describe this temporary wrapper behavior, but it is not exactly the same concept as Java's primitive-to-wrapper conversion.

### Interview-safe answer

> In JavaScript, primitive values can temporarily behave like objects so their methods can be accessed. The engine creates a temporary wrapper object conceptually; this is commonly called autoboxing.

---

# Q31. What is GEC (Global Execution Context)?

**GEC stands for Global Execution Context.**

It is the execution context created when JavaScript starts executing a script/module.

It provides the environment in which top-level code is executed.

### Simplified execution-context model

```text
Global Execution Context
        |
        +-- Global/lexical environment
        |
        +-- this binding
        |
        +-- Global code execution
```

Then when a function is called:

```js
function test() {
    let x = 10;
}

test();
```

a new **Function Execution Context** is created for `test`.

### Main execution-context phases

A simplified interview model is:

```text
1. Creation / setup phase
2. Execution phase
```

During setup, JavaScript establishes bindings needed for the scope, including declarations according to their rules.

During execution, statements run in order.

### Example

```js
var a = 10;

function test() {
    let b = 20;
    console.log(a, b);
}

test();
```

Conceptually:

```text
Global Execution Context
│
├── a
├── test
│
└── Function Execution Context for test()
    └── b
```

### Important interview point

The **call stack** keeps track of currently executing execution contexts.

```text
Top
┌──────────────────────┐
│ test() context       │
├──────────────────────┤
│ Global context       │
└──────────────────────┘
Bottom
```

When `test()` finishes, its execution context is removed from the call stack.

---

# High-Value Interview Revision Sheet

## 1. JavaScript basics

* JavaScript is dynamically typed.
* JavaScript is single-threaded.
* JavaScript is synchronous by default.
* Asynchronous behavior is enabled through runtime/Web APIs and the event loop.
* Modern engines use JIT compilation.
* JavaScript uses prototypes for object inheritance.

## 2. Scope

```text
var   -> function scope
let   -> block scope
const -> block scope
```

## 3. Hoisting + TDZ

```text
var       -> declaration processed, initial value is undefined
let/const -> declaration processed, but inaccessible in TDZ
function declaration -> callable before its declaration in the same scope
```

## 4. Array methods

```text
map     -> transform
filter  -> select
reduce  -> accumulate
forEach -> perform an operation
```

## 5. Functions

```text
HOF      -> accepts/returns function
Callback -> function passed to another function
Closure  -> remembers outer lexical variables
```

## 6. `this`

```text
method call       -> receiver object
new               -> new object
call/apply/bind   -> explicitly controlled
arrow function    -> lexical this
```

## 7. Async JavaScript

```text
async/await -> Promise-based syntax
fetch       -> returns Promise
Promise     -> pending / fulfilled / rejected
```

Simplified scheduling priority:

```text
Synchronous code
       ↓
Microtasks
       ↓
Tasks/macrotasks
```

## 8. Spread vs Rest

```text
Spread -> unpack
Rest   -> collect
```

## 9. Copying

```text
Shallow -> nested references can be shared
Deep    -> nested structures are independently copied
```

## 10. DOM

```text
HTML
 ↓
DOM tree
 ↓
JavaScript selects/manipulates nodes
 ↓
Browser updates the page
```

---

# Interview Answer Strategy

For each question, answer in this order:

### 1. Definition

Give a one- or two-line definition.

### 2. Difference / purpose

Explain why it exists or when it is used.

### 3. Example

Write a small example.

### 4. Interview point

Mention one important edge case or limitation.

For example, for `async/await`:

> **Definition:** `async/await` is syntax built around Promises for writing asynchronous code in a sequential-looking style.
> **Purpose:** It improves readability and makes Promise-based error handling easier with `try/catch`.
> **Example:** `const data = await fetch(url)`.
> **Interview point:** `await` does not block the entire JavaScript runtime or make the network operation synchronous.

---

# 10 Questions You Should Be Able to Answer Without Looking

1. Why is JavaScript called dynamically typed?
2. What is the difference between hoisting and TDZ?
3. Why does `typeof null` return `"object"`?
4. Why does `map()` return an array while `forEach()` returns `undefined`?
5. How does `this` differ between normal and arrow functions?
6. Why does `setTimeout(fn, 0)` not execute immediately?
7. Why do Promise callbacks usually execute before timer callbacks?
8. What exactly does `await` do?
9. What is the difference between shallow and deep copy?
10. How does event delegation reduce the number of event listeners?

---

# Final 30-Second JavaScript Interview Summary

> JavaScript is a dynamically typed, single-threaded language that is synchronous by default but supports asynchronous programming through the runtime, event loop, Promises and APIs. It uses lexical scoping and prototypes for object behavior. `var`, `let` and `const` have different scope, redeclaration and TDZ behavior. Functions are first-class values, which enables callbacks, higher-order functions and closures. `this` depends on the invocation rules, while arrow functions capture lexical `this`. Promises represent future asynchronous results, and `async/await` provides cleaner syntax for Promise-based code. The DOM allows JavaScript to interact with HTML, while events and event propagation enable interactive browser applications.
> ::: 
