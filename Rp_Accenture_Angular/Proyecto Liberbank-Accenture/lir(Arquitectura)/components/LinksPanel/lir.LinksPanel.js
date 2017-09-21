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
module.exports = {
  templateUrl: 'lir/components/LinksPanel/lir.LinksPanel.html',
  controller: LinksPanel,
  bindings: {
  	urlsObject: '=',
  	classContainer: '@',
  	titlePanel: '@',
  	linkClass: '@',
  }
};

function LinksPanel ($scope, $location, $window) {
	this.$scope = $scope;
	this.$location = $location;
	this.$window = $window;
}

LinksPanel.prototype = {
	/** method linkClicked: opena a window with a link or change the url to open a link
 	 * @param index: the index to know what url from th urlsObject has been clicked
  	**/ 
	linkClicked: function (index) {
		if (this.$scope.$ctrl.urlsObject[index].identificador == 0) {
			this.$location.url(this.$scope.$ctrl.urlsObject[index].url);
		} else if (this.$scope.$ctrl.urlsObject[index].identificador == 1) {
			this.$window.open(this.$scope.$ctrl.urlsObject[index].url);
		} else {
			console.log("error en el identificador");
		}
	}
};