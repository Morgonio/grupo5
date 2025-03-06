<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "medicinecenter";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT * FROM CalculoCalorias";
$result = $conn->query($sql);

$historial = array(); // Inicializamos un array para almacenar los datos

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $historial[] = $row; // Añadimos cada fila al array
    }
}

$conn->close();

header('Content-Type: application/json'); // Indicamos que la respuesta es JSON
echo json_encode($historial); // Enviamos el array como JSON
