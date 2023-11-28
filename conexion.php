<?php

$server = "localhost";
$user = "root";
$pass = "";
$db = "shopline";

$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_error) {
    echo "No se pudo establecer la conexión: " . $conexion->connect_error;
} else {
    echo "Conexión exitosa";
}
