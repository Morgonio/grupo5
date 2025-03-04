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
    $peso = $_POST["peso"];
    $concentracion = $_POST["concentracion"];
    $dosisRecomendada = $_POST["dosisRecomendada"];
    $dosisTotal = $_POST["dosisTotal"];
    $volumen = $_POST["volumen"];

    $sql = "INSERT INTO CalculoDosisMedicamentos (peso, concentracion, dosisRecomendada, dosisTotal, volumen) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ddddd", $peso, $concentracion, $dosisRecomendada, $dosisTotal, $volumen);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Datos guardados correctamente"]);
    } else {
        echo json_encode(["error" => "Error al guardar datos: " . $stmt->error]);
    }

    $stmt->close();
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Obtener historial
    $sql = "SELECT * FROM CalculoDosisMedicamentos ORDER BY fecha DESC";
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