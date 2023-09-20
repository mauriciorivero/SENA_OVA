console.log("Parametrización Caragda");
var intentos = 0;
var aciertos = 0;
var errores = 0;
var actividad = "actividad2";
var btnAmigo = true;
var btn5050 = true;

function pasarEstado(){
  localStorage.setItem("textvalue", actividad);
  window.open("../OVA9.html","_self");
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

function updateBtnAmigo(){
  btnAmigo = false;
}

function updateBtn5050(){
  btn5050 = false;
}

