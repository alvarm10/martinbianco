'use strict';

/**
  *checksObject -> input ->vector of objects with the url information. Example:
  [
      {name:"uno", value:1, activo:false }, 
      {name:"dos", value:0, activo:false}   
  *checkClass -> input -> class of each checksbox
 */
module.exports = {
  templateUrl: 'lir/components/Checkbox/lir.Checkbox.html',
  controller: Checkbox,
  bindings: {
    checksObject: '=',
    classPanel: '@',
    classCheckBox: '@'
  }
};

function Checkbox ($scope) {
  this.$scope = $scope;
 
}

Checkbox.prototype = {

};