let board = document.createElement('div') ;
board.classList.add('board') ;

for (let i = 1; i < 9 ; i++) {
   for (let j = 1; j < 9 ; j++) {
    let box = document.createElement('div') ;
    box.classList.add('box') ; 
   

   if((i+j) % 2 == 0) {
    box.classList.add('white')
   }else{
     box.classList.add('black')
   }

   board.append(box)
}
    
}


document.body.appendChild(board) ;