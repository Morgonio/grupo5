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
    $dbp = $_POST["dbp"];
    $hc = $_POST["hc"];
    $ac = $_POST["ac"];
    $fl = $_POST["fl"];
    $pesoEstimado = $_POST["pesoEstimado"];

    $sql = "INSERT INTO CalculoPesoFetal (dbp, hc, ac, fl, pesoEstimado) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ddddi", $dbp, $hc, $ac, $fl, $pesoEstimado);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Datos guardados correctamente"]);
    } else {
        echo json_encode(["error" => "Error al guardar datos: " . $stmt->error]);
    }

    $stmt->close();
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Obtener historial (si es necesario)
    $sql = "SELECT * FROM CalculoPesoFetal ORDER BY fechaCalculo DESC";
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