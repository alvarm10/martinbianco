'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.controller('lriBloque3', lriBloque3);
 
    lriBloque3.$inject = ['architectureService'];
 
    function lriBloque3(architectureService) {
        var vm = this;
        vm.currentPage = 2;
		vm.link = [{url:"#", identificador:1, name:"Histórico de informes", tooltip:"#"}];
		vm.infRelevante =[["02/12/2015", "Puede y quiere pagar", "Telefonico", 1234] , "01/12/2015", "Criticidad 2", "Si", "Problema temporal", "Dacion" ];

		vm.alerts = [
	  		{mensaje:"MENSAJES DE ALERTA DE OTROS  BLOQUES O DE ERROR DE ACCESO A ENLACES COMO A FICHA DE LITIGIO CON SELECCION DE CONTRATOS DE DISTINTAS ENTIDADES",  tipo:"alert alert-danger" }, 
	  		
		];


	  	vm.urls = [
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

		vm.urlsDetalleCliente = [
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
      function changeCurrentPage () {
        vm.currentPage = valor;
      };
    }


}); 