// // Bom stands for Browser Object Model 

// // provided by browser not by JS
//    if we want  function to execute after some time of invocation then we can make use of bom function  methods 
// // dom is provided by BOm 
// // dom is a part of browser 



// // window parent most object of js
// console.log(window) ;


// // document provides complete html 
// console.log(document)
// // give access of html 


// // provides histroy means pages open and we can switch between themm using history.back  , . forwad , .go()
// console.log(history)
// // output => History {length: 1, scrollRestoration: 'auto', state: null}

// history.back() // go back to the page last page by 1 
// history.forward() // goes to the next page  
// history.go(-2) ; // Jumps between the pages - for back and positive number for forward



// // dialog methods or browser methods : 
// // works syncronusly  

// // 1  prompt : used to take input from the user the input is always a string (fall back)-

// let name  = prompt("enter name") ;  // every thing will be string 
// console.log(name) ;

// console.log(typeof(name))

// let a  = Number(prompt("enter name")) ;  // Explicit converting to number  
// let b  = Number(prompt("enter name")) ; 
// console.log(a + b ) ;

// console.log(typeof(a + b))


// //2  alert(message) : gives the alert , dont have any return type 


// //3.  confirm(message)  : givees cofirmation msg in that pop up box and returns boolean (true(ok) or false(cancle) )
// // if no value then null  


// // asyncronous javascript  :::: 
// // only 2 methods are async all the mthods till this are sync  

// // 1. setTimout(callback function , timeout/delay) m
// // Execute once in a life time  , execute after certain delay 


// // the funtion will execute after the delay 


// // console.log("set timeout") ;


setTimeout(() => {
    console.log("set timeout") ;
} , 5000 )


// // to remove the time out for then we need to first store it 

// // let timeId = setTimeout(() => {
// //     console.log("set timeout") ;
// // } , 5000 )

// // clearTimeout(timeId) ; // time will be deleted 


// setTimeout(() => {
//     console.log("set timeout") ;
// } , 5000 )

// console.log("Java Script")



//Java Script
// bom.js:65 set timeout
// bom.js:72 set timeout

// 2. setinterval (all back ,  interval )  // same as timeout but we will get interval
// measn every interval it will execute 
// if we we dont pass interval it will continue executing ton stop store it and clearinterval(id) 

 let intId = setInterval(() => {
    console.log(5)
})

// If we want to delete the interval
clearInterval(intId) ;


for(let i = 1 ; i <= 5 ; i++ ) {

    setTimeout(() => {
        console.log(i)
    })
}

for(var i = 1 ; i <= 5 ; i++ ) {

    setTimeout(() => {
        console.log(i)
    })
} 
// o/p = 1 2 3 4 5 6 6 6 6 6 
// because settime out is executed after the loop exectuing 
// for let the actual working for var it will print let i +1  number of iteration time ( 5 + 1) => 6 5 times -