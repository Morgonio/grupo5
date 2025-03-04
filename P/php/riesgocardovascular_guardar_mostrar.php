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
    $sexo = $_POST["sexo"];
    $fumador = $_POST["fumador"];
    $colesterol = $_POST["colesterol"];
    $hdl = $_POST["hdl"];
    $presion = $_POST["presion"];
    $riesgo = $_POST["riesgo"];

    $sql = "INSERT INTO RiesgoCardiovascular (edad, sexo, fumador, colesterol, hdl, presion, riesgo) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isssiis", $edad, $sexo, $fumador, $colesterol, $hdl, $presion, $riesgo);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Datos guardados correctamente"]);
    } else {
        echo json_encode(["error" => "Error al guardar datos: " . $stmt->error]);
    }

    $stmt->close();
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Obtener historial
    $sql = "SELECT * FROM RiesgoCardiovascular ORDER BY fechaCalculo DESC";
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