<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// Habilitar errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Incluir la conexión a la base de datos
require_once "db.php";
$conn = require_once "db.php";

if (!$conn) {
    die(json_encode(["status" => "error", "message" => "Error al conectar con la base de datos."]));
}

try {
    // Obtener datos del formulario
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data || !isset($data['username']) || !isset($data['email']) || !isset($data['password'])) {
        throw new Exception("Datos incompletos o incorrectos.");
    }

    $username = trim($data['username']);
    $email = trim($data['email']);
    $password = trim($data['password']);

    if (empty($username) || empty($email) || empty($password)) {
        throw new Exception("Todos los campos son obligatorios.");
    }

    // Validar el formato del correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception("El correo electrónico no es válido.");
    }

    // Encriptar contraseña
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Verificar si el usuario o correo ya existen
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
    if (!$stmt) {
        throw new Exception("Error al preparar la consulta: " . $conn->error);
    }

    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        throw new Exception("El usuario o correo ya están registrados.");
    }

    // Insertar nuevo usuario
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    if (!$stmt) {
        throw new Exception("Error al preparar la consulta: " . $conn->error);
    }

    $stmt->bind_param("sss", $username, $email, $hashed_password);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Registro exitoso."]);
    } else {
        throw new Exception("Error al registrar: " . $stmt->error);
    }
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}

if (isset($stmt) && is_object($stmt)) {
    $stmt->close();
}
$conn->close();
?>