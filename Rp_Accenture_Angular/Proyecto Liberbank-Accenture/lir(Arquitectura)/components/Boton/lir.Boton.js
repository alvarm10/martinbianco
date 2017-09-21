'use strict';
module.exports = {
  templateUrl: 'lir/components/Boton/lir.Boton.html',
  controller: BotonLiberbank,
  bindings: {
    name: '@',
    type: '@',
    url: '@',
    dataid: '@',
    onaction: '&',
    classBoton: '@',
    disabled: '@'

  }
};

function BotonLiberbank($scope, $compile, $location) {

  console.log("componentes : " + $scope.$ctrl.disabled);
  this.$scope = $scope;
  this.$location = $location;
  var newDirective = angular.element('<div class="' + $scope.$ctrl.classBoton + '"><button ng-click="$ctrl.clickBotton()" type="' + $scope.$ctrl.type + '" ng-disabled="' + $scope.$ctrl.disabled + '" >' +$scope.$ctrl.name + '</button></div>');
  var element2 = angular.element(document.querySelector('#'+$scope.$ctrl.dataid));
  element2.append(newDirective);
  $compile(newDirective)($scope);
}

BotonLiberbank.prototype = {
  clickBotton: function () {
    this.$scope.$ctrl.onaction();
    if (this.$scope.$ctrl.url) {
      this.$location.url(this.$scope.$ctrl.url);
    } else {
      console.log("Cuidado No url ni ng-if para cambiar de ventana");
    }
  }
};