<?php
session_start();
if(!isset($_SESSION["user_id"]) || $_SESSION["user_id"]==null){
	print "<script>alert(\"Acceso invalido!\");window.location='login.php';</script>";
}

?>
<html>
	<head>
		<meta charset="UTF-8">
    <title>In4all.es</title>
    <link rel="shortcut icon" href="./img/icons/favicon.ico">
    <meta name="viewport" content="width=device-width. user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

                <!-- Latest compiled and minified CSS -->
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
       
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css?family=Exo|Kanit|Permanent+Marker|Play" rel="stylesheet">
        <!-- CDN Bootstrap & links propios -->
     
	</head>
	<body>
	<?php include "php/navbar.php"; ?>
<div class="container">
<div class="row">
<div class="col-md-6">
		<h2>Bienvenido <p><?php 
      echo $_SESSION["username"];
    ?></p></h2>
		
		<h3>Ya puedes Entrar en: </h3> 
		<ul>
            <li>
                <a href="../MyDesignBiblio/index.php">"DESIGN BIBLIO"
                </a>
            </li>
                <br>
            <li>
                <a href="../login/sb-admin/index.html">"ADMIN - IN4ALL"
                </a>
            </li>
                <br>
            <li>
                 <a
                 class="disabled" href="../login/admin.php">"Administración de usuarios registrados"
                </a>
            </li>
		</ul>

</div>
</div>
</div>

        <!-- Latest compiled and minified JavaScript y PROPIOS-->
        <script src="http://code.jquery.com/jquery-latest.js">
        </script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <!-- Latest compiled and minified JavaScript -->
	</body>
</html>