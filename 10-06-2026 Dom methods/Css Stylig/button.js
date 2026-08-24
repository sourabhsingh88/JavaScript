


                                        // 1 - create 100 button tags

for (let i = 1; i < 101; i++) {
    let div = document.createElement('div')
    let buttons = document.createElement('button')
    buttons.textContent = `Button ${i}`
    buttons.setAttribute('class', 'button-content')
    div.appendChild(buttons)
    document.body.appendChild(div)
}

                                        // 2 - Create 500 paragraph    

for (let i = 1; i < 501; i++) {
    let paras = document.createElement('P')
    paras.textContent = `Im paragraph ${i}`
    paras.setAttribute('class', 'para')
    document.body.appendChild(paras)
}

                                        // 3 - Create 1000 headings

for (let i = 1; i < 1001; i++) {
    let headings = document.createElement('H1')
    headings.textContent = `This is heading tag ${i}`
    headings.setAttribute('class', 'heading')
    document.body.appendChild(headings)
}





