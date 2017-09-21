'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.controller('lriTitle', lriTitle);
 
    lriTitle.$inject = ['architectureService'];
 
    function lriTitle(architectureService) {
        var vm = this;
        vm.classContainer = "row";
        vm.classTitle = "col-md-12";
    }


});