/*
TOPIC:
The computer must generate 16 random numbers between 1 and 100.
Numbers cannot be duplicated.
Then it must ask the user (100 - 16) times to enter one number at a time, always between 1 and 100.
The user cannot enter the same number multiple times.
If the number is present in the list of generated numbers, the game ends, otherwise it continues by asking the user for another number.
The game ends when the player reaches a "forbidden number" or reaches the maximum possible allowed number.
At the end of the game the software must communicate the score, that is the number of times the user has entered an allowed number.
BONUS:
at the beginning the software also requires at the user a difficulty level that changes the range of random numbers:
difficulty level 0 => from 1 to 100
difficulty level 1 => from 1 to 80
difficulty level 2 => from 1 to 50
*/
//---------------------------------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// randomizer - generate a random number in a range of number min e max, including extremes.
function rendomizer(min, max) {
  var getRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);  //this var getRandomNumber is a LOCAL var of my function, so it doesn't subscribe any other var.
  return getRandomNumber;
}
// inArray - function that says if an element exist inside the array.
function inArray(array,element) {
  var i = 0;
  while (i < array.length) {
    if (array[i] == element) {
      return true;
    }
    i++;
  }
  return false;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// BONUS SECTION:
var limMaxNum;
switch (userLevel) {
  case 0:
    limMaxNum = 100;
  break;
  case 1:
    limMaxNum = 80;
  break;
  case 2:
    limMaxNum = 50;
  break;
}
//------------------------


/* 1. Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri NON POSSONO ESSERE DUPLICATI.
La mia var bombe parte come array vuoto e faccio un ciclo indefinito fintantochè la lunghezza dell'array non diventa 16 */
var bombe = [];

while (bombe.length < 16) {

  var numeroRandom = rendomizer(1, limMaxNum);

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

var possibilità = limMaxNum - 16;   //la var possibilità mi va a cambiare l'iniziale valore di 84 (100 - 16), che deve cambiare in base alla scelta del livello dell'utente

while (numeriValidi.length < possibilità && bombaEspolsa == false) {

  var numero = parseInt(prompt('inserisci un numero'));

  if (isNaN(numero) || numero < 1 || numero > limMaxNum) {      //controllo: il numero inserito dall'utente deve essere compreso tra 1 e 100.

    alert('ATTENZIONE: quello che inserisci deve essere un NUMERO e deve essere COMPRESO tra 1 e ' + limMaxNum);

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
