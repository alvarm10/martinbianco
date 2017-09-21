define(function (require) {
  var app = require('lri/lri.main.module');

  app.config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
  
	$stateProvider
		.state('Bloque8Cert', {
	    	views: {
	    		init1: {
	    			templateUrl : '../lri/containers/bloque8/lri.Bloque8_Certificado_Deuda.html',
	    			controller : 'lriBloque8Certificado'
	    		}
		   	},
		    url: '/Bloque8Cert'
		})		
		.state('Bloque8Ficha', {
	    	views: {
	    		init2: {
	    			templateUrl : '../lri/containers/bloque8/lri.Bloque8_Certificado_Deuda.html',
	    			controller : 'lriBloque8Litigio'
	    		}
		   	},
		    url: '/Bloque8Ficha'
		})
  }
  require('architectureService');
  app.run(function (architectureService) {
    
  });
});
