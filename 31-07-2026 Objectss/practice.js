// Method	Executes immediately?	Arguments
// call()	    Yes	                 Individually
// apply()	    Yes	                  Array
// bind()	    No	               Individually/preset


// let user = {
//     name: "Rahul",
//     age: 22
// };

// console.log(user.name);   //Rahul
// console.log(user["age"]); // 22 

// =============================================================================================

// let user = {
//     name: "Rahul",

//     greet: function () {
//         console.log("Hello " + this.name);
//     }
// };

// user.greet();  //Hello Rahul

// =============================================================================================

// let user3 = {
//     name: "Rahul",
//     age: 22,

//     getAge: function() {
//         return this.age;
//     }
// };

// console.log(user3.getAge()); //22

// =============================================================================================
 
// let person = {
//     name: "Rahul",

//     show: function() {
//         console.log(this.name);
//     }
// };

// person.show(); // Rahul


// =============================================================================================

// let person = {
//     name: "Rahul",
//     show: function() {
//         console.log(this.name);
//         // return this.name
//     }
// };
// let fn = person.show;
// fn() // undefined because show is not returning any thing  

// =============================================================================================

// let person1 = {
//     name: "Rahul"
// };

// let person2 = {
//     name: "Amit"
// };

// function showName() {
//     console.log(this.name);
// };

// showName.call(person1);
// showName.call(person2);

// =============================================================================================

// let user = {
//     name: "Rahul"
// };
// function greet() {
//     console.log(this.name);
// }
// // greet.call(user); //Rahul
// greet(user); // Undefined

// =============================================================================================


// let user = {
//     name: "Rahul"
// };

// function introduce(city, age) {
//     console.log(this.name, city, age);
// }

// introduce.call(user, "Indore", 22);


// let user = {
//     name: "Rahul"
// };
// function greet() {
//     console.log(this.name);
// }
// let fn = greet.bind(user);
// console.log(fn);
// fn();