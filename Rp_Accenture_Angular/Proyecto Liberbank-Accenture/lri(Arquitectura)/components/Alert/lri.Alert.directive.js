define(function() {
    var app = require('lri/lri.main.module');
 
    app.component('lriAlert', {
        templateUrl: '/lri/components/Alert/lri.Alert.html',
        controller: 'lriAlert',
        controllerAs: 'al',
		bindings: {
			alertsObject: '=',
			classAlert: '@',
			classPanel: '@',
		}
    });
});
