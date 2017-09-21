<?php

include "variables.php";
$connect=mysqli_connect($servername,$username,$pass,$dbname);
if ($connect) {
		echo "conexion bien realizada <br />";
		
		$telf= $_POST ['telf'];

		$consulta="INSERT into TELEFONO values ('$telf',NOW())";
		
		$resultado=mysqli_query($connect,$consulta);
		
		if ($resultado) {
			echo "Telefono almacenado. <br />";
		}
		else {
			echo "Error en la ejecución de la consulta/Inserccion. <br />";
		}
		
		if (mysqli_close($connect)){ 
			echo "Desconexion realizada. <br />";
		} 
		else {
			echo "Error en la desconexión";
		}
}

function mostrarDatos ($resultados) {
if ($resultados !=NULL) {

    echo "- telf: ".$resultados['telf']."<br/>";

echo "**********************************<br/>";
}
else {echo "<br/>No hay más datos!!! <br/>";}
}
$link = mysqli_connect($servername,$username,$pass);
mysqli_select_db($link, $dbname);


$result = mysqli_query($link, "SELECT * FROM TELEFONO");
while ($fila = mysqli_fetch_array($result)){
mostrarDatos($fila);
}
mysqli_free_result($result);
mysqli_close($link);

echo "<META HTTP-EQUIV=\"Refresh\" CONTENT=\"0;URL=http://www.in4all.es/Contacto/phone_contact.html\">";


?>