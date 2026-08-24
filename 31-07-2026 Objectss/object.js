let students = {
    id : 1 ,
    name : 'sourabh',
    hobbies : 'acting (only watching)',
    address :{
        state : "Madhya Pradesh" ,
        city: "Indore" ,
        pincode : 451221 
    }
}

console.log(students.address)
console.log(students.name ,  students.hobbies)

let student2 = {
    sid : 1,
    name : 'harsh',
    course : 'jfs',
    gender : 'female',
    address: {
        state : 'mp',
        city : 'indore',
        pincode : 234235
    }
}

console.log(student2.address.pincode)
student2.gender = 'male'
console.log(student2.gender)

//? object using new keyword
let student3 =new Object({name: 'sawan', gender : 'male' })
console.log(student3.gender)
console.log(student3.name)

student3.gender = 'female'
console.log(student3.gender)

student3.address = 'delhi'
console.log(student3.address)

console.log(student3)

// ?object using construction fuction

function student4(name,city){
    console.log(this)
    this.name = name
    this.city = city
}
let s1 = new student4();
s1.name = 'sahil'
s1.city = 'bhopal'

console.log(s1.name)

//?object using class

//? this keyword 
//for all the function except the arrow function this keyword will point to current object. in case of arrow fuction it will point to window
let student = {
    firstname : 'harsh',
    lastname : 'jain',
    gender : 'female',
    greet: function(){
        console.log(this.firstname + " " + this.lastname + " " + this.gender)
    },
    demo(){
        console.log(this.firstname)
    },
    arrow: ()=>{
        console.log(this.firstname + " " + this.lastname )
    },
    fun : function() { 
        let arrow2 = ()=>{
        console.log(this.firstname + " " + this.lastname )
    }
    arrow2()
}
}
student.greet()
student.demo()
student.fun()
