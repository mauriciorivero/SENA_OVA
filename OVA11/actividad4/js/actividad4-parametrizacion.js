var intentos=5;
var compras=0;
var actividad = "actividad4";
let construccionSeleccionada = null;
const carrito = [];
const construcciones = {
    'zapatas': ['productoCementoGris', 'productoArena', 'productoTriturado', 'productoAgua','productoVarillaMedio'],
    'sobrecimiento': ['productoArena', 'productoCementoGris', 'productoBloqueConcreto', 'productoAgua'],
    'muro': ['productoBloquesPerforacion', 'productoVarillaTresOctavo', 'productoGrouting', 'productoAgua'],
    'enchapes': ['productoCeramica', 'productoPegacor', 'productoBoquilla'],
    'losas': ['productoAgua','productoCementoGris', 'productoArena', 'productoTriturado','productoAlambreRecocido','productoMallaElectrosoldada', 'productoVarillaCuarto']
    // ... otras construcciones ...
};

document.getElementById("intentos-flag").innerHTML = "Intentos: "+intentos;
document.getElementById("construccion-flag").innerHTML = "Compras acertadas: "+compras;


function pasarEstado(){
    localStorage.setItem("textvalue", actividad);
    window.open("../OVA11V001.html","_self");
    return false;
}

function verificarCompras(construccion){
    if(construccionSeleccionada==="zapatas"){
        compras++;
        document.getElementById("construccion-flag").innerHTML="Total compras realizadas: "+compras;
        document.getElementById("enlace1").style.display="none";
    }
    if(construccionSeleccionada==="sobrecimiento"){
        compras++;
        document.getElementById("construccion-flag").innerHTML="Total compras realizadas: "+compras;
        document.getElementById("enlace2").style.display="none";
    }
    if(construccionSeleccionada==="muro"){
        compras++;
        document.getElementById("construccion-flag").innerHTML="Total compras realizadas: "+compras;
        document.getElementById("enlace3").style.display="none";
    }
    if(construccionSeleccionada==="enchapes"){
        compras++;
        document.getElementById("construccion-flag").innerHTML="Total compras realizadas: "+compras;
        document.getElementById("enlace4").style.display="none";
    }
    if(construccionSeleccionada==="losas"){
        compras++;
        document.getElementById("construccion-flag").innerHTML="Total compras realizadas: "+compras;
        document.getElementById("enlace5").style.display="none";
    }
}

document.getElementById("caja_categoria").style.display="none";
document.getElementById("caja_productos").style.display="none";
document.getElementById("caja_carrito").style.display="none";
document.getElementById("encabezado").style.display="none";
document.getElementById("advertencia-categoria").style.display="none";
document.getElementById("feedback-positivo").style.display="none";
document.getElementById("feedback-positivo-parcial").style.display="none";
document.getElementById("feedback-negativo").style.display="none";
document.getElementById("feedback-negativo-parcial").style.display="none";

//Acciones botones
document.getElementById("btn-iniciar").onclick = function(){    
    document.getElementById("intro").style.display="none";
    document.getElementById("encabezado").style.display="flex";
    document.getElementById("caja_categoria").style.display="flex";
    document.getElementById("caja_productos").style.display="flex";
    document.getElementById("caja_carrito").style.display="flex";
}

document.getElementById("btn-retomar").onclick = function(){    
    document.getElementById("advertencia-categoria").style.display="none";
    document.getElementById("encabezado").style.display="flex";
    document.getElementById("caja_categoria").style.display="flex";
    document.getElementById("caja_productos").style.display="flex";
    document.getElementById("caja_carrito").style.display="flex";
}

document.getElementById("btn-positivo-parcial").onclick = function(){    
    document.getElementById("feedback-positivo-parcial").style.display="none";
    document.getElementById("encabezado").style.display="flex";
    document.getElementById("caja_categoria").style.display="flex";
    document.getElementById("caja_productos").style.display="flex";
    document.getElementById("caja_carrito").style.display="flex";
}

document.getElementById("btn-reiniciar").onclick = function(){    
    location.reload();
}

document.getElementById("btn-negativo-parcial").onclick = function(){    
    document.getElementById("feedback-negativo-parcial").style.display="none";
    document.getElementById("encabezado").style.display="flex";
    document.getElementById("caja_categoria").style.display="flex";
    document.getElementById("caja_productos").style.display="flex";
    document.getElementById("caja_carrito").style.display="flex";
}

document.getElementById("feedback-positivo").onclick = function(){    
    pasarEstado();
}

//Eventos para la selección de construcción
document.getElementById("enlace1").onclick = function(){
    seleccionarConstruccion("zapatas");
}

document.getElementById("enlace2").onclick = function(){
    seleccionarConstruccion("sobrecimiento");
}

document.getElementById("enlace3").onclick = function(){
    seleccionarConstruccion("muro");
}

document.getElementById("enlace4").onclick = function(){
    seleccionarConstruccion("enchapes");
}

document.getElementById("enlace5").onclick = function(){
    seleccionarConstruccion("losas");
}


//llamado de los botones de producto al carrito
document.getElementById("productoLadrillo1").onclick = function(){
    agregarAlCarrito("ladrillo1");
}
document.getElementById("productoArenaPega").onclick = function(){
    agregarAlCarrito("productoArenaPega");
}
document.getElementById("productoArenaPega").onclick = function(){
    agregarAlCarrito("productoArenaPega");
}
document.getElementById("productoAgua").onclick = function(){
    agregarAlCarrito("productoAgua");
}
document.getElementById("productoArenaRevoque").onclick = function(){
    agregarAlCarrito("productoArenaRevoque");
}
document.getElementById("productoVarillaAcero").onclick = function(){
    agregarAlCarrito("productoVarillaAcero");
}
document.getElementById("productoEstuco").onclick = function(){
    agregarAlCarrito("productoEstuco");
}
document.getElementById("productoArena").onclick = function(){
    agregarAlCarrito("productoArena");
}
document.getElementById("productoCementoGris").onclick = function(){
    agregarAlCarrito("productoCementoGris");
}
document.getElementById("productoBloqueConcreto").onclick = function(){
    agregarAlCarrito("productoBloqueConcreto");
}
document.getElementById("productoDrywall").onclick = function(){
    agregarAlCarrito("productoDrywall");
}
document.getElementById("productoPerfilAluminio").onclick = function(){
    agregarAlCarrito("productoPerfilAluminio");
}
document.getElementById("productoTriturado").onclick = function(){
    agregarAlCarrito("productoTriturado");
}
document.getElementById("productoLadrillo2").onclick = function(){
    agregarAlCarrito("productoLadrillo2");
}
document.getElementById("productoBloquesPerforacion").onclick = function(){
    agregarAlCarrito("productoBloquesPerforacion");
}
document.getElementById("productoGrouting").onclick = function(){
    agregarAlCarrito("productoGrouting");
}
document.getElementById("productoPegacor").onclick = function(){
    agregarAlCarrito("productoPegacor");
}
document.getElementById("productoCeramica").onclick = function(){
    agregarAlCarrito("productoCeramica");
}
document.getElementById("productoBoquilla").onclick = function(){
    agregarAlCarrito("productoBoquilla");
}
document.getElementById("productoVarillaMedio").onclick = function(){
    agregarAlCarrito("productoVarillaMedio");
}

document.getElementById("productoVarillaCuarto").onclick = function(){
    agregarAlCarrito("productoVarillaCuarto");
}

document.getElementById("productoVarillaTresOctavo").onclick = function(){
    agregarAlCarrito("productoVarillaTresOctavo");
}
document.getElementById("productoVarillaOnceMedio").onclick = function(){
    agregarAlCarrito("productoVarillaOnceMedio");
}
document.getElementById("productoVarillaUnaPulgada").onclick = function(){
    agregarAlCarrito("productoVarillaUnaPulgada");
}
document.getElementById("productoVarillaTresCuartos").onclick = function(){
    agregarAlCarrito("productoVarillaTresCuartos");
}
document.getElementById("productoVarillaCincoOctavo").onclick = function(){
    agregarAlCarrito("productoVarillaCincoOctavo");
}
document.getElementById("productoConcreto").onclick = function(){
    agregarAlCarrito("productoConcreto");
}
document.getElementById("productoAlambreRecocido").onclick = function(){
    agregarAlCarrito("productoAlambreRecocido");
}
document.getElementById("productoMallaElectrosoldada").onclick = function(){
    agregarAlCarrito("productoMallaElectrosoldada");
}
document.getElementById("productoVarillaAluminio").onclick = function(){
    agregarAlCarrito("productoVarillaAluminio");
}
document.getElementById("productoEstopa").onclick = function(){
    agregarAlCarrito("productoEstopa");
}

function seleccionarConstruccion(construccion) {
    construccionSeleccionada = construccion;
    console.log(construccionSeleccionada);
    carrito.length = 0; // Vaciar el carrito
    document.getElementById('carrito_label').innerHTML = ''; // Vaciar visualización del carrito
    document.getElementById('enlace-flag').innerHTML = 'Construcción de: '+construccionSeleccionada;
}

function agregarAlCarrito2(producto) {
    carrito.push(producto);
    const productoDiv = document.createElement("div");
    productoDiv.textContent = producto;

    if(producto==="ladrillo1"){
        productoDiv.textContent = "Ladrillo 15x20x40";    
    }
    if(producto==="productoArenaPega"){
        productoDiv.textContent = "Arena de pega";
    }
    if(producto==="productoAgua"){
        productoDiv.textContent = "Agua";
    }
    if(producto==="productoArenaRevoque"){
        productoDiv.textContent = "Arena de revoque";
    }
    if(producto==="productoVarillaAcero"){
        productoDiv.textContent = "Varilla de acero";
    }
    if(producto==="productoEstuco"){
        productoDiv.textContent = "Estuco";
    }
    if(producto==="productoArena"){
        productoDiv.textContent = "Arena";
    }
    if(producto==="productoCementoGris"){
        productoDiv.textContent = "Cemento gris";
    }
    if(producto==="productoBloqueConcreto"){
        productoDiv.textContent = "Bloque de concreto";
    }
    if(producto==="productoDrywall"){
        productoDiv.textContent = "Drywall";
    }
    if(producto==="productoPerfilAluminio"){
        productoDiv.textContent = "Perfil de Aluminio";
    }
    if(producto==="productoTriturado"){
        productoDiv.textContent = "Triturado";
    }
    if(producto==="productoLadrillo2"){
        productoDiv.textContent = "Ladrillo de 10x20x30 cm";
    }
    if(producto==="productoBloquesPerforacion"){
        productoDiv.textContent = "Bloques de perforación vertical";
    }
    if(producto==="productoGrouting"){
        productoDiv.textContent = "Grouting";
    }
    if(producto==="productoPegacor"){
        productoDiv.textContent = "Pegacor"; 
    }
    if(producto==="productoCeramica"){
        productoDiv.textContent = "Ceramica";
    }
    if(producto==="productoBoquilla"){
        productoDiv.textContent = "Boquilla de 5kg";
    }
    if(producto==="productoVarillaMedio"){
        productoDiv.textContent = "Varilla de ½”";
    }
    if(producto==="productoVarillaTresOctavo"){
        productoDiv.textContent = "Varilla de 3/8”";
    }
    if(producto==="productoVarillaOnceMedio"){
        productoDiv.textContent = "Varilla de 11/2”";
    }
    if(producto==="productoVarillaUnaPulgada"){
        productoDiv.textContent = "Varilla de 1”";
    }
    if(producto==="productoVarillaTresCuartos"){
        productoDiv.textContent = "Varilla de 3/4”";
    }
    if(producto==="productoVarillaCincoOctavo"){
        productoDiv.textContent = "Varilla de 5/8”";
    }
    if(producto==="productoConcreto"){
        productoDiv.textContent = "Concreto";
    }
    if(producto==="productoAlambreRecocido"){
        productoDiv.textContent = "Alambre recocido";
    }
    if(producto==="productoMallaElectrosoldada"){
        productoDiv.textContent = "Malla electrosoldada";
    }
    if(producto==="productoVarillaAluminio"){
        productoDiv.textContent = "Varilla de aluminio";
    }
    if(producto==="productoEstopa"){
        productoDiv.textContent = "Estopa";
    }
    

    // Agregar un event listener al div del producto para eliminarlo al hacer clic
    productoDiv.addEventListener('click', function() {
        // Eliminar el producto del arreglo carrito
        const index = carrito.indexOf(producto);
        if (index > -1) {
            carrito.splice(index, 1);
        }

        // Eliminar visualmente el producto del DOM
        productoDiv.remove();
    });

    // Añadir el div del producto al carrito en el DOM
    document.getElementById('carrito_label').appendChild(productoDiv);    

}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    const productoDiv = document.createElement('div');
    // Crear un nuevo elemento div para el producto
    if(producto==="ladrillo1"){
        productoDiv.textContent = "Ladrillo 15x20x40";    
    }
    if(producto==="productoArenaPega"){
        productoDiv.textContent = "Arena de pega";
    }
    if(producto==="productoAgua"){
        productoDiv.textContent = "Agua";
    }
    if(producto==="productoArenaRevoque"){
        productoDiv.textContent = "Arena de revoque";
    }
    if(producto==="productoVarillaAcero"){
        productoDiv.textContent = "Varilla de acero";
    }
    if(producto==="productoEstuco"){
        productoDiv.textContent = "Estuco";
    }
    if(producto==="productoArena"){
        productoDiv.textContent = "Arena";
    }
    if(producto==="productoCementoGris"){
        productoDiv.textContent = "Cemento gris";
    }
    if(producto==="productoBloqueConcreto"){
        productoDiv.textContent = "Bloque de concreto";
    }
    if(producto==="productoDrywall"){
        productoDiv.textContent = "Drywall";
    }
    if(producto==="productoPerfilAluminio"){
        productoDiv.textContent = "Perfil de Aluminio";
    }
    if(producto==="productoTriturado"){
        productoDiv.textContent = "Triturado";
    }
    if(producto==="productoLadrillo2"){
        productoDiv.textContent = "Ladrillo de 10x20x30 cm";
    }
    if(producto==="productoBloquesPerforacion"){
        productoDiv.textContent = "Bloques de perforación vertical";
    }
    if(producto==="productoGrouting"){
        productoDiv.textContent = "Grouting";
    }
    if(producto==="productoPegacor"){
        productoDiv.textContent = "Pegacor"; 
    }
    if(producto==="productoCeramica"){
        productoDiv.textContent = "Ceramica";
    }
    if(producto==="productoBoquilla"){
        productoDiv.textContent = "Boquilla de 5kg";
    }
    if(producto==="productoVarillaMedio"){
        productoDiv.textContent = "Varilla de ½”";
    }
    if(producto==="productoVarillaCuarto"){
        productoDiv.textContent = "Varilla de 1/4”";
    }
    if(producto==="productoVarillaTresOctavo"){
        productoDiv.textContent = "Varilla de 3/8";
    }
    if(producto==="productoVarillaOnceMedio"){
        productoDiv.textContent = "Varilla de 11/2";
    }
    if(producto==="productoVarillaUnaPulgada"){
        productoDiv.textContent = "Varilla de 1";
    }
    if(producto==="productoVarillaTresCuartos"){
        productoDiv.textContent = "Varilla de 3/4";
    }
    if(producto==="productoVarillaCincoOctavo"){
        productoDiv.textContent = "Varilla de 5/8";
    }
    if(producto==="productoConcreto"){
        productoDiv.textContent = "Concreto";
    }
    if(producto==="productoAlambreRecocido"){
        productoDiv.textContent = "Alambre recocido";
    }
    if(producto==="productoMallaElectrosoldada"){
        productoDiv.textContent = "Malla electrosoldada";
    }
    if(producto==="productoVarillaAluminio"){
        productoDiv.textContent = "Varilla de aluminio";
    }
    if(producto==="productoEstopa"){
        productoDiv.textContent = "Estopa";
    }

    

    // Agregar un event listener al div del producto para eliminarlo al hacer clic
    productoDiv.addEventListener('click', function() {
        // Eliminar el producto del arreglo carrito
        const index = carrito.indexOf(producto);
        if (index > -1) {
            carrito.splice(index, 1);
        }

        // Eliminar visualmente el producto del DOM
        productoDiv.remove();
    });

    // Añadir el div del producto al carrito en el DOM
    document.getElementById('carrito_label').appendChild(productoDiv);
}

document.getElementById("validarCarrito").onclick = function(){
    validarProductos();
}

function validarProductos() {
    if (!construccionSeleccionada) {
        //alert('Selecciona una construcción primero.');
        document.getElementById("caja_categoria").style.display="none";
        document.getElementById("caja_productos").style.display="none";
        document.getElementById("caja_carrito").style.display="none";
        document.getElementById("encabezado").style.display="none";
        document.getElementById("advertencia-categoria").style.display="flex";
        document.getElementById("feedback-positivo").style.display="none";
        document.getElementById("feedback-negativo").style.display="none";
        return;
    }

    const productosNecesarios = construcciones[construccionSeleccionada];
    const productosFaltantes = productosNecesarios.filter(p => !carrito.includes(p));
    

    if (productosFaltantes.length === 0 && carrito.length === productosNecesarios.length) {
        //alert('¡Has seleccionado todos los productos correctos!');
        document.getElementById("caja_categoria").style.display="none";
        document.getElementById("caja_productos").style.display="none";
        document.getElementById("caja_carrito").style.display="none";
        document.getElementById("encabezado").style.display="none";
        document.getElementById("feedback-negativo").style.display="none";
        verificarCompras(construccionSeleccionada);
        if(compras===5){
            document.getElementById("feedback-positivo").style.display="flex";
        }else if(compras!=5){
            document.getElementById("feedback-positivo-parcial").style.display="flex";
        }
    } else {
        //alert('Los productos no son correctos para la construcción seleccionada.');
        intentos--;
        if(intentos===0){
            document.getElementById("intentos-flag").innerHTML = "Intentos: "+intentos;
            document.getElementById("caja_categoria").style.display="none";
            document.getElementById("caja_productos").style.display="none";
            document.getElementById("caja_carrito").style.display="none";
            document.getElementById("encabezado").style.display="none";
            document.getElementById("feedback-positivo").style.display="none";
            document.getElementById("feedback-negativo").style.display="flex";
        }else{
            document.getElementById("intentos-flag").innerHTML = "Intentos: "+intentos;
            document.getElementById("caja_categoria").style.display="none";
            document.getElementById("caja_productos").style.display="none";
            document.getElementById("caja_carrito").style.display="none";
            document.getElementById("encabezado").style.display="none";
            document.getElementById("feedback-positivo").style.display="none";
            document.getElementById("feedback-negativo-parcial").style.display="flex";
        }
        
    }
}

