let p1 = new Promise((resolve , reject)=>{
let a = 10 ;
if(a==10) {
    resolve("Promise Resolved")
}else{
    reject("Promise rejected") ;
}
}) 

// console.log(p1) // Promise { 'Promise Resolved' }


// this block is used to handle rejection  and print only the message 
p1.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
});


let p2 = new Promise((res , rej)=>{
setTimeout(()=>{
    res("Promise Resolved") ;
}, 2000)
}) ;

p2.then((msg)=>{
console.log(msg)
}).catch((err)=>{
    console.log(err)
});