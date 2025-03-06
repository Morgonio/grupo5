-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-03-2025 a las 23:26:00
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `medicinecenter`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculocalorias`
--

CREATE TABLE `calculocalorias` (
  `id` int(11) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `altura` decimal(4,2) DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `actividad` varchar(20) DEFAULT NULL,
  `calorias` decimal(6,1) DEFAULT NULL,
  `fecha_hora` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calculocalorias`
--

INSERT INTO `calculocalorias` (`id`, `edad`, `sexo`, `altura`, `peso`, `actividad`, `calorias`, `fecha_hora`) VALUES
(1, 33, 'masculino', 1.92, 75.00, 'sedentario', 2148.0, '2025-03-03 16:53:46'),
(2, 38, 'masculino', 2.00, 90.00, 'ligero', 2701.9, '2025-03-03 16:54:43'),
(3, 48, 'femenino', 1.70, 69.00, 'muy_intenso', 2567.8, '2025-03-03 17:09:59'),
(4, 33, 'masculino', 2.00, 88.00, 'sedentario', 2364.0, '2025-03-06 11:33:49'),
(5, 33, 'masculino', 2.00, 88.00, 'sedentario', 2364.0, '2025-03-06 11:33:50'),
(6, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:25:58'),
(7, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:26:02'),
(8, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:26:03'),
(9, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:26:03'),
(10, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:26:03'),
(11, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:26:04'),
(12, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:26:04'),
(13, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:26:04'),
(14, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:26:04'),
(15, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:26:09'),
(16, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:27:15'),
(17, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:34:05'),
(18, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:35:11'),
(19, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:35:14'),
(20, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:35:58'),
(21, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:36:41'),
(22, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 15:40:13'),
(23, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 16:39:46'),
(24, 33, 'masculino', 33.00, 33.00, 'sedentario', 24954.0, '2025-03-06 16:58:08'),
(25, 66, 'masculino', 66.00, 66.00, 'sedentario', 49902.0, '2025-03-06 16:59:58'),
(26, 33, 'masculino', 33.00, 33.00, 'sedentario', 24954.0, '2025-03-06 17:20:42'),
(27, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 17:22:12'),
(28, 22, 'masculino', 22.00, 22.00, 'sedentario', 16638.0, '2025-03-06 17:25:19'),
(29, 33, 'masculino', 33.00, 33.00, 'sedentario', 24954.0, '2025-03-06 17:27:47'),
(30, 55, 'masculino', 55.00, 55.00, 'sedentario', 41586.0, '2025-03-06 17:31:34'),
(31, 99, 'masculino', 99.00, 99.00, 'sedentario', 74850.0, '2025-03-06 17:33:19'),
(32, 1, 'masculino', 1.00, 1.00, 'sedentario', 762.0, '2025-03-06 17:34:43'),
(33, 77, 'masculino', 77.00, 77.00, 'sedentario', 58218.0, '2025-03-06 17:37:34'),
(34, 1, 'masculino', 1.00, 1.00, 'sedentario', 762.0, '2025-03-06 17:38:23'),
(35, 9, 'masculino', 99.00, 99.00, 'sedentario', 75390.0, '2025-03-06 17:39:26'),
(36, 11, 'masculino', 11.00, 11.00, 'sedentario', 8322.0, '2025-03-06 17:40:11'),
(37, 111, 'masculino', 99.99, 111.00, 'sedentario', 83922.0, '2025-03-06 17:44:38'),
(38, 44, 'masculino', 44.00, 44.00, 'sedentario', 33270.0, '2025-03-06 18:13:42'),
(39, 123, 'masculino', 99.99, 123.00, 'sedentario', 92994.0, '2025-03-06 18:18:47'),
(40, 321, 'masculino', 99.99, 321.00, 'sedentario', 99999.9, '2025-03-06 18:19:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculodiasfertiles`
--

CREATE TABLE `calculodiasfertiles` (
  `id` int(11) NOT NULL,
  `fum` date NOT NULL,
  `ciclo` int(11) NOT NULL,
  `inicioFertiles` date NOT NULL,
  `finFertiles` date NOT NULL,
  `fechaCalculo` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calculodiasfertiles`
--

INSERT INTO `calculodiasfertiles` (`id`, `fum`, `ciclo`, `inicioFertiles`, `finFertiles`, `fechaCalculo`) VALUES
(1, '2023-10-20', 28, '2023-11-03', '2023-11-07', '2025-03-03 17:46:27'),
(2, '2023-11-05', 30, '2023-11-18', '2023-11-22', '2025-03-03 17:46:27'),
(3, '2025-12-27', 25, '2026-01-05', '2026-01-09', '2025-03-03 17:49:25'),
(4, '2025-01-01', 24, '2025-01-09', '2025-01-13', '2025-03-06 12:43:18'),
(5, '2025-01-01', 25, '2025-01-10', '2025-01-14', '2025-03-06 12:43:58'),
(6, '2025-01-01', 25, '2025-01-10', '2025-01-14', '2025-03-06 12:44:15'),
(7, '2025-02-27', 26, '2025-03-09', '2025-03-13', '2025-03-06 12:45:22'),
(8, '2025-01-09', 24, '2025-01-17', '2025-01-21', '2025-03-06 12:45:55'),
(9, '2025-02-12', 25, '2025-02-21', '2025-02-25', '2025-03-06 12:46:40'),
(10, '2025-02-12', 89, '2025-04-26', '2025-04-30', '2025-03-06 12:46:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculodosismedicamentos`
--

CREATE TABLE `calculodosismedicamentos` (
  `id` int(11) NOT NULL,
  `peso` decimal(10,2) NOT NULL,
  `concentracion` decimal(10,2) NOT NULL,
  `dosisRecomendada` decimal(10,2) NOT NULL,
  `dosisTotal` decimal(10,2) NOT NULL,
  `volumen` decimal(10,2) NOT NULL,
  `fecha` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calculodosismedicamentos`
--

INSERT INTO `calculodosismedicamentos` (`id`, `peso`, `concentracion`, `dosisRecomendada`, `dosisTotal`, `volumen`, `fecha`) VALUES
(1, 65.20, 25.00, 2.00, 130.40, 5.22, '2025-03-03 17:16:23'),
(2, 80.00, 100.00, 0.75, 60.00, 0.60, '2025-03-03 17:16:23'),
(3, 75.00, 90.00, 1.40, 105.00, 1.17, '2025-03-03 17:19:33'),
(4, 88.00, 88.00, 88.00, 7744.00, 88.00, '2025-03-06 12:49:48'),
(5, 11.00, 11.00, 11.00, 121.00, 11.00, '2025-03-06 12:51:02'),
(6, 22.00, 22.00, 22.00, 484.00, 22.00, '2025-03-06 12:51:59'),
(7, 55.00, 55.00, 55.00, 3025.00, 55.00, '2025-03-06 12:52:16'),
(8, 33.00, 33.00, 33.00, 1089.00, 33.00, '2025-03-06 12:53:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculograsacorporal`
--

CREATE TABLE `calculograsacorporal` (
  `id` int(11) NOT NULL,
  `edad` int(11) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `altura` decimal(3,2) NOT NULL,
  `cintura` int(11) NOT NULL,
  `cuello` int(11) NOT NULL,
  `cadera` int(11) NOT NULL,
  `porcentajeGrasa` decimal(4,2) NOT NULL,
  `fechaCalculo` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calculograsacorporal`
--

INSERT INTO `calculograsacorporal` (`id`, `edad`, `sexo`, `altura`, `cintura`, `cuello`, `cadera`, `porcentajeGrasa`, `fechaCalculo`) VALUES
(1, 30, 'masculino', 1.80, 90, 40, 0, 20.50, '2025-03-03 17:51:14'),
(2, 25, 'femenino', 1.65, 80, 35, 95, 28.75, '2025-03-03 17:51:14'),
(3, 33, 'masculino', 1.00, 90, 40, 95, 22.96, '2025-03-03 17:55:03'),
(4, 44, 'masculino', 2.00, 100, 50, 100, 21.72, '2025-03-06 13:54:53'),
(5, 22, 'masculino', 1.00, 90, 60, 70, 23.73, '2025-03-06 13:56:07'),
(6, 22, 'masculino', 1.00, 90, 60, 70, 23.73, '2025-03-06 13:56:07'),
(7, 33, 'masculino', 1.00, 90, 60, 70, 23.73, '2025-03-06 13:56:31'),
(8, 44, 'masculino', 2.00, 90, 44, 70, 18.61, '2025-03-06 13:57:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculoimc`
--

CREATE TABLE `calculoimc` (
  `id` int(11) NOT NULL,
  `genero` varchar(20) NOT NULL,
  `peso` decimal(5,2) NOT NULL,
  `altura` decimal(3,2) NOT NULL,
  `imc` decimal(4,1) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `fecha` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calculoimc`
--

INSERT INTO `calculoimc` (`id`, `genero`, `peso`, `altura`, `imc`, `categoria`, `fecha`) VALUES
(1, 'masculino', 75.00, 1.80, 23.1, 'Saludable', '2025-03-03 17:24:10'),
(2, 'femenino', 60.00, 1.65, 22.0, 'Saludable', '2025-03-03 17:24:10'),
(3, 'masculino', 75.00, 1.92, 20.3, 'Saludable', '2025-03-03 17:26:48'),
(4, 'femenino', 75.00, 1.92, 20.3, 'Saludable', '2025-03-03 17:26:59'),
(7, 'masculino', 50.00, 1.60, 19.5, 'Saludable', '2025-03-03 17:29:30'),
(8, 'masculino', 75.00, 2.00, 18.8, 'Saludable', '2025-03-06 14:02:27'),
(9, 'masculino', 76.00, 2.00, 19.0, 'Saludable', '2025-03-06 14:03:35'),
(10, 'masculino', 88.00, 2.00, 22.0, 'Saludable', '2025-03-06 14:03:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculopesofetal`
--

CREATE TABLE `calculopesofetal` (
  `id` int(11) NOT NULL,
  `dbp` decimal(5,2) NOT NULL,
  `hc` decimal(5,2) NOT NULL,
  `ac` decimal(5,2) NOT NULL,
  `fl` decimal(5,2) NOT NULL,
  `pesoEstimado` int(11) NOT NULL,
  `fechaCalculo` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calculopesofetal`
--

INSERT INTO `calculopesofetal` (`id`, `dbp`, `hc`, `ac`, `fl`, `pesoEstimado`, `fechaCalculo`) VALUES
(1, 85.00, 300.00, 280.00, 65.00, 2500, '2025-03-03 18:27:40'),
(2, 90.00, 320.00, 300.00, 70.00, 3000, '2025-03-03 18:27:40'),
(3, 88.00, 350.00, 300.00, 69.00, 7, '2025-03-03 18:52:54'),
(4, 88.00, 350.00, 300.00, 69.00, 7, '2025-03-03 18:53:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculopesofetal_pa_lf`
--

CREATE TABLE `calculopesofetal_pa_lf` (
  `id` int(11) NOT NULL,
  `pa` decimal(5,2) NOT NULL,
  `lf` decimal(5,2) NOT NULL,
  `pesoEstimado` decimal(6,2) NOT NULL,
  `fechaCalculo` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calculopesofetal_pa_lf`
--

INSERT INTO `calculopesofetal_pa_lf` (`id`, `pa`, `lf`, `pesoEstimado`, `fechaCalculo`) VALUES
(1, 280.00, 65.00, 199.00, '2025-03-03 18:55:52'),
(2, 300.00, 70.00, 218.00, '2025-03-03 18:55:52'),
(3, 300.00, 80.00, 212.00, '2025-03-03 19:00:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculopresionarterial`
--

CREATE TABLE `calculopresionarterial` (
  `id` int(11) NOT NULL,
  `sistolica` int(11) NOT NULL,
  `diastolica` int(11) NOT NULL,
  `clasificacion` varchar(50) NOT NULL,
  `fechaCalculo` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calculopresionarterial`
--

INSERT INTO `calculopresionarterial` (`id`, `sistolica`, `diastolica`, `clasificacion`, `fechaCalculo`) VALUES
(1, 120, 80, 'Hipertensión Etapa 1', '2025-03-03 18:05:31'),
(2, 110, 75, 'Normal', '2025-03-03 18:05:31'),
(3, 100, 82, '?? Hipertensi��n Etapa 1', '2025-03-03 18:08:40'),
(4, 200, 164, '? Hipertensi��n Etapa 2', '2025-03-06 14:24:13'),
(5, 150, 114, '? Hipertensi��n Etapa 2', '2025-03-06 14:26:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculoriesgodiabetes`
--

CREATE TABLE `calculoriesgodiabetes` (
  `id` int(11) NOT NULL,
  `edad` int(11) NOT NULL,
  `peso` decimal(5,2) NOT NULL,
  `altura` decimal(3,2) NOT NULL,
  `antecedentes` varchar(3) NOT NULL,
  `riesgo` int(11) NOT NULL,
  `resultado` varchar(255) NOT NULL,
  `fecha` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calculoriesgodiabetes`
--

INSERT INTO `calculoriesgodiabetes` (`id`, `edad`, `peso`, `altura`, `antecedentes`, `riesgo`, `resultado`, `fecha`) VALUES
(1, 50, 80.00, 1.75, 'si', 10, '⚠️ Alto riesgo de diabetes. Consulte a un médico.', '2025-03-03 17:40:01'),
(2, 35, 70.00, 1.70, 'no', 3, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-03 17:40:01'),
(3, 33, 75.00, 1.92, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-03 17:42:18'),
(4, 18, 69.00, 1.81, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-03 17:44:58'),
(5, 33, 88.00, 2.00, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-06 11:40:40'),
(6, 44, 99.00, 2.00, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-06 11:42:15'),
(7, 55, 111.00, 2.00, 'si', 10, '⚠️ Alto riesgo de diabetes. Consulte a un médico.', '2025-03-06 11:42:47'),
(8, 22, 70.00, 2.00, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-06 11:46:45'),
(9, 55, 55.00, 2.00, 'si', 7, '⚠️ Alto riesgo de diabetes. Consulte a un médico.', '2025-03-06 11:54:54'),
(10, 66, 1.00, 4.00, 'si', 7, '⚠️ Alto riesgo de diabetes. Consulte a un médico.', '2025-03-06 11:57:31'),
(11, 88, 65.00, 3.00, 'si', 7, '⚠️ Alto riesgo de diabetes. Consulte a un médico.', '2025-03-06 11:59:54'),
(12, 22, 22.00, 9.99, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-06 12:05:01'),
(13, 33, 33.00, 9.99, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-06 12:09:10'),
(14, 88, 88.00, 9.99, 'si', 7, '⚠️ Alto riesgo de diabetes. Consulte a un médico.', '2025-03-06 12:10:09'),
(15, 77, 77.00, 9.99, 'si', 7, '⚠️ Alto riesgo de diabetes. Consulte a un médico.', '2025-03-06 12:11:54'),
(16, 44, 44.00, 9.99, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-06 12:12:07'),
(17, 11, 11.00, 9.99, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-06 12:13:00'),
(18, 88, 88.00, 9.99, 'si', 7, '⚠️ Alto riesgo de diabetes. Consulte a un médico.', '2025-03-06 12:13:57'),
(19, 66, 66.00, 9.99, 'si', 7, '⚠️ Alto riesgo de diabetes. Consulte a un médico.', '2025-03-06 12:15:05'),
(20, 33, 33.00, 9.99, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-06 12:19:07'),
(21, 11, 11.00, 9.99, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-06 12:20:05'),
(22, 33, 11.00, 9.99, 'si', 5, '🔹 Riesgo moderado. Mantenga hábitos saludables.', '2025-03-06 12:21:32'),
(23, 55, 55.00, 9.99, 'si', 7, '⚠️ Alto riesgo de diabetes. Consulte a un médico.', '2025-03-06 12:31:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calorias`
--

CREATE TABLE `calorias` (
  `id` int(11) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `altura` decimal(4,2) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `actividad` varchar(20) DEFAULT NULL,
  `calorias` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calorias`
--

INSERT INTO `calorias` (`id`, `edad`, `sexo`, `altura`, `peso`, `actividad`, `calorias`) VALUES
(1, 33, 'masculino', 1.92, 75, 'sedentario', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caloriash`
--

CREATE TABLE `caloriash` (
  `id` int(11) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `altura` decimal(4,2) DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `actividad` varchar(20) DEFAULT NULL,
  `calorias` decimal(7,1) DEFAULT NULL,
  `fecha_calculo` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `edadgestacional`
--

CREATE TABLE `edadgestacional` (
  `id` int(11) NOT NULL,
  `fum` date NOT NULL,
  `edadGestacionalSemanas` int(11) NOT NULL,
  `fechaCalculo` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `edadgestacional`
--

INSERT INTO `edadgestacional` (`id`, `fum`, `edadGestacionalSemanas`, `fechaCalculo`) VALUES
(1, '2023-10-26', 12, '2025-03-06 13:05:42'),
(2, '2023-09-26', 16, '2025-03-06 13:05:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `riesgocardiovascular`
--

CREATE TABLE `riesgocardiovascular` (
  `id` int(11) NOT NULL,
  `edad` int(11) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `fumador` varchar(3) NOT NULL,
  `colesterol` int(11) NOT NULL,
  `hdl` int(11) NOT NULL,
  `presion` int(11) NOT NULL,
  `riesgo` varchar(255) NOT NULL,
  `fechaCalculo` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `riesgocardiovascular`
--

INSERT INTO `riesgocardiovascular` (`id`, `edad`, `sexo`, `fumador`, `colesterol`, `hdl`, `presion`, `riesgo`, `fechaCalculo`) VALUES
(1, 45, 'masculino', 'no', 180, 60, 125, 'Riesgo moderado.', '2025-03-04 10:32:53'),
(2, 60, 'femenino', 'si', 240, 40, 140, 'Alto riesgo cardiovascular. Consulta a un médico.', '2025-03-04 10:32:53'),
(3, 33, 'masculino', 'si', 200, 50, 111, 'Riesgo moderado.', '2025-03-04 10:36:39'),
(4, 33, 'masculino', 'si', 150, 12, 27, 'Riesgo moderado.', '2025-03-06 14:37:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, '123', '123@123.com', '$2y$10$qKW3rnFAGj3lovi.PRMOUeYhA/tZya64Jo.F3jPDsDMj5Zj..KL9S'),
(4, '321', '321@321.com', '$2y$10$0cipkqhGsXwraAthNVF1IuICQPNpP7FpabIaE1.4cjcBQJsuvYC.O'),
(5, 'qwe', 'qwe@qwe.com', '$2y$10$PYzJkpXDeg1Wl9XyZs4KDOeWd6VFKUVEL7n00kjevWbyydnPCQfEy'),
(6, 'tyu', 'mogon@gmail.com', '$2y$10$dwrE1Uo3mstbl/3L6hSaxeWsuOHaQWstqZM4fBxZWernWIVKA6DCa'),
(7, 'Yamil', 'gdiw@jwjd.co', '$2y$10$CM7J6y2ixKSMqO6/48NHHeNseLSbPAUZEaOwnyZtFWwrwZDtwnap6'),
(8, 'Paul', 'ajjd@wjs.com', '$2y$10$/xEZw766YiJmzY3NmIq4YOMdTFdhEgYI3.oz2KvqnO/nCKxB3aV0q'),
(9, 'Jaime', 'jaime@gmail.com', '$2y$10$ZC5KkDrRRT6IB8g6/Mnlp.uYcYsm.L6hrvzRgwMMLWzoe96xOI8pe'),
(10, 'Danira', 'rachelaldunate@gmail.com', '$2y$10$eU9JZOalI5DK44b/TaRf8.w.209rVY.4Uqign50db3e7aVvP0TB7O');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarioregistro`
--

CREATE TABLE `usuarioregistro` (
  `ID` int(11) NOT NULL,
  `IDUser` int(11) NOT NULL,
  `StrgTabla` varchar(255) NOT NULL,
  `IdHis` int(11) NOT NULL,
  `FechaRegistro` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarioregistro`
--

INSERT INTO `usuarioregistro` (`ID`, `IDUser`, `StrgTabla`, `IdHis`, `FechaRegistro`) VALUES
(1, 1, 'CalculoCalorias', 37, '2025-03-06 17:44:38'),
(2, 1, 'CalculoCalorias', 38, '2025-03-06 18:13:42'),
(3, 4, 'CalculoCalorias', 39, '2025-03-06 18:18:47'),
(4, 4, 'CalculoCalorias', 40, '2025-03-06 18:19:41');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calculocalorias`
--
ALTER TABLE `calculocalorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calculodiasfertiles`
--
ALTER TABLE `calculodiasfertiles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calculodosismedicamentos`
--
ALTER TABLE `calculodosismedicamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calculograsacorporal`
--
ALTER TABLE `calculograsacorporal`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calculoimc`
--
ALTER TABLE `calculoimc`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calculopesofetal`
--
ALTER TABLE `calculopesofetal`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calculopesofetal_pa_lf`
--
ALTER TABLE `calculopesofetal_pa_lf`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calculopresionarterial`
--
ALTER TABLE `calculopresionarterial`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calculoriesgodiabetes`
--
ALTER TABLE `calculoriesgodiabetes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calorias`
--
ALTER TABLE `calorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `caloriash`
--
ALTER TABLE `caloriash`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `edadgestacional`
--
ALTER TABLE `edadgestacional`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `riesgocardiovascular`
--
ALTER TABLE `riesgocardiovascular`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `usuarioregistro`
--
ALTER TABLE `usuarioregistro`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDUser` (`IDUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calculocalorias`
--
ALTER TABLE `calculocalorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `calculodiasfertiles`
--
ALTER TABLE `calculodiasfertiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `calculodosismedicamentos`
--
ALTER TABLE `calculodosismedicamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `calculograsacorporal`
--
ALTER TABLE `calculograsacorporal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `calculoimc`
--
ALTER TABLE `calculoimc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `calculopesofetal`
--
ALTER TABLE `calculopesofetal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `calculopesofetal_pa_lf`
--
ALTER TABLE `calculopesofetal_pa_lf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `calculopresionarterial`
--
ALTER TABLE `calculopresionarterial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `calculoriesgodiabetes`
--
ALTER TABLE `calculoriesgodiabetes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `calorias`
--
ALTER TABLE `calorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `caloriash`
--
ALTER TABLE `caloriash`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `edadgestacional`
--
ALTER TABLE `edadgestacional`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `riesgocardiovascular`
--
ALTER TABLE `riesgocardiovascular`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarioregistro`
--
ALTER TABLE `usuarioregistro`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarioregistro`
--
ALTER TABLE `usuarioregistro`
  ADD CONSTRAINT `usuarioregistro_ibfk_1` FOREIGN KEY (`IDUser`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
