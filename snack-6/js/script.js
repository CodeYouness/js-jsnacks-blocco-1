//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numberInt = [1, 3, 5, 10, 13]

let somma = 0

for (let i = 1; i < numberInt.length; i += 2) {

    somma += numberInt[i]
}
console.log(somma)