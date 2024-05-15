// Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

let numberShots = []
let numberUser = Number.parseInt(prompt('type a number'))


while (numberShots.length < 6) {
    let numberUser = Number.parseInt(prompt('type a number'))
    if (numberUser % 2 == 1) {
        numberShots.push(numberUser)
    }

}
console.log(numberShots, numberUser)