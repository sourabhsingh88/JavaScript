
// let arr = [10 , 5 , 'js' , true , null , undefined]

// console.log(arr.length) //6
// console.log(arr) // 
// console.log(arr[0]) // 10 

// let arr1 = new Array(10,) // asume as letngh of arr where single number value 
// console.log(arr1)

// console.log(arr1.length)




let num = [10 , 20 ,30 ,40 ,50 ,60]

num.push(20) ;
console.log(num) // add at last

num.pop() 
console.log(num) // remove from last

num.unshift(20)  // add at first index
console.log(num)

num.unshift(1,2)
console.log(num)

num.shift()  // removes first element
console.log(num)

num.shift(2) // will avoide parameter and remove from first
console.log(num)


// num.splice(1)  // will delete all from index 1 to end 
// console.log(num) 

num.splice(1 , 2) // will delete 2 element from 1 iindex (si)
console.log(num)

num.splice(1 , 2 , 100 , 200 ,300) // will detele 2 elemet from 1 index and  add all values from 1 
console.log()