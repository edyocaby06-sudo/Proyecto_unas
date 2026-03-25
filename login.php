<?php
// Configuración de cabecera para responder en formato JSON
header("Content-Type: application/json");

// Capturamos los datos que vienen desde Postman (en formato JSON)
$json = file_get_contents('php://input');
$datos = json_decode($json, true);

// Extraemos las variables de usuario y contraseña
$usuario = $datos['usuario'] ?? '';
$password = $datos['password'] ?? '';

// Datos de prueba para la autenticación (puedes cambiarlos)
$usuarioCorrecto = "edith_nails";
$claveCorrecta = "12345";

/**
 * Lógica de Autenticación
 * Se verifica si los datos recibidos coinciden con los registrados
 */
if ($usuario === $usuarioCorrecto && $password === $claveCorrecta) {
    // Respuesta satisfactoria (Requisito de la guía)
    echo json_encode([
        "status" => "success",
        "mensaje" => "Autenticación satisfactoria. Bienvenida al sistema de citas."
    ]);
} else {
    // Respuesta de error (Requisito de la guía)
    http_response_code(401); // Código de error de autenticación
    echo json_encode([
        "status" => "error",
        "mensaje" => "Error en la autenticación. Usuario o clave incorrectos."
    ]);
}
?>