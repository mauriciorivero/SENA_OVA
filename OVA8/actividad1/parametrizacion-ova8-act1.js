console.log("Parametrización Cargada");
var intentos = 0;
var aciertos = 0;
var errores = 0;
var actividad = "actividad2";

function pasarEstado(){
  localStorage.setItem("textvalue", actividad);
  window.open("../OVA8.html","_self");
  return false;
}

function addAciertos(){
  intentos++;
  aciertos++;
  console.log("los aciertos son: "+aciertos);
}

function addErrores(){
  intentos++;
  errores++;
  console.log("los errores son: "+errores);
}


