//Fai inserire un numero, che chiameremo N, all'utente. 
//Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const arrayNumber = Number.parseInt(prompt('scegli un numero'))

for (let i = 0; i < arrayNumber; i++) {
    let array = []

    for (let x = 0; x < 10; x++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }

    console.log(array)

}