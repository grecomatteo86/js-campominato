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

// invoco la funzione 'inArray' per controllare se il numero inserito dall'utente è presente nell'array numeri vietati' (TRUE) o no (FALSE)
var risultato = inArray(listaNera,numeroUtente);
console.log('numero presente nella Lista Nera? ' + risultato);

//eseguo il controllo: fintantochè il numeroUtente non è presente in listaNera, eseguo il prompt per 10 volte, inserendo i numeri buoni all'interno dell'array listaBianca
var i = 0;

while ( i <= 2 ) {

  if (risultato == false) {

    listaBianca.push(numeroUtente);
    console.log('l\'utente non può più scegliere i seguenti numeri: ' + listaBianca);
    alert('continua a giocare');
    var numeroUtente = parseInt(prompt('inserisci un altro numero compreso tra'));


    if (inArray(listaBianca,numeroUtente)) {
      var numeroUtente = parseInt(prompt('non barare, inserisci un numero compreso tra ... ma che non hai usato in precedenza'));
      console.log('il numero inserito dall\'utente è ' + numeroUtente);
      console.log('presente nella Lista Nera? ' + risultato);
    } else {
      console.log('il numero inserito dall\'utente è ' + numeroUtente);
      var risultato = inArray(listaNera,numeroUtente);
      console.log('presente nella Lista Nera? ' + risultato);
    }

  } else {
    alert('hai perso');
  }


  i++;

}
