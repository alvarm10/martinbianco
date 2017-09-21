'use strict';
module.exports = {
  templateUrl: 'lir/components/Input/lir.Input.html',
  controller: InputLiberbankGeneral,
  bindings: {
  	classTitle: '@',
    title: '@',
    disabled: '=',
    typeValidation: '@',
  	model: '=',
    required: '@'
  }
};

function InputLiberbankGeneral ($scope) {
  
  console.log($scope.$ctrl.disabled);

  $scope.$ctrl.classContainer = "row";
  $scope.$ctrl.classTitle = "col-md-3";
  $scope.$ctrl.required = "false";
  if ($scope.$ctrl.typeValidation) {
    $scope.$ctrl.options = this.createOptions($scope.$ctrl.typeValidation.trim());
  } else {
    $scope.$ctrl.options = this.createOptions();
  }
  
	this.$scope = $scope;
}

InputLiberbankGeneral.prototype = { 
  createOptions: function (type) {
    var options = {};
    switch (type) {
      case 'email' : 
                    options.size = 60;
                    options.type = 'email';
                    options.change = 'false';
                    break;
      case 'phone' : 
                    options.size = 9; 
                    options.type = 'tel';
                    options.change = '$ctrl.formatphone(this)';
                    break;
      case 'cliente' : 
                    options.size = 60; 
                    options.type = 'text';
                    options.change = '$ctrl.onlytext(this)';
                    break;
      case 'importe' : 
                    options.size = 16; 
                    options.type = 'text';
                    options.change = '$ctrl.format(this)';
                    break;  
      case 'estrategia' :
                    options.size = 30; 
                    options.type = 'text';
                    options.change = 'false';
                    break; 
      case 'porcentaje' :
                    options.size = 6; 
                    options.type = 'text';
                    options.change = '$ctrl.formatporcentaje(this)';
                    break; 
      case 'descripcion' :
                    options.size = 90; 
                    options.type = 'text';
                    options.change = 'false';
                    break; 
      case 'contratocuenta' :
                    options.size = 20; 
                    options.type = 'text';
                    options.change = 'false';
                    break;
      case 'tipos' :
                    options.size = 10; 
                    options.type = 'text';
                    options.change = '$ctrl.format(this)';
                    break;
      case 'numerocontrato' :
                    options.size = 3; 
                    options.type = 'text';
                    options.change = 'false';
                    break;  
      case 'entidad' :
                    options.size = 4; 
                    options.type = 'text';
                    options.change = 'false';
                    break;  
      case 'numerocliente' :
                    options.size = 8; 
                    options.type = 'text';
                    options.change = 'false';
                    break;
      case 'tipocontrato' :
                    options.size = 10; 
                    options.type = 'text';
                    options.change = 'false';
                    break;
      case 'letrado' :
                    options.size = 60; 
                    options.type = 'text';
                    options.change = 'false';
                    break;
      case 'variostamanio1' :
                    options.size = 1; 
                    options.type = 'text';
                    options.change = 'false';
                    break;
      case 'variostamanio2' :
                    options.size = 2; 
                    options.type = 'text';
                    options.change = 'false';
                    break;
      case 'fecha' :
                    options.size = 10; 
                    options.type = 'text';
                    options.change = 'false';
                    break;                  

      default : 
                    options.type = 'text';
                    options.change = 'false';
                    options.size = 60;
                    break;
    }
    return options;
  },
  /** method format: method to validate the input for numberic format
  * @param input: the input field
  **/
  format : function (input) {
    var num = input.$ctrl.model.replace(',','.');
    if (!isNaN(num)) {
    
      num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
      num = num.split('').reverse().join('').replace(/^[\.]/,'');
      input.$ctrl.model = input.$ctrl.model.replace('.',',');
    } else { 
      input.$ctrl.model = input.$ctrl.model.replace(/[^0-9,.]*/g,'');
    }
    
  },
  reformat : function(input) {
    var num = parseFloat(input.$ctrl.model.replace(',','.')).toFixed(2);
    console.log(num);
    input.$ctrl.model = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
  },
  onlytext : function(input) {   
      input.$ctrl.model = input.$ctrl.model.replace(/[0-9,.]*/g,'');
  },

  formatphone : function(input) {

    if (!isNaN(num)) {
       var regex =  new RegExp(/^(6|7|9)[0-9]*/g);
       var first = parseInt(num.charAt(0)); 
       
      if(!regex.test(num)){
        input.$ctrl.model = input.$ctrl.model.replace(num[0],'');
      }
    } else { 
      input.$ctrl.model = input.$ctrl.model.replace(/[^0-9]*/g,'');
    }
    
  },

  formatporcentaje : function(input){
    
    input.$ctrl.model = input.$ctrl.model.replace(',','.');
    var num = input.$ctrl.model
    var count = 0;    
  
     num = num.toString().split('')
     var  long = num.toString().length;
     var  position = input.$ctrl.model.lastIndexOf(".");
     count = input.$ctrl.model.indexOf(".");
     
     if(long > 5 && position == -1 ){
          num.pop();
          input.$ctrl.model = num.join('');
     }    
     if(position != -1 && count != position){ 
      
          num.pop();
          input.$ctrl.model = num.join('') ;
     }  

    if (isNaN(num)) {
       input.$ctrl.model = input.$ctrl.model.replace(/[^0-9,.]*/g,'');    
    }   
    position = 0;
    

  },
  reformatporcentaje : function (input) {
    if(!angular.isUndefined(input.$ctrl.model) && input.$ctrl.model !=  null ){
      input.$ctrl.model = parseFloat(input.$ctrl.model).toFixed(2);
    }
    
   
  } 
};