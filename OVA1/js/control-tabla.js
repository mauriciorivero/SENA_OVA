function close_window() {
    if (confirm("Saliendo de la OVA")) {
      close();
    }
}

document.getElementById("cerrarOva").onclick = close_window;

document.getElementById("mostrarTip").onclick = function () {
    document.getElementById("animation_container").style.display = "block";
    document.getElementById("animation_container").style.zIndex = "1";
    document.getElementById("animation_container").style.position = "absolute";
    document.getElementById("ocultarTip").style.top="5em";
    document.getElementById("ocultarTip").style.right="5em";
    this.style.top="-20em";
    this.style.right="-20em";
}

document.getElementById("ocultarTip").onclick = function () {
    document.getElementById("animation_container").style.display = "none";
    document.getElementById("mostrarTip").style.top="5em";
    document.getElementById("mostrarTip").style.right="5em";
    this.style.top="-20em";
    this.style.right="-20em";
}

//MOSTRAR Y OCULTAR AYUDA
document.getElementById("mostrarAyuda").onclick = function () {
    document.getElementById("contenedor-ayuda").style.display = "block";
    document.getElementById("contenedor-ayuda").style.zIndex = "2";
    document.getElementById("contenedor-ayuda").style.position = "absolute";
    document.getElementById("ocultarAyuda").style.top="10em";
    document.getElementById("ocultarAyuda").style.right="5em";
    this.style.top="-20em";
    this.style.right="-20em";
}

document.getElementById("ocultarAyuda").onclick = function () {
    document.getElementById("contenedor-ayuda").style.display = "none";
    document.getElementById("mostrarAyuda").style.top="10em";
    document.getElementById("mostrarAyuda").style.right="5em";
    this.style.top="-20em";
    this.style.right="-20em";
}


var saveWins = 0;
const verifyWins = () => {
    //var saveWins = 0;
    const countWins = (win) => {
        saveWins += win;
        if(saveWins==42){
            console.log('Terminado conteo de ganadas');
        }else if(saveWins<42){
            console.log('Acierto: '+saveWins);    
        }
    }
    return countWins;
}
let myVerifyWins = verifyWins();

var saveLoses = 0;
const verifyRow = () => {
    //var saveWins = 0;
    const countLoses = (loss) => {
        saveLoses += loss;
        if(saveLoses==6){
            console.log('Terminado conteo de filas');
            verificar();
        }else if(saveLoses<6){
            console.log('fila perdida: '+saveLoses);
        }
    }
    return countLoses;
}
let myVerifyRow = verifyRow();




function verificar(){
    if((saveLoses==6)&&(saveWins==42)){
        document.getElementById("vinculo-feedback-ok").style.display = "flex";
    }else if((saveLoses==6)&&(saveWins<42)){
        document.getElementById("vinculo-feedback-wrong").style.display = "flex";
    }
}



document.getElementById("fila1").onclick = function () {
    //alert("funciona fila 1");
    var c11 = document.getElementById("i1-1").value;
    var c12 = parseFloat(document.getElementById("i1-2").value);
    var c13 = parseFloat(document.getElementById("i1-3").value);
    var c14 = parseFloat(document.getElementById("i1-4").value);
    var c15 = parseFloat(document.getElementById("i1-5").value);
    var c16 = parseFloat(document.getElementById("i1-6").value);
    var c17 = parseFloat(document.getElementById("i1-7").value);
    if((c11!='sel')&&(c12!=0.000)&&(c13!=0.000)&&(c14!=0.000)&&(c15!=0.000)&&(c16!=0.000)&&(c17!=0.000)){
        if((c11=="m3")||(c12==0.20)||(c13==0.20)||(c14==3)||(c15==0.12)||(c16==6)||(c17==0.720)){
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
            if(c15==0.12){
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
            if(c17==0.72){
                myVerifyWins(1);
                document.getElementById("i1-7").style.backgroundColor = "green";
                document.getElementById("i1-7").style.color = "white";
                }else{
                document.getElementById("i1-7").style.backgroundColor = "red";
                document.getElementById("i1-7").style.color = "yellow";
            }
        }
        myVerifyRow(1);
        document.getElementById("fila1").disabled=true;
    }else{
        alert("Por favor diligencia todos los campos de la fila");
    }
}
document.getElementById("fila2").onclick = function () {
    var c21 = document.getElementById("i2-1").value;
    var c22 = parseFloat(document.getElementById("i2-2").value);
    var c23 = parseFloat(document.getElementById("i2-3").value);
    var c24 = parseFloat(document.getElementById("i2-4").value);
    var c25 = parseFloat(document.getElementById("i2-5").value);
    var c26 = parseFloat(document.getElementById("i2-6").value);
    var c27 = parseFloat(document.getElementById("i2-7").value);
    if((c21!='sel')&&(c22!=0.000)&&(c23!=0.000)&&(c24!=0.000)&&(c25!=0.000)&&(c26!=0.000)&&(c27!=0.000)){
        if((c21=="m3")||(c22==0.20)||(c23==0.15)||(c24==2.70)||(c25==0.081)||(c26==2)||(c27==0.162)){
            if(c21=="m3"){
                myVerifyWins(1);
                document.getElementById("i2-1").style.backgroundColor = "green";
                document.getElementById("i2-1").style.color = "white";
                }else{
                document.getElementById("i2-1").style.backgroundColor = "red";
                document.getElementById("i2-1").style.color = "yellow";
            }
            if(c22==0.20){
                myVerifyWins(1);
                document.getElementById("i2-2").style.backgroundColor = "green";
                document.getElementById("i2-2").style.color = "white";
                }else{
                document.getElementById("i2-2").style.backgroundColor = "red";
                document.getElementById("i2-2").style.color = "yellow";
            }
            if(c23==0.15){
                myVerifyWins(1);
                document.getElementById("i2-3").style.backgroundColor = "green";
                document.getElementById("i2-3").style.color = "white";
                }else{
                document.getElementById("i2-3").style.backgroundColor = "red";
                document.getElementById("i2-3").style.color = "yellow";
            }   
            if(c24==2.70){
                myVerifyWins(1);
                document.getElementById("i2-4").style.backgroundColor = "green";
                document.getElementById("i2-4").style.color = "white";
                }else{
                document.getElementById("i2-4").style.backgroundColor = "red";
                document.getElementById("i2-4").style.color = "yellow";
            }
            if(c25==0.081){
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
            if(c27==0.162){
                myVerifyWins(1);
                document.getElementById("i2-7").style.backgroundColor = "green";
                document.getElementById("i2-7").style.color = "white";
                }else{
                document.getElementById("i2-7").style.backgroundColor = "red";
                document.getElementById("i2-7").style.color = "yellow";
            }   
        }
        myVerifyRow(1);
        document.getElementById("fila2").disabled=true;
        }else{
        alert("Por favor diligencia todos los campos de la fila");
    }
    
}
document.getElementById("fila3").onclick = function () {
    var c31 = document.getElementById("i3-1").value;
    var c32 = parseFloat(document.getElementById("i3-2").value);
    var c33 = parseFloat(document.getElementById("i3-3").value);
    var c34 = parseFloat(document.getElementById("i3-4").value);
    var c35 = parseFloat(document.getElementById("i3-5").value);
    var c36 = parseFloat(document.getElementById("i3-6").value);
    var c37 = parseFloat(document.getElementById("i3-7").value);
    if((c31!='sel')&&(c32!=0.000)&&(c33!=0.000)&&(c34!=0.000)&&(c35!=0.000)&&(c36!=0.000)&&(c37!=0.000)){
        if((c31=="m3")||(c32==0.20)||(c33==32)||(c34==0.20)||(c35==1.28)||(c36==7)||(c37==8.96)){
            if(c31=="m3"){
                myVerifyWins(1);
                document.getElementById("i3-1").style.backgroundColor = "green";
                document.getElementById("i3-1").style.color = "white";
                }else{
                document.getElementById("i3-1").style.backgroundColor = "red";
                document.getElementById("i3-1").style.color = "yellow";
            }
            if(c32==0.20){
                myVerifyWins(1);
                document.getElementById("i3-2").style.backgroundColor = "green";
                document.getElementById("i3-2").style.color = "white";
                }else{
                document.getElementById("i3-2").style.backgroundColor = "red";
                document.getElementById("i3-2").style.color = "yellow";
            }
            if(c33==32){
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
            if(c35==1.28){
                myVerifyWins(1);
                document.getElementById("i3-5").style.backgroundColor = "green";
                document.getElementById("i3-5").style.color = "white";
                }else{
                document.getElementById("i3-5").style.backgroundColor = "red";
                document.getElementById("i3-5").style.color = "yellow";
            }
            if(c36==7){
                myVerifyWins(1);
                document.getElementById("i3-6").style.backgroundColor = "green";
                document.getElementById("i3-6").style.color = "white";
                }else{
                document.getElementById("i3-6").style.backgroundColor = "red";
                document.getElementById("i3-6").style.color = "yellow";
            }
            if(c37==8.96){
                myVerifyWins(1);
                document.getElementById("i3-7").style.backgroundColor = "green";
                document.getElementById("i3-7").style.color = "white";
                }else{
                document.getElementById("i3-7").style.backgroundColor = "red";
                document.getElementById("i3-7").style.color = "yellow";
            }   
        }
        myVerifyRow(1);
        document.getElementById("fila3").disabled=true;
        }else{
            alert("Por favor diligencia todos los campos de la fila");
        }
    
}
document.getElementById("fila4").onclick = function () {
    var c41 = document.getElementById("i4-1").value;
    var c42 = parseFloat(document.getElementById("i4-2").value);
    var c43 = parseFloat(document.getElementById("i4-3").value);
    var c44 = parseFloat(document.getElementById("i4-4").value);
    var c45 = parseFloat(document.getElementById("i4-5").value);
    var c46 = parseFloat(document.getElementById("i4-6").value);
    var c47 = parseFloat(document.getElementById("i4-7").value);
    if((c41!='sel')&&(c42!=0.000)&&(c43!=0.000)&&(c44!=0.000)&&(c45!=0.000)&&(c46!=0.000)&&(c47!=0.000)){
        if((c41=="m3")||(c42==0.30)||(c43==32)||(c44==0.30)||(c45==2.88)||(c46==2)||(c47==5.76)){
            if(c41=="m3"){
                myVerifyWins(1);
                document.getElementById("i4-1").style.backgroundColor = "green";
                document.getElementById("i4-1").style.color = "white";
                }else{
                document.getElementById("i4-1").style.backgroundColor = "red";
                document.getElementById("i4-1").style.color = "yellow";
            }
            if(c42==0.30){
                myVerifyWins(1);
                document.getElementById("i4-2").style.backgroundColor = "green";
                document.getElementById("i4-2").style.color = "white";
                }else{
                document.getElementById("i4-2").style.backgroundColor = "red";
                document.getElementById("i4-2").style.color = "yellow";
            }
            if(c43==32){
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
            if(c45==2.88){
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
            if(c47==5.76){
                myVerifyWins(1);
                document.getElementById("i4-7").style.backgroundColor = "green";
                document.getElementById("i4-7").style.color = "white";
                }else{
                document.getElementById("i4-7").style.backgroundColor = "red";
                document.getElementById("i4-7").style.color = "yellow";
            }   
        }
        myVerifyRow(1);
        document.getElementById("fila4").disabled=true;
    }else{
        alert("Por favor diligencia todos los campos de la fila");
    }
}
document.getElementById("fila5").onclick = function () {
    var c51 = document.getElementById("i5-1").value;
    var c52 = parseFloat(document.getElementById("i5-2").value);
    var c53 = parseFloat(document.getElementById("i5-3").value);
    var c54 = parseFloat(document.getElementById("i5-4").value);
    var c55 = parseFloat(document.getElementById("i5-5").value);
    var c56 = parseFloat(document.getElementById("i5-6").value);
    var c57 = parseFloat(document.getElementById("i5-7").value);
    if((c51!='sel')&&(c52!=0.000)&&(c53!=0.000)&&(c54!=0.000)&&(c55!=0.000)&&(c56!=0.000)&&(c57!=0.000)){
        if((c51=="m2")||(c52==5)||(c53==5)||(c54==0.20)||(c55==5)||(c56==1)||(c57==5)){
            if(c51=="m2"){
                console.log("entro bien a la fila 5 columna 1");
                myVerifyWins(1);
                document.getElementById("i5-1").style.backgroundColor = "green";
                document.getElementById("i5-1").style.color = "white";
                }else{
                console.log("entro mal a la fila 5 columna 1");
                document.getElementById("i5-1").style.backgroundColor = "red";
                document.getElementById("i5-1").style.color = "yellow";
            }
            if(c52==5){
                myVerifyWins(1);
                document.getElementById("i5-2").style.backgroundColor = "green";
                document.getElementById("i5-2").style.color = "white";
                }else{
                document.getElementById("i5-2").style.backgroundColor = "red";
                document.getElementById("i5-2").style.color = "yellow";
            }
            if(c53==5){
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
            if(c55==5){
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
            if(c57==5){
                myVerifyWins(1);
                document.getElementById("i5-7").style.backgroundColor = "green";
                document.getElementById("i5-7").style.color = "white";
                }else{
                document.getElementById("i5-7").style.backgroundColor = "red";
                document.getElementById("i5-7").style.color = "yellow";
            }   
        }
        myVerifyRow(1);
        document.getElementById("fila5").disabled=true;
    }else{
        alert("Por favor diligencia todos los campos de la fila");
    }
    
}
document.getElementById("fila6").onclick = function () {
    var c61 = document.getElementById("i6-1").value;
    var c62 = parseFloat(document.getElementById("i6-2").value);
    var c63 = parseFloat(document.getElementById("i6-3").value);
    var c64 = parseFloat(document.getElementById("i6-4").value);
    var c65 = parseFloat(document.getElementById("i6-5").value);
    var c66 = parseFloat(document.getElementById("i6-6").value);
    var c67 = parseFloat(document.getElementById("i6-7").value);
    if((c61!='sel')&&(c62!=0.000)&&(c63!=0.000)&&(c64!=0.000)&&(c65!=0.000)&&(c66!=0.000)&&(c67!=0.000)){
        if((c61=="m2")||(c62==4.40)||(c63==9.40)||(c64==0.08)||(c65==3.309)||(c66==1)||(c67==3.309)){
            if(c61=="m2"){
                myVerifyWins(1);
                document.getElementById("i6-1").style.backgroundColor = "green";
                document.getElementById("i6-1").style.color = "white";
            }else{
                document.getElementById("i6-1").style.backgroundColor = "red";
                document.getElementById("i6-1").style.color = "yellow";
            }
            if(c62==4.40){
                myVerifyWins(1);
                document.getElementById("i6-2").style.backgroundColor = "green";
                document.getElementById("i6-2").style.color = "white";
            }else{
                document.getElementById("i6-2").style.backgroundColor = "red";
                document.getElementById("i6-2").style.color = "yellow";
            }
            if(c63==9.40){
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
            if(c65==3.309){
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
            if(c67==3.309){
                myVerifyWins(1);
                document.getElementById("i6-7").style.backgroundColor = "green";
                document.getElementById("i6-7").style.color = "white";
                }else{
                document.getElementById("i6-7").style.backgroundColor = "red";
                document.getElementById("i6-7").style.color = "yellow";
            }   
        }
        myVerifyRow(1);
        document.getElementById("fila6").disabled=true;
    }else{
        alert("Por favor diligencia todos los campos de la fila");
    }
    
}

