let btnNum = document.querySelectorAll('.btnNum')
let display = document.getElementById('display')
let btnOpr = document.querySelectorAll('.btnOpr')
let clearAll = document.getElementById('clearAll')
let clear = document.getElementById('clear')
let square = document.getElementById('square')


let numberNew = true
let lastNumber;
let opr;
let valueNew;



const operateUndef = () => opr != undefined // ao clicar na operção não me retornar valor UNDEFINED

// Calculos da caculadora
const calculate = () => {
    if (operateUndef()) {
        valueNew = parseFloat(display.textContent)
        numberNew = true

        if (opr == '+') {
            updateDisplay(lastNumber + valueNew)
        }

        if (opr == '-') {
            updateDisplay(lastNumber - valueNew)
        }

        if (opr == '×') {
            updateDisplay(lastNumber * valueNew)
        }

        if (opr == '/') {
            updateDisplay(lastNumber / valueNew)
        }
    }
}





const updateDisplay = (e) => {
    if (numberNew) {
        display.textContent = e
        numberNew = false
    } else {
        display.textContent += e
    }
}

btnNum.forEach(btn => btn.addEventListener('click', (e) => { // Listener dos números
    updateDisplay(e.target.textContent)
}))






//OPERATE
clearAll.addEventListener('click', () => { // Clear tela.
    display.textContent = ''
    lastNumber = ''
    opr = ''
})

btnOpr.forEach(btn => btn.addEventListener('click', (e) => { // Listeners dos operadores

    if (!numberNew) {
        calculate()
        opr = e.target.textContent
        console.log(opr)
        numberNew = true
        lastNumber = parseFloat(display.textContent)
    }
}))






// Códigos que não pode ser executado juntamente com o fluxo.
square.addEventListener('click', () => {
    display.textContent = Math.sqrt(lastNumber)
})

clearAll.addEventListener('click', () => { // Clear all display.
    display.textContent = ''
    lastNumber = ''
    opr = ''
})

clear.addEventListener('click', () => { // Clear display
    numberNew = true
    display.textContent = ''
})




// Estilização
let buttonStyle = document.querySelectorAll('button')

buttonStyle.forEach(e => {
    e.addEventListener('mouseover', (e) => {
        e.target.style.background = '#d4d6c2'
        e.target.style.border = '1px solid #c7c7c7c7'
    })

    e.addEventListener('mouseout', (e) => {
        e.target.style.background = ''
        e.target.style.border = ''
    })

    e.addEventListener('click', () => {
        display.style.border = '1px solid #4285f4'
    })
})