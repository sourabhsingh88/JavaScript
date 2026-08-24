let table = document.createElement('table') 

let tr1 = document.createElement('tr')
let th1 = document.createElement('th')
th1.textContent = "Name"
let th2 = document.createElement('th')
th2.textContent = "Role"
let th3 = document.createElement('th')
th3.textContent = "Salary"
tr1.append(th1,th2,th3)

let tr2 = document.createElement('tr')
let td1 = document.createElement('td')
td1.textContent= 'A'
let td2 = document.createElement('td')
td2.textContent= 'Dev'
let td3 = document.createElement('td')
td3.textContent= 45000
tr2.append(td1,td2,td3)

let tr3 = document.createElement('tr')
let td4 = document.createElement('td')
td4.textContent= 'B'
let td5 = document.createElement('td')
td5.textContent= 'Tester'
let td6 = document.createElement('td')
td6.textContent= 30000
tr3.append(td4,td5,td6)


table.append(tr1 , tr2 ,tr3)

document.body.appendChild(table)
table.setAttribute("border" , "1px solid")
table.style.border= "1px solid "
table.style.borderCollapse  = "collapse"