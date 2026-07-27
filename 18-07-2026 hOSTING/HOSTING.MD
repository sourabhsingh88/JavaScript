# JavaScript Day 2 Notes

## Topics Covered

-   Hoisting
-   `var`, `let`, `const`
-   Data Types
-   `typeof`
-   `NaN`
-   Operators
-   `==` vs `===`

------------------------------------------------------------------------

## Hoisting

Hoisting is JavaScript's behavior of moving **declarations** to the top
of their scope before execution.

### `var`

``` js
console.log(a);
var a = 10;
```

Output:

``` text
undefined
```

### `let`

``` js
console.log(a);
let a = 10;
```

Output:

``` text
ReferenceError
```

### `const`

``` js
console.log(a);
const a = 10;
```

Output:

``` text
ReferenceError
```

------------------------------------------------------------------------

## var vs let vs const

  Feature      var        let         const
  ------------ ---------- ----------- -----------
  Scope        Function   Block       Block
  Re-declare   Yes        No          No
  Re-assign    Yes        Yes         No
  Hoisted      Yes        Yes (TDZ)   Yes (TDZ)

------------------------------------------------------------------------

## Data Types

Primitive: - Number - String - Boolean - Undefined - Null - BigInt -
Symbol

Non-Primitive: - Object - Array - Function

------------------------------------------------------------------------

## typeof

``` js
typeof 10          // "number"
typeof "Hello"     // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"
typeof []          // "object"
typeof {}          // "object"
typeof function(){}// "function"
```

------------------------------------------------------------------------

## NaN

``` js
Number("abc")      // NaN
0 / 0              // NaN
typeof NaN         // "number"
Number.isNaN(NaN)  // true
```

------------------------------------------------------------------------

## Operators

### Arithmetic

`+  -  *  /  %  **`

### Assignment

`=  +=  -=  *=  /=`

### Comparison

`> < >= <= == === != !==`

### Logical

`&& || !`

------------------------------------------------------------------------

## == vs ===

`==` compares value after type conversion.

``` js
5 == "5"      // true
true == 1     // true
null == undefined // true
```

`===` compares both value and data type.

``` js
5 === "5"     // false
10 === 10     // true
null === undefined // false
```

------------------------------------------------------------------------

# Tricky Questions

### 1.

``` js
console.log(typeof null);
```

**Answer:** `"object"`

------------------------------------------------------------------------

### 2.

``` js
console.log(typeof NaN);
```

**Answer:** `"number"`

------------------------------------------------------------------------

### 3.

``` js
console.log(NaN == NaN);
```

**Answer:** `false`

------------------------------------------------------------------------

### 4.

``` js
console.log(NaN === NaN);
```

**Answer:** `false`

------------------------------------------------------------------------

### 5.

``` js
console.log(null == undefined);
```

**Answer:** `true`

------------------------------------------------------------------------

### 6.

``` js
console.log(null === undefined);
```

**Answer:** `false`

------------------------------------------------------------------------

### 7.

``` js
console.log(0 == false);
```

**Answer:** `true`

------------------------------------------------------------------------

### 8.

``` js
console.log(0 === false);
```

**Answer:** `false`

------------------------------------------------------------------------

### 9.

``` js
console.log("" == false);
```

**Answer:** `true`

------------------------------------------------------------------------

### 10.

``` js
console.log("" === false);
```

**Answer:** `false`

------------------------------------------------------------------------

### 11.

``` js
console.log([] == false);
```

**Answer:** `true`

------------------------------------------------------------------------

### 12.

``` js
console.log([] === false);
```

**Answer:** `false`

------------------------------------------------------------------------

### 13.

``` js
console.log({} == {});
```

**Answer:** `false`

------------------------------------------------------------------------

### 14.

``` js
console.log([] == []);
```

**Answer:** `false`

------------------------------------------------------------------------

### 15.

``` js
console.log(typeof []);
```

**Answer:** `"object"`

------------------------------------------------------------------------

### 16.

``` js
console.log(typeof function(){});
```

**Answer:** `"function"`

------------------------------------------------------------------------

### 17.

``` js
console.log(undefined == 0);
```

**Answer:** `false`

------------------------------------------------------------------------

### 18.

``` js
console.log(undefined == false);
```

**Answer:** `false`

------------------------------------------------------------------------

### 19.

``` js
console.log(null == 0);
```

**Answer:** `false`

------------------------------------------------------------------------

### 20.

``` js
console.log("5" + 1);
```

**Answer:** `"51"`
