console.log("Parametrización Cargada");
var actividad = "actividad2";

function pasarEstado(){
  localStorage.setItem("textvalue", actividad);
  window.open("../OVA8.html","_self");
  return false;
}



