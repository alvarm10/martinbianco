<?php session_start();?>
<html>
	<head>
		<meta charset="UTF-8">
    <title>In4all.es</title>
    <link rel="shortcut icon" href="./img/icons/favicon.ico">
    <meta name="viewport" content="width=device-width. user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

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
    <div class="col-sm-6 myform">
 
        <h2>Login</h2>
            <form role="form" name="login" action="php/login.php" method="post">
              <div class="form-group">
                <label for="username">Nombre de usuario o email</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Nombre de usuario">
              </div>
              <div class="form-group">
                <label for="password">Contrase&ntilde;a</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Contrase&ntilde;a">
              </div>

              <button type="submit" class="btn btn-md btn-block btn-warning">Acceder</button><h3>No tienes Cuenta?</h3>
              <a href="registro.php" class="btn btn-md btn-success">Registrate!</a>
            </form>
           <br>
           <br>
           <br>
    </div>
</div>
    <!-- Latest compiled and minified JavaScript y PROPIOS-->
        <script src="http://code.jquery.com/jquery-latest.js">
        </script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <!-- Latest compiled and minified JavaScript -->
		<script src="js/valida_login.js"></script>
		
	</body>
</html>