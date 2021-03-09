// creo una funzione che mi genera un numero random dato un range di numeri, estremi compresi
function randomizzatore(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//creo un array vuoto che sarà il mio 'array numeri vietati'
var listaNera = [];

// con un ciclo for genero 8 numeri random e al suo interno invoco la funzione 'randomizzatore'
for ( i = 0 ; i < 8; i++) {
  var numeroRandom = randomizzatore (1,50);
  listaNera.push(numeroRandom);
}

// stampo il mio array con gli 8 numeri random
console.log(listaNera);


// chiedo all'utente di inseriree un numero compreso tra
var numeroUtente = parseInt(prompt('inserisci un numero compreso tra'));
console.log('il numero inserito dall\'utente è ' + numeroUtente);
