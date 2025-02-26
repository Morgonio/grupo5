<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "prueba";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Conexión fallida: " . $conn->connect_error]));
}

// Obtener parámetros del cuerpo de la solicitud (JSON)
$data = json_decode(file_get_contents("php://input"), true);

$username = trim($data['username'] ?? '');
$email = trim($data['email'] ?? '');
$password = trim($data['password'] ?? '');

// Validar que se proporcionaron todos los parámetros
if (empty($username) || empty($email) || empty($password)) {
    die(json_encode(["status" => "error", "message" => "Faltan parámetros: username, email y password son requeridos."]));
}

// Validar el formato del correo electrónico
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die(json_encode(["status" => "error", "message" => "El correo electrónico no es válido."]));
}

// Hash de la contraseña
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insertar datos en la tabla usando sentencias preparadas
$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
if (!$stmt) {
    die(json_encode(["status" => "error", "message" => "Error al preparar la consulta: " . $conn->error]));
}

$stmt->bind_param("sss", $username, $email, $hashed_password);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Registro exitoso."]);
} else {
    echo json_encode(["status" => "error", "message" => "Error al registrar: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>