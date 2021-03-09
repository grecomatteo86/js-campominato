// creo una funzione che mi genera un numero random dato un range di numeri, estremi compresi
function randomizzatore(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// creo una funzione che mi dice se un elemento è presente nell'array
function inArray(array,elemento) {
  var i = 0;

  while (i < array.length) {
    if (array[1] == elemento) {
      return true;
    }
    i++;
  }
  return false;
}

//creo un array vuoto che sarà il mio 'array numeri vietati'
var listaNera = [];

// con un ciclo for genero 8 numeri random e al suo interno invoco la funzione 'randomizzatore'
for ( i = 0 ; i < 8; i++) {
  var numeroRandom = randomizzatore (1,50);
  listaNera.push(numeroRandom);
}

// stampo il mio array con gli 8 numeri random
console.log('i numeri vietati sono ' + listaNera);


// chiedo all'utente di inseriree un numero compreso tra
var numeroUtente = parseInt(prompt('inserisci un numero compreso tra'));
console.log('il numero inserito dall\'utente è ' + numeroUtente);


// eseguo il controllo: se il numero inserito dall'utente è presente nella lista di numeri random allora l'utente ha perso, altrimenti continua a giocare
if (listaNera.includes(numeroUtente)) {
  alert('hai perso');
} else {
  alert('continua a giocare');
}
