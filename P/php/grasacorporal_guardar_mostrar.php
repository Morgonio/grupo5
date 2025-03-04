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
    $altura = $_POST["altura"];
    $cintura = $_POST["cintura"];
    $cuello = $_POST["cuello"];
    $cadera = $_POST["cadera"];
    $porcentajeGrasa = $_POST["porcentajeGrasa"];

    $sql = "INSERT INTO CalculoGrasaCorporal (edad, sexo, altura, cintura, cuello, cadera, porcentajeGrasa) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isiiiid", $edad, $sexo, $altura, $cintura, $cuello, $cadera, $porcentajeGrasa);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Datos guardados correctamente"]);
    } else {
        echo json_encode(["error" => "Error al guardar datos: " . $stmt->error]);
    }

    $stmt->close();
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Obtener historial
    $sql = "SELECT * FROM CalculoGrasaCorporal ORDER BY fechaCalculo DESC";
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