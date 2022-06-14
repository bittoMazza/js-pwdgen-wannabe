//Prendiamo in input dall'utente nome,cognome e colore
const userName = prompt('Inserisci il tuo nome');
const userLastName = prompt('Inserisci il tuo cognome');
const userFavColour = prompt('Inserisci il tuo colore preferito');
let userPassword;
userPassword= userName + userLastName + userFavColour + "22";

//Scriviamo i valori inseriti in precedenza dall'utente all'interno dei tag con i rispettivi id
document.getElementById('user-name').innerHTML = userName;
document.getElementById('user-last-name').innerHTML = userLastName;
document.getElementById('user-fav-colour').innerHTML = userFavColour;
document.getElementById('user-password').innerHTML = userPassword;

//Scriviamo in console la password ottenuta
console.log(userPassword)