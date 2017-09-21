'use strict';
define(function() {
    var app = require('lri/lri.main.module');
 
    app.component('lriButton', {
      templateUrl: 'lri/components/Button/lri.Button.html',
      controller: 'lriButton',
      controllerAs: 'lriButton',
      bindings: {
        name: '@',
        type: '@',
        url: '@',
        dataid: '@',
        onaction: '&',
        classBoton: '@'
      }
    });
});
