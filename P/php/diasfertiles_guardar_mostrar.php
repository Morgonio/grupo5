<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "medicinecenter";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Guardar datos
    $fum = $_POST["fum"];
    $ciclo = $_POST["ciclo"];
    $inicioFertiles = $_POST["inicioFertiles"];
    $finFertiles = $_POST["finFertiles"];

    $sql = "INSERT INTO CalculoDiasFertiles (fum, ciclo, inicioFertiles, finFertiles) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("siss", $fum, $ciclo, $inicioFertiles, $finFertiles);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Datos guardados correctamente"]);
    } else {
        echo json_encode(["error" => "Error al guardar datos: " . $stmt->error]);
    }

    $stmt->close();
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Obtener historial
    $sql = "SELECT * FROM CalculoDiasFertiles ORDER BY fechaCalculo DESC";
    $result = $conn->query($sql);

    $historial = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $historial[] = $row;
        }
    }

    echo json_encode($historial);
}

$conn->close();
?>