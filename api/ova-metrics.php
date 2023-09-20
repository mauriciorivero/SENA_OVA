<?php

// Importa las bibliotecas necesarias
require_once "database.php";
require_once "utils.php";

// Define el recurso "/visits"
function visits() {
  // Obtiene el ID del contenido
  $content_id = $_GET["content_id"];

  // Obtiene el contenido
  $content = get_content($content_id);

  // Incrementa el recuento de visitas
  $content->visits++;
  update_content($content);

  // Devuelve el recuento de visitas
  return $content->visits;
}

// Define el recurso "/downloads"
function downloads() {
  // Obtiene el ID del contenido
  $content_id = $_GET["content_id"];

  // Obtiene el contenido
  $content = get_content($content_id);

  // Incrementa el recuento de descargas
  $content->downloads++;
  update_content($content);

  // Devuelve el recuento de descargas
  return $content->downloads;
}

// Define el recurso "/visits/all"
function visits_all() {
  // Obtiene todos los contenidos
  $contents = get_contents();

  // Obtiene el recuento de visitas para cada contenido
  $visits = [];
  foreach ($contents as $content) {
    $visits[$content->id] = [
      "visits" => visits($content->id),
      "downloads" => downloads($content->id)
    ];
  }

  // Devuelve el recuento de visitas para todos los contenidos
  return $visits;
}

// Inicializa la API
$router = new Router();
$router->get("/visits/:content_id", visits);
$router->get("/downloads/:content_id", downloads);
$router->get("/visits/all", visits_all);

// Procesa la solicitud
$router->run();

?>