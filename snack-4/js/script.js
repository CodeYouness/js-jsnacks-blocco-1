//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

let invitati = ['marco', 'claudio', 'francesco', 'elon', 'X Æ A-12'];
const userName = prompt('come ti chiami?')

if (invitati.includes(userName)) {
    alert('complimenti ' + userName + ' sei invitato')
} else {
    alert('niente da fare, torna a casa')
}