<?php

$nombre = $_POST["nombre"]
$correo = $_POST["correo"]
$mensaje = $_POST["mensaje"]
$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;

mail("apoloholaqase@gmail.com","Contacto", $contenido);
header("Location:index.html")


?>
