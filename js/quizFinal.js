// write your code here
var rightAnswers = ["Respuesta 2", "Respuesta 3", "Respuesta 1", "Respuesta 4", "Respuesta 4",
                    "Respuesta 1", "Respuesta 3", "Respuesta 3", "Respuesta 1", "Respuesta 2"];
var userName;
var userAnswers = [];

// get the username
function getName(){
  userName = prompt("¿Cuál es tu nombre?");
  console.log("El nombre del usuario es: " + userName);
}

// get the answers and validates they're completed
function getAnswers(){
  var error = 0;
  userAnswers = [];
  for (var i = 1; i <= 10; i++) {
    var answers = document.getElementsByName('p'+i);
    for (var j = 0; j < answers.length; j++) {
      if(answers[j].checked){
        error = 0;
        userAnswers.push(answers[j].value);
      }else{
        error += 1;
      }
    }
    if (error === 4) {
      confirm("Hay una pregunta sin resolver");
      console.error("Pregunta sin resolver [" + i + "]");
      break;
    }
  }
}

// get the user Score
function getScore(){
  var rightAnswersCount = 0;
  for (var i = 0; i < userAnswers.length; i++) {
    if(userAnswers[i] === rightAnswers[i]){
      rightAnswersCount += 1;
    }
  }

  return rightAnswersCount;
}

// calculates the punctuation
function calculatePunctuation(answersCount){
  return answersCount * 10;
}

// evauates the Quiz with the user answers
function evaluate(){
  getAnswers();
  var finalScore = calculatePunctuation(getScore());
  confirm(userName + " tu puntuación final es ["+finalScore+"]");
}
