let div5 = document.createElement('div')

let h5   = document.createElement('h5')
h5.textContent = "I am h5 from js" 

let h4   = document.createElement('h4')
h4.textContent = "I am h4 from js"

div5.append(h5 , h4) ;
document.body.appendChild(div5) ;

h4.remove()  // will remove the element




h5.classList.add('demo')
h5.classList.add('jsp')
h5.classList.add('fun')
