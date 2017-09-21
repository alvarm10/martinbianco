var angular = require('angular');
require('angular-mocks');
var Soa = require('./soa');

describe('component: Soa component', function () {
  beforeEach(function () {
    angular
      .module('soaComponent', ['app/components/SOA/soa.html'])
      .component('soaComponent', Soa);
    angular.mock.module('soaComponent');
  });

  it('should render correctly', angular.mock.inject(function ($rootScope, $compile) {
    console.log("test1 Inicio");
    var $scope = $rootScope.$new();
    var element = $compile('<soa-component></soa-component>')($scope);
    $scope.$digest();
    var soaButton = element.find('button');
    expect(soaButton.html().trim()).toEqual('SOA');
    console.log("test1 fin");
  }));

  // it('should call myHandle', angular.mock.inject(function($componentController) {
  //   var ctrl = $componentController('soaComponent', {});
  //   console.log("test2 Inicio");
  //   console.log(ctrl.myHandle);
  //   var response = ctrl.myHandle('post','http://ip.jsontest.com/');
  //   console.log("test2 Medio");
  //   console.log(response);
  //   expect(response).toBeDefined();
  //   console.log("test2 Fin");
  // }));
});
