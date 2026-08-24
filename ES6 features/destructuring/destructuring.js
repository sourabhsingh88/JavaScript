// destructuring is a feature in ES6 that allows you to unpack values from arrays or 
// properties from objects into distinct variables.

let arr= [12, 45 ,78 , 62] ;
let [a,b,c,d] = arr ;
console.log(a,b,c,d) //output : 12 45 78 62


// destructuring is the process of packing and unpacking values from arrays or objects into distinct variables. 
// It allows you to extract values from arrays or properties from objects
//  and assign them to variables in a more concise and readable way.
let obj = {
    name : "John",
    age : 30,   
    city : "New York"
}

let {name , age , city} = obj ;
console.log(name , age , city)  //output : John 30 New York