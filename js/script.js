// creo una funzione che mi genera un numero random dato un range di numeri, estremi compresi
function randomizzatore(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// con un ciclo for genero 8 numeri random e al suo interno invoco la funzione 'randomizzatore'
for ( i = 0 ; i < 8; i++) {
  var numeroRandom = randomizzatore (1,50);
  console.log(numeroRandom);
}
