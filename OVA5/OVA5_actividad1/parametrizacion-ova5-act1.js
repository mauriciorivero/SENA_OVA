
var intentos = 0;
var aciertos = 0;
var errores = 0;
console.log("parametrizacion cargada");

var actividad = "actividad1";

function pasarEstado(){
  localStorage.setItem("textvalue", actividad);
  window.open("../OVA5.html","_self");
  return false;
}
