/*PARA EL GUARDADO DE PUNTOS (Saber dentro del array de puntuaciones el indice al que pertenece la actividad*/
indicejuego = parseInt($(".ejercicioAsociar").attr("game"))-1;
var intervaloCuentaAtras;
var jugargrafico = "si";


//PARA LANZAR LA VENTANA MODAL DE LAS INSTRUCCIONES DE LA ACTIVIDAD DE GRÁFICO, ANTES DE COMENZAR LA ACTIVIDAD
$('#instruccionesAsociarGrafico').modal('show');

//CUANDO SE MUESTRA LA VENTANA MODAL PARA EL CRONÓMETRO
$('#instruccionesAsociarGrafico').on('shown.bs.modal', function(){
      //BORRO EL INTERVALO DE LA ACTIVIDAD DE GRÁFICO
      clearInterval(intervaloCuentaAtras);
      //PONGO LA CUENTA ATRÁS INICIAL QUE TENGA EL EJERCICIO
      $(".cronometrografico").html(cuentaatrasgrafico);

      //SI LOS INTENTOS QUE HA REALIZADO EL ALUMNO SON IGUALES QUE LOS INTENTOS QUE PUEDE REALIZAR
      if (intentosgrafico == gameattempts[indicejuego]){
            $("#instruccionesAsociarGrafico .modal-body").html("<p>Se han terminado tus intentos, tu puntuación máxima en esta actividad ha sido de "+Math.round(gamescores[indicejuego])+" puntos</p>");
      }
      //SI NO SE HAN TERMINADO LOS INTENTOS
      else{
            $("#instruccionesAsociarGrafico .modal-body").html("<ul class='lista'><li><span>■</span> Ubica cada elemento en su lugar correspondiente en la siguiente imagen.</li><li><span>■</span> Tienes un tiempo de "+cuentaatrasgrafico+" minutos para completar la actividad.</li><li><span>■</span> Te quedan "+(intentosgrafico-gameattempts[indicejuego])+" intento/s, se guardará la puntuación más alta que se obtenga en los intentos.</li><li><span>■</span> Si antes de que se termine el tiempo sales de la actividad, perderás un intento y no se guardará la puntuación.</li><li><span>■</span> En el momento que se cierre esta ventana modal, se contará como un intento.</li></ul>");
      }
});


//CUANDO SE CIERRA LA VENTANA MODAL EMPIEZA A CONTAR EL TIEMPO
$('#instruccionesAsociarGrafico').on('hidden.bs.modal', iniciarAsociarGrafico);
function iniciarAsociarGrafico(){

      //JUSTO EN EL MOMENTO EN EL QUE CIERRA LA VENTANA MODAL, MUESTRO EL EJERCICIO
      $("#ejercicioAsociar").css("display", "block");

      //LE AÑADO UN INTENTO EN EL ARRAY DE INTENTOS AL CERRAR LA VENTANA MODAL
      if (escormizar == "si"){

            //BORRO EL INTERVALO DE LA ACTIVIDAD DE GRÁFICO
            clearInterval(intervaloCuentaAtras);

            //SI LOS INTENTOS QUE HA REALIZADO EL ALUMNO SON IGUALES QUE LOS INTENTOS QUE PUEDE REALIZAR, MUESTRA DIRECTAMENTE LA SOLUCIÓN DEL EJERCICIO Y SE BLOQUEA
            if (intentosgrafico == gameattempts[indicejuego]){
                $(".cronometrografico").html("");
                jugargrafico ="no"; 

                for (i=0; i<$(".opciones-1 h6").length; i++){
					//coloco la respuesta correcta en la columna de la derecha
					$(".h6-hover")[i].innerHTML=$(".h6-hover")[i].parentNode.getAttribute("data-result");	
				}
				$(".resultado").remove();
				$(".opciones-2 .h6-hover").parent().append('<div class="resultado correcto">'+$checkon+'</div>');
				$(".resultado").css("display", "block");
				solucionClicada=true;
				$(".contesta-asociar").html("");
				//$(".contesta-asociar").css("display", "none");

				$(".listaAsociar h6").addClass("asignado");
				$(".listaAsociar h6").removeClass("activo");
				$(".listaAsociar .h6-hover").removeClass("asignado");
				$(".listaAsociar .h6-hover").removeClass("activo");
				//ELIMINAMOS LAS BOTONERAS INFERIORES
				$(".ejercicioAsociar.grafico .botonera").html("");
            }
            //SI NO SE HAN TERMINADO LOS INTENTOS LE SUMO UN INTENTO Y PONGO EL CRONÓMETRO EN MARCHA
            else{
                  //SUMO UN INTENTO SI TODAVIA QUEDAN INTENTOS
                  gameattempts[indicejuego] = gameattempts[indicejuego]+1;

                  /* P A R A    L A    C U E N T A    A T R Á S   D E L    C R O N O M E T R O*/
                  $(".cronometrografico").html(cuentaatrasgrafico);

                  minutosrestantesgrafico= parseInt(cuentaatrasgrafico.split(":")[0]);
                  segundosrestantesgrafico= cuentaatrasgrafico.split(":")[1];

                  if (segundosrestantesgrafico==0){
                              minutosrestantesgrafico--;
                  }

                  intervaloCuentaAtras = setInterval(function(){ 

                        segundosrestantesgrafico--;
                        stringminutosrestantesgrafico = minutosrestantesgrafico.toString();
                        stringsegundosrestantesgrafico = segundosrestantesgrafico.toString();

                        if (segundosrestantesgrafico<10){
                              stringsegundosrestantesgrafico = "0"+segundosrestantesgrafico;
                        }
                        if (minutosrestantesgrafico<10){
                              stringminutosrestantesgrafico = "0"+minutosrestantesgrafico;
                        }

                        if (segundosrestantesgrafico==-1){
                              segundosrestantesgrafico=59;
                              stringsegundosrestantesgrafico="59";
                        }

                        if (segundosrestantesgrafico==0){
                              minutosrestantesgrafico--;
                        }

                        $(".cronometrografico").html(stringminutosrestantesgrafico+":"+stringsegundosrestantesgrafico)

                        //PARO EL TIEMPO CUANDO LLEGA A CERO EL CRONOMETRO
                        if (stringminutosrestantesgrafico=="00" && stringsegundosrestantesgrafico=="00"){
                              clearInterval(intervaloCuentaAtras);

                              CorregirGraficoGamificado();

                              jugargrafico = "no";
                        }

                  }, 1000);
            }
      }
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PARA CUANDO SE HACE CLICK EN EL BOTÓN DE CORREGIR AUTOEVALUACIÓN DE ASOCIAR COLUMNAS
//////////////////////////////////////////////////////////////////////////////////////
$(".btn-corregir").on("click", sumarPuntosGrafico);
	
function sumarPuntosGrafico(){
	if ($(this).hasClass("asociar")==true){
		//Si no ha clicado el botón de solución, entra aquí
		if (solucionClicada==false){
			//Si el número de asociaciones realizadas coincide con el número de opciones podré corregir
			if (asociacionesRealizadas==$(".opciones-1 h6").length){
				CorregirGraficoGamificado();
			}
			//Sino me aparecerá el mensaje de que pinche en todas
			else{
				$(".contesta-asociar").html(pinchaTodas);
			}
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function CorregirGraficoGamificado(){
	$(".btn-solucion.asociar").attr("style", "display: none !important");
	$(".btn-corregir.asociar").attr("style", "display: none !important");
	$(".btn-reiniciar.asociar").attr("style", "display: none !important");
	$(".opciones-2 .resultado").css("display", "block");
	$(".contesta-asociar").html("");
	$(".contesta-asociar").css("display", "block");

	puntoslogrados = ($(".correcto").length * puntosgrafico) / $(".opciones-1 h6").length;

	//PARA INTRODUCIR EN EL ARRAY DE PUNTUACIÓN LOS PUNTOS LOGRADOS EN LA ACTIVIDAD
    if (escormizar == "si"){
         //SI LOS PUNTOS QUE CONSEGUÍ EN EL INTENTO SON MAYORES QUE LOS PUNTOS QUE YA TENÍA EN LOS OTROS INTENTOS, SE AÑADEN AL ARRAY DE PUNTOS
         if (puntoslogrados> gamescores[indicejuego] ){
             gamescores[indicejuego] = puntoslogrados;
         }
    }

	//SI ACIERTO TODAS LAS ASOCIACIONES ENTRA AQUÍ
	if($(".correcto").length==$(".opciones-1 h6").length){
		$(".contesta-asociar").html("¡Enhorabuena! Has acertado "+$(".correcto").length+" de "+$(".opciones-1 h6").length+" asociaciones. Tu puntuación ha sido de "+Math.round(puntoslogrados)+" puntos y tu puntuación máxima en esta actividad es de "+Math.round(gamescores[indicejuego])+" puntos.");
		$(".contesta-asociar").css("display", "block");
	}
	//SI FALLO ALGUNA DE LAS ASOCIACIONES ENTRA AQUÍ
	else{
		$(".contesta-asociar").html("Has acertado "+$(".correcto").length+" de "+$(".opciones-1 h6").length+" asociaciones. Tu puntuación ha sido de "+Math.round(puntoslogrados)+" puntos y tu puntuación máxima en esta actividad es de "+Math.round(gamescores[indicejuego])+" puntos.");
		$(".contesta-asociar").css("display", "block");
	}
	$(".cronometrografico").css("opacity", "0");

	//BORRO EL INTERVALO DE LA ACTIVIDAD DE GRÁFICO
	clearInterval(intervaloCuentaAtras);

	//MUESTRO EL BOTÓN DE REINICIAR ACTIVIDAD
	$(".btn-reiniciaractividad.asociargrafico").css("display", "block");

	jugargrafico = "no";
}