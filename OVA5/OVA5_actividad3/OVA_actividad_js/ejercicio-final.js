//document.getElementById("vinculo-feedback-ok").style.display = "flex";
//document.getElementById("vinculo-feedback-wrong").style.display = "flex";

/*document.getElementById("cerrarOva").onclick = function(){
if (confirm("Saliendo de la OVA")) {
    close();
  }
}
*/
const totalValores = 49;
var aciertos=0;
var actividad = "actividad3";

function mostrarFeedbackOk(){
    console.log("Entró al fedback Wrong");
    document.getElementById("vinculo-feedback-ok").style.marginTop = 0;
    document.getElementById("vinculo-feedback-ok").style.display = "flex";
    document.getElementById("btn-descarga").style.display = "flex";
    document.getElementById("btn-descarga").style.marginBottom = 0;
}

function mostrarFeedbackWrong(){
    console.log("Entró al fedback Wrong");
    document.getElementById("vinculo-feedback-wrong").style.display = "flex";
}

function validarRespuesta(){
    if(aciertos==totalValores){
        mostrarFeedbackOk();
    }else{
        mostrarFeedbackWrong();
    }

}


document.getElementById("vinculo-feedback-ok").onclick = function(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA5.html","_self");
    return false;
}

document.getElementById("vinculo-feedback-wrong").onclick = function(){
    document.getElementById("vinculo-feedback-wrong").style.display = "none";
}


document.getElementById("btn_ejerciciofinal").onclick = function(){
    aciertos=0;
    var celda1_1 = document.getElementById("c1-1").value;
    var celda1_2 = document.getElementById("c1-2").value;
    var celda1_3 = document.getElementById("c1-3").value;
    var celda1_4 = document.getElementById("c1-4").value;
    var celda1_5 = document.getElementById("c1-5").value;
    var celda1_6 = document.getElementById("c1-6").value;
    var celda1_7 = document.getElementById("c1-7").value;

    var celda2_1 = document.getElementById("c2-1").value;
    var celda2_2 = document.getElementById("c2-2").value;
    var celda2_3 = document.getElementById("c2-3").value;
    var celda2_4 = document.getElementById("c2-4").value;
    var celda2_5 = document.getElementById("c2-5").value;
    var celda2_6 = document.getElementById("c2-6").value;
    var celda2_7 = document.getElementById("c2-7").value;

    var celda3_1 = document.getElementById("c3-1").value;
    var celda3_2 = document.getElementById("c3-2").value;
    var celda3_3 = document.getElementById("c3-3").value;
    var celda3_4 = document.getElementById("c3-4").value;
    var celda3_5 = document.getElementById("c3-5").value;
    var celda3_6 = document.getElementById("c3-6").value;
    var celda3_7 = document.getElementById("c3-7").value;

    var celda4_1 = document.getElementById("c4-1").value;
    var celda4_2 = document.getElementById("c4-2").value;
    var celda4_3 = document.getElementById("c4-3").value;
    var celda4_4 = document.getElementById("c4-4").value;
    var celda4_5 = document.getElementById("c4-5").value;
    var celda4_6 = document.getElementById("c4-6").value;
    var celda4_7 = document.getElementById("c4-7").value;

    var celda5_1 = document.getElementById("c5-1").value;
    var celda5_2 = document.getElementById("c5-2").value;
    var celda5_3 = document.getElementById("c5-3").value;
    var celda5_4 = document.getElementById("c5-4").value;
    var celda5_5 = document.getElementById("c5-5").value;
    var celda5_6 = document.getElementById("c5-6").value;
    var celda5_7 = document.getElementById("c5-7").value;

    var celda6_1 = document.getElementById("c6-1").value;
    var celda6_2 = document.getElementById("c6-2").value;
    var celda6_3 = document.getElementById("c6-3").value;
    var celda6_4 = document.getElementById("c6-4").value;
    var celda6_5 = document.getElementById("c6-5").value;
    var celda6_6 = document.getElementById("c6-6").value;
    var celda6_7 = document.getElementById("c6-7").value;

    if(celda1_1==="3"){
        document.getElementById("c1-1").style.backgroundColor = "green";
        document.getElementById("c1-1").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c1-1").style.backgroundColor = "red";
        document.getElementById("c1-1").style.color = "yellow";
    }

    if(celda1_2==="3/8"){
        document.getElementById("c1-2").style.backgroundColor = "green";
        document.getElementById("c1-2").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c1-2").style.backgroundColor = "red";
        document.getElementById("c1-2").style.color = "yellow";
    }

    if(celda1_3==="1.40"){
        document.getElementById("c1-3").style.backgroundColor = "green";
        document.getElementById("c1-3").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c1-3").style.backgroundColor = "red";
        document.getElementById("c1-3").style.color = "yellow";
    }

    if(celda1_4==="40"){
        document.getElementById("c1-4").style.backgroundColor = "green";
        document.getElementById("c1-4").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c1-4").style.backgroundColor = "red";
        document.getElementById("c1-4").style.color = "yellow";
    }

    if(celda1_5==="56"){
        document.getElementById("c1-5").style.backgroundColor = "green";
        document.getElementById("c1-5").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c1-5").style.backgroundColor = "red";
        document.getElementById("c1-5").style.color = "yellow";
    }

    if(celda1_6==="0.560"){
        document.getElementById("c1-6").style.backgroundColor = "green";
        document.getElementById("c1-6").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c1-6").style.backgroundColor = "red";
        document.getElementById("c1-6").style.color = "yellow";
    }

    if(celda1_7==="31.36"){
        document.getElementById("c1-7").style.backgroundColor = "green";
        document.getElementById("c1-7").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c1-7").style.backgroundColor = "red";
        document.getElementById("c1-7").style.color = "yellow";
    }


    if(celda2_1==="3"){
        document.getElementById("c2-1").style.backgroundColor = "green";
        document.getElementById("c2-1").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c2-1").style.backgroundColor = "red";
        document.getElementById("c2-1").style.color = "yellow";
    }

    if(celda2_2==="3/8"){
        document.getElementById("c2-2").style.backgroundColor = "green";
        document.getElementById("c2-2").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c2-2").style.backgroundColor = "red";
        document.getElementById("c2-2").style.color = "yellow";
    }

    if(celda2_3==="1.45"){
        document.getElementById("c2-3").style.backgroundColor = "green";
        document.getElementById("c2-3").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c2-3").style.backgroundColor = "red";
        document.getElementById("c2-3").style.color = "yellow";
    }
    if(celda2_4==="16"){
        document.getElementById("c2-4").style.backgroundColor = "green";
        document.getElementById("c2-4").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c2-4").style.backgroundColor = "red";
        document.getElementById("c2-4").style.color = "yellow";
    }

    if(celda2_5==="23.2"){
        document.getElementById("c2-5").style.backgroundColor = "green";
        document.getElementById("c2-5").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c2-5").style.backgroundColor = "red";
        document.getElementById("c2-5").style.color = "yellow";
    }

    if(celda2_6==="0.560"){
        document.getElementById("c2-6").style.backgroundColor = "green";
        document.getElementById("c2-6").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c2-6").style.backgroundColor = "red";
        document.getElementById("c2-6").style.color = "yellow";
    }

    if(celda2_7==="12.99"){
        document.getElementById("c2-7").style.backgroundColor = "green";
        document.getElementById("c2-7").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c2-7").style.backgroundColor = "red";
        document.getElementById("c2-7").style.color = "yellow";
    }


    if(celda3_1==="2"){
        document.getElementById("c3-1").style.backgroundColor = "green";
        document.getElementById("c3-1").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c3-1").style.backgroundColor = "red";
        document.getElementById("c3-1").style.color = "yellow";
    }

    if(celda3_2==="1/4"){
        document.getElementById("c3-2").style.backgroundColor = "green";
        document.getElementById("c3-2").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c3-2").style.backgroundColor = "red";
        document.getElementById("c3-2").style.color = "yellow";
    }

    if(celda3_3==="0.94"){
        document.getElementById("c3-3").style.backgroundColor = "green";
        document.getElementById("c3-3").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c3-3").style.backgroundColor = "red";
        document.getElementById("c3-3").style.color = "yellow";
    }

    if(celda3_4==="28"){
        document.getElementById("c3-4").style.backgroundColor = "green";
        document.getElementById("c3-4").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c3-4").style.backgroundColor = "red";
        document.getElementById("c3-4").style.color = "yellow";
    }

    if(celda3_5==="26.32"){
        document.getElementById("c3-5").style.backgroundColor = "green";
        document.getElementById("c3-5").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c3-5").style.backgroundColor = "red";
        document.getElementById("c3-5").style.color = "yellow";
    }

    if(celda3_6==="0.249"){
        document.getElementById("c3-6").style.backgroundColor = "green";
        document.getElementById("c3-6").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c3-6").style.backgroundColor = "red";
        document.getElementById("c3-6").style.color = "yellow";
    }

    if(celda3_7==="6.55"){
        document.getElementById("c3-7").style.backgroundColor = "green";
        document.getElementById("c3-7").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c3-7").style.backgroundColor = "red";
        document.getElementById("c3-7").style.color = "yellow";
    }


    if(celda4_1==="3"){
        document.getElementById("c4-1").style.backgroundColor = "green";
        document.getElementById("c4-1").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c4-1").style.backgroundColor = "red";
        document.getElementById("c4-1").style.color = "yellow";
    }

    if(celda4_2==="3/8"){
        document.getElementById("c4-2").style.backgroundColor = "green";
        document.getElementById("c4-2").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c4-2").style.backgroundColor = "red";
        document.getElementById("c4-2").style.color = "yellow";
    }

    if(celda4_3==="1.60"){
        document.getElementById("c4-3").style.backgroundColor = "green";
        document.getElementById("c4-3").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c4-3").style.backgroundColor = "red";
        document.getElementById("c4-3").style.color = "yellow";
    }

    if(celda4_4==="4"){
        document.getElementById("c4-4").style.backgroundColor = "green";
        document.getElementById("c4-4").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c4-4").style.backgroundColor = "red";
        document.getElementById("c4-4").style.color = "yellow";
    }

    if(celda4_5==="6.4"){
        document.getElementById("c4-5").style.backgroundColor = "green";
        document.getElementById("c4-5").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c4-5").style.backgroundColor = "red";
        document.getElementById("c4-5").style.color = "yellow";
    }

    if(celda4_6==="0.560"){
        document.getElementById("c4-6").style.backgroundColor = "green";
        document.getElementById("c4-6").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c4-6").style.backgroundColor = "red";
        document.getElementById("c4-6").style.color = "yellow";
    }

    if(celda4_7==="3.58"){
        document.getElementById("c4-7").style.backgroundColor = "green";
        document.getElementById("c4-7").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c4-7").style.backgroundColor = "red";
        document.getElementById("c4-7").style.color = "yellow";
    }

    if(celda5_1==="3"){
        document.getElementById("c5-1").style.backgroundColor = "green";
        document.getElementById("c5-1").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c5-1").style.backgroundColor = "red";
        document.getElementById("c5-1").style.color = "yellow";
    }

    if(celda5_2==="3/8"){
        document.getElementById("c5-2").style.backgroundColor = "green";
        document.getElementById("c5-2").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c5-2").style.backgroundColor = "red";
        document.getElementById("c5-2").style.color = "yellow";
    }

    if(celda5_3==="2.40"){
        document.getElementById("c5-3").style.backgroundColor = "green";
        document.getElementById("c5-3").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c5-3").style.backgroundColor = "red";
        document.getElementById("c5-3").style.color = "yellow";
    }

    if(celda5_4==="8"){
        document.getElementById("c5-4").style.backgroundColor = "green";
        document.getElementById("c5-4").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c5-4").style.backgroundColor = "red";
        document.getElementById("c5-4").style.color = "yellow";
    }

    if(celda5_5==="19.2"){
        document.getElementById("c5-5").style.backgroundColor = "green";
        document.getElementById("c5-5").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c5-5").style.backgroundColor = "red";
        document.getElementById("c5-5").style.color = "yellow";
    }

    if(celda5_6==="0.560"){
        document.getElementById("c5-6").style.backgroundColor = "green";
        document.getElementById("c5-6").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c5-6").style.backgroundColor = "red";
        document.getElementById("c5-6").style.color = "yellow";
    }

    if(celda5_7==="10.75"){
        document.getElementById("c5-7").style.backgroundColor = "green";
        document.getElementById("c5-7").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c5-7").style.backgroundColor = "red";
        document.getElementById("c5-7").style.color = "yellow";
    }

    if(celda6_1==="2"){
        document.getElementById("c6-1").style.backgroundColor = "green";
        document.getElementById("c6-1").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c6-1").style.backgroundColor = "red";
        document.getElementById("c6-1").style.color = "yellow";
    }

    if(celda6_2==="1/4"){
        document.getElementById("c6-2").style.backgroundColor = "green";
        document.getElementById("c6-2").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c6-2").style.backgroundColor = "red";
        document.getElementById("c6-2").style.color = "yellow";
    }

    if(celda6_3==="0.94"){
        document.getElementById("c6-3").style.backgroundColor = "green";
        document.getElementById("c6-3").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c6-3").style.backgroundColor = "red";
        document.getElementById("c6-3").style.color = "yellow";
    }

    if(celda6_4==="25"){
        document.getElementById("c6-4").style.backgroundColor = "green";
        document.getElementById("c6-4").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c6-4").style.backgroundColor = "red";
        document.getElementById("c6-4").style.color = "yellow";
    }

    if(celda6_5==="23.5"){
        document.getElementById("c6-5").style.backgroundColor = "green";
        document.getElementById("c6-5").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c6-5").style.backgroundColor = "red";
        document.getElementById("c6-5").style.color = "yellow";
    }

    if(celda6_6==="0.249"){
        document.getElementById("c6-6").style.backgroundColor = "green";
        document.getElementById("c6-6").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c6-6").style.backgroundColor = "red";
        document.getElementById("c6-6").style.color = "yellow";
    }

    if(celda6_7==="5.85"){
        document.getElementById("c6-7").style.backgroundColor = "green";
        document.getElementById("c6-7").style.color = "white";
        aciertos++;
    }else{
        document.getElementById("c6-7").style.backgroundColor = "red";
        document.getElementById("c6-7").style.color = "yellow";
    }
    console.log(aciertos);
    validarRespuesta();
}