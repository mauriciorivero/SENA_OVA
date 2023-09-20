/*
Parametrización para la actividad 2 de la OVA11
*/

var intentos=5;
var actividad = "actividad2";


function pasarEstado(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA11V001.html","_self");
    return false;
}

document.getElementById("listaChequeo").style.display = "none";
document.getElementById("RetroalimentacionPositiva").style.display="none";
document.getElementById("RetroalimentacionNegativa").style.display="none";
document.getElementById("RetroalimentacionNegativaTotal").style.display="none";


document.getElementById("btnIniciar").onclick = function(){
    document.getElementById("aviso_introduccion").style.backgroundColor="#808080";
    document.getElementById("aviso_actividad").style.backgroundColor="#E74E25";
    document.getElementById("listaChequeo").style.display="flex";
    document.getElementById("introduccion").style.display="none";
}


document.getElementById("btnVerificar").onclick = function(){
    document.getElementById("aviso_actividad").style.backgroundColor="#808080";
    document.getElementById("aviso_feedback").style.backgroundColor="#E74E25";
    let aciertos=0;
    let errores=0;
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");
    let check4 = document.getElementById("check4");
    let check5 = document.getElementById("check5");
    let check6 = document.getElementById("check6");
    let check7 = document.getElementById("check7");
    let check8 = document.getElementById("check8");
    let check9 = document.getElementById("check9");
    let check10 = document.getElementById("check10");
    let check11 = document.getElementById("check11");
    let check12 = document.getElementById("check12");
    let check13 = document.getElementById("check13");
    let check14 = document.getElementById("check14");
    let check15 = document.getElementById("check15");
    let check16 = document.getElementById("check16");
    let check17 = document.getElementById("check17");
    let check18 = document.getElementById("check18");
    let check19 = document.getElementById("check19");
    let check20 = document.getElementById("check20");
    let check21 = document.getElementById("check21");


    if(check1.checked){
        aciertos++;
    }else{
        errores++;
    }   

    if(check2.checked){
        aciertos++;
    }else{
        errores++;
    }
    
    if(check3.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check4.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check5.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check6.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check7.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check8.checked){
        errores++;
    }else{
        aciertos++;
    }

    if(check9.checked){
        errores++;
    }else{
        aciertos++;
    }

    if(check10.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check11.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check12.checked){
        errores++;
    }else{
        aciertos++;
    }

    if(check13.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check14.checked){
        errores++;
    }else{
        aciertos++;
    }

    if(check15.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check16.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check17.checked){
        errores++;
    }else{
        aciertos++;
    }

    if(check18.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check19.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check20.checked){
        aciertos++;
    }else{
        errores++;
    }

    if(check21.checked){
        aciertos++;
    }else{
        errores++;
    }

    document.getElementById("listaChequeo").style.display="none";
    
    console.log("Aciertos: "+aciertos);
    console.log("Errores: "+errores);

    if((intentos<=5)&&(aciertos===21)){
        document.getElementById("RetroalimentacionPositiva").style.display="flex";
    }else if((intentos>=1)&&(aciertos!=21)){
        intentos--;
        document.getElementById("RetroalimentacionNegativa").style.display="flex";
        document.getElementById("estado_intentos").innerHTML="Tienes "+intentos+" intentos";
    }else if(intentos===0){
        document.getElementById("RetroalimentacionNegativaTotal").style.display="flex";
    }
}

function resetearChecks(){
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = false;
    document.getElementById("check5").checked = false;
    document.getElementById("check6").checked = false;
    document.getElementById("check7").checked = false;
    document.getElementById("check8").checked = false;
    document.getElementById("check9").checked = false;
    document.getElementById("check10").checked = false;
    document.getElementById("check11").checked = false;
    document.getElementById("check12").checked = false;
    document.getElementById("check13").checked = false;
    document.getElementById("check14").checked = false;
    document.getElementById("check15").checked = false;
    document.getElementById("check16").checked = false;
    document.getElementById("check17").checked = false;
    document.getElementById("check18").checked = false;
    document.getElementById("check19").checked = false;
    document.getElementById("check20").checked = false;
    document.getElementById("check21").checked = false;
}

document.getElementById("btnReintentar").onclick = function(){
    document.getElementById("aviso_feedback").style.backgroundColor="#808080";
    document.getElementById("aviso_actividad").style.backgroundColor="#E74E25";
    document.getElementById("listaChequeo").style.display="flex";
    document.getElementById("RetroalimentacionNegativa").style.display="none";
}

document.getElementById("btnReiniciar").onclick = function(){
    resetearChecks();
    window.location.reload();
}

document.getElementById("btnTerminar").onclick = function(){
    pasarEstado();
}