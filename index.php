<?php
/*
<div class="col-4 col-12-medium">

								<!-- Box 5 -->
									<section class="box feature">
										<a href="api/actualizar-metricas.php?idcontenido=14" class="image featured" target="_self"><img src="images/pic13.png" alt="Cover construccion de acabados" /></a>
										<div class="inner">
											<header>
												<h2>OVA011 - Procesos Constructivos</h2>
												<p>TG. Construcción en Edificaciones</p>
											</header>
											<p>Objetivo virtual de aprendizaje - Versi&oacute;n 1.0 de Agosto de 2023.</p>
											<a href="scorms/OVA-11-SCORM.zip">Descarga SCORM</a>
										</div>
									</section>

							</div>
*/

	include("api/database.php");
    ini_set('display_errors',1);
    ini_set('display_startup_errors',1);
    error_reporting(E_ALL);
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>CDHC - SENA</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
	</head>
	<body class="is-preload homepage">
		<div id="page-wrapper">
			
			<!-- Header -->
				<div id="header-wrapper">
					<header id="header" class="container">
						
					</header>
			</div>

			<!-- Banner -->
				<div id="banner-wrapper">
					<div id="banner" class="box container">
						<div class="row">
							<div class="col-12 col-12-medium">
								
								<h2> <img alt="logo2" src="images/Logosimbolo-SENA.png"  width="70" height="70"> Proyecto Pedag&oacute;gico</h2>
								<p style="font-size: 18px; text-align: justify">Estudio para el desarrollo de contenidos educativos digitales dirigidos a la ejecución de la FPI en competencias técnicas del programa de formación titulada de construcción del <strong>Centro para el Desarrollo del H&aacute;bitat y la Construcci&oacute;n</strong> de la Regional Antioquia</p>
								<br>
								<p style="font-size: 18px; font-style: oblique"> <a href="https://sena.territorio.la/cms/index.php" target="_blank">Ingeso al LMS</a></p>								
								<p style="font-size: 18px; font-style: oblique"><a href="https://forms.office.com/pages/responsepage.aspx?id=gcPCyy4vk02R0VBskxas5z0n2w9-YutHjkd66iJVVxhUNjFYNVM3QUJaQTJWVFNKREpMNFM0M1lZRC4u">Encuesta de satisfacción</a></p>
							</div>
						</div>
					</div>
				</div>

			<!-- Features -->
				<div id="features-wrapper">
					<div class="container">
						<div class="row">
						<?php

							$consulta = "select * from CONTENIDO";
							$listaContenidos = mysqli_query($conn, $consulta);

							while($contenido=mysqli_fetch_array($listaContenidos)){
								echo '<div class="col-4 col-12-medium">

								<!-- Box 5 -->
									<section class="box feature">
										<a href="api/actualizar-metricas.php?idcontenido='.$contenido['id'].'" class="image featured" target="_self"><img src="'.$contenido['url_portada'].'" alt="'.$contenido['nombre'].'" /></a>
										<div class="inner">
											<header>
												<h2>'.$contenido['nombre'].'</h2>
												<p>'.$contenido['descripcion'].'</p>
											</header>
											<a href="api/actualizar-metricas.php?idDescarga='.$contenido['id'].'">Descarga SCORM</a>
											<p><strong>Total Visitas</strong>: '.$contenido['visitas'].'</p>
											<p><strong>Total Descargas</strong>: '.$contenido['descargas'].'</p>
										</div>
									</section>

							</div>';
							}

						?>
					
						</div>
					</div>
				</div>

			<div id="copyright">	
			<ul class="menu">
				<li><a href="https://forms.office.com/pages/responsepage.aspx?id=gcPCyy4vk02R0VBskxas5z0n2w9-YutHjkd66iJVVxhUNjFYNVM3QUJaQTJWVFNKREpMNFM0M1lZRC4u">Encuesta de satisfacción</a></li>
				<li>&copy; Centro para el Desarrollo del H&aacute;bitat y la Construcci&oacute;n. All rights reserved</li>
				<li>Regional Antioquia</li>
			</ul>
			</div>

			</div>

		<!-- Scripts -->

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>