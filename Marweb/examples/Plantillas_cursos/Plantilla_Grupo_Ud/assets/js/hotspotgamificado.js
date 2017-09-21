
var jugarhotspot = "si";

//INTRODUZCO EL TEXTO DE CORREGIR EN EL BOTÓN DE CORREGIR
$(".btn-corregir").html(btnCorregir);

/*PARA EL GUARDADO DE PUNTOS (Saber dentro del array de puntuaciones el indice al que pertenece la actividad*/
indicejuego = parseInt($(".ejercicioHotspot").attr("game"))-1;

/* 
** E J E R C I C I O     H O T S P O T
============================================================================= */
//============================================================================= */

if ($(".ejercicioHotspot").length == 1){
   $(".ejercicioHotspot").append("<div class='clearfix'></div>")
   var hsMarcarDesactivado;                                 //Variable para desactivar el marcado cuando se pulsa en el ícono de feedback
   var mapaactivos = 0;                                  //variable que va a contar cuantas áreas se han clicado 
   $("#"+hsIconos[0]).attr("class", "hs-icono-correcto");               //Agrega a la primera capa con icono de correcto la clase que controla los iconos de correcto
   $("#"+hsIconos[1]).attr("class", "hs-icono-incorrecto");          //Agrega a la primera capa con icono de incorrecto la clase que controla los iconos de incorrecto 
   $("#"+hsIconos[2]).attr("class", "hs-icono-feedback");               //Agrega a la primera capa con icono de feedback la clase que controla los iconos de feedback
   $("#"+hsIconos[2]).attr("data-toggle", "modal");                  //Agrega a la primera capa con icono de feedback un atributo para abrir el modal
   $("#"+hsIconos[2]).attr("data-target", "#feedback");              //Agrega a la primera capa con icono de feedback un atributo para abiri el modal
   $("[data-name="+hsIconos[0]+"]").attr("class", "hs-icono-correcto"); //Agrega a las demás capas con icono de correcto la clase que controla los iconos de correcto en el caso que se haya exportado como svg         
   $("[data-name="+hsIconos[1]+"]").attr("class", "hs-icono-incorrecto");  //Agrega a las demás capas con icono de incorrecto la clase que controla los iconos de incorrecto en el caso que se haya exportado como svg  
   $("[data-name="+hsIconos[2]+"]").attr("class", "hs-icono-feedback");    //Agrega a las demás capas con icono de feedback la clase que controla los iconos de feedback en el caso que se haya exportado como svg   
   $("[data-name="+hsIconos[2]+"]").attr("data-toggle", "modal");       //Agrega a las demás capas con icono de feedback un atributo para abrir el modal
   $("[data-name="+hsIconos[2]+"]").attr("data-target", "#feedback");      //Agrega a las demás capas con icono de feedback un atributo para abrir el modal
   for (var i = 0; i < 100; i++) {                                //Agrega las clases que controlan los íconos en el caso de que se haya guardado como svg en vez de exportar.
      $("#"+hsIconos[0]+"-"+i).attr("class", "hs-icono-correcto");
      $("#"+hsIconos[1]+"-"+i).attr("class", "hs-icono-incorrecto");
      $("#"+hsIconos[2]+"-"+i).attr("class", "hs-icono-feedback"); 
      $("#"+hsIconos[2]+"-"+i).attr("data-toggle", "modal");
      $("#"+hsIconos[2]+"-"+i).attr("data-target", "#feedback");
   }     
   $(".hs-icono-correcto").css("display", "none");                //Oculta los iconos de correcto
   $(".hs-icono-incorrecto").css("display", "none");              //Oculta los iconos de incorrecto
   $(".hs-icono-feedback").css("display", "none");                //Oculta los iconos de feedback
   $(".hotspot-solucion").css("display", "none");                 //Oculta el botón de solución
   
   function hsMarcarArea(){ 
         for (var i = 0; i < areasClicables.length; i++) {
            $(areasClicables[i].id)[0].classList.add("areaclicable");            //Agrega opacidad a las áreas clicable
            $(areasClicables[i].id).click(function(){                      //Al hacer click en un area clicable
               if (hsMarcarDesactivado != true) {                          //Si no se ha desactivado el marcado
                  if ($(this)[0].classList.contains("area-active")== false) { //Si el área clicada es inactiva
                        if (jugarhotspot == "si"){
                           $(this)[0].classList.add("area-active");        //Marca el área como activa
                           mapaactivos = mapaactivos + 1;                  //Cuenta que se ha activado un área
                           $(".hs-icono-correcto").css("display", "none");    //Oculta los iconos de correcto  
                           $(".hs-icono-incorrecto").css("display", "none");  //Oculta los iconos de incorrecto
                           $(".hs-icono-feedback").css("display", "none");    //Oculta los iconos de feedback
                           $(".contesta-hotspot").html("");             //Oculta el feedback general
                           $(".hotspot-solucion").css("display", "none")      //Oculta el botón de solución
                        }     
                  }              
                     else if ($(this)[0].classList.contains("area-active")== true) {   //Si el área clicada es activa (para desmarcar un area)
                        if (jugarhotspot == "si"){
                           $(this)[0].classList.remove("area-active");           //Marca el área como inactiva
                           mapaactivos = mapaactivos - 1;                     //Cuenta que se ha desactivado un área
                           $(".hs-icono-correcto").css("display", "none");       //Oculta los iconos de correcta
                           $(".hs-icono-incorrecto").css("display", "none");     //Oculta los iconos de incorrecta
                           $(".hs-icono-feedback").css("display", "none");       //Oculta los iconos de feedback
                           $(".contesta-hotspot").html("");                //Oculta el feedback general
                           $(".hotspot-solucion").css("display", "none")         //Oculta el botón de solución
                        }
                     }
                  }  
            });         
         }    
   }
   
   //Desactiva el marcada cuando se esta sobre un icono de feedback
   $(".hs-icono-feedback").mouseenter(function(){
        hsMarcarDesactivado = true;
   });
   //Reactiva el marcado cuando se abandona un icono de feedback
   $(".hs-icono-feedback").mouseleave(function(){
        hsMarcarDesactivado = false;        
   });

   hsMarcarArea();
   mostrarFeedback();

 

   $(".hotspot-check").click(function(){                       //Al clicar en el botón corregir
      var mapacorrectas = areasCorrectas.length;               //Variable que cuenta cuantas respuestas correctas falta seleccionar
      
         
                               //Si las áreas activas son tantas como las correctas
      $(".hotspot-solucion").css("display", "block");       //Muestra el botón solución
      for (var i = 0; i < areasClicables.length; i++) {  //Muestra los íconos de respuesta correcta o incorrecta 
         if ($(areasClicables[i].id)[0].classList.contains("area-active")) { //si están activos
            $(areasClicables[i].id).find(".hs-icono-correcto").css("display", "block");   //Muiesta los iconos de correcto
            $(areasClicables[i].id).find(".hs-icono-incorrecto").css("display", "block"); //Muesta los iconos de incorrecto
            $(areasClicables[i].id).find(".hs-icono-feedback").css("display", "block");      //Muestra los iconos de feedback
                              
         }
      }
      ocultarFeedback();                              //Oculta los iconos de feedback en el caso de que se hayan dejado vacíos
      for (var i = 0; i < areasCorrectas.length; i++) {
         if ($(areasCorrectas[i])[0].classList.contains("area-active")) {  
            mapacorrectas = mapacorrectas - 1;        //Cuenta cuantas respuestas correctas falta seleccionar
         }
      }

      //SI NO HAY NINGUN ELEMENTO ACTIVO ENTRA AQUÍ Y NO CORRIGE
      if (mapaactivos == 0){
         $(".contesta-hotspot").html("Selecciona alguna opción para corregir el ejercicio.")
      }
      //SI HAY ALGUN ELEMENTO ACTIVO CORRIGE EL EJERCICIO
      else{
         //BORRO EL INTERVALO DEL HOTSPOT
         clearInterval(intervaloCuentaAtras);
         //PONGO LA CUENTA ATRÁS INICIAL QUE TENGA EL EJERCICIO
         $(".cronometrohotspot").css("opacity", "0");
         corregirHotspot();
      }
   });
}

function hotspotSolucion(){
   $(".hs-icono-incorrecto").css("display", "none");        //Oculta los íconos de respuesta incorrecta
   $(".hs-icono-feedback").css("display", "none");          //Oculta los íconos de feedback
   $(".contesta-hotspot").html("");                         //Feedback positivo
   for (var i = 0; i < areasClicables.length; i++) {
      $(areasClicables[i].id)[0].classList.remove("area-active")        //Pone todas las áreas inactivas
   }
   for (var i = 0; i < areasCorrectas.length; i++) {
      $(areasCorrectas[i])[0].classList.add("area-active")        //Activa las áreas correctas
      $(areasCorrectas[i]).find(".hs-icono-correcto").css("display", "block");   //Muestra los íconos de respuesta correcta
      $(areasCorrectas[i]).find(".hs-icono-feedback").css("display", "block");   //Muestra los íconos de feedback
      ocultarFeedback();                              //Oculta los iconos de feedback en el caso de que se hayan dejado vacíos
      mapaactivos = areasCorrectas.length;               //Cuenta las áreas que se han activado
   }
}


//============================================================================= */
//============================================================================= */


//MOSTRAR EL FEEDBACK DE LAS RESPUESTAS CORRECTAS E INCORRECTAS
function mostrarFeedback(){
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////
   //PARA LA AUTOEVALUACIÓN HOTSPOT
   //////////////////////////////////////////////////////////////////////////////////////
   if ($(".ejercicioHotspot").length==1){
      $(".hs-icono-feedback").click(function(){                      
         for (var i = 0; i < areasClicables.length; i++) {              
            if (areasClicables[i].id == "#"+$(this).parent().attr("id")) { 
               $('#feedback>div>div>div.modal-body>p').html(areasClicables[i].feedback);
            }
         }     
      });   
   }
}


//PARA OCULTAR EL FEEDBACK SI NO EXISTE EN ESA PREGUNTA
function ocultarFeedback(){
   //PARA LA AUTOEVALUACIÓN HOTSPOT
      //////////////////////////////////////////////////////////////////////////////////////
      if ($(".ejercicioHotspot").length==1){
         for(i=0; i<areasClicables.length; i++){
            if(areasClicables[i].feedback==""){
               $(areasClicables[i].id).find(".hs-icono-feedback").css("display", "none");
            }
         }
      }
}

//ESTA FUNCIÓN ELIMINA EL CURSOR DE PUNTERO UNA VEZ QUE SE HA CORREGIDO LA ACTIVIDAD
function eliminarCursor(){
   $(".ejercicioHotspot .contenedor-hotspot svg .areaclicable path").css("cursor", "default");
   $(".ejercicioHotspot .contenedor-hotspot svg .areaclicable rect").css("cursor", "default");
   $(".ejercicioHotspot .contenedor-hotspot svg .areaclicable circle").css("cursor", "default");
   $(".ejercicioHotspot .contenedor-hotspot svg .areaclicable line").css("cursor", "default");
   $(".ejercicioHotspot .contenedor-hotspot svg .areaclicable ellipse").css("cursor", "default");
   $(".ejercicioHotspot .contenedor-hotspot svg .areaclicable polygon").css("cursor", "default");
   $(".ejercicioHotspot .contenedor-hotspot svg .areaclicable polyline").css("cursor", "default");
   $(".hs-icono-feedback>path").css("cursor", "pointer");
}


function corregirHotspot(){
   var mapacorrectas = areasCorrectas.length;               //Variable que cuenta cuantas respuestas
   /////////////////////////////
   numAreasClicables = $(".areaclicable").length;
   numAreasCorrectas = areasCorrectas.length;
   numAreasIncorrectas = $(".areaclicable").length - areasCorrectas.length;
   jugarhotspot = "no";
   numeroFallos = 0;
   numeroAciertos = 0;

   //COMPRUEBO EL NÚMERO DE ACIERTOS
   for(i=0; i<$(".hs-icono-correcto").length; i++){
      if($(".hs-icono-correcto")[i].style.display == "block"){
         numeroAciertos += 1;
      }
   }

   //COMPRUEBO EL NÚMERO DE FALLOS
   for(i=0; i<$(".hs-icono-incorrecto").length; i++){
      if($(".hs-icono-incorrecto")[i].style.display == "block"){
         numeroFallos += 1;
      }
   }
   

   puntoshotspotsuma = puntoshotspot/numAreasCorrectas;
   puntoshotspotresta = puntoshotspot/numAreasIncorrectas;
   puntosFinales = (puntoshotspotsuma*numeroAciertos)-(puntoshotspotresta*numeroFallos);
   if (puntosFinales < 0){
      puntosFinales = 0;
   }


   for (var i = 0; i < areasCorrectas.length; i++) {
      if ($(areasCorrectas[i])[0].classList.contains("area-active")) {  
         mapacorrectas = mapacorrectas - 1;        //Cuenta cuantas respuestas correctas falta seleccionar
      }
   }

   eliminarCursor();
   
   //PARA INTRODUCIR EN EL ARRAY DE PUNTUACIÓN LOS PUNTOS LOGRADOS EN LA ACTIVIDAD
   if (escormizar == "si"){
        //SI LOS PUNTOS QUE CONSEGUÍ EN EL INTENTO SON MAYORES QUE LOS PUNTOS QUE YA TENÍA EN LOS OTROS INTENTOS, SE AÑADEN AL ARRAY DE PUNTOS
        if (puntosFinales > gamescores[indicejuego] ){
            gamescores[indicejuego] = puntosFinales;
            //sumarPuntosActividades();
        }
   }
   /////////////////////////////////////////////////////////////////////////////////

   //SI ACIERTA TODAS Y NO FALLA NINGUNA ENTRA AQUÍ
   if (numeroAciertos == numAreasCorrectas && numeroFallos == 0){
      $(".contesta-hotspot").html("¡Enhorabuena! Has acertado "+numeroAciertos+" elemento/s de un total de "+numAreasClicables+" áreas clicables. Tu puntuación ha sido de "+puntosFinales+" puntos, tu puntuación máxima en esta actividad es de "+Math.round(gamescores[indicejuego])+" puntos."); 
   }
   //SI TIENE ALGUN FALLO O NO ACIERTA TODAS ENTRA AQUÍ
   else{
      $(".contesta-hotspot").html("Has acertado "+numeroAciertos+" elemento/s y has fallado "+numeroFallos+" elemento/s de un total de "+numAreasClicables+" áreas clicables. Tu puntuación ha sido de "+Math.round(puntosFinales)+" puntos, tu puntuación máxima en esta actividad es de "+Math.round(gamescores[indicejuego])+" puntos."); 
   }
   

   //MUESTRO EL BOTÓN DE REINICIAR ACTIVIDAD
   $(".hotspot-reiniciar").css("display", "block");
   //OCULTO EL BOTÓN DE CORREGIR
   $(".hotspot-check").css("display", "none");
}





var intervaloCuentaAtras;
//PARA LANZAR LA VENTANA MODAL DE LAS INSTRUCCIONES DE LA SOPA DE LETRAS, ANTES DE COMENZAR LA ACTIVIDAD
$('#instruccionesHotspot').modal('show');

//CUANDO SE MUESTRA LA VENTANA MODAL PARA EL CRONÓMETRO
$('#instruccionesHotspot').on('shown.bs.modal', function(){
      //BORRO EL INTERVALO DE LA SOPA DE LETRAS
      clearInterval(intervaloCuentaAtras);
      //PONGO LA CUENTA ATRÁS INICIAL QUE TENGA EL EJERCICIO
      $(".cronometrohotspot").html(cuentaatrashotspot);

      //SI LOS INTENTOS QUE HA REALIZADO EL ALUMNO SON IGUALES QUE LOS INTENTOS QUE PUEDE REALIZAR
      if (intentoshotspot == gameattempts[indicejuego]){
            $("#instruccionesHotspot .modal-body").html("<p>Se han terminado tus intentos, tu puntuación máxima en esta actividad ha sido de "+Math.round(gamescores[indicejuego])+" puntos</p>");
      }
      //SI NO SE HAN TERMINADO LOS INTENTOS
      else{
            $("#instruccionesHotspot .modal-body").html("<ul class='lista'><li><span>■</span> Selecciona los elementos correctos y pulsa el botón de corregir.</li><li><span>■</span> Tienes un tiempo de "+cuentaatrashotspot+" minutos para completar la actividad.</li><li><span>■</span> Te quedan "+(intentoshotspot-gameattempts[indicejuego])+" intento/s, se guardará la puntuación más alta que se obtenga en los intentos.</li><li><span>■</span> Si antes de que se termine el tiempo sales de la actividad, perderás un intento y no se guardará la puntuación.</li><li><span>■</span> En el momento que se cierre esta ventana modal, se contará como un intento.</li></ul>");
      }
});

//CUANDO SE CIERRA LA VENTANA MODAL EMPIEZA A CONTAR EL TIEMPO
$('#instruccionesHotspot').on('hidden.bs.modal', iniciarHotspot);
function iniciarHotspot(){

      //JUSTO EN EL MOMENTO EN EL QUE CIERRA LA VENTANA MODAL, MUESTRO EL EJERCICIO
      $(".ejercicioHotspot").css("display", "block");

      //LE AÑADO UN INTENTO EN EL ARRAY DE INTENTOS AL CERRAR LA VENTANA MODAL
      if (escormizar == "si"){

            //BORRO EL INTERVALO DE LA SOPA DE LETRAS
            clearInterval(intervaloCuentaAtras);

            //SI LOS INTENTOS QUE HA REALIZADO EL ALUMNO SON IGUALES QUE LOS INTENTOS QUE PUEDE REALIZAR
            if (intentoshotspot == gameattempts[indicejuego]){
                  hotspotSolucion();
                  eliminarCursor();
                  $(".cronometrohotspot").html("");
                  jugarhotspot ="no"; 
                  $(".btn-corregir").css("display", "none");
            }
            //SI NO SE HAN TERMINADO LOS INTENTOS LE SUMO UN INTENTO Y PONGO EL CRONÓMETRO EN MARCHA
            else{
                  //SUMO UN INTENTO SI TODAVIA QUEDAN INTENTOS
                  gameattempts[indicejuego] = gameattempts[indicejuego]+1;

                  /* P A R A    L A    C U E N T A    A T R Á S   D E L    C R O N O M E T R O*/
                  $(".cronometrohotspot").html(cuentaatrashotspot);

                  minutosrestanteshotspot= parseInt(cuentaatrashotspot.split(":")[0]);
                  segundosrestanteshotspot= cuentaatrashotspot.split(":")[1];

                  if (segundosrestanteshotspot==0){
                              minutosrestanteshotspot--;
                  }

                  intervaloCuentaAtras = setInterval(function(){ 

                        segundosrestanteshotspot--;
                        stringminutosrestanteshotspot = minutosrestanteshotspot.toString();
                        stringsegundosrestanteshotspot = segundosrestanteshotspot.toString();

                        if (segundosrestanteshotspot<10){
                              stringsegundosrestanteshotspot = "0"+segundosrestanteshotspot;
                        }
                        if (minutosrestanteshotspot<10){
                              stringminutosrestanteshotspot = "0"+minutosrestanteshotspot;
                        }

                        if (segundosrestanteshotspot==-1){
                              segundosrestanteshotspot=59;
                              stringsegundosrestanteshotspot="59";
                        }

                        if (segundosrestanteshotspot==0){
                              minutosrestanteshotspot--;
                        }

                        $(".cronometrohotspot").html(stringminutosrestanteshotspot+":"+stringsegundosrestanteshotspot)

                        //PARO EL TIEMPO CUANDO LLEGA A CERO EL CRONOMETRO
                        if (stringminutosrestanteshotspot=="00" && stringsegundosrestanteshotspot=="00"){
                              clearInterval(intervaloCuentaAtras);
                              $(".cronometrohotspot").css("opacity", "0");
                              
                              var mapacorrectas = areasCorrectas.length;               //Variable que cuenta cuantas respuestas correctas falta seleccionar
                               //Si las áreas activas son tantas como las correctas
                              $(".hotspot-solucion").css("display", "block");       //Muestra el botón solución
                              for (var i = 0; i < areasClicables.length; i++) {  //Muestra los íconos de respuesta correcta o incorrecta 
                                 if ($(areasClicables[i].id)[0].classList.contains("area-active")) { //si están activos
                                    $(areasClicables[i].id).find(".hs-icono-correcto").css("display", "block");   //Muiesta los iconos de correcto
                                    $(areasClicables[i].id).find(".hs-icono-incorrecto").css("display", "block"); //Muesta los iconos de incorrecto
                                    $(areasClicables[i].id).find(".hs-icono-feedback").css("display", "block");      //Muestra los iconos de feedback
                                                      
                                 }
                              }
                              ocultarFeedback();                              //Oculta los iconos de feedback en el caso de que se hayan dejado vacíos
                              for (var i = 0; i < areasCorrectas.length; i++) {
                                 if ($(areasCorrectas[i])[0].classList.contains("area-active")) {  
                                    mapacorrectas = mapacorrectas - 1;        //Cuenta cuantas respuestas correctas falta seleccionar
                                 }
                              }

                              corregirHotspot();
                              
                        }

                  }, 1000);
            }
      }
}