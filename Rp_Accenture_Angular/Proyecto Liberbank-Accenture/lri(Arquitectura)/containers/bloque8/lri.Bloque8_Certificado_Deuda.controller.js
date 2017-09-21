'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.controller('lriBloque8Certificado', lriBloque8Certificado);
 
    lriBloque8Certificado.$inject = ['architectureService'];
 
    function lriBloque8Certificado(architectureService,$scope) {
        var vm = this;
        vm.propuestaLitigio = {};
        vm.propuestaLitigio.sobrantes = ["Si","No"];
        vm.propuestaLitigio.dacionPagos = ["Rechazada Cliente","Autorizada no firmada","Irrealizable"];
        vm.propuestaLitigio.estrategiaJudicialPropuestas = ["Ejecución de títulos no judiciales","Ejecución hipotecaria","Declarativo"];

      function showScope () {
        console.log(vm.propuestaLitigio);
      };
      function cancel () {
        vm.propuestaLitigio = {};
        vm.propuestaLitigio.sobrante = "Seleccionar";
        vm.propuestaLitigio.dacionPago = "Seleccionar";
        vm.propuestaLitigio.estrategiaJudicialPropuesta = "Seleccionar";
        vm.propuestaLitigio.sobrantes = ["Si","No"];
        vm.propuestaLitigio.dacionPagos = ["Rechazada Cliente","Autorizada no firmada","Irrealizable"];
        vm.propuestaLitigio.estrategiaJudicialPropuestas = ["Ejecución de títulos no judiciales","Ejecución hipotecaria","Declarativo"];
        console.log("cancelar");
      }
    }


}); 


