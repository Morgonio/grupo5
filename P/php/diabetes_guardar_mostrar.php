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
    $edad = $_POST["edad"];
    $peso = $_POST["peso"];
    $altura = $_POST["altura"];
    $antecedentes = $_POST["antecedentes"];
    $riesgo = $_POST["riesgo"];
    $resultado = $_POST["resultado"];

    $sql = "INSERT INTO CalculoRiesgoDiabetes (edad, peso, altura, antecedentes, riesgo, resultado) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iddsis", $edad, $peso, $altura, $antecedentes, $riesgo, $resultado);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Datos guardados correctamente"]);
    } else {
        echo json_encode(["error" => "Error al guardar datos: " . $stmt->error]);
    }

    $stmt->close();
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Obtener historial
    $sql = "SELECT * FROM CalculoRiesgoDiabetes ORDER BY fecha DESC";
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