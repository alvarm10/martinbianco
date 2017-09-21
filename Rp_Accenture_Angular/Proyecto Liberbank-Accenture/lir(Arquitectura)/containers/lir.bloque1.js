'use strict';
module.exports = {
  templateUrl: 'lir/containers/lir.Bloque1.html',
  controller: lirBloque1
};

/*$scope.currentPage variable utilizada para visualizar ventanas 
	Ej:
	1--> Windows of Ficha de cliente 
	2--> Windows of Detalle de contrato
	3--> Windows of Grupo Economico

*/

function lirBloque1 ($scope) {
	this.$scope = $scope;
	this.$scope.currentPage = 1;
	this.$scope.activaPagoTotal = false;

	this.$scope.tipoDeContrato = ["Presencial","Teléfono","Email","Otros"];
	this.$scope.localizable = ["Si","No"];
	this.$scope.quierePagar = ["Si","No"];
	this.$scope.reconoceDeuda = ["Si","No"];
	this.$scope.detalle = ["G06 Compromiso de pago total","G07 Compromiso de pago parcial"];
  	
}

lirBloque1.prototype = {
	changeCurrentPage: function (valor) {
		this.$scope.currentPage = valor;
	},


	pagoTotal: function () {
		this.$scope.activaPagoTotal = true;
	},

	cancelarpagoTotal : function() {
		this.$scope.activaPagoTotal = false;
	},

	consultaContactos : function() {
		this.$scope.currentPage = 2;

		this.$scope.consultaContacto = { titular: "", cif: "", contrato: "", deudaTotal: "", importeImpagado: ""};

	},

	consultaAcuerdos : function() {
		this.$scope.currentPage = 4;

		this.$scope.acuerdosPago = { titular: "", cif: "", contrato: "", deudaTotal: "", importeImpagado: "", diasImpago : "", fechaUltimoImpago: ""};
	},

	replicar: function() {
		this.$scope.currentPage = 3;
		this.$scope.replicarInformacion = { contrato : "", localizable : "", reconoceDeuda : "", quierePagar : "", resultadoEncuesta : "", tipoContacto : "", fechaContacto : ""}
	}
};
 