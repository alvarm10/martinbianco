'use strict';
/**
 *Content -> input ->information for the tooltip.
 */
module.exports = {
  templateUrl: 'lir/components/Tooltip/lir.Tooltip.html',
  controller: TooltipCtrl,
  bindings: {
  	content: '='
  }
};

function TooltipCtrl ($scope, $location, $window) {
}

TooltipCtrl.prototype = {
};
