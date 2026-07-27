var bal = 200000 ; 
var amt = 100 ;

if (amt <= bal) {
    if (amt % 100 == 0 ) {
        console.log("withdrawl Successfull")
    }else{
        console.log("please enter amount in multiple of 100")
    }
}else {
    console.log("Insufficient balance")
}

