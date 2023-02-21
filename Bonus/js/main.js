/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

const youreName = prompt ("Il Tuo Nome");

const youreLastName = prompt ("Il Tuo Cognome");

const youreFavoriteColor = prompt ("Il Tuo Colore Preferito");

const actualYear = 23;

document.getElementById('password').innerHTML = `
${youreName}${youreLastName}${youreFavoriteColor}${actualYear}`;
