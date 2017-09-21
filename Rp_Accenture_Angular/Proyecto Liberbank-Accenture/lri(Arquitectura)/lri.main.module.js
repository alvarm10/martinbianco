define(function(require) {
  require('architectureService');

  return angular.module('lri', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ltf'])
    .run(function(architectureService) {
      architectureService.loadProperties('lri');
    });
});