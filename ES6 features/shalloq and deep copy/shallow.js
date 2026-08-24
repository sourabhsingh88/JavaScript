let arr = [1,2,3,4,5] ;
let arr1 = arr ;

arr1.push(15)
console.log(arr1)
console.log(arr)

// will affect both

// to resolve this we will use shallow copy 
// but we have drawback in nested in arrays and objects it will modifie the orignal 
// array and object also 

let org = [1,2,3,4,5] ;
let dup = [...org]


dup.push(15) ;
console.log(org) ; // [ 1, 2, 3, 4, 5 ]
console.log(dup) ; // [ 1, 2, 3, 4, 5, 15 ]


let orgStd = {name : "sourabh" , class : "12"}
let dupStd = {...orgStd}
dupStd["sub"] = "Science"
console.log(dupStd)

let nesEmp = {name : "ram" , age : 25 , address : {
    city : "Indore" ,
    state : "MP"
}}

let dupEmp = {...nesEmp} ;

dupEmp.name = "Shyam" // will work modifie only dup 

console.log(dupEmp) // { name: 'Shyam', age: 25, address: { city: 'Indore', state: 'MP' } }
console.log(nesEmp) //{ name: 'ram', age: 25, address: { city: 'Indore', state: 'MP' } }



// now it will modify both dup and org fall back of shallow copy 
dupEmp.address.city = "Bhopal" ;
console.log(dupEmp) // { name: 'Shyam', age: 25, address: { city: 'Bhopal', state: 'MP' } }
console.log(nesEmp) // { name: 'ram', age: 25, address: { city: 'Bhopal', state: 'MP' } }