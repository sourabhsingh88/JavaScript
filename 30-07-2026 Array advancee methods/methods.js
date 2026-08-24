let names = ['a', 's' , 'l' , 'm' , 'a' , 'c' , 'b' , 'c' ,'k' , 'b'] 

console.log(
names.reduce((acc , ele) => {
acc[ele] = (acc[ele] || 0) + 1 
return acc  
} , {}));


let arr = [10 , 20 , 30 , 40 , 50 ]
console.log(arr.reduce((acc , ele)=> acc + ele * ele , 0 ))

console.log(arr.reduce((acc , ele) => {
    return acc + ele
})) ;

