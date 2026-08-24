// Date Object 


// to extract the current , for date operations , calculation , 
// to create we date  need Date object
// typeOf date  = Object 

// ref date by js is = 01 - jan - 1970 



let today = new Date() ; 
console.log(today) ; // 2026-08-03T08:23:59.125Z
console.log(today.toDateString()) ;  // Mon Aug 03 2026
console.log(today.toTimeString()) ; // 13:53:59 GMT+0530 (India Standard Time)
console.log(typeof today) ;   // object


// get Methods of date 

console.log(today.getFullYear()) ;  // 2026
console.log(today.getMonth()) ;  // 7
console.log(today.getDate()) ; // 3
console.log(today.getHours()) ; // 13  
console.log(today.getMinutes()) ; // 53
console.log(today.getSeconds()) ; // 59
console.log(today.getMilliseconds()) ; // 125 


// create a custom date 

let customDate = new Date() ;
console.log(customDate) ;  // 2026-08-03T08:23:59.143Z


//Set Methods of date

customDate.setFullYear(2024) ;
customDate.setFullYear(2024 , 4 , 21) ;
customDate.setMonth(11) ;
customDate.setDate(11) ;
console.log(customDate) ;  // 2024-12-11T08:23:59.143Z


let differenece = Date.now() ;
console.log(differenece / 1000 / 60 / 60 / 24 / 365) ;   // 56.625616411402845


