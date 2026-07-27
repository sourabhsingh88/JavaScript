let str = "javascript" 
let str1 = "    java   script   "


// 1 length (its a property not a method)

console.log(str.length) //10 

console.log(str1.length) // 20


// 2  toUpperCase (used to make string to upper case)
let d  =str.toUpperCase ;
console.log(d) // JAVASCRIPT

// 3 toLowerCase (used to make string to Lower Case) 
let c = str.toLowerCase ;
console.log(c) // javascript


// 4 trimStart (used to remove space from starting) 
let b = str.trimStart ;
console.log(b) // "java   script  "

// 5 trimEnd (used to remove space from end) 
let a = str.trimEnd ;
console.log(a) // "   java script"

// 6. trim (used to remove space from starting and ending)

console.log(str.trim) // java   script

// 7. replace (used to replce first occarance of input stringfrom the string )

console.log(str.replace('a' , 'i')) // jivascript

// 8. replaceAll (used to replace all occurance of input string from the string)

console.log(str.replaceAll(' ' , '')) // javascript