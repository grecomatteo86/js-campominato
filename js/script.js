/*
CONSEGNA:
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

// FUNZIONI


// randomizzatore - genera un numero random dato un range di numeri min e max, estremi compresi

function randomizzatore(min, max) {

  var numero = Math.floor(Math.random() * (max - min + 1) + min);  //questa var numero è una var LOCALE della mia funzione, quindi non vado a sovrascrivere nessuna altra variabile

  return numero;

}


// inArray - funzione che mi dice se un elemento è presente in un array

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

/* 1. Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri NON POSSONO ESSERE DUPLICATI.
La mia var bombe parte come array vuoto e faccio un ciclo indefinito fintantochè la lunghezza dell'array non diventa 16 */
var bombe = [];

while (bombe.length < 16) {

  var numeroRandom = randomizzatore(1, 100);

  if (inArray(bombe,numeroRandom) == false) {  //questo controllo mi serve per non permettere che il programma mi genera due o più numeri bomba uguali: se la condizione (bombe.includes(numeroRandom) == false), cioè il numeroRandom NON è presente nella lista di bombe, allora lo inserisco in quest'ultima. In questo caso non ho neanche bisogno di un else.

    bombe.push(numeroRandom);

  }

}

/* 2. Chiedo all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista delle bombe, la partita termina;
altrimenti si continua chiedendo all’utente un altro numero. */

var numeriValidi = [];  //la creazione di questo array mi serve per salvarmi i numeri (validi) che man mano sceglie l'utente e per dire al programma che l'utente non può scegliere numeri già scelti
var bombaEspolsa = false;

/* Faccio un ciclo while: non vado a chiedere all'utente di inserire per 84 volte il numero, ma gli chiedo i numeri SOLO non sono numeri bomba e non sono presenti nell'array numeriValidi; ecco perchè il contatore del mio ciclo while sarà numeriValidi.length < 84;
Questo numeriValidi.length < 84 risponde alla logica che la partita termina quando il giocatore inserisce un numero “vietato” o RAGGIUNGE IL MASSIMO POSSIBILE DEI NUMERI CONSENTITI, che sono 84.
Ora, invece chiedo < 84 inizialmente metto 10 perchè mi consente di fare il debug in maniera più facile. */
while (numeriValidi.length < 84 && bombaEspolsa == false) {

  var numero = parseInt(prompt('inserisci un numero'));

  if (isNaN(numero) || numero < 1 || numero > 100) {      //controllo: il numero inserito dall'utente deve essere compreso tra 1 e 100.

    alert('ATTENZIONE: quello che inserisci deve essere un NUMERO e deve essere COMPRESO tra 1 e 100');

  } else if (inArray(bombe,numero) == true) {     //controllo:se il numero inserito dall'utente è una bomba allora la partita deve terminare;come faccio a uscire dal ciclo se l'utente becca la bomba?con lo stratagemma della var d'appoggio:mi creo la var bombaEspolsa, inizialmente impostata false;la inserisco nel while, come condizione di prosecuzione del mio ciclo e dentro l'if dico che se l'utente inserisce un numero bomba allora questa var diventa true; in questo modo mi fa terminare il ciclo

    bombaEspolsa = true;

  } else if (inArray(numeriValidi,numero) == true) {    //controllo: se l'utente inserisce un numero CONTENUTO nell'array numeriValidi, allora faccio un alert dove gli dico di reinserire il numero

    alert('Non fare il FURBO, inserisci un numero che non avevi scelto prima');

  } else {     //controllo: altrimenti fai il push del numero nella lista numeriValidi

    numeriValidi.push(numero);

  }

}

/* 3. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

if (bombaEspolsa == true) {  //controllo: a questo punto del programma vado a verificare il valore della var bombaEspolsa, perchè se uguale a true vuol dire che l'utente ha beccato una bomba

  console.log('Hai preso la BOMBA!!! Hai totalizzato ' + numeriValidi.length + ' punti')

} else {   //se arrivo fin qui vuol dire che l'utente ha indovinato tutti i numeri consentiti e non ha preso nessuna bomba, quindi il valore della var bombaEspolsa è rimasto false

  console.log('COMPLIMENTI, hai inserito tutti i numeri validi!!!');

}

console.log('Le bombe erano ai numeri ' + bombe);
