//Crea due tag div con due id diversi. 
//Un div avrà il testo colorato di rosso mentre l'altro di verde.
// Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const divShots = document.createElement('div')
const divEven = document.createElement('div')
let evenNumbers = []
let shotsNumber = []

divShots.id = 'red'
divEven.id = 'green'
divShots.classList.add('text-danger')
divEven.classList.add('text-success')

for (let i = 0; i <= Numbers.length; i++) {
    if (Numbers[i] % 2 == 0) {
        evenNumbers.push(Numbers[i])
    } else {
        shotsNumber.push(Numbers[i])
    }

}



console.log(evenNumbers, shotsNumber)
