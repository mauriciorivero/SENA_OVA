
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
    }
    if(result==="wrong"){
        document.getElementById(option).style.color="yellow";
        document.getElementById(option).style.backgroundColor="red";
        document.getElementById(option).style.border="orange solid 0.5rem";
        document.getElementById(option).style.borderRadius="1rem";
    }
}

document.getElementById("btn_ejercicio3").onclick = function (){
    var editable2 = document.getElementById("ej3_ed2").value;
    var editable3 = document.getElementById("ej3_ed3").value;
    var editable4 = document.getElementById("ej3_ed4").value;
    if((editable2!="")&&(editable3!="")&&(editable4!="")){
        if((editable2==="5")&&(editable3==="1")&&(editable4==="4")){
            SetResultsColor("ok", "ej3");
            mostrarSiguiente();
        }else{
            SetResultsColor("wrong", "ej3");
            ocultarSiguiente();
        }
    }
}