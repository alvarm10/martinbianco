'use strict';

/**
 	*urlsObject -> input ->vector of objects with the url information. Example:
	[
		{url:"http://www.google.com", identificador:1, name:"google", tooltip:"abre google"},
 		{url:"/bloque8", identificador:0, name:"prueba", tooltip:"abre bloque 8"}
 	]
  	*classContainer -> input -> class of the container
  	*titlePanel -> input -> title of the panel of the links
  	*linkClass -> input -> class of each links (add the disable options)
 */

define(function () {
    var app = require('lri/lri.main.module');
 
    app.component('lriLinksPanel', {
      templateUrl: 'lri/components/Button/lri.LinksPanel.html',
      controller: 'lriLinksPanel',
      controllerAs: 'lriLinksPanel',
      bindings: {
	  	urlsObject: '=',
	  	classContainer: '@',
	  	titlePanel: '@',
	  	linkClass: '@',
	  }
    });
});
