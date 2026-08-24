let employee = [
{name : 'savan' ,  empid : 101 , dept : 'developer'} ,
{name : 'nayan' ,  empid : 102 , dept : 'testing'} ,
{name : 'sourabh' ,  empid : 103 , dept : 'developer'} ,
{name : 'harsh' ,  empid : 104 , dept : 'testing'} 
]

// let testing = [] ;
// let developer = [] ;
// for(let i =0 ; i < employee.length  ; i++) {
// if(employee[i].dept == 'developer') {
//     developer.push(employee[i]) ;
// }else testing.push(employee[i]);
// }

// let department = {} ;
// department.developer = developer ;
// department.testing = testing ;

// console.log(department)


// or  by Using reduce 

let res =  employee.reduce((acc , emp) => {
    if (acc[emp.dept]) {
        acc[emp.dept].push({ name : emp.name ,empid: emp.empid  } ) ;
    }else{
        acc[emp.dept] = [{ name : emp.name ,empid: emp.empid  }] ;
    }
    return acc ;
} , {}) ;
console.log(res)


//  q2 . no double dept in arrr
 

/*
o/p 

developer
{name : 'savan' ,  empid : 101 , depy : 'developer'} ,
{name : 'sourabh' ,  empid : 103 , depy : 'developer'} ,

testing
{name : 'nayan' ,  empid : 102 , depy : 'testing'} ,
{name : 'harsh' ,  empid : 104 , depy : 'testing'} 
*/

// q3. 

// let students = [
// {name : 'savan' ,  empid : 101 , depy : 'developer'} ,
// {name : 'nayan' ,  depy : 'testing'} ,
// {name : 'sourabh' ,  empid : 103 } ,

// ]

/* 
{name : 'sourabh' ,  empid : 103 , dept : 'testing } ,
*/

let students = [
{name : 'savan' ,  empid : 101 , depy : 'developer'} ,
{name : 'nayan' ,  depy : 'testing'} ,
{name : 'sourabh' ,  empid : 103 } ,
]

// console.log(students.reduce((acc , ele) => {
//    return  Object.assign(acc , ele)
// }, {}))

// assign will override the common values like the example above if new keys then add the key 