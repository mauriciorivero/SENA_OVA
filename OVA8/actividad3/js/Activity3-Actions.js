var actividad = "actividad2";

document.getElementById("main_box").style.display = "none";
document.getElementById("main_box2").style.display="none";
document.getElementById("estructura-btnReload").style.display="none";
document.getElementById("estructura-btnContinue").style.display="none";
document.getElementById("hierro-btnReload").style.display="none";
document.getElementById("hierro-btnBack").style.display="none";


document.getElementById("introduction_start-button").onclick = function(){
    document.getElementById("box_intro").style.backgroundImage = "url('img/box_explanation_1a.png')";
    document.getElementById("main_box").style.display = "flex";
    document.getElementById("introduction_box").style.display = "none";   
}

document.getElementById("introduction_download-button").onclick = function(){
    window.open("doc/enunciado_actividad3.pdf","_blank");
}

/*
-------------------------------------------------------------------------------------------------------------------
-----Calculos de estructura----------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------

*/

document.getElementById("estructura-calcular-btn").onclick = function(){
    let estructura_aciertos = 0;

    //variables cemento
    let estructura_elemento1_ancho = parseFloat(document.getElementById("estructura_elemento1_ancho").value);
    let estructura_elemento1_alto = parseFloat(document.getElementById("estructura_elemento1_alto").value);
    let estructura_elemento1_parcial = parseFloat(document.getElementById("estructura_elemento1_parcial").value);
    let estructura_elemento1_cantidad = parseFloat(document.getElementById("estructura_elemento1_cantidad").value);

    let estructura_elemento2_ancho = parseFloat(document.getElementById("estructura_elemento2_ancho").value);
    let estructura_elemento2_alto = parseFloat(document.getElementById("estructura_elemento2_alto").value);
    let estructura_elemento2_parcial = parseFloat(document.getElementById("estructura_elemento2_parcial").value);
    let estructura_elemento2_cantidad = parseFloat(document.getElementById("estructura_elemento2_cantidad").value);

    let estructura_elemento3_ancho = parseFloat(document.getElementById("estructura_elemento3_ancho").value);
    let estructura_elemento3_alto = parseFloat(document.getElementById("estructura_elemento3_alto").value);
    let estructura_elemento3_parcial = parseFloat(document.getElementById("estructura_elemento3_parcial").value);
    let estructura_elemento3_cantidad = parseFloat(document.getElementById("estructura_elemento3_cantidad").value);

    let estructura_elemento4_ancho = parseFloat(document.getElementById("estructura_elemento4_ancho").value);
    let estructura_elemento4_alto = parseFloat(document.getElementById("estructura_elemento4_alto").value);
    let estructura_elemento4_parcial = parseFloat(document.getElementById("estructura_elemento4_parcial").value);
    let estructura_elemento4_cantidad = parseFloat(document.getElementById("estructura_elemento4_cantidad").value);

    let estructura_elemento5_ancho = parseFloat(document.getElementById("estructura_elemento5_ancho").value);
    let estructura_elemento5_alto = parseFloat(document.getElementById("estructura_elemento5_alto").value);
    let estructura_elemento5_parcial = parseFloat(document.getElementById("estructura_elemento5_parcial").value);
    let estructura_elemento5_cantidad = parseFloat(document.getElementById("estructura_elemento5_cantidad").value);

    let estructura_elemento6_ancho = parseFloat(document.getElementById("estructura_elemento6_ancho").value);
    let estructura_elemento6_alto = parseFloat(document.getElementById("estructura_elemento6_alto").value);
    let estructura_elemento6_parcial = parseFloat(document.getElementById("estructura_elemento6_parcial").value);
    let estructura_elemento6_cantidad = parseFloat(document.getElementById("estructura_elemento6_cantidad").value);

    let estructura_elemento7_ancho = parseFloat(document.getElementById("estructura_elemento7_ancho").value);
    let estructura_elemento7_alto = parseFloat(document.getElementById("estructura_elemento7_alto").value);
    let estructura_elemento7_parcial = parseFloat(document.getElementById("estructura_elemento7_parcial").value);
    let estructura_elemento7_cantidad = parseFloat(document.getElementById("estructura_elemento7_cantidad").value);

    let estructura_elemento8_ancho = parseFloat(document.getElementById("estructura_elemento8_ancho").value);
    let estructura_elemento8_alto = parseFloat(document.getElementById("estructura_elemento8_alto").value);
    let estructura_elemento8_parcial = parseFloat(document.getElementById("estructura_elemento8_parcial").value);
    let estructura_elemento8_cantidad = parseFloat(document.getElementById("estructura_elemento8_cantidad").value);

    let estructura_elemento9_ancho = parseFloat(document.getElementById("estructura_elemento9_ancho").value);
    let estructura_elemento9_alto = parseFloat(document.getElementById("estructura_elemento9_alto").value);
    let estructura_elemento9_parcial = parseFloat(document.getElementById("estructura_elemento9_parcial").value);
    let estructura_elemento9_cantidad = parseFloat(document.getElementById("estructura_elemento9_cantidad").value);

    //ZONA HÚMEDA ENCHAPE PISO

    if(estructura_elemento1_ancho===1.15){
        document.getElementById("estructura_elemento1_ancho").style.backgroundColor="green";
        document.getElementById("estructura_elemento1_ancho").style.border="none";
        document.getElementById("estructura_elemento1_ancho").style.color="white";
        document.getElementById("estructura_elemento1_ancho").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento1_ancho").style.backgroundColor="red";
        document.getElementById("estructura_elemento1_ancho").style.color="yellow";
        document.getElementById("estructura_elemento1_ancho").style.border="red";
    }

    if(estructura_elemento1_alto===1.10){
        document.getElementById("estructura_elemento1_alto").style.backgroundColor="green";
        document.getElementById("estructura_elemento1_alto").style.border="none";
        document.getElementById("estructura_elemento1_alto").style.color="white";
        document.getElementById("estructura_elemento1_alto").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento1_alto").style.backgroundColor="red";
        document.getElementById("estructura_elemento1_alto").style.color="yellow";
        document.getElementById("estructura_elemento1_alto").style.border="red";
    }

    if(estructura_elemento1_parcial===0){
        document.getElementById("estructura_elemento1_parcial").style.backgroundColor="green";
        document.getElementById("estructura_elemento1_parcial").style.border="none";
        document.getElementById("estructura_elemento1_parcial").style.color="white";
        document.getElementById("estructura_elemento1_parcial").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento1_parcial").style.backgroundColor="red";
        document.getElementById("estructura_elemento1_parcial").style.color="yellow";
        document.getElementById("estructura_elemento1_parcial").style.border="red";
    }

    if(estructura_elemento1_cantidad===1.27){
        document.getElementById("estructura_elemento1_cantidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento1_cantidad").style.border="none";
        document.getElementById("estructura_elemento1_cantidad").style.color="white";
        document.getElementById("estructura_elemento1_cantidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento1_cantidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento1_cantidad").style.color="yellow";
        document.getElementById("estructura_elemento1_cantidad").style.border="red";
    }


    //ZONA HÚMEDA ENCHAPE PARED

    if(estructura_elemento2_ancho===3.40){
        document.getElementById("estructura_elemento2_ancho").style.backgroundColor="green";
        document.getElementById("estructura_elemento2_ancho").style.border="none";
        document.getElementById("estructura_elemento2_ancho").style.color="white";
        document.getElementById("estructura_elemento2_ancho").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento2_ancho").style.backgroundColor="red";
        document.getElementById("estructura_elemento2_ancho").style.color="yellow";
        document.getElementById("estructura_elemento2_ancho").style.border="red";
    }

    if(estructura_elemento2_alto===0){
        document.getElementById("estructura_elemento2_alto").style.backgroundColor="green";
        document.getElementById("estructura_elemento2_alto").style.border="none";
        document.getElementById("estructura_elemento2_alto").style.color="white";
        document.getElementById("estructura_elemento2_alto").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento2_alto").style.backgroundColor="red";
        document.getElementById("estructura_elemento2_alto").style.color="yellow";
        document.getElementById("estructura_elemento2_alto").style.border="red";
    }

    if(estructura_elemento2_parcial===2.20){
        document.getElementById("estructura_elemento2_parcial").style.backgroundColor="green";
        document.getElementById("estructura_elemento2_parcial").style.border="none";
        document.getElementById("estructura_elemento2_parcial").style.color="white";
        document.getElementById("estructura_elemento2_parcial").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento2_parcial").style.backgroundColor="red";
        document.getElementById("estructura_elemento2_parcial").style.color="yellow";
        document.getElementById("estructura_elemento2_parcial").style.border="red";
    }

    if(estructura_elemento2_cantidad===7.48){
        document.getElementById("estructura_elemento2_cantidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento2_cantidad").style.border="none";
        document.getElementById("estructura_elemento2_cantidad").style.color="white";
        document.getElementById("estructura_elemento2_cantidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento2_cantidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento2_cantidad").style.color="yellow";
        document.getElementById("estructura_elemento2_cantidad").style.border="red";
    }



    //ZONA SECA ENCHAPE PISO

    if(estructura_elemento3_ancho===1.54){
        document.getElementById("estructura_elemento3_ancho").style.backgroundColor="green";
        document.getElementById("estructura_elemento3_ancho").style.border="none";
        document.getElementById("estructura_elemento3_ancho").style.color="white";
        document.getElementById("estructura_elemento3_ancho").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento3_ancho").style.backgroundColor="red";
        document.getElementById("estructura_elemento3_ancho").style.color="yellow";
        document.getElementById("estructura_elemento3_ancho").style.border="red";
    }
    
    if(estructura_elemento3_alto===1.00){
        document.getElementById("estructura_elemento3_alto").style.backgroundColor="green";
        document.getElementById("estructura_elemento3_alto").style.border="none";
        document.getElementById("estructura_elemento3_alto").style.color="white";
        document.getElementById("estructura_elemento3_alto").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento3_alto").style.backgroundColor="red";
        document.getElementById("estructura_elemento3_alto").style.color="yellow";
        document.getElementById("estructura_elemento3_alto").style.border="red";
    }
    
    if(estructura_elemento3_parcial===0){
        document.getElementById("estructura_elemento3_parcial").style.backgroundColor="green";
        document.getElementById("estructura_elemento3_parcial").style.border="none";
        document.getElementById("estructura_elemento3_parcial").style.color="white";
        document.getElementById("estructura_elemento3_parcial").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento3_parcial").style.backgroundColor="red";
        document.getElementById("estructura_elemento3_parcial").style.color="yellow";
        document.getElementById("estructura_elemento3_parcial").style.border="red";
    }
    
    if(estructura_elemento3_cantidad===1.54){
        document.getElementById("estructura_elemento3_cantidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento3_cantidad").style.border="none";
        document.getElementById("estructura_elemento3_cantidad").style.color="white";
        document.getElementById("estructura_elemento3_cantidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento3_cantidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento3_cantidad").style.color="yellow";
        document.getElementById("estructura_elemento3_cantidad").style.border="red";
    }
    

    //Zona seca estuco
    
    if(estructura_elemento4_ancho===2.84){
        document.getElementById("estructura_elemento4_ancho").style.backgroundColor="green";
        document.getElementById("estructura_elemento4_ancho").style.border="none";
        document.getElementById("estructura_elemento4_ancho").style.color="white";
        document.getElementById("estructura_elemento4_ancho").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento4_ancho").style.backgroundColor="red";
        document.getElementById("estructura_elemento4_ancho").style.color="yellow";
        document.getElementById("estructura_elemento4_ancho").style.border="red";
    }
    
    if(estructura_elemento4_alto===0){
        document.getElementById("estructura_elemento4_alto").style.backgroundColor="green";
        document.getElementById("estructura_elemento4_alto").style.border="none";
        document.getElementById("estructura_elemento4_alto").style.color="white";
        document.getElementById("estructura_elemento4_alto").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento4_alto").style.backgroundColor="red";
        document.getElementById("estructura_elemento4_alto").style.color="yellow";
        document.getElementById("estructura_elemento4_alto").style.border="red";
    }
    
    if(estructura_elemento4_parcial===2.20){
        document.getElementById("estructura_elemento4_parcial").style.backgroundColor="green";
        document.getElementById("estructura_elemento4_parcial").style.border="none";
        document.getElementById("estructura_elemento4_parcial").style.color="white";
        document.getElementById("estructura_elemento4_parcial").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento4_parcial").style.backgroundColor="red";
        document.getElementById("estructura_elemento4_parcial").style.color="yellow";
        document.getElementById("estructura_elemento4_parcial").style.border="red";
    }
    
    if(estructura_elemento4_cantidad===6.25){
        document.getElementById("estructura_elemento4_cantidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento4_cantidad").style.border="none";
        document.getElementById("estructura_elemento4_cantidad").style.color="white";
        document.getElementById("estructura_elemento4_cantidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento4_cantidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento4_cantidad").style.color="yellow";
        document.getElementById("estructura_elemento4_cantidad").style.border="red";
    }


    //Zona seca pintura
    
    if(estructura_elemento5_ancho===2.84){
        document.getElementById("estructura_elemento5_ancho").style.backgroundColor="green";
        document.getElementById("estructura_elemento5_ancho").style.border="none";
        document.getElementById("estructura_elemento5_ancho").style.color="white";
        document.getElementById("estructura_elemento5_ancho").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento5_ancho").style.backgroundColor="red";
        document.getElementById("estructura_elemento5_ancho").style.color="yellow";
        document.getElementById("estructura_elemento5_ancho").style.border="red";
    }
    
    if(estructura_elemento5_alto===0){
        document.getElementById("estructura_elemento5_alto").style.backgroundColor="green";
        document.getElementById("estructura_elemento5_alto").style.border="none";
        document.getElementById("estructura_elemento5_alto").style.color="white";
        document.getElementById("estructura_elemento5_alto").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento5_alto").style.backgroundColor="red";
        document.getElementById("estructura_elemento5_alto").style.color="yellow";
        document.getElementById("estructura_elemento5_alto").style.border="red";
    }
    
    if(estructura_elemento5_parcial===2.20){
        document.getElementById("estructura_elemento5_parcial").style.backgroundColor="green";
        document.getElementById("estructura_elemento5_parcial").style.border="none";
        document.getElementById("estructura_elemento5_parcial").style.color="white";
        document.getElementById("estructura_elemento5_parcial").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento5_parcial").style.backgroundColor="red";
        document.getElementById("estructura_elemento5_parcial").style.color="yellow";
        document.getElementById("estructura_elemento5_parcial").style.border="red";
    }
    
    if(estructura_elemento5_cantidad===6.25){
        document.getElementById("estructura_elemento5_cantidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento5_cantidad").style.border="none";
        document.getElementById("estructura_elemento5_cantidad").style.color="white";
        document.getElementById("estructura_elemento5_cantidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento5_cantidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento5_cantidad").style.color="yellow";
        document.getElementById("estructura_elemento5_cantidad").style.border="red";
    }

    //CIELO RASO ZONA HUMEDA ESTUCO
    
    if(estructura_elemento6_ancho===1.15){
        document.getElementById("estructura_elemento6_ancho").style.backgroundColor="green";
        document.getElementById("estructura_elemento6_ancho").style.border="none";
        document.getElementById("estructura_elemento6_ancho").style.color="white";
        document.getElementById("estructura_elemento6_ancho").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento6_ancho").style.backgroundColor="red";
        document.getElementById("estructura_elemento6_ancho").style.color="yellow";
        document.getElementById("estructura_elemento6_ancho").style.border="red";
    }
    
    if(estructura_elemento6_alto===1.10){
        document.getElementById("estructura_elemento6_alto").style.backgroundColor="green";
        document.getElementById("estructura_elemento6_alto").style.border="none";
        document.getElementById("estructura_elemento6_alto").style.color="white";
        document.getElementById("estructura_elemento6_alto").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento6_alto").style.backgroundColor="red";
        document.getElementById("estructura_elemento6_alto").style.color="yellow";
        document.getElementById("estructura_elemento6_alto").style.border="red";
    }
    
    if(estructura_elemento6_parcial===0){
        document.getElementById("estructura_elemento6_parcial").style.backgroundColor="green";
        document.getElementById("estructura_elemento6_parcial").style.border="none";
        document.getElementById("estructura_elemento6_parcial").style.color="white";
        document.getElementById("estructura_elemento6_parcial").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento6_parcial").style.backgroundColor="red";
        document.getElementById("estructura_elemento6_parcial").style.color="yellow";
        document.getElementById("estructura_elemento6_parcial").style.border="red";
    }
    
    if(estructura_elemento6_cantidad===1.27){
        document.getElementById("estructura_elemento6_cantidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento6_cantidad").style.border="none";
        document.getElementById("estructura_elemento6_cantidad").style.color="white";
        document.getElementById("estructura_elemento6_cantidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento6_cantidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento6_cantidad").style.color="yellow";
        document.getElementById("estructura_elemento6_cantidad").style.border="red";
    }

    //CIELO RASO ZONA HUMEDA PINTURA
    
    if(estructura_elemento7_ancho===1.15){
        document.getElementById("estructura_elemento7_ancho").style.backgroundColor="green";
        document.getElementById("estructura_elemento7_ancho").style.border="none";
        document.getElementById("estructura_elemento7_ancho").style.color="white";
        document.getElementById("estructura_elemento7_ancho").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento7_ancho").style.backgroundColor="red";
        document.getElementById("estructura_elemento7_ancho").style.color="yellow";
        document.getElementById("estructura_elemento7_ancho").style.border="red";
    }
    
    if(estructura_elemento7_alto===1.10){
        document.getElementById("estructura_elemento7_alto").style.backgroundColor="green";
        document.getElementById("estructura_elemento7_alto").style.border="none";
        document.getElementById("estructura_elemento7_alto").style.color="white";
        document.getElementById("estructura_elemento7_alto").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento7_alto").style.backgroundColor="red";
        document.getElementById("estructura_elemento7_alto").style.color="yellow";
        document.getElementById("estructura_elemento7_alto").style.border="red";
    }
    
    if(estructura_elemento7_parcial===0){
        document.getElementById("estructura_elemento7_parcial").style.backgroundColor="green";
        document.getElementById("estructura_elemento7_parcial").style.border="none";
        document.getElementById("estructura_elemento7_parcial").style.color="white";
        document.getElementById("estructura_elemento7_parcial").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento7_parcial").style.backgroundColor="red";
        document.getElementById("estructura_elemento7_parcial").style.color="yellow";
        document.getElementById("estructura_elemento7_parcial").style.border="red";
    }
    
    if(estructura_elemento7_cantidad===1.27){
        document.getElementById("estructura_elemento7_cantidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento7_cantidad").style.border="none";
        document.getElementById("estructura_elemento7_cantidad").style.color="white";
        document.getElementById("estructura_elemento7_cantidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento7_cantidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento7_cantidad").style.color="yellow";
        document.getElementById("estructura_elemento7_cantidad").style.border="red";
    }

    //CIELO RASO ZONA SECA ESTUCO
    
    if(estructura_elemento8_ancho===1.54){
        document.getElementById("estructura_elemento8_ancho").style.backgroundColor="green";
        document.getElementById("estructura_elemento8_ancho").style.border="none";
        document.getElementById("estructura_elemento8_ancho").style.color="white";
        document.getElementById("estructura_elemento8_ancho").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento8_ancho").style.backgroundColor="red";
        document.getElementById("estructura_elemento8_ancho").style.color="yellow";
        document.getElementById("estructura_elemento8_ancho").style.border="red";
    }
    
    if(estructura_elemento8_alto===1.00){
        document.getElementById("estructura_elemento8_alto").style.backgroundColor="green";
        document.getElementById("estructura_elemento8_alto").style.border="none";
        document.getElementById("estructura_elemento8_alto").style.color="white";
        document.getElementById("estructura_elemento8_alto").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento8_alto").style.backgroundColor="red";
        document.getElementById("estructura_elemento8_alto").style.color="yellow";
        document.getElementById("estructura_elemento8_alto").style.border="red";
    }
    
    if(estructura_elemento8_parcial===0){
        document.getElementById("estructura_elemento8_parcial").style.backgroundColor="green";
        document.getElementById("estructura_elemento8_parcial").style.border="none";
        document.getElementById("estructura_elemento8_parcial").style.color="white";
        document.getElementById("estructura_elemento8_parcial").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento8_parcial").style.backgroundColor="red";
        document.getElementById("estructura_elemento8_parcial").style.color="yellow";
        document.getElementById("estructura_elemento8_parcial").style.border="red";
    }
    
    if(estructura_elemento8_cantidad===1.54){
        document.getElementById("estructura_elemento8_cantidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento8_cantidad").style.border="none";
        document.getElementById("estructura_elemento8_cantidad").style.color="white";
        document.getElementById("estructura_elemento8_cantidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento8_cantidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento8_cantidad").style.color="yellow";
        document.getElementById("estructura_elemento8_cantidad").style.border="red";
    }

    //CIELO RASO ZONA SECA PINTURA
    
    if(estructura_elemento9_ancho===1.54){
        document.getElementById("estructura_elemento9_ancho").style.backgroundColor="green";
        document.getElementById("estructura_elemento9_ancho").style.border="none";
        document.getElementById("estructura_elemento9_ancho").style.color="white";
        document.getElementById("estructura_elemento9_ancho").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento9_ancho").style.backgroundColor="red";
        document.getElementById("estructura_elemento9_ancho").style.color="yellow";
        document.getElementById("estructura_elemento9_ancho").style.border="red";
    }
    
    if(estructura_elemento9_alto===1.00){
        document.getElementById("estructura_elemento9_alto").style.backgroundColor="green";
        document.getElementById("estructura_elemento9_alto").style.border="none";
        document.getElementById("estructura_elemento9_alto").style.color="white";
        document.getElementById("estructura_elemento9_alto").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento9_alto").style.backgroundColor="red";
        document.getElementById("estructura_elemento9_alto").style.color="yellow";
        document.getElementById("estructura_elemento9_alto").style.border="red";
    }
    
    if(estructura_elemento9_parcial===0){
        document.getElementById("estructura_elemento9_parcial").style.backgroundColor="green";
        document.getElementById("estructura_elemento9_parcial").style.border="none";
        document.getElementById("estructura_elemento9_parcial").style.color="white";
        document.getElementById("estructura_elemento9_parcial").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento9_parcial").style.backgroundColor="red";
        document.getElementById("estructura_elemento9_parcial").style.color="yellow";
        document.getElementById("estructura_elemento9_parcial").style.border="red";
    }
    
    if(estructura_elemento9_cantidad===1.54){
        document.getElementById("estructura_elemento9_cantidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento9_cantidad").style.border="none";
        document.getElementById("estructura_elemento9_cantidad").style.color="white";
        document.getElementById("estructura_elemento9_cantidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento9_cantidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento9_cantidad").style.color="yellow";
        document.getElementById("estructura_elemento9_cantidad").style.border="red";
    }


    

    if(estructura_aciertos===36){
        document.getElementById("estructura-calcular-btn").style.display="none";
        document.getElementById("box_intro").style.backgroundImage="url('img/box_explanation_4.png')"
        document.getElementById("estructura-btnContinue").style.display="block";

    }else{
        document.getElementById("estructura-calcular-btn").style.display="none";
        document.getElementById("estructura-btnReload").style.display="block";
        document.getElementById("box_intro").style.backgroundImage="url('img/box_explanation_2.png')";
    }


    
}

document.getElementById("estructura-btnContinue").onclick = function(){
    document.getElementById("box_intro").style.backgroundImage = "url('img/box_explanation_1b.png')";
    document.getElementById("main_box").style.display="none";
    document.getElementById("main_box2").style.display="flex";
}

document.getElementById("estructura-btnReload").onclick = function(){
    window.location.reload();
}

/*
-------------------------------------------------------------------------------------------------------------------
-----Calculos del hierro-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------

*/

document.getElementById("hierro-calcular-btn").onclick = function(){
    let hierro_aciertos = 0;

    //variables cemento
    let hierro_elemento10_ancho = parseFloat(document.getElementById("hierro_elemento10_ancho").value);
    let hierro_elemento10_alto = parseFloat(document.getElementById("hierro_elemento10_alto").value);
    let hierro_elemento10_parcial = parseFloat(document.getElementById("hierro_elemento10_parcial").value);
    let hierro_elemento10_cantidad = parseFloat(document.getElementById("hierro_elemento10_cantidad").value);

    let hierro_elemento11_ancho = parseFloat(document.getElementById("hierro_elemento11_ancho").value);
    let hierro_elemento11_alto = parseFloat(document.getElementById("hierro_elemento11_alto").value);
    let hierro_elemento11_parcial = parseFloat(document.getElementById("hierro_elemento11_parcial").value);
    let hierro_elemento11_cantidad = parseFloat(document.getElementById("hierro_elemento11_cantidad").value);

    let hierro_elemento12_ancho = parseFloat(document.getElementById("hierro_elemento12_ancho").value);
    let hierro_elemento12_alto = parseFloat(document.getElementById("hierro_elemento12_alto").value);
    let hierro_elemento12_parcial = parseFloat(document.getElementById("hierro_elemento12_parcial").value);
    let hierro_elemento12_cantidad = parseFloat(document.getElementById("hierro_elemento12_cantidad").value);

    let hierro_elemento13_ancho = parseFloat(document.getElementById("hierro_elemento13_ancho").value);
    let hierro_elemento13_alto = parseFloat(document.getElementById("hierro_elemento13_alto").value);
    let hierro_elemento13_parcial = parseFloat(document.getElementById("hierro_elemento13_parcial").value);
    let hierro_elemento13_cantidad = parseFloat(document.getElementById("hierro_elemento13_cantidad").value);

    let hierro_elemento14_ancho = parseFloat(document.getElementById("hierro_elemento14_ancho").value);
    let hierro_elemento14_alto = parseFloat(document.getElementById("hierro_elemento14_alto").value);
    let hierro_elemento14_parcial = parseFloat(document.getElementById("hierro_elemento14_parcial").value);
    let hierro_elemento14_cantidad = parseFloat(document.getElementById("hierro_elemento14_cantidad").value);

    let hierro_elemento15_ancho = parseFloat(document.getElementById("hierro_elemento15_ancho").value);
    let hierro_elemento15_alto = parseFloat(document.getElementById("hierro_elemento15_alto").value);
    let hierro_elemento15_parcial = parseFloat(document.getElementById("hierro_elemento15_parcial").value);
    let hierro_elemento15_cantidad = parseFloat(document.getElementById("hierro_elemento15_cantidad").value);

    let hierro_elemento16_ancho = parseFloat(document.getElementById("hierro_elemento16_ancho").value);
    let hierro_elemento16_alto = parseFloat(document.getElementById("hierro_elemento16_alto").value);
    let hierro_elemento16_parcial = parseFloat(document.getElementById("hierro_elemento16_parcial").value);
    let hierro_elemento16_cantidad = parseFloat(document.getElementById("hierro_elemento16_cantidad").value);

    let hierro_elemento17_ancho = parseFloat(document.getElementById("hierro_elemento17_ancho").value);
    let hierro_elemento17_alto = parseFloat(document.getElementById("hierro_elemento17_alto").value);
    let hierro_elemento17_parcial = parseFloat(document.getElementById("hierro_elemento17_parcial").value);
    let hierro_elemento17_cantidad = parseFloat(document.getElementById("hierro_elemento17_cantidad").value);

    let hierro_elemento18_ancho = parseFloat(document.getElementById("hierro_elemento18_ancho").value);
    let hierro_elemento18_alto = parseFloat(document.getElementById("hierro_elemento18_alto").value);
    let hierro_elemento18_parcial = parseFloat(document.getElementById("hierro_elemento18_parcial").value);
    let hierro_elemento18_cantidad = parseFloat(document.getElementById("hierro_elemento18_cantidad").value);




    //ZONA HÚMEDA ENCHAPE PISO

    if(hierro_elemento10_ancho===0.83){
        document.getElementById("hierro_elemento10_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento10_ancho").style.border="none";
        document.getElementById("hierro_elemento10_ancho").style.color="white";
        document.getElementById("hierro_elemento10_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento10_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento10_ancho").style.color="yellow";
        document.getElementById("hierro_elemento10_ancho").style.border="red";
    }

    if(hierro_elemento10_alto===0.83){
        document.getElementById("hierro_elemento10_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento10_alto").style.border="none";
        document.getElementById("hierro_elemento10_alto").style.color="white";
        document.getElementById("hierro_elemento10_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento10_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento10_alto").style.color="yellow";
        document.getElementById("hierro_elemento10_alto").style.border="red";
    }

    if(hierro_elemento10_parcial===0){
        document.getElementById("hierro_elemento10_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento10_parcial").style.border="none";
        document.getElementById("hierro_elemento10_parcial").style.color="white";
        document.getElementById("hierro_elemento10_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento10_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento10_parcial").style.color="yellow";
        document.getElementById("hierro_elemento10_parcial").style.border="red";
    }

    if(hierro_elemento10_cantidad===0.69){
        document.getElementById("hierro_elemento10_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento10_cantidad").style.border="none";
        document.getElementById("hierro_elemento10_cantidad").style.color="white";
        document.getElementById("hierro_elemento10_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento10_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento10_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento10_cantidad").style.border="red";
    }


    //ZONA HÚMEDA ENCHAPE PARED

    if(hierro_elemento11_ancho===1.66){
        document.getElementById("hierro_elemento11_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento11_ancho").style.border="none";
        document.getElementById("hierro_elemento11_ancho").style.color="white";
        document.getElementById("hierro_elemento11_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento11_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento11_ancho").style.color="yellow";
        document.getElementById("hierro_elemento11_ancho").style.border="red";
    }

    if(hierro_elemento11_alto===0){
        document.getElementById("hierro_elemento11_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento11_alto").style.border="none";
        document.getElementById("hierro_elemento11_alto").style.color="white";
        document.getElementById("hierro_elemento11_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento11_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento11_alto").style.color="yellow";
        document.getElementById("hierro_elemento11_alto").style.border="red";
    }

    if(hierro_elemento11_parcial===2.2){
        document.getElementById("hierro_elemento11_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento11_parcial").style.border="none";
        document.getElementById("hierro_elemento11_parcial").style.color="white";
        document.getElementById("hierro_elemento11_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento11_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento11_parcial").style.color="yellow";
        document.getElementById("hierro_elemento11_parcial").style.border="red";
    }

    if(hierro_elemento11_cantidad===3.65){
        document.getElementById("hierro_elemento11_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento11_cantidad").style.border="none";
        document.getElementById("hierro_elemento11_cantidad").style.color="white";
        document.getElementById("hierro_elemento11_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento11_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento11_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento11_cantidad").style.border="red";
    }

    //ZONA SECA ENCHAPE PISO

    if(hierro_elemento12_ancho===1.55){
        document.getElementById("hierro_elemento12_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento12_ancho").style.border="none";
        document.getElementById("hierro_elemento12_ancho").style.color="white";
        document.getElementById("hierro_elemento12_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento12_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento12_ancho").style.color="yellow";
        document.getElementById("hierro_elemento12_ancho").style.border="red";
    }

    if(hierro_elemento12_alto===0.72){
        document.getElementById("hierro_elemento12_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento12_alto").style.border="none";
        document.getElementById("hierro_elemento12_alto").style.color="white";
        document.getElementById("hierro_elemento12_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento12_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento12_alto").style.color="yellow";
        document.getElementById("hierro_elemento12_alto").style.border="red";
    }

    if(hierro_elemento12_parcial===0){
        document.getElementById("hierro_elemento12_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento12_parcial").style.border="none";
        document.getElementById("hierro_elemento12_parcial").style.color="white";
        document.getElementById("hierro_elemento12_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento12_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento12_parcial").style.color="yellow";
        document.getElementById("hierro_elemento12_parcial").style.border="red";
    }

    if(hierro_elemento12_cantidad===1.12){
        document.getElementById("hierro_elemento12_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento12_cantidad").style.border="none";
        document.getElementById("hierro_elemento12_cantidad").style.color="white";
        document.getElementById("hierro_elemento12_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento12_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento12_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento12_cantidad").style.border="red";
    }

    //ZONA SECA ESTUCO

    if(hierro_elemento13_ancho===3.12){
        document.getElementById("hierro_elemento13_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento13_ancho").style.border="none";
        document.getElementById("hierro_elemento13_ancho").style.color="white";
        document.getElementById("hierro_elemento13_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento13_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento13_ancho").style.color="yellow";
        document.getElementById("hierro_elemento13_ancho").style.border="red";
    }

    if(hierro_elemento13_alto===0){
        document.getElementById("hierro_elemento13_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento13_alto").style.border="none";
        document.getElementById("hierro_elemento13_alto").style.color="white";
        document.getElementById("hierro_elemento13_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento13_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento13_alto").style.color="yellow";
        document.getElementById("hierro_elemento13_alto").style.border="red";
    }

    if(hierro_elemento13_parcial===2.2){
        document.getElementById("hierro_elemento13_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento13_parcial").style.border="none";
        document.getElementById("hierro_elemento13_parcial").style.color="white";
        document.getElementById("hierro_elemento13_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento13_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento13_parcial").style.color="yellow";
        document.getElementById("hierro_elemento13_parcial").style.border="red";
    }

    if(hierro_elemento13_cantidad===6.86){
        document.getElementById("hierro_elemento13_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento13_cantidad").style.border="none";
        document.getElementById("hierro_elemento13_cantidad").style.color="white";
        document.getElementById("hierro_elemento13_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento13_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento13_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento13_cantidad").style.border="red";
    }


    //ZONA SECA PINTURA

    if(hierro_elemento14_ancho===3.12){
        document.getElementById("hierro_elemento14_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento14_ancho").style.border="none";
        document.getElementById("hierro_elemento14_ancho").style.color="white";
        document.getElementById("hierro_elemento14_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento14_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento14_ancho").style.color="yellow";
        document.getElementById("hierro_elemento14_ancho").style.border="red";
    }

    if(hierro_elemento14_alto===0){
        document.getElementById("hierro_elemento14_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento14_alto").style.border="none";
        document.getElementById("hierro_elemento14_alto").style.color="white";
        document.getElementById("hierro_elemento14_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento14_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento14_alto").style.color="yellow";
        document.getElementById("hierro_elemento14_alto").style.border="red";
    }

    if(hierro_elemento14_parcial===2.2){
        document.getElementById("hierro_elemento14_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento14_parcial").style.border="none";
        document.getElementById("hierro_elemento14_parcial").style.color="white";
        document.getElementById("hierro_elemento14_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento14_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento14_parcial").style.color="yellow";
        document.getElementById("hierro_elemento14_parcial").style.border="red";
    }

    if(hierro_elemento14_cantidad===6.86){
        document.getElementById("hierro_elemento14_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento14_cantidad").style.border="none";
        document.getElementById("hierro_elemento14_cantidad").style.color="white";
        document.getElementById("hierro_elemento14_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento14_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento14_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento14_cantidad").style.border="red";
    }



    //CIELO RASO ZONA HUMEDA ESTUCO

    if(hierro_elemento15_ancho===0.83){
        document.getElementById("hierro_elemento15_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento15_ancho").style.border="none";
        document.getElementById("hierro_elemento15_ancho").style.color="white";
        document.getElementById("hierro_elemento15_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento15_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento15_ancho").style.color="yellow";
        document.getElementById("hierro_elemento15_ancho").style.border="red";
    }

    if(hierro_elemento15_alto===0.83){
        document.getElementById("hierro_elemento15_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento15_alto").style.border="none";
        document.getElementById("hierro_elemento15_alto").style.color="white";
        document.getElementById("hierro_elemento15_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento15_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento15_alto").style.color="yellow";
        document.getElementById("hierro_elemento15_alto").style.border="red";
    }

    if(hierro_elemento15_parcial===0){
        document.getElementById("hierro_elemento15_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento15_parcial").style.border="none";
        document.getElementById("hierro_elemento15_parcial").style.color="white";
        document.getElementById("hierro_elemento15_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento15_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento15_parcial").style.color="yellow";
        document.getElementById("hierro_elemento15_parcial").style.border="red";
    }

    if(hierro_elemento15_cantidad===0.69){
        document.getElementById("hierro_elemento15_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento15_cantidad").style.border="none";
        document.getElementById("hierro_elemento15_cantidad").style.color="white";
        document.getElementById("hierro_elemento15_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento15_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento15_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento15_cantidad").style.border="red";
    }


    //CIELO RASO ZONA HUMEDA PINTURA

    if(hierro_elemento16_ancho===0.83){
        document.getElementById("hierro_elemento16_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento16_ancho").style.border="none";
        document.getElementById("hierro_elemento16_ancho").style.color="white";
        document.getElementById("hierro_elemento16_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento16_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento16_ancho").style.color="yellow";
        document.getElementById("hierro_elemento16_ancho").style.border="red";
    }

    if(hierro_elemento16_alto===0.83){
        document.getElementById("hierro_elemento16_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento16_alto").style.border="none";
        document.getElementById("hierro_elemento16_alto").style.color="white";
        document.getElementById("hierro_elemento16_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento16_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento16_alto").style.color="yellow";
        document.getElementById("hierro_elemento16_alto").style.border="red";
    }

    if(hierro_elemento16_parcial===0){
        document.getElementById("hierro_elemento16_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento16_parcial").style.border="none";
        document.getElementById("hierro_elemento16_parcial").style.color="white";
        document.getElementById("hierro_elemento16_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento16_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento16_parcial").style.color="yellow";
        document.getElementById("hierro_elemento16_parcial").style.border="red";
    }

    if(hierro_elemento16_cantidad===0.69){
        document.getElementById("hierro_elemento16_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento16_cantidad").style.border="none";
        document.getElementById("hierro_elemento16_cantidad").style.color="white";
        document.getElementById("hierro_elemento16_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento16_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento16_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento16_cantidad").style.border="red";
    }


    //CIELO RASO ZONA SECA ESTUCO

    if(hierro_elemento17_ancho===0.72){
        document.getElementById("hierro_elemento17_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento17_ancho").style.border="none";
        document.getElementById("hierro_elemento17_ancho").style.color="white";
        document.getElementById("hierro_elemento17_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento17_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento17_ancho").style.color="yellow";
        document.getElementById("hierro_elemento17_ancho").style.border="red";
    }

    if(hierro_elemento17_alto===0.72){
        document.getElementById("hierro_elemento17_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento17_alto").style.border="none";
        document.getElementById("hierro_elemento17_alto").style.color="white";
        document.getElementById("hierro_elemento17_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento17_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento17_alto").style.color="yellow";
        document.getElementById("hierro_elemento17_alto").style.border="red";
    }

    if(hierro_elemento17_parcial===0){
        document.getElementById("hierro_elemento17_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento17_parcial").style.border="none";
        document.getElementById("hierro_elemento17_parcial").style.color="white";
        document.getElementById("hierro_elemento17_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento17_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento17_parcial").style.color="yellow";
        document.getElementById("hierro_elemento17_parcial").style.border="red";
    }

    if(hierro_elemento17_cantidad===0.52){
        document.getElementById("hierro_elemento17_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento17_cantidad").style.border="none";
        document.getElementById("hierro_elemento17_cantidad").style.color="white";
        document.getElementById("hierro_elemento17_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento17_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento17_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento17_cantidad").style.border="red";
    }


    //CIELO RASO ZONA SECA PINTURA

    if(hierro_elemento18_ancho===0.72){
        document.getElementById("hierro_elemento18_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento18_ancho").style.border="none";
        document.getElementById("hierro_elemento18_ancho").style.color="white";
        document.getElementById("hierro_elemento18_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento18_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento18_ancho").style.color="yellow";
        document.getElementById("hierro_elemento18_ancho").style.border="red";
    }

    if(hierro_elemento18_alto===0.72){
        document.getElementById("hierro_elemento18_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento18_alto").style.border="none";
        document.getElementById("hierro_elemento18_alto").style.color="white";
        document.getElementById("hierro_elemento18_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento18_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento18_alto").style.color="yellow";
        document.getElementById("hierro_elemento18_alto").style.border="red";
    }

    if(hierro_elemento18_parcial===0){
        document.getElementById("hierro_elemento18_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento18_parcial").style.border="none";
        document.getElementById("hierro_elemento18_parcial").style.color="white";
        document.getElementById("hierro_elemento18_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento18_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento18_parcial").style.color="yellow";
        document.getElementById("hierro_elemento18_parcial").style.border="red";
    }

    if(hierro_elemento18_cantidad===0.52){
        document.getElementById("hierro_elemento18_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento18_cantidad").style.border="none";
        document.getElementById("hierro_elemento18_cantidad").style.color="white";
        document.getElementById("hierro_elemento18_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento18_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento18_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento18_cantidad").style.border="red";
    }
    
    

    if(hierro_aciertos===36){
        document.getElementById("hierro-calcular-btn").style.display="none";
        document.getElementById("hierro-btnBack").style.display="block";
        document.getElementById("box_intro").style.backgroundImage="url('img/box_explanation_5.png')"
        document.getElementById("main").style.boxShadow = "0rem 0rem 0rem #FFF";
    }else{
        document.getElementById("hierro-calcular-btn").style.display="none";
        document.getElementById("hierro-btnReload").style.display="block";
        document.getElementById("box_intro").style.backgroundImage="url('img/box_explanation_2.png')";
    }
}

document.getElementById("hierro-btnReload").onclick = function(){
    window.location.reload();
}

document.getElementById("hierro-btnBack").onclick = function(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA8.html","_self");
    return false;
}


document.getElementById("backBtn").onclick = function(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA8.html","_self");
    return false;
}