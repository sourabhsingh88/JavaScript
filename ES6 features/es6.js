// // used to assing one one element of an array to a variable. 
// // It is a concise way to extract values from arrays or properties
// // from objects and assign them to variables.

// // taditional way =

// let arr = [1, 2, 3];
// // let a =arr[0] ;
// // let b = arr[1];
// // let c = arr[2];


// // mordern way 
// let [a,b,c] = arr ;
// let [a,,c] = arr //skip value of b 
// console.log(a)




// On Nested array 
// let arr= [10,[20 , [30 ,[80],60] ,40],50]

// // let [a , b , c] = arr ;

// let [a,[b , [c ,[d],e] ,f],g] = arr 

// console.log(b)


// Object destructuring 

let student = {
    name: 'Kamlesh',
    phn: 123456789,
    age: 21,
    email: "kam@gmail.com",
    hobbies: 'Deeply thinking about Someone',
    skills: ['Skipping presentation', 'escaping class'],
    address: {
        state: "MP",
        City: "indore"
    }
}
let { name, skills, address : {  state }  } = student
// we cant use random we need to use keys 
// present in the object 
console.log(name)
console.log(skills)
console.log(state)