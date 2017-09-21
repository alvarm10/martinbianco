'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.controller('lriDropdown', lriDropdown);
 
    lriDropdown.$inject = ['architectureService'];
 
    function lriDropdown(architectureService) {
      var vm = this;
      vm.value = "Seleccionar";
      vm.classTitle = "col-md-3";
      vm.titleWithoutSpace = vm.title.replace(' ','');
    }
});
