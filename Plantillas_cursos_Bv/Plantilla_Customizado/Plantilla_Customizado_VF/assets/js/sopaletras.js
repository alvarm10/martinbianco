//INICIALIZO VARIABLES

var jugarsopaletras = "si";
var toques = 0;
var acierto = "no";
var stringpalabra="";
var stringpalabrareves="";
var puntoslogrados=0;
var arrayiniciofin = [];
var arraypalabra=[];
var dataids=[];
var puntosacierto=puntossopaletras/arraypalabras.length;


//PARA QUE FUNCIONE EL ÚLTIMO ESTADO EN EL QUE DEJE EL AUDIO, SI EN "ON" O EN "OFF".
ejecutarEstadoAudio();

/*PARA EL GUARDADO DE PUNTOS (Saber dentro del array de puntuaciones el indice al que pertenece la actividad*/
indicejuego = parseInt($("#ejercicioSopaLetras").attr("game"))-1;

$("#contenedor-sopaletras").append("<div class='clearfix'></div>");
$("#contenedor-sopaletras .contenedor-puntuacion").after("<div class='clearfix'></div>");
$(".contenedorenunciadosopaletras").after("<div class='clearfix'></div>");


$(".enunciadosopaletras span").html("haz clic en el inicio de la palabra y después en el fin para marcar una palabra. Tienes un tiempo de "+cuentaatrassopaletras+ " minutos.")
for (i=0; i<arraypalabras.length; i++){
      $(".listasopaletras").append('<li>■ '+arraypalabras[i]+'</li>')
}
$(".contenedorenunciadosopaletras").append("<div class='clearfix'></div>");


//FUNCIÓN PARA POSICIONAR LAS LETRAS EN EL CENTRO DE SU CUADRADO CORRESPONDIENTE
function centrarLetras(){
      for (i=0; i<$("#contenedor-sopaletras .square").length; i++){
            $("#contenedor-sopaletras .square span")[i].style.margin=(-$("#contenedor-sopaletras .square span")[i].offsetHeight/2)+"px 0 0 "+(-$("#contenedor-sopaletras .square span")[i].offsetWidth/2)+"px";
      }
      if($(".contenedor-puntuacion .puntossopa")[0] !=undefined){
          $(".contenedor-puntuacion .puntossopa")[0].style.margin=(-$(".contenedor-puntuacion .puntossopa")[0].offsetHeight/2)+"px 0 0 "+(-$(".contenedor-puntuacion .puntossopa")[0].offsetWidth/2)+"px";  
      }
      if($(".contenedor-puntuacion .cronometrosopa")[0] != undefined){
            $(".contenedor-puntuacion .cronometrosopa")[0].style.margin="-6px 0 0 "+(-$(".contenedor-puntuacion .cronometrosopa")[0].offsetWidth/2)+"px";
      }
      if ( $(".contenedormensajesopaletras")[0] != undefined){
            $(".contenedormensajesopaletras")[0].style.margin=(-$(".contenedormensajesopaletras")[0].offsetHeight/2)+"px 0 0 "+(-$(".contenedormensajesopaletras")[0].offsetWidth/2)+"px";
      }
}

$(window).on("resize", function(){
      centrarLetras();
})

//PUNTOS IMPORTANTES DE LA SOPA DE LETRAS QUE TIENEN QUE VER CON EL NÚMERO DE COLUMNAS
arraybreakpointsopa= [numerocolumnassopaletras-1, numerocolumnassopaletras, numerocolumnassopaletras+1]

$("#contenedor-sopaletras .square").css("width", 100/numerocolumnassopaletras+"%")

for (i=0; i<$("#contenedor-sopaletras .square").length; i++){
      if (i>=arraybreakpointsopa[1]*0 && i<arraybreakpointsopa[1]*1){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "1")}
      if (i>=arraybreakpointsopa[1]*1 && i<arraybreakpointsopa[1]*2){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "2")}
      if (i>=arraybreakpointsopa[1]*2 && i<arraybreakpointsopa[1]*3){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "3")}
      if (i>=arraybreakpointsopa[1]*3 && i<arraybreakpointsopa[1]*4){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "4")}
      if (i>=arraybreakpointsopa[1]*4 && i<arraybreakpointsopa[1]*5){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "5")}
      if (i>=arraybreakpointsopa[1]*5 && i<arraybreakpointsopa[1]*6){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "6")}
      if (i>=arraybreakpointsopa[1]*6 && i<arraybreakpointsopa[1]*7){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "7")}
      if (i>=arraybreakpointsopa[1]*7 && i<arraybreakpointsopa[1]*8){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "8")}
      if (i>=arraybreakpointsopa[1]*8 && i<arraybreakpointsopa[1]*9){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "9")}
      if (i>=arraybreakpointsopa[1]*9 && i<arraybreakpointsopa[1]*10){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "10")}
      if (i>=arraybreakpointsopa[1]*10 && i<arraybreakpointsopa[1]*11){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "11")}
      if (i>=arraybreakpointsopa[1]*11 && i<arraybreakpointsopa[1]*12){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "12")}
      if (i>=arraybreakpointsopa[1]*12 && i<arraybreakpointsopa[1]*13){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "13")}
      if (i>=arraybreakpointsopa[1]*13 && i<arraybreakpointsopa[1]*14){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "14")}
      if (i>=arraybreakpointsopa[1]*14 && i<arraybreakpointsopa[1]*15){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "15")}
      if (i>=arraybreakpointsopa[1]*15 && i<arraybreakpointsopa[1]*16){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "16")}
      if (i>=arraybreakpointsopa[1]*16 && i<arraybreakpointsopa[1]*17){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "17")}
      if (i>=arraybreakpointsopa[1]*17 && i<arraybreakpointsopa[1]*18){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "18")}
      if (i>=arraybreakpointsopa[1]*18 && i<arraybreakpointsopa[1]*19){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "19")}
      if (i>=arraybreakpointsopa[1]*19 && i<arraybreakpointsopa[1]*20){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "20")}
      if (i>=arraybreakpointsopa[1]*20 && i<arraybreakpointsopa[1]*21){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "21")}
      if (i>=arraybreakpointsopa[1]*21 && i<arraybreakpointsopa[1]*22){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "22")}
      if (i>=arraybreakpointsopa[1]*22 && i<arraybreakpointsopa[1]*23){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "23")}
      if (i>=arraybreakpointsopa[1]*23 && i<arraybreakpointsopa[1]*24){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "24")}
      if (i>=arraybreakpointsopa[1]*24 && i<arraybreakpointsopa[1]*25){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "25")}
      if (i>=arraybreakpointsopa[1]*25 && i<arraybreakpointsopa[1]*26){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "26")}
      if (i>=arraybreakpointsopa[1]*26 && i<arraybreakpointsopa[1]*27){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "27")}
      if (i>=arraybreakpointsopa[1]*27 && i<arraybreakpointsopa[1]*28){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "28")}
      if (i>=arraybreakpointsopa[1]*28 && i<arraybreakpointsopa[1]*29){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "29")}
      if (i>=arraybreakpointsopa[1]*29 && i<arraybreakpointsopa[1]*30){$("#contenedor-sopaletras .square")[i].setAttribute("data-id", "30")}
}

setTimeout(function(){ 
      $("#contenedor-sopaletras .square>span").css("opacity", "1"); 
      $(".contenedor-puntuacion .puntossopa").css("opacity", "1");
      $(".contenedor-puntuacion .mensajepuntossopa").css("opacity", "1");

}, 500);







$("#contenedor-sopaletras .square").on("click", Corregir);

function Corregir(){
      if(puntoslogrados < puntossopaletras && jugarsopaletras == "si"){
            toques += 1;
            arrayiniciofin.push(parseInt($(this).attr("id")));
            dataids.push($(this).attr("data-id"));
            
            //SI HA DADO UN TOQUE
            if (toques == 1){
                  $(".audiosopaletrastoqueuno")[0].play();
                  $(this).addClass("sopaletras-seleccionada");
            }



            //SI HA DADO DOS TOQUES CORRIJO
            if (toques == 2){

                  for(i=0; i<$(".square").length; i++){
                        if($(".square")[i].classList.contains("sopaletras-seleccionada")){
                              $(".square")[i].classList.remove("sopaletras-seleccionada");
                        }
                  }

                  toques = 0;


                  if (dataids[0]==dataids[1]){
                        num = (arrayiniciofin[0]-arrayiniciofin[1]);    
                        signonum = (arrayiniciofin[0]-arrayiniciofin[1]);
                        if (num<0){
                              num = num*-1;
                        }
                        if (signonum<0){
                              for (i=0; i<num+1; i++){
                                    $( ".square[id='"+(arrayiniciofin[0]+(i))+"']").addClass("sopaletras-fallada");
                                    arraypalabra.push($( ".square[id='"+(arrayiniciofin[0]+(i))+"'] span").html());
                              }
                        }

                        if (signonum>0){
                              for (i=0; i<num+1; i++){
                                    $( ".square[id='"+(arrayiniciofin[0]+(i)*-1)+"']").addClass("sopaletras-fallada");
                                    arraypalabra.push($( ".square[id='"+(arrayiniciofin[0]+(i)*-1)+"'] span").html());
                              }
                        }
                  }




                  if ((arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[2] % 1 == 0) {
                        num = (arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[2];     
                        signonum = (arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[2];      
                        if (num<0){
                              num = num*-1;
                        }
                        if (signonum<0){
                              for (i=0; i<num+1; i++){
                                    $( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[2])+"']").addClass("sopaletras-fallada");
                                    arraypalabra.push($( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[2])+"'] span").html())
                              }
                        }
                        else if(signonum>0){
                              for (i=0; i<num+1; i++){
                                    $( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[2])+"']").addClass("sopaletras-fallada");
                                    arraypalabra.push($( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[2])+"'] span").html())
                              }
                        }
                  }

                  
                  if ((arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[0] % 1 == 0) {
                        num = (arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[0];     
                        signonum = (arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[0];      
                        if (num<0){
                              num = num*-1;
                        }
                        if (signonum<0){
                              for (i=0; i<num+1; i++){
                                    $( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[0])+"']").addClass("sopaletras-fallada");
                                    arraypalabra.push($( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[0])+"'] span").html())
                              }
                        }
                        else if(signonum>0){
                              for (i=0; i<num+1; i++){
                                    $( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[0])+"']").addClass("sopaletras-fallada");
                                    arraypalabra.push($( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[0])+"'] span").html())
                              }
                        }
                  }


                  if ((arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[1] % 1 == 0) {
                        num = (arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[1];     
                        signonum = (arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[1];      
                        if (num<0){
                              num = num*-1;
                        }
                        if (signonum<0){
                              for (i=0; i<num+1; i++){
                                    $( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[1])+"']").addClass("sopaletras-fallada");
                                    arraypalabra.push($( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[1])+"'] span").html())
                              }
                        }
                        else if(signonum>0){
                              for (i=0; i<num+1; i++){
                                    $( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[1])+"']").addClass("sopaletras-fallada");
                                    arraypalabra.push($( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[1])+"'] span").html())
                              }
                        }
                  }

                  //SACO LA CADENA CON LA PALABRA ELEGIDA POR EL USUARIO EN LAS DOS DIRECCIONES PARA COMPROBAR DESPUÉS SI HA ACERTADO
                  for (i=0; i<arraypalabra.length; i++){
                              stringpalabra+=arraypalabra[i];
                        }
                  for (i=arraypalabra.length; i>=0; i--){
                        if (arraypalabra[i]!=undefined){
                                    stringpalabrareves+=arraypalabra[i];
                        }
                  }

                  for (i=0; i<arraypalabras.length; i++){
                        //SONARIA AUDIO DE CORRECTO CUANDO ACIERTO
                        if(arraypalabras[i]==stringpalabra || arraypalabras[i]==stringpalabrareves){

                              acierto="si";
                              palabraacertadasopaletras = arraypalabras[i];

                              //TACHO LA PALABRA ACERTADA DE LA LISTA
                              for(j=0; j<$(".listasopaletras li").length; j++){
                                    if($(".listasopaletras li")[j].innerHTML.split(" ")[1] == palabraacertadasopaletras){
                                          $(".listasopaletras li")[j].classList.add("sopaletras-tachada")
                                    }
                              }

                              //BORRO EL ELEMENTO ACERTADO DEL ARRAY PARA QUE SI VUELVE A CLICAR EN EL MISMO NO LE SUME PUNTOS
                              delete arraypalabras[i];

                              //SUMO PUNTOS POR EL ACIERTO CONSEGUIDO Y LO ANOTO EN EL CONTENEDOR DE PUNTUACIÓN
                              puntoslogrados+=puntosacierto;
                              puntoslogradossindecimales = Math.round(puntoslogrados);

                              $(".contenedor-puntuacion .puntossopa").css("opacity", 0);
                              
                              setTimeout(function(){ 
                                    $(".contenedor-puntuacion .puntossopa").html(puntoslogradossindecimales);
                                    centrarLetras();
                                    $(".contenedor-puntuacion .puntossopa").css("opacity", 1)
                              }, 500);

                              if(Math.round(puntoslogrados) != Math.round(puntossopaletras)){
                                    $(".audiosopaletrascorrecto")[0].play();
                              }

                              //PARA PONER EN VERDE LOS ACIERTOS HORIZONTALES
                              if (dataids[0]==dataids[1]){
                                    if (signonum<0){
                                          for (i=0; i<num+1; i++){
                                                $( ".square[id='"+(arrayiniciofin[0]+(i))+"']").addClass("sopaletras-acertada");
                                                $( ".square[id='"+(arrayiniciofin[0]+(i))+"']").removeClass("sopaletras-fallada");
                                          }
                                    }

                                    if (signonum>0){
                                          for (i=0; i<num+1; i++){
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*-1)+"']").addClass("sopaletras-acertada");
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*-1)+"']").removeClass("sopaletras-fallada");
                                          }
                                    }
                              }

                              //PARA PONER EN VERDE LOS ACIERTOS DIAGONALES 1
                              if ((arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[2] % 1 == 0) {
                                    if (signonum<0){
                                          for (i=0; i<num+1; i++){
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[2])+"']").addClass("sopaletras-acertada");
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[2])+"']").removeClass("sopaletras-fallada");
                                          }
                                    }
                                    else if(signonum>0){
                                          for (i=0; i<num+1; i++){
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[2])+"']").addClass("sopaletras-acertada");
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[2])+"']").removeClass("sopaletras-fallada");
                                          }
                                    }
                              }

                              //PARA PONER EN VERDE LOS ACIERTOS DIAGONALES 2
                              if ((arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[0] % 1 == 0) {
                                    if (signonum<0){
                                          for (i=0; i<num+1; i++){
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[0])+"']").addClass("sopaletras-acertada");
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[0])+"']").removeClass("sopaletras-fallada");
                                          }
                                    }
                                    else if(signonum>0){
                                          for (i=0; i<num+1; i++){
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[0])+"']").addClass("sopaletras-acertada");
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[0])+"']").removeClass("sopaletras-fallada");
                                          }
                                    }
                              }

                              //PARA PONER EN VERDE LOS ACIERTOS DE LAS VERTICALES
                              if ((arrayiniciofin[0]-arrayiniciofin[1])/arraybreakpointsopa[1] % 1 == 0) {
                                    if (signonum<0){
                                          for (i=0; i<num+1; i++){
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[1])+"']").addClass("sopaletras-acertada");
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*arraybreakpointsopa[1])+"']").removeClass("sopaletras-fallada");
                                          }
                                    }
                                    else if(signonum>0){
                                          for (i=0; i<num+1; i++){
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[1])+"']").addClass("sopaletras-acertada");
                                                $( ".square[id='"+(arrayiniciofin[0]+(i)*-arraybreakpointsopa[1])+"']").removeClass("sopaletras-fallada");
                                          }
                                    }
                              }
                        }
                  }
                  //SI NO HA ACERTADO ENTRA AQUÍ
                  if (acierto=="no"){
                        $(".audiosopaletrasincorrecto")[0].play();
                  }

                  //SI HA ACERTADO TODAS LAS PALABRAS
                  if(Math.round(puntoslogrados) == Math.round(puntossopaletras)){
                        $(".audiosopaletrasganador")[0].play();
                        clearInterval(intervaloCuentaAtras);
                        $(".cronometrosopa").css("opacity", "0");
                        $("#contenedor-sopaletras .square").css("cursor", "default");

                        //PARA INTRODUCIR EN EL ARRAY DE PUNTUACIÓN LOS PUNTOS LOGRADOS EN LA ACTIVIDAD
                        if (escormizar == "si"){
                             //SI LOS PUNTOS QUE CONSEGUÍ EN EL INTENTO SON MAYORES QUE LOS PUNTOS QUE YA TENÍA EN LOS OTROS INTENTOS, SE AÑADEN AL ARRAY DE PUNTOS
                             if (puntoslogrados> gamescores[indicejuego] ){
                                 gamescores[indicejuego] = puntoslogrados;
                             }
                        }

                        $("#mensajesopaletras").html("ENHORABUENA, HAS ACERTADO TODAS LAS PALABAS, TU PUNTUACIÓN ES DE "+Math.round(puntoslogrados)+" PUNTOS, TU PUNTUACIÓN MÁXIMA EN ESTA ACTIVIDAD ES DE "+Math.round(gamescores[indicejuego])+" PUNTOS");
                        $(".contenedormensajesopaletras").css("background", "#007A4D");
                        $(".contenedormensajesopaletras").css("display", "block");                     

                        centrarLetras();
                        setTimeout(function(){ 
                              $(".contenedormensajesopaletras").css("opacity", "1");
                        }, 2000);
                  }

                  //REINICIO LAS VARIABLES DESPUES DE LOS DOS TOQUES
                  arrayiniciofin=[];
                  arraypalabra=[];
                  dataids=[];
                  stringpalabra="";
                  stringpalabrareves="";
                  acierto="no";

                  setTimeout(function(){ 
                        for(i=0; i<$(".square").length; i++){
                              if($(".square")[i].classList.contains("sopaletras-fallada")){
                                    $(".square")[i].classList.remove("sopaletras-fallada");
                              }
                        } 
                  }, 1500);
            }
      }
}

var intervaloCuentaAtras;


//PARA LANZAR LA VENTANA MODAL DE LAS INSTRUCCIONES DE LA SOPA DE LETRAS, ANTES DE COMENZAR LA ACTIVIDAD
$('#instruccionesSopaLetras').modal('show');

//CUANDO SE MUESTRA LA VENTANA MODAL PARA EL CRONÓMETRO
$('#instruccionesSopaLetras').on('shown.bs.modal', function(){
      //BORRO EL INTERVALO DE LA SOPA DE LETRAS
      clearInterval(intervaloCuentaAtras);
      //PONGO LA CUENTA ATRÁS INICIAL QUE TENGA EL EJERCICIO
      $(".cronometrosopa").html(cuentaatrassopaletras);

      //SI LOS INTENTOS QUE HA REALIZADO EL ALUMNO SON IGUALES QUE LOS INTENTOS QUE PUEDE REALIZAR
      if (intentosSopaLetras == gameattempts[indicejuego]){
            $("#instruccionesSopaLetras .modal-body").html("<p>Se han terminado tus intentos, tu puntuación máxima en esta actividad ha sido de "+Math.round(gamescores[indicejuego])+" puntos</p>");
      }
      //SI NO SE HAN TERMINADO LOS INTENTOS
      else{
            $("#instruccionesSopaLetras .modal-body").html("<ul class='lista'><li><span>■</span> Haz clic en el inicio de la palabra y después en el fin para marcar una palabra.</li><li><span>■</span> Tienes un tiempo de "+cuentaatrassopaletras+" minutos para completar la actividad.</li><li><span>■</span> Te quedan "+(intentosSopaLetras-gameattempts[indicejuego])+" intento/s, se guardará la puntuación más alta que se obtenga en los intentos.</li><li><span>■</span> Si antes de que se termine el tiempo sales de la actividad, perderás un intento y no se guardará la puntuación.</li><li><span>■</span> En el momento que se cierre esta ventana modal, se contará como un intento.</li></ul>");
      }
});

//CUANDO SE CIERRA LA VENTANA MODAL EMPIEZA A CONTAR EL TIEMPO
$('#instruccionesSopaLetras').on('hidden.bs.modal', iniciarSopaLetras);
function iniciarSopaLetras(){

      //JUSTO EN EL MOMENTO EN EL QUE CIERRA LA VENTANA MODAL, MUESTRO EL EJERCICIO
      $("#ejercicioSopaLetras").css("display", "block");
      centrarLetras();

      //LE AÑADO UN INTENTO EN EL ARRAY DE INTENTOS AL CERRAR LA VENTANA MODAL
      if (escormizar == "si"){

            //BORRO EL INTERVALO DE LA SOPA DE LETRAS
            clearInterval(intervaloCuentaAtras);

            //SI LOS INTENTOS QUE HA REALIZADO EL ALUMNO SON IGUALES QUE LOS INTENTOS QUE PUEDE REALIZAR
            if (intentosSopaLetras == gameattempts[indicejuego]){
                  for(i=0; i<$(".square").length; i++){
                        $(".square>span")[i].innerHTML="";
                  }
                  $(".puntossopa").html("");
                  $(".cronometrosopa").html("");
                  jugarsopaletras ="no"; 
            }
            //SI NO SE HAN TERMINADO LOS INTENTOS LE SUMO UN INTENTO Y PONGO EL CRONÓMETRO EN MARCHA
            else{
                  //SUMO UN INTENTO SI TODAVIA QUEDAN INTENTOS
                  gameattempts[indicejuego] = gameattempts[indicejuego]+1;

                  /* P A R A    L A    C U E N T A    A T R Á S   D E L    C R O N O M E T R O*/
                  $(".cronometrosopa").html(cuentaatrassopaletras);

                  minutosrestantessopa= parseInt(cuentaatrassopaletras.split(":")[0]);
                  segundosrestantessopa= cuentaatrassopaletras.split(":")[1];

                  if (segundosrestantessopa==0){
                              minutosrestantessopa--;
                  }

                  intervaloCuentaAtras = setInterval(function(){ 

                        segundosrestantessopa--;
                        stringminutosrestantessopa = minutosrestantessopa.toString();
                        stringsegundosrestantessopa = segundosrestantessopa.toString();

                        if (segundosrestantessopa<10){
                              stringsegundosrestantessopa = "0"+segundosrestantessopa;
                        }
                        if (minutosrestantessopa<10){
                              stringminutosrestantessopa = "0"+minutosrestantessopa;
                        }

                        if (segundosrestantessopa==-1){
                              segundosrestantessopa=59;
                              stringsegundosrestantessopa="59";
                        }

                        if (segundosrestantessopa==0){
                              minutosrestantessopa--;
                        }

                        $(".cronometrosopa").html(stringminutosrestantessopa+":"+stringsegundosrestantessopa)

                        //PARO EL TIEMPO CUANDO LLEGA A CERO EL CRONOMETRO
                        if (stringminutosrestantessopa=="00" && stringsegundosrestantessopa=="00"){
                              clearInterval(intervaloCuentaAtras);
                              $("#contenedor-sopaletras .square").css("cursor", "default");

                              //PARA INTRODUCIR EN EL ARRAY DE PUNTUACIÓN LOS PUNTOS LOGRADOS EN LA ACTIVIDAD
                              if (escormizar == "si"){
                                   //SI LOS PUNTOS QUE CONSEGUÍ EN EL INTENTO SON MAYORES QUE LOS PUNTOS QUE YA TENÍA EN LOS OTROS INTENTOS, SE AÑADEN AL ARRAY DE PUNTOS
                                   if (puntoslogrados> gamescores[indicejuego] ){
                                       gamescores[indicejuego] = puntoslogrados;
                                   }
                              }
                              /////////////////////////////////////////////////////////////////////////////////

                              $("#mensajesopaletras").html("SE HA TERMINADO TU TIEMPO, TU PUNTUACIÓN HA SIDO DE "+Math.round(puntoslogrados)+" PUNTOS, TU PUNTUACIÓN MÁXIMA EN ESTA ACTIVIDAD ES DE "+Math.round(gamescores[indicejuego])+" PUNTOS");

                              $(".contenedormensajesopaletras").css("display", "block");
                              $(".contenedor-btnreiniciar").css("display", "block");
                              centrarLetras();
                              setTimeout(function(){ 
                                    $(".contenedormensajesopaletras").css("opacity", "1");
                                    $(".contenedor-btnreiniciar").css("opacity", "1");
                                    //VACIO LAS LETRAS UNA VEZ QUE SE HA TERMINADO LA ACTIVIDAD
                                    $(".square>span").css("opacity", 0);
                                    $(".square").removeClass("sopaletras-acertada");
                                    $(".square").removeClass("sopaletras-seleccionada");
                              }, 2000);
                              jugarsopaletras = "no";
                        }

                  }, 1000);
            }
      }
}

