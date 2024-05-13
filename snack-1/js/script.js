//L'utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.
let firstNumber = prompt('Scegli il primo numero');
let secondNumber = prompt('Scegli il secondo numero');

if (firstNumber < secondNumber) {
    console.log(secondNumber)
} else if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else {
    console.log('sono numeri uguali')
}