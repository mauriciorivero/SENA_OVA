<?php

// Importa la biblioteca de la base de datos
require_once "database.php";

// Define la función de conexión a la base de datos
function connect_to_database() {
  // Obtiene los datos de conexión a la base de datos
  $host = getenv("DB_HOST");
  $username = getenv("DB_USERNAME");
  $password = getenv("DB_PASSWORD");
  $database = getenv("DB_DATABASE");

  // Conecta a la base de datos
  $connection = new PDO("mysql:host=$host;dbname=$database", $username, $password);

  // Establece el modo de errores de la base de datos
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Devuelve la conexión
  return $connection;
}

// Inicializa la conexión a la base de datos
$connection = connect_to_database();

?>