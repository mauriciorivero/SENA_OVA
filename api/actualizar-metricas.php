<?php

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);


if(isset($_GET['idcontenido'])){
    $contenido = $_GET['idcontenido'];
    actualizarVisitas($contenido);
}

if(isset($_GET['idDescarga'])){
    $idDescarga = $_GET['idDescarga'];
    echo 'El codigo del contenido a descargar es: '.$idDescarga;
    actualizarDescargas($idDescarga);
}



function actualizarVisitas(int $codigoContenido){
    try{
        include("database.php");
        $consulta = "SELECT * FROM CONTENIDO where id=$codigoContenido";
        $conn->prepare($consulta);
        $resultado = mysqli_query($conn, $consulta);
        if(mysqli_num_rows($resultado)==1){
            $consulta_actualizacion = $conn->prepare("UPDATE Contenido SET visitas = visitas + 1 WHERE id = ?");
            $consulta_actualizacion->bind_param('i', $codigoContenido);
            $consulta_actualizacion->execute();
            if ($consulta_actualizacion->affected_rows > 0) {
                abrirContenido($codigoContenido);
            } else {
                echo "Error al actualizar: " . $conn->error;
            }
    }
    }catch (mysqli_sql_exception $e){
        echo $e->__toString();
    }
}

function actualizarDescargas(int $idDescarga){
    try{
        include("database.php");
        $consulta = "SELECT * FROM CONTENIDO where id=$idDescarga";
        echo $consulta;
        $resultado = mysqli_query($conn, $consulta);
        if(mysqli_num_rows($resultado)==1){
            $consulta_actualizacion = "UPDATE Contenido
            SET descargas = descargas + 1
            WHERE id = $idDescarga";
            $resultado_actualizacion = mysqli_query($conn, $consulta_actualizacion);
                if(!$resultado_actualizacion){
                    die("actualizacion fallida");
                }else{
                    abrirDescarga($idDescarga);
                }
        } 
    }catch (mysqli_sql_exception $e){
        echo $e->__toString();
    }
    
}

function abrirContenido($codigoContenido){
    include("database.php");
    $consulta = "SELECT * FROM CONTENIDO where id=$codigoContenido";
    $resultado = mysqli_query($conn, $consulta);
    if(mysqli_num_rows($resultado)==1){
        $registro = mysqli_fetch_array($resultado);
        $rutaDescarga = $registro['url_contenido'];
        header ('Location: ../'.$rutaDescarga);    
    }
}

function abrirDescarga($codigoContenido){
    include("database.php");
    $consulta = "SELECT * FROM CONTENIDO where id=$codigoContenido";
    $resultado = mysqli_query($conn, $consulta);
    if(mysqli_num_rows($resultado)==1){
        $registro = mysqli_fetch_array($resultado);
        $rutaDescarga = $registro['url_descarga'];
        header ('Location: ../'.$rutaDescarga);    
    }
}

?>