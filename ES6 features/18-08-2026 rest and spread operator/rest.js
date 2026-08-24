let arr  = [1,2,3,4,5,6,7,8,9,10]

// rest operator is used to collect the remaining elements of an array into a new array.
//  It allows us to extract specific elements from an array while gathering the rest into a separate array.

let [a ,b , ...nums] = arr ;
console.log(a) // 1
console.log(b) // 2
console.log(nums) // [3,4,5,6,7,8,9,10] 


let student = {
    name: 'Kamlesh',
    phn: 123456789,
    age: 21,
    email: "@gamil.com",
    hobbies: 'Deeply thinking about Someone',
    skills: ['Skipping presentation', 'escaping class'],
}
// What is its proper defination ?
// rest operator is used to collect the remaining properties of an object into a new object. 
// It allows us to extract specific properties from an object while gathering the rest into a separate object.


// for object destructuring, the rest operator can be used to collect the remaining properties of an object into a new object.
//returns object for object destructuring and array for array destructuring.
let { name , phn , ...details } = student ;
console.log(name) // Kamlesh
console.log(phn) // 123456789
console.log(details) // { age: 21, email: '@gamil.com', hobbies: 'Deeply thinking about Someone', skills: [ 'Skipping presentation', 'escaping class' ] }