console.log("Parametrización Cargada");
var escena = localStorage.getItem("textvalue");

function playDialog(dialog){
	stopAllAudio();
	switch (dialog){
        case "dialogo1_b1":
            playSound("presentacion");
            break;
        default: 
			playSound("d1_b1");   
    }
}

function stopAllAudio(){
	createjs.Sound.stop("d1_b1");
}