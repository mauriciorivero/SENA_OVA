console.log("Parametrización cargada");
var intentos = 0;
var aciertos = 0;
var errores = 0;
var actividad = "actividad2";

function pasarEstado(){
  localStorage.setItem("textvalue", actividad);
  window.open("../OVA5.html","_self");
  return false;
}
