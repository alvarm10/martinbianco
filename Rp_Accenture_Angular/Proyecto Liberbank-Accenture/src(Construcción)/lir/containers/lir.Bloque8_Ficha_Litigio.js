'use strict';
module.exports = {
  templateUrl: 'lir/containers/lir.Bloque8_Ficha_Litigio.html',
  controller: lirBloque8
};

function lirBloque8 ($scope) {
	this.$scope = $scope;
	$scope.propuestaLitigio = {};

	//this.$scope.propuestaLitigio = $scope.propuestaLitigio;
	this.$scope.propuestaLitigio.sobrantes = ["Si","No"];
	this.$scope.propuestaLitigio.dacionPagos = ["Rechazada Cliente","Autorizada no firmada","Irrealizable"];
	this.$scope.propuestaLitigio.estrategiaJudicialPropuestas = ["Ejecución de títulos no judiciales","Ejecución hipotecaria","Declarativo"];


  $scope.$watch('$ctrl.$scope.propuestaLitigio.dacionPago', this.changeForm);
  $scope.$watch('$ctrl.$scope.propuestaLitigio.sobrante', this.changeForm);
  $scope.$watch('$ctrl.$scope.propuestaLitigio.estrategiaJudicialPropuesta', this.changeForm);
  $scope.$watch('$ctrl.$scope.propuestaLitigio.centroGestorDestino', this.changeForm);
}

lirBloque8.prototype = {
  showScope: function () {
    console.log(this.$scope.propuestaLitigio);
  },

  changeForm: function () {

      if (arguments[2].$ctrl.$scope.propuestaLitigio != undefined &&
          arguments[2].$ctrl.$scope.propuestaLitigio.dacionPago != undefined && 
          arguments[2].$ctrl.$scope.propuestaLitigio.sobrante != undefined &&
          arguments[2].$ctrl.$scope.propuestaLitigio.estrategiaJudicialPropuesta != undefined){

        if (arguments[2].$ctrl.$scope.propuestaLitigio.centroGestorDestino != "" &&
            arguments[2].$ctrl.$scope.propuestaLitigio.dacionPago != "Seleccionar" && 
            arguments[2].$ctrl.$scope.propuestaLitigio.sobrante != "Seleccionar" &&
            arguments[2].$ctrl.$scope.propuestaLitigio.estrategiaJudicialPropuesta != "Seleccionar"){

            arguments[2].$ctrl.$scope.propuestaLitigio.switchBoton = false;

        }else{
            arguments[2].$ctrl.$scope.propuestaLitigio.switchBoton = true;
        }
      }else{
        arguments[2].$ctrl.$scope.propuestaLitigio.switchBoton = true;
      }
  },

  cancel: function () {
  	this.$scope.propuestaLitigio = {};
    this.$scope.propuestaLitigio.sobrante = "Seleccionar";
    this.$scope.propuestaLitigio.dacionPago = "Seleccionar";
    this.$scope.propuestaLitigio.estrategiaJudicialPropuesta = "Seleccionar";

  	this.$scope.propuestaLitigio.sobrantes = ["Si","No"];
    this.$scope.propuestaLitigio.dacionPagos = ["Rechazada Cliente","Autorizada no firmada","Irrealizable"];
    this.$scope.propuestaLitigio.estrategiaJudicialPropuestas = ["Ejecución de títulos no judiciales","Ejecución hipotecaria","Declarativo"];
  	console.log("cancelar");
  },

  aceptar: function () {
    console.log("ACEPTAR!!!");
    console.log("A la espera de servicio SOA"); 
  }
};