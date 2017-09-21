'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.controller('lriLinksPanel', lriLinksPanel);
 
    lriLinksPanel.$inject = ['architectureService'];
 
    function lriLinksPanel(architectureService) {
		var vm = this;
		vm.value = "Seleccionar";
		vm.classTitle = "col-md-3";
      	vm.titleWithoutSpace = vm.title.replace(' ','');
    }
    /** method linkClicked: opena a window with a link or change the url to open a link
 	 * @param index: the index to know what url from th urlsObject has been clicked
  	**/ 
	function linkClicked (index) {
		if (vm.urlsObject[index].identificador == 0) {
			vm.$location.url(vm.urlsObject[index].url);
		} else if (vm.urlsObject[index].identificador == 1) {
			vm.$window.open(vm.urlsObject[index].url);
		} else {
			console.log("error en el identificador");
		}
	}
});