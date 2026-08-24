// [1,3,0,4,0,6,3,0,9,0] move all 0 at the end of the array 
// [2,4,5,6,0,9,1,3] if elemeent is even cube it else square 
// ['apple' , 'banna' , 'mango' , 'watermelon' , 'papaya' , 'orange'] reverse each element of the arrray  
// return the length of each element 
// return the element ending with vowel 
// [1,3,0,4,0,6,3,0,9,0] remove duplicates from array 
// ['apple' , 'banna' , 'mango' , 'watermelon' , 'papaya' , 'orange'] first char of each elemet to upper case 
// return the element with length > 5 ;
// replace all the vowels in the array with '@' 
// return the elelemt that contains vowles 


// [1,3,0,4,0,6,3,0,9,0] move all 0 at the end of the array 
let arr= [1,3,0,4,0,6,3,0,9,0] ;
let nonZeros = arr.filter((ele) => ele != 0) ;
let zeros  = arr.filter((ele) => ele == 0 ) ;
console.log(nonZeros.concat(zeros))


// [2,4,5,6,0,9,1,3] if elemeent is even cube it else square 
let arr1  =[2,4,5,6,0,9,1,3] 
console.log(arr1.map((ele) => {
    if ( ele % 2 == 0) {
        ele =  ele ** 3 
    } else {
       ele = arr1[ele] = ele ** 2 
    } return ele }))


let arr2 = ['apple' , 'banana' , 'mango' , 'watermelon' , 'papaya' , 'orange']
// reverse each element of the arrray 
// let newArr = arr2.map((ele) => ele.split().reverse().join(""))
console.log(arr2.map((ele) => ele.split('').reverse().join("" )))



// // return the length of each element 
console.log(arr2.map(ele => ele.length))

// // return the element ending with vowel 
console.log(arr2.filter(ele => ele.endsWith('a') || ele.endsWith('e') || ele.endsWith('i') || ele.endsWith('o') || ele.endsWith('u')))
console.log(arr2.filter((ele) => 'aeiou'.includes(ele[ele.length-1])) )

// // [1,3,0,4,0,6,3,0,9,0] remove duplicates from array 
let arr3  = [1,3,0,4,0,6,3,0,9,0]
console.log(arr3.filter((ele) =>  Set[ele]))//Not working need to check 
console.log(arr3.filter((ele , i  ) =>  arr3.indexOf(ele) == i ))



// // first char of each elemet to upper case 
let arr4 =  ['apple' , 'banna' , 'mango' , 'watermelon' , 'papaya' , 'orange' ,'cry'] 
console.log(arr4.map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1)))
 

// // replace all the vowels in the array with '@' 
console.log(arr4.map((ele) => ele.replaceAll('a', '@').replaceAll('e', '@').replaceAll('i', '@').replaceAll('o', '@').replaceAll('u', '@')))
console.log(
arr4.map(
    (ele) => {
    return ele
    .split("").map((ch) =>{ return 'aeiou'.includes(ch.toLowerCase()) ? '@' : ch})
}
)

)

// // return the elelemt that contains vowles 
console.log(arr4.filter((ele) => ele.includes('a') || ele.includes('e') || ele.includes('i') || ele.includes('o') || ele.includes('u')))


console.log(arr4.filter((ele) => ele.toLowerCase().split("").some(ch => {
    return 'aeiou'.includes(ch)
})))
