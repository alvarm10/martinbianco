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


var nombreUnidad = "HTML5 Template: Test Académico";//Título de la Unidad
var plataforma = "Moodle";                                 //"Moodle" o "Cornerstone" dependiendo de a donde se vaya a subir el curso
var lineaNegocio = "academico";						                //grupo (María), customizado (Silvina) y academico (Ruth)
var idioma = "ES";								                //EN (inglés), ES (español) y FR (francés)



//PARA MODIFICAR EL IDIOMA DE LOS TEXTOS DEL TEST //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

var de = "de"; //"de": para español, "of": para inglés, "de" para frances, etc
/////////////////////////////////////////////////////

var txtIntento = "Intento"; //"Intento": para español, "Attempt: para inglés, etc//////////////////////////////////////////////////

var txtPregunta = "Pregunta"; //"Pregunta": para español, "Question": para inglés, "Question": para francés, etc//////////////////////////////////////////////////

var txtTituloTest = "Test Final " //"Test de Evaluación": para español, "Final Test": para inglés, etc//////////////////////////////////////////////////


//EN LA VARIABLE "DATOS" INTRODUCIMOS LA BATERIA DE PREGUNTAS DEL TEST/////////////////////////////////////////

/* numpregunta: 
Aquí introducimos ordenadamente el número de nuestra pregunta en formato número y sin comillas. Ejemplo: primera introducida: 1, segunda introducida: 2, etc.       */

/* pregunta: 
En este campo introducimos nuestra pregunta entre comillas dobles. Ejemplo: "Si existe la sospecha de que el cliente está incurriendo en LGI/FT; o se tenga dudas razonables sobre la veracidad de la información, se debe aplicar:".*/

/* "opciones": 
Aquí introduciremos las posibles respuestas a nuestra pregunta. Podemos tener un número ilimitado de opciones para cada pregunta, por ejemplo la pregunta 1 puede tener 2 opciones y la pregunta 2 puede tener 5 opciones. Ejemplo 1 (dos opciones): ["Falso", "Verdadero"], Ejemplo 2 (3 opciones): ["Debida diligencia continua", "Diligencia adicional", "Política conozca a su Cliente"]*/

/* "correcta": 
Aquí introducimos la respuesta correcta a nuestra pregunta entre comillas. Ejemplo: "Verdadero". Lo que no se puede hacer es poner: "verdadero" a no ser que en el campo “opciones” ponga la v en minúsculas. Con esto doy a entender que hay que respetar lo mismo que ponga en las opciones teniendo en cuenta las mayúsculas, minúsculas y acentos.*/

/* "feedback": 
Aquí introducimos el feedback de la pregunta, si queremos que tenga, si no queremos que tenga feedback el campo habra que dejarlo vacio poniendo cadena vacia. Ejemplo: "feedback":"" */

var datos =[
    {"numpregunta":1,
    "pregunta": "Pregunta 1:", 
    "opciones": ["Respuesta 1", "Respuesta 2", "Respuesta Correcta p1"],
    "correcta": "Respuesta Correcta p1",
    "feedback": ""},

    {"numpregunta":2,
    "pregunta": "Pregunta 2:", 
    "opciones": ["Respuesta Correcta p2", "Respuesta 1", "Respuesta 2"],
    "correcta": "Respuesta Correcta p2",
    "feedback": ""},

    {"numpregunta":3,
    "pregunta": "Pregunta 3:",  
    "opciones": ["Respuesta 1", "Respuesta Correcta p3" ,"Respuesta 2" ],
    "correcta": "Respuesta Correcta p3",
    "feedback": ""},

    {"numpregunta":4,
    "pregunta": "Pregunta 4:", 
    "opciones": ["Respuesta 1", "Respuesta 2", "Respuesta Correcta p4"],
    "correcta": "Respuesta Correcta p4",
    "feedback": ""},

    {"numpregunta":5,
    "pregunta": "Pregunta 5:", 
    "opciones": ["Respuesta Correcta p5", "Respuesta 1", "Respuesta 2"],
    "correcta": "Respuesta Correcta p5",
    "feedback": ""},

    {"numpregunta":6,
    "pregunta": "Pregunta 6:", 
    "opciones": ["Respuesta 1", "Respuesta Correcta p6" ,"Respuesta 2" ],
    "correcta": "Respuesta Correcta p6",
    "feedback": ""},

    {"numpregunta":7,
    "pregunta": "Pregunta 7:", 
    "opciones": ["Respuesta 1", "Respuesta 2", "Respuesta Correcta p7"],
    "correcta": "Respuesta Correcta p7",
    "feedback": ""},

    {"numpregunta":8,
    "pregunta": "Pregunta 8:", 
    "opciones": ["Respuesta 1", "Respuesta Correcta p8" ,"Respuesta 2"],
    "correcta": "Respuesta Correcta p8",
    "feedback": ""},
    
	{"numpregunta":9,
    "pregunta": "Pregunta 9:",  
    "opciones": ["Respuesta Correcta p9", "Respuesta 1", "Respuesta 2"],
    "correcta": "Respuesta Correcta p9",
    "feedback": ""},
    
    {"numpregunta":10,
    "pregunta": "Pregunta 10:", 
    "opciones": ["Respuesta 1", "Respuesta 2", "Respuesta Correcta p10"],
    "correcta": "Respuesta Correcta p10",
    "feedback": ""}
    
];



//CARACTERÍSTICAS QUE QUEREMOS QUE TENGA EL TEST////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

var datostest =[{
    "numeropreguntas":5, //Introducimos el número de preguntas que queremos que se muestren de la batería de preguntas del test./////////////////////////////////////////////////////////////////////////////////////

    "aprobadonota":60, //Aquí insertamos el porcentaje de nota que necesitará el alumno para aprobar el test.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    "numerointentos":2, //Aquí introduciremos el número de intentos que tiene el alumno en numero.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    "duraciontestsegundos":100000000, //Aquí insertaremos el tiempo que tiene el alumno para hacer un intento en segundos.///////////////////////////////////////////////////////////////////////////////////////////////

    "mostrarintento":"si", //Hay dos opciones "si" o "no", lo que hace es mostrarme el intento en el que voy mientras estoy realizando el test.//////////////////////////////////////////////////////////////////////

    "feedback":"no", //Hay dos opciones "si" o "no", si queremos que tenga feedback el test o no.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    "repeticionpreguntas":"no", //Hay dos opciones "si" o "no", si queremos que no se repita ninguna pregunta del primer intento en el segundo intento, pondremos "no" y si queremos que si que se puedan repetir preguntas del primer intento, pondremos "si". Tener en cuenta que si no queremos repetir ninguna pregunta del primer intento tendremos que tener una batería de preguntas que tenga al menos el doble de preguntas que las preguntas que queremos que se muestren de esta batería (que se especifica en la caracteristica 1: "numeropreguntas").
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    "eliminaracertadas":"no", //Hay dos opciones "si" o "no", si queremos que cuando el alumno ha suspendido, en el siguiente intento solo le salgan las preguntas que ha fallado pondremos en la opción "si".
    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    "mostrarcronometrotest":"no", //Hay dos opciones "si" o "no", dependiendo si queremos que se muestre o no se muestre el cronómetro una vez iniciado el test.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    "mostrarrevisionpreguntas":"si", //Hay dos opciones "si" o "no", si pongo "si", me aparecera el botón de revisar las preguntas, cuando termino el test y el alumno podrá ver sus resultados en él, si pongo "no", el alumno no podrá ver sus resultados. 
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
];



//PARA LA PANTALLA DE RESULTADOS DONDE APARECE LA NOTA FINAL DEL ALUMNO/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

var pantallaFinalTest =[{
    "mensajefinal":"Has finalizado el test. Aqui están tus resultados:", //Aquí introducimos el mensaje de has finalizado el test y tu nota es de...////////////////////////////////////////////////////

    "aprobado":"Enhorabuena! Has aprobado la unidad satisfactoriamente", // Se introduce lo que queremos que ponga si el alumno aprueba el test. ////////////////////////////////////////////////////////////////////

    "suspenso":"Para aprobar la unidad, necesitas un 60% de respuestas correctas.", // Se introduce lo que queremos que ponga si el alumno suspende el test. ///////////////////////////////////////////////////////////////////////////////

    "nointentos":"Lo sentimos, no puedes repetir este test.", // Mensaje que aparece cuando al alumno se le acaban los intentos en el test. ////////////////////////////////////////////////////////////////////////
    }
];













