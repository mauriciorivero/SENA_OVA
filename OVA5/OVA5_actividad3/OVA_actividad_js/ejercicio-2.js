
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

document.getElementById("btn_ejercicio2").onclick = function (){
    var editable1 = document.getElementById("ej2_ed1").value;
    var editable2 = document.getElementById("ej2_ed2").value;
    var editable3 = document.getElementById("ej2_ed3").value;
    if((editable1!="")&&(editable2!="")&&(editable3!="")){
        if((editable1==="4.13")&&(editable2==="3")&&(editable3==="8")){
            SetResultsColor("ok", "ej2");
            mostrarSiguiente();
        }else{
            SetResultsColor("wrong", "ej2");
            ocultarSiguiente();
        }
    }
}