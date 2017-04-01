var score = 0;

var questions = [
  { operation: 'mas', numberOne: 4, numberTwo: 9, result: 13 },
  { operation: 'dividido', numberOne: 40, numberTwo: 8, result: 5 },
  { operation: 'menos', numberOne: 65, numberTwo: 25, result: 40 },
  { operation: 'por', numberOne: 7, numberTwo: 6, result: 42 },
  { operation: 'mas', numberOne: 13, numberTwo: 26, result: 39 },
  { operation: 'dividido', numberOne: 20, numberTwo: 10, result: 2 },
  { operation: 'menos', numberOne: 30, numberTwo: 28, result: 2 },
  { operation: 'por', numberOne: 70, numberTwo: 10, result: 700 }
];

// for ( inicialization, condition, increment ) {
//   bloque
// }
for ( var i = 0; i < questions.length ; i++ ) {
  var question = questions[i];
  var answer = prompt("Cuánto es " + question.numberOne + " " + question.operation + " " + question.numberTwo + "?");

  if ( answer == question.result ) {
    score += 5;
    alert("Felicitaciones la respuesta es correcta!");
  } else {
    alert("Perdiste, sorry, muerte!");
  }
}

alert("El juego ha terminado tu puntaje es: " + score)
