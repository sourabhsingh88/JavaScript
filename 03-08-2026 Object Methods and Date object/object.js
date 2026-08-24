let obj1 = {
    name :'Sourabh' ,
    city : 'Indore' ,
    State : 'MP'
}

console.log(Object.keys(obj1)) ;
console.log(Object.values(obj1)) ;
Object.freeze(obj1) ;

// Object.seal(obj1) ;
// if the object is freezon then it is sealed also 

obj1.name='nayan'
console.log(Object.values(obj1))
console.log(Object.isFrozen(obj1)) ;
console.log(Object.isSealed(obj1)) ;

let obj4 = {name : "sourabh"  , phone :  9755826293 , scl : 'SAM' }
let obj5 = {city : 'indore' , state : 'MP'} 
console.log(Object.assign({}, obj4 , obj5) );


