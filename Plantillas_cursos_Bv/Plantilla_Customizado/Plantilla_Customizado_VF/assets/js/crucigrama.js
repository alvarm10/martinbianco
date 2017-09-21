
/*
     // here we configure puzzle options, callbacks and publisher information
     // publisher information
     //oygCrosswordPuzzle.publisherName = "por Adib";
     //oygCrosswordPuzzle.publisherURL = "http://www.google.com";
     // game exit URL
     //oygCrosswordPuzzle.leaveGameURL = "http://www.google.com";
     // this is how to turn off server support; score submission and action tracking will be disabled
     */
    oygCrosswordPuzzle.canTalkToServer = false;

    function retroalimentar(mensaje) {
        //document.getElementById("retroalimentacion").innerHTML = mensaje;
        console.log(mensaje);
    }