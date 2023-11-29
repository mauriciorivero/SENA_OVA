-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 28-11-2023 a las 11:44:01
-- Versión del servidor: 5.7.39
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `API-Metrics`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CATEGORIA_CONTENIDO`
--

CREATE TABLE `CATEGORIA_CONTENIDO` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `centro` varchar(255) NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `departamento` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `CATEGORIA_CONTENIDO`
--

INSERT INTO `CATEGORIA_CONTENIDO` (`id`, `nombre`, `centro`, `ciudad`, `departamento`) VALUES
(1, 'Tecnologo Construcción de edificaciones', 'CDHC', 'Medellin', 'Antioquia'),
(2, 'Bilinguismo', 'CDHC', 'Medellin', 'Antioquia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CONTENIDO`
--

CREATE TABLE `CONTENIDO` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `version` varchar(45) DEFAULT NULL,
  `visitas` int(11) DEFAULT NULL,
  `descargas` int(11) DEFAULT NULL,
  `CATEGORIA_CONTENIDO_id` int(11) NOT NULL,
  `url_contenido` varchar(255) DEFAULT NULL,
  `url_descarga` varchar(255) DEFAULT NULL,
  `url_portada` varchar(255) NOT NULL DEFAULT 'images/picHUB.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `CONTENIDO`
--

INSERT INTO `CONTENIDO` (`id`, `nombre`, `descripcion`, `version`, `visitas`, `descargas`, `CATEGORIA_CONTENIDO_id`, `url_contenido`, `url_descarga`, `url_portada`) VALUES
(1, 'OVA - Portafolio de servicios', 'Versión interactiva del portafolio', 'V1', 56, 0, 1, 'Portafolio-Servicios/portafolioV03.html', 'ninguno', 'images/pic01.jpg'),
(2, 'OVA - Presentacion HUB Innovación', 'Transferencia de conocimiento', 'V1', 83, 0, 1, 'ova-hub/OVA-HUB.html', 'ninguno', 'images/picHUB.png'),
(3, 'OVA - Información del programa', 'Objetivo virtual de aprendizaje - Versión 1.0 de Julio de 2021.', 'V1', 102, 0, 1, 'Intro/InfProgramaV13.html', 'Intro/InfoPrograma.zip', 'images/pic02.png'),
(4, 'OVA01 - Cantidades de Obra y Dosificaciones', 'Objetivo virtual de aprendizaje - Versión 1.0 de Julio de 2021.', 'V1', 240, 23, 1, 'OVA1/OVA1-v9.html', 'scorms/OVA-1-SCORM.zip', 'images/pic03.png'),
(5, 'OVA02 - Herramientas', 'Objetivo virtual de aprendizaje - Versión 1.0 de Agosto de 2021.', 'V1', 242, 27, 1, 'OVA2/OVA2V002_intro.html', 'scorms/OVA-2-SCORM.zip', 'images/pic04.png'),
(6, 'OVA03 - Mampostería', 'Objetivo virtual de aprendizaje - Versión 1.0 de Septiembre de 2021.', 'V1', 318, 19, 1, 'OVA3/OVA3V005.html', 'scorms/OVA-3-SCORM.zip', 'images/pic05.png'),
(7, 'OVA04 - Estructuras', 'Objetivo virtual de aprendizaje - Versión 3.1 de Abril de 2022.', 'V1', 146, 28, 1, 'OVA4/OVA4.html', 'scorms/OVA-4-SCORM.zip', 'images/pic06.png'),
(8, 'OVA05 - Elementos Estructurales', 'Objetivo virtual de aprendizaje - Versión 3.1 de Abril de 2022.', 'V1', 262, 15, 1, 'OVA5/OVA5.html', 'scorms/OVA-5-SCORM.zip', 'images/pic07.png'),
(9, 'OVA06 - Escaleras', 'Objetivo virtual de aprendizaje - Versión 3.1 de Septiembre de 2022.', 'V1', 68, 2, 1, 'OVA6/OVA6.html', 'scorms/OVA-6-SCORM.zip', 'images/pic08.png'),
(10, 'OVA07 - Losas', 'Objetivo virtual de aprendizaje - Versión 1.0 de Octubre de 2022.', 'V1', 60, 8, 1, 'OVA7/OVA7V001.html', 'scorms/OVA-7-SCORM.zip', 'images/pic09.png'),
(11, 'OVA08 - Acabados', 'Objetivo virtual de aprendizaje - Versión 1.0 de Noviembre de 2022.', 'V1', 72, 12, 1, 'OVA8/OVA8.html', 'scorms/OVA-8-SCORM.zip', 'images/pic10.png'),
(12, 'OVA09 - Materiales Alternativos para la Construcción', 'Objetivo virtual de aprendizaje - Versión 1.0 de Diciembre de 2022.', 'V1', 15, 0, 1, 'OVA9/OVA9.html', 'scorms/OVA-9-SCORM.zip', 'images/pic11.png'),
(13, 'OVA010 - Guía de Contratación', 'Objetivo virtual de aprendizaje - Versión 1.0 de Junio de 2023.', 'V1', 20, 0, 1, 'OVA10/OVA10V001.html', 'scorms/OVA-10-SCORM.zip', 'images/pic12.png'),
(14, 'OVA011 - Procesos Constructivos', 'Objetivo virtual de aprendizaje - Versión 1.0 de Agosto de 2023.', 'V1', 13, 0, 1, 'OVA11/OVA11V001.html', 'scorms/OVA-11-SCORM.zip', 'images/pic13.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `CATEGORIA_CONTENIDO`
--
ALTER TABLE `CATEGORIA_CONTENIDO`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `CONTENIDO`
--
ALTER TABLE `CONTENIDO`
  ADD PRIMARY KEY (`id`,`CATEGORIA_CONTENIDO_id`),
  ADD KEY `fk_CONTENIDO_CATEGORIA_CONTENIDO` (`CATEGORIA_CONTENIDO_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `CATEGORIA_CONTENIDO`
--
ALTER TABLE `CATEGORIA_CONTENIDO`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `CONTENIDO`
--
ALTER TABLE `CONTENIDO`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `CONTENIDO`
--
ALTER TABLE `CONTENIDO`
  ADD CONSTRAINT `fk_CONTENIDO_CATEGORIA_CONTENIDO` FOREIGN KEY (`CATEGORIA_CONTENIDO_id`) REFERENCES `CATEGORIA_CONTENIDO` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
