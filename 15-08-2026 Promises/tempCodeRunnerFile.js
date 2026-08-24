
// let car = new Promise((res)=>{
// setTimeout(()=> {
//     res("cCar complete the race ")
// } , 15000)
// }) ;

// let horse = new Promise((res)=>{
// setTimeout(()=> {
//     res("horse complete the race ")
// } , 10000)
// })

// let bike = new Promise((res , rej)=>{
// setTimeout(()=> {
//     rej("Bike complete the race ")
// } , 1000)
// }) // output bike as it is reject first if the is res then also car as it resolved first 



// let res3 = Promise.race([bike , car , horse]) ;
// res.then((msg)=>{
//     console.log(msg) ;
// }).catch((err)=> {
//     console.log(err)
// })
