<?php

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  $conn = mysqli_connect('localhost','USER_API_METRICS','Ov@_2023_S3nA_cdhc','API-Metrics')
  or die(mysqli_error($mysqli));

  if(isset($conn)){
    //echo "Conexion a BD establecida!";
    //print_r($conn);
  }else{
    echo "Conexion a BD no establecida!";
  }
?>