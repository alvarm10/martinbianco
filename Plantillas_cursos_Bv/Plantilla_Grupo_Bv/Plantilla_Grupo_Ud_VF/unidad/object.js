/*******************************************************************************
**
** FileName: object.js
**
*******************************************************************************/

/*
Cliente: 
Descripción: 
Fecha: 00/00/0000
Versión: V1
*/


var nombreUnidad = "HTML5 Template"; 			//Título de la Unidad
var lineaNegocio = "grupo";						//grupo (María), customizado (Silvina) y academico (Ruth)	
var navegacion = "libre";						//libre, restringida o semirestringida (solo actividades)
var idioma = "EN";								//EN (inglés), ES (español) y FR (francés)
var mostrarScrollUp = "no";						//Si se quiere o no mostrar el boton de "scroll-up" (subida rapida). "si" o "no"
var feedback = "siempre";						//nunca, siempre, respCorrectas y respIncorrectas
var escormizar = "no";							//Dos opciones, si o no, una vez terminado de maquetar el curso y justo antes de subir a la plataforma hay que poner la opción "si" para que guarde al alumno el progreso del curso, mientras se está maquetando hay que colocar la opción "no".
var controlesaudios = "si";						//"si" si queremos que aparezca la barra de audio con los controles y "no" si no queremos que aparezca la barra de audio en los controles.
var plataforma = "Moodle";						//Ponemos el nombre de la plataforma donde se va a subir el SCORM, Ej: "Moodle", "Cornerstone", etc.
var actividadespuntuables = 9;					//En esta variable hay que introducir el número de actividades puntuables que tiene esta unidad.

//IMPORTANTE: EN EL CASO DE UTILIZAR ETIQUETAS TIPO <em>, <sup>, <sub>...etc Es necesario colocar la clase 'estiloEnIndice', con comilla simple. Esta
// Clase respeta los estilos tanto en el indice como en la banda h3 y h2. Ejemplo: "subtema": "Prueba <em class='estiloEnIndice'>Cosas </em><sup class='estiloEnIndice'>arriba </sup>
var indice = [
	{
		"pag": 1,
		"tema": "Introduction",
		"subtema": "Objetives"
	},
	{
		"pag": 2,
		"tema": "Estatic elements",
		"subtema": "Paragraph, list, ..."
	},
	{
		"pag": 3,
		"tema": "Estatic elements",
		"subtema": "Tables"
	},
	{
		"pag": 4,
		"tema": "Estatic elements",
		"subtema": "Images"
	},
	{
		"pag": 5,
		"tema": "Dinamic elements",
		"subtema": "Carousel_1"
	},
	{
		"pag": 6,
		"tema": "Dinamic elements",
		"subtema": "Carousel_2"
	},
	{
		"pag": 7,
		"tema": "Dinamic elements",
		"subtema": "Content carousel"
	},
	{
		"pag": 8,
		"tema": "Dinamic elements",
		"subtema": "Accordion"
	},
	{
		"pag": 9,
		"tema": "Dinamic elements",
		"subtema": "Dinamic images"
	},
	{
		"pag": 10,
		"tema": "Dinamic elements",
		"subtema": "Big cards"
	},
	{
		"pag": 11,
		"tema": "Dinamic elements",
		"subtema": "Vertical timeline"
	},
	{
		"pag": 12,
		"tema": "Dinamic elements",
		"subtema": "Horizontal timeline"
	},
	{
		"pag": 13,
		"tema": "Dinamic elements",
		"subtema": "Dinamic tables"
	},
	{
		"pag": 14,
		"tema": "Dinamic elements",
		"subtema": "Dinamic tables - Circular process"
	},
	{
		"pag": 15,
		"tema": "Dinamic elements",
		"subtema": "Modals and popOver"
	},
	{
		"pag": 16,
		"tema": "Dinamic elements",
		"subtema": "Light box"
	},
	{
		"pag": 17,
		"tema": "Animated elements",
		"subtema": "Paragraph, list, ..."
	},
	{
		"pag": 18,
		"tema": "Animated elements",
		"subtema": "Carousel_1"
	},
	{
		"pag": 19,
		"tema": "Animated elements",
		"subtema": "Accordion"
	},
	{
		"pag": 20,
		"tema": "Animated elements",
		"subtema": "Dinamic images"
	},
	{
		"pag": 21,
		"tema": "Audio controller",
		"subtema": "Carousel"
	},
	{
		"pag": 22,
		"tema": "Audio controller",
		"subtema": "Acordion"
	},
	{
		"pag": 23,
		"tema": "Audio controller",
		"subtema": "Dinamic images"
	},
	{
		"pag": 24,
		"tema": "Audio controller",
		"subtema": "Vertical timeline"
	},
	{
		"pag": 25,
		"tema": "Audio controller",
		"subtema": "Horizontal timeline"
	},
	{
		"pag": 26,
		"tema": "Audio controller",
		"subtema": "Dinamic tables"
	},
	{
		"pag": 27,
		"tema": "Audio controller",
		"subtema": "Modals and popOver"
	},
	{
		"pag": 28,
		"tema": "Activities",
		"subtema": "Hotspot 1"
	},
	{
		"pag": 29,
		"tema": "Activities",
		"subtema": "Hotspot 2"
	},
	{
		"pag": 30,
		"tema": "Activities",
		"subtema": "Put in order"
	},
	{
		"pag": 31,
		"tema": "Activities",
		"subtema": "Associate columns"
	},
	{
		"pag": 32,
		"tema": "Activities",
		"subtema": "Associate graphic 1"
	},
	{
		"pag": 33,
		"tema": "Activities",
		"subtema": "Associate graphic 2"
	},
	{
		"pag": 34,
		"tema": "Activities",
		"subtema": "True/false"
	},
	{
		"pag": 35,
		"tema": "Activities",
		"subtema": "Select"
	},
	{
		"pag": 36,
		"tema": "Activities",
		"subtema": "Single choice"
	},
	{
		"pag": 37,
		"tema": "Activities",
		"subtema": "Multiple choice"
	},
	{
		"pag": 38,
		"tema": "Gamificación",
		"subtema": "Sopa de letras 1"
	},
	{
		"pag": 39,
		"tema": "Gamificación",
		"subtema": "Sopa de letras 2"
	},
	{
		"pag": 40,
		"tema": "Gamificación",
		"subtema": "Sopa de letras 3"
	},
	{
		"pag": 41,
		"tema": "Gamificación",
		"subtema": "Crucigrama 1"
	},
	{
		"pag": 42,
		"tema": "Gamificación",
		"subtema": "Crucigrama 2"
	},
	{
		"pag": 43,
		"tema": "Gamificación",
		"subtema": "Associate graphic 1"
	},
	{
		"pag": 44,
		"tema": "Gamificación",
		"subtema": "Associate graphic 2"
	},
	{
		"pag": 45,
		"tema": "Gamificación",
		"subtema": "Hotspot"
	},
	{
		"pag": 46,
		"tema": "Multiejercicio",
		"subtema": ""
	}
	
];

/*
var indice = [
	{
		"pag": 1,
		"tema": "",
		"subtema": "",
	},
	{
		"pag": 2,
		"tema": "",
		"subtema": "",
	},
	{
		"pag": 3,
		"tema": "",
		"subtema": "",
	},
	{
		"pag": 4,
		"tema": "",
		"subtema": "",
	},
	{
		"pag": 5,
		"tema": "",
		"subtema": "",
	}
];
*/

//PARA QUE FUNCIONEN LOS ELEMENTOS GENERALES DE LA PLANTILLA EN SU IDIOMA RESPECTIVO
/*==================================================================================================== */
/*==================================================================================================== */
/*==================================================================================================== */

if (idioma === "EN") {
	//TITULO DEL INDICE DEL SUMARIO
	tituloIndice="Summary";

	//BOTONES DE LAS AUTOEVALUACIONES (CORREGIR, SOLUCIÓN Y REINICIAR)
	btnCorregir="Check";
	btnSolucion="Solution";				                                
	btnReiniciar="Restart";
	
	//INSTRUCCIONES PARA QUE EL ALUMNO CLIQUE EN LOS RECURSOS QUE TIENEN DENTRO CONTENIDO
	clickaqui="Click here";
	zoom="Click to zoom";
	recursosayuda="Click on the marked areas to learn more.";
	imagenesdinamicasayuda="Click on the image to listen the audio.";

	//MENSAJE PARA QUE PULSE EN EL AUDIO PRINCIPAL DE LA DIAPOSITIVA
	audioprincipalayuda="Click on the audio for further details.";

	//TOOLTIPS DE LOS ICONOS DE AUDIO, AYUDA, GLOSARIO, DOCUMENTACIÓN, AMPLIAR TEXTO Y REDUCIR TEXTO
	tooltipaudio="Audio";
	tooltipayuda="Help";
	tooltipglosario="Glossary";
	tooltipdocumentacion="Documentation";
	tooltipreducirtexto="Reduce text";
	tooltipaumentartexto="Enlarge text";

	//FEEDBACK DE PINCHAR EN LAS OPCIONES PARA CORREGIR AUTOEVALUACIÓN
	pinchaTodas="Please, answer all questions.";
	mensajeSelect="Select an option.";

	//FEEDBACK GENERAL EJERCICIO DE SELECTS
	feedbackAciertoSelect="Congratulations! All your answers are correct.";
	feedbackFalloSelect="Sorry, some of your answers are incorrect.";
	feedbackFalloTodasSelect="Sorry, all of your answers are incorrect.";

	//FEEDBACK GENERAL EJERCICIO DE TRUE FALSE
	feedbackAciertoTrueFalse="Congratulations! All your answers are correct.";
	feedbackFalloTrueFalse="Sorry, some of your answers are incorrect.";
	feedbackFalloTodasTrueFalse="Sorry, all of your answers are incorrect.";

	//FEEDBACK GENERAL EJERCICIO DE ASOCIAR COLUMNAS Y DE ASOCIAR GRÁFICO
	feedbackAciertoUnir="Congratulations! All your answers are correct.";
	feedbackFalloUnir="Sorry, some of your answers are incorrect.";
	feedbackFalloTodasUnir="Sorry, all of your answers are incorrect.";

	//FEEDBACK GENERAL EJERCICIO DE ORDENAR
	feedbackAciertoOrdenar="Congratulations! All your answers are correct.";
	feedbackFalloOrdenar="Sorry, some of your answers are incorrect.";
	feedbackFalloTodasOrdenar="Sorry, all of your answers are incorrect.";

	//FEEDBACK GENERAL EJERCICIO DE SINGLE CHOICE
	feedbackAciertoSingleChoice="Congratulations! Your answer is correct.";
	feedbackFalloSingleChoice="Sorry, your answer is incorrect.";

	//FEEDBACK GENERAL EJERCICIO DE MULTIPLE CHOICE
	feedbackAciertoMultipleChoice="Congratulations! All your answers are correct.";
	feedbackFalloMultipleChoice="Sorry, some of your answers are incorrect.";
	feedbackFalloTodasMultipleChoice="Sorry, all of your answers are incorrect.";
	feedbackNoSuficientesMultipleChoice="Sorry, the number of options you have selected is less than the number of correct options, select some more.";
	feedbackDemasiadasMultipleChoice="Sorry, the number of options you have selected is greater than the number of correct options, unselect some.";

	//FEEDBACK GENERAL EJERCICIO HOTSPOT
	feedbackAciertoHotspot="Congratulations! All your answers are correct.";
	feedbackFalloHotspot="Sorry, some of your answers are incorrect.";
	feedbackFalloTodasHotspot="Sorry, all of your answers are incorrect.";
	feedbackNoSuficientesHotspot="The number of selected answers is not enough, choose some more.";
	feedbackDemasiadasHotspot="You have selected too many answers, remove some of them.";
}

if (idioma=="ES"){
	//TITULO DEL INDICE DEL SUMARIO
	tituloIndice="Indice";

	//BOTONES DE LAS AUTOEVALUACIONES (CORREGIR, SOLUCIÓN Y REINICIAR)
	btnCorregir="Corregir";
	btnSolucion="Solución";
	btnReiniciar="Reiniciar";

	//INSTRUCCIONES PARA QUE EL ALUMNO CLIQUE EN LOS RECURSOS QUE TIENEN DENTRO CONTENIDO
	clickaqui="Haz clic aquí";
	zoom="Haz clic para agrandar";
	recursosayuda="Haz clic en las áreas marcadas para ampliar información.";
	imagenesdinamicasayuda="Haz clic en la imagen para escuchar el audio.";

	//MENSAJE PARA QUE PULSE EN EL AUDIO PRINCIPAL DE LA DIAPOSITIVA
	audioprincipalayuda="Haz clic en el audio para más detalles.";

	//TOOLTIPS DE LOS ICONOS DE AUDIO, AYUDA, GLOSARIO, DOCUMENTACIÓN, AMPLIAR TEXTO Y REDUCIR TEXTO
	tooltipaudio="Audio";
	tooltipayuda="Ayuda";
	tooltipglosario="Glosario";
	tooltipdocumentacion="Documentación";
	tooltipreducirtexto="Reducir texto";
	tooltipaumentartexto="Aumentar texto";

	//FEEDBACK DE PINCHAR EN LAS OPCIONES PARA CORREGIR AUTOEVALUACIÓN
	pinchaTodas="Por favor, contesta a todas las preguntas.";
	mensajeSelect="Selecciona una opción.";

	//FEEDBACK GENERAL EJERCICIO DE SELECTS
	feedbackAciertoSelect="¡Enhorabuena! Todas tus respuestas son correctas.";
	feedbackFalloSelect="Lo sentimos pero alguna de tus respuestas es incorrecta.";
	feedbackFalloTodasSelect="Lo sentimos pero todas tus respuestas son incorrectas.";

	//FEEDBACK GENERAL EJERCICIO DE TRUE FALSE
	feedbackAciertoTrueFalse="¡Enhorabuena! Todas tus respuestas son correctas.";
	feedbackFalloTrueFalse="Lo sentimos pero alguna de tus respuestas es incorrecta.";
	feedbackFalloTodasTrueFalse="Lo sentimos pero todas tus respuestas son incorrectas.";

	//FEEDBACK GENERAL EJERCICIO DE ASOCIAR COLUMNAS Y DE ASOCIAR GRÁFICO
	feedbackAciertoUnir="¡Enhorabuena! Todas tus respuestas son correctas.";
	feedbackFalloUnir="Lo sentimos pero alguna de tus respuestas es incorrecta.";
	feedbackFalloTodasUnir="Lo sentimos pero todas tus respuestas son incorrectas.";

	//FEEDBACK GENERAL EJERCICIO DE ORDENAR
	feedbackAciertoOrdenar="¡Enhorabuena! Todas tus respuestas son correctas.";
	feedbackFalloOrdenar="Lo sentimos pero alguna de tus respuestas es incorrecta.";
	feedbackFalloTodasOrdenar="Lo sentimos pero todas tus respuestas son incorrectas.";

	//FEEDBACK GENERAL EJERCICIO DE SINGLE CHOICE
	feedbackAciertoSingleChoice="¡Enhorabuena! Tu respuesta es correcta.";
	feedbackFalloSingleChoice="Lo sentimos pero tu respuesta es incorrecta.";

	//FEEDBACK GENERAL EJERCICIO DE MULTIPLE CHOICE
	feedbackAciertoMultipleChoice="¡Enhorabuena! Todas tus respuestas son correctas.";
	feedbackFalloMultipleChoice="Lo sentimos pero alguna de tus respuestas es incorrecta.";
	feedbackFalloTodasMultipleChoice="Lo sentimos pero todas tus respuestas son incorrectas.";
	feedbackNoSuficientesMultipleChoice="Lo sentimos, el número de opciones seleccionadas es menor que el número de opciones correctas, selecciona alguna opción más.";
	feedbackDemasiadasMultipleChoice="Lo sentimos, el número de opciones seleccionadas es mayor que el número de opciones correctas, quita alguna de las que has seleccionado.";

	//FEEDBACK GENERAL EJERCICIO HOTSPOT
	feedbackAciertoHotspot="¡Enhorabuena! Todas tus respuestas son correctas.";
	feedbackFalloHotspot="Lo sentimos pero alguna de tus respuestas es incorrecta.";
	feedbackFalloTodasHotspot="Lo sentimos pero todas tus respuestas son incorrectas.";
	feedbackNoSuficientesHotspot="La cantidad de respuestas seleccionadas no es suficiente, selecciona alguna más.";
	feedbackDemasiadasHotspot="Has seleccionado demasiadas respuestas, quita alguna.";
}

if (idioma=="FR"){
	//TITULO DEL INDICE DEL SUMARIO
	tituloIndice="Sommaire";

	//BOTONES DE LAS AUTOEVALUACIONES (CORREGIR, SOLUCIÓN Y REINICIAR)
	btnCorregir="Vérifier";
	btnSolucion="Solution";
	btnReiniciar="Reboot";
	
	//INSTRUCCIONES PARA QUE EL ALUMNO CLIQUE EN LOS RECURSOS QUE TIENEN DENTRO CONTENIDO
	clickaqui="Cliquez ici";
	zoom="Cliquez ici";
	recursosayuda="Cliquez sur les zones marquées pour plus information.";
	imagenesdinamicasayuda="Cliquez sur l'image pour écouter l'audio.";

	//MENSAJE PARA QUE PULSE EN EL AUDIO PRINCIPAL DE LA DIAPOSITIVA
	audioprincipalayuda="Cliquez sur l'audio pour plus de détails.";

	//TOOLTIPS DE LOS ICONOS DE AUDIO, AYUDA, GLOSARIO, DOCUMENTACIÓN, AMPLIAR TEXTO Y REDUCIR TEXTO
	tooltipaudio="Acoustique";
	tooltipayuda="Aide";
	tooltipglosario="Glossaire";
	tooltipdocumentacion="Documentation";
	tooltipreducirtexto="Réduire le texte";
	tooltipaumentartexto="Agrandir le texte";

	//FEEDBACK DE PINCHAR EN LAS OPCIONES PARA CORREGIR AUTOEVALUACIÓN
	pinchaTodas="S'il vous plaît, répondre à toutes les questions.";
	mensajeSelect="Sélectionnez une option.";

	//FEEDBACK GENERAL EJERCICIO DE SELECTS
	feedbackAciertoSelect="Félicitations! Toutes vos réponses sont correctes.";
	feedbackFalloSelect="Désolé, certaines de vos réponses sont incorrectes.";
	feedbackFalloTodasSelect="Désolé, mais toutes vos réponses sont incorrectes.";

	//FEEDBACK GENERAL EJERCICIO DE TRUE FALSE
	feedbackAciertoTrueFalse="Félicitations! Toutes vos réponses sont correctes.";
	feedbackFalloTrueFalse="Désolé, certaines de vos réponses sont incorrectes.";
	feedbackFalloTodasTrueFalse="Désolé, mais toutes vos réponses sont incorrectes.";

	//FEEDBACK GENERAL EJERCICIO DE ASOCIAR COLUMNAS Y DE ASOCIAR GRÁFICO
	feedbackAciertoUnir="Félicitations! Toutes vos réponses sont correctes.";
	feedbackFalloUnir="Désolé, certaines de vos réponses sont incorrectes.";
	feedbackFalloTodasUnir="Désolé, mais toutes vos réponses sont incorrectes.";

	//FEEDBACK GENERAL EJERCICIO DE ORDENAR
	feedbackAciertoOrdenar="Félicitations! Toutes vos réponses sont correctes.";
	feedbackFalloOrdenar="Désolé, certaines de vos réponses sont incorrectes.";
	feedbackFalloTodasOrdenar="Désolé, mais toutes vos réponses sont incorrectes.";

	//FEEDBACK GENERAL EJERCICIO DE SINGLE CHOICE
	feedbackAciertoSingleChoice="Félicitations! Votre réponse est correcte.";
	feedbackFalloSingleChoice="Désolé, Votre réponse est incorrecte.";

	//FEEDBACK GENERAL EJERCICIO DE MULTIPLE CHOICE
	feedbackAciertoMultipleChoice="Félicitations! Toutes vos réponses sont correctes.";
	feedbackFalloMultipleChoice="Désolé, certaines de vos réponses sont incorrectes.";
	feedbackFalloTodasMultipleChoice="Désolé, mais toutes vos réponses sont incorrectes.";
	feedbackNoSuficientesMultipleChoice="Désolé, le nombre d'options sélectionnées est inférieur au nombre de choix corrects, sélectionnez quelques plus d'options.";
	feedbackDemasiadasMultipleChoice="Désolé, le nombre d'options sélectionnées est supérieur au nombre de choix corrects, supprime certains que vous avez sélectionné.";

	//FEEDBACK GENERAL EJERCICIO HOTSPOT
	feedbackAciertoHotspot="Félicitations! Toutes vos réponses sont correctes.";
	feedbackFalloHotspot="Désolé, certaines de vos réponses sont incorrectes.";
	feedbackFalloTodasHotspot="Désolé, mais toutes vos réponses sont incorrectes.";
	feedbackNoSuficientesHotspot="Le nombre de réponses sélectionnées ne suffit pas, cliquez sur un peu plus.";
	feedbackDemasiadasHotspot="Vous avez sélectionné trop de réponses, supprime une partie.";
}
/*==================================================================================================== */
/*==================================================================================================== */
/*==================================================================================================== */




