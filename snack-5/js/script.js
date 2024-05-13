//Crea un array vuoto.
//Chiedi per 6 volte all'utente di inserire un numero,
//se è dispari inseriscilo nell'array.

const numberShots = []

for (let i = 0; i < 6; i++) {
    let userNumber = Number.parseInt(prompt('Scegli un numero'), 10);
    if (userNumber % 2 == 0) {

    } else {
        numberShots.push(userNumber)
    }
}

console.log(numberShots)