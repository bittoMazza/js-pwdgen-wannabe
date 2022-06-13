
const userName = prompt('Inserisci il tuo nome');
const userLastName = prompt('Inserisci il tuo cognome');
const userFavColour = prompt('Inserisci il tuo colore preferito');

document.getElementById('user-name').innerHTML = userName;
document.getElementById('user-last-name').innerHTML = userLastName;
document.getElementById('user-fav-colour').innerHTML = userFavColour;
document.getElementById('user-password').innerHTML = userName + userLastName + userFavColour+"22" 

console.log(userName+userLastName+userFavColour+"22")