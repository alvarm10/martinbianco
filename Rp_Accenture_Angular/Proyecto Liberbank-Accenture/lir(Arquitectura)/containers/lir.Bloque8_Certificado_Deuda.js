'use strict';
module.exports = {
  templateUrl: 'lir/containers/lir.Bloque8_Certificado_Deuda.html',
  controller: lirBloque8
};

function lirBloque8 ($scope) {

  this.$scope = $scope;
  this.$scope.currentPage = 1;
  this.$scope.fecSubasta = 2;
  this.$scope.certificadoDeuda = {activo: "32512635819230" ,fecSubasta:"mal", tipoIntMoratorio :1, fecCierre: "15/12/2016"}
  this.$scope.precarta = {CAC:"mal", CTAORIGEN :"MAMA", titular: "PRUEBA", DATSUBASTA: "CACA", DATCIERRE :"PRUEBA", PRINCIPALFC: "PRUEBA"};
   
  this.$scope.checks = [{ title: "-Por importes reclamados en certificado demanda de " + this.$scope.precarta.DATCIERRE+":" ,
                            name: [  "-Por Principal______________________________" + this.$scope.precarta.PRINCIPALFC + ".",
                                     "-Por intereses corrientes______________________________" + this.$scope.precarta.PRINCIPALFC + ".",
                                     "-Por intereses moratorios______________________________" + this.$scope.precarta.PRINCIPALFC + ".",
                                   ],
                             activo: "false"},
                        { title: "-Por intereses moratorios pendientes devengados con posibilidad al cierre de la cuenta("+this.$scope.precarta.DATCIERRE+")hasta fecha de subasta " + this.$scope.precarta.DATSUBASTA+" calculados al " + this.$scope.precarta.TIPINTMOR + "% sobre el principal reclamado.",
                             name: [],
                             activo: "false"},
                        { title: "SUBTOTAL(s.e.u.o.)...................................." + this.$scope.precarta.SUMATORIO + " €",
                             name: [],
                             activo: "false"},
                        { title: "A DEDUCIR" ,
                             name: [ " -     Por entregas realizadas___________________________________________" + this.$scope.precarta.TOTALIMPETG + " €"], 
                             activo: "false"},
                        { title: "TOTAL A FAVOR DEL BANCO (s.e.u.o.)...................................." + this.$scope.precarta.TOTDEUFS + " €",
                             name: [], 
                             activo: "false"}
                       ];

    //Variable para habilitar o desabilitar el botón de enviar correo                   
    this.$scope.activeMail =true;
    
 

	$scope.certificadoDeuda = {};
	this.$scope.certificadoDeuda = $scope.certificadoDeuda;
  this.$scope.certificadoDeuda.disFecSubasta = false;
  this.$scope.certificadoDeuda.disTipoIntMoratorio = false; 

  $scope.$watch('$ctrl.$scope.certificadoDeuda.fecSubasta', this.changeForm);
  $scope.$watch('$ctrl.$scope.certificadoDeuda.tipoIntMoratorio', this.changeForm);

}

lirBloque8.prototype = {
  showScope: function () {
    console.log(this.$scope.certificadoDeuda);
  },
  cancel: function () {
  	console.log("cancelar");

  },
  acept: function (){         //<!-- Cambios Alvaro -->
    console.log("aceptar");
  },

  
  changeCurrentPage: function (valor) {
    this.$scope.currentPage = valor;
  },



  changeForm: function () {

      arguments[2].$ctrl.$scope.certificadoDeuda.habAceptar = false;
      arguments[2].$ctrl.$scope.certificadoDeuda.habPrecarta = false;

      if (arguments[2].$ctrl.$scope.certificadoDeuda != undefined &&
          arguments[2].$ctrl.$scope.certificadoDeuda.tipoIntMoratorio != undefined ){

        if (arguments[2].$ctrl.$scope.certificadoDeuda.fecSubasta != "" &&
            arguments[2].$ctrl.$scope.certificadoDeuda.tipoIntMoratorio != ""){

            console.log("activar calcular");
            arguments[2].$ctrl.$scope.certificadoDeuda.habCalcular = true;

        }else{
            console.log("no activar calcular");
            arguments[2].$ctrl.$scope.certificadoDeuda.habCalcular = false;
        }
      }else{
        console.log("no activar calcular 2");
        arguments[2].$ctrl.$scope.certificadoDeuda.habCalcular = false;
      }

  },

  //Funcion parar activar boton enviar correo
  gestionDocumental: function () {
    this.$scope.activeMail = false;
    alert("Documeo presentado");

  },

  cerrarprevisualizacion: function () {
    this.$scope.activeMail = true;
    this.$scope.currentPage = 1;

  },

  abreCorreo : function () {
    
    this.$scope.currentPage = 4;
    this.$scope.email = {para: "pedro@gmail.com", asunto: "Certificado deuda"+ this.$scope.certificadoDeuda.activo  +this.$scope.certificadoDeuda.fecCierre}
  },
  

  calcular: function (){  
    console.log("estamos calculando");
    this.$scope.certificadoDeuda.habAceptar = true;
  },

  acept: function(){
    console.log("se acepta");
    this.$scope.certificadoDeuda.habPrecarta = true;
    this.$scope.certificadoDeuda.habCalcular = false;
    this.$scope.certificadoDeuda.disFecSubasta = true;
    this.$scope.certificadoDeuda.disTipoIntMoratorio = true; 

  }

};

