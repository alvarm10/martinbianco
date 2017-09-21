define(function() {
    var app = require('lri/lri.main.module');
 
    app.component('lriBloque8Litigio', {
        templateUrl: '/lri/containers/bloque8/lri.Bloque8_Ficha_Litigio.html',
        controller: 'lriBloque8Litigio',
        controllerAs: 'bloque8Lit',
        bindings : {
        	propuestaLitigio : '<'

        }
    });
});

