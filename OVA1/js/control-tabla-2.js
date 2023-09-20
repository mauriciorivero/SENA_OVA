var saveWins = 0;
var saveLoses = 0;

function close_window() {
    if (confirm("Saliendo de la OVA")) {
      close();
    }
}

const verifyWins = () => {
    //var saveWins = 0;
    const countWins = (win) => {
        saveWins += win;
        if(saveWins==49){
            console.log('Terminado conteo de ganadas');
        }else if(saveWins<49){
            console.log('Acierto: '+saveWins);    
        }
    }
    return countWins;
}

let myVerifyWins = verifyWins();

function verificar(){
    if(saveWins==49){
        document.getElementById("vinculo-feedback-ok").style.display = "flex";
        document.getElementById("btn-resultados").style.display = "flex";
    }else if(saveWins<49){
        document.getElementById("vinculo-feedback-wrong").style.display = "flex";
    }
}

document.getElementById("cerrarOva").onclick = function(){
    if (confirm("Saliendo de la OVA")) {
        close();
      }
}

document.getElementById("vinculo-feedback-ok").onclick = function(){
    if (confirm("Saliendo de la OVA")) {
        close();
    }
}

document.getElementById("vinculo-feedback-wrong").onclick = function(){
    document.getElementById("vinculo-feedback-wrong").style.display = "none";
}


//MOSTRAR Y OCULTAR PLANO
document.getElementById("mostrarTip").onclick = function () {
    document.getElementById("animation_container").style.display = "block";
    document.getElementById("animation_container").style.zIndex = "1";
    document.getElementById("animation_container").style.position = "absolute";
    document.getElementById("ocultarTip").style.top="5em";
    document.getElementById("ocultarTip").style.right="4em";
    this.style.top="-20em";
    this.style.right="-20em";
}

document.getElementById("ocultarTip").onclick = function () {
    document.getElementById("animation_container").style.display = "none";
    document.getElementById("mostrarTip").style.top="5em";
    document.getElementById("mostrarTip").style.right="4em";
    this.style.top="-20em";
    this.style.right="-20em";
}

//MOSTRAR Y OCULTAR AYUDA
document.getElementById("mostrarAyuda").onclick = function () {
    document.getElementById("contenedor-ayuda").style.display = "block";
    document.getElementById("contenedor-ayuda").style.zIndex = "2";
    document.getElementById("contenedor-ayuda").style.position = "absolute";
    document.getElementById("ocultarAyuda").style.top="10em";
    document.getElementById("ocultarAyuda").style.right="4em";
    this.style.top="-20em";
    this.style.right="-20em";
}

document.getElementById("ocultarAyuda").onclick = function () {
    document.getElementById("contenedor-ayuda").style.display = "none";
    document.getElementById("mostrarAyuda").style.top="10em";
    document.getElementById("mostrarAyuda").style.right="4em";
    this.style.top="-20em";
    this.style.right="-20em";
}

document.getElementById("validar").onclick = function(){
    saveWins=0;
    console.log("entro al verificarDatos");
    var c11 = document.getElementById("i1-1").value;
    var c12 = parseFloat(document.getElementById("i1-2").value);
    var c13 = parseFloat(document.getElementById("i1-3").value);
    var c14 = parseFloat(document.getElementById("i1-4").value);
    var c15 = parseFloat(document.getElementById("i1-5").value);
    var c16 = parseFloat(document.getElementById("i1-6").value);
    var c17 = parseFloat(document.getElementById("i1-7").value);

    var c21 = document.getElementById("i2-1").value;
    var c22 = parseFloat(document.getElementById("i2-2").value);
    var c23 = parseFloat(document.getElementById("i2-3").value);
    var c24 = parseFloat(document.getElementById("i2-4").value);
    var c25 = parseFloat(document.getElementById("i2-5").value);
    var c26 = parseFloat(document.getElementById("i2-6").value);
    var c27 = parseFloat(document.getElementById("i2-7").value);

    var c31 = document.getElementById("i3-1").value;
    var c32 = parseFloat(document.getElementById("i3-2").value);
    var c33 = parseFloat(document.getElementById("i3-3").value);
    var c34 = parseFloat(document.getElementById("i3-4").value);
    var c35 = parseFloat(document.getElementById("i3-5").value);
    var c36 = parseFloat(document.getElementById("i3-6").value);
    var c37 = parseFloat(document.getElementById("i3-7").value);

    var c31b = document.getElementById("i3-1b").value;
    var c32b = parseFloat(document.getElementById("i3-2b").value);
    var c33b = parseFloat(document.getElementById("i3-3b").value);
    var c34b = parseFloat(document.getElementById("i3-4b").value);
    var c35b = parseFloat(document.getElementById("i3-5b").value);
    var c36b = parseFloat(document.getElementById("i3-6b").value);
    var c37b = parseFloat(document.getElementById("i3-7b").value);

    var c41 = document.getElementById("i4-1").value;
    var c42 = parseFloat(document.getElementById("i4-2").value);
    var c43 = parseFloat(document.getElementById("i4-3").value);
    var c44 = parseFloat(document.getElementById("i4-4").value);
    var c45 = parseFloat(document.getElementById("i4-5").value);
    var c46 = parseFloat(document.getElementById("i4-6").value);
    var c47 = parseFloat(document.getElementById("i4-7").value);

    var c51 = document.getElementById("i5-1").value;
    var c52 = parseFloat(document.getElementById("i5-2").value);
    var c53 = parseFloat(document.getElementById("i5-3").value);
    var c54 = parseFloat(document.getElementById("i5-4").value);
    var c55 = parseFloat(document.getElementById("i5-5").value);
    var c56 = parseFloat(document.getElementById("i5-6").value);
    var c57 = parseFloat(document.getElementById("i5-7").value);

    var c61 = document.getElementById("i6-1").value;
    var c62 = parseFloat(document.getElementById("i6-2").value);
    var c63 = parseFloat(document.getElementById("i6-3").value);
    var c64 = parseFloat(document.getElementById("i6-4").value);
    var c65 = parseFloat(document.getElementById("i6-5").value);
    var c66 = parseFloat(document.getElementById("i6-6").value);
    var c67 = parseFloat(document.getElementById("i6-7").value);

    if(c11=="m3"){
        myVerifyWins(1);
        document.getElementById("i1-1").style.backgroundColor = "green";
        document.getElementById("i1-1").style.color = "white";
        }else{
        document.getElementById("i1-1").style.backgroundColor = "red";
        document.getElementById("i1-1").style.color = "yellow";
    }
    if(c12==0.20){
        myVerifyWins(1);
        document.getElementById("i1-2").style.backgroundColor = "green";
        document.getElementById("i1-2").style.color = "white";
        }else{
        document.getElementById("i1-2").style.backgroundColor = "red";
        document.getElementById("i1-2").style.color = "yellow";
    }
    if(c13==0.20){
        myVerifyWins(1);
        document.getElementById("i1-3").style.backgroundColor = "green";
        document.getElementById("i1-3").style.color = "white";
        }else{
        document.getElementById("i1-3").style.backgroundColor = "red";
        document.getElementById("i1-3").style.color = "yellow";
    }   
    if(c14==3){
        myVerifyWins(1);
        document.getElementById("i1-4").style.backgroundColor = "green";
        document.getElementById("i1-4").style.color = "white";
        }else{
        document.getElementById("i1-4").style.backgroundColor = "red";
        document.getElementById("i1-4").style.color = "yellow";
    }
    if(c15==0.120){
        myVerifyWins(1);
        document.getElementById("i1-5").style.backgroundColor = "green";
        document.getElementById("i1-5").style.color = "white";
        }else{
        document.getElementById("i1-5").style.backgroundColor = "red";
        document.getElementById("i1-5").style.color = "yellow";
    }
    if(c16==6){
        myVerifyWins(1);
        document.getElementById("i1-6").style.backgroundColor = "green";
        document.getElementById("i1-6").style.color = "white";
        }else{
        document.getElementById("i1-6").style.backgroundColor = "red";
        document.getElementById("i1-6").style.color = "yellow";
    }
    if(c17==0.720){
        myVerifyWins(1);
        document.getElementById("i1-7").style.backgroundColor = "green";
        document.getElementById("i1-7").style.color = "white";
        }else{
        document.getElementById("i1-7").style.backgroundColor = "red";
        document.getElementById("i1-7").style.color = "yellow";
    }
    
    if(c21=="m3"){
        myVerifyWins(1);
        document.getElementById("i2-1").style.backgroundColor = "green";
        document.getElementById("i2-1").style.color = "white";
        }else{
        document.getElementById("i2-1").style.backgroundColor = "red";
        document.getElementById("i2-1").style.color = "yellow";
    }
    if(c22==0.15){
        myVerifyWins(1);
        document.getElementById("i2-2").style.backgroundColor = "green";
        document.getElementById("i2-2").style.color = "white";
        }else{
        document.getElementById("i2-2").style.backgroundColor = "red";
        document.getElementById("i2-2").style.color = "yellow";
    }
    if(c23==0.20){
        myVerifyWins(1);
        document.getElementById("i2-3").style.backgroundColor = "green";
        document.getElementById("i2-3").style.color = "white";
        }else{
        document.getElementById("i2-3").style.backgroundColor = "red";
        document.getElementById("i2-3").style.color = "yellow";
    }   
    if(c24==3){
        myVerifyWins(1);
        document.getElementById("i2-4").style.backgroundColor = "green";
        document.getElementById("i2-4").style.color = "white";
        }else{
        document.getElementById("i2-4").style.backgroundColor = "red";
        document.getElementById("i2-4").style.color = "yellow";
    }
    if(c25==0.090){
        myVerifyWins(1);
        document.getElementById("i2-5").style.backgroundColor = "green";
        document.getElementById("i2-5").style.color = "white";
        }else{
        document.getElementById("i2-5").style.backgroundColor = "red";
        document.getElementById("i2-5").style.color = "yellow";
    }
    if(c26==2){
        myVerifyWins(1);
        document.getElementById("i2-6").style.backgroundColor = "green";
        document.getElementById("i2-6").style.color = "white";
        }else{
        document.getElementById("i2-6").style.backgroundColor = "red";
        document.getElementById("i2-6").style.color = "yellow";
    }
    if(c27==0.180){
        myVerifyWins(1);
        document.getElementById("i2-7").style.backgroundColor = "green";
        document.getElementById("i2-7").style.color = "white";
        }else{
        document.getElementById("i2-7").style.backgroundColor = "red";
        document.getElementById("i2-7").style.color = "yellow";
    }

    if(c31=="m3"){
        myVerifyWins(1);
        document.getElementById("i3-1").style.backgroundColor = "green";
        document.getElementById("i3-1").style.color = "white";
        }else{
        document.getElementById("i3-1").style.backgroundColor = "red";
        document.getElementById("i3-1").style.color = "yellow";
    }
    if(c32==10){
        myVerifyWins(1);
        document.getElementById("i3-2").style.backgroundColor = "green";
        document.getElementById("i3-2").style.color = "white";
        }else{
        document.getElementById("i3-2").style.backgroundColor = "red";
        document.getElementById("i3-2").style.color = "yellow";
    }
    if(c33==0.20){
        myVerifyWins(1);
        document.getElementById("i3-3").style.backgroundColor = "green";
        document.getElementById("i3-3").style.color = "white";
        }else{
        document.getElementById("i3-3").style.backgroundColor = "red";
        document.getElementById("i3-3").style.color = "yellow";
    }   
    if(c34==0.20){
        myVerifyWins(1);
        document.getElementById("i3-4").style.backgroundColor = "green";
        document.getElementById("i3-4").style.color = "white";
        }else{
        document.getElementById("i3-4").style.backgroundColor = "red";
        document.getElementById("i3-4").style.color = "yellow";
    }
    if(c35==0.400){
        myVerifyWins(1);
        document.getElementById("i3-5").style.backgroundColor = "green";
        document.getElementById("i3-5").style.color = "white";
        }else{
        document.getElementById("i3-5").style.backgroundColor = "red";
        document.getElementById("i3-5").style.color = "yellow";
    }
    if(c36==2){
        myVerifyWins(1);
        document.getElementById("i3-6").style.backgroundColor = "green";
        document.getElementById("i3-6").style.color = "white";
        }else{
        document.getElementById("i3-6").style.backgroundColor = "red";
        document.getElementById("i3-6").style.color = "yellow";
    }
    if(c37==0.800){
        myVerifyWins(1);
        document.getElementById("i3-7").style.backgroundColor = "green";
        document.getElementById("i3-7").style.color = "white";
        }else{
        document.getElementById("i3-7").style.backgroundColor = "red";
        document.getElementById("i3-7").style.color = "yellow";
    }

    if(c31b=="m3"){
        myVerifyWins(1);
        document.getElementById("i3-1b").style.backgroundColor = "green";
        document.getElementById("i3-1b").style.color = "white";
        }else{
        document.getElementById("i3-1b").style.backgroundColor = "red";
        document.getElementById("i3-1b").style.color = "yellow";
    }
    if(c32b==4.6){
        myVerifyWins(1);
        document.getElementById("i3-2b").style.backgroundColor = "green";
        document.getElementById("i3-2b").style.color = "white";
        }else{
        document.getElementById("i3-2b").style.backgroundColor = "red";
        document.getElementById("i3-2b").style.color = "yellow";
    }
    if(c33b==0.20){
        myVerifyWins(1);
        document.getElementById("i3-3b").style.backgroundColor = "green";
        document.getElementById("i3-3b").style.color = "white";
        }else{
        document.getElementById("i3-3b").style.backgroundColor = "red";
        document.getElementById("i3-3b").style.color = "yellow";
    }   
    if(c34b==0.20){
        myVerifyWins(1);
        document.getElementById("i3-4b").style.backgroundColor = "green";
        document.getElementById("i3-4b").style.color = "white";
        }else{
        document.getElementById("i3-4b").style.backgroundColor = "red";
        document.getElementById("i3-4b").style.color = "yellow";
    }
    if(c35b==0.18){
        myVerifyWins(1);
        document.getElementById("i3-5b").style.backgroundColor = "green";
        document.getElementById("i3-5b").style.color = "white";
        }else{
        document.getElementById("i3-5b").style.backgroundColor = "red";
        document.getElementById("i3-5b").style.color = "yellow";
    }
    if(c36b==3){
        myVerifyWins(1);
        document.getElementById("i3-6b").style.backgroundColor = "green";
        document.getElementById("i3-6b").style.color = "white";
        }else{
        document.getElementById("i3-6b").style.backgroundColor = "red";
        document.getElementById("i3-6b").style.color = "yellow";
    }
    if(c37b==0.55){
        myVerifyWins(1);
        document.getElementById("i3-7b").style.backgroundColor = "green";
        document.getElementById("i3-7b").style.color = "white";
        }else{
        document.getElementById("i3-7b").style.backgroundColor = "red";
        document.getElementById("i3-7b").style.color = "yellow";
    }

    if(c41=="m3"){
        myVerifyWins(1);
        document.getElementById("i4-1").style.backgroundColor = "green";
        document.getElementById("i4-1").style.color = "white";
        }else{
        document.getElementById("i4-1").style.backgroundColor = "red";
        document.getElementById("i4-1").style.color = "yellow";
    }
    if(c42==10){
        myVerifyWins(1);
        document.getElementById("i4-2").style.backgroundColor = "green";
        document.getElementById("i4-2").style.color = "white";
        }else{
        document.getElementById("i4-2").style.backgroundColor = "red";
        document.getElementById("i4-2").style.color = "yellow";
    }
    if(c43==0.30){
        myVerifyWins(1);
        document.getElementById("i4-3").style.backgroundColor = "green";
        document.getElementById("i4-3").style.color = "white";
        }else{
        document.getElementById("i4-3").style.backgroundColor = "red";
        document.getElementById("i4-3").style.color = "yellow";
    }   
    if(c44==0.30){
        myVerifyWins(1);
        document.getElementById("i4-4").style.backgroundColor = "green";
        document.getElementById("i4-4").style.color = "white";
        }else{
        document.getElementById("i4-4").style.backgroundColor = "red";
        document.getElementById("i4-4").style.color = "yellow";
    }
    if(c45==0.900){
        myVerifyWins(1);
        document.getElementById("i4-5").style.backgroundColor = "green";
        document.getElementById("i4-5").style.color = "white";
        }else{
        document.getElementById("i4-5").style.backgroundColor = "red";
        document.getElementById("i4-5").style.color = "yellow";
    }
    if(c46==2){
        myVerifyWins(1);
        document.getElementById("i4-6").style.backgroundColor = "green";
        document.getElementById("i4-6").style.color = "white";
        }else{
        document.getElementById("i4-6").style.backgroundColor = "red";
        document.getElementById("i4-6").style.color = "yellow";
    }
    if(c47==1.800){
        myVerifyWins(1);
        document.getElementById("i4-7").style.backgroundColor = "green";
        document.getElementById("i4-7").style.color = "white";
        }else{
        document.getElementById("i4-7").style.backgroundColor = "red";
        document.getElementById("i4-7").style.color = "yellow";
    }

    if(c51=="m3"){
        myVerifyWins(1);
        document.getElementById("i5-1").style.backgroundColor = "green";
        document.getElementById("i5-1").style.color = "white";
        }else{
        document.getElementById("i5-1").style.backgroundColor = "red";
        document.getElementById("i5-1").style.color = "yellow";
    }
    if(c52==5.60){
        myVerifyWins(1);
        document.getElementById("i5-2").style.backgroundColor = "green";
        document.getElementById("i5-2").style.color = "white";
        }else{
        document.getElementById("i5-2").style.backgroundColor = "red";
        document.getElementById("i5-2").style.color = "yellow";
    }
    if(c53==4.60){
        myVerifyWins(1);
        document.getElementById("i5-3").style.backgroundColor = "green";
        document.getElementById("i5-3").style.color = "white";
        }else{
        document.getElementById("i5-3").style.backgroundColor = "red";
        document.getElementById("i5-3").style.color = "yellow";
    }   
    if(c54==0.20){
        myVerifyWins(1);
        document.getElementById("i5-4").style.backgroundColor = "green";
        document.getElementById("i5-4").style.color = "white";
        }else{
        document.getElementById("i5-4").style.backgroundColor = "red";
        document.getElementById("i5-4").style.color = "yellow";
    }
    if(c55==5.15){
        myVerifyWins(1);
        document.getElementById("i5-5").style.backgroundColor = "green";
        document.getElementById("i5-5").style.color = "white";
        }else{
        document.getElementById("i5-5").style.backgroundColor = "red";
        document.getElementById("i5-5").style.color = "yellow";
    }
    if(c56==1){
        myVerifyWins(1);
        document.getElementById("i5-6").style.backgroundColor = "green";
        document.getElementById("i5-6").style.color = "white";
        }else{
        document.getElementById("i5-6").style.backgroundColor = "red";
        document.getElementById("i5-6").style.color = "yellow";
    }
    if(c57==5.15){
        myVerifyWins(1);
        document.getElementById("i5-7").style.backgroundColor = "green";
        document.getElementById("i5-7").style.color = "white";
        }else{
        document.getElementById("i5-7").style.backgroundColor = "red";
        document.getElementById("i5-7").style.color = "yellow";
    }

    if(c61=="m3"){
        myVerifyWins(1);
        document.getElementById("i6-1").style.backgroundColor = "green";
        document.getElementById("i6-1").style.color = "white";
    }else{
        document.getElementById("i6-1").style.backgroundColor = "red";
        document.getElementById("i6-1").style.color = "yellow";
    }
    if(c62==9.400){
        myVerifyWins(1);
        document.getElementById("i6-2").style.backgroundColor = "green";
        document.getElementById("i6-2").style.color = "white";
    }else{
        document.getElementById("i6-2").style.backgroundColor = "red";
        document.getElementById("i6-2").style.color = "yellow";
    }
    if(c63==4.40){
        myVerifyWins(1);
        document.getElementById("i6-3").style.backgroundColor = "green";
        document.getElementById("i6-3").style.color = "white";
        }else{
        document.getElementById("i6-3").style.backgroundColor = "red";
        document.getElementById("i6-3").style.color = "yellow";
    }   
    if(c64==0.08){
        myVerifyWins(1);
        document.getElementById("i6-4").style.backgroundColor = "green";
        document.getElementById("i6-4").style.color = "white";
        }else{
        document.getElementById("i6-4").style.backgroundColor = "red";
        document.getElementById("i6-4").style.color = "yellow";
    }
    if(c65==3.30){
        myVerifyWins(1);
        document.getElementById("i6-5").style.backgroundColor = "green";
        document.getElementById("i6-5").style.color = "white";
        }else{
        document.getElementById("i6-5").style.backgroundColor = "red";
        document.getElementById("i6-5").style.color = "yellow";
    }
    if(c66==1){
        myVerifyWins(1);
        document.getElementById("i6-6").style.backgroundColor = "green";
        document.getElementById("i6-6").style.color = "white";
        }else{
        document.getElementById("i6-6").style.backgroundColor = "red";
        document.getElementById("i6-6").style.color = "yellow";
    }
    if(c67==3.30){
        myVerifyWins(1);
        document.getElementById("i6-7").style.backgroundColor = "green";
        document.getElementById("i6-7").style.color = "white";
        }else{
        document.getElementById("i6-7").style.backgroundColor = "red";
        document.getElementById("i6-7").style.color = "yellow";
    }
    verificar();
}

