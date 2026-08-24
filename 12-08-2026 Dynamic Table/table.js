let empData = [
    ["Name" , "Role" , "Salary" , "EmpId"],
    ["Karthik" , "Developer" , 25000 , 101],
    ["Sourabh" , "Tester" ,23000 , 102] ,
    ["Swathi" , "Writer" , 22000 , 103] ,
    ["Debasis" , "Sitting" , 60000 , 1040] 
] ;




let table = document.createElement('table') ;

 empData.forEach((rows ,index) => {
    let tr = document.createElement('tr') ;
    rows.forEach((data) => {
        let cell = document.createElement(index == 0 ? "th" : "td") ;
        cell.textContent= data ;
        tr.append(cell)
    })
    table.append(tr)
 })


document.body.append(table)
table.setAttribute("border" , "1px solid")
table.style.border= "1px solid "
table.style.borderCollapse  = "collapse"