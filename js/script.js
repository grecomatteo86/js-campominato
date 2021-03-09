// CREO LE MIE FUNZIONI

// questa funzione, dato un minimo e un massimo, mi genera un numero random, estremi compresi.
function randomizzatore(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// questa funzione mi dice se un elemento è presente in un array
function inArray(array,elemento) {
  var i = 0;

  while (i < array.length) {
    if (array[i] == elemento) {
      return true;
    }
    i++;
  }
  return false;
}


//creo 2 array vuoti: 'listaNera' ospiterà i numeri vietati, 'listaBianca' ospiterà i numeri scelti dall'utente
var listaNera = [];
var listaBianca = [];

// con un ciclo for genero 16 numeri random e al suo interno invoco la funzione 'randomizzatore'
for ( i = 0 ; i < 5; i++) {
  var numeroRandom = randomizzatore (1,100);
  listaNera.push(numeroRandom);
}

// stampo il mio array con i 16 numeri random
console.log('nella Lista Nera ci sono i numeri ' + listaNera);

// invoco la funzione inArray (se TRUE array contiene elemento, se FALSE non contiene)
var risultato = inArray(listaNera,numeroUtente);

//chiedo all'utente di inserire per 3 volte, un numero alla volta, un numero compreso tra 1 e 100
var i = 0;

while ( i < 3 && !inArray(listaNera,numeroUtente)) {

  var numeroUtente = parseInt(prompt('inserisci un numero compreso tra 1 e 100'));
  console.log('il numero scelto dall\'utente è ' + numeroUtente);

  if (!inArray(listaNera,numeroUtente)) {

    listaBianca.push(numeroUtente);
    console.log('nella Lista Bianca ci sono i seguenti numeri: ' + listaBianca);


  } else {

    alert('hai perso');

  }


  i++;
}


alert('il tuo punteggio è ' + listaBianca.length);
