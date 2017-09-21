/*******************************************************************************
**
** FileName: api.js
**
*******************************************************************************/

/*
Descripción: 
Fecha: 00/00/0000
Versión: V1
*/


//Ejecuto el metodo stripslashes(para quitar las barras que mete el scorm automaticamente en los datos almacenados en cmi.suspend_data)
//stripslashes(doLMSGetValue("cmi.suspend_data"))


///////////VARIABLES GLOBALES (ELISEO)///////////////
var contadorDiapositivasTest = 0;//Variable que contiene el numero de diapositivas de la parte del test que ya se han visualizado
var testEmpezado = false;//Variable booleana que guarda si el test ha sido empezado o no (ACTUALMENTE NO SE USA, BORRAR MAS ADELANTE)
var puntospregunta = 0;//Variable que contiene la nota que vale cada pregunta del test
var puntuacion = 0;//Variable que va actualizando la puntuación del alumno a lo largo del test, una vez terminada la suma de la puntuacion de todas las preguntas, el valor de esta variable se le pasa a la variable nota
var nota;//Variable que contiene la nota de del test completo, el contenido de la varibale se muestra en la ultima pagina del test
var arrayopcionseleccionada =[];
var paginasVisitadasEnNavegacionLibre = [];
var paginasTotalesDeProgreso = indice.length - 1;/*1) Para tener en cuenta la unidad unicamente, habra que poner "indice.length - 1". Se le resta 1 porque la ultima pagina del indice es la que corresponde al test y esta no la queremos tener en cuenta.
																			2) Para tener en cuenta la unidad y el test, habra que poner "indice.length + datos.length".*/
//Variables para los intentos - - - - 
var respcorrecta;
var intentosrealizados;//Variable para guardar los intentos realizados por el alumno en la parte del test
var numeropreguntayrespuesta;
var posicionnumpregunta;
var pospreguntasprimerintento;
//Variables para guardar las respuestas del alumno a las preguntas del test
var arrayopcionesintento=[];//Array para guardar todas las repuestas del usuario a las preguntas del test

//Variables para el control de pintado de las preguntas del test
var pintadoPregunta = false;//Variable booleana que controla si se debe pintar una determinada pregunta o no en los casos de que esta se haya respondido correctamente por el alumno anteriormente


var puntuacionTotal = 0;
var testrepetido = false;


var testTerminado = false;

//- - - - - - - - - - -  - - - - -  -
/////////////////////////////////////////////////////

//FUNCION QUE ME SIRVE PARA BORRAR LOS INTENTOS SCORM
function limpiarBD() {
doLMSSetValue("cmi.core.score.raw", "0");
doLMSSetValue("cmi.suspend_data", "");
doLMSSetValue("cmi.comments", "");
doLMSSetValue("cmi.core.lesson_location", "");
doLMSSetValue("cmi.student_preference.audio", 0);
doLMSSetValue("cmi.core.lesson_status", "incomplete");
doLMSCommit();
}
//limpiarBD(); 

// variables1
$unidad = [];   	//Array multidimensional donde se encuentran los temas ($unidad[x][0]) y subtemas ($unidad[x][1]);


//////// VARIABLES GLOBALES IMPORTADAS DE LA PLANTILLA DEL TEST (ELISEO) //////
$interrogacion = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.63 461.63"><defs><style>.cls-1{}</style></defs><title>examen</title><g fill="#822433" id="Capa_1" data-name="Capa 1"><path d="M271.06,314.14H225.94q-.18-9.73-.18-11.86,0-21.94,7.25-36.1t29-31.85q21.76-17.69,26-23.18a31,31,0,0,0,6.55-19.11q0-14.51-11.59-24.86t-31.23-10.35q-18.94,0-31.67,10.79t-17.52,32.91l-45.65-5.66q1.95-31.67,27-53.79T249.65,119q42.82,0,68.12,22.38t25.3,52.11a57.29,57.29,0,0,1-9.29,31.14q-9.29,14.69-39.72,40-15.75,13.1-19.55,21.06T271.06,314.14ZM225.94,381V331.31h49.72V381Z" transform="translate(-19.19 -19.19)"/></g><g fill="#822433" id="Capa_2" data-name="Capa 2"><path class="cls-1" d="M250,19.19C122.52,19.19,19.19,122.52,19.19,250S122.52,480.81,250,480.81,480.81,377.48,480.81,250,377.48,19.19,250,19.19Zm0,421.22C144.84,440.41,59.59,355.16,59.59,250S144.84,59.59,250,59.59,440.41,144.84,440.41,250,355.16,440.41,250,440.41Z" transform="translate(-19.19 -19.19)"/></g></svg>';
//var interrogacion = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.63 461.63"><defs><style>.cls-1{}</style></defs><title>examen</title><g fill="#822433" id="Capa_1" data-name="Capa 1"><path d="M271.06,314.14H225.94q-.18-9.73-.18-11.86,0-21.94,7.25-36.1t29-31.85q21.76-17.69,26-23.18a31,31,0,0,0,6.55-19.11q0-14.51-11.59-24.86t-31.23-10.35q-18.94,0-31.67,10.79t-17.52,32.91l-45.65-5.66q1.95-31.67,27-53.79T249.65,119q42.82,0,68.12,22.38t25.3,52.11a57.29,57.29,0,0,1-9.29,31.14q-9.29,14.69-39.72,40-15.75,13.1-19.55,21.06T271.06,314.14ZM225.94,381V331.31h49.72V381Z" transform="translate(-19.19 -19.19)"/></g><g fill="#822433" id="Capa_2" data-name="Capa 2"><path class="cls-1" d="M250,19.19C122.52,19.19,19.19,122.52,19.19,250S122.52,480.81,250,480.81,480.81,377.48,480.81,250,377.48,19.19,250,19.19Zm0,421.22C144.84,440.41,59.59,355.16,59.59,250S144.84,59.59,250,59.59,440.41,144.84,440.41,250,355.16,440.41,250,440.41Z" transform="translate(-19.19 -19.19)"/></g></svg>';


//Esta variable interrogacion contiene la imagen de la interogacion que se muestra en el contenedor
//principal al iniciar el test

$lupaOkActive = '<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"><defs><style>.cls-1{fill:none;}</style></defs><title>lupaOkActive</title><rect x="27.33" y="17.19" width="2.45" height="16.7" rx="1.23" ry="1.23" transform="translate(26.43 -12.71) rotate(45)"/><rect x="20.68" y="25.63" width="2.45" height="6.67" rx="1.23" ry="1.23" transform="translate(57.87 33.97) rotate(135)"/><path d="M15.55.61a10.68,10.68,0,1,0,8.24,12.66A10.68,10.68,0,0,0,15.55.61Zm-4,18.76a8.49,8.49,0,1,1,10.07-6.55A8.49,8.49,0,0,1,11.59,19.37Z"/><rect x="8.64" y="20.37" width="2.45" height="14.31" rx="1.23" ry="1.23" transform="translate(5.9 -1.44) rotate(11.93)"/><rect x="7.24" y="26.12" width="4.05" height="8.5" rx="2.03" ry="2.03" transform="translate(6.48 -1.26) rotate(11.93)"/><rect class="cls-1" width="35" height="35"/></svg>';

$lupaOkInactive = '<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"><defs><style>.cls-1{fill:none;}</style></defs><title>lupaOkInactive</title><rect x="27.33" y="17.19" width="2.45" height="16.7" rx="1.23" ry="1.23" transform="translate(26.43 -12.71) rotate(45)"/><rect x="20.68" y="25.63" width="2.45" height="6.67" rx="1.23" ry="1.23" transform="translate(57.87 33.97) rotate(135)"/><path d="M15.55.61a10.68,10.68,0,1,0,8.24,12.66A10.68,10.68,0,0,0,15.55.61Zm-4,18.76a8.49,8.49,0,1,1,10.07-6.55A8.49,8.49,0,0,1,11.59,19.37Z"/><rect x="8.64" y="20.37" width="2.45" height="14.31" rx="1.23" ry="1.23" transform="translate(5.9 -1.44) rotate(11.93)"/><rect x="7.24" y="26.12" width="4.05" height="8.5" rx="2.03" ry="2.03" transform="translate(6.48 -1.26) rotate(11.93)"/><rect class="cls-1" width="35" height="35"/><rect x="16.27" y="-4.48" width="2.45" height="43.97" rx="1.23" ry="1.23" transform="translate(42.25 17.5) rotate(135)"/><rect x="16.27" y="-4.48" width="2.45" height="43.97" rx="1.23" ry="1.23" transform="translate(17.5 -7.25) rotate(45)"/></svg>';

$lupaWrongActive = '<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"><defs><style>.cls-1{fill:none;}</style></defs><title>lupaWrongActive</title><rect x="27.33" y="17.19" width="2.45" height="16.7" rx="1.23" ry="1.23" transform="translate(26.43 -12.71) rotate(45)"/><rect x="27.33" y="17.19" width="2.45" height="16.7" rx="1.23" ry="1.23" transform="translate(66.81 23.41) rotate(135)"/><path d="M15.55.61a10.68,10.68,0,1,0,8.24,12.66A10.68,10.68,0,0,0,15.55.61Zm-4,18.76a8.49,8.49,0,1,1,10.07-6.55A8.49,8.49,0,0,1,11.59,19.37Z"/><rect x="8.64" y="20.37" width="2.45" height="14.31" rx="1.23" ry="1.23" transform="translate(5.9 -1.44) rotate(11.93)"/><rect x="7.24" y="26.12" width="4.05" height="8.5" rx="2.03" ry="2.03" transform="translate(6.48 -1.26) rotate(11.93)"/><rect class="cls-1" width="35" height="35"/></svg>';

$lupaWrongInactive = '<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"><defs><style>.cls-1{fill:none;}</style></defs><title>lupaWrongInactive</title><rect x="27.33" y="17.19" width="2.45" height="16.7" rx="1.23" ry="1.23" transform="translate(26.43 -12.71) rotate(45)"/><rect x="27.33" y="17.19" width="2.45" height="16.7" rx="1.23" ry="1.23" transform="translate(66.81 23.41) rotate(135)"/><path d="M15.55.61a10.68,10.68,0,1,0,8.24,12.66A10.68,10.68,0,0,0,15.55.61Zm-4,18.76a8.49,8.49,0,1,1,10.07-6.55A8.49,8.49,0,0,1,11.59,19.37Z"/><rect x="8.64" y="20.37" width="2.45" height="14.31" rx="1.23" ry="1.23" transform="translate(5.9 -1.44) rotate(11.93)"/><rect x="7.24" y="26.12" width="4.05" height="8.5" rx="2.03" ry="2.03" transform="translate(6.48 -1.26) rotate(11.93)"/><rect class="cls-1" width="35" height="35"/><rect x="16.27" y="-4.48" width="2.45" height="43.97" rx="1.23" ry="1.23" transform="translate(42.25 17.5) rotate(135)"/><rect x="16.27" y="-4.48" width="2.45" height="43.97" rx="1.23" ry="1.23" transform="translate(17.5 -7.25) rotate(45)"/></svg>';
//////////////////////////////////////////////////////////////////////

//CREO UN ARRAY VACIO CON LAS ACTIVIDADES PUNTUABLES DE LA UNIDAD Y OTRO ARRAY VACIO CON LOS INTENTOS DE CADA UNIDAD
var gamescores=[];
var gameattempts=[];

if (escormizar == "si"){
	
	//SI ESTÁ VACIO LA VARIABLE DONDE VOY A GUARDAR LOS ARRAYS DE INTENTOS ENTRA AQUÍ Y LOS LLENA CON CEROS
	if (doLMSGetValue("cmi.suspend_data")==""){
		for (i=0; i<actividadespuntuables; i++){
			gamescores.push(0);
			gameattempts.push(0);
		}

		for(var j=0; j<datostest[0].numeropreguntas; j++){
			//arrayopcionesintento.push("sincontestar");//Relleno el array con los valores de las repsuestas del test contestadas con el valor "sincontestar" puesto que se acaba de empezar tanto la unidad como el test.
			arrayopcionesintento[j] = "sincontestar";
		}
		testrepetido = false;
	}
	//SI YA HAY PUNTUACIONES E INTENTOS EN EL CURSO, LLENO LOS ARRAYS DE INTENTOS Y PUNTAJE CON SUS RESPECTIVOS VALORES
	else{
		gamescores = obtenerdatos("puntosjuegos");
		gameattempts = obtenerdatos("intentosjuegos");
		if(doLMSGetValue("cmi.suspend_data").includes("valorespreguntas") == true){
			
			arrayopcionesintento = obtenerdatosTest("estadopreguntastest");
		}else{
			for(var j=0; j<datostest[0].numeropreguntas; j++){
				//arrayopcionesintento.push("sincontestar");//Relleno el array con los valores de las repsuestas del test contestadas con el valor "sincontestar" puesto que se acaba de empezar tanto la unidad como el test.
				arrayopcionesintento[j] = "sincontestar";
			}
		}
		testrepetido = (((doLMSGetValue("cmi.suspend_data").split("||")[6]).split("="))[1] === "true");
	}
}

//LOS CONVIERTO TAMBIÉN EN UN JSON
gamescoresjson=JSON.stringify(gamescores);
gameattemptsjson=JSON.stringify(gameattempts);


if (escormizar=="si"){
	$pagina=obtenerdatos("contador");
	$estado=JSON.parse(obtenerdatos("estado"));
}
else{
	$pagina = 1;    	//Página que quiero que se muestre: SOLO USAR MIENTRAS SE ESTÁ MAQUETANDO
}

$paginaAnterior = 0;
$porcentaje = 0;
$paginaInicioTest = indice.length;

$cerrar = '<svg width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="cancel-1" fill="#000000"><path d="M17.5,34.8803419 C27.0726496,34.8803419 34.8803419,27.1025641 34.8803419,17.5 C34.8803419,7.8974359 27.0726496,0.11965812 17.5,0.11965812 C7.92735043,0.11965812 0.11965812,7.92735043 0.11965812,17.5 C0.11965812,27.0726496 7.92735043,34.8803419 17.5,34.8803419 L17.5,34.8803419 Z M17.5,2.57264957 C25.7264957,2.57264957 32.4273504,9.27350427 32.4273504,17.5 C32.4273504,25.7264957 25.7264957,32.4273504 17.5,32.4273504 C9.27350427,32.4273504 2.57264957,25.7264957 2.57264957,17.5 C2.57264957,9.27350427 9.27350427,2.57264957 17.5,2.57264957 L17.5,2.57264957 Z" id="Shape"></path><path d="M10.9786325,23.8418803 C11.2179487,24.0811966 11.517094,24.2008547 11.8461538,24.2008547 C12.1752137,24.2008547 12.474359,24.0811966 12.7136752,23.8418803 L17.5,19.0555556 L22.2863248,23.8418803 C22.525641,24.0811966 22.8247863,24.2008547 23.1538462,24.2008547 C23.482906,24.2008547 23.7820513,24.0811966 24.0213675,23.8418803 C24.5,23.3632479 24.5,22.5854701 24.0213675,22.1068376 L19.2350427,17.3205128 L24.0213675,12.534188 C24.5,12.0555556 24.5,11.2777778 24.0213675,10.7991453 C23.542735,10.3205128 22.7649573,10.3205128 22.2863248,10.7991453 L17.5,15.5854701 L12.7136752,10.7991453 C12.2350427,10.3205128 11.457265,10.3205128 10.9786325,10.7991453 C10.5,11.2777778 10.5,12.0555556 10.9786325,12.534188 L15.7649573,17.3205128 L10.9786325,22.1068376 C10.5,22.5854701 10.5,23.3632479 10.9786325,23.8418803 L10.9786325,23.8418803 Z" id="Shape1"></path></g></svg>';
$menu = '<svg class="center-block" width="35px" height="27px" viewBox="0 0 35 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="menu" fill="#000000"><path d="M32.4420286,0.147754137 L2.47026381,0.147754137 C1.18894301,0.147754137 0.186170213,0.679669031 0.186170213,1.35933806 C0.186170213,2.03900709 1.18894301,2.57092199 2.47026381,2.57092199 L32.4977382,2.57092199 C33.779059,2.57092199 34.7818318,2.03900709 34.7818318,1.35933806 C34.7261222,0.679669031 33.7233494,0.147754137 32.4420286,0.147754137 L32.4420286,0.147754137 Z" id="Shape"></path><path d="M32.4420286,16.0756501 L2.47026381,16.0756501 C1.18894301,16.0756501 0.186170213,16.607565 0.186170213,17.287234 C0.186170213,17.9669031 1.18894301,18.498818 2.47026381,18.498818 L32.4977382,18.498818 C33.779059,18.498818 34.7818318,17.9669031 34.7818318,17.287234 C34.7261222,16.607565 33.7233494,16.0756501 32.4420286,16.0756501 L32.4420286,16.0756501 Z" id="Shape"></path><path d="M32.2558584,23.8297872 L2.2840936,23.8297872 C1.0027728,23.8297872 3.55271368e-15,24.3617021 3.55271368e-15,25.0413712 C3.55271368e-15,25.7210402 1.0027728,26.2529551 2.2840936,26.2529551 L32.311568,26.2529551 C33.5928888,26.2529551 34.5956616,25.7210402 34.5956616,25.0413712 C34.539952,24.3617021 33.5371792,23.8297872 32.2558584,23.8297872 L32.2558584,23.8297872 Z" id="Shape"></path><path d="M32.4420286,8.09692671 L2.47026381,8.09692671 C1.18894301,8.09692671 0.186170213,8.62884161 0.186170213,9.30851064 C0.186170213,9.98817967 1.18894301,10.5200946 2.47026381,10.5200946 L32.4977382,10.5200946 C33.779059,10.5200946 34.7818318,9.98817967 34.7818318,9.30851064 C34.7261222,8.62884161 33.7233494,8.09692671 32.4420286,8.09692671 L32.4420286,8.09692671 Z" id="Shape"></path></g></svg>';
$audioOn = '<svg class="center-block" width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="volume" fill="#000000"><path d="M1.34615385,26.8034188 L9.42307692,26.8034188 C10.1111111,26.8034188 10.6495726,26.2649573 10.6495726,25.5769231 L10.6495726,25.1581197 L24.8888889,34.6410256 C25.0982906,34.7905983 25.3376068,34.8504274 25.5769231,34.8504274 C25.7863248,34.8504274 25.965812,34.7905983 26.1452991,34.7008547 C26.534188,34.491453 26.8034188,34.0726496 26.8034188,33.6239316 L26.8034188,1.34615385 C26.8034188,0.897435897 26.5641026,0.478632479 26.1452991,0.269230769 C25.7564103,0.0598290598 25.2777778,0.0897435897 24.8888889,0.329059829 L10.6495726,9.84188034 L10.6495726,9.42307692 C10.6495726,8.73504274 10.1111111,8.1965812 9.42307692,8.1965812 L1.34615385,8.1965812 C0.658119658,8.1965812 0.11965812,8.73504274 0.11965812,9.42307692 L0.11965812,25.5769231 C0.11965812,26.2350427 0.688034188,26.8034188 1.34615385,26.8034188 L1.34615385,26.8034188 Z M10.6495726,12.7735043 L24.3504274,3.64957265 L24.3504274,31.3803419 L10.6495726,22.2264957 L10.6495726,12.7735043 L10.6495726,12.7735043 Z M2.57264957,10.6495726 L8.1965812,10.6495726 L8.1965812,12.1153846 L8.1965812,22.8846154 L8.1965812,24.3504274 L2.57264957,24.3504274 L2.57264957,10.6495726 L2.57264957,10.6495726 Z" id="Shape"></path><path d="M33.6538462,8.1965812 C32.965812,8.1965812 32.4273504,8.73504274 32.4273504,9.42307692 L32.4273504,25.5769231 C32.4273504,26.2649573 32.965812,26.8034188 33.6538462,26.8034188 C34.3418803,26.8034188 34.8803419,26.2649573 34.8803419,25.5769231 L34.8803419,9.42307692 C34.8803419,8.76495726 34.3119658,8.1965812 33.6538462,8.1965812 L33.6538462,8.1965812 Z" id="Shape"></path></g></svg>';
$audioOff = '<svg class="center-block" width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="volumeOff" fill="#000000"><path id="Shape" d="M1.346,26.803h8.077c0.688,0,1.227-0.537,1.227-1.226v-0.419l14.239,9.482c0.209,0.15,0.449,0.21,0.688,0.21 c0.209,0,0.389-0.06,0.568-0.149c0.389-0.21,0.657-0.629,0.657-1.077V1.346c0-0.449-0.238-0.868-0.657-1.077 c-0.39-0.209-0.868-0.179-1.257,0.06L10.649,9.842V9.423c0-0.688-0.538-1.226-1.227-1.226H1.346c-0.688,0-1.227,0.538-1.227,1.226 v16.154C0.12,26.234,0.688,26.803,1.346,26.803L1.346,26.803z M10.649,12.773l13.701-9.124v27.731l-13.701-9.154V12.773 L10.649,12.773z M2.573,10.649h5.624v1.466v10.77v1.466H2.573V10.649L2.573,10.649z"/><path id="Shape_1_" d="M33.654,8.197c-0.688,0-1.227,0.538-1.227,1.226v16.154c0,0.688,0.538,1.226,1.227,1.226 c0.688,0,1.227-0.537,1.227-1.226V9.423C34.881,8.765,34.313,8.197,33.654,8.197L33.654,8.197z"/><path id="close" d="M0.479,34.521c0.239,0.239,0.539,0.359,0.868,0.359s0.628-0.12,0.868-0.359L17.5,19.234l15.286,15.287 c0.239,0.239,0.538,0.359,0.868,0.359c0.299,0,0.628-0.12,0.867-0.359c0.479-0.479,0.479-1.256,0-1.735L19.234,17.5L34.521,2.214 C35,1.735,35,0.957,34.521,0.479s-1.256-0.479-1.735,0L17.5,15.765L2.214,0.479C1.735,0,0.957,0,0.479,0.479S0,1.735,0.479,2.214 L15.765,17.5L0.479,32.786C0,33.266,0,34.043,0.479,34.521L0.479,34.521z"/></g></svg>';
$ayuda = '<svg class="center-block" width="21px" height="34px" viewBox="0 0 21 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M8.25514403,29.0562414 L8.25514403,34 L12.1728395,34 L12.1728395,29.0562414 L8.25514403,29.0562414 Z M0,10.9602195 L2.9382716,10.9602195 C2.90717863,9.74759339 3.04709492,8.62826302 3.35802469,7.60219479 C3.66895446,6.57612656 4.13534211,5.68221689 4.75720165,4.92043896 C5.37906118,4.15866103 6.17192019,3.56013021 7.13580247,3.12482853 C8.09968475,2.68952686 9.20346886,2.47187929 10.4471879,2.47187929 C11.3488843,2.47187929 12.2039283,2.62734184 13.0123457,2.9382716 C13.8207631,3.24920137 14.5281177,3.67672339 15.1344307,4.22085048 C15.7407438,4.76497757 16.2226777,5.42569342 16.5802469,6.20301783 C16.9378161,6.98034225 17.1165981,7.83538628 17.1165981,8.76817558 C17.1165981,9.98080167 16.8289924,11.0845858 16.2537723,12.079561 C15.6785522,13.0745363 14.9556514,13.9762191 14.085048,14.7846365 C13.0900728,15.6863328 12.2428019,16.4947381 11.5432099,17.2098765 C10.8436179,17.925015 10.2839527,18.6712353 9.86419753,19.4485597 C9.44444235,20.2258841 9.14129037,21.0964744 8.95473251,22.0603567 C8.76817465,23.0242389 8.69044337,24.2213006 8.72153635,25.6515775 L11.659808,25.6515775 C11.6909009,24.2213006 11.753086,23.1252896 11.8463649,22.3635117 C11.9396438,21.6017337 12.1261989,20.9565641 12.4060357,20.4279835 C12.6858725,19.8994029 13.1133945,19.3630571 13.6886145,18.81893 C14.2638346,18.2748029 15.0333742,17.5208096 15.9972565,16.5569273 C17.1787896,15.4375801 18.1504306,14.271611 18.9122085,13.0589849 C19.6739864,11.8463588 20.0548697,10.3694646 20.0548697,8.62825789 C20.0548697,7.26016691 19.8061296,6.04755901 19.308642,4.99039781 C18.8111543,3.9332366 18.1271191,3.0315538 17.2565158,2.28532236 C16.3859124,1.53909092 15.383179,0.971652606 14.2482853,0.582990398 C13.1133917,0.194328189 11.8930106,0 10.5871056,0 C8.90808488,0 7.41564439,0.264286337 6.10973937,0.792866941 C4.80383435,1.32144754 3.69227711,2.05989466 2.77503429,3.00823045 C1.85779148,3.95656624 1.16598313,5.10698912 0.699588477,6.45953361 C0.233193827,7.81207809 0,9.31229171 0,10.9602195 L0,10.9602195 Z" id="help" fill="#000000"></path></svg>';
$download = '<svg class="center-block" width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="download" fill="#000000"><path d="M16.6463415,29.0091575 C16.7601626,29.1239316 16.902439,29.2100122 17.0447154,29.2673993 L17.0731707,29.2673993 C17.2154472,29.3247863 17.3577236,29.3534799 17.5284553,29.3534799 C17.699187,29.3534799 17.8414634,29.3247863 17.9837398,29.2673993 L18.0121951,29.2673993 C18.1544715,29.2100122 18.296748,29.1239316 18.4105691,29.0091575 L34.601626,12.6825397 C35.0853659,12.1947497 35.0853659,11.4200244 34.601626,10.9322344 C34.1178862,10.4444444 33.3495935,10.4444444 32.8658537,10.9322344 L18.7235772,25.1355311 L18.7235772,1.37728938 C18.7235772,0.688644689 18.1829268,0.143467643 17.5,0.143467643 C16.8170732,0.143467643 16.2764228,0.688644689 16.2764228,1.37728938 L16.2764228,25.1642247 L2.19105691,10.9322344 C1.70731707,10.4444444 0.93902439,10.4444444 0.455284553,10.9322344 C-0.0284552846,11.4200244 -0.0284552846,12.1947497 0.455284553,12.6825397 L16.6463415,29.0091575 L16.6463415,29.0091575 Z" id="Shape"></path><path d="M1.30894309,33.4566545 L33.6910569,33.4566545 C34.3739837,33.4566545 34.9146341,32.9114774 34.9146341,32.2228327 C34.9146341,31.534188 34.3739837,30.989011 33.6910569,30.989011 L1.30894309,30.989011 C0.62601626,30.989011 0.0853658537,31.534188 0.0853658537,32.2228327 C0.0853658537,32.8827839 0.62601626,33.4566545 1.30894309,33.4566545 L1.30894309,33.4566545 Z" id="Shape"></path></g></svg>';
$next = '<svg class="center-block" width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="right-arrow-1" fill="#000000"><path d="M17.5,34.8803419 C27.0726496,34.8803419 34.8803419,27.1025641 34.8803419,17.5 C34.8803419,7.8974359 27.0726496,0.11965812 17.5,0.11965812 C7.92735043,0.11965812 0.11965812,7.92735043 0.11965812,17.5 C0.11965812,27.0726496 7.92735043,34.8803419 17.5,34.8803419 L17.5,34.8803419 Z M17.5,2.57264957 C25.7264957,2.57264957 32.4273504,9.27350427 32.4273504,17.5 C32.4273504,25.7264957 25.7264957,32.4273504 17.5,32.4273504 C9.27350427,32.4273504 2.57264957,25.7264957 2.57264957,17.5 C2.57264957,9.27350427 9.27350427,2.57264957 17.5,2.57264957 L17.5,2.57264957 Z" id="Shape"></path><path d="M13.491453,26.1752137 C13.7307692,26.4145299 14.0299145,26.534188 14.3589744,26.534188 C14.6581197,26.534188 14.9871795,26.4145299 15.2264957,26.1752137 L23.1239316,18.2777778 C23.3632479,18.0384615 23.482906,17.7393162 23.482906,17.4102564 C23.482906,17.0811966 23.3632479,16.7820513 23.1239316,16.542735 L15.2264957,8.64529915 C14.7478632,8.16666667 13.9700855,8.16666667 13.491453,8.64529915 C13.0128205,9.12393162 13.0128205,9.9017094 13.491453,10.3803419 L20.5213675,17.4102564 L13.491453,24.4401709 C13.0128205,24.9188034 13.0128205,25.6965812 13.491453,26.1752137 L13.491453,26.1752137 Z" id="Shape"></path></g></svg>';
$prev = '<svg class="center-block" width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="left-arrow-1" fill="#000000"><path d="M17.5,34.8803419 C27.0726496,34.8803419 34.8803419,27.1025641 34.8803419,17.5 C34.8803419,7.8974359 27.1025641,0.14957265 17.5,0.14957265 C7.8974359,0.14957265 0.14957265,7.92735043 0.14957265,17.5 C0.14957265,27.0726496 7.92735043,34.8803419 17.5,34.8803419 L17.5,34.8803419 Z M17.5,2.57264957 C25.7264957,2.57264957 32.4273504,9.27350427 32.4273504,17.5 C32.4273504,25.7264957 25.7264957,32.4273504 17.5,32.4273504 C9.27350427,32.4273504 2.57264957,25.7264957 2.57264957,17.5 C2.57264957,9.27350427 9.27350427,2.57264957 17.5,2.57264957 L17.5,2.57264957 Z" id="Shape"></path><path d="M19.1452991,26.1752137 C19.3846154,26.4145299 19.6837607,26.534188 20.0128205,26.534188 C20.3119658,26.534188 20.6410256,26.4145299 20.8803419,26.1752137 C21.3589744,25.6965812 21.3589744,24.9188034 20.8803419,24.4401709 L13.8504274,17.4102564 L20.8803419,10.3803419 C21.3589744,9.9017094 21.3589744,9.12393162 20.8803419,8.64529915 C20.4017094,8.16666667 19.6239316,8.16666667 19.1452991,8.64529915 L11.2478632,16.542735 C11.008547,16.7820513 10.8888889,17.0811966 10.8888889,17.4102564 C10.8888889,17.7393162 11.008547,18.0384615 11.2478632,18.2777778 L19.1452991,26.1752137 L19.1452991,26.1752137 Z" id="Shape"></path></g></svg>';
$glosario = '<svg class="center-block" width="28px" height="35px" viewBox="0 0 28 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="padnote" fill="#000000"><path d="M21.0693069,0 L7.45742574,0 C6.81980198,0 6.32079208,0.5 6.32079208,1.13888889 L6.32079208,2.72222222 L1.3029703,2.72222222 C0.665346535,2.72222222 0.166336634,3.22222222 0.166336634,3.86111111 L0.166336634,33.8611111 C0.166336634,34.5 0.665346535,35 1.3029703,35 L26.6970297,35 C27.3346535,35 27.8336634,34.5 27.8336634,33.8611111 L27.8336634,3.86111111 C27.8336634,3.22222222 27.3346535,2.72222222 26.6970297,2.72222222 L22.2059406,2.72222222 L22.2059406,1.13888889 C22.2059406,0.5 21.7069307,0 21.0693069,0 L21.0693069,0 Z M8.59405941,3.86111111 L8.59405941,2.27777778 L19.9326733,2.27777778 L19.9326733,3.86111111 L19.9326733,5.86111111 L8.59405941,5.86111111 L8.59405941,3.86111111 L8.59405941,3.86111111 Z M25.560396,5 L25.560396,32.7222222 L2.43960396,32.7222222 L2.43960396,5 L6.32079208,5 L6.32079208,7 C6.32079208,7.63888889 6.81980198,8.13888889 7.45742574,8.13888889 L21.0693069,8.13888889 C21.7069307,8.13888889 22.2059406,7.63888889 22.2059406,7 L22.2059406,5 L25.560396,5 L25.560396,5 Z" id="Shape"></path><path d="M22.4554455,19.7222222 L6.07128713,19.7222222 C5.43366337,19.7222222 4.93465347,20.2222222 4.93465347,20.8611111 C4.93465347,21.5 5.43366337,22 6.07128713,22 L22.4554455,22 C23.0930693,22 23.5920792,21.5 23.5920792,20.8611111 C23.5920792,20.2222222 23.0930693,19.7222222 22.4554455,19.7222222 L22.4554455,19.7222222 Z" id="Shape"></path><path d="M14.2772277,25.2222222 L6.07128713,25.2222222 C5.43366337,25.2222222 4.93465347,25.7222222 4.93465347,26.3611111 C4.93465347,27 5.43366337,27.5 6.07128713,27.5 L14.249505,27.5 C14.8871287,27.5 15.3861386,27 15.3861386,26.3611111 C15.3861386,25.7222222 14.8871287,25.2222222 14.2772277,25.2222222 L14.2772277,25.2222222 Z" id="Shape"></path><path d="M4.93465347,15.3333333 C4.93465347,15.9722222 5.43366337,16.4722222 6.07128713,16.4722222 L22.4554455,16.4722222 C23.0930693,16.4722222 23.5920792,15.9722222 23.5920792,15.3333333 C23.5920792,14.6944444 23.0930693,14.1944444 22.4554455,14.1944444 L6.07128713,14.1944444 C5.43366337,14.1944444 4.93465347,14.7222222 4.93465347,15.3333333 L4.93465347,15.3333333 Z" id="Shape"></path></g></svg>';
$docs = '<svg class="center-block" width="30px" height="35px" viewBox="0 0 30 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="file" fill="#000000"><path d="M1.38613861,34.8504274 L28.4010954,34.8504274 C29.0794186,34.8504274 29.6102802,34.3119658 29.6102802,33.6239316 L29.6102802,1.34615385 C29.6102802,0.658119658 29.0794186,0.11965812 28.4010954,0.11965812 L8.13987782,0.11965812 C8.05140088,0.11965812 7.93343164,0.11965812 7.84495471,0.14957265 C7.8154624,0.14957265 7.78597009,0.179487179 7.78597009,0.179487179 C7.69749315,0.209401709 7.63850853,0.239316239 7.5500316,0.269230769 C7.52053929,0.299145299 7.49104698,0.299145299 7.46155467,0.329059829 C7.37307773,0.388888889 7.2846008,0.448717949 7.22561618,0.538461538 L0.471876975,8.61538462 C0.383400042,8.70512821 0.32441542,8.82478632 0.265430798,8.94444444 C0.235938487,8.97435897 0.235938487,9.03418803 0.235938487,9.06410256 C0.206446177,9.15384615 0.206446177,9.24358974 0.176953866,9.33333333 L0.176953866,9.39316239 L0.176953866,33.5940171 C0.176953866,34.3119658 0.737307773,34.8504274 1.38613861,34.8504274 L1.38613861,34.8504274 Z M6.93069307,4.6965812 L6.93069307,8.22649573 L3.98146198,8.22649573 L6.93069307,4.6965812 L6.93069307,4.6965812 Z M2.59532336,10.6495726 L8.13987782,10.6495726 C8.81820097,10.6495726 9.34906257,10.1111111 9.34906257,9.42307692 L9.34906257,2.57264957 L27.1919107,2.57264957 L27.1919107,32.3974359 L2.59532336,32.3974359 L2.59532336,10.6495726 L2.59532336,10.6495726 Z" id="Shape"></path><path d="M23.5938487,13.3119658 L6.1933853,13.3119658 C5.51506214,13.3119658 4.98420055,13.8504274 4.98420055,14.5384615 C4.98420055,15.2264957 5.51506214,15.7649573 6.1933853,15.7649573 L23.5938487,15.7649573 C24.2721719,15.7649573 24.8030335,15.2264957 24.8030335,14.5384615 C24.8030335,13.8504274 24.2721719,13.3119658 23.5938487,13.3119658 L23.5938487,13.3119658 Z" id="Shape"></path><path d="M23.5938487,19.2350427 L6.1933853,19.2350427 C5.51506214,19.2350427 4.98420055,19.7735043 4.98420055,20.4615385 C4.98420055,21.1495726 5.51506214,21.6880342 6.1933853,21.6880342 L23.5938487,21.6880342 C24.2721719,21.6880342 24.8030335,21.1495726 24.8030335,20.4615385 C24.8030335,19.8034188 24.2721719,19.2350427 23.5938487,19.2350427 L23.5938487,19.2350427 Z" id="Shape"></path></g></svg>';
$checkon = '<svg class="center-block" width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="check" fill="#000000"><path d="M17.3504274,34.7307692 C26.9230769,34.7307692 34.7307692,26.9529915 34.7307692,17.3504274 C34.7307692,7.74786325 26.9529915,0 17.3504274,0 C7.74786325,0 0,7.77777778 0,17.3504274 C0,26.9230769 7.77777778,34.7307692 17.3504274,34.7307692 L17.3504274,34.7307692 Z M17.3504274,2.42307692 C25.5769231,2.42307692 32.2777778,9.12393162 32.2777778,17.3504274 C32.2777778,25.5769231 25.5769231,32.2777778 17.3504274,32.2777778 C9.12393162,32.2777778 2.42307692,25.5769231 2.42307692,17.3504274 C2.42307692,9.12393162 9.12393162,2.42307692 17.3504274,2.42307692 L17.3504274,2.42307692 Z" id="Shape"></path><path d="M23.1239316,25.2478632 C23.4230769,25.2478632 23.7521368,25.1282051 23.991453,24.8888889 C24.4700855,24.4102564 24.4700855,23.6324786 23.991453,23.1538462 L12.9615385,16.1239316 L16.991453,12.0940171 C17.4700855,11.6153846 17.4700855,10.8376068 16.991453,10.3589744 C16.5128205,9.88034188 15.7350427,9.88034188 15.2564103,10.3589744 L10.3589744,15.2564103 C10.1196581,15.4957265 10,15.7948718 10,16.1239316 C10,16.4529915 10.1196581,16.7521368 10.3589744,16.991453 L22.2564103,24.8888889 C22.4957265,25.1282051 22.7948718,25.2478632 23.1239316,25.2478632 Z" id="Shape" transform="translate(17.175214, 17.623932) rotate(-90.000000) translate(-17.175214, -17.623932) "></path></g></svg>';
$checkoff = '<svg class="center-block" width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="check-off" fill="#000000"><path d="M17.5,34.8205128 C27.042735,34.8205128 34.8205128,27.042735 34.8205128,17.5 C34.8205128,7.95726496 27.042735,0.179487179 17.5,0.179487179 C7.95726496,0.179487179 0.179487179,7.95726496 0.179487179,17.5 C0.179487179,27.042735 7.95726496,34.8205128 17.5,34.8205128 L17.5,34.8205128 Z M17.5,2.6025641 C25.6965812,2.6025641 32.3974359,9.27350427 32.3974359,17.5 C32.3974359,25.7264957 25.7264957,32.3974359 17.5,32.3974359 C9.27350427,32.3974359 2.6025641,25.6965812 2.6025641,17.5 C2.6025641,9.3034188 9.3034188,2.6025641 17.5,2.6025641 L17.5,2.6025641 Z" id="Shape"></path></g></svg>';
$more = '<svg class="center-block" width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="add" fill="#000000"><path d="M17.5,0.14957265 C7.92735043,0.14957265 0.11965812,7.92735043 0.11965812,17.5 C0.11965812,27.0726496 7.8974359,34.8504274 17.5,34.8504274 C27.0726496,34.8504274 34.8504274,27.0726496 34.8504274,17.5 C34.8504274,7.92735043 27.0726496,0.14957265 17.5,0.14957265 L17.5,0.14957265 Z M17.5,32.4273504 C9.27350427,32.4273504 2.57264957,25.7264957 2.57264957,17.5 C2.57264957,9.27350427 9.27350427,2.57264957 17.5,2.57264957 C25.7264957,2.57264957 32.4273504,9.27350427 32.4273504,17.5 C32.4273504,25.7264957 25.7264957,32.4273504 17.5,32.4273504 L17.5,32.4273504 Z" id="Shape"></path><path d="M25.4871795,16.1239316 L18.7264957,16.1239316 L18.7264957,9.33333333 C18.7264957,8.64529915 18.1880342,8.10683761 17.5,8.10683761 C16.8119658,8.10683761 16.2735043,8.64529915 16.2735043,9.33333333 L16.2735043,16.0940171 L9.51282051,16.0940171 C8.82478632,16.0940171 8.28632479,16.6324786 8.28632479,17.3205128 C8.28632479,18.008547 8.82478632,18.5470085 9.51282051,18.5470085 L16.2735043,18.5470085 L16.2735043,25.3076923 C16.2735043,25.9957265 16.8119658,26.534188 17.5,26.534188 C18.1880342,26.534188 18.7264957,25.9957265 18.7264957,25.3076923 L18.7264957,18.5470085 L25.4871795,18.5470085 C26.1752137,18.5470085 26.7136752,18.008547 26.7136752,17.3205128 C26.7136752,16.6324786 26.1752137,16.1239316 25.4871795,16.1239316 L25.4871795,16.1239316 Z" id="Shape"></path></g></svg>';
$select = '<svg class="center-block" version="1.1" id="arrow-bottom" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 35 35" enable-background="new 0 0 35 35" xml:space="preserve"><g id="right-arrow-1"><path id="Shape_1_" d="M8.734,12.684c-0.238,0.24-0.358,0.539-0.358,0.868c0,0.299,0.12,0.628,0.358,0.867l7.898,7.897 c0.238,0.239,0.538,0.358,0.867,0.358s0.628-0.119,0.867-0.358l7.897-7.897c0.479-0.479,0.479-1.256,0-1.735 c-0.479-0.479-1.256-0.479-1.734,0l-7.03,7.03l-7.03-7.03C9.991,12.205,9.213,12.205,8.734,12.684L8.734,12.684z"/></g></svg>';
$square = '<svg class="center-block" version="1.1" id="square" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="5px" height="5px" viewBox="0 0 5 5" enable-background="new 0 0 5 5" xml:space="preserve"><rect x="0" y="0" fill="#ff0000" width="5" height="5"/></svg>';
$textAum = '<svg class="center-block" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 35 35"><title>enlargetext</title><rect x="27.96" y="10.03" width="1.86" height="12.05" rx="0.93" ry="0.93" transform="translate(44.88 -12.95) rotate(90)"/><rect x="27.96" y="10.03" width="1.86" height="12.05" rx="0.93" ry="0.93" transform="translate(57.72 32) rotate(-180)"/><path d="M22,33.49L12.17,0.89A1.11,1.11,0,0,0,11,.11,1.11,1.11,0,0,0,9.91.89L0.12,33.49a1.12,1.12,0,1,0,2.15.65L6.08,21.46H16l3.81,12.68A1.12,1.12,0,1,0,22,33.49ZM6.62,19.65L11,4.94l4.42,14.71H6.62Z" transform="translate(-0.07 -0.11)"/></svg>'
$textDis = '<svg class="center-block" xmlns="http://www.w3.org/2000/svg" width="34.85" height="34.83" viewBox="0 0 34.85 34.83"><title>reducetext</title><rect x="27.96" y="10.03" width="1.86" height="12.05" rx="0.93" ry="0.93" transform="translate(44.88 -12.95) rotate(90)"></rect><path d="M22,33.49L12.17,0.89A1.11,1.11,0,0,0,11,.11,1.11,1.11,0,0,0,9.91.89L0.12,33.49a1.12,1.12,0,1,0,2.15.65L6.08,21.46H16l3.81,12.68A1.12,1.12,0,1,0,22,33.49ZM6.62,19.65L11,4.94l4.42,14.71H6.62Z" transform="translate(-0.07 -0.11)"></path></svg>'
$iconMenu ='<svg id="menuDesk" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 19.94"><defs><style>.menuCls-1{fill:#1E1E1E;}</style></defs><title>icono_summary</title><rect class="menuCls-1" width="5" height="5" rx="1" ry="1"/><rect class="menuCls-1" y="7.47" width="5" height="5" rx="1" ry="1"/><rect class="menuCls-1" y="14.94" width="5" height="5" rx="1" ry="1"/><rect class="menuCls-1" x="5.71" width="14.29" height="5" rx="1" ry="1"/><rect class="menuCls-1" x="5.71" y="7.47" width="14.29" height="5" rx="1" ry="1"/><rect class="menuCls-1" x="5.71" y="14.94" width="14.29" height="5" rx="1" ry="1"/></svg>'

 function cargar(){

   	//INICIALIZO EL LMS
   	if (escormizar=="si"){
   		doLMSInitialize();
   	}
	cargarInterfaz();
	cargarPagina();
	pintarPaginado();

	//Para animar la ayuda si no se ha visitado
	if (escormizar=="si"){
		if(estadoAyudaAudio("estadoayuda")=="novista"){
			$('.icon-ayuda').addClass("wow");
			$('.icon-ayuda').addClass("animated");
			new WOW().init();
		}
	}

	//Función para que funcionen los tooltip
	$(function(){
	  $('[data-toggle="tooltip"]').tooltip() 
	});

	//Para que muestre el título del índice en el idioma correcto
	$('.nav-titulo p').html(tituloIndice);

	//Para que muestre los tooltip en el idioma correcto
	$(".icon-audio").attr("data-original-title", tooltipaudio);
	$(".icon-ayuda").attr("data-original-title", tooltipayuda);
	$(".icon-glosario").attr("data-original-title", tooltipglosario);
	$(".icon-docs").attr("data-original-title", tooltipdocumentacion);
	$(".icon-reducetext").attr("data-original-title", tooltipreducirtexto);
	$(".icon-enlargetext").attr("data-original-title", tooltipaumentartexto);

	//Desplegar/Plegar el sumario en version para móvil
    $('#btn-nav-phone').on('click',function(){
		$('.nav-phone-ul, .nav-lista').slideToggle(500);
	});

	//Plegar el sumario en version para móvil cuando clico en un subtema
    $('.nav-subfila').on('click',function(){
    	if ($(this).hasClass("nav-fila-bloqueada")){
    	}
    	else{
    		$('.nav-phone-ul, .nav-lista').slideToggle(500);
    	}
	});
    
    //Plegar el sumario en version para móvil cuando clico en un tema
    $('.nav-fila').on('click',function(){
    	
		if ($(this).hasClass("fila-despegable")== true || $(this).hasClass("nav-subfila")==true || $(this).hasClass("nav-fila-bloqueada")){
		}
		else{
			$('.nav-phone-ul, .nav-lista').slideToggle(500);
		}
	});

    

	
	//Desplegar sublistas
	$('.nav-fila').on('click',function(){

		
		if ($(this).hasClass("fila-despegable")){
			$item = $(this).val();
					for(i=0; i<$('.fila-despegable').length; i++){

						if($('.fila-despegable')[i].value!=$item){
							$('.fila-despegable')[i].nextSibling.classList.add('menuSube');

						}
						else{
							$('.fila-despegable')[i].nextSibling.classList.remove('menuSube');
						}
					}
					$('.menuSube').slideUp(500);

					$('.subtema' + $item).slideToggle(500);
				}
				else if (!$(this).hasClass("fila-despegable") && $(this).hasClass("nav-fila-desktop")){
					$('.nav-desktop-subFilas').slideUp(500);
				}
		
	});


	//Para ocultar el contenido del menú 
	$(window).resize(function() {
	  	if($(window).width() >= 991){
			$('.nav-phone-ul').css('display','none');
			$('.nav-phone-subFilas').css('display','none');
			//$('.nav-desktop-subFilas').css('display','none');
		}

	});

	desplegarIndice();
	eliminarEstiloCursor();

	
}

/* 
** Function: cargarInterfaz();
** Description: Pintar contenido
============================================================================= */
function cargarInterfaz(){

	//pintar titulo de la unidad
	$('h1').html(nombreUnidad);
	recogerDatos();
	pintarSumario();
	navegarIndice();
	pintarIconos();
	//cambiarIdioma();
}


/* 
** Function: recogerDatos();
** Description: Recoger datos del archivo "object.js" para trabajar con ellos
============================================================================= */
function recogerDatos(){
	//Metemos los datos de la unidad en una array bidimensional
	for(i=0; i<indice.length; i++){

	      $unidad.push([]);
	      $unidad[i].push(indice[i].tema, indice[i].subtema);	
    }

}

/* 
** Function: cambiarIdioma();
** Description: Cambiar el idioma
============================================================================= */
/*function cambiarIdioma(){
	//Selección de Idioma
	$.ajax({
		type: 'GET',
		url: '../assets/js/languages.xml',
		dataType: 'xml',
		success: function(xml) {

		 	$(xml).find('language[idioma="'+ idioma +'"]').each(function(){ 
		 	
		 		//Rescatamos todos los textos del idioma y los pintamos en el html
		 		$('.icon-ayuda').attr('data-original-title', $(this).find('buttons ayuda').text());
		 		$('.icon-audio').attr('data-original-title', $(this).find('buttons audio').text());
		 		$('.icon-cerrar').attr('data-original-title', $(this).find('buttons cerrar').text());
		 		$('.icon-docs').attr('data-original-title', $(this).find('buttons documentacion').text());
		 		$('.icon-glosario').attr('data-original-title', $(this).find('buttons glosario').text());
		 		$('.icon-enlargetext').attr('data-original-title', $(this).find('buttons aumentartexto').text());
		 		$('.icon-reducetext').attr('data-original-title', $(this).find('buttons reducirtexto').text());
		 		$('.nav-titulo p').html($(this).find('elementos sumario').text());
		 		
		 	}); 
		}
	});
}*/





/* 
** Function: pintarIconos();
** Description: Pintar todos los iconos en svg
============================================================================= */
function pintarIconos(){
	//pintar los iconos svg
	$('.icon-cerrar').html($cerrar);
	$('.icon-nav').html($menu);
	$('.icon-audio').html($audioOn);
	$('.icon-ayuda').html($ayuda);
	$('.icon-glosario').html($glosario);
	$('.icon-docs').html($docs);
	$('.icon-descargas').html($download);
	$('.icon-reducetext').html($textDis);
  	$('.icon-enlargetext').html($textAum);
	$('.icon-next').html($next);
	$('.icon-prev').html($prev);
	$('.icon-nav-check').html($checkoff);
	$('.icon-nav-more').html($select);
	$('.nav-visto a, .nav-activo a').html($checkon);
	$('.definicion').html($docs);
	$('.iconMenu').html($iconMenu);
}


/* 
** Function: pintarSumario();
** Description: Pintar la página correspondiente
============================================================================= */
function pintarSumario(){
	$tema = ""; j = 0; k = 0;

	for(i=0; i<$unidad.length; i++){

		if($unidad[i][0] != $tema){

			//Pintamos los temas en el sumario
			j++;
	     	$(".nav-desktop-ul").append("<li id="+(i+1)+" class='nav-fila nav-fila-desktop' data-id="+(i+1)+"><a class='icon-nav-check'></a><h5>" + $unidad[i][0] + "</h5><div></div></li>");
	     	$(".nav-phone-ul").append("<li id="+(i+1)+" class='nav-fila nav-fila-phone' data-id="+(i+1)+"><a class='icon-nav-check'></a><h5>" + $unidad[i][0] + "</h5><div></div></li>");
	     	//Añadimos un id que será la pagina a mostrar cuando cliquemos esa fila
	     	$(".nav-desktop-ul >.nav-fila a").last().addClass("icon-tema" + (i+1));
	     	$(".nav-phone-ul >.nav-fila a").last().addClass("icon-tema" + (i+1));
	     	$(".icon-tema" + (i+1)).attr("id",(i+1));
	     	if($unidad[i][1] != ""){
	     		k = 0;
	     		k++;
			}

			$tema = $unidad[i][0];

		}else if($unidad[i][1] != ""){

			//Pintamos los subtemas
			k++;
			if(k == 2){
				$prueba = $unidad[--i][1];
				$(".nav-desktop-ul").append("<ul class='nav-desktop-subFilas subtema" + j + "'><li class='nav-fila nav-subfila' data-id="+(i+1)+"><a class='icon-nav-check'></a><h6>" + $prueba + "</h6></li></ul>");
				$(".nav-phone-ul").append("<ul class='nav-phone-subFilas subtema" + j + "'><li class='nav-fila nav-subfila' data-id="+(i+1)+"><a class='icon-nav-check'></a><h6>" + $prueba + "</h6></li></ul>");
				//Añadimos el icono en los temas que llevan mas de un subtema, para poder desplegar
				$(".nav-fila-desktop >div").last().addClass("icon-nav-more icon-nav-more");
				$(".nav-fila-phone >div").last().addClass("icon-nav-more icon-nav-more");
				//Añadimos un valor a cada fila y su contenido para saber que ul desplegar
				$(".nav-desktop-ul >.nav-fila").last().addClass("fila-despegable fila-despegable" + j);
				$(".nav-phone-ul >.nav-fila").last().addClass("fila-despegable fila-despegable" + j);
				$(".fila-despegable" + j).val(j);
				//Añadimos un valor que será la pagina a mostrar cuando cliquemos esa fila
				$(".nav-desktop-subFilas >.nav-subfila").last().addClass("nav-subfila" + (i+1));
				$(".nav-phone-subFilas >.nav-subfila").last().addClass("nav-subfila" + (i+1));
				$(".nav-desktop-subFilas >.nav-subfila" + (i+1)).val((i+1));
				$(".nav-phone-subFilas >.nav-subfila" + (i+1)).val((i+1));

			}else{

				$(".subtema" + j).append("<li class='nav-fila nav-subfila' data-id="+(i+1)+"><a class='icon-nav-check'></a><h6>" + $unidad[i][1] + "</h6></li>");
				$(".subtema" + j > ".nav-fila").last().addClass("nav-fila" + (i+1));
				//Añadimos un valor que será la pagina a mostrar cuando cliquemos esa fila
				$(".nav-desktop-subFilas >.nav-subfila").last().addClass("nav-subfila" + (i+1));
				$(".nav-phone-subFilas >.nav-subfila").last().addClass("nav-subfila" + (i+1));
				$(".nav-desktop-subFilas >.nav-subfila" + (i+1)).val((i+1));
				$(".nav-phone-subFilas >.nav-subfila" + (i+1)).val((i+1));
			}

		}else{

			$(".nav-desktop-ul").append("<ul class='nav-desktop-subFilas subtema" + j + "'></ul>");
			$(".nav-phone-ul").append("<ul class='nav-phone-subFilas subtema" + j + "'></ul>");
			//Añadimos el icono en los temas que llevan mas de un subtema, para poder desplegar
			$(".nav-fila-desktop >div").last().addClass("icon-nav-more icon-nav-more");
			$(".nav-fila-phone >div").last().addClass("icon-nav-more icon-nav-more");
			//Añadimos un valor a cada fila y su contenido para saber que ul desplegar
			$(".nav-desktop-ul >.nav-fila").last().addClass("fila-despegable fila-despegable" + j);
			$(".nav-phone-ul >.nav-fila").last().addClass("fila-despegable fila-despegable" + j);
			$(".fila-despegable" + j).val(j);
			//Añadimos un valor que será la pagina a mostrar cuando cliquemos esa fila
			$(".nav-desktop-ul >.subtema" + j >".nav-subfila").last().addClass("nav-subfila" + (i+1));
			$(".nav-phone-ul >.subtema" + j >".nav-subfila").last().addClass("nav-subfila" + (i+1));
			$(".nav-desktop-ul >.subtema" + j >".nav-subfila" + (i+1)).val((i+1));
			$(".nav-phone-ul >.subtema" + j >".nav-subfila" + (i+1)).val((i+1));			
		}
    }
}
 


///////////	CODIGO ELISEO >>>>>>>>>>>>>>>>>>>>



/**
 * Función que obtiene datos relativos al test.
 * Estos datos que se obtienen son referentes a los intentos realizados por el alumno
 * y las respuestas acertadas.
 * @param {*} data -> Parámetro que recibe la función haciendo referencia a los datos 
 * que se quieren obtener (intentosrealizados / preguntasacertadas)
 */
function obtenerdatosTest(data){
	if(escormizar=="si"){
		if(doLMSGetValue("cmi.suspend_data") == ""){

		}else{
			_localLocation = doLMSGetValue("cmi.suspend_data");
		
			//SI SE ACABA DE EMPEZAR EL CURSO
			if (_localLocation == "") {
				doLMSSetValue('cmi.suspend_data', 'cont=||array=||intentosjuegos=||puntosjuegos=||ceros=||valorespreguntas='+JSON.stringify(arrayopcionesintento)+'||testRepetido='+testrepetido.toString()+'||paginasVisitadasEnNavegacionLibre='+JSON.stringify(paginasVisitadasEnNavegacionLibre));
				_localLocation = doLMSGetValue("cmi.suspend_data");
			}

			resultado=_localLocation.split("||");

			switch (data) {

				case "intentosrealizados":
					parte1=resultado[0]; //Devuelve el número de intentos realizados por el alumno
					intentosrealizados=(parte1.split("="))[1];
					return parseInt(intentosrealizados);

				case "preguntasacertadas":
					parte1=resultado[1]; //Devuelve una cadena con las preguntas acertadas por el alumno
					preguntasacertadas=(parte1.split("="))[1];
					return preguntasacertadas;

				case "puntuacionFinTestAlumno":
					//nota = 
					break;

				case "ceros":
					$ceros = (resultado[4].split("="))[1];//Devuelve el nombre del fichero html del test
					
					return $ceros;

				case "estadopreguntastest":
					//return stripslashes(doLMSGetValue("cmi.suspend_data").split("||")[5].split("=")[1]);
					
					return JSON.parse(stripslashes(((doLMSGetValue("cmi.suspend_data").split("||")[5]).split("="))[1]));

				case "numPaginasVistasEnProgreso":
					return JSON.parse(stripslashes(((doLMSGetValue("cmi.suspend_data").split("||")[7]).split("="))[1]));

				default:
					//
					// Default
					//
					break;
			}
		}
	}
	
	
}


/**
 * Función que obtiene el numero de paginas totales que tiene el test.
 */
function obtenerNumeroPaginasTest(){
	
	paginastotalestest = 0;
	
	if(escormizar=="si"){
		/*if (datostest[0].eliminaracertadas=="si"){
			var estadosPreguntas = obtenerdatosTest("estadopreguntastest");
			if(estadosPreguntas.indexOf("sincontestar")>=0){//Con esto somos capaces de saber si se está realizando el test por primera vez o no ya que si se ha hecho ya alguna vez antes en el array no deberia apaarecer por ningun lado "sincontestar", solo aparecerá o "acierto" o "fallo"
				if(testTerminado == true){
					paginastotalestest = indice.length + datos.length;
				}else{
					paginastotalestest=datostest[0].numeropreguntas;
					ultimapagina=paginastotalestest-1;	
				}
				
			}else{
				if(testTerminado == true){
					paginastotalestest = indice.length + datos.length;
				}else{
					for(var i=0; i<estadosPreguntas.length; i++){
						if(estadosPreguntas[i]!="acierto"){
							paginastotalestest++;
						}
					}
				}
				
			}

		}
		else{
			paginastotalestest = datostest[0].numeropreguntas;	
			ultimapagina=datostest[0].numeropreguntas+1;
		}*/



		if (datostest[0].eliminaracertadas=="si"){
			//--------------------------------------
			var estadosPreguntas = obtenerdatosTest("estadopreguntastest");
			var numAciertos = 0;
			var numSinContestar = 0;
			var numFallos = 0;

			for(var i=0; i<estadosPreguntas.length; i++){
				if (estadosPreguntas[i] == "acierto") {
					numAciertos++;
				}else if (estadosPreguntas[i] == "sincontestar") {
					numSinContestar++;
				}else if(estadosPreguntas[i] == "fallo"){
					numFallos++;
				}
			}
			//--------------------------------------
/*
			//---->>>>Paginas totales quitando las preguntas que se han contestado bien
			if(numSinContestar > 0){//Es la primera vez que se hace el test
				paginastotalestest = (indice.length - 1) + estadosPreguntas.length;//Numero paginas por defecto, como si fuese el test nuevo
			}else{//El test se esta repitiendo o sigue siendo la primera vez y ya ha contestado a todas las preguntas
				if($pagina > (indice.length - 1) + estadosPreguntas.length){//sigue siendo la primera vez y ya ha contestado a todas las preguntas
					paginastotalestest = (indice.length - 1) + estadosPreguntas.length;
				}else{//El test esta siendo reintentado, por lo que descontamos de paginas totales aquellas paginas en las que la pregunta se haya acertado
					paginastotalestest = (indice.length - 1) + estadosPreguntas.length - numAciertos;
				}
			}
			*/
			paginastotalestest = estadosPreguntas.length + 1;//Se le suma 1 por la diapositiva del resultado del test
		}else{
			//---->>>>Paginas totales SIN QUITAR las preguntas que se han contestado bien
			paginastotalestest = estadosPreguntas.length + 1;//Se le suma 1 por la diapositiva del resultado del test
		}

		

	}
	


	
	return paginastotalestest;
}
//////////////////////////////////////////////////





/* 
** Function: cargarPagina();
** Description: Pintar la página correspondiente, con sus títulos
============================================================================= */
function cargarPagina(){
	contenedorTest(); //analizamos si estamos en el test, o en la unidad.

	$ceros = "";

	if($pagina == 0){
		//Primera vez que veo la unidad
		$pagina = 1;
		$('.icon-prev svg').hide();

	}else if(!(($pagina) < ($paginaInicioTest))){//QUITAR LA EXCLAMACION DE DELANTE!!!
		//No es la primera vez que veo la unidad y no se ha completado la unidad completa
	}

	if (parseInt($pagina) > parseInt(indice.length)) {
			$('.progreso').css('display', 'none');
			$('.barra').css('display', 'none');		// Esto hace que desaparezca la barra de progreso durante el test
			$('.footer-phone .progreso').css('display', 'none');
			$('.num-pagina').css('color', 'transparent');
		}
	else {

		$('.progreso').css('display', 'block');
		$('.barra').css('display', 'block');	
		$('.footer-phone .progreso').css('display', 'block');
		$('.num-pagina').css('color', '#68655C');
		$('.footer-phone .num-pagina').css('color', 'white');
	}
	
	//Ocultamos los botones de siguiente y atrás
	if($pagina != $paginaInicioTest-1 && $pagina != 1){//A la variable paginasTotales se le resta 1 porque en realidad
		//MUESTRA TODAS LA PAGINAS DE LA UNIDAD Y EL TEST, SALVO LA PRIMERA PAGINA DE LA UNIDAD QUE SE MUESTRA EN EL ULTIMO ELSE Y LA ULTIMA QUE MUESTRA EL RESULTADO DEL TEST QUE SE MUESTRA EN EL SEGUNDO ELSE
		
		//hay una pagina menos de las que contiene el array indice ya que la ultima pagina contiene todo el test y por lo tanto esta pagina
		//no se debe tener en cuenta. Seguidamente se le suma lo que devuelve el metodo obtenerNumeroPaginasTest() que son el numero de paginas
		//que tiene el test.
		$('.icon-prev svg').show();
		$('.icon-next svg').show();

	}else if($pagina == $paginaInicioTest-1){//Explicacion mencionada 2 lineas mas arriba.
		//$('.icon-next svg').hide();
		//MUESTRA LA PAGINA FINAL DEL TEST CON LOS RESULTADOS

		//PONGO EL RESULTADO DEL TEST
		$('h2').html("");
		$('h3').html("");
		//$('.test').html('<div id="resultado"><h1>'+pantallaFinalTest[0].mensajefinal+'</h1><span>'+"8"+" %"+'</span><p style="text-align: center">'+pantallaFinalTest[0].aprobado+'</p></div>');//Donde pone 8 hay que poner la variable notas que todavia no existe
		//aprobadoSuspenso();
	}else if($pagina == 1){
		//MUESTRA LA PRIMERA PAGINA DE LA UNIDAD

		$('.icon-prev svg').hide();
	}
	
	//Pintamos títulos (tema y subtema)
	if($pagina > $paginaInicioTest-1){//A paginas totales se le resta 1 porque la unidad en realidad tiene una pagina menos ya que la ultima pagina esta reservada para el test completo.
		if($pagina == $paginaInicioTest){
			$('.banda3 h2').html(txtTituloTest);
			$('.banda3 h3').html("");
		}else{
			$('.banda3 h2').html(txtTituloTest);
			$('.banda3 h3').html("");
			//Solo pongo titulo del test (sin subtitulo) puesto que ya estoy dentro del test.
		}
	}else{
		$pag = $pagina - 1;

		$('.banda3 h2').html($unidad[$pag][0]);
		$('.banda3 h3').html($unidad[$pag][1]);
		$("#btn-next").addClass("btn-next");//Con estas dos lineas lo que hacemos es deshabilitar el boton de siguiente
		$("#btn-next-mobile").addClass("btn-next");
		$("#btn-next").removeClass("btn-next-inactive");
		$("#btn-next-mobile").removeClass("btn-next-inactive");
		//Entonces sabiendo esto, lo que hay que programar es:
		//1)Prohibir que pueda volver a la teoria una vez se entre en el test, es decir, cuando este en la diapositiva de la interrogacion.
		$("#btn-prev").addClass("btn-prev");
		$("#btn-prev-mobile").addClass("btn-prev");
		$("#btn-prev").removeClass("btn-prev-inactive");
		$("#btn-prev-mobile").removeClass("btn-prev-inactive");


		$('.banda3 h2').html($unidad[$pag][0]);
		$('.banda3 h3').html($unidad[$pag][1]);

		/*$('.banda3 h2').html("Banda 3");
		$('.banda3 h3').html("Banda 33");*/
	}
	

	//Contamos cuantos digitos tiene $pagina y añadimos ceros
	//if($pagina > $paginaInicioTest){
		//No modifico la variable que contiene los ceros para los ficheros html puesto que de aqui en adelante ya no se van a mostrar nuevos html.
		//El contnido de cada pagina del test cambia sobre un mismo html.
	//}else{
		if($pagina <= 9){
			$ceros = "00";

		}else if($pagina > 9){
			$ceros = "0";
		}
	//}


	
	var paginaAMostrar;
	if($pagina > indice.length){
		paginaAMostrar = indice.length;
	}else{
		paginaAMostrar = $pagina;
	}
	

	$('.contenedor-unidad').load('../unidad/' + $ceros + paginaAMostrar + '.html', function(){
		controlScroll();
		
		//1) Compruebo en que pagina estoy del test para poner o no la página de introducción al mismo
		if($pagina == indice.length && testEmpezado==false){
			/*Controlo el valor de testEmpezado para que si es false
			ponga la diapositiva de la interrogacion del test y $pagina-- ya que esta diapositiva no se debe sumar en
			la paginacion, de manera que la diapositiva de la interrogacion y la diapostiva de la primera pregunta del
			test tienen el mismo numero de pagina.*/
			if(repetirTest == true){
				puntuacion = 0;
			}
			
			//Pinto la pagina de introduccion al test
			$('.contenedor-interrogacion').append($interrogacion);
			//Reseteo la variable de contadorDiapositivasTest a 0
			contadorDiapositivasTest = 0;

			if(escormizar=="si"){
				notacorte = datostest[0].aprobadonota;
				if(doLMSGetValue('cmi.core.score.raw')!="" && doLMSGetValue('cmi.core.score.raw')!=0 && Math.round(parseFloat(doLMSGetValue('cmi.core.score.raw')))< notacorte){
					puntuacion = 0;
					puntuacion+=parseFloat(doLMSGetValue('cmi.core.score.raw'));
					doLMSSetValue('cmi.core.score.raw', 0);//Retauro score.raw a 0 para que no entre en el if cuando no se haya reiniciado o cerrado el test puesto que cada vez que pasamos de pregunta siempre cumpliria la condicion de este if y sumaria constantemente el valor almacenado en score.raw.
					doLMSCommit();
				}
			}
		}else if ($pagina >= indice.length){//El objetivo de este if es comprobar si la pagina actual en la que se encuentra el alumno es la misma que la pagina que corresponde al Test
			testEmpezado = true;
			if($pagina == indice.length){
				if($pagina <= indice.length || (arrayopcionesintento[contadorDiapositivasTest]=="acierto" && contadorDiapositivasTest < datos.length)){//Resto 1 puesto que necesito saber el valor de la pagina anterior que acabo de contestar, no de la actual que todavia no ha sido contestada
					if(paginasVisitadasEnNavegacionLibre.indexOf($pagina)==-1){
						paginasVisitadasEnNavegacionLibre.push(parseInt($pagina));
					}
					
				}
				$pagina++;
				//Solo pongo titulo del test (sin subtitulo) puesto que ya estoy dentro del test.
				$('.banda3 h2').html(txtTituloTest);
				$('.banda3 h3').html("");
				pintarPaginado();
			}
			//Tengo que poner en marcha la maquinaria del test antiguo que se encargaba de mostrar el contenido de la pagina de un test,
			//cada vez que se pase de pagina dentro del test habra que buscar la manera de actualizar el paginado del footer.
			//$('.test').html('<div id="introduccionTest" style="text-align:center"><svg xmnls="http://www.w3.org/2000/svg" viewBox="0 0 461.63 461.63"><title>examen</title></div>');


			//PINTAMOS EL CONTENIDO DE DEL TEST
			
			$("#paginainicio").css("display", "none");
			

			//Pongo el boton de avanzar y retroceder deshabilitados
			$("#btn-next").removeClass("btn-next");//Con estas dos lineas lo que hacemos es deshabilitar el boton de siguiente
			$("#btn-next-mobile").removeClass("btn-next");
			$("#btn-next").addClass("btn-next-inactive");
			$("#btn-next-mobile").addClass("btn-next-inactive");
			//Entonces sabiendo esto, lo que hay que programar es:
			//1)Prohibir que pueda volver a la teoria una vez se entre en el test, es decir, cuando este en la diapositiva de la interrogacion.
			$("#btn-prev").removeClass("btn-prev");
			$("#btn-prev-mobile").removeClass("btn-prev");
			$("#btn-prev").addClass("btn-prev-inactive");
			$("#btn-prev-mobile").addClass("btn-prev-inactive");
			//2)Prohibir avanzar mientras no se haya marcado ninguna respuesta en la pregunta.

			//3)Habilitar el boton de siguiente cuando se haya marcado alguna respuesta.
			

			//Empiezo a pintar la pregunta correspondiente
			
			if(contadorDiapositivasTest < datos.length && $pagina != $paginaInicioTest){
				

				while(pintadoPregunta == false && contadorDiapositivasTest < datos.length){
					
					if(arrayopcionesintento[contadorDiapositivasTest] != "acierto"){/*Entra en este if siempre que se quiera
						mostrar la pregunta, es decir, que no se haya acertado, si el valor es sincontestar o fallo, se mostrará.*/
						pintadoPregunta = true;//Pongo la variable a true para que salga del bucle
						
						
						//Pinto preguntas
						$(".listarespuestas").html("");
						$("#pregunta").html(datos[contadorDiapositivasTest].pregunta);
						for (i=0; i<datos[contadorDiapositivasTest].opciones.length; i++){
							$(".listarespuestas").append('<li><input id="r0_'+i+'" name="key1" value="'+datos[contadorDiapositivasTest].opciones[i]+'" class="boton inputTest" type="radio"><label for="r0_'+i+'" class="txtRespuesta">'+datos[contadorDiapositivasTest].opciones[i]+'</label></li>')
						}

						//Asignamos los escuchadores a los elementos de la lista para repsponder. Esto escuchadores llamaran a la funcion donde se realiza la parte logica
						var lis = document.querySelector(".listarespuestas").getElementsByTagName("li");
						$("input").each(function(index) {
								$(this).on("click", function(){
									var a = $(this).attr('id');
									corregirPregunta(a);
								});
						});


						calcularResultadosTest();
					}else{
						if(($pagina <= indice.length || (arrayopcionesintento[contadorDiapositivasTest]=="acierto" && contadorDiapositivasTest < datos.length)) && paginasVisitadasEnNavegacionLibre.indexOf($pagina)==-1){//Resto 1 puesto que necesito saber el valor de la pagina anterior que acabo de contestar, no de la actual que todavia no ha sido contestada
							paginasVisitadasEnNavegacionLibre.push(parseInt($pagina));
						}
						contadorDiapositivasTest++;
					}
					if(contadorDiapositivasTest >= datos.length){
						testTerminado = true;
						mostrarResultadosTest();
						pintarPaginado();
					}
				}

				

				pintadoPregunta = false;//Una vez fuera del while restauro la variable pintadoPregunta a su valor por defecto, false.

				
				
			}else{
				testTerminado = true;
				mostrarResultadosTest();
				pintarPaginado();
				//aprobadoSuspenso();
			}
		}
		
	});
	///////////	FIN CODIGO ELISEO	////////
    //////
	//////
	//////
	//////
    pintarPaginado();
    navegarActivo();
	cargarProgreso();
	btnScroll();
	

	/*console.log("LA PAGINA EN LA QUE ESTOY ACTUALMENTE ES: "+($pagina));
	console.log("EL VALOR DEL INDICE ES: "+($(".fila-despegable")[$pagina]).value);*/


    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //-----------------------------------------------ESCORMIZADO----------------------------------------////
    //PARA GUARDAR EL PROGRESO DEL CURSO Y LOS ESTADOS VISTO O NO VISTO DE CADA PÁGINA//////////////////////
 	/*if(Math.round($porcentaje)<100){
		cargarProgreso();
	 }*/
    	

    if (escormizar=="si"){

		controlarEstado();
    	//SI SE HAN VISTO TODOS LOS TEMAS ENTRÁ AQUÍ Y SETEA EL ESTATUS DE LA UNIDAD A COMPLETADA

    	if (estadosVistos==arrayestados.length && Math.round(puntuacion)>=100){
	    	doLMSSetValue("cmi.core.lesson_status", "completed");
	    }
	    
	    //AÑADO EL ICONO DE VISTO A LOS ELEMENTOS QUE TENGAN LA CLASE "nav-visto"
    	$('.nav-visto a').html($checkon);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //------------------------------------------FIN ESCORMIZADO-----------------------------------------////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////



    //PARA NAVEGACIÓN RESTRINGIDA QUE NO SE MUESTREN EN ESTADO HOVER LOS TEMAS Y SUBTEMAS QUE NO SE PUEDEN VISITAR AÚN
    if(navegacion == 'restringida'){
    	
    	if (indice[0].tema==indice[1].tema){
    		controlIndice=1;
    	}
    	else{
    		controlIndice=2;
    	}

    	////////////////////////////////////////////////////////////////////////////////////////////////////////
    	//------------------------------------------VERSIÓN ESCRITORIO--------------------------------------////
    	//PARA BLOQUEAR LOS SUBTEMAS QUE NO SE PUEDEN VISITAR AÚN Y DESBLOQUEAR LOS QUE SI QUE SE PUEDEN VISITAR
    	for(i=0; i<$(".nav-desktop .nav-subfila").length; i++){
    		if ($(".nav-desktop .nav-subfila")[i].previousSibling!=null){
    			
    			if($(".nav-desktop .nav-subfila")[i].previousSibling.classList.contains("nav-visto")){
    				$(".nav-desktop .nav-subfila")[i].classList.remove("nav-fila-bloqueada");
    			}
    			else{
    				$(".nav-desktop .nav-subfila")[i].classList.add("nav-fila-bloqueada");
    			}
    		}
    		//BLOQUEO EL PRIMER SUBTEMA DE CADA TEMA
    		if($(".nav-desktop .nav-subfila")[i].previousSibling==null){
    			$(".nav-desktop .nav-subfila")[i].classList.add("nav-fila-bloqueada");
    		}
    	}

    	//PARA BLOQUEAR LOS TEMAS DESPLEGABLES
    	for (i=0; i<$(".nav-fila-desktop.fila-despegable").length; i++){
    		if($(".nav-fila-desktop.fila-despegable")[i].classList.contains("nav-activo")){

    		}
    		else{
    			$(".nav-fila-desktop.fila-despegable")[i].classList.add("nav-fila-bloqueada");
    		}
    	}

    	//PARA BLOQUEAR LOS TEMAS QUE NO TIENEN DESPLEGABLE
    	for (i=0; i<$(".nav-fila.nav-fila-desktop").length; i++){
    		
    		if($(".nav-fila.nav-fila-desktop")[i].classList.contains("fila-despegable")){

    		}
    		else{
    			$(".nav-fila.nav-fila-desktop")[i].classList.add("nav-fila-bloqueada");
    		}
    	}

    	//PARA CUANDO VAN DOS TEMAS CON DESPLEGABLE SEGUIDOS O PARA CUANDO HAY UN TEMA SIN DESPLEGABLE Y ANTERIOR A EL UN TEMA CON DESPLEGABLE
    	for (i=0; i<$(".nav-fila-desktop").prev().prev().length; i++){
    		if ($(".nav-fila-desktop").prev().prev()[i].classList.contains("fila-despegable")){
	    		if($(".nav-fila-desktop").prev().prev()[i].classList.contains("nav-visto")){
	    			$(".nav-fila-desktop")[i+controlIndice].classList.remove("nav-fila-bloqueada");
	    		}
	    	}
    	}

    	//PARA CUANDO VAN DOS TEMAS SIN DESPLEGABLE SEGUIDOS O PARA CUANDO HAY UN TEMA DESPLEGABLE Y ANTERIOR A ÉL UN TEMA SIN DESPLEGABLE
    	for (i=0; i<$(".nav-fila-desktop").prev().length; i++){	
    		if($(".nav-fila-desktop").prev()[i].classList.contains("nav-fila")){
    			
    			if ($(".nav-fila-desktop").prev()[i].classList.contains("nav-visto")){
    				$(".nav-fila-desktop")[i+1].classList.remove("nav-fila-bloqueada");
    			}
    		}
    	}

    	$(".nav-fila-desktop")[0].classList.remove("nav-fila-bloqueada");

    	//PARA AÑADIR LA CLASE DESPLEGADO UNA VEZ QUE ENTRE EN ESA FILA DESPLEGABLE
		$(".fila-despegable[data-id='"+ $pagina  + "']").addClass('nav-desplegado');
	
    	//PARA QUITAR LA CLASE BLOQUEADO A LOS PRIMEROS SUBTEMAS DE CADA TEMA CUANDO DEBEN ESTAR DESBLOQUEADOS

    	for (i=0; i<$(".nav-fila-desktop.fila-despegable").length; i++){
    		if ($(".nav-fila-desktop.fila-despegable")[i].classList.contains("nav-visto") || $(".nav-fila-desktop.fila-despegable")[i].classList.contains("nav-activo") || $(".nav-fila-desktop.fila-despegable")[i].classList.contains("nav-desplegado")){
	    		$(".nav-fila-desktop.fila-despegable").next()[i].childNodes[0].classList.remove("nav-fila-bloqueada");
				$(".nav-fila-phone.fila-despegable").next()[i].childNodes[0].classList.remove("nav-fila-bloqueada");
	    	}
    	}

    	////////////////////////////////////////////////////////////////////////////////////////////////////////
    	//--------------------------------------FIN VERSIÓN ESCRITORIO--------------------------------------////
    	////////////////////////////////////////////////////////////////////////////////////////////////////////


    	////////////////////////////////////////////////////////////////////////////////////////////////////////
    	//-----------------------------------------------VERSIÓN MÓVIL--------------------------------------////
    	//PARA BLOQUEAR LOS SUBTEMAS QUE NO SE PUEDEN VISITAR AÚN Y DESBLOQUEAR LOS QUE SI QUE SE PUEDEN VISITAR
    	for(i=0; i<$(".nav-phone .nav-subfila").length; i++){
    		if ($(".nav-phone .nav-subfila")[i].previousSibling!=null){
    			
    			if($(".nav-phone .nav-subfila")[i].previousSibling.classList.contains("nav-visto")){
    				$(".nav-phone .nav-subfila")[i].classList.remove("nav-fila-bloqueada");
    			}
    			else{
    				$(".nav-phone .nav-subfila")[i].classList.add("nav-fila-bloqueada");
    			}
    		}
    		//BLOQUEO EL PRIMER SUBTEMA DE CADA TEMA
    		if($(".nav-phone .nav-subfila")[i].previousSibling==null){
    			$(".nav-phone .nav-subfila")[i].classList.add("nav-fila-bloqueada");
    		}
    	}

    	//PARA BLOQUEAR LOS TEMAS DESPLEGABLES
    	for (i=0; i<$(".nav-fila-phone.fila-despegable").length; i++){
    		if($(".nav-fila-phone.fila-despegable")[i].classList.contains("nav-activo")){

    		}
    		else{
    			$(".nav-fila-phone.fila-despegable")[i].classList.add("nav-fila-bloqueada");
    		}
    	}

    	//PARA BLOQUEAR LOS TEMAS QUE NO TIENEN DESPLEGABLE
    	for (i=0; i<$(".nav-fila.nav-fila-phone").length; i++){
    		
    		if($(".nav-fila.nav-fila-phone")[i].classList.contains("fila-despegable")){

    		}
    		else{
    			$(".nav-fila.nav-fila-phone")[i].classList.add("nav-fila-bloqueada");
    		}
    	}

    	//PARA CUANDO VAN DOS TEMAS CON DESPLEGABLE SEGUIDOS O PARA CUANDO HAY UN TEMA SIN DESPLEGABLE Y ANTERIOR A EL UN TEMA CON DESPLEGABLE
    	for (i=0; i<$(".nav-fila-phone").prev().prev().length; i++){
    		if ($(".nav-fila-phone").prev().prev()[i].classList.contains("fila-despegable")){
	    		if($(".nav-fila-phone").prev().prev()[i].classList.contains("nav-visto")){
	    			$(".nav-fila-phone")[i+controlIndice].classList.remove("nav-fila-bloqueada");
	    		}
	    	}
    	}

    	//PARA CUANDO VAN DOS TEMAS SIN DESPLEGABLE SEGUIDOS O PARA CUANDO HAY UN TEMA DESPLEGABLE Y ANTERIOR A ÉL UN TEMA SIN DESPLEGABLE
    	for (i=0; i<$(".nav-fila-phone").prev().length; i++){
    		
    		if($(".nav-fila-phone").prev()[i].classList.contains("nav-fila")){
    			
    			if ($(".nav-fila-phone").prev()[i].classList.contains("nav-visto")){
    				$(".nav-fila-phone")[i+1].classList.remove("nav-fila-bloqueada");
    			}
    		}
    	}

    	$(".nav-fila-phone")[0].classList.remove("nav-fila-bloqueada");
    	
    	//PARA QUITAR LA CLASE BLOQUEADO A LOS PRIMEROS SUBTEMAS DE CADA TEMA CUANDO DEBEN ESTAR DESBLOQUEADOS

    	for (i=0; i<$(".nav-fila-phone.fila-despegable").length; i++){
    		if ($(".nav-fila-phone.fila-despegable")[i].classList.contains("nav-visto") || $(".nav-fila-phone.fila-despegable")[i].classList.contains("nav-activo") || $(".nav-fila-phone.fila-despegable")[i].classList.contains("nav-desplegado")){
	    		$(".nav-fila-phone.fila-despegable").next()[i].childNodes[0].classList.remove("nav-fila-bloqueada");
	    	}
    	}
    	////////////////////////////////////////////////////////////////////////////////////////////////////////
    	//-------------------------------------------FIN VERSIÓN MÓVIL--------------------------------------////
    	////////////////////////////////////////////////////////////////////////////////////////////////////////
    }

    //SI LA NAVEGACIÓN ES LIBRE ENTRA AQUÍ
    if (navegacion=="libre"){
    	//PARA AÑADIR LA CLASE DESPLEGADO UNA VEZ QUE ENTRE EN ESA FILA DESPLEGABLE
		$(".fila-despegable[data-id='"+ $pagina  + "']").addClass('nav-desplegado');
		$(".nav-subfila[data-id='"+ $pagina  + "']").parent().prev().addClass('nav-desplegado');
    } 

//SEA LIBRE O RESTRINGIDA LA NAVEGACIÓN ENTRA AQUÍ Y COLOCA LA CLASE NAV DESPLEGADO A UN TEMA SI DENTRO TIENE SUBTEMAS QUE YA HAN SIDO VISITADOS
    
    for (i=0; i<$(".fila-despegable").length; i++){
    	for(j=0; j<$(".fila-despegable").next()[i].childNodes.length; j++){
    		if($(".fila-despegable").next()[i].childNodes[j].classList.contains("nav-visto")){
    			$(".fila-despegable").next()[i].childNodes[j].parentNode.previousSibling.classList.add("nav-desplegado");
    		}
    	}
    }   
}

function mostrarPaginaTest(){
	
}

function sumarPuntos(parametroOpcionSeleccionada){
	arrayestadosjson=JSON.stringify(arrayestados);

	//Sac1o la respuesta correcta
	if(datos[contadorDiapositivasTest]!=undefined){
		respcorrecta = datos[contadorDiapositivasTest].correcta;
		//Añado al arrayopcionseleccionada el item que ha seleccionado el usuario
		arrayopcionseleccionada.push(document.getElementById(parametroOpcionSeleccionada).value);

		//Si la opcion que he seleccionado es correcta entra aqui y suma puntos a la nota final
		if(document.getElementById(parametroOpcionSeleccionada).value == respcorrecta){
			if(arrayopcionesintento[contadorDiapositivasTest] != "acierto"){//Se pone este if para que cada vez que se pulse sobre la opcion correcta no este sumando constantemente las puntuacion correspondiente a la pregunta
				puntuacion+=parseFloat(puntospregunta);
				arrayopcionesintento[contadorDiapositivasTest] = "acierto";//Se pone contadorDiapositivasTest-1 porque primer item del array es 0 y no 1.
			}
		}else{
			if(arrayopcionesintento[contadorDiapositivasTest] == "acierto"){
				puntuacion = puntuacion - parseFloat(puntospregunta);
			}
			puntuacion+=0;
			arrayopcionesintento[contadorDiapositivasTest] = "fallo";//Se pone contadorDiapositivasTest-1 porque primer item del array es 0 y no 1.
		}
	}
	
	if(escormizar == "si"){
		doLMSSetValue('cmi.suspend_data', 'cont='+indice.length+'||array='+arrayestadosjson+'||intentosjuegos='+JSON.stringify(gameattempts)+'||puntosjuegos='+JSON.stringify(gamescores)+'||ceros='+$ceros+'||valorespreguntas='+JSON.stringify(arrayopcionesintento)+'||testRepetido='+testrepetido.toString()+'||paginasVisitadasEnNavegacionLibre='+JSON.stringify(paginasVisitadasEnNavegacionLibre));
		doLMSCommit();
	}
	
}



/**
 * Función que bloquea la navegación del indice.
 */

function DesbloquearNavegacionIndice(){
				if($("#"+($paginaInicioTest)).hasClass("nav-visto")){
				//Como el test ha sido comenzado en algun momento, lo que hacemos es volver a poner el temario como no visto para que asi, no pueda acceder desde el test al temario
				for(var i=0; i<($paginaInicioTest); i++){
					$("#"+(i)).removeClass("nav-fila-bloqueada");
					$("#"+(i)).addClass("nav-visto");
				}
				
			}
}


/* 
** Function: pintarPaginado();
** Description: Mientras se esta cargando todo el contenido de la página poner un loading
============================================================================= */
function pintarPaginado(){
	/*testrepetido = Boolean(((doLMSGetValue("cmi.suspend_data").split("||")[6]).split("="))[1]);*/
	//
	$('.num-pagina').html($pagina + '/' + (indice.length));//Resto a paginas totales 1 porque las paginas totales
	//que tiene en realidad la unidad son una menos de las que hay en el array de indice puesto que la ultima pagina es la que contiene el test
	//y esta no se debe tener cuenta ya que el numero de paginas que tiene el test lo obtenemos a partir del metodo obtenerNumeroPaginasTest();
}

/* 
** Function: cargarLoading();
** Description: Mientras se esta crgando todo el contenido de la página poner un loading
============================================================================= */

/* 
** Function: cargarProgreso();
** Description: Mira por donde vas y te lo muestra en porcentaje (Barra de Progreso)
============================================================================= */
function cargarProgreso(){
	
	controlarEstado();
	
	if(paginasVisitadasEnNavegacionLibre.indexOf($pagina) == -1 && ($pagina-1)<=paginasTotalesDeProgreso && ($pagina-1)>0/* && obtenerdatosTest("estadopreguntastest").indexOf("sincontestar")!=-1*/){//Esto ultimo es si esta todo contestado entro
		/*A $pagina le resto 1 para que realmente se compare con la pagina anterior (que la cual una vez pasada,
		incrementamos el proceso), auqnue actualemte $pagina vale uno mas, el valor de la siguiente pagina que se
		va a ver puesto que hemos incrementado el valor antes de llegar aqui y es el progreso lo ultimo que se
		ejecuta. Al ser lo ultimo, $pagina ya contiene el valor de la nueva pagina, es por eso por lo que tenemos
		que restar 1 para poder comparar dicha pagina con la condicion del if.*/

		//Llamo a actualizar progreso
		if($porcentaje<100){
			//Actualizo la barra de progreso
			$porcentaje = $porcentaje + 100/(paginasTotalesDeProgreso);

			//$porcentaje = $porcentaje + 100/(indice.length + obtenerNumeroPaginasTest());
			$('.progreso').css('width', $porcentaje + '%');
			$('.barra').attr('data-original-title', $porcentaje + '%');
			$('.footer-phone .progreso').attr('data-original-title', $porcentaje+ '%');
		}else{
			$porcentaje = 100;
			//Actualizo la barra de progreso
			//$porcentaje = $porcentaje + 100/(paginasTotalesDeProgreso);//Le pongo -1 para no tener en cuenta la primera pagina del test (la de la interrogacion) 

			//$porcentaje = $porcentaje + 100/(indice.length + obtenerNumeroPaginasTest());
			$('.progreso').css('width', $porcentaje + '%');
			$('.barra').attr('data-original-title', $porcentaje + '%');
			$('.footer-phone .progreso').attr('data-original-title', $porcentaje + '%');
		}
	}

	/*if(navegacion == "libre"){
		if(paginasVisitadasEnNavegacionLibre.indexOf($pagina) == -1){
			//Llamo a actualizar progreso
			if(Math.round($porcentaje)<100){
				//Actualizo la barra de progreso
				$porcentaje = $porcentaje + 100/(indice.length + obtenerNumeroPaginasTest());
				$('.progreso').css('width', $porcentaje + '%');
				$('.barra').attr('data-original-title', $porcentaje + '%');
				$('.footer-phone .progreso').attr('data-original-title', $porcentaje + '%');
			}
		}
	}else{
		//!!!!!!!!!! CAMBIAR LA I POR $PAGINA Y QUITAR EL BUCLE
		//=======================================================
		//PASO 1: VER SI SOMOS CAPACES DE OBTENER EL DATA-ID DE LOS ITEMS DEL INDICE
		//este if es para el test
		if($pagina>=indice.length && $pagina<=(indice.length + obtenerNumeroPaginasTest())){
			if(arrayopcionesintento[($pagina-indice.length)+1] != "sincontestar"){//es +1 porque me interesa saber el valor que tiene la pagina siguiente (si se ha visto o todavia no)
				//Llamo a actualizar el progreso
				if(Math.round($porcentaje)<100){
					//Actualizo la barra de progreso
					$porcentaje = $porcentaje + 100/(indice.length + obtenerNumeroPaginasTest());
					$('.progreso').css('width', $porcentaje + '%');
					$('.barra').attr('data-original-title', $porcentaje + '%');
					$('.footer-phone .progreso').attr('data-original-title', $porcentaje + '%');
				}
			}
		//el else es para la unidad
		}else{
			if(document.getElementsByClassName("nav-fila")[$pagina+2].className.indexOf("nav-visto") == -1){//Pongo +1 porque lo que quiero saber es sobre la siguiente página a la que estoy.
				console.log("La pagina es: "+$pagina+" "+true);				
				//Llamo a actualizar progreso
				if(Math.round($porcentaje)<100){
					//Actualizo la barra de progreso
					$porcentaje = $porcentaje + 100/(indice.length + obtenerNumeroPaginasTest());
					$('.progreso').css('width', $porcentaje + '%');
					$('.barra').attr('data-original-title', $porcentaje + '%');
					$('.footer-phone .progreso').attr('data-original-title', $porcentaje + '%');
				}
			}else{
				console.log("La pagina es: "+$pagina+" "+false);
				//Este else lo quitaria
			}
			
		}
	}*/

	/*//("La longitud de estados vistos es: "+estadosVistos);
	$porcentaje = Math.round((estadosVistos/arrayestados.length)*100);
	$('.progreso').css('width', $porcentaje + '%');
	$('.barra').attr('data-original-title', $porcentaje + '%');
	$('.footer-phone .progreso').attr('data-original-title', $porcentaje + '%');*/
	
}


function restaurarProgreso(){
	if (testEmpezado == true){
			$porcentaje == 100;
	}
	//Calculo el porcentaje con los datos obtenidos a partir de la base de datos
	paginasVisitadasEnNavegacionLibre = obtenerdatosTest("numPaginasVistasEnProgreso");

	if(paginasTotalesDeProgreso<=indice.length && $pagina>1){	
		//Esto es para cuando solo se quiere tener en cuenta la unidad para la barra de progreso

		//if(paginasVisitadasEnNavegacionLibre.length>(indice.length-1)){
			//$porcentaje = (100/(paginasTotalesDeProgreso))*((paginasVisitadasEnNavegacionLibre.length-datostest.length)-1);
		//}else{

			var numeroPaginasVistasCorrespondientesAUnidad = 0;
			for(i=0; i<indice.length; i++){
				if(paginasVisitadasEnNavegacionLibre[i] == indice[i].pag){
					numeroPaginasVistasCorrespondientesAUnidad++;
				}
			}
			$porcentaje = (100/(paginasTotalesDeProgreso))*(numeroPaginasVistasCorrespondientesAUnidad-1);
		//}
		
		$('.progreso').css('width', $porcentaje + '%');
		$('.barra').attr('data-original-title', $porcentaje + '%');
		$('.footer-phone .progreso').attr('data-original-title', $porcentaje+ '%');
	}else if($pagina>1){
		//Esto es para cuando se quiere tener en cuenta la unidad y el test para la barra de progreso

		var numeroAciertos = 0;
		for(i=0; i<arrayopcionesintento.length; i++){
			if(arrayopcionesintento[i]=="acierto"){
				numeroAciertos++;
			}
		}
		$porcentaje = ((100/(paginasTotalesDeProgreso))*(paginasVisitadasEnNavegacionLibre.length)-1)+((100/(paginasTotalesDeProgreso))*numeroAciertos);//A paginasVisitadasEnNavegacionLibre.length le resto 1 porque no hay que tener en cuenta la primera pagina, es decir, el numero de veces que pulsamos en el boton de siguiente (cuando tiene que avanzar el progreso) es una vez menos que el numero de paginas totales ya que cuando se muestra la primera pagina de la unidad no se ha pulsado todavia en siguiente y por lo tanto el progreso no ha comenzado todavia.
		$('.progreso').css('width', $porcentaje + '%');
		$('.barra').attr('data-original-title', $porcentaje + '%');
		$('.footer-phone .progreso').attr('data-original-title', $porcentaje+ '%');
	}

}



/* 
** Function: avanzar();
** Description: Avanza por las páginas de la unidad y del test.
============================================================================= */
function avanzar(){
	//Compruebo si el boton de avanza está deshabilitado, para bloquear que se pueda avanzar de pagina
	if($("#btn-next").attr('class').search("btn-next-inactive")>0 || $("#btn-next-mobile").attr('class').search("btn-next-inactive")>0){
		//console.log("INACTIVOOOOO");
	}else{
		//Si hay un modal abierto quitamos el fondo
		cerrarModal();

		if($pagina > indice.length) {//Le resto 1 porque indice.lenght tiene el item del test y este no lo queremos tener en cuenta
			//Se añade la condicion de contadorDiapositivasTest>0 para que mientras que este contador valga 0 no se incremente en 1
			//Incremento en uno el valor de la varaible para que cada vez que se ejecute este fragmento de codigo se pueda cambiar el contenido del test, es decir, la pregunta
			
			while(contadorDiapositivasTest<=arrayopcionesintento.length && (arrayopcionesintento[contadorDiapositivasTest + 1])=="acierto"){
				if($pagina <= indice.length || (arrayopcionesintento[contadorDiapositivasTest]=="acierto" && contadorDiapositivasTest < datos.length)){//Resto 1 puesto que necesito saber el valor de la pagina anterior que acabo de contestar, no de la actual que todavia no ha sido contestada
					if(paginasVisitadasEnNavegacionLibre.indexOf(parseInt($pagina))==-1){
						paginasVisitadasEnNavegacionLibre.push(parseInt($pagina));
					}
				}
				$pagina++;
				contadorDiapositivasTest++;
			}
			contadorDiapositivasTest++;
		}

		



		if($pagina < (indice.length + obtenerdatosTest("estadopreguntastest").length + 1)){
			if($pagina <= indice.length || (arrayopcionesintento[contadorDiapositivasTest]=="acierto" && contadorDiapositivasTest < datos.length)){//Resto 1 puesto que necesito saber el valor de la pagina anterior que acabo de contestar, no de la actual que todavia no ha sido contestada
				if(paginasVisitadasEnNavegacionLibre.indexOf(parseInt($pagina))==-1){
						paginasVisitadasEnNavegacionLibre.push(parseInt($pagina));
				}
			}
			$pagina++;
		}

		//Ocultamos botón de siguiente cuando llega a la última pantalla
		if($pagina > $paginaInicioTest-1+obtenerNumeroPaginasTest()){//Se le pone -1 para no contar con la pagina del resultado del test
			$('.icon-next').css('display', 'none');
		}

		cargarPagina();
		desplegarIndice();
		eliminarEstiloCursor();
		
	}
	
}

/**
 * Función que calcula la puntuación obtenida en el test.
 */
//a esta funcion habra que llamarla cada vez que se pulse sobre el boton de siguiente, pero unicamente dentro de la parte del test
function calcularResultadosTest(){
	puntospregunta = (100/(datostest[0].numeropreguntas)).toFixed(2);//Guardo los puntos que vale la prgunta

	$('#npregunta').html(txtPregunta+" "+Math.abs(($paginaInicioTest)-$pagina)+" "+de+" "+ datos.length);
	//Si mostrarIntento es "si" se mostrará el numero de intento en el que se encuentra el usaurio
	if (datostest[0].mostrarintento=="si"){
		$('#nintento').html( txtIntento +" "+ (parseInt(obtenerdatos("intentosrealizados"))+1) +" "+ de +" "+ datostest[0].numerointentos);
	}
}


/**
 * Función que valida que el alumno haya contestado a la pregunta habiendo seleccionado alguna opción.
 * @param {*} parametroRecibido 
 */
function corregirPregunta(parametroRecibido){
	
	//Compruebo que se haya seleccionado algo para volvr a activar el boton de siguiente para que el alumno pueda cambiar de pagina
	if(!(document.getElementById(parametroRecibido).value).length <= 0){
		//Hay alguna respuesta ,marcada, por lo tanto habilitamos el boton de siguiente
		$("#btn-next").removeClass("btn-next-inactive");//Con estas dos lineas lo que hacemos es deshabilitar el boton de siguiente
		$("#btn-next-mobile").removeClass("btn-next-inactive")
		$("#btn-next").addClass("btn-next");
		$("#btn-next-mobile").addClass("btn-next");
		sumarPuntos(parametroRecibido);
		//arrayopcionesintento
	}

}

/* 
** Function: testEmpezado()
** Description: Ejecuta una serie de sentencias si el test ha sido empezado
============================================================================= */
function contenedorTest() {

	if(testEmpezado == true && puntuacion >= 100){
			$porcentaje = 100;
		}
	if ($pagina >= $paginaInicioTest+1){ // SI ESTOY EN EL TEST
		$('.nav').addClass('hidden');
		if(puntuacion >= 98){ // SI HE APROBADO
			$('.nav').removeClass('hidden');
			$('div.contenedor-unidad').addClass('col-md-9');
			$('div.contenedor-unidad').addClass('col-lg-9');
			$('div.contenedor-unidad').removeClass('col-md-offset-0');
			$('div.contenedor-unidad').removeClass('col-md-6');
			$('div.contenedor-unidad').removeClass('col-lg-6');
		}else {
			$('div.contenedor-unidad').removeClass('col-md-9');
			$('div.contenedor-unidad').removeClass('col-lg-9');
			$('div.contenedor-unidad').addClass('col-md-offset-0');
			$('div.contenedor-unidad').addClass('col-md-6');
			$('div.contenedor-unidad').addClass('col-lg-6');
		}
	}

	else{
		$('.nav').removeClass('hidden');
		$('div.contenedor-unidad').addClass('col-md-9');
		$('div.contenedor-unidad').addClass('col-lg-9');
		$('div.contenedor-unidad').removeClass('col-md-offset-0');
		$('div.contenedor-unidad').removeClass('col-md-6');
		$('div.contenedor-unidad').removeClass('col-lg-6');
	}
//Añadimos la Clase css test al contenedor unidad, para respetar los estilos de las preguntas, respuestas, y botonera de test.
	if ($pagina >= indice.length){
		$('div.contenedor-unidad').addClass('test');
	}else{
		$('div.contenedor-unidad').removeClass('test');
	}
    
}

/* 
** Function: retroceder();
** Description: Retrocede por las páginas de la unidad
============================================================================= */
function retroceder(){

	//Compruebo si esta desactivado el boton de retroceder, en dicho caso no se hará ninguna accion sino se ejecutará todo el código de la funcion
	if($("#btn-prev").attr('class').search("btn-prev-inactive")>0 || $("#btn-prev-mobile").attr('class').search("btn-prev-inactive")>0){
		//console.log("INACTIVOOOOO");

	}else{
		//Si hay un modal abierto quitamos el fondo
		cerrarModal();
		if($pagina > 1){
			if((($pagina <= indice.length || (arrayopcionesintento[contadorDiapositivasTest]=="acierto" && contadorDiapositivasTest < datos.length)) && paginasVisitadasEnNavegacionLibre.indexOf($pagina)==-1) && paginasVisitadasEnNavegacionLibre.indexOf(parseInt($pagina))==-1){//Resto 1 puesto que necesito saber el valor de la pagina anterior que acabo de contestar, no de la actual que todavia no ha sido contestada
				paginasVisitadasEnNavegacionLibre.push(parseInt($pagina));
			}
			$pagina--;
			//Disminuyo en uno el valor de la varaible para que cada vez que se ejecute este fragmento de codigo se pueda cambiar el contenido del test, es decir, la pregunta
			if (!contadorDiapositivasTest <= 0){
				contadorDiapositivasTest--;
			}
			
		}
		//Ocultamos botón de retroceso cuando llega a la primera pantalla
		if($pagina == 1){
			$('.icon-prev svg').hide();
		}
		//Mostramos el botón de avance cuando está en la penúltima página
		if($pagina == $paginaInicioTest-1){
			$('.icon-next').css('display', 'inline');
		}
		cargarPagina();
		desplegarIndice();
		eliminarEstiloCursor();
	}

	
} 



/* 
** Function: navegarIndice();
** Description: Segén el tipo de navegación será de un tipo o de otro
============================================================================= */
function navegarIndice(){

	//Navegación restringida
	if(navegacion == 'restringida'){
		//CUANDO PINCHO EN UN TEMA
		$('.nav-fila-desktop, .nav-fila-phone').on('click',function(){

			//Con este if controlamos si ya ha estado en el test. En caso afirmativo deberemos bloquear la entrada de nuevo al temario
			//Tengo que obtener informacion de si ha estado alguna vez en el test!!
			//Recorro las paginas que tiene el test y pregunto en cada una si tiene la clase nav-visto, si es asi, lo que haré sera poner todos los tmeas y subtemas de la unidad a no-visto para que asi no se pueda acceder a ellos una vez empezado el test
			//Compruebo si se ha empezado el test en algun momento
			if($("#"+($paginaInicioTest)).hasClass("nav-visto")){
				//Como el test ha sido comenzado en algun momento, lo que hacemos es volver a poner el temario como no visto para que asi, no pueda acceder desde el test al temario
				for(var i=0; i<($paginaInicioTest); i++){
					$("#"+(i)).removeClass("nav-visto");
					$("#"+(i)).addClass("nav-fila-bloqueada");
				}
				
			}else{
				//El test no ha sido visitado
				//SI EL TEMA YA HA SIDO VISTO O SI EL TEMA ANTERIOR YA HA SIDO VISTO (SEA UN TEMA DESPLEGABLE O NO), ENTRA AQUÍ
				if($(this).hasClass("nav-visto") || $(this).prev().hasClass("nav-visto") || $(this).prev().prev().hasClass("nav-visto")){
					
					$paginaAnterior=$pagina;
					$pagina =  $(this).children('a:last').attr('id');

					//SI EL TEMA ESTÁ BLOQUEADO, NO ME SALTARA A NINGUNA PÁGINA DE ÉL
					if($(this).hasClass("nav-fila-bloqueada")){
					}
					
					//SI EL TEMA ESTÁ DESBLOQUEADO, SI ME SALTARA A UNA PÁGINA DE ÉL
					else{
						// SI EL TEMA QUE CLICO ESTÁ EN UNA PÁGINA ANTERIOR A LA PÁGINA EN LA QUE ESTOY ACTUALMENTE, O SI EL TEMA YA HA SIDO VISITADO, O SI EL TEMA PREVIO AL QUE CLICO HA SIDO VISITADO, ENTONCES ME DEJARÁ NAVEGAR POR EL MENÚ
						if ($pagina-1<=$paginaAnterior || $(this).hasClass("nav-visto") || $(this).prev().prev().hasClass("nav-visto") || $(this).prev().hasClass("nav-visto")){
							if($paginaAnterior != 0){
								$("[data-id='"+ $paginaAnterior  + "']").addClass('nav-desplegado');
								$("[data-id='"+ $paginaAnterior  + "']").removeClass('nav-activo');

							}
							$paginaAnterior = $pagina;
							$("[data-id='"+ $pagina  + "']").addClass('nav-activo');
							$("[data-id='"+ $pagina  + "']").children('a').html($checkon);
							cargarPagina();
							$('.icon-next').css('display', 'inline');
							
							if($pagina==$paginaInicioTest){
								$('.icon-next svg').hide();
								$('.icon-prev svg').show();
							}
							if($pagina==1){
								$('.icon-next svg').show();
								$('.icon-prev svg').hide();
							}

						}
					}
					
				}
			}

			
			eliminarEstiloCursor();
		});

		//CUANDO PINCHO EN UN SUBTEMA...
		$('.nav-desktop-subFilas .nav-subfila, .nav-phone-subFilas .nav-subfila').on('click',function(){
			
			if($("#"+($paginaInicioTest)).hasClass("nav-visto")){
				
			}else{
				
				//SI EL SUBTEMA QUE CLICO YA HA SIDO VISTO, O EL SUBTEMA ANTERIOR AL QUE ESTOY CLICANDO HA SIDO VISITADO, ENTRA AQUÍ
				if($(this).hasClass("nav-visto") || $(this).prev().hasClass("nav-visto")){
					$paginaAnterior=$pagina;
					$pagina = $(this).val();
					// SI EL SUBTEMA QUE CLICO ESTÁ EN UNA PÁGINA ANTERIOR A LA PÁGINA QUE ESTOY ACTUALMENTE, O SI EL SUBTEMA HA SIDO YA VISITADO O SI EL SUBTEMA PREVIO AL QUE CLICO HA SIDO VISITADO, ENTONCES ME DEJARÁ NAVEGAR POR EL MENÚ
					if ($pagina-1<=$paginaAnterior || $(this).hasClass("nav-visto") || $(this).prev().hasClass("nav-visto")){
						if($paginaAnterior != 0){
							$("[data-id='"+ $paginaAnterior  + "']").addClass('nav-desplegado');
							$("[data-id='"+ $paginaAnterior  + "']").removeClass('nav-activo');
						}
						$paginaAnterior = $pagina;
						$("[data-id='"+ $pagina  + "']").addClass('nav-activo');
						$("[data-id='"+ $pagina  + "']").children('a').html($checkon);

						cargarPagina();
						$('.icon-next').css('display', 'inline');

						if($pagina==$paginaInicioTest){
							$('.icon-next svg').hide();
							$('.icon-prev svg').show();
						}
						if($pagina==1){
							$('.icon-next svg').show();
							$('.icon-prev svg').hide();
						}
					}
				}
			}
			eliminarEstiloCursor();
	    }); 
	}
	

	//Navegación libre
	if(navegacion == 'libre'){
		//Ponemos eventos de click a los temas
		$('.nav-fila-desktop, .nav-fila-phone').on('click',function(){
			$pagina =  $(this).children('a:last').attr('id');

			if($paginaAnterior != 0){
				$("[data-id='"+ $paginaAnterior  + "']").addClass('nav-desplegado');
				$("[data-id='"+ $paginaAnterior  + "']").removeClass('nav-activo');
			}
			$paginaAnterior = $pagina;
			$("[data-id='"+ $pagina  + "']").addClass('nav-activo');
			$("[data-id='"+ $pagina  + "']").children('a').html($checkon);

	    	cargarPagina();
	    	$('.icon-next').css('display', 'inline');
	    	
	    	if($pagina==($paginaInicioTest-1)){
	    		$('.icon-next svg').hide();
	    		$('.icon-prev svg').show();
	    	}
	    	if($pagina==1){
	    		$('.icon-next svg').show();
	    		$('.icon-prev svg').hide();
	    	}
	    	eliminarEstiloCursor();
		});

		//Ponemos eventos de click a los subtemas
		$('.nav-desktop-subFilas .nav-subfila, .nav-phone-subFilas .nav-subfila').on('click',function(){
	    	$pagina = $(this).val();

	    	if($paginaAnterior != 0){
				$("[data-id='"+ $paginaAnterior  + "']").addClass('nav-visto');
				$("[data-id='"+ $paginaAnterior  + "']").removeClass('nav-activo');
			}
			$paginaAnterior = $pagina;
	    	$("[data-id='"+ $pagina  + "']").addClass('nav-activo');
	    	$("[data-id='"+ $pagina  + "']").children('a').html($checkon);

	    	
	    	$('.icon-next').css('display', 'inline');

	    	if($pagina==$paginaInicioTest){
	    		$('.icon-next svg').hide();
	    		$('.icon-prev svg').show();
	    	}
	    	if($pagina==1){
	    		$('.icon-next svg').show();
	    		$('.icon-prev svg').hide();
	    	}
			cargarPagina();
	    	eliminarEstiloCursor();

		});
	}
}
/* 
** Function: navegarActivo();
** Description: Según el tipo de navegación será de un tipo o de otro
============================================================================= */
function navegarActivo(){
	$(".nav-fila").removeClass("nav-activo");
	$(".nav-fila[data-id='"+$pagina+"']").addClass("nav-activo");
	$(".nav-fila[data-id='"+$pagina+"']").addClass("nav-visto");
	$(".nav-fila[data-id='"+$pagina+"'] a").html($checkon);
	for (i=0; i<$(".nav-fila[data-id='"+$pagina+"']").length; i++){
		if($(".nav-fila[data-id='"+$pagina+"']")[i].classList.contains("fila-despegable")){
			$(".nav-fila[data-id='"+$pagina+"']")[i].classList.remove("nav-visto");
			$(".nav-fila[data-id='"+$pagina+"'] a")[i].innerHTML=$checkoff;
			
	}

	}
	vistos=0;
	for (i=0; i<$(".nav-subfila[data-id='"+$pagina+"']").siblings().length; i++){
		if ($(".nav-subfila[data-id='"+$pagina+"']").siblings()[i].classList.contains("nav-visto")){
			vistos++
		}
	}
	
	if (vistos==$(".nav-subfila[data-id='"+$pagina+"']").siblings().length){
		$(".nav-subfila[data-id='"+$pagina+"']").parent().prev().addClass("nav-visto");
		$(".nav-subfila[data-id='"+$pagina+"']").parent().prev().children("a").html($checkon);
	}
	else{
		$(".nav-subfila[data-id='"+$pagina+"']").parent().prev().removeClass("nav-visto");
	}
	$(".nav-subfila[data-id='"+$pagina+"']").parent().prev().addClass("nav-activo");
		
	
}

/* 
** Function: cerrarModal();
** Description: quita el fondo gris del modal que esta abierto y que se pinta al fondo del elemento <body>. 
Para solucionar el problema que si se cambiaba de página con un modal abierto quedaba el fondo.
============================================================================= */

function cerrarModal(){     
      $(".modal-backdrop").remove();
      $("body").removeClass("modal-open");
      $("body").removeAttr("style");
      $("body").removeAttr("class");
      $(".popover").css("display", "none");
}

/* 
** Function: cerrarModal();
** Description: quita el fondo gris del modal que esta abierto y que se pinta al fondo del elemento <body>. 
Para solucionar el problema que si se cambiaba de página con un modal abierto quedaba el fondo.
============================================================================= */
function btnScroll(){
	$(document).ready(function(){
	
			$('.ir-arriba').click(function(){
				$('body, html').animate({
					scrollTop: '0px'
				}, 300);
			});
		    if(mostrarScrollUp == "si"){
			$(window).scroll(function(){
				if( $(this).scrollTop() > 20 ){
					$('.ir-arriba').slideDown(300);
				} else {
					$('.ir-arriba').slideUp(300);
				}
			});
            }else{}
		
			});
}



/* 
** AUMENTAR O DISMINUIR EL TAMAÑO DEL TEXTO
============================================================================= */

//--------------------------------------------------------------------------------------------//
var fontSize = 1;
document.body.style.fontSize = fontSize + "em";

/* 
** Function: zoomIn();
** Description: Aumenta el tamaño del texto.
============================================================================= */
function zoomIn() {
    if (document.body.style.fontSize < 2+"em"){
        fontSize += 0.05; document.body.style.fontSize = fontSize + "em";
    } 
}

/* 
** Function: zoomOut();
** Description: Reduce el tamaño del texto.
============================================================================= */
function zoomOut() {
    if (document.body.style.fontSize > 0.7+"em"){
        fontSize -= 0.05; document.body.style.fontSize = fontSize + "em";
    }
}






//FUNCIÓN QUE ME SIRVE PARA QUE PUEDA PARSEAR LOS JSON GUARDADOS EN LA BASE DE DATOS DE MOODLE:
// 1. LAS PAGINAS VISTAS
// 2. DE LO QUE ESTÁ CHECKED Y NO CHECKED
//Y ASÍ CONVERTIR ESOS JSON EN ARRAYS YA QUE EN VERSIONES ANTIGUAS DE MOODLE NO FUNCIONABA CORRECTAMENTE SIN ESTA FUNCIÓN
function stripslashes (str) {
  return (str + '')
    .replace(/\\(.?)/g, function (s, n1) {
      switch (n1) {
        case '\\':
          return '\\'
        case '0':
          return '\u0000'
        case '':
          return ''
        default:
          return n1
      }
    })
};



/* 
** Function: controlarEstado();
** Description: Esta función sirve para saber en cada momento los conocimientos y subconocimientos que han sido visitados y los que no lo han sido
============================================================================= */
function controlarEstado(){
	arrayestados=[];
	//$estado = obtenerdatos("estado");//Obtengo todos los estados de las partes vistas y no vistas de la unidad.
	//SI VOY A GUARDAR EL PROGRESO DEL CURSO EN MOODLE...
	if (escormizar=="si"){
		for (i=0; i<$(".nav-desktop .nav-fila").length; i++){
    		if($estado[i]=="nav-visto"){
    			$(".nav-desktop .nav-fila")[i].classList.add("nav-visto")
    		}
    		if($estado[i]=="nav-visto"){
    			$(".nav-phone .nav-fila")[i].classList.add("nav-visto")
    		}
    	}

		
    	for (i=0; i<($(".nav-desktop .nav-fila").length); i++){

    		if($(".nav-desktop .nav-fila")[i].classList.contains("nav-visto")){
    			arrayestados.push("nav-visto")
    		}
    		else{
    			arrayestados.push("no-visto")
    		}
    	}

		


		//if(testEmpezado == true){
			//Bucle para ir agregando a arrayestados tantos elementos como diapositivas del test se hayan visto
			/*var numeroPaginasTestVistas = $pagina - ($paginaInicioTest);
			for(var i=0; i<obtenerNumeroPaginasTest(); i++){
				if(i<=numeroPaginasTestVistas){
					arrayestados.push("nav-visto");
				}else{
					arrayestados.push("no-visto");
				}
				
			}*/
		//}
		


    	estadosVistos=0;
    	for (i=0; i<arrayestados.length; i++){
    		if(arrayestados[i]=="nav-visto"){
    			estadosVistos++;
    		}
    	}
	}
	//SI ESTOY MAQUETANDO Y NO VOY A GUARDAR EL PROGRESO DEL CURSO EN MOODLE
	else{
		for (i=0; i<$(".nav-desktop .nav-fila").length; i++){

    		if($(".nav-desktop .nav-fila")[i].classList.contains("nav-visto")){
    			arrayestados.push("nav-visto")
    		}
    		else{
    			arrayestados.push("no-visto")
    		}
    	}

    	estadosVistos=0;
    	for (i=0; i<arrayestados.length; i++){
    		if(arrayestados[i]=="nav-visto"){
    			estadosVistos++;
				
    		}
    	}
	}	
}



/* 
** Function: ayudavista();
** Description: Esta función sirve para quitar la animación al icono de ayuda una vez que esta ha sido vista por el alumno y se activa cuando se hace click en dicho botón.
============================================================================= */
function ayudavista(){
	if (escormizar=="si"){
		doLMSSetValue('cmi.comments', 'estadoayuda=vista||estadoaudio='+estadoAyudaAudio("estadoaudio"));
		$('.icon-ayuda').removeClass("wow");
		$('.icon-ayuda').removeClass("animated");
	}
}

/* 
** Function: desplegarIndice();
** Description: Esta función sirve para desplegar los elementos del indice en versión escritorio dependiendo de la página en la que esté
============================================================================= */
function desplegarIndice(){
	
	$(".nav-desktop .nav-subfila[data-id='"+$pagina+"']").parent().slideDown(500);
	$(".nav-desktop .nav-desktop-subFilas").addClass("menuSube");
	$(".nav-desktop .nav-subfila[data-id='"+$pagina+"']").parent().removeClass("menuSube");
	$(".nav-desktop .menuSube").slideUp(500);

	
	if($(".nav-phone-ul").css("display")=="block"){
		$(".nav-phone .nav-subfila[data-id='"+$pagina+"']").parent().slideDown(500);
		$(".nav-phone .nav-phone-subFilas").addClass("menuSube");
		$(".nav-phone .nav-subfila[data-id='"+$pagina+"']").parent().removeClass("menuSube");
		$(".nav-phone .menuSube").slideUp(500);
	}
}

/* 
** Function: eliminarEstiloCursor();
** Description: Esta función sirve para que cuando el alumno esté en la primera o en la última página del curso se elimine el estilo del cursor de la mano ya que no debe aparecer.
============================================================================= */

function eliminarEstiloCursor(){
	if ($pagina == 1){
		$(".footer-desktop .icon-prev").addClass("primerapagina");
		$(".footer-desktop .icon-next").removeClass("ultimapagina");
	}
	else if ($pagina == indice.length){
		$(".footer-desktop .icon-prev").removeClass("primerapagina");
		$(".footer-desktop .icon-next").addClass("ultimapagina");
	}
	else{
		$(".footer-desktop .icon-prev").removeClass("primerapagina");
		$(".footer-desktop .icon-next").removeClass("ultimapagina");
	}
}


/* 
** Function: estadoAyudaAudio(data);
** Description: Esta función sirve para saber si la ayuda ha sido visitada o no y el último estado del audio (si el alumno lo ha dejado encendido o apagado.
============================================================================= */
function estadoAyudaAudio(data){
	if(escormizar=="si"){
		cmicomments = doLMSGetValue("cmi.comments");
    
		//SI SE ACABA DE EMPEZAR EL CURSO
		if (cmicomments == "") {
				doLMSSetValue('cmi.comments', 'estadoayuda=novista||estadoaudio=on');
				cmicomments = doLMSGetValue("cmi.comments");
		}

    	estados=cmicomments.split("||");

    	switch (data) {
            case "estadoayuda":
                parte1=estados[0]; //Devuelve el numero de página en la que me encuentro
                estadoayuda=(parte1.split("="))[1];
                return estadoayuda;
                break;
            case "estadoaudio":
                parte2=estados[1];//me devuelve array?checked
                estadoaudio=(parte2.split("="))[1];
                return estadoaudio;
                break;
            default:
                //
                // Default
                //
                break;
        }
	}
    
}


/* 
** Function: ejecutarEstadoAudio();
** Description: Esta función sirve para poner el icono del audio de "on" si el alumno lo dejó activado y de "off" si el alumno lo dejo desactivado, y encenderlo o apagarlo dependiendo de si está en "on" o en "off".
Esta función se debe ejecutar en el archivo functions.js ya que si no no lee el número de audios y videos que hay en el contenido
============================================================================= */
function ejecutarEstadoAudio(){
	//SI SE ESTÁ TRABAJANDO EN LOCAL, DE INICIO PONDRE EL AUDIO EN ACTIVO Y NO ENTRARÁ EN CONTACTO CON EL LMS
	if (escormizar=="no"){
		audioActivo = true;
	}

	//SI ESTÁ SUBIDO A PLATAFORMA, ENTRARÁ EN CONTACTO CON EL LMS Y MIRARÁ EL ESTADO EN QUE DEJO EL ALUMNO EL BOTÓN DE AUDIO (ACTIVO O INACTIVO)
	if (escormizar=="si"){
			//Si el alumno dejó el audio en mute, al cargar la página inicialmente el audio estará quitado
			if (estadoAyudaAudio("estadoaudio")=="off"){
				$('.icon-audio').html($audioOff);
				for (i=0; i<$('audio').length; i++){
					$('audio')[i].volume = 0;
				}
				for (i=0; i<$('video').length; i++){
					$('video')[i].volume = 0;
				}
				audioActivo = false;
			}

			//Si el alumno dejó el audio en on, al cargar la página inicialmente el audio estará activado
			else if (estadoAyudaAudio("estadoaudio")=="on"){
				$('.icon-audio').html($audioOn);
				for (i=0; i<$('audio').length; i++){
					$('audio')[i].volume = 1;
				}
				for (i=0; i<$('video').length; i++){
					$('video')[i].volume = 1;
				}
				audioActivo = true;
			}
		}
	}




//B O T O N E S
	

	/* 
	** Function: btnAudio();
	** Description: Esta función cambia el svg por activo e inactivo y silencia o activa el audio
	============================================================================= */
	$('.icon-audio').on('click', btnAudio);
	function btnAudio(){
		if(audioActivo == true){
			//SI ESTÁ SUBIDO A PLATAFORMA, SE PONDRÁ EN CONTACTO CON EL LMS Y SE GUARDARÁ QUE EL ALUMNO HA DESACTIVADO EL AUDIO
			if (escormizar=="si"){
				doLMSSetValue('cmi.comments', 'estadoayuda='+estadoAyudaAudio("estadoayuda")+'||estadoaudio=off');
				doLMSCommit();
			}
			$('.icon-audio').html($audioOff);
			    for (i=0; i<$('audio').length; i++){
			      	$('audio')[i].volume = 0;
			    }
			    for (i=0; i<$('video').length; i++){
			    	$('video')[i].volume = 0;
			    }
			audioActivo = false;
		}else if(audioActivo == false){
			//SI ESTÁ SUBIDO A PLATAFORMA, SE PONDRÁ EN CONTACTO CON EL LMS Y SE GUARDARÁ QUE EL ALUMNO HA ACTIVADO EL AUDIO
			if (escormizar=="si"){
				doLMSSetValue('cmi.comments', 'estadoayuda='+estadoAyudaAudio("estadoayuda")+'||estadoaudio=on');
				doLMSCommit();
			}
			$('.icon-audio').html($audioOn);
			    for (i=0; i<$('audio').length; i++){
			      	$('audio')[i].volume = 1;
			    }	
			    for (i=0; i<$('video').length; i++){
			    	$('video')[i].volume = 1;
			    }		
			audioActivo = true;
		}
	}
//============================================================================= */
//============================================================================= */

//PARA QUE EL ALUMNO PUEDA PASAR LAS PÁGINAS CUANDO PULSA LAS FLECHAS DEL TECLADO DE DERECHA E IZQUIERDA
/* 
	** Function: avanzarRetrocederTeclado();
	** Description: Esta función avanza o retrocede página pulsando las flechas del teclado de derecha e izquierda.
	============================================================================= */
function avanzarRetrocederTeclado(){
	$(document).keydown(function(e) {
		//Cuando pulsa en la flecha de ir a la izquierda retrocede una página del curso
	    if(e.keyCode==37){
	    	retroceder();
	    }
	    //Cuando pulsa en la flecha de ir a la derecha avanza una página del curso
	    else if(e.keyCode==39){
	    	avanzar();
	    }
	});
}
avanzarRetrocederTeclado();

/* G  A  M  I  F  I  C  A  C  I  Ó  N*/




/* 
** Function: actualizarPagina();
** Description: Esta función sirve para guardar los intentos y la puntuación de un alumno en las distintas actividades puntuables que pueda haber y también sirve para que cuando estoy en Cornerstone, cierre automaticamente la página.
============================================================================= */
function actualizarPagina(){
	if (escormizar == "si"){
		controlarEstado();
		//CONVIERTO MI ARRAY DE ESTADOS EN UN JSON
		arrayestadosjson=JSON.stringify(arrayestados);
		
		//GUARDO LA PÁGINA Y EL ESTADO DE CADA TEMA EN EL LMS
		//Tengo que controlar si se ha empezado el test, si es asi no dejare que haga este codigo
		if($pagina <= indice.length){
			//doLMSSetValue('cmi.suspend_data', 'cont='+$pagina+'||array='+arrayestadosjson+'||intentosjuegos='+JSON.stringify(gameattempts)+'||puntosjuegos='+JSON.stringify(gamescores));
		}

		
		if(puntuacion>parseFloat(99)){
			doLMSSetValue('cmi.core.score.raw', 100);
		}else{
			doLMSSetValue('cmi.core.score.raw', Math.round(puntuacion));
		}
		doLMSCommit();
		
	}else{
	}


	
	//Si la plataforma en la que va el curso es Cornerstone, me aseguro de guardar los datos cerrando la ventana.
	if (plataforma=="Cornerstone"){
		
		window.top.close();
	}
}



function actualizarPaginaAntes(){

		/*if(doLMSGetValue("cmi.suspend_data") == ""){
			doLMSSetValue('cmi.suspend_data', 'cont='+indice.length+'||array='+arrayestadosjson+'||intentosjuegos='+JSON.stringify(gameattempts)+'||puntosjuegos='+JSON.stringify(gamescores)+'||ceros='+($ceros)+'||valorespreguntas='+JSON.stringify(arrayopcionesintento));
		}*/
        if (escormizar == "si"){
        	controlarEstado();
			//CONVIERTO MI ARRAY DE ESTADOS EN UN JSON
	    	arrayestadosjson=JSON.stringify(arrayestados);

			if($estado[indice.length] == "nav-visto" ){
		navegacion = 'libre';
		navegarIndice();
		$porcentaje = 100;
		}

			//Si he empezado ya el test guarda tambien en moodle el archivo html que tiene que abrir, en este caso en es 048.html
			if($pagina >= indice.length){
				//GUARDO EL ARCHIVO HTML QUE QUE TENGO QUE ABRIR PARA EL TEST Y LA PÁGINA DEL TEST POR LA QUE VOY
				//Lo único que cambia entre esto y lo que hay en el else es lo que hay en cont, aqui le pongo lo que vale indice.length que equivale al numero del html del test.
				if($pagina <= 9){
					$ceros = "00";
				}else if($pagina > 9){
					$ceros = "0";
				}
				doLMSSetValue('cmi.suspend_data', 'cont='+indice.length+'||array='+arrayestadosjson+'||intentosjuegos='+JSON.stringify(gameattempts)+'||puntosjuegos='+JSON.stringify(gamescores)+'||ceros='+($ceros)+'||valorespreguntas='+JSON.stringify(arrayopcionesintento)+'||testRepetido='+testrepetido.toString()+'||paginasVisitadasEnNavegacionLibre='+JSON.stringify(paginasVisitadasEnNavegacionLibre));
				//doLMSSetValue('cmi.core.score.raw', puntuacion);
				//doLMSCommit();
				$('.icon-next').css('display', 'inline');
			}else{
				//GUARDO LA PÁGINA Y EL ESTADO DE CADA TEMA EN EL LMS
	    		doLMSSetValue('cmi.suspend_data', 'cont='+$pagina+'||array='+arrayestadosjson+'||intentosjuegos='+JSON.stringify(gameattempts)+'||puntosjuegos='+JSON.stringify(gamescores)+'||ceros='+($ceros)+'||valorespreguntas='+JSON.stringify(arrayopcionesintento)+'||testRepetido='+testrepetido.toString()+'||paginasVisitadasEnNavegacionLibre='+JSON.stringify(paginasVisitadasEnNavegacionLibre));
				//doLMSSetValue('cmi.core.score.raw', puntuacion);
				//doLMSCommit();
			}
			doLMSCommit();
		}	
}


/* 
** Function: obtenerdatos(data);
** Description: Esta función sirve para conectarse con el LMS y obtener los datos de si se han visto o no los temas y subtemas, de la página por donde voy, de los intentos y de los puntos en las actividades gamificadas.
============================================================================= */
function obtenerdatos(data){

	if(escormizar=="si"){
		_localLocation = doLMSGetValue("cmi.suspend_data");
		
//SI SE ACABA DE EMPEZAR EL CURSO
		if (_localLocation == "") {
			doLMSSetValue('cmi.suspend_data', 'cont='+1+'||array=["icon-no-checked","icon-no-checked","icon-no-checked","icon-no-checked","icon-no-checked"]||intentosjuegos='+gameattemptsjson+'||puntosjuegos='+gamescoresjson+'||ceros='+00+'||valorespreguntas='+JSON.stringify(arrayopcionesintento)+'||testRepetido='+testrepetido.toString()+'||paginasVisitadasEnNavegacionLibre='+JSON.stringify(paginasVisitadasEnNavegacionLibre));
			//doLMSCommit();
			_localLocation = doLMSGetValue("cmi.suspend_data");
		}else if(testEmpezado == true){
			doLMSSetValue('cmi.suspend_data', 'cont='+1+'||array=["icon-no-checked","icon-no-checked","icon-no-checked","icon-no-checked","icon-no-checked"]||intentosjuegos='+gameattemptsjson+'||puntosjuegos='+gamescoresjson+'||ceros='+$ceros+'||valorespreguntas='+JSON.stringify(arrayopcionesintento)+'||testRepetido='+testrepetido.toString()+'||paginasVisitadasEnNavegacionLibre='+JSON.stringify(paginasVisitadasEnNavegacionLibre));
			//doLMSCommit();
		}



		resultado=_localLocation.split("||");
    	switch (data) {

            case "contador":
                parte1=resultado[0]; //Devuelve el numero de página en la que me encuentro
                contador=(parte1.split("="))[1];
                return parseInt(contador);
                break;
            case "estado":
                parte2=resultado[1];//me devuelve array?checked
                estado=(parte2.split("="))[1];
                resa = stripslashes(estado);
                return resa;
                break;
            case "intentosjuegos":
                parte3=resultado[2];//me devuelve array?con los intentos de cada juego
                intentosjuegos=(parte3.split("="))[1];
                resintentos = stripslashes(intentosjuegos)
                return JSON.parse(resintentos);
                break;
            case "puntosjuegos":
                parte4=resultado[3];//me devuelve array?con los intentos de cada juego
                puntosjuegos=(parte4.split("="))[1];
                respuntos = stripslashes(puntosjuegos)
                return JSON.parse(respuntos);
                break;
			case "intentosrealizados":
				parte1 = resultado[0];//Devuelve una cadena con las preguntas acertadas por el alumno
				preguntasacertadas = (parte1.split("="))[1];
				return parseInt(preguntasacertadas);
				break;
			
            default:
                //
                // Default
                //
                break;
        }

	}

}



function mostrarRepetirTest(){
	notacorte = datostest[0].aprobadonota;
		if(Math.round(puntuacion)<notacorte && /*contadorDiapositivasTest==datostest[0].numeropreguntas*/$pagina==(indice.length + obtenerdatosTest("estadopreguntastest").length + 1) && obtenerdatos("intentosrealizados")<datostest[0].numerointentos){
			$("#btn-repetirtest").css("display", "inline-block");
			$("#btn-cerrartest").css("display", "inline-block");
			$("#btn-resetyrestart").css("display", "inline-block");
			$("#btn-revisarpreguntas").css("display", "none");
		}
		else if (Math.round(puntuacion)==notacorte && /*contadorDiapositivasTest==datostest[0].numeropreguntas*/$pagina==(indice.length + obtenerdatosTest("estadopreguntastest").length + 1) && obtenerdatos("intentosrealizados")<datostest[0].numerointentos){
			$("#btn-cerrartest").css("display", "inline-block");
			$("#btn-revisarpreguntas").css("display", "none");
			$("#btn-repetirtest").css("display", "none");
			$("#btn-resetyrestart").css("display", "none");
		}
}


//FUNCION PARA VOLVER A CARGAR EL TEST DE NUEVO
function repetirTest(){
	restaurarProgreso();

	contadorDiapositivasTest = 0;
	testrepetido = true;


	//Pongo la pagina inicial del test, la de la interrogacion
	$pagina = indice.length
	$ceros = "00";


	if($pagina == indice.length && testrepetido==true){
		/*Este if lo pongo en el caso de que la pagina sea la misma que el tamaño
		del indice, en este caso de deberia de mostrar la interrogacion (si fuese la primera vez que se realiza el test).
		Pero como NO es la primera vez que se hace el test, la interrogación no la queremos mostrar, entonces debemos 
		sumar una unidad a la variable $pagina para que no se muestre por duplicado la primera pregunta del test
		ya que la mostraría cuando $pagina valiese 48 (que es donde deberia aparecer la interrogacion, que no la queremos
		mostrar en este caso) y tambien la mostraria cuando $pagina valiese 49 puesto que, este es el numero de pagina que
		se corresponde con la primera pregunta realmente.
		Haciendo este if conseguimos aumentar directamente en uno el valor de $pagina consiguiendo asi mostrar
		de una la primera pregunta sin tener que sacar la interrogacion y sin que se duplique por esto la primera pregunta.*/
		if($pagina <= indice.length || (arrayopcionesintento[contadorDiapositivasTest]=="acierto" && contadorDiapositivasTest < datos.length)){//Resto 1 puesto que necesito saber el valor de la pagina anterior que acabo de contestar, no de la actual que todavia no ha sido contestada
			if(paginasVisitadasEnNavegacionLibre.indexOf($pagina)==-1){
				paginasVisitadasEnNavegacionLibre.push(parseInt($pagina));
			}
		}
		$pagina++;
	}


	var contadorWhile = 0;
	while(arrayopcionesintento[contadorWhile]=="acierto"){//Este bucle se hace para saber en que pagina del test tenemos que iniciarlo cuando vaya a ser reintentado. Sera iniciado en la primera pregunta que haya sido fallada de toda la pila de preguntas del test.
		if($pagina <= indice.length || (arrayopcionesintento[contadorDiapositivasTest]=="acierto" && contadorDiapositivasTest < datos.length)){//Resto 1 puesto que necesito saber el valor de la pagina anterior que acabo de contestar, no de la actual que todavia no ha sido contestada
			if(paginasVisitadasEnNavegacionLibre.indexOf($pagina)==-1){
				paginasVisitadasEnNavegacionLibre.push(parseInt($pagina));
			}
		}
		$pagina++;
		contadorWhile++;
	}

	
	//Llamo a la funcion de cargar pagina
	cargarPagina();
	navegacion = "restringida";

	$("#btn-next").css("display", "inline");
	$("#btn-next-mobile").css("display", "inline");
	$("#btn-next").removeClass("btn-next-inactive");
	$("#btn-next-mobile").removeClass("btn-next-inactive");
	$("#btn-next").addClass("btn-next");
	$("#btn-next-mobile").addClass("btn-next");
	
}

function obtenerNumeroElementosSuspendData(){
	var numElementos = 0;

	if(escormizar){
		var words = doLMSGetValue("cmi.suspend_data").split("||")
	}

	return numElementos;
}

function cerrarPagina () {
	window.top.close();
}

function mostrarResultadosTest(){
	testTerminado = true;
	testEmpezado = true;
	//Pinto resultado
	//SI EL ESTADO DEL CURSO ES COMPLETADO (EL ALUMNO HA APROBADO EL TEST, LE APARECERÁ LA PANTALLA CON EL PORCENTAJE DE SU NOTA)
	$("#btn-next").addClass("btn-next");
	$("#btn-next-mobile").addClass("btn-next");
	
	$('h2').html("");
	$('h3').html("");

	if(escormizar=="si"){
		if(puntuacion>0){
			nota = Math.round(puntuacion);
		}else if(parseFloat(doLMSGetValue('cmi.core.score.raw'))>0){//Si puntuacion es 0, comprobare si en socre.rawe hay alguna puntuacion (este se dará cuando el test haya sido completado con la maximam puntuacion) y se haya recargado la pagina
			puntuacion = parseFloat(doLMSGetValue('cmi.core.score.raw'));
			nota = Math.round(puntuacion);
		}else if (isNaN(puntuacion) || isNaN(nota)){
			puntuacion = 0;
			nota = 0;
			}
	}
	if(nota>=98){

		//Pintamos el div de resultado
	    $('.test').html('<div id="resultado"><h1>'+pantallaFinalTest[0].mensajefinal+'</h1><span>'+Math.round(nota)+" %"+'</span><p style="text-align:center">'+pantallaFinalTest[0].aprobado+'</p><input class="btn btn-default btn-bureau btn-md" type="submit" id="btn-revisarpreguntas" value="Test review" onclick="revisarPreguntas()"><input class="btn btn-default btn btn-bureau btn-md" type="submit" id="btn-cerrartest" value="End and close" onclick="cerrarPagina()"><div class="col-xs-12 wow swing" data-wow-duration="4s" data-wow-delay="0s"><div clas="col-xs-12 col-sm-6 col-lg-4 col-center"><img src="img/medalla.svg" class="img40 hidden-sm hidden-xs img-responsive center-block"><img src="img/medalla.svg"  class="visible-sm visible-xs img-responsive"></div></div></div>');
		new WOW().init();
		//testEmpezado=false;

        navegacion = 'libre';
        navegarActivo();navegarIndice();	
    }else{
        $('div.contenedor-unidad').html('<div id="resultado"><h1>'+pantallaFinalTest[0].mensajefinal+'</h1><span>'+Math.round(nota)+" %"+'</span><p style="text-align:center">'+pantallaFinalTest[0].suspenso+'</p><input class="btn btn-default btn-bureau btn-md" type="submit" id="btn-repetirtest" value="Retake the final test" onclick="repetirTest()"><input class="btn btn-default btn btn-bureau btn-md" type="submit" id="btn-cerrartest" value="Close and try again later" onclick="cerrarPagina()"><input class="btn btn-default btn-bureau btn-md" type="button" id="btn-resetyrestart" value="Reset and re-start the training" data-toggle="modal" data-target="#myModal"><div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Re-start the training</h4></div><div class="modal-body"><p>You are going to restart the whole training. Are you sure?</p></div><div class="modal-footer"><button type="button" class="btn btn-bureau" class="close" data-dismiss="modal" onclick="resetyrestart()">YES</button><button type="button" class="btn btn-bureau" data-dismiss="modal">NO</button></div></div></div></div><div class="col-xs-12 wow shake" data-wow-duration="4s" data-wow-delay="0s"><div clas="col-xs-12 col-sm-6 col-lg-4 col-center"><img src="img/suspenso.jpg" class="img40 hidden-sm hidden-xs img-responsive center-block"><img src="img/suspenso.jpg"  class="visible-sm visible-xs img-responsive"></div></div></div>');
		
	} 
	/*if(nota>=100){
		nota = 0;
	}
	$('.test').html('');
	
	$('.test').html('<div id="resultado"><h1></h1><span></span><p style="text-align:center"></p></div><div style="text-align:center"><input class="btn btn-default btn btn-bureau btn-md" type="submit" id="btn-revisarpreguntas" value="Test review" onclick="revisarPreguntas()"><input class="btn btn-default btn btn-bureau btn-md" type="submit" id="btn-repetirtest" value="Retake the final test" onclick="repetirTest()"><input class="btn btn-default btn btn-bureau btn-md" type="submit" id="btn-cerrartest" value="Close and try again" onclick="actualizarPagina()"></div>');
	$('.test').html('<div id="resultado"><h1>'+pantallaFinalTest[0].mensajefinal+'</h1><span>'+Math.round(nota)+" %"+'</span><p style="text-align:center">'+pantallaFinalTest[0].aprobado+'</p></div><div style="text-align:center"><input class="btn btn-default btn btn-bureau btn-md" type="submit" id="btn-revisarpreguntas" value="Test review" onclick="revisarPreguntas()"><input class="btn btn-default btn btn-bureau btn-md" type="submit" id="btn-repetirtest" value="Retake the final test" onclick="repetirTest()"><input class="btn btn-default btn btn-bureau btn-md" type="submit" id="btn-cerrartest" value="Close and try again" onclick="actualizarPagina()"></div>');*/

	
	mostrarRepetirTest();
	//PONGO EL BOTÓN DE SIGUIENTE INACTIVO
	if (parseInt($pagina) > parseInt(indice.length)) {
			$('.progreso').css('display', 'none');
			$('.barra').css('display', 'none');		// Esto hace que desaparezca la barra de progreso durante el test
			$('.footer-phone .progreso').css('display', 'none');
			$('.num-pagina').css('color', 'transparent');
	}

	$("#btn-next").removeClass("btn-next");
	$("#btn-next").addClass("btn-next-inactive");
	$("#btn-next-mobile").removeClass("btn-next");
	$("#btn-next-mobile").addClass("btn-next-inactive");

	if(escormizar=="si"){
		doLMSSetValue('cmi.core.score.raw', Math.round(puntuacion));
	}
}


/**
 * Funcion para implementar la funcionalidad del boton Rest y restart del final del test
 */
function resetyrestart(){
	//Restauro al valor por defecto los valores de todas las preguntas del test a "sincontestar"
	//1)Lo borro de la memoria
	testEmpezado = false; 
	$porcentaje = 100;
	for(i=0; i<datostest[0].numeropreguntas; i++){			
		arrayopcionesintento[i] = "sincontestar";
	}
	
	puntuacion = 0;
	nota = 0;
	doLMSSetValue('cmi.core.score.raw', 0);
	//2)Pongo la primera diapositiva de la unidad
	$pagina = 1;
	
	//3)Lo borro del SCORM
	doLMSSetValue('cmi.suspend_data', 'cont='+$pagina+'||array='+arrayestadosjson+'||intentosjuegos='+JSON.stringify(gameattempts)+'||puntosjuegos='+JSON.stringify(gamescores)+'||ceros='+$ceros+'||valorespreguntas='+JSON.stringify(arrayopcionesintento)+'||testRepetido='+testrepetido.toString()+'||paginasVisitadasEnNavegacionLibre='+JSON.stringify(paginasVisitadasEnNavegacionLibre));
	doLMSCommit();
	cargarPagina();
	navegacion = "libre";
	
	//mostrarResultadosTest();
	$("#btn-next").css('display', 'inline');
	$("#btn-next").removeClass("btn-next-inactive");
	$("#btn-next-mobile").addClass("btn-next");
	navegarIndice();
}




$(window).load(function(){

	
	if(doLMSGetValue("cmi.core.score.raw")!=""){
		puntuacion = parseFloat(doLMSGetValue("cmi.core.score.raw"));
	}
	
	/*var contWhile = 1;
	while(arrayestados[contWhile-1]!="no-visto"){//-1 para poder acceder a la posicion 0 del array
		contWhile++;
	}*/

	restaurarProgreso();
	
	actualizarPaginaAntes();
		
	if($pagina>=indice.length){
		repetirTest();
	}
});

$( window ).unload(function() {
		doLMSSetValue('cmi.suspend_data', 'cont='+$pagina+'||array='+arrayestadosjson+'||intentosjuegos='+JSON.stringify(gameattempts)+'||puntosjuegos='+JSON.stringify(gamescores)+'||ceros='+$ceros+'||valorespreguntas='+JSON.stringify(arrayopcionesintento)+'||testRepetido='+testrepetido.toString()+'||paginasVisitadasEnNavegacionLibre='+JSON.stringify(paginasVisitadasEnNavegacionLibre));
		doLMSSetValue('cmi.core.score.raw', puntuacion);
		doLMSCommit();
});

function controlScroll(){
	$('html, body').animate( {scrollTop : 0}, 800 );
}




