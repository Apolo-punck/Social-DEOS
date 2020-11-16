<?php

$nombre = $_POST["nombre"]
$correo = $_POST["correo"]
$mensaje = $_POST["mensaje"]
$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;

mail("a16100653@ceti.mx","Contacto", $contenido);
header("Location:index.html")


?>
