'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.controller('lriTooltip', lriTooltip);
 
    lriTooltip.$inject = ['architectureService'];
 
    function lriTooltip(architectureService) {
        var vm = this;
    }


});
