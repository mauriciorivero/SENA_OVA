var aciertos=0;
var errores=0;
var intentos=0;

var actividad = "actividad3";
var palabra1="pendiente";
var palabra2="pendiente";
var palabra3="pendiente";
var palabra4="pendiente";
var palabra5="pendiente";
var palabra6="pendiente";
var palabra7="pendiente";
var palabra8="pendiente";
var palabra9="pendiente";
var palabra10="pendiente";
var palabra11="pendiente";
var palabra12="pendiente";

function pasarEstado(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA10V001.html","_self");
    return false;
  }

document.getElementById("feedbackcontainer").style.display="none";
document.getElementById("feedbackcontainer_positive").style.display="none";
document.getElementById("feedbackcontainer_negative").style.display="none";


function agregarAciertos(){
    aciertos+=1;
    document.getElementById("contador_aciertos").innerHTML = "Aciertos: "+aciertos;
    if((aciertos===12)&&(intentos===12)){
        mostrarFeedback("win");
    }else {
    }
}

function agregarErrores(){
    errores+=1;
    document.getElementById("contador_errores").innerHTML = "Errores: "+errores;
    switch(errores){
        case 1:
            document.getElementById('imgAhorcado').src = 'img/ahorcado_1.png';
        break;
        case 2:
            document.getElementById('imgAhorcado').src = 'img/ahorcado_2.png';
        break;
        case 3:
            document.getElementById('imgAhorcado').src = 'img/ahorcado_3.png';
        break;
        case 4:
            document.getElementById('imgAhorcado').src = 'img/ahorcado_4.png';
        break;
        case 5:
            document.getElementById('imgAhorcado').src = 'img/ahorcado_5.png';
        break;
        case 6:
            document.getElementById('imgAhorcado').src = 'img/ahorcado_6.png';
            mostrarFeedback("loose");
        break;
    }
}

function agregarIntentos(palabra){
    intentos+=1;
    if((errores<7)&&(intentos>=12)&&(aciertos<12)){
        document.getElementById("contador_intentos").innerHTML = "Intentos: "+intentos;
        mostrarFeedback("loose");
    }else{
        document.getElementById("contador_intentos").innerHTML = "Intentos: "+intentos;
        switch(palabra){
            case "palabra1":
                palabra1="usada";
            break;
            case "palabra2":
                palabra2="usada";
            break;
            case "palabra3":
                palabra3="usada";
            break;
            case "palabra4":
                palabra4="usada";
            break;
            case "palabra5":
                palabra5="usada";
            break;
            case "palabra6":
                palabra6="usada";
            break;
            case "palabra7":
                palabra7="usada";
            break;
            case "palabra8":
                palabra8="usada";
            break;
            case "palabra9":
                palabra9="usada";
            break;
            case "palabra10":
                palabra10="usada";
            break;
            case "palabra11":
                palabra11="usada";
            break;
            case "palabra12":
                palabra12="usada";
            break;
        }
    }    
}

function retornarAciertos(){
    return aciertos;
}

function retornarErrores(){
    return errores;
}

function retornarIntentos(){
    return intentos;
}

function mostrarFeedback(resultado){
    if(resultado==="win"){
        document.getElementById("container_status").style.display="none";
        document.getElementById("animation_container").style.display="none";
        document.getElementById("feedbackcontainer").style.display="flex";
        document.getElementById("feedbackcontainer_negative").style.display="none";
        document.getElementById("feedbackcontainer_positive").style.display="flex";
    }else if(resultado==="loose"){
        document.getElementById("animation_container").style.display="none";
        document.getElementById("feedbackcontainer").style.display="flex";
        document.getElementById("feedbackcontainer_negative").style.display="flex";
        
    }
}

document.getElementById("terminarBtn").onclick = function(){
    window.open("../OVA10V001.html","_self");
}

document.getElementById("reinciarBtn").onclick = function(){
    location.reload();
}