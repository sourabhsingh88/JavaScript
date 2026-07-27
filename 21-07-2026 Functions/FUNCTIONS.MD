# 🚀 JavaScript Functions

Functions are one of the **most important concepts in JavaScript**.

A **function** is a block of reusable code that performs a specific task.

Instead of writing the same code again and again, we write it once inside a function and call it whenever needed.

---

# 🎯 Why do we use Functions?

✅ Code Reusability (Write once, use many times)

✅ Reduces Duplicate Code

✅ Makes Code Easy to Read

✅ Makes Programs Easier to Maintain

✅ Divides a large program into smaller parts (Modularity)

---

# 📌 Syntax of Function

```javascript
function functionName() {

    // Function Body

}

functionName(); // Function Call (Invocation)
```

---

# 1️⃣ Named Function (Normal Function)

A function that has its own name.

## Syntax

```javascript
function greet() {

    console.log("Hello");

}

greet();
```

### Output

```
Hello
```

---

## Example

```javascript
function welcome() {

    console.log("Welcome to JavaScript!");

}

welcome();
```

---

## Characteristics

✅ Has a Name

✅ Can be called multiple times

✅ Hoisted (Can be called before declaration)

---

# 2️⃣ Parameterized Function

A function that accepts values while calling.

The variables inside the function are called **Parameters**.

The actual values passed while calling are called **Arguments**.

## Syntax

```javascript
function add(a, b) {

    console.log(a + b);

}

add(10, 20);
```

### Output

```
30
```

---

## Example

```javascript
function greet(name) {

    console.log("Hello " + name);

}

greet("Rahul");
greet("Ankit");
```

### Output

```
Hello Rahul
Hello Ankit
```

---

# 📌 Parameters vs Arguments

| Parameters | Arguments |
|------------|-----------|
| Variables in function definition | Actual values passed while calling |
| a, b | 10, 20 |

Example

```javascript
function add(a, b){

}

// a and b → Parameters

add(10,20);

// 10 and 20 → Arguments
```

---

# 3️⃣ Default Parameters

Sometimes the user doesn't pass values.

In that case JavaScript uses the default value.

## Syntax

```javascript
function add(a = 10, b = 20){

}
```

---

## Example

```javascript
function add(a = 10, b = 20){

    console.log(a + b);

}

add();
```

### Output

```
30
```

---

## Passing One Value

```javascript
add(5);
```

Output

```
25
```

Because

```
a = 5
b = 20 (default)
```

---

## Passing Undefined

```javascript
add(10, undefined);
```

Output

```
30
```

Because

```
undefined means "No value"

JavaScript uses default value.
```

---

## Passing Null

```javascript
add(10, null);
```

Output

```
10
```

Because

```
null is an intentional value.

Default value is NOT used.

10 + null = 10
```

---

## ⭐ Important

Default values are used **ONLY** when the value is

- Not Passed
- undefined

They are **NOT** used with

- null
- 0
- false
- ""

---

# 4️⃣ Return Statement

Normally we print values using `console.log()`.

But sometimes we need to use the result later.

For that we use **return**.

---

## Example

```javascript
function add(a, b){

    return a + b;

}

let result = add(10,20);

console.log(result);
```

### Output

```
30
```

---

## Why Return?

Without return

```javascript
function add(a,b){

    console.log(a+b);

}

let x = add(10,20);

console.log(x);
```

Output

```
30
undefined
```

Because

```
console.log() prints the value

return sends the value back
```

---

## Return Stops Execution

```javascript
function demo(){

    console.log("A");

    return;

    console.log("B");

}

demo();
```

Output

```
A
```

Everything after `return` is ignored.

---

# 5️⃣ Anonymous Function

An anonymous function is a function **without a name**.

❌ Wrong

```javascript
function(){

}
```

JavaScript expects a function name.

---

## Correct Way

```javascript
let demo = function(){

    console.log("Hello");

};

demo();
```

Output

```
Hello
```

---

## Characteristics

✅ No Function Name

✅ Stored inside variable

✅ Mostly used as Callback Functions

---

# 6️⃣ Function Expression

When a function is stored inside a variable, it is called a **Function Expression**.

```javascript
let square = function(num){

    return num * num;

};

console.log(square(5));
```

Output

```
25
```

---

## Named Function Expression

```javascript
let sum = function add(a,b){

    return a+b;

};

console.log(sum(10,20));
```

Output

```
30
```

---

# 📌 Anonymous Function vs Function Expression

Many students think both are the same.

They are **related but different**.

### Anonymous Function

Only a function without a name.

```javascript
function(){

}
```

---

### Function Expression

A function stored inside a variable.

```javascript
let demo = function(){

};
```

It can be

Anonymous

```javascript
let demo = function(){

};
```

or Named

```javascript
let demo = function hello(){

};
```

---

# 7️⃣ Arrow Function (ES6)

Arrow Functions were introduced in **ES6 (ECMAScript 2015)**.

They provide the shortest way to write functions.

They use the **Fat Arrow (=>)** operator.

---

## Syntax

```javascript
() => {

}
```

---

## Example

```javascript
let greet = () => {

    console.log("Hello");

};

greet();
```

Output

```
Hello
```

---

## Arrow Function with Parameters

```javascript
let add = (a,b)=>{

    console.log(a+b);

};

add(10,20);
```

Output

```
30
```

---

## Single Parameter

Parentheses are optional.

```javascript
let square = n => {

    return n*n;

};
```

---

## One Line Arrow Function

```javascript
let square = n => n*n;

console.log(square(5));
```

Output

```
25
```

This automatically returns the value.

No need to write `return`.

---

# ⭐ Characteristics of Arrow Functions

✅ Short Syntax

✅ Introduced in ES6

✅ Best for Callback Functions

✅ Can have Default Parameters

Example

```javascript
let add = (a = 10, b = 20) => a + b;

console.log(add());
```

Output

```
30
```

---

# 📊 Summary Table

| Function Type | Has Name | Takes Parameters | Returns Value | Stored in Variable |
|---------------|----------|------------------|----------------|--------------------|
| Named Function | ✅ | ✅ | Optional | ❌ Usually No |
| Parameterized Function | ✅ | ✅ | Optional | ❌ |
| Default Parameter Function | ✅ | ✅ | Optional | ❌ |
| Function with Return | ✅ | Optional | ✅ | ❌ |
| Anonymous Function | ❌ | Optional | Optional | ✅ Usually |
| Function Expression | Optional | Optional | Optional | ✅ |
| Arrow Function | Usually No | ✅ | Optional | ✅ |

---

# 💡 Interview Questions

### 1. What is a Function?

A reusable block of code that performs a specific task.

---

### 2. Difference between Parameters and Arguments?

Parameters are variables inside function definition.

Arguments are actual values passed while calling.

---

### 3. Difference between return and console.log()?

| return | console.log() |
|----------|---------------|
| Sends value back | Only prints value |
| Can be stored | Cannot be stored |

---

### 4. Does return stop execution?

✅ Yes.

Everything after `return` never executes.

---

### 5. When are default parameters used?

Only when

- Argument is not passed
- Argument is undefined

---

### 6. Does null use default value?

❌ No.

null is considered an actual value.

---

### 7. Difference between Anonymous Function and Function Expression?

Anonymous Function

- No name

Function Expression

- Function stored inside a variable

---

### 8. Why are Arrow Functions popular?

- Short Syntax
- Cleaner Code
- Mostly used in Modern JavaScript

---

# 🧠 Tricky Questions

## Question 1

```javascript
function demo(a = 5){

    console.log(a);

}

demo(undefined);
```

### Answer

```
5
```

---

## Question 2

```javascript
function demo(a = 5){

    console.log(a);

}

demo(null);
```

### Answer

```
null
```

---

## Question 3

```javascript
function add(a,b){

    console.log(a+b);

}

let x = add(10,20);

console.log(x);
```

### Answer

```
30
undefined
```

---

## Question 4

```javascript
function demo(){

    return 10;

    return 20;

}

console.log(demo());
```

### Answer

```
10
```

---

## Question 5

```javascript
let add = (a,b)=>a+b;

console.log(add(5,10));
```

### Answer

```
15
```

---

## Question 6

```javascript
let square = n => n*n;

console.log(square(6));
```

### Answer

```
36
```

---

## Question 7

```javascript
function demo(a,b=10){

    console.log(a+b);

}

demo(5);
```

### Answer

```
15
```

---

## Question 8

```javascript
function demo(a = 10){

    return a;

}

console.log(demo(0));
```

### Answer

```
0
```

Because **0 is a valid value**, so the default value is not used.

---

## Question 9

```javascript
let greet = function(){

    return "Hello";

};

console.log(greet());
```

### Answer

```
Hello
```

---

## Question 10

```javascript
let add = (a,b)=>{

    return a+b;

};

console.log(add(7,8));
```

### Answer

```
15
```

---

# 🎯 Key Points to Remember

✅ Functions make code reusable.

✅ Parameters receive values; arguments pass values.

✅ Default parameters work only with **undefined** or when no argument is passed.

✅ `return` sends a value back and stops function execution.

✅ Anonymous functions have no name.

✅ Function expressions store functions inside variables.

✅ Arrow functions (`=>`) are the shortest way to write functions and are widely used in modern JavaScript.