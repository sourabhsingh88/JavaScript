//  Modification
 

let h1 = document.querySelector('#dom')
console.log(h1)

h1.textContent = "Document Object Model"  // will replace with this not in html only on ui 


let p = document.querySelector('p')
p.textContent = "this is paragraph tag"


// css styling 
//  we can do this in 3 ways inline , internal and external 

// step 1 target element 

let h2= document.querySelector('#dom')

// apply css style (this way is not recommended so we will go with internal or exxternal )
// always in camel case  
h2.style.fontSize = "100px"   
h2.style.color="white"
h2.style.backgroundColor="black"


