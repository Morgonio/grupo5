<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "medicinecenter";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se han enviado datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $edad = $_POST["edad"];
    $sexo = $_POST["sexo"];
    $altura = $_POST["altura"];
    $peso = $_POST["peso"];
    $actividad = $_POST["actividad"];
    $calorias = $_POST["calorias"]; // Asegúrate de enviar este valor desde el formulario

    // Preparar la consulta SQL para insertar los datos
    $sql = "INSERT INTO CalculoCalorias (edad, sexo, altura, peso, actividad, calorias) VALUES (?, ?, ?, ?, ?, ?)";

    // Preparar la declaración
    $stmt = $conn->prepare($sql);

    // Vincular parámetros
    $stmt->bind_param("isddsd", $edad, $sexo, $altura, $peso, $actividad, $calorias);

    if ($stmt->execute()) {
        echo "Datos guardados correctamente";
    } else {
        echo "Error al guardar datos: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>