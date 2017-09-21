<?php
 session_start();
if(!isset($_SESSION["user_id"]) || $_SESSION["user_id"]==null){
 print "<script>alert(\"Acceso invalido! Inicia sesion para continuar\");window.location='login.php';</script>";
}

?>