'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.component('lriTooltip', {
        templateUrl: '/lri/components/Tooltip/lri.Tooltip.html',
        controller: 'lriTooltip',
        controllerAs: 'lriTooltip',
		bindings: {
			content: '='
		}
    });
});

