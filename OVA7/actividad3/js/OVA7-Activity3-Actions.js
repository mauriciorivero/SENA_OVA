var actividad = "actividad2";

document.getElementById("main_box").style.display = "none";
document.getElementById("main_box2").style.display="none";
document.getElementById("animation_container").style.display="none";
document.getElementById("estructura-btnReload").style.display="none";
document.getElementById("estructura-btnContinue").style.display="none";
document.getElementById("hierro-btnReload").style.display="none";
document.getElementById("hierro-btnBack").style.display="none";


document.getElementById("introduction_start-button").onclick = function(){
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
    let estructura_elemento1_unidad = document.getElementById("estructura_elemento1_unidad").value;
    let estructura_elemento1_largo = parseFloat(document.getElementById("estructura_elemento1_largo").value);
    let estructura_elemento1_ancho = parseFloat(document.getElementById("estructura_elemento1_ancho").value);
    let estructura_elemento1_alto = parseFloat(document.getElementById("estructura_elemento1_alto").value);
    let estructura_elemento1_parcial = parseFloat(document.getElementById("estructura_elemento1_parcial").value);
    let estructura_elemento1_cantidad = parseFloat(document.getElementById("estructura_elemento1_cantidad").value);
    let estructura_elemento1_total = parseFloat(document.getElementById("estructura_elemento1_total").value);

    let estructura_elemento2_unidad = document.getElementById("estructura_elemento2_unidad").value;
    let estructura_elemento2_largo = parseFloat(document.getElementById("estructura_elemento2_largo").value);
    let estructura_elemento2_ancho = parseFloat(document.getElementById("estructura_elemento2_ancho").value);
    let estructura_elemento2_alto = parseFloat(document.getElementById("estructura_elemento2_alto").value);
    let estructura_elemento2_parcial = parseFloat(document.getElementById("estructura_elemento2_parcial").value);
    let estructura_elemento2_cantidad = parseFloat(document.getElementById("estructura_elemento2_cantidad").value);
    let estructura_elemento2_total = parseFloat(document.getElementById("estructura_elemento2_total").value);

    let estructura_elemento3_unidad = document.getElementById("estructura_elemento3_unidad").value;
    let estructura_elemento3_largo = parseFloat(document.getElementById("estructura_elemento3_largo").value);
    let estructura_elemento3_ancho = parseFloat(document.getElementById("estructura_elemento3_ancho").value);
    let estructura_elemento3_alto = parseFloat(document.getElementById("estructura_elemento3_alto").value);
    let estructura_elemento3_parcial = parseFloat(document.getElementById("estructura_elemento3_parcial").value);
    let estructura_elemento3_cantidad = parseFloat(document.getElementById("estructura_elemento3_cantidad").value);
    let estructura_elemento3_total = parseFloat(document.getElementById("estructura_elemento3_total").value);

    let estructura_elemento4_unidad = document.getElementById("estructura_elemento4_unidad").value;
    let estructura_elemento4_largo = parseFloat(document.getElementById("estructura_elemento4_largo").value);
    let estructura_elemento4_ancho = parseFloat(document.getElementById("estructura_elemento4_ancho").value);
    let estructura_elemento4_alto = parseFloat(document.getElementById("estructura_elemento4_alto").value);
    let estructura_elemento4_parcial = parseFloat(document.getElementById("estructura_elemento4_parcial").value);
    let estructura_elemento4_cantidad = parseFloat(document.getElementById("estructura_elemento4_cantidad").value);
    let estructura_elemento4_total = parseFloat(document.getElementById("estructura_elemento4_total").value);


    //condicionales Viga aerea 1-2-3
    if(estructura_elemento1_unidad==="M3"){
        document.getElementById("estructura_elemento1_unidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento1_unidad").style.border="none";
        document.getElementById("estructura_elemento1_unidad").style.color="white";
        document.getElementById("estructura_elemento1_unidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento1_unidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento1_unidad").style.color="yellow";
        document.getElementById("estructura_elemento1_unidad").style.border="red";
    }

    if(estructura_elemento1_largo===3.3){
        document.getElementById("estructura_elemento1_largo").style.backgroundColor="green";
        document.getElementById("estructura_elemento1_largo").style.border="none";
        document.getElementById("estructura_elemento1_largo").style.color="white";
        document.getElementById("estructura_elemento1_largo").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento1_largo").style.backgroundColor="red";
        document.getElementById("estructura_elemento1_largo").style.color="yellow";
        document.getElementById("estructura_elemento1_largo").style.border="red";
    }

    if(estructura_elemento1_ancho===0.2){
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

    if(estructura_elemento1_alto===0.2){
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

    if(estructura_elemento1_parcial===0.132){
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

    if(estructura_elemento1_cantidad===3){
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

    if(estructura_elemento1_total===0.396){
        document.getElementById("estructura_elemento1_total").style.backgroundColor="green";
        document.getElementById("estructura_elemento1_total").style.border="none";
        document.getElementById("estructura_elemento1_total").style.color="white";
        document.getElementById("estructura_elemento1_total").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento1_total").style.backgroundColor="red";
        document.getElementById("estructura_elemento1_total").style.color="yellow";
        document.getElementById("estructura_elemento1_total").style.border="red";
    }

    //condicionales Viga aerea 4-5
    if(estructura_elemento2_unidad==="M3"){
        document.getElementById("estructura_elemento2_unidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento2_unidad").style.border="none";
        document.getElementById("estructura_elemento2_unidad").style.color="white";
        document.getElementById("estructura_elemento2_unidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento2_unidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento2_unidad").style.color="yellow";
        document.getElementById("estructura_elemento2_unidad").style.border="red";
    }

    if(estructura_elemento2_largo===6.7){
        document.getElementById("estructura_elemento2_largo").style.backgroundColor="green";
        document.getElementById("estructura_elemento2_largo").style.border="none";
        document.getElementById("estructura_elemento2_largo").style.color="white";
        document.getElementById("estructura_elemento2_largo").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento2_largo").style.backgroundColor="red";
        document.getElementById("estructura_elemento2_largo").style.color="yellow";
        document.getElementById("estructura_elemento2_largo").style.border="red";
    }

    if(estructura_elemento2_ancho===0.2){
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

    if(estructura_elemento2_alto===0.2){
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

    if(estructura_elemento2_parcial===0.268){
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

    if(estructura_elemento2_cantidad===2){
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

    if(estructura_elemento2_total===0.536){
        document.getElementById("estructura_elemento2_total").style.backgroundColor="green";
        document.getElementById("estructura_elemento2_total").style.border="none";
        document.getElementById("estructura_elemento2_total").style.color="white";
        document.getElementById("estructura_elemento2_total").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento2_total").style.backgroundColor="red";
        document.getElementById("estructura_elemento2_total").style.color="yellow";
        document.getElementById("estructura_elemento2_total").style.border="red";
    }


    //condicionales Viguetas
    if(estructura_elemento3_unidad==="M3"){
        document.getElementById("estructura_elemento3_unidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento3_unidad").style.border="none";
        document.getElementById("estructura_elemento3_unidad").style.color="white";
        document.getElementById("estructura_elemento3_unidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento3_unidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento3_unidad").style.color="yellow";
        document.getElementById("estructura_elemento3_unidad").style.border="red";
    }
    
    if(estructura_elemento3_largo===3.3){
        document.getElementById("estructura_elemento3_largo").style.backgroundColor="green";
        document.getElementById("estructura_elemento3_largo").style.border="none";
        document.getElementById("estructura_elemento3_largo").style.color="white";
        document.getElementById("estructura_elemento3_largo").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento3_largo").style.backgroundColor="red";
        document.getElementById("estructura_elemento3_largo").style.color="yellow";
        document.getElementById("estructura_elemento3_largo").style.border="red";
    }
    
    if(estructura_elemento3_ancho===0.1){
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
    
    if(estructura_elemento3_alto===0.15){
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
    
    if(estructura_elemento3_parcial===0.050){
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
    
    if(estructura_elemento3_cantidad===14){
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
    
    if(estructura_elemento3_total===0.693){
        document.getElementById("estructura_elemento3_total").style.backgroundColor="green";
        document.getElementById("estructura_elemento3_total").style.border="none";
        document.getElementById("estructura_elemento3_total").style.color="white";
        document.getElementById("estructura_elemento3_total").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento3_total").style.backgroundColor="red";
        document.getElementById("estructura_elemento3_total").style.color="yellow";
        document.getElementById("estructura_elemento3_total").style.border="red";
    }

    //condicionales Espacio losas sobre viguetas
    if(estructura_elemento4_unidad==="M3"){
        document.getElementById("estructura_elemento4_unidad").style.backgroundColor="green";
        document.getElementById("estructura_elemento4_unidad").style.border="none";
        document.getElementById("estructura_elemento4_unidad").style.color="white";
        document.getElementById("estructura_elemento4_unidad").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento4_unidad").style.backgroundColor="red";
        document.getElementById("estructura_elemento4_unidad").style.color="yellow";
        document.getElementById("estructura_elemento4_unidad").style.border="red";
    }
    
    if(estructura_elemento4_largo===3.3){
        document.getElementById("estructura_elemento4_largo").style.backgroundColor="green";
        document.getElementById("estructura_elemento4_largo").style.border="none";
        document.getElementById("estructura_elemento4_largo").style.color="white";
        document.getElementById("estructura_elemento4_largo").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento4_largo").style.backgroundColor="red";
        document.getElementById("estructura_elemento4_largo").style.color="yellow";
        document.getElementById("estructura_elemento4_largo").style.border="red";
    }
    
    if(estructura_elemento4_ancho===3.05){
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
    
    if(estructura_elemento4_alto===0.05){
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
    
    if(estructura_elemento4_parcial===0.503){
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
    
    if(estructura_elemento4_cantidad===2){
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
    
    if(estructura_elemento4_total===1.007){
        document.getElementById("estructura_elemento4_total").style.backgroundColor="green";
        document.getElementById("estructura_elemento4_total").style.border="none";
        document.getElementById("estructura_elemento4_total").style.color="white";
        document.getElementById("estructura_elemento4_total").style.border="green";
        estructura_aciertos += 1;
    }else{
        document.getElementById("estructura_elemento4_total").style.backgroundColor="red";
        document.getElementById("estructura_elemento4_total").style.color="yellow";
        document.getElementById("estructura_elemento4_total").style.border="red";
    }

    if(estructura_aciertos===28){
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
    document.getElementById("box_intro").style.backgroundImage="url('img/box_explanation_1.png')";
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
    let hierro_elemento1_unidad = document.getElementById("hierro_elemento1_unidad").value;
    let hierro_elemento1_largo = document.getElementById("hierro_elemento1_largo").value;
    let hierro_elemento1_ancho = parseFloat(document.getElementById("hierro_elemento1_ancho").value);
    let hierro_elemento1_alto = parseFloat(document.getElementById("hierro_elemento1_alto").value);
    let hierro_elemento1_parcial = parseFloat(document.getElementById("hierro_elemento1_parcial").value);
    let hierro_elemento1_cantidad = parseFloat(document.getElementById("hierro_elemento1_cantidad").value);
    let hierro_elemento1_total = parseFloat(document.getElementById("hierro_elemento1_total").value);

    let hierro_elemento2_unidad = document.getElementById("hierro_elemento2_unidad").value;
    let hierro_elemento2_largo = document.getElementById("hierro_elemento2_largo").value;
    let hierro_elemento2_ancho = parseFloat(document.getElementById("hierro_elemento2_ancho").value);
    let hierro_elemento2_alto = parseFloat(document.getElementById("hierro_elemento2_alto").value);
    let hierro_elemento2_parcial = parseFloat(document.getElementById("hierro_elemento2_parcial").value);
    let hierro_elemento2_cantidad = parseFloat(document.getElementById("hierro_elemento2_cantidad").value);
    let hierro_elemento2_total = parseFloat(document.getElementById("hierro_elemento2_total").value);

    let hierro_elemento3_unidad = document.getElementById("hierro_elemento3_unidad").value;
    let hierro_elemento3_largo = document.getElementById("hierro_elemento3_largo").value;
    let hierro_elemento3_ancho = parseFloat(document.getElementById("hierro_elemento3_ancho").value);
    let hierro_elemento3_alto = parseFloat(document.getElementById("hierro_elemento3_alto").value);
    let hierro_elemento3_parcial = parseFloat(document.getElementById("hierro_elemento3_parcial").value);
    let hierro_elemento3_cantidad = parseFloat(document.getElementById("hierro_elemento3_cantidad").value);
    let hierro_elemento3_total = parseFloat(document.getElementById("hierro_elemento3_total").value);

    let hierro_elemento4_unidad = document.getElementById("hierro_elemento4_unidad").value;
    let hierro_elemento4_largo = document.getElementById("hierro_elemento4_largo").value;
    let hierro_elemento4_ancho = parseFloat(document.getElementById("hierro_elemento4_ancho").value);
    let hierro_elemento4_alto = parseFloat(document.getElementById("hierro_elemento4_alto").value);
    let hierro_elemento4_parcial = parseFloat(document.getElementById("hierro_elemento4_parcial").value);
    let hierro_elemento4_cantidad = parseFloat(document.getElementById("hierro_elemento4_cantidad").value);
    let hierro_elemento4_total = parseFloat(document.getElementById("hierro_elemento4_total").value);

    let hierro_elemento5_unidad = document.getElementById("hierro_elemento5_unidad").value;
    let hierro_elemento5_largo = document.getElementById("hierro_elemento5_largo").value;
    let hierro_elemento5_ancho = parseFloat(document.getElementById("hierro_elemento5_ancho").value);
    let hierro_elemento5_alto = parseFloat(document.getElementById("hierro_elemento5_alto").value);
    let hierro_elemento5_parcial = parseFloat(document.getElementById("hierro_elemento5_parcial").value);
    let hierro_elemento5_cantidad = parseFloat(document.getElementById("hierro_elemento5_cantidad").value);
    let hierro_elemento5_total = parseFloat(document.getElementById("hierro_elemento5_total").value);


    //condicionales Viga aerea 1-2-3
    if(hierro_elemento1_unidad==="4"){
        document.getElementById("hierro_elemento1_unidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento1_unidad").style.border="none";
        document.getElementById("hierro_elemento1_unidad").style.color="white";
        document.getElementById("hierro_elemento1_unidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento1_unidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento1_unidad").style.color="yellow";
        document.getElementById("hierro_elemento1_unidad").style.border="red";
    }

    if(hierro_elemento1_largo==="1/2"){
        document.getElementById("hierro_elemento1_largo").style.backgroundColor="green";
        document.getElementById("hierro_elemento1_largo").style.border="none";
        document.getElementById("hierro_elemento1_largo").style.color="white";
        document.getElementById("hierro_elemento1_largo").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento1_largo").style.backgroundColor="red";
        document.getElementById("hierro_elemento1_largo").style.color="yellow";
        document.getElementById("hierro_elemento1_largo").style.border="red";
    }

    if(hierro_elemento1_ancho===3.92){
        document.getElementById("hierro_elemento1_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento1_ancho").style.border="none";
        document.getElementById("hierro_elemento1_ancho").style.color="white";
        document.getElementById("hierro_elemento1_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento1_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento1_ancho").style.color="yellow";
        document.getElementById("hierro_elemento1_ancho").style.border="red";
    }

    if(hierro_elemento1_alto===12){
        document.getElementById("hierro_elemento1_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento1_alto").style.border="none";
        document.getElementById("hierro_elemento1_alto").style.color="white";
        document.getElementById("hierro_elemento1_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento1_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento1_alto").style.color="yellow";
        document.getElementById("hierro_elemento1_alto").style.border="red";
    }

    if(hierro_elemento1_parcial===47.04){
        document.getElementById("hierro_elemento1_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento1_parcial").style.border="none";
        document.getElementById("hierro_elemento1_parcial").style.color="white";
        document.getElementById("hierro_elemento1_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento1_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento1_parcial").style.color="yellow";
        document.getElementById("hierro_elemento1_parcial").style.border="red";
    }

    if(hierro_elemento1_cantidad===0.994){
        document.getElementById("hierro_elemento1_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento1_cantidad").style.border="none";
        document.getElementById("hierro_elemento1_cantidad").style.color="white";
        document.getElementById("hierro_elemento1_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento1_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento1_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento1_cantidad").style.border="red";
    }

    if(hierro_elemento1_total===46.758){
        document.getElementById("hierro_elemento1_total").style.backgroundColor="green";
        document.getElementById("hierro_elemento1_total").style.border="none";
        document.getElementById("hierro_elemento1_total").style.color="white";
        document.getElementById("hierro_elemento1_total").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento1_total").style.backgroundColor="red";
        document.getElementById("hierro_elemento1_total").style.color="yellow";
        document.getElementById("hierro_elemento1_total").style.border="red";
    }

    //condicionales Viga aerea 4-5
    if(hierro_elemento2_unidad==="4"){
        document.getElementById("hierro_elemento2_unidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento2_unidad").style.border="none";
        document.getElementById("hierro_elemento2_unidad").style.color="white";
        document.getElementById("hierro_elemento2_unidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento2_unidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento2_unidad").style.color="yellow";
        document.getElementById("hierro_elemento2_unidad").style.border="red";
    }

    if(hierro_elemento2_largo==="1/2"){
        document.getElementById("hierro_elemento2_largo").style.backgroundColor="green";
        document.getElementById("hierro_elemento2_largo").style.border="none";
        document.getElementById("hierro_elemento2_largo").style.color="white";
        document.getElementById("hierro_elemento2_largo").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento2_largo").style.backgroundColor="red";
        document.getElementById("hierro_elemento2_largo").style.color="yellow";
        document.getElementById("hierro_elemento2_largo").style.border="red";
    }

    if(hierro_elemento2_ancho===6.92){
        document.getElementById("hierro_elemento2_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento2_ancho").style.border="none";
        document.getElementById("hierro_elemento2_ancho").style.color="white";
        document.getElementById("hierro_elemento2_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento2_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento2_ancho").style.color="yellow";
        document.getElementById("hierro_elemento2_ancho").style.border="red";
    }

    if(hierro_elemento2_alto===8){
        document.getElementById("hierro_elemento2_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento2_alto").style.border="none";
        document.getElementById("hierro_elemento2_alto").style.color="white";
        document.getElementById("hierro_elemento2_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento2_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento2_alto").style.color="yellow";
        document.getElementById("hierro_elemento2_alto").style.border="red";
    }

    if(hierro_elemento2_parcial===55.36){
        document.getElementById("hierro_elemento2_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento2_parcial").style.border="none";
        document.getElementById("hierro_elemento2_parcial").style.color="white";
        document.getElementById("hierro_elemento2_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento2_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento2_parcial").style.color="yellow";
        document.getElementById("hierro_elemento2_parcial").style.border="red";
    }

    if(hierro_elemento2_cantidad===0.994){
        document.getElementById("hierro_elemento2_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento2_cantidad").style.border="none";
        document.getElementById("hierro_elemento2_cantidad").style.color="white";
        document.getElementById("hierro_elemento2_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento2_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento2_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento2_cantidad").style.border="red";
    }

    if(hierro_elemento2_total===55.028){
        document.getElementById("hierro_elemento2_total").style.backgroundColor="green";
        document.getElementById("hierro_elemento2_total").style.border="none";
        document.getElementById("hierro_elemento2_total").style.color="white";
        document.getElementById("hierro_elemento2_total").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento2_total").style.backgroundColor="red";
        document.getElementById("hierro_elemento2_total").style.color="yellow";
        document.getElementById("hierro_elemento2_total").style.border="red";
    }


    //condicionales Viguetas
    if(hierro_elemento3_unidad==="4"){
        document.getElementById("hierro_elemento3_unidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento3_unidad").style.border="none";
        document.getElementById("hierro_elemento3_unidad").style.color="white";
        document.getElementById("hierro_elemento3_unidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento3_unidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento3_unidad").style.color="yellow";
        document.getElementById("hierro_elemento3_unidad").style.border="red";
    }
    
    if(hierro_elemento3_largo==="1/2"){
        document.getElementById("hierro_elemento3_largo").style.backgroundColor="green";
        document.getElementById("hierro_elemento3_largo").style.border="none";
        document.getElementById("hierro_elemento3_largo").style.color="white";
        document.getElementById("hierro_elemento3_largo").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento3_largo").style.backgroundColor="red";
        document.getElementById("hierro_elemento3_largo").style.color="yellow";
        document.getElementById("hierro_elemento3_largo").style.border="red";
    }
    
    if(hierro_elemento3_ancho===3.9){
        document.getElementById("hierro_elemento3_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento3_ancho").style.border="none";
        document.getElementById("hierro_elemento3_ancho").style.color="white";
        document.getElementById("hierro_elemento3_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento3_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento3_ancho").style.color="yellow";
        document.getElementById("hierro_elemento3_ancho").style.border="red";
    }
    
    if(hierro_elemento3_alto===28){
        document.getElementById("hierro_elemento3_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento3_alto").style.border="none";
        document.getElementById("hierro_elemento3_alto").style.color="white";
        document.getElementById("hierro_elemento3_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento3_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento3_alto").style.color="yellow";
        document.getElementById("hierro_elemento3_alto").style.border="red";
    }
    
    if(hierro_elemento3_parcial===109.2){
        document.getElementById("hierro_elemento3_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento3_parcial").style.border="none";
        document.getElementById("hierro_elemento3_parcial").style.color="white";
        document.getElementById("hierro_elemento3_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento3_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento3_parcial").style.color="yellow";
        document.getElementById("hierro_elemento3_parcial").style.border="red";
    }
    
    if(hierro_elemento3_cantidad===0.994){
        document.getElementById("hierro_elemento3_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento3_cantidad").style.border="none";
        document.getElementById("hierro_elemento3_cantidad").style.color="white";
        document.getElementById("hierro_elemento3_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento3_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento3_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento3_cantidad").style.border="red";
    }
    
    if(hierro_elemento3_total===108.5448){
        document.getElementById("hierro_elemento3_total").style.backgroundColor="green";
        document.getElementById("hierro_elemento3_total").style.border="none";
        document.getElementById("hierro_elemento3_total").style.color="white";
        document.getElementById("hierro_elemento3_total").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento3_total").style.backgroundColor="red";
        document.getElementById("hierro_elemento3_total").style.color="yellow";
        document.getElementById("hierro_elemento3_total").style.border="red";
    }

    //condicionales Estribos en vigas losas sobre viguetas
    if(hierro_elemento4_unidad==="2"){
        document.getElementById("hierro_elemento4_unidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento4_unidad").style.border="none";
        document.getElementById("hierro_elemento4_unidad").style.color="white";
        document.getElementById("hierro_elemento4_unidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento4_unidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento4_unidad").style.color="yellow";
        document.getElementById("hierro_elemento4_unidad").style.border="red";
    }
    
    if(hierro_elemento4_largo==="1/4"){
        document.getElementById("hierro_elemento4_largo").style.backgroundColor="green";
        document.getElementById("hierro_elemento4_largo").style.border="none";
        document.getElementById("hierro_elemento4_largo").style.color="white";
        document.getElementById("hierro_elemento4_largo").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento4_largo").style.backgroundColor="red";
        document.getElementById("hierro_elemento4_largo").style.color="yellow";
        document.getElementById("hierro_elemento4_largo").style.border="red";
    }
    
    if(hierro_elemento4_ancho===0.63){
        document.getElementById("hierro_elemento4_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento4_ancho").style.border="none";
        document.getElementById("hierro_elemento4_ancho").style.color="white";
        document.getElementById("hierro_elemento4_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento4_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento4_ancho").style.color="yellow";
        document.getElementById("hierro_elemento4_ancho").style.border="red";
    }
    
    if(hierro_elemento4_alto===157){
        document.getElementById("hierro_elemento4_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento4_alto").style.border="none";
        document.getElementById("hierro_elemento4_alto").style.color="white";
        document.getElementById("hierro_elemento4_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento4_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento4_alto").style.color="yellow";
        document.getElementById("hierro_elemento4_alto").style.border="red";
    }
    
    if(hierro_elemento4_parcial===98.91){
        document.getElementById("hierro_elemento4_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento4_parcial").style.border="none";
        document.getElementById("hierro_elemento4_parcial").style.color="white";
        document.getElementById("hierro_elemento4_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento4_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento4_parcial").style.color="yellow";
        document.getElementById("hierro_elemento4_parcial").style.border="red";
    }
    
    if(hierro_elemento4_cantidad===0.249){
        document.getElementById("hierro_elemento4_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento4_cantidad").style.border="none";
        document.getElementById("hierro_elemento4_cantidad").style.color="white";
        document.getElementById("hierro_elemento4_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento4_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento4_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento4_cantidad").style.border="red";
    }
    
    if(hierro_elemento4_total===24.629){
        document.getElementById("hierro_elemento4_total").style.backgroundColor="green";
        document.getElementById("hierro_elemento4_total").style.border="none";
        document.getElementById("hierro_elemento4_total").style.color="white";
        document.getElementById("hierro_elemento4_total").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento4_total").style.backgroundColor="red";
        document.getElementById("hierro_elemento4_total").style.color="yellow";
        document.getElementById("hierro_elemento4_total").style.border="red";
    }

    //condicionales Estribos sobre viguetas
    if(hierro_elemento5_unidad==="2"){
        document.getElementById("hierro_elemento5_unidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento5_unidad").style.border="none";
        document.getElementById("hierro_elemento5_unidad").style.color="white";
        document.getElementById("hierro_elemento5_unidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento5_unidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento5_unidad").style.color="yellow";
        document.getElementById("hierro_elemento5_unidad").style.border="red";
    }
    
    if(hierro_elemento5_largo==="1/4"){
        document.getElementById("hierro_elemento5_largo").style.backgroundColor="green";
        document.getElementById("hierro_elemento5_largo").style.border="none";
        document.getElementById("hierro_elemento5_largo").style.color="white";
        document.getElementById("hierro_elemento5_largo").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento5_largo").style.backgroundColor="red";
        document.getElementById("hierro_elemento5_largo").style.color="yellow";
        document.getElementById("hierro_elemento5_largo").style.border="red";
    }
    
    if(hierro_elemento5_ancho===0.24){
        document.getElementById("hierro_elemento5_ancho").style.backgroundColor="green";
        document.getElementById("hierro_elemento5_ancho").style.border="none";
        document.getElementById("hierro_elemento5_ancho").style.color="white";
        document.getElementById("hierro_elemento5_ancho").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento5_ancho").style.backgroundColor="red";
        document.getElementById("hierro_elemento5_ancho").style.color="yellow";
        document.getElementById("hierro_elemento5_ancho").style.border="red";
    }
    
    if(hierro_elemento5_alto===588){
        document.getElementById("hierro_elemento5_alto").style.backgroundColor="green";
        document.getElementById("hierro_elemento5_alto").style.border="none";
        document.getElementById("hierro_elemento5_alto").style.color="white";
        document.getElementById("hierro_elemento5_alto").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento5_alto").style.backgroundColor="red";
        document.getElementById("hierro_elemento5_alto").style.color="yellow";
        document.getElementById("hierro_elemento5_alto").style.border="red";
    }
    
    if(hierro_elemento5_parcial===141.12){
        document.getElementById("hierro_elemento5_parcial").style.backgroundColor="green";
        document.getElementById("hierro_elemento5_parcial").style.border="none";
        document.getElementById("hierro_elemento5_parcial").style.color="white";
        document.getElementById("hierro_elemento5_parcial").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento5_parcial").style.backgroundColor="red";
        document.getElementById("hierro_elemento5_parcial").style.color="yellow";
        document.getElementById("hierro_elemento5_parcial").style.border="red";
    }
    
    if(hierro_elemento5_cantidad===0.249){
        document.getElementById("hierro_elemento5_cantidad").style.backgroundColor="green";
        document.getElementById("hierro_elemento5_cantidad").style.border="none";
        document.getElementById("hierro_elemento5_cantidad").style.color="white";
        document.getElementById("hierro_elemento5_cantidad").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento5_cantidad").style.backgroundColor="red";
        document.getElementById("hierro_elemento5_cantidad").style.color="yellow";
        document.getElementById("hierro_elemento5_cantidad").style.border="red";
    }
    
    if(hierro_elemento5_total===35.139){
        document.getElementById("hierro_elemento5_total").style.backgroundColor="green";
        document.getElementById("hierro_elemento5_total").style.border="none";
        document.getElementById("hierro_elemento5_total").style.color="white";
        document.getElementById("hierro_elemento5_total").style.border="green";
        hierro_aciertos += 1;
    }else{
        document.getElementById("hierro_elemento5_total").style.backgroundColor="red";
        document.getElementById("hierro_elemento5_total").style.color="yellow";
        document.getElementById("hierro_elemento5_total").style.border="red";
    }

    if(hierro_aciertos===35){
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
    document.getElementById("box_intro").style.display="none";
    document.getElementById("main_box2").style.display="none";
    document.getElementById("animation_container").style.display="flex";
    document.getElementById("animation_container").style.marginTop="-1rem";
    return false;
}


document.getElementById("backBtn").onclick = function(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA7V001.html","_self");
    return false;
}