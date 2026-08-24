let biryani =  Promise.resolve("Biryani Ordered")
let chicken65 =  Promise.resolve("chicken65 Ordered")
let paneer =  Promise.resolve("Paneer Ordered")


// ----------------------------------------- any 
// it return first resolved promise if all are rejcted then return all reject 
let res = Promise.any([biryani , chicken65 , paneer]) ;

res.then((msg)=>{
    console.log(msg) ;
}).catch((err)=> {
    console.log(err)
})


// ----------------------------------------- all
// will return first rejected promise if all are resolved then all resolved 

let res1 = Promise.all([biryani , chicken65 , paneer]) ;

res.then((msg)=>{
    console.log(msg) ;
}).catch((err)=> {
    console.log(err)
})



// ----------------------------------------- allSettled
// it will return arry of object with status and msg 
let res2 = Promise.allSettled([biryani , chicken65 , paneer]) ;

res.then((msg)=>{
    console.log(msg) ;
}).catch((err)=> {
    console.log(err)
})

// ----------------------------------------- rece
// it will return the promise which completes first resolved / reject irrespectiveie of status like resolve or reject 

let car = new Promise((res)=>{
setTimeout(()=> {
    res("cCar complete the race ")
} , 15000)
}) ;

let horse = new Promise((res)=>{
setTimeout(()=> {
    res("horse complete the race ")
} , 10000)
})

let bike = new Promise((res , rej)=>{
setTimeout(()=> {
    rej("Bike complete the race ")
} , 1000)
}) // output bike as it is reject first if the is res then also car as it resolved first 


let res3 = Promise.race([bike , car , horse]) ;
res3.then((msg)=>{
    console.log(msg) ;
}).catch((err)=> {
    console.log(err)
});
