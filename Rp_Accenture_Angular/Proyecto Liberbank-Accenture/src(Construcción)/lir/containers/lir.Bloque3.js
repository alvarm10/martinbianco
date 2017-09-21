'use strict';
module.exports = {
  templateUrl: 'lir/containers/lir.Bloque3.html',
  controller: lirBloque3
};

/*$scope.currentPage variable utilizada para visualizar ventanas 
	Ej:
	1--> Windows of Ficha de cliente 
	2--> Windows of Detalle de contrato
	3--> Windows of Grupo Economico

*/

function lirBloque3 ($scope) {
	$scope.currentPage = 2;
	$scope.link = [{url:"#", identificador:1, name:"Histórico de informes", tooltip:"#"}];
	$scope.infRelevante =[["02/12/2015", "Puede y quiere pagar", "Telefonico", 1234] , "01/12/2015", "Criticidad 2", "Si", "Problema temporal", "Dacion" ];

	$scope.alerts = [
  		{mensaje:"MENSAJES DE ALERTA DE OTROS  BLOQUES O DE ERROR DE ACCESO A ENLACES COMO A FICHA DE LITIGIO CON SELECCION DE CONTRATOS DE DISTINTAS ENTIDADES",  tipo:"alert alert-danger" }, 
  		
	];


  	$scope.urls = [
  		{url:"#", identificador:1, name:"Histórico de contrato impagados", tooltip:"#"}, 
  		{url:"#", identificador:0, name:"Certificado de deuda", tooltip:"#"},
		{url:"#", identificador:0, name:"Consulta de intervinientes", tooltip:"#"}, 
		{url:"#", identificador:0, name:"Inicio proceso adquisición/Dación", tooltip:"#"},
		{url:"#", identificador:0, name:"Gestor documental", tooltip:"#"}, 
		{url:"#", identificador:0, name:"Simulador estrategias", tooltip:"#"},
		{url:"#", identificador:0, name:"Gastos de expediente", tooltip:"#"}, 
		{url:"#", identificador:0, name:"Rehabilitación de deuda", tooltip:"#"},
		{url:"#", identificador:0, name:"Agenda de impagados", tooltip:"#"}, 
		{url:"#", identificador:0, name:"Ficha de litigio", tooltip:"#"}
	];

	$scope.urlsDetalleCliente = [
  		{url:"#", identificador:1, name:"Nominas", tooltip:"#"}, 
  		{url:"#", identificador:0, name:"Gestor documental", tooltip:"#"},
		{url:"#", identificador:0, name:"Simulador refinanciaciones", tooltip:"#"}, 
		{url:"#", identificador:0, name:"Tarjetas", tooltip:"#"},
		{url:"#", identificador:0, name:"Comportamental propensión al pago", tooltip:"#"}, 
		{url:"#", identificador:0, name:"Simulador de estrategias", tooltip:"#"},
		{url:"#", identificador:0, name:"Descubiertos", tooltip:"#"}, 
		{url:"#", identificador:0, name:"Inicio del proceso de adquisición y dación", tooltip:"#"},
		{url:"#", identificador:0, name:"Ficha De Litigio", tooltip:"#"}, 
		{url:"#", identificador:0, name:"Certificado de Deuda", tooltip:"#"},
		{url:"#", identificador:0, name:"Simulador PyG concurso de acreedores", tooltip:"#"},
		{url:"#", identificador:0, name:"Relaciones valoradas", tooltip:"#"}

	];
  	this.$scope = $scope;
}

lirBloque3.prototype = {
	changeCurrentPage: function (valor) {
		this.$scope.currentPage = valor;
	}
};
