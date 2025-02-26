<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "medicinecenter";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Conexión fallida: " . $conn->connect_error]));
}

// Obtener parámetros del cuerpo de la solicitud (JSON)
$data = json_decode(file_get_contents("php://input"), true);

$username = trim($data['username'] ?? '');
$password = trim($data['password'] ?? '');

// Validar que se proporcionaron todos los parámetros
if (empty($username) || empty($password)) {
    die(json_encode(["status" => "error", "message" => "Faltan parámetros: username y password son requeridos."]));
}

// Consultar al usuario en la base de datos
$stmt = $conn->prepare("SELECT id, username, password FROM users WHERE username = ?");
if (!$stmt) {
    die(json_encode(["status" => "error", "message" => "Error al preparar la consulta: " . $conn->error]));
}

$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    die(json_encode(["status" => "error", "message" => "Usuario no encontrado."]));
}

$user = $result->fetch_assoc();

// Verificar la contraseña
if (!password_verify($password, $user['password'])) {
    die(json_encode(["status" => "error", "message" => "Contraseña incorrecta."]));
}

// Inicio de sesión exitoso
echo json_encode([
    "status" => "success",
    "message" => "Inicio de sesión exitoso.",
    "username" => $user['username'] // Devolver el nombre de usuario
]);

$stmt->close();
$conn->close();
?>