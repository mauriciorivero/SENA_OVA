
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

document.getElementById("btn_ejercicio7").onclick = function (){
    var editable1 = document.getElementById("ej7_ed1").value;
    var editable2 = document.getElementById("ej7_ed2").value;
    var editable3 = document.getElementById("ej7_ed3").value;
    if((editable1!="")&&(editable2!="")&&(editable3!="")){
        if((editable1==="2.85")&&(editable2==="1")&&(editable3==="4")){
            SetResultsColor("ok", "ej7");
            mostrarSiguiente();
        }else{
            SetResultsColor("wrong", "ej7");
            ocultarSiguiente();
        }
    }
}