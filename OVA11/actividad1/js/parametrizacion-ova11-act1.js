console.log("parametrización actividad 1 cargada");
var actividad = "actividad1";


function pasarEstado(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA11V001.html","_self");
    return false;
  }
