'use strict';

/**
  *checksObject -> input ->vector of objects with the url information. Example:
  [
      {name:"uno", value:1, activo:false }, 
      {name:"dos", value:0, activo:false}   
  *checkClass -> input -> class of each checksbox
 */
define(function() {
    var app = require('lri/lri.main.module');
 
    app.component('lriCheckbox', {
      templateUrl: '/lri/components/Checkbox/lri.Checkbox.html',
      controller: 'lriCheckbox',
      controllerAs: 'lriCheckbox',
      bindings: {
        checksObject: '=',
        classPanel: '@',
        classCheckBox: '@'
      }
    });
});