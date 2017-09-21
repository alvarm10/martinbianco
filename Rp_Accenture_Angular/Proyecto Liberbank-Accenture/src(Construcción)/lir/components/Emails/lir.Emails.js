'use strict';
module.exports = {
  templateUrl: 'lir/components/Emails/lir.Emails.html',
  controller: Emails,
  bindings: {
  	classTitle: '@',
    title: '@',
    disabled: '@',
    typeValidation: '@',
  	model: '=',
    required: '@',
    size: '@'
    
  }
};

function Emails ($scope) {
  $scope.$ctrl.classContainer = "row";
  $scope.$ctrl.classTitle = "col-md-3";
  $scope.$ctrl.required = "false";
 
  
	this.$scope = $scope;
}

Emails.prototype = { 
  
  /** method format: method to validate the input for numberic format
  * @param input: the input field
  **/
  validation : function(input) {
   var email =input.$ctrl.model;
    email = email.toString().split(';')
    
   
    for( var i=0; i <email.length; i++){
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email[i])){
         $("#emails").css("border", "2px solid green");   
        } else {
        $("#emails").css("border", "2px solid red");
        alert("Revise el correo numero:" + (i+1));
        break; 
       
        }

    }
   
   
  }
};