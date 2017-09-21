'use strict';

/**
 	*alertObject -> input ->vector of objects with the alert information. Example:
	[
  		{mensaje:"Texto uno",  tipo:"alert alert-warning" }, 
  		{mensaje:"Texto dos", tipo: "alert alert-info"}	
	]
  	*classAlet->  class of  the alert and your type.
  	*classPanel-> claas of  the layer containing this element
 */

module.exports = {
  templateUrl: 'lir/components/Alert/lir.Alert.html',
  controller: Alert,
  bindings: {
  	alertsObject: '=',
  	classAlert: '@',
  	classPanel: '@',
  	
  }
};

function Alert ($scope) {
	this.$scope = $scope;
	
}

Alert.prototype = {
	
	
};