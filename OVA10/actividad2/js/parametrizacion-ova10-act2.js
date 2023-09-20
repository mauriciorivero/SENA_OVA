var aciertos = 0;
var errores = 0;
var intentos = 0;
var letraSeleccionada="A";
var actividad = "actividad2";
document.getElementById("prueba").style.display="none";
document.getElementById("contenedor-resultados").style.display="none";

function pasarEstado(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA10V001.html","_self");
    return false;
  }

esconderContenedores();

var palabraA = "adenda";
var definicionA = "Documento por medio del cual la Entidad Estatal modifica los pliegos de condiciones";
var palabraB = "bilateral";
var definicionB = "Supone un acuerdo de las voluntades entre la Entidad Estatal contratante y el Contratista en relación con el balance final del contrato y el acta correspondiente es un negocio jurídico, definitivo y obligatorio para las partes.";
var palabraC = "colombia compra eficiente";
var definicionC = "Agencia Nacional de Contratación Pública creada por medio del Decreto-Ley 4170 de 2011";
var palabraD = "duracion";
var definicionD = "Tiempo que dura algo o que transcurre entre el comienzo y el fin de un proceso.";
var palabraE = "entidad estatal";
var definicionE = "Organismo de derecho público estatal con personalidad jurídica y patrimonio propios, a quien se encomienda en régimen de descentralización la organización y administración de algún servicio público, el cumplimiento de actividades económicas al servicio de fines diversos y la administración de determinados bienes del estado";
var palabraF = "fosyga";
var definicionF = "Fondo de solidaridad y garantía.";
var palabraG = "garantia";
var definicionG = "Documento que se exige al oferente o contratista para avalar el cumplimiento de las obligaciones que éste adquiere dentro del proceso contractual.";
var palabraH = "honorario";
var definicionH = "Es el tipo de remuneración que recibe un trabajador independiente para la prestación de sus servicios profesionales prestados esporádica o temporalmente sin entrar en una relación laboral.";
var palabraI = "inhabilidad";
var definicionI = "Incapacidad, ineptitud o circunstancias que impiden a una persona ser elegida o designada en un cargo público y en ciertos casos, impiden el ejercicio del empleo a quienes ya se encuentran vinculados al servicio. ";
var palabraJ = "judicial";
var definicionJ = "Este tipo de liquidación la puede solicitar el contratista a través de la acción de controversias contractuales cuando la liquidación del contrato no se haya logrado de mutuo acuerdo y la entidad estatal no lo haya liquidado unilateralmente. Corresponde al juez llevarla a cabo.";
var palabraK = "k de contratacion";
var definicionK = "Es la capacidad máxima de contratación del inscrito en el RUP. Se refiere a la aptitud de un oferente para cumplir oportuna y cabalmente con el objeto de un contrato de obra, sin que sus otros compromisos contractuales afecten su habilidad de cumplir con el contrato que está en proceso de selección.";
var palabraL = "liquidacion";
var definicionL = "Procedimiento mediante el cual las partes cruzan sus cuentas con respecto a sus obligaciones una vez firmado el contrato";
var palabraM = "mipyme";
var definicionM = "Micro, pequeña y mediana empresa medida de acuerdo con la ley vigente aplicable.";
var palabraN = "nube";
var definicionN = "Es un modelo para habilitar acceso a un conjunto compartido de recursos computacionales configurables, por ejemplo, redes, servidores, almacenamiento, aplicaciones y servicios accesibles mediante internet.";
var palabraO = "oferta";
var definicionO = "Es la cantidad de bienes y servicios que se ponen a la venta, que pueden ser frijoles, horas de clases de matemáticas, dulces o cualquier otra cosa que se nos ocurra.";
var palabraP = "proveedor";
var definicionP = "Cualquier interesado en participar en el Sistema de Compra Pública vendiendo bienes, obras o servicios a las Entidades Estatales";
var palabraQ = "quiebra";
var definicionQ = "Situación jurídica en la que una persona, empresa o institución (personas jurídicas) no puede hacer frente a los pagos que debe realizar porque estos son superiores a sus recursos económicos disponibles (activos).";
var palabraR = "rup";
var definicionR = "Es un registro que llevan las cámaras de comercio y en el cual los proponentes interesados en participar en Procesos de contratación deben estar inscritos.";
var palabraS = "secop";
var definicionS = "Es la herramienta diseñada para recoger y brindar toda la información acerca de las contrataciones que se realizan con dineros públicos de manera oficial. ";
var palabraT = "transparencia";
var definicionT = "Principio de la administración pública, que propende por la democratización y libertad de acceso a la información y la inclusión ciudadana.";
var palabraU = "unilateral";
var definicionU = "Es el tipo de liquidación que solo corresponde a la Entidad Estatal, no al contratista.";
var palabraV = "vigente";
var definicionV = "Es aquel contrato o proceso que está en vigor u observancia.";

fetch('palabras.json').then(response => response.json()).then(palabras => {
    let intentosRestantes = 10;
    const tiempoLimite = 15 * 60; // 15 minutos en segundos
    let tiempoRestante = tiempoLimite;
    const definicionElement = document.getElementById('definicion');
    const palabraElement = document.getElementById('palabra');
    const verificarElement = document.getElementById('verificar');
    const intentosRestantesElement = document.getElementById('intentosRestantes');
    const tiempoRestanteElement = document.getElementById('tiempoRestante');

    let palabraActual = null;

    function seleccionarPalabra(letra) {
        palabraActual = palabras.find(p => p.letra === letra);
        definicionElement.textContent = palabraActual ? palabraActual.definicion : '';
    }

    verificarElement.addEventListener('click', () => {
        if (!palabraActual) return;
        if (palabraElement.value === palabraActual.palabra) {
            alert('¡Correcto!');
        } else {
            intentosRestantes--;
            intentosRestantesElement.textContent = 'Intentos restantes: ' + intentosRestantes;
            if (intentosRestantes === 0) {
                alert('¡Has perdido!');
                // Aquí puedes agregar la lógica para reiniciar el juego.
            }
        }
    });

    // Temporizador
    setInterval(() => {
        tiempoRestante--;
        tiempoRestanteElement.textContent = 'Tiempo restante: ' + tiempoRestante + ' segundos';
        if (tiempoRestante === 0) {
            alert('¡Tiempo agotado!');
            // Aquí puedes agregar la lógica para reiniciar el juego.
        }
    }, 1000);
});



function esconderContenedores(){
    document.getElementById("ContenedorLetraA").style.display="none";
    document.getElementById("ContenedorLetraB").style.display="none";
    document.getElementById("ContenedorLetraC").style.display="none";
    document.getElementById("ContenedorLetraD").style.display="none";
    document.getElementById("ContenedorLetraE").style.display="none";
    document.getElementById("ContenedorLetraF").style.display="none";
    document.getElementById("ContenedorLetraG").style.display="none";
    document.getElementById("ContenedorLetraH").style.display="none";
    document.getElementById("ContenedorLetraI").style.display="none";
    document.getElementById("ContenedorLetraJ").style.display="none";
    document.getElementById("ContenedorLetraK").style.display="none";
    document.getElementById("ContenedorLetraL").style.display="none";
    document.getElementById("ContenedorLetraM").style.display="none";
    document.getElementById("ContenedorLetraN").style.display="none";
    document.getElementById("ContenedorLetraO").style.display="none";
    document.getElementById("ContenedorLetraP").style.display="none";
    document.getElementById("ContenedorLetraQ").style.display="none";
    document.getElementById("ContenedorLetraR").style.display="none";
    document.getElementById("ContenedorLetraS").style.display="none";
    document.getElementById("ContenedorLetraT").style.display="none";
    document.getElementById("ContenedorLetraU").style.display="none";
    document.getElementById("ContenedorLetraV").style.display="none";
    document.getElementById("ContenedorFinalizadoTiempo").style.display="none";
    document.getElementById("ContenedorFinalizadoPositivo").style.display="none";
    document.getElementById("ContenedorFinalizadoNegativo").style.display="none";
}

//Acción para el botón del  cuadro A
document.getElementById("definicion_botonA").onclick = function(){
    let palabra = document.getElementById("inputLetraA").value;
    if(palabra===palabraA){
        aciertos+=1;
        intentos+=1;
        palabraA="correcta";
    }else{
        errores+=1;
        palabraA="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraA").style.display="none";
}

//Acción para el botón del  cuadro B
document.getElementById("definicion_botonB").onclick = function(){
    let palabra = document.getElementById("inputLetraB").value;
    if(palabra===palabraB){
        aciertos+=1;
        intentos+=1;
        palabraB="correcta";
    }else{
        errores+=1;
        palabraB="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraB").style.display="none";
}

//Acción para el botón del  cuadro C
document.getElementById("definicion_botonC").onclick = function(){
    let palabra = document.getElementById("inputLetraC").value;
    if(palabra===palabraC){
        aciertos+=1;
        intentos+=1;
        palabraC="correcta";
    }else{
        errores+=1;
        palabraC="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraC").style.display="none";
}

//Acción para el botón del  cuadro C
document.getElementById("definicion_botonC").onclick = function(){
    let palabra = document.getElementById("inputLetraC").value;
    if(palabra===palabraC){
        aciertos+=1;
        intentos+=1;
        palabraC="correcta";
    }else{
        errores+=1;
        palabraC="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraC").style.display="none";
}

//Acción para el botón del  cuadro D
document.getElementById("definicion_botonD").onclick = function(){
    let palabra = document.getElementById("inputLetraD").value;
    if(palabra===palabraD){
        aciertos+=1;
        intentos+=1;
        palabraD="correcta";
    }else{
        errores+=1;
        palabraD="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraD").style.display="none";
}

//Acción para el botón del  cuadro E
document.getElementById("definicion_botonE").onclick = function(){
    let palabra = document.getElementById("inputLetraE").value;
    if(palabra===palabraE){
        aciertos+=1;
        intentos+=1;
        palabraE="correcta";
    }else{
        errores+=1;
        palabraE="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraE").style.display="none";
}

//Acción para el botón del  cuadro F
document.getElementById("definicion_botonF").onclick = function(){
    let palabra = document.getElementById("inputLetraF").value;
    if(palabra===palabraF){
        aciertos+=1;
        intentos+=1;
        palabraF="correcta";
    }else{
        errores+=1;
        palabraF="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraF").style.display="none";
}

//Acción para el botón del  cuadro G
document.getElementById("definicion_botonG").onclick = function(){
    let palabra = document.getElementById("inputLetraG").value;
    if(palabra===palabraG){
        aciertos+=1;
        intentos+=1;
        palabraG="correcta";
    }else{
        errores+=1;
        palabraG="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraG").style.display="none";
}

//Acción para el botón del  cuadro H
document.getElementById("definicion_botonH").onclick = function(){
    let palabra = document.getElementById("inputLetraH").value;
    if(palabra===palabraH){
        aciertos+=1;
        intentos+=1;
        palabraH="correcta";
    }else{
        errores+=1;
        palabraH="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraH").style.display="none";
}

//Acción para el botón del  cuadro I
document.getElementById("definicion_botonI").onclick = function(){
    let palabra = document.getElementById("inputLetraI").value;
    if(palabra===palabraI){
        aciertos+=1;
        intentos+=1;
        palabraI="correcta";
    }else{
        errores+=1;
        palabraI="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraI").style.display="none";
}

//Acción para el botón del  cuadro J
document.getElementById("definicion_botonJ").onclick = function(){
    let palabra = document.getElementById("inputLetraJ").value;
    if(palabra===palabraJ){
        aciertos+=1;
        intentos+=1;
        palabraJ="correcta";
    }else{
        errores+=1;
        palabraJ="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraJ").style.display="none";
}

//Acción para el botón del  cuadro K
document.getElementById("definicion_botonK").onclick = function(){
    let palabra = document.getElementById("inputLetraK").value;
    if(palabra===palabraK){
        aciertos+=1;
        intentos+=1;
        palabraK="correcta";
    }else{
        errores+=1;
        palabraK="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraK").style.display="none";
}

//Acción para el botón del  cuadro L
document.getElementById("definicion_botonL").onclick = function(){
    let palabra = document.getElementById("inputLetraL").value;
    if(palabra===palabraL){
        aciertos+=1;
        intentos+=1;
        palabraL="correcta";
    }else{
        errores+=1;
        palabraL="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraL").style.display="none";
}

//Acción para el botón del  cuadro M
document.getElementById("definicion_botonM").onclick = function(){
    let palabra = document.getElementById("inputLetraM").value;
    if(palabra===palabraM){
        aciertos+=1;
        intentos+=1;
        palabraM="correcta";
    }else{
        errores+=1;
        palabraM="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraM").style.display="none";
}

//Acción para el botón del  cuadro N
document.getElementById("definicion_botonN").onclick = function(){
    let palabra = document.getElementById("inputLetraN").value;
    if(palabra===palabraN){
        aciertos+=1;
        intentos+=1;
        palabraN="correcta";
    }else{
        errores+=1;
        palabraN="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraN").style.display="none";
}

//Acción para el botón del  cuadro O
document.getElementById("definicion_botonO").onclick = function(){
    let palabra = document.getElementById("inputLetraO").value;
    if(palabra===palabraO){
        aciertos+=1;
        intentos+=1;
        palabraO="correcta";
    }else{
        errores+=1;
        palabraO="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraO").style.display="none";
}

//Acción para el botón del  cuadro P
document.getElementById("definicion_botonP").onclick = function(){
    let palabra = document.getElementById("inputLetraP").value;
    if(palabra===palabraP){
        aciertos+=1;
        intentos+=1;
        palabraP="correcta";
    }else{
        errores+=1;
        palabraP="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraP").style.display="none";
}

//Acción para el botón del  cuadro Q
document.getElementById("definicion_botonQ").onclick = function(){
    let palabra = document.getElementById("inputLetraQ").value;
    if(palabra===palabraQ){
        aciertos+=1;
        intentos+=1;
        palabraQ="correcta";
    }else{
        errores+=1;
        palabraQ="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraQ").style.display="none";
}

//Acción para el botón del  cuadro R
document.getElementById("definicion_botonR").onclick = function(){
    let palabra = document.getElementById("inputLetraR").value;
    if(palabra===palabraR){
        aciertos+=1;
        intentos+=1;
        palabraR="correcta";
    }else{
        errores+=1;
        palabraR="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraR").style.display="none";
}

//Acción para el botón del  cuadro S
document.getElementById("definicion_botonS").onclick = function(){
    let palabra = document.getElementById("inputLetraS").value;
    if(palabra===palabraS){
        aciertos+=1;
        intentos+=1;
        palabraS="correcta";
    }else{
        errores+=1;
        palabraS="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraS").style.display="none";
}

//Acción para el botón del  cuadro T
document.getElementById("definicion_botonT").onclick = function(){
    let palabra = document.getElementById("inputLetraT").value;
    if(palabra===palabraT){
        aciertos+=1;
        intentos+=1;
        palabraT="correcta";
    }else{
        errores+=1;
        palabraT="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraT").style.display="none";
}

//Acción para el botón del  cuadro U
document.getElementById("definicion_botonU").onclick = function(){
    let palabra = document.getElementById("inputLetraU").value;
    if(palabra===palabraU){
        aciertos+=1;
        intentos+=1;
        palabraU="correcta";
    }else{
        errores+=1;
        palabraU="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraU").style.display="none";
}

//Acción para el botón del  cuadro V
document.getElementById("definicion_botonV").onclick = function(){
    let palabra = document.getElementById("inputLetraV").value;
    if(palabra===palabraV){
        aciertos+=1;
        intentos+=1;
        palabraV="correcta";
    }else{
        errores+=1;
        palabraV="incorrecta";
        intentos+=1;
    }
    verificarIntentos();
    document.getElementById("ContenedorLetraV").style.display="none";
}



let timeRemaining = 20 * 60;
//let timeRemaining = 10;

const timerClock = document.getElementById('timer-clock');

// Función para actualizar el reloj
function updateClock() {
    // Calcular los minutos y segundos
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    // Formatear los minutos y segundos
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Actualizar el reloj
    timerClock.textContent = `${minutes}:${seconds}`;

    // Decrementar el tiempo restante
    timeRemaining--;

    // Si el tiempo restante llega a cero, detener el intervalo
    if(timeRemaining < 0) {
        //clearInterval(intervalId);
        iniciarContador();
        timerClock.textContent = '00:00';
        esconderContenedores();
        document.getElementById("ContenedorFinalizadoTiempo").style.display="flex";
        document.getElementById("animation_container").style.display="none";
    }
}

function verificarIntentos(){
    if((intentos===22)&&(aciertos>=18)){
        document.getElementById("timer-container").style.display = "none";
        document.getElementById("animation_container").style.display="none";
        document.getElementById("ContenedorFinalizadoPositivo").style.display="flex";
    }else if((intentos===22)&&(aciertos<18)){
        mostrarResultados();
        document.getElementById("timer-container").style.display = "none";
        document.getElementById("animation_container").style.display="none";
        document.getElementById("ContenedorFinalizadoNegativo").style.display="flex";
    }
    
}

function mostrarResultados(){
    document.getElementById("contenedor-resultados").style.display="flex";
    switch (palabraA) {
    case 'correcta':
        document.getElementById("resA").innerHTML = "El resultado de la palabra A es Correcto";
        document.getElementById("resA").className = "resultadoPalabraCorrecto";
        break;
    case 'incorrecta':
        document.getElementById("resA").innerHTML = "El resultado de la palabra A es Incorrecto";
        document.getElementById("resA").className = "resultadoPalabraIncorrecto";
        break;
    }

    switch (palabraB) {
        case 'correcta':
            document.getElementById("resB").innerHTML = "El resultado de la palabra B es Correcto";
            document.getElementById("resB").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resB").innerHTML = "El resultado de la palabra B es Incorrecto";
            document.getElementById("resB").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraC) {
        case 'correcta':
            document.getElementById("resC").innerHTML = "El resultado de la palabra C es Correcto";
            document.getElementById("resC").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resC").innerHTML = "El resultado de la palabra C es Incorrecto";
            document.getElementById("resC").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraD) {
        case 'correcta':
            document.getElementById("resD").innerHTML = "El resultado de la palabra D es Correcto";
            document.getElementById("resD").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resD").innerHTML = "El resultado de la palabra D es Incorrecto";
            document.getElementById("resD").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraE) {
        case 'correcta':
            document.getElementById("resE").innerHTML = "El resultado de la palabra E es Correcto";
            document.getElementById("resE").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resE").innerHTML = "El resultado de la palabra E es Incorrecto";
            document.getElementById("resE").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraF) {
        case 'correcta':
            document.getElementById("resF").innerHTML = "El resultado de la palabra F es Correcto";
            document.getElementById("resF").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resF").innerHTML = "El resultado de la palabra F es Incorrecto";
            document.getElementById("resF").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraG) {
        case 'correcta':
            document.getElementById("resG").innerHTML = "El resultado de la palabra G es Correcto";
            document.getElementById("resG").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resG").innerHTML = "El resultado de la palabra G es Incorrecto";
            document.getElementById("resG").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraH) {
        case 'correcta':
            document.getElementById("resH").innerHTML = "El resultado de la palabra H es Correcto";
            document.getElementById("resH").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resH").innerHTML = "El resultado de la palabra H es Incorrecto";
            document.getElementById("resH").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraI) {
        case 'correcta':
            document.getElementById("resI").innerHTML = "El resultado de la palabra I es Correcto";
            document.getElementById("resI").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resI").innerHTML = "El resultado de la palabra I es Incorrecto";
            document.getElementById("resI").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraL) {
        case 'correcta':
            document.getElementById("resL").innerHTML = "El resultado de la palabra L es Correcto";
            document.getElementById("resL").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resL").innerHTML = "El resultado de la palabra L es Incorrecto";
            document.getElementById("resL").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraM) {
        case 'correcta':
            document.getElementById("resM").innerHTML = "El resultado de la palabra M es Correcto";
            document.getElementById("resM").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resM").innerHTML = "El resultado de la palabra M es Incorrecto";
            document.getElementById("resM").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraN) {
        case 'correcta':
            document.getElementById("resN").innerHTML = "El resultado de la palabra N es Correcto";
            document.getElementById("resN").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resN").innerHTML = "El resultado de la palabra N es Incorrecto";
            document.getElementById("resN").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraO) {
        case 'correcta':
            document.getElementById("resO").innerHTML = "El resultado de la palabra O es Correcto";
            document.getElementById("resO").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resO").innerHTML = "El resultado de la palabra O es Incorrecto";
            document.getElementById("resO").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraP) {
        case 'correcta':
            document.getElementById("resP").innerHTML = "El resultado de la palabra P es Correcto";
            document.getElementById("resP").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resP").innerHTML = "El resultado de la palabra P es Incorrecto";
            document.getElementById("resP").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraQ) {
        case 'correcta':
            document.getElementById("resQ").innerHTML = "El resultado de la palabra Q es Correcto";
            document.getElementById("resQ").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resQ").innerHTML = "El resultado de la palabra Q es Incorrecto";
            document.getElementById("resQ").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraR) {
        case 'correcta':
            document.getElementById("resR").innerHTML = "El resultado de la palabra R es Correcto";
            document.getElementById("resR").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resR").innerHTML = "El resultado de la palabra R es Incorrecto";
            document.getElementById("resR").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraS) {
        case 'correcta':
            document.getElementById("resS").innerHTML = "El resultado de la palabra S es Correcto";
            document.getElementById("resS").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resS").innerHTML = "El resultado de la palabra S es Incorrecto";
            document.getElementById("resS").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraT) {
        case 'correcta':
            document.getElementById("resT").innerHTML = "El resultado de la palabra T es Correcto";
            document.getElementById("resT").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resT").innerHTML = "El resultado de la palabra T es Incorrecto";
            document.getElementById("resT").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraU) {
        case 'correcta':
            document.getElementById("resU").innerHTML = "El resultado de la palabra U es Correcto";
            document.getElementById("resU").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resU").innerHTML = "El resultado de la palabra U es Incorrecto";
            document.getElementById("resU").className = "resultadoPalabraIncorrecto";
            break;
    }

    switch (palabraV) {
        case 'correcta':
            document.getElementById("resV").innerHTML = "El resultado de la palabra V es Correcto";
            document.getElementById("resV").className = "resultadoPalabraCorrecto";
            break;
        case 'incorrecta':
            document.getElementById("resV").innerHTML = "El resultado de la palabra V es Incorrecto";
            document.getElementById("resV").className = "resultadoPalabraIncorrecto";
            break;
    }

}

// Iniciar el intervalo
function iniciarContador(){
    let intervalId = setInterval(updateClock, 1000);
}
//

document.getElementById("btnReiniciar").onclick = function(){
    location.reload();
}

document.getElementById("btnReiniciar2").onclick = function(){
    location.reload();
}

document.getElementById("btnFinalizar").onclick = function(){
    window.open("../OVA10V001.html","_self");
}