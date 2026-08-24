// // Q1. What is the output?
// let arr1 = [1, 2, 3, 4]; 
// let double  = arr1.map((ele) => {
//    return ele * 2 ;
// })
// console.log(double) // 2 , 4 , 6  , 8


// // Q2. Create a new array containing only numbers greater than 10.
// let arr = [5, 12, 8, 20, 3, 15];


// let res = arr.filter((ele) => {
//     if (ele > 10) {
//         return ele ;
//     }
// });
// console.log(res)



// // Q3. Convert this array into an array of names:

// let users = [
//     {name: "Rahul", age: 20},
//     {name: "Amit", age: 22},
//     {name: "Rohit", age: 19}
// ];

// let names = users.map((ele) => {
//     return ele.name ;
// })
// console.log(names)


// // Q4. Get names of users whose age is greater than or equal to 18.

// let users = [
//     {name: "A", age: 17},
//     {name: "B", age: 21},
//     {name: "C", age: 16},
//     {name: "D", age: 25}
// ];


// // Q5. Find the sum: 
// let arr5 = [10, 20, 30, 40];

// let sum = arr5.reduce((acc, ele) => {
//     return ele + acc
// })

// console.log(sum)

// Q6. Find the maximum number using reduce().
// let arr6 = [10, 45, 23, 89, 12];
// let max = arr6.reduce((acc, ele) => {
//     let maxum = acc;
//     if (ele > maxum) {
//         maxum = ele;
//     }
//    return maxum
// })
// console.log(max)


// // Q9. Get the squares of only even numbers./
// let arr9 = [1, 2, 3, 4, 5, 6];
// let sqr = arr9.filter((ele)=>{
//     if(ele % 2 == 0 ) {
//       return ele
//     }
   
// }).map((ele)=> ele **2 )
// console.log(sqr)

// // Q10. Find the sum of only even numbers.

// let arr10 = [10, 15, 20, 25, 30];

// let evenSum = arr10.filter((ele)=> {
//     if(ele % 2 == 0) {
//         return ele
//     }
// }).reduce((acc , ele)=>{
//     return acc + ele
// })

// console.log(evenSum)

// // Q11. From this data, find the total salary of employees whose salary is greater than 30000.
// let employees = [
//     {name: "A", salary: 25000},
//     {name: "B", salary: 40000},
//     {name: "C", salary: 35000},
//     {name: "D", salary: 20000}
// ];

// let rich = employees.filter((ele)=> {
//     if(ele.salary > 30000) {
//         return ele

//         let arr = [10, 25, 60, 70, 30];
//     }
// }).map((ele)=> {
//     return ele.salary
// }).reduce((acc, ele)=> {
//     return acc  + ele
// })
// console.log(rich)


// // Q12. Find the first number greater than 50.
// let arr12 = [10, 25, 60, 70, 30];

// let great = arr12.find((ele)=> {
//     return ele > 5
// })
// console.log(great)

// Q13. Check whether at least one student has failed.
// let marks = [80, 75, 91, 32, 65];

// let faild = marks.some((ele)=> {
//    return ele < 40
// })
// console.log(faild)

// // Q14. Check whether every student passed.

// let pass = marks.every((ele)=> {
//     return ele > 40 
// })
// console.log(pass)



let arr6 = [10, 45, 23, 0, 12];

let res = arr6.filter(ele =>  ele) 
console.log(res)

let res1 = arr6.filter((ele , index) =>  index) 
console.log(res1)