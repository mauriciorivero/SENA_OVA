

document.getElementById("main_box").style.display = "none";
document.getElementById("btnReload").style.display="none";
document.getElementById("btnBack").style.display="none";

document.getElementById("introduction_start-button").onclick = function(){
    document.getElementById("introduction_box").style.display = "none";
    document.getElementById("main_box").style.display = "flex";
}

document.getElementById("introduction_download-button").onclick = function(){
    window.open("../actividad3/doc/enunciado_actividad3.pdf","_blank");
}

document.getElementById("btnCalculate").onclick = function(){
    let aciertos = 0;

    //variables cemento
    let cementoVar1 = parseFloat(document.getElementById("cemento_input1").value);
    let cementoVar2 = parseFloat(document.getElementById("cemento_input2").value);
    let cementoVar3 = parseFloat(document.getElementById("cemento_input3").value);

    //variables arena
    let arenaVar1 = parseFloat(document.getElementById("arena_input1").value);
    let arenaVar2 = parseFloat(document.getElementById("arena_input2").value);
    let arenaVar3 = parseFloat(document.getElementById("arena_input3").value);

    //variables triturado
    let trituradoVar1 = parseFloat(document.getElementById("triturado_input1").value);
    let trituradoVar2 = parseFloat(document.getElementById("triturado_input2").value);
    let trituradoVar3 = parseFloat(document.getElementById("triturado_input3").value);

    //variables agua
    let aguaVar1 = parseFloat(document.getElementById("agua_input1").value);
    let aguaVar2 = parseFloat(document.getElementById("agua_input2").value);
    let aguaVar3 = parseFloat(document.getElementById("agua_input3").value);

    //variables fondo
    let fondoVar1 = parseFloat(document.getElementById("fondo_input1").value);
    let fondoVar2 = parseFloat(document.getElementById("fondo_input2").value);
    let fondoVar3 = parseFloat(document.getElementById("fondo_input3").value);

    //variables escalon
    let escalonVar1 = parseFloat(document.getElementById("escalon_input1").value);
    let escalonVar2 = parseFloat(document.getElementById("escalon_input2").value);
    let escalonVar3 = parseFloat(document.getElementById("escalon_input3").value);

    //variables lados
    let ladosVar1 = parseFloat(document.getElementById("lados_input1").value);
    let ladosVar2 = parseFloat(document.getElementById("lados_input2").value);
    let ladosVar3 = parseFloat(document.getElementById("lados_input3").value);

    //variables madera
    let maderaVar3 = parseFloat(document.getElementById("madera_input3").value);


    //condicionales cemento
    if(cementoVar1===350){
        document.getElementById("cemento_input1").style.backgroundColor="green";
        document.getElementById("cemento_input1").style.color="white";
        document.getElementById("cemento_input1").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("cemento_input1").style.backgroundColor="red";
        document.getElementById("cemento_input1").style.color="yellow";
        document.getElementById("cemento_input1").style.border="red";
    }
    if(cementoVar2===2.45){
        document.getElementById("cemento_input2").style.backgroundColor="green";
        document.getElementById("cemento_input2").style.color="white";
        document.getElementById("cemento_input2").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("cemento_input2").style.backgroundColor="red";
        document.getElementById("cemento_input2").style.color="yellow";
        document.getElementById("cemento_input2").style.border="red";      
    }
    if(cementoVar3===859.43){
        document.getElementById("cemento_input3").style.backgroundColor="green";
        document.getElementById("cemento_input3").style.color="white";
        document.getElementById("cemento_input3").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("cemento_input3").style.backgroundColor="red";
        document.getElementById("cemento_input3").style.color="yellow";
        document.getElementById("cemento_input3").style.border="red";
    }

    //condicionales arena
    if(arenaVar1===0.55){
        document.getElementById("arena_input1").style.backgroundColor="green";
        document.getElementById("arena_input1").style.color="white";
        document.getElementById("arena_input1").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("arena_input1").style.backgroundColor="red";
        document.getElementById("arena_input1").style.color="yellow";
        document.getElementById("arena_input1").style.border="red";
    }
    if(arenaVar2===2.45){
        document.getElementById("arena_input2").style.backgroundColor="green";
        document.getElementById("arena_input2").style.color="white";
        document.getElementById("arena_input2").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("arena_input2").style.backgroundColor="red";
        document.getElementById("arena_input2").style.color="yellow";
        document.getElementById("arena_input2").style.border="red";      
    }
    if(arenaVar3===1.347){
        document.getElementById("arena_input3").style.backgroundColor="green";
        document.getElementById("arena_input3").style.color="white";
        document.getElementById("arena_input3").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("arena_input3").style.backgroundColor="red";
        document.getElementById("arena_input3").style.color="yellow";
        document.getElementById("arena_input3").style.border="red";
    }

    //condicionales triturado
    if(trituradoVar1===0.84){
        document.getElementById("triturado_input1").style.backgroundColor="green";
        document.getElementById("triturado_input1").style.color="white";
        document.getElementById("triturado_input1").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("triturado_input1").style.backgroundColor="red";
        document.getElementById("triturado_input1").style.color="yellow";
        document.getElementById("triturado_input1").style.border="red";
    }
    if(trituradoVar2===2.45){
        document.getElementById("triturado_input2").style.backgroundColor="green";
        document.getElementById("triturado_input2").style.color="white";
        document.getElementById("triturado_input2").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("triturado_input2").style.backgroundColor="red";
        document.getElementById("triturado_input2").style.color="yellow";
        document.getElementById("triturado_input2").style.border="red";      
    }
    if(trituradoVar3===2.058){
        document.getElementById("triturado_input3").style.backgroundColor="green";
        document.getElementById("triturado_input3").style.color="white";
        document.getElementById("triturado_input3").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("triturado_input3").style.backgroundColor="red";
        document.getElementById("triturado_input3").style.color="yellow";
        document.getElementById("triturado_input3").style.border="red";
    }

    
    //condicionales agua
    if(aguaVar1===170){
        document.getElementById("agua_input1").style.backgroundColor="green";
        document.getElementById("agua_input1").style.color="white";
        document.getElementById("agua_input1").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("agua_input1").style.backgroundColor="red";
        document.getElementById("agua_input1").style.color="yellow";
        document.getElementById("agua_input1").style.border="red";
    }
    if(aguaVar2===2.45){
        document.getElementById("agua_input2").style.backgroundColor="green";
        document.getElementById("agua_input2").style.color="white";
        document.getElementById("agua_input2").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("agua_input2").style.backgroundColor="red";
        document.getElementById("agua_input2").style.color="yellow";
        document.getElementById("agua_input2").style.border="red";      
    }
    if(aguaVar3===416.5){
        document.getElementById("agua_input3").style.backgroundColor="green";
        document.getElementById("agua_input3").style.color="white";
        document.getElementById("agua_input3").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("agua_input3").style.backgroundColor="red";
        document.getElementById("agua_input3").style.color="yellow";
        document.getElementById("agua_input3").style.border="red";
    }

    //condicionales fondo
    if(fondoVar1===2.50){
        document.getElementById("fondo_input1").style.backgroundColor="green";
        document.getElementById("fondo_input1").style.color="white";
        document.getElementById("fondo_input1").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("fondo_input1").style.backgroundColor="red";
        document.getElementById("fondo_input1").style.color="yellow";
        document.getElementById("fondo_input1").style.border="red";
    }
    if(fondoVar2===1.20){
        document.getElementById("fondo_input2").style.backgroundColor="green";
        document.getElementById("fondo_input2").style.color="white";
        document.getElementById("fondo_input2").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("fondo_input2").style.backgroundColor="red";
        document.getElementById("fondo_input2").style.color="yellow";
        document.getElementById("fondo_input2").style.border="red";      
    }
    if(fondoVar3===3){
        document.getElementById("fondo_input3").style.backgroundColor="green";
        document.getElementById("fondo_input3").style.color="white";
        document.getElementById("fondo_input3").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("fondo_input3").style.backgroundColor="red";
        document.getElementById("fondo_input3").style.color="yellow";
        document.getElementById("fondo_input3").style.border="red";
    }

    //condicionales escalon
    if(escalonVar1===1.20){
        document.getElementById("escalon_input1").style.backgroundColor="green";
        document.getElementById("escalon_input1").style.color="white";
        document.getElementById("escalon_input1").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("escalon_input1").style.backgroundColor="red";
        document.getElementById("escalon_input1").style.color="yellow";
        document.getElementById("escalon_input1").style.border="red";
    }
    if(escalonVar2===0.175){
        document.getElementById("escalon_input2").style.backgroundColor="green";
        document.getElementById("escalon_input2").style.color="white";
        document.getElementById("escalon_input2").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("escalon_input2").style.backgroundColor="red";
        document.getElementById("escalon_input2").style.color="yellow";
        document.getElementById("escalon_input2").style.border="red";      
    }
    if(escalonVar3===0.21){
        document.getElementById("escalon_input3").style.backgroundColor="green";
        document.getElementById("escalon_input3").style.color="white";
        document.getElementById("escalon_input3").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("escalon_input3").style.backgroundColor="red";
        document.getElementById("escalon_input3").style.color="yellow";
        document.getElementById("escalon_input3").style.border="red";
    }

    //condicionales lados
    if(ladosVar1===3.05){
        document.getElementById("lados_input1").style.backgroundColor="green";
        document.getElementById("lados_input1").style.color="white";
        document.getElementById("lados_input1").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("lados_input1").style.backgroundColor="red";
        document.getElementById("lados_input1").style.color="yellow";
        document.getElementById("lados_input1").style.border="red";
    }
    if(ladosVar2===2){
        document.getElementById("lados_input2").style.backgroundColor="green";
        document.getElementById("lados_input2").style.color="white";
        document.getElementById("lados_input2").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("lados_input2").style.backgroundColor="red";
        document.getElementById("lados_input2").style.color="yellow";
        document.getElementById("lados_input2").style.border="red";      
    }
    if(ladosVar3===6.10){
        document.getElementById("lados_input3").style.backgroundColor="green";
        document.getElementById("lados_input3").style.color="white";
        document.getElementById("lados_input3").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("lados_input3").style.backgroundColor="red";
        document.getElementById("lados_input3").style.color="yellow";
        document.getElementById("lados_input3").style.border="red";
    }

    //condicionales madera
    if(maderaVar3===9.31){
        document.getElementById("madera_input3").style.backgroundColor="green";
        document.getElementById("madera_input3").style.color="white";
        document.getElementById("madera_input3").style.border="green";
        aciertos += 1;
    }else{
        document.getElementById("madera_input3").style.backgroundColor="red";
        document.getElementById("madera_input3").style.color="yellow";
        document.getElementById("madera_input3").style.border="red";
    }
    
    if(aciertos===22){
        document.getElementById("btnCalculate").style.display="none";
        document.getElementById("btnBack").style.display="block";
        document.getElementById("box_intro").style.backgroundImage="url('../actividad3/img/box_explanation_3.png')"
    }else{
        document.getElementById("btnCalculate").style.display="none";
        document.getElementById("btnReload").style.display="block";
        document.getElementById("box_intro").style.backgroundImage="url('../actividad3/img/box_explanation_2.png')";
    }

}

var actividad = "actividad2";

document.getElementById("btnReload").onclick = function(){
    window.location.reload();
}

document.getElementById("btnBack").onclick = function(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA6.html","_self");
    return false;
}

document.getElementById("backBtn").onclick = function(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA6.html","_self");
    return false;
}