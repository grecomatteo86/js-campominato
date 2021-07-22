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
do {
  var userLevel = parseInt(prompt('Inserisci il livello di difficoltà: 0, 1 o 2'));
} while (userLevel != 0 && userLevel != 1 && userLevel != 2);
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
//---------------------------------------------------------------------------------------------------
// 1. The computer generates 16 random numers between 1 and limMaxNum. Numbers CANNOT BE DUPLICATED.
var bombsArray = [];
while (bombsArray.length < 16) {
  var randomNumber = rendomizer(1, limMaxNum);
  if (inArray(bombsArray,randomNumber) == false) {
    bombsArray.push(randomNumber);
  }
}
// 2. I ask to the user to insert a number. User CANNOT INSERT THE SAME NUMBER TWICE.
// If userNumber is in bombsArray, the game ends, otherwise go on asking another number.
var bombsFreeArray = [];
var pickedBomb = false;
var userPossibilities = limMaxNum - 16;
while (bombsFreeArray.length < userPossibilities && pickedBomb == false) {
  var userNumber = parseInt(prompt('Please, insert a number'));
  if (isNaN(userNumber) || userNumber < 1 || userNumber > limMaxNum) {
    alert('PAY ATTENTION: your number MUST BE between 1 and ' + limMaxNum);
  } else if (inArray(bombsArray,userNumber) == true) {
    pickedBomb = true;
  } else if (inArray(bombsFreeArray,userNumber) == true) {
    alert('PAY ATTENTION: YOU CANNOT INSERT THE SAME NUMBER TWICE');
  } else {
    bombsFreeArray.push(userNumber);
  }
}
// 3. The game ends when user gets the bomb or fill up userPossibilities.
if (pickedBomb == true) {
  console.log('You got the BOMB!!! Total points: ' + bombsFreeArray.length)
} else {
  console.log('COMPLIMENTS, you have inserted only valid numbers!!!');
}
console.log('Bombs were: ' + bombsArray);
