var intervaloCuentaAtras;
var jugarcrucigrama = "si";
/*PARA QUE LAS CELDAS DEL CRUCIGRAMA SEAN CUADRADAS SIEMPRE, INCLUSO CUANDO SE HACE RESIZE Y SE ADAPTE DE FORMA RESPONSIVE*/

function celdasCrucigrama(){
	setTimeout(function(){ 
		if ($(".oyPuzzleCell table .oyCellFull")[0] != undefined){
			anchuraceldas = $(".oyPuzzleCell table .oyCellFull")[0].offsetWidth;
			//PONGO DE ALTURA DE LAS CELDAS LO QUE TENGAN DE ANCHURA PARA TENER UNA CELDA CUADRADA
			$(".oyPuzzleCell table td").css("height", anchuraceldas);
			$("#bloqueocrucigrama").css("height", $(".oyPuzzle")[0].offsetHeight + 40);
			$("#bloqueocrucigrama").css("width", $("#oygContext")[0].offsetWidth + 6);
		}
	}, 10);
}

celdasCrucigrama();
$(window).on("resize", celdasCrucigrama);

//PARA QUE FUNCIONE EL ÚLTIMO ESTADO EN EL QUE DEJE EL AUDIO, SI EN "ON" O EN "OFF".
ejecutarEstadoAudio();

/*PARA EL GUARDADO DE PUNTOS (Saber dentro del array de puntuaciones el indice al que pertenece la actividad*/
indicejuego = parseInt($("#ejercicioCrucigrama").attr("game"))-1;



//PARA LANZAR LA VENTANA MODAL DE LAS INSTRUCCIONES DE LA SOPA DE LETRAS, ANTES DE COMENZAR LA ACTIVIDAD

$('#instruccionesCrucigrama').modal('show');


//CUANDO SE MUESTRA LA VENTANA MODAL PARA EL CRONÓMETRO
$('#instruccionesCrucigrama').on('shown.bs.modal', function(){
      //BORRO EL INTERVALO DE LA SOPA DE LETRAS
      //clearInterval(intervaloCuentaAtras);
      //PONGO LA CUENTA ATRÁS INICIAL QUE TENGA EL EJERCICIO
      //$(".cronometrosopa").html(cuentaatrassopaletras);

      //SI LOS INTENTOS QUE HA REALIZADO EL ALUMNO SON IGUALES QUE LOS INTENTOS QUE PUEDE REALIZAR
      if (intentosCrucigrama == gameattempts[indicejuego]){
            $("#instruccionesCrucigrama .modal-body").html("<p>Se han terminado tus intentos, tu puntuación máxima en esta actividad ha sido de "+Math.round(gamescores[indicejuego])+" puntos</p>");
      }
      //SI NO SE HAN TERMINADO LOS INTENTOS
      else{
            $("#instruccionesCrucigrama .modal-body").html("<ul class='lista'><li><span>■</span> Lee las frases y escribe la respuesta correctamente.</li><li><span>■</span> Tienes un tiempo de "+cuentaatrascrucigrama+" minutos para completar la actividad.</li><li><span>■</span> Te quedan "+(intentosCrucigrama-gameattempts[indicejuego])+" intento/s, se guardará la puntuación más alta que se obtenga en los intentos.</li><li><span>■</span> Si antes de que se termine el tiempo sales de la actividad, perderás un intento y no se guardará la puntuación.</li><li><span>■</span> En el momento que se cierre esta ventana modal, se contará como un intento.</li><li><span>■</span> Cuando termines, haz clic en el botón de “Finalizar”.</li></ul>");
      }
});





//CUANDO SE CIERRA LA VENTANA MODAL EMPIEZA A CONTAR EL TIEMPO
$('#instruccionesCrucigrama').on('hidden.bs.modal', iniciarCrucigrama);
function iniciarCrucigrama(){

	  //JUSTO EN EL MOMENTO EN EL QUE CIERRA LA VENTANA MODAL, MUESTRO EL EJERCICIO, CON UN PEQUEÑO RETRASO PARA PODER CONTROLAR EL TAMAÑO DE LAS CELDAS DEL CRUCIGRAMA
	  setTimeout(function(){ 
	  	$("#ejercicioCrucigrama").css("display", "block");
	  	$(".contenedor-puntuacion").css("display", "block");
	  	celdasCrucigrama();
	  }, 100);

          setTimeout(function(){ 
	  	$("#ejercicioCrucigrama").css("opacity", "1");
	  }, 200);

      //LE AÑADO UN INTENTO EN EL ARRAY DE INTENTOS AL CERRAR LA VENTANA MODAL
      if (escormizar == "si"){
      		
            //BORRO EL INTERVALO DE TIEMPO DEL CRUCIGRAMA
            clearInterval(intervaloCuentaAtras);

            //SI LOS INTENTOS QUE HA REALIZADO EL ALUMNO SON IGUALES QUE LOS INTENTOS QUE PUEDE REALIZAR
            if (intentosCrucigrama == gameattempts[indicejuego]){
                  $(".cronometrocrucigrama").html("");
                  jugarcrucigrama ="no"; 
                  clearInterval(intervaloCuentaAtras);
                  $("#oygPuzzleFooter").html("");
                  $("#datos").html("");
                  setTimeout(function(){

                        $(".oyCellFocused").addClass("oyCellFull"); 
                        $(".oyCellFocused").removeClass("oyCellFocused");
                        $(".oyCellActive").addClass("oyCellFull"); 
                        $(".oyCellActive").removeClass("oyCellActive");
                        $("#bloqueocrucigrama").css("display", "block");
                        $(".oyPuzzleFooter").html("");
                  }, 100);

                  setTimeout(function(){
                        //QUITO EL FOCO DE LOS INPUT
                        $(".oyCellInput").blur();
                  }, 200);
                  
                  
            }

            //SI NO SE HAN TERMINADO LOS INTENTOS LE SUMO UN INTENTO Y PONGO EL CRONÓMETRO EN MARCHA
            else{
                  //SUMO UN INTENTO SI TODAVIA QUEDAN INTENTOS
                  gameattempts[indicejuego] = gameattempts[indicejuego]+1;

                  //P A R A    L A    C U E N T A    A T R Á S   D E L    C R O N O M E T R O
                  $(".cronometrocrucigrama").html(cuentaatrascrucigrama);

                  minutosrestantescrucigrama= parseInt(cuentaatrascrucigrama.split(":")[0]);
                  segundosrestantescrucigrama= cuentaatrascrucigrama.split(":")[1];

                  if (segundosrestantescrucigrama==0){
                              minutosrestantescrucigrama--;
                  }

                  intervaloCuentaAtras = setInterval(function(){ 

                        segundosrestantescrucigrama--;
                        stringminutosrestantescrucigrama = minutosrestantescrucigrama.toString();
                        stringsegundosrestantescrucigrama = segundosrestantescrucigrama.toString();

                        if (segundosrestantescrucigrama<10){
                              stringsegundosrestantescrucigrama = "0"+segundosrestantescrucigrama;
                        }
                        if (minutosrestantescrucigrama<10){
                              stringminutosrestantescrucigrama = "0"+minutosrestantescrucigrama;
                        }

                        if (segundosrestantescrucigrama==-1){
                              segundosrestantescrucigrama=59;
                              stringsegundosrestantescrucigrama="59";
                        }

                        if (segundosrestantescrucigrama==0){
                              minutosrestantescrucigrama--;
                        }

                        $(".cronometrocrucigrama").html(stringminutosrestantescrucigrama+":"+stringsegundosrestantescrucigrama)

                        //PARO EL TIEMPO CUANDO LLEGA A CERO EL CRONOMETRO
                        if (stringminutosrestantescrucigrama=="00" && stringsegundosrestantescrucigrama=="00"){
                              clearInterval(intervaloCuentaAtras); 
                        }
                  }, 1000);
            }
      }
}