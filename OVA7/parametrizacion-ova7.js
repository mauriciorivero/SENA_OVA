console.log("Parametrización Cargada");
var estado = 0;

function definirActividad(numeroActividad){
    estado=numeroActividad;
}

var escena = localStorage.getItem("textvalue");


function playDialog(dialog){
	stopAllAudio();
	switch (dialog){
        case "intro_roberto":
            playSound("intro");
            break;
        default: 
			playSound("presentacion");   
    }
}

function stopAllAudio(){
	createjs.Sound.stop("d1_b1");
}

