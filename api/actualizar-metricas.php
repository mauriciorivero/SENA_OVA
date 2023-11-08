<?php

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);


if(isset($_GET['idcontenido'])){
    $contenido = $_GET['idcontenido'];
    actualizarVisitas($contenido);
}



function actualizarVisitas(int $codigoContenido){
    include("database.php");
    $consulta = "SELECT * FROM CONTENIDO where id=$codigoContenido";
    echo $consulta;
    $resultado = mysqli_query($conn, $consulta);
    if(mysqli_num_rows($resultado)==1){
        $consulta_actualizacion = "UPDATE Contenido
        SET visitas = visitas + 1
        WHERE id = $codigoContenido";
        $resultado_actualizacion = mysqli_query($conn, $consulta_actualizacion);
            if(!$resultado_actualizacion){
                die("actualizacion fallida");
            }else{
                abrirContenido($codigoContenido);
            }
    }
}

function actualizarDescargas(int $codigoContenido){

}

function abrirContenido($codigoContenido){
    include("database.php");
    $consulta = "SELECT * FROM CONTENIDO where id=$codigoContenido";
    $resultado = mysqli_query($conn, $consulta);
    if(mysqli_num_rows($resultado)==1){
        $registro = mysqli_fetch_array($resultado);
        $rutaContenido = $registro['url_contenido'];
        header ('Location: ../'.$rutaContenido);    
    }
}

?>