'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.controller('lriAlert', lriAlert);
 
    lriAlert.$inject = ['architectureService'];
 
    function lriAlert(architectureService,$scope) {
        var vm = this;
        vm.$scope = $scope;
    }


}); 

