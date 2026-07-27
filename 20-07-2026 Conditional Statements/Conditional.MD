# JavaScript Notes – Truthy/Falsy, Conditional Statements & Loops
**Date:** 20-07-2026

---

# 1. Truthy and Falsy Values

JavaScript automatically converts values into `true` or `false` whenever a condition is checked.

Example:

```js
if (value) {
    // Executes if value is truthy
}
```

## Falsy Values (Only 8)

These values are treated as `false`.

```js
false
0
-0
0n        // BigInt Zero
""        // Empty String
null
undefined
NaN
```

Example:

```js
if (0) {
    console.log("Runs");
} else {
    console.log("Does not run");
}
```

**Output**

```
Does not run
```

---

## Truthy Values

Everything that is **not falsy** is truthy.

Examples:

```js
1
-5
"Hello"
" "
[]
{}
true
100
```

Example:

```js
if ("Hello") {
    console.log("Truthy");
}
```

Output:

```
Truthy
```

---

# 2. Conditional Statements

Conditional statements help JavaScript make decisions.

---

## A) if Statement

Runs only if the condition is true.

Syntax

```js
if (condition) {
    // code
}
```

Example

```js
let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
}
```

---

## B) if...else Statement

Chooses between two blocks.

Syntax

```js
if (condition) {
    // True block
} else {
    // False block
}
```

Example

```js
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

## C) else if Ladder

Checks multiple conditions one after another.

Syntax

```js
if (condition1) {

}
else if (condition2) {

}
else {

}
```

Example

```js
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
```

---

## D) Nested if

An `if` statement inside another `if`.

Example

```js
let age = 22;
let hasLicense = true;

if (age >= 18) {

    if (hasLicense) {
        console.log("Can Drive");
    }

}
```

Use Nested if when one condition depends on another.

---

## E) switch Statement

Used when checking the same variable against many values.

Syntax

```js
switch(value){

case value1:
    // code
    break;

case value2:
    // code
    break;

default:
    // code
}
```

Example

```js
let day = 2;

switch(day){

case 1:
    console.log("Monday");
    break;

case 2:
    console.log("Tuesday");
    break;

case 3:
    console.log("Wednesday");
    break;

default:
    console.log("Invalid Day");

}
```

### Why use `break`?

Without `break`, JavaScript continues executing the next cases.

Example

```js
let num = 1;

switch(num){

case 1:
    console.log("One");

case 2:
    console.log("Two");

}
```

Output

```
One
Two
```

---

# 3. Looping Statements

Loops repeat the same code multiple times.

Instead of writing:

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

We write:

```js
for(let i=1;i<=5;i++){
    console.log(i);
}
```

---

# A) for Loop

Used when we know how many times to repeat.

Syntax

```js
for(initialization; condition; update){

}
```

Example

```js
for(let i=1;i<=5;i++){
    console.log(i);
}
```

Output

```
1
2
3
4
5
```

---

### Parts of for Loop

Initialization

```js
let i = 1;
```

Runs only once.

Condition

```js
i <= 5
```

Checks whether the loop should continue.

Update

```js
i++
```

Changes the value after every iteration.

---

# B) while Loop

Used when we don't know exactly how many times the loop should run.

Syntax

```js
while(condition){

}
```

Example

```js
let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}
```

Output

```
1
2
3
4
5
```

---

# C) do...while Loop

Runs the code **at least once**, even if the condition is false.

Syntax

```js
do{

}while(condition);
```

Example

```js
let i = 1;

do{
    console.log(i);
    i++;
}while(i <= 5);
```

Output

```
1
2
3
4
5
```

---

## Difference Between while and do...while

### while

Condition is checked first.

```js
let i = 10;

while(i <= 5){
    console.log(i);
}
```

Output

```
Nothing
```

---

### do...while

Runs once before checking the condition.

```js
let i = 10;

do{
    console.log(i);
}while(i <= 5);
```

Output

```
10
```

---

# Quick Comparison

| Statement | Purpose |
|-----------|---------|
| if | Execute code if condition is true |
| if...else | Choose between two options |
| else if | Check multiple conditions |
| Nested if | Condition inside another condition |
| switch | Compare one variable with many values |
| for | Repeat when count is known |
| while | Repeat while conditbefore checking condition |

---

# Interview Points

- JavaScript has only **8 falsy values**.
- Everything else is **truthy**.
- `switch` is useful for checking one variable against multiple values.
- Always use `break` in `switch` to avoid fall-through.
- `for` loop is best when the number of iterations is known.
- `while` loop checks the condition before executing.
- `do...while` executes at least one tiion is true |
| do...while | Executes once me.

---

# Tricky Questions

### Q1

```js
if("0"){
    console.log("Hello");
}
```

**Output**

```
Hello
```

Reason: `"0"` is a **truthy** string.

---

### Q2

```js
if([]){
    console.log("True");
}
```

**Output**

```
True
```

Reason: Empty array is truthy.

---

### Q3

```js
if({}){
    console.log("Yes");
}
```

**Output**

```
Yes
```

Reason: Empty object is truthy.

---

### Q4

```js
switch(2){

case "2":
    console.log("String");

case 2:
    console.log("Number");
}
```

**Output**

```
Number
```

Reason: `switch` uses strict comparison (`===`).

---

### Q5

```js
let i = 5;

do{
    console.log(i);
}while(i < 5);
```

**Output**

```
5
```

Reason: `do...while` always runs once first.

---

## Summary

- **Truthy/Falsy** decide how values behave in conditions.
- **if**, **if...else**, **else if**, **nested if**, and **switch** are used for decision making.
- **for**, **while**, and **do...while** are used to repeat code.
- Choose the right loop depending on whether the number of iterations is known and whether the code should execute at least once.