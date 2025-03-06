<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "medicinecenter";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["idUser"])) {
        // Obtener detalles de un registro específico
        $idUser = $_GET["idUser"];
        $strgTabla = $_GET["strgTabla"];
        $idHis = $_GET["idHis"];

        $sql = "SELECT * FROM " . $strgTabla . " WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $idHis);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $registro = $result->fetch_assoc();
            echo json_encode($registro);
        } else {
            echo json_encode(["error" => "Registro no encontrado"]);
        }
    } else {
        // Obtener la lista de usuarios
        $sql = "SELECT DISTINCT IDUser FROM UsuarioRegistro";
        $result = $conn->query($sql);

        $usuarios = array();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $usuarios[] = $row;
            }
        }

        echo json_encode($usuarios);
    }
}

$conn->close();
?>