'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.component('lriDropdown', {
      templateUrl: '/lri/components/Dropdown/lri.Dropdown.html',
      controller: 'lriDropdown',
      controllerAs: 'lriDropdown',
      bindings: {
        classTitle: '@',
        items: '=',
        title: '@',
        value: '='
      }
    });
});
