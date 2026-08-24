// math.asg  => Converts negaticve to positive 



// Math.random () // used to generate otp then range of random is 0 to 1 

// generate 4 digit otp

let min = 1000 ;
let max= 9999 ;
let otp =  Math.floor(Math.random() * ( max - min + 1 ) + 1000) ; 

console.log(otp) ; 


let min6 = 100000 ;
let max6 = 999999 ;
let otp6 = Math.floor(Math.random() * (max6 - min6 + 1) + 100000) ;
console.log(otp6) ;