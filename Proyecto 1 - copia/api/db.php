<?php
$servername = "localhost"; // Servidor local
$username = "root";        // Usuario predeterminado de XAMPP
$password = "";            // Contraseña predeterminada de XAMPP (vacía)
$dbname = "medicinecenter"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Error de conexión: " . $conn->connect_error]));
}

// Establecer el conjunto de caracteres a UTF-8
$conn->set_charset("utf8");

// Exportar la conexión para usarla en otros archivos
return $conn;
?>