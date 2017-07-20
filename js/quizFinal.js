// completa el codigo aqui:
var respuestasCorrectas = ["Respuesta 2", "Respuesta 3", "Respuesta 1", "Respuesta 4", "Respuesta 4",
                           "Respuesta 1", "Respuesta 3", "Respuesta 3", "Respuesta 1", "Respuesta 2"];
var nombreUsuario;
var respuestasUsuario = [];

// obten el nombre del usuario
function obterNombre(){
  nombreUsuario = prompt("¿Cuál es tu nombre?");
  console.log("El nombre del usuario es: " + nombreUsuario);
}

// obten las respuestas del usuario y valida que se hayan contestado todas
function obtenerRespuestas(){
  var error = 0;
  respuestasUsuario = [];
  for (var i = 1; i <= 10; i++) {
    var respuestas = document.getElementsByName('p'+i);
    for (var j = 0; j < respuestas.length; j++) {
      if(respuestas[j].checked){
        respuestasUsuario.push(respuestas[j].value);
      }else{
        error += 1;
      }
    }
    if (error === 4) {
      // notifica al usuario que tiene errores
      confirm("Hay una pregunta sin resolver");
      console.error("Pregunta sin resolver [" + i + "]");
      return false;
    }
    error = 0;
  }
  return true;
}

// obten la puntuacion del usuario
function obterPuntuacion(){
  var numeroRespuestasCorrectas = 0;
  for (var i = 0; i < respuestasUsuario.length; i++) {
    if(respuestasUsuario[i] === respuestasCorrectas[i]){
      numeroRespuestasCorrectas += 1;
    }
  }

  return numeroRespuestasCorrectas;
}

// calcula la calificacion final
function calcularCalificacion(numeroRespuestasCorrectas){
  return numeroRespuestasCorrectas * 10;
}

// evalua el resultado del quiz
function evaluar(){
  if(obtenerRespuestas()){
    var puntuacionFinal = calcularCalificacion(obterPuntuacion());
    confirm(nombreUsuario + " tu puntuación final es ["+puntuacionFinal+"]");
  }
}
