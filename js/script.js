// creo una funzione che mi genera un numero random dato un range di numeri, estremi compresi
function randomizzatore(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
