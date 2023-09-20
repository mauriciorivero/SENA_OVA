console.log("parametrización actividad 3 cargada");
var actividad = "actividad3";


function pasarEstado(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA11V001.html","_self");
    return false;
  }
