'use strict';
module.exports = {
  templateUrl: 'lir/components/Dropdown/lir.Dropdown.html',
  controller: DroprownLiberbankGeneral,
  bindings: {
    classTitle: '@',
  	items: '=',
  	title: '@',
  	value: '='
  }
};

function DroprownLiberbankGeneral ($scope) {
	$scope.$ctrl.value = "Seleccionar";
  $scope.$ctrl.classTitle = "col-md-3";
	this.$scope = $scope;
	this.$scope.titleWithoutSpace = $scope.$ctrl.title.replace(' ','');
}

DroprownLiberbankGeneral.prototype = {
};
