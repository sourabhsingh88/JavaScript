// there are two ways to do deep copy in JavaScript. The first way is to use JSON methods, and the second way is to use a structuredClone() .


let orgObj = {name : "ram" , age : 25 , address : {
    city : "Indore" ,
    state : "MP"
}}

let dupObj = JSON.parse(JSON.stringify(orgObj)) ; // deep copy using JSON methods
dupObj.address.city = "Bhopal" ;
console.log(dupObj) // { name: 'ram', age: 25, address: { city: 'Bhopal', state: 'MP' } }
console.log(orgObj) // { name: 'ram', age: 25, address: { city: 'Indore', state: 'MP' } }

// drawback of json way it will remove undefined values , remove function and 
// remove symbol from the object and convert date to string to resolve this
// we will use structuredClone() method which is used to create a deep copy of a given value.

let strClone = structuredClone(orgObj) ; // deep copy using structuredClone() method
strClone.address.city = "Bhopal" ;
console.log(strClone) // { name: 'ram', age: 25, address: { city: 'Bhopal', state: 'MP' } }
console.log(orgObj) // { name: 'ram', age: 25, address: { city: 'Indore', state: 'MP' } }

// it will throw error when we try to
//  copy a function or symbol using structuredClone() method.
