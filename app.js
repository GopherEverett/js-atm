const depButton = document.querySelector('#checking .deposit')
const withButton = document.querySelector('#checking .withdraw')
const userInputDep = document.querySelector('#checking .input')
const balCheck = document.querySelector('#checking .balance')
let checkBal = 0
depButton.addEventListener('click', () => {
    checkBal += parseInt(userInputDep.value)
    balCheck.innerHTML = '$' + checkBal
    if (checkBal < 50) {
        balCheck.classList.add('zero')
    } else {
        balCheck.classList.remove('zero')
    }
})
withButton.addEventListener('click', () => {
    if (checkBal >= parseInt(userInputDep.value)) {
        checkBal -= parseInt(userInputDep.value)
        balCheck.innerHTML = '$' + checkBal
        if (checkBal < 50) {
            balCheck.classList.add('zero')
        } else {
            balCheck.classList.remove('zero')
        }
    } else {
        if (savBal >= 100) {
            checkBal += 100
            balCheck.innerHTML = '$' + checkBal
            savBal -= 100
            balSav.innerHTML = '$' + savBal
        } else {
            balCheck.innerHTML = 'Nope!'
        }
    }
})

const depButtonSav = document.querySelector('#savings .deposit')
const withButtonSav = document.querySelector('#savings .withdraw')
const userInputSav = document.querySelector('#savings .input')
const balSav = document.querySelector('#savings .balance')
let savBal = 0
depButtonSav.addEventListener('click', () => {
    savBal += parseInt(userInputSav.value)
    balSav.innerHTML = '$' + savBal
    if (savBal < 50) {
        balSav.classList.add('zero')
    } else {
        balSav.classList.remove('zero')
    }
})
withButtonSav.addEventListener('click', () => {
    if (savBal >= parseInt(userInputSav.value)) {
        savBal -= parseInt(userInputSav.value)
        balSav.innerHTML = '$' + savBal
        if (savBal < 50) {
            balSav.classList.add('zero')
        } else {
            balSav.classList.remove('zero')
        }
    } else {
        balSav.innerHTML = "Nope!"
    }
})