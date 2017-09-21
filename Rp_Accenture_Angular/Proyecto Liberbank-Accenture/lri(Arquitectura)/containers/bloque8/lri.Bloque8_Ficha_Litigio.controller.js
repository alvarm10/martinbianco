'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.controller('lriBloque8Litigio', lriBloque8Litigio);
 
    lriBloque8Litigio.$inject = ['architectureService'];
 
    function lriBloque8Litigio(architectureService) {
        var vm = this;
        vm.propuestaLitigio = {};
        console.log(vm);
        vm.propuestaLitigio.sobrantes = ["Si","No"];
        vm.propuestaLitigio.dacionPagos = ["Rechazada Cliente","Autorizada no firmada","Irrealizable"];
        vm.propuestaLitigio.estrategiaJudicialPropuestas = ["Ejecución de títulos no judiciales","Ejecución hipotecaria","Declarativo"];


        vm.$watch('vm.propuestaLitigio.dacionPago', vm.changeForm);
        vm.$watch('vm.propuestaLitigio.sobrante', vm.changeForm);
        vm.$watch('vm.propuestaLitigio.estrategiaJudicialPropuesta', vm.changeForm);
        vm.$watch('vm.propuestaLitigio.centroGestorDestino', vm.changeForm);

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
      };
      function changeForm () {
          if (arguments[2].vm.propuestaLitigio != undefined &&
              arguments[2].propuestaLitigio.dacionPago != undefined && 
              arguments[2].propuestaLitigio.sobrante != undefined &&
              arguments[2].propuestaLitigio.estrategiaJudicialPropuesta != undefined){

            if (arguments[2].vm.propuestaLitigio.centroGestorDestino != "" &&
                arguments[2].propuestaLitigio.dacionPago != "Seleccionar" && 
                arguments[2].propuestaLitigio.sobrante != "Seleccionar" &&
                arguments[2].propuestaLitigio.estrategiaJudicialPropuesta != "Seleccionar"){

                console.log ("Formulario Valido");
                arguments[2].vm.propuestaLitigio.switchBoton = "false";
                $("#aceptar2").removeAttr("disabled");

            }else{
                arguments[2].vm.propuestaLitigio.switchBoton = "true";
            }
          }else{
            arguments[2].vm.propuestaLitigio.switchBoton = "true";
          }
      };
      function aceptar() {
        console.log("ACEPTAR!!!");
        console.log("A la espera de servicio SOA"); 
      }
    }

}); 
