var intentos = 0;
var aciertos = 0;
var errores = 0;
var actividad = "actividad1";
var btnAmigo = true;
var btn5050 = true;
var btnAyudaPublico = true;
var pregunta=0;

function pasarEstado(){
  localStorage.setItem("textvalue", actividad);
  window.open("../OVA10V001.html","_self");
  return false;
}

function obtenerPreguntaActual(){
  return pregunta;
}

function addAciertos(){
  intentos++;
  aciertos++;
}

function addErrores(){
  intentos++;
  errores++;
}

function updateBtnAmigo(){
  btnAmigo = false;
}

function updateBtn5050(){
  btn5050 = false;
}

function updatebtnAyudaPublico(){
  btnAyudaPublico = false;
}

// Define el tiempo inicial en segundos.
var totalTime = 600;

// Obtiene la fecha y hora actuales.
var now = new Date().getTime();

// Calcula la fecha y hora de finalización.
window.endTime = now + totalTime * 1000;

// Función para manejar el conteo regresivo.
function countdown() {
    // Obtiene la fecha y hora actuales.
    let now = new Date().getTime();

    // Calcula la diferencia entre la fecha y hora de finalización y las actuales.
    let distance = endTime - now;

    // Si el tiempo ha terminado.
    if (distance < 0) {
        return null;
    } else {
        // Calcula los minutos y segundos restantes.
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Devuelve el tiempo restante en formato de texto.
        return minutes + ":" + (seconds < 10 ? '0' + seconds : seconds);
    }
}

// Función para cambiar al fotograma deseado.
function changeFrame() {
    // Usa la función de cambio de marco de tu API de animación.
    this.gotoAndStop('feedback');
}

// Función principal para manejar el conteo regresivo y cambiar de fotograma.
function main() {
    let remainingTime = countdown();
    if (remainingTime !== null) {
        this.countdownTimer.text = remainingTime;
        setTimeout(main.bind(this), 1000);
    } else {
        changeFrame.bind(this)();
    }
}

// Inicia el conteo regresivo y el cambio de fotograma.
//main.bind(this)();
