
// // SORT

// let courses = ['java' , 'sql' ,'python' , 'css' , 'js' , 'html' ] ;

// console.log(courses.sort())
// // [ 'css', 'html', 'java', 'js', 'python', 'sql' ]


// let nums = [10, 5 , 8 , 1 , 77 ] ;
// console.log(nums.sort())
// // [ 1, 10, 5, 77, 8 ] based on ascii values


// // to sort we need to pass a function inside sort methods 
// console.log(nums.sort((a,b) => a - b)) // asc
// // [ 1, 5, 8, 10, 77 ]


// console.log(nums.sort((a,b) =>  b - a)) // desc 
// // [ 77, 10, 8, 5, 1 ]

// // REVERSE 
// console.log(courses.sort().reverse())
// // [ 'sql', 'python', 'js', 'java', 'html', 'css' ]


let str = 'WE will by biryani to sreenivas sir';

let newStr = str.split(" ").reverse().join(" ");
console.log(newStr) // sir sreenivas to biryani by will WE 

let newStr1 = str.split("").reverse().join("");
console.log(newStr1) // ris savineers ot inayrib yb lliw EW

let newStr2 = newStr1.split(" ").reverse().join(" ");
console.log(newStr2) //EW lliw yb inayrib ot savineers ris

// hye every one i am someone recent graduate from one of the collage located somewhere 
// minor in some branch and scored some percentages 
// as a freshere i am intresed in technologu and i am curious to figure out how technology workd behind the screen 
// , am core skills are java python where java is my primary coding language and python is my seconday cding language , from development side i am build multiple working projects such as trading bot , employee management application  and novamate a dating app 
// and one of my projecct is present on playstore also  I am here to 
