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
    $username = $_POST["username"];
    $strgTabla = $_POST["strgTabla"];

    // Obtener el ID del usuario
    $sql_user = "SELECT id FROM users WHERE username = ?";
    $stmt_user = $conn->prepare($sql_user);
    $stmt_user->bind_param("s", $username);
    $stmt_user->execute();
    $result_user = $stmt_user->get_result();
    if ($result_user->num_rows > 0) {
        $row_user = $result_user->fetch_assoc();
        $id_user = $row_user["id"];

        // Obtener la última ID de la tabla StrgTabla
        $sql_his = "SELECT MAX(ID) AS last_id FROM " . $strgTabla;
        $result_his = $conn->query($sql_his);
        if ($result_his->num_rows > 0) {
            $row_his = $result_his->fetch_assoc();
            $id_his = $row_his["last_id"];

            // Insertar el registro en UsuarioRegistro
            $sql_insert = "INSERT INTO UsuarioRegistro (IDUser, StrgTabla, IdHis) VALUES (?, ?, ?)";
            $stmt_insert = $conn->prepare($sql_insert);
            $stmt_insert->bind_param("isi", $id_user, $strgTabla, $id_his);
            if ($stmt_insert->execute()) {
                echo json_encode(["message" => "Registro guardado correctamente"]);
            } else {
                echo json_encode(["error" => "Error al guardar registro: " . $stmt_insert->error]);
            }
            $stmt_insert->close();
        } else {
            echo json_encode(["error" => "No se encontraron registros en " . $strgTabla]);
        }
    } else {
        echo json_encode(["error" => "Usuario no encontrado: " . $username]);
        echo json_encode(["error" => "Usuario no encontrado: " . $strgTabla]);
    }
    $stmt_user->close();
}
//////////////////////////
if (isset($_GET["username"])) {
    $username = $_GET["username"];
    $strgTabla = "CalculoCalorias"; // Nombre de la tabla de calorías

    // Buscar el ID del usuario por su nombre de usuario
    $sql_user = "SELECT id FROM users WHERE username = ?";
    $stmt_user = $conn->prepare($sql_user);
    $stmt_user->bind_param("s", $username);
    $stmt_user->execute();
    $stmt_user->store_result();

    if ($stmt_user->num_rows > 0) {
        $stmt_user->bind_result($idUser);
        $stmt_user->fetch();
        $stmt_user->close();

        // Buscar los IdHis de la tabla UsuarioRegistro
        $sql_registros = "SELECT IdHis FROM UsuarioRegistro WHERE IDUser = ? AND StrgTabla = ?";
        $stmt_registros = $conn->prepare($sql_registros);
        $stmt_registros->bind_param("is", $idUser, $strgTabla);
        $stmt_registros->execute();
        $result_registros = $stmt_registros->get_result();

        $idHisArray = [];
        while ($row_registro = $result_registros->fetch_assoc()) {
            $idHisArray[] = $row_registro["IdHis"];
        }

        $stmt_registros->close();

        // Obtener los datos de CalculoCalorias para los IdHis encontrados
        if (!empty($idHisArray)) {
            $placeholders = implode(",", array_fill(0, count($idHisArray), "?"));
            $sql_calorias = "SELECT * FROM CalculoCalorias WHERE id IN (" . $placeholders . ") ORDER BY fecha_hora DESC";
            $stmt_calorias = $conn->prepare($sql_calorias);
            $stmt_calorias->bind_param(str_repeat("i", count($idHisArray)), ...$idHisArray);
            $stmt_calorias->execute();
            $result_calorias = $stmt_calorias->get_result();

            $historial = [];
            while ($row_calorias = $result_calorias->fetch_assoc()) {
                $historial[] = $row_calorias;
            }

            echo json_encode($historial);
            $stmt_calorias->close();
        } else {
            echo json_encode([]); // No se encontraron registros
        }
    } else {
        echo json_encode(["error" => "Usuario no encontrado: " . $username]);
    }
}

$conn->close();
?>