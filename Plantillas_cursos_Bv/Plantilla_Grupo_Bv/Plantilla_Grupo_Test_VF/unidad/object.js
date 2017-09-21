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


var nombreUnidad = "HTML5 Template";   			//Título de la Unidad
var lineaNegocio = "grupo";						//grupo (María), customizado (Silvina) y academico (Ruth)	
var navegacion = "restringida";						//libre, restringida o semirestringida (solo actividades)
var idioma = "ES";								//EN (inglés), ES (español) y FR (francés)
var mostrarScrollUp = "no";						//Si se quiere o no mostrar el boton de "scroll-up" (subida rapida). "si" o "no"
var feedback = "siempre";						//nunca, siempre, respCorrectas y respIncorrectas
var escormizar= "si";							//Dos opciones, si o no, una vez terminado de maquetar el curso y justo antes de subir a la plataforma hay que poner la opción "si" para que guarde al alumno el progreso del curso, mientras se está maquetando hay que colocar la opción "no".
var controlesaudios= "no";						//"si" si queremos que aparezca la barra de audio con los controles y "no" si no queremos que aparezca la barra de audio en los controles.
var plataforma= "Moodle";						//Ponemos el nombre de la plataforma donde se va a subir el SCORM, Ej: "Moodle", "Cornerstone", etc.
var actividadespuntuables= 0;					//En esta variable hay que introducir el número de actividades puntuables que tiene esta unidad.

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
	}

	
];


var datos =[
    {"numpregunta":1, //48
    "pregunta": "An opening, which in any sea conditions,  water will not be allowed to penetrate into the ship is called:", 
    "opciones": ["Unprotected opening.", "Watertight opening.", "Weathertight opening."],
    "correcta": "Weathertight opening.",
    "feedback": ""},

    {"numpregunta":2, //49
    "pregunta": "Corrections for tabular freeboard can either penalise or credit Freeboard. Tabular freeboard can only be deducted for the following correction:", 
    "opciones": ["Superstructure.", "Depth correction.", "Sheer."],
    "correcta": "Superstructure.",
    "feedback": ""},

    {"numpregunta":3, //50
    "pregunta": "Hatchways, doorways and ventilators in position 1 are those located upon exposed freeboard deck or upon exposed superstructure decks situated forward of:", 
    "opciones": ["0.15 L from forward perpendicular.", "0.25 L from forward perpendicular.", "0.25 L from aft perpendicular."],
    "correcta": "0.25 L from forward perpendicular.",
    "feedback": ""},

    {"numpregunta":4, //51
    "pregunta": "Crew protection measures required by Load Line Convention are:", 
    "opciones": ["Minimum height of bulwarks and handrails, protected access to accommodations, means of protection around deck cargo.", "No window below freeboard deck, means of protection around deck cargo, ventilators substantially constructed and connected.", "Minimum height of bulwarks and handrails, provision of survival crafts for all person on board, provision of freeing ports in exposed decks."],
    "correcta": "Minimum height of bulwarks and handrails, protected access to accommodations, means of protection around deck cargo.",
    "feedback": ""},

    {"numpregunta":5, //52
    "pregunta": "Concerning the protection of openings, indicate the wrong statement:", 
    "opciones": ["Openings in superstructures must be fitted with permanently attached doors.", "Cargo ports located below the freeboard deck must be watertight and its structural strength equivalent to the surrounding structure.", "Openings in freeboard deck must be fitted with watertight closing devices."],
    "correcta": "Openings in freeboard deck must be fitted with watertight closing devices.",
    "feedback": ""},

    {"numpregunta":6, //53
    "pregunta": "The load line mark is represented by a ring intersected by a horizontal line, the upper edge of which passes through the centre of the ring. The centre of the ring is to be placed amidships at a vertical distance from the upper edge of the deck line equal to:", 
    "opciones": ["The Tropical freeboard for sea water.", "The Summer freeboard for sea water.", "The Winter freeboard for sea water."],
    "correcta": "The Summer freeboard for sea water.",
    "feedback": ""},

    {"numpregunta":7, //54
    "pregunta": "Depth correction of the tabular freeboard shall be applied when:", 
    "opciones": ["Actual Depth is above L/15.", "Actual Depth is below L/15.", "Actual Depth is equal to L/15."],
    "correcta": "Actual Depth is above L/15.",
    "feedback": ""},

    {"numpregunta":8, //55
    "pregunta": "To ensure that they continue to fulfil the conditions of assignment, ships are surveyed:", 
    "opciones": ["Every year.", "Every two years.", "Every 2.5 years."],
    "correcta": "Every year.",
    "feedback": ""},

	 {"numpregunta":9, //56
    "pregunta": "Select the correct sentence:", 
    "opciones": ["The front part of the boat it's called bow", "the part of front of the boat it's called Stern", "None of the above is correct"],
    "correcta": "The front part of the boat it's called bow",
    "feedback": ""},


];


var datostest =[{
    "numeropreguntas":9, //Introducimos el número de preguntas que queremos que se muestren de la batería de preguntas del test./////////////////////////////////////////////////////////////////////////////////////

    "aprobadonota":100, //Aquí insertamos el porcentaje de nota que necesitará el alumno para aprobar el test.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    "numerointentos":1000000, //Aquí introduciremos el número de intentos que tiene el alumno en numero.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    "duraciontestsegundos":1000000, //Aquí insertaremos el tiempo que tiene el alumno para hacer un intento en segundos.///////////////////////////////////////////////////////////////////////////////////////////////

    "mostrarintento":"no", //Hay dos opciones "si" o "no", lo que hace es mostrarme el intento en el que voy mientras estoy realizando el test.//////////////////////////////////////////////////////////////////////

    "feedback":"no", //Hay dos opciones "si" o "no", si queremos que tenga feedback el test o no.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    "repeticionpreguntas":"si", //Hay dos opciones "si" o "no", si queremos que no se repita ninguna pregunta del primer intento en el segundo intento, pondremos "no" y si queremos que si que se puedan repetir preguntas del primer intento, pondremos "si". Tener en cuenta que si no queremos repetir ninguna pregunta del primer intento tendremos que tener una batería de preguntas que tenga al menos el doble de preguntas que las preguntas que queremos que se muestren de esta batería (que se especifica en la caracteristica 1: "numeropreguntas").
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    "eliminaracertadas":"si", //Hay dos opciones "si" o "no", si queremos que cuando el alumno ha suspendido, en el siguiente intento solo le salgan las preguntas que ha fallado pondremos en la opción "si".
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    "mostrarcronometrotest":"si", //Hay dos opciones "si" o "no", dependiendo si queremos que se muestre o no se muestre el cronómetro una vez iniciado el test.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    "mostrarrevisionpreguntas":"no", //Hay dos opciones "si" o "no", si pongo "si", me aparecera el botón de revisar las preguntas, cuando termino el test y el alumno podrá ver sus resultados en él, si pongo "no", el alumno no podrá ver sus resultados. 
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
];


//PARA LA PANTALLA DE RESULTADOS DONDE APARECE LA NOTA FINAL DEL ALUMNO/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

var pantallaFinalTest =[{
    "mensajefinal":"Has completado el test. Aqui estan tus resultados:", //ENGLISH: "You have finished the test. Here are your results:" Aquí introducimos el mensaje de has finalizado el test y tu nota es de...////////////////////////////////////////////////////

    "aprobado":"Enhorabuena! Has completado satisfactoriamente esta unidad.", //ENGLISH: "Congratulations! You have satisfactorily achieved this Unit." Se introduce lo que queremos que ponga si el alumno aprueba el test. ////////////////////////////////////////////////////////////////////

    "suspenso":"Para poder completar esta unidad, debes de obtener el 100% de respuestas correctas. Vuelve a intentarlo", //ENGLISH :"In order to complete this Unit, you have to obtain 100% of good answers. Take the Final Test again." Se introduce lo que queremos que ponga si el alumno suspende el test. ///////////////////////////////////////////////////////////////////////////////

    "nointentos":"Lo siento, pero no te quedan intentos :(", //ENGLISH: "Sorry, you can't repeat the test" Mensaje que aparece cuando al alumno se le acaban los intentos en el test. ////////////////////////////////////////////////////////////////////////
    }
];


//PARA MODIFICAR EL IDIOMA DE LOS TEXTOS DEL TEST //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

var de = "de"; //"de": para español, "of": para inglés, "de" para frances, etc
/////////////////////////////////////////////////////

var txtIntento = "Intento"; //"Intento": para español, "Attempt: para inglés, etc//////////////////////////////////////////////////

var txtPregunta = "Pregunta"; //"Pregunta": para español, "Question": para inglés, "Question": para francés, etc//////////////////////////////////////////////////

var txtTituloTest = "Test de Evaluación"; //"Test de Evaluación": para español, "Final Test": para inglés, etc//////////////////////////////////////////////////



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

if (idioma=="EN"){
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




