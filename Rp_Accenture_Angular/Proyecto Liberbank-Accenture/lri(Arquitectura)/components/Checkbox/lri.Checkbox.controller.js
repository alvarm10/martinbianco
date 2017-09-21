'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.controller('lriCheckbox', lriCheckbox);
 
    lriCheckbox.$inject = ['architectureService'];
 
    function lriCheckbox(architectureService) {
        var vm = this;
    }
});



