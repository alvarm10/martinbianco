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
        <header>
            <?php include "php/navbar.php"; ?>
        </header>
        <div class="container">
    <?php
         include "variables.php";
  try {
    $dbh = new PDO("mysql:host=$servername;dbname=$dbname", $username, $pass);

    $sql = $dbh->prepare("SELECT * FROM user ORDER BY `id` ASC");

    if($sql->execute()) {
       $sql->setFetchMode(PDO::FETCH_ASSOC);
    }
  }
  catch(Exception $error) {
      echo '<p>', $error->getMessage(), '</p>';
  }

?>
	</head>
	<body>
	<?php include "php/navbar.php"; ?>
<div class="container">
<div class="row">
<div class="col-md-12">
		<h2>Administración de usuarios registrados</h2>
     <form action="" method="post">
    <div class="table-responsive">
  <table class="table table-striped">
   
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Usuario</th>
        <th>Email</th>
        <th>Fecha</th>
      </tr>
    </thead>
    
    <tbody>
     <?php while($row = $sql->fetch()) { ?>
      <tr>
       <td><input name="checkbox[]" type="checkbox" value="<?php echo $row['id']; ?>"></td>
        <td><?php echo $row['fullname']; ?></td>
        <td><?php echo $row['username']; ?></td>
        <td><?php echo $row['email']; ?></td>
        <td><?php echo $row['created_at']; ?></td>
      </tr>
      <?php } ?>
    </tbody>
  </table>
    </div>
    <input type="submit" name="delete" class="btn btn-danger" value="Eliminar">&nbsp;
    <button class="btn btn-success">Editar</button>
    
    </form> 
   

</div>
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