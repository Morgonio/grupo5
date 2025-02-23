<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// Incluir la conexión a la base de datos
require_once "../api/db.php";
$conn = require_once "../api/db.php";

try {
    // Obtener datos del formulario
    $data = json_decode(file_get_contents("php://input"), true);
    $username = trim($data['username']); // Eliminar espacios en blanco
    $password = trim($data['password']);

    if (empty($username) || empty($password)) {
        throw new Exception("Todos los campos son obligatorios.");
    }

    // Buscar usuario en la base de datos
    $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        throw new Exception("Usuario no encontrado.");
    }

    $user = $result->fetch_assoc();
    if (!password_verify($password, $user['password'])) {
        throw new Exception("Contraseña incorrecta.");
    }

    // Inicio de sesión exitoso
    session_start();
    $_SESSION['user_id'] = $user['id'];
    echo json_encode(["status" => "success", "message" => "Inicio de sesión exitoso."]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}

$stmt->close();
$conn->close();
?>