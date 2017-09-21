'use strict';

define(function () {
    var app = require('lri/lri.main.module');
 
    app.controller('lriButton', lriButton);
 
    lriButton.$inject = ['architectureService'];
 
    function lriButton(architectureService, $scope) {
        var vm = this;
        var newDirective = angular.element('<div class="' + lriButton.classBoton + '"><button ng-click="lriButton.clickBotton()" type="' + lriButton.type + '">' +lriButton.name + '</button></div>');
        var element2 = angular.element(document.querySelector('#'+lriButton.dataid));
        element2.append(newDirective);
        $compile(newDirective)($scope);
        vm.$scope = $scope;
        function clickBotton () {
          vm.onaction();
          if (vm.lriButton.url) {
            vm.$location.url(vm.lriButton.url);
          } else {
            console.log("Cuidado No url ni ng-if para cambiar de ventana");
          }
        } 
    }
}); 