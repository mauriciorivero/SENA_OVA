console.log("Parametrización Cargada");
var estado = 0;
var actividad = "intro";
var escena = localStorage.getItem("textvalue");

function pasarEstado(){
    localStorage.setItem("textvalue", actividad);
    return false;
  }

