'use strict';
module.exports = {
  templateUrl: 'lri/components/Title/lri.Title.html',
  controller: TitleLiberbankGeneral,
  bindings: {
  	classContainer: '@',
  	title: '@',
  	classTitle: '@'
  }
};

function TitleLiberbankGeneral ($scope) {
  $scope.$ctrl.classContainer = "row";
	$scope.$ctrl.classTitle = "col-md-12";
	this.$scope = $scope;
}

TitleLiberbankGeneral.prototype = {
};
