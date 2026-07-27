function counter() {
    let count = 0 ;
    function incCount (){
        count++ ;
        console.log(count)
    }
    return incCount ;
}

let res = counter()
res() 
res()



function demo(a ,b) {
    var x = 40 ;
    let y =  50 ;
    const z = 60
    console.log("demo") ;
    function jsp() {
        console.log("jspiders")
        return x + y + z ;
    }jsp()
}
demo(10 , 20 )

