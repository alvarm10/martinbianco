module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      template: '<lir-bloque8-ficha-litigio></lir-bloque8-ficha-litigio>'
    })
    .state('lir-bloque8-ficha-litigio', {
      url: '/lir-bloque8-ficha-litigio',
      template: '<lir-bloque8-ficha-litigio></lir-bloque8-ficha-litigio>'
    })
    .state('lir-bloque8-certificado-deuda', {
      url: '/lir-bloque8-certificado-deuda',
      template: '<lir-bloque8-certificado-deuda></lir-bloque8-certificado-deuda>'
    })
    .state('bloque3', {
      url: '/bloque3',
      template: '<lir-bloque3></lir-bloque3>'
    })
    .state('bloque1', {
      url: '/bloque1',
      template: '<lir-bloque1></lir-bloque1>'
    });
}


