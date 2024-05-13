//L'utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.
let firstNumber = Number.parseInt(prompt('Scegli il primo numero'), 10);
let secondNumber = Number.parseInt(prompt('Scegli il secondo numero'), 10);

if (firstNumber < secondNumber) {
    console.log(secondNumber)
} else if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else {
    console.log('sono numeri uguali')
}