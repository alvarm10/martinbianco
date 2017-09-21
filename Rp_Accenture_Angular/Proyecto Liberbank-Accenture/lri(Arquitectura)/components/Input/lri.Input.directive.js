'use strict';

define(function() {
  var app = require('lri/lri.main.module');

  app.component('lriInput', {
    templateUrl: '/lri/components/Input/lri.Input.html',
    controller: 'lriInput',
    controllerAs: 'lriInput',
    bindings: {
      classTitle: '@',
      title: '@',
      disabled: '@',
      typeValidation: '@',
      model: '='
    }
  });
});
