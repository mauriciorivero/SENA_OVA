var ordenJuego = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var aciertos = [];
var errores = [];
var ordenJugador = 0;
var ficha = 0;
var intentos = 1;
var actividad = "iniciada";


console.log("El orden del jugador es: "+ordenJugador);
console.log("El estado de las fichas es: "+ficha);

function resetearArreglos(){
    aciertos.splice(0,aciertos.length);
    errores.splice(0,errores.length);
    console.log("El array de aciertos es: "+aciertos);
    console.log("El array de errores es: "+errores);
}

function pasarEstado(){
  localStorage.setItem("textvalue", actividad);
  window.open("../OVA4.html","_self");
  return false;
}
