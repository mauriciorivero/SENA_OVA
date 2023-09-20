
ocultarSiguiente();

function ocultarSiguiente(){
    document.getElementById("enlace_siguiente").style.display = "none";
}
function mostrarSiguiente(){
    document.getElementById("enlace_siguiente").style.display = "inline";
}

function SetResultsColor(result, option){
    if(result==="ok"){
        document.getElementById(option).style.color="white";
        document.getElementById(option).style.backgroundColor="green";
        document.getElementById(option).style.border="lightgreen solid 0.5rem";
        document.getElementById(option).style.borderRadius="1rem";
        document.getElementById("ej1_ed1").style.color="white";
        document.getElementById("ej1_ed1").style.backgroundColor="green";
        document.getElementById("ej1_ed1").style.border="lightgreen solid 0.5rem";
    }
    if(result==="wrong"){
        document.getElementById(option).style.color="yellow";
        document.getElementById(option).style.backgroundColor="red";
        document.getElementById(option).style.border="orange solid 0.5rem";
        document.getElementById(option).style.borderRadius="1rem";
        document.getElementById("ej1_ed1").style.color="yellow";
        document.getElementById("ej1_ed1").style.backgroundColor="red";
        document.getElementById("ej1_ed1").style.border="orange solid 0.5rem";
    }
}

document.getElementById("btn_ejercicio1").onclick = function (){
    var editable1 = document.getElementById("ej1_ed1").value;
    var editable2 = document.getElementById("ej1_ed2").value;
    var editable3 = document.getElementById("ej1_ed3").value;
    var editable4 = document.getElementById("ej1_ed4").value;
    if((editable1!="")&&(editable2!="")&&(editable3!="")&&(editable4!="")){
        if((editable1==="1.40")&&(editable2==="9")&&(editable3==="3")&&(editable4==="8")){
            SetResultsColor("ok", "ej1");
            mostrarSiguiente();
        }else{
            SetResultsColor("wrong", "ej1");
            ocultarSiguiente();
        }
    }
}