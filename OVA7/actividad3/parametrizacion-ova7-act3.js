console.log("Parametrización Cargada");
var intentos = 0;
var aciertos = 0;
var errores = 0;
var actividad = "actividad3";

function pasarEstado(){
  localStorage.setItem("textvalue", actividad);
  window.open("../OVA7V001.html","_self");
  return false;
}
