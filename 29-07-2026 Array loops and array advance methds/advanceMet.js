let arr = [10 , 20 , 30 , 40 ,50 , 60] ;

// arr.forEach(element => {
//     console.log(element)
// });

// arr.forEach((element , index , array) => {
//     console.log(element)
//     console.log(index)
//     console.log(array)
// });

let res = arr.forEach((element , index , array) => {
    console.log(element)
    console.log(index)
    console.log(array)
    return element
});

console.log(res) // undefined as array ont support return and also we can do chaning as no return 
