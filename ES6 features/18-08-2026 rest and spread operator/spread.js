// spread operator is used to expand the
//  elements of an array or properties of an object into a new array or object.

// let arr = [10,20,30,40,50 ] ;

// let [a,b,c,d,e] = [...arr] ;
// console.log(a)
// console.log(arr) 

// let arr2 = [100 , 200 , 300 , 400 , 500] ;
// let res = [...arr , arr2] ;
// console.log(res)



function add(a, b, c, d) {
  return a + b + c + d;
}
const nums = [1, 2, 3,7];
console.log(add(...nums)); // 6


let student = {
    name: 'Kamlesh',
    phn: 123456789,
    age: 21,
    email: "@gamil.com",
    hobbies: 'Deeply thinking about Someone',
    skills: ['Skipping presentation', 'escaping class'],
}

let student1 = {
    name: 'Ram',
    phn: 123456789,
    age: 21,
    email: "@gamil.com",
    hobbies: 'Deeply thinking about Someone',
    hobbies2: 'Deeply thinking about Someone',
    // skills: ['Skipping presentation', 'escaping class'],
}

let res1 = {...student , ...student1}

console.log(res1)