'use strict';

define(function () {
    var app = require('lri/lri.main.module');
 
    app.controller('lriInput', lriInput);
 
    lriInput.$inject = ['architectureService'];
 
    function lriInput(architectureService, $scope) {
      var vm = this;
      vm.classContainer = "row";
      vm.classTitle = "col-md-3";
      if (vm.typeValidation) {
        vm.options = createOptions(vm.typeValidation.trim());
      } else {
        vm.options = createOptions();
      }
      
      function createOptions (type) {
        var options = {};
        switch (type) {
          case 'email' : 
                        options.size = 60;
                        options.type = 'email';
                        options.change = 'false';
                        break;
          case 'phone' : 
                        options.size = 12; 
                        options.type = 'text';
                        options.change = 'false';
                        break;
          case 'cliente' : 
                        options.size = 60; 
                        options.type = 'text';
                        options.change = 'false';
                        break;
          case 'importe' : 
                        options.size = 16; 
                        options.type = 'text';
                        options.change = 'lriInput.format(this)';
                        break;
          case 'telefono' : 
                        options.size = 12; 
                        options.type = 'text';
                        options.change = 'false';
                        break;  
          case 'estrategia' :
                        options.size = 30; 
                        options.type = 'text';
                        options.change = 'false';
                        break; 
          case 'porcentaje' :
                        options.size = 6; 
                        options.type = 'text';
                        options.change = 'lriInput.format(this)';
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
                        options.change = 'lriInput.format(this)';
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
      };
      /** method format: method to validate the input for numberic format
      * @param input: the input field
      **/
      function format (input) {
        var num = input.model.replace(',','.');
        if (!isNaN(num)) {
        
          num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
          num = num.split('').reverse().join('').replace(/^[\.]/,'');
          input.model = input.model.replace('.',',');
        } else { 
          input.model = input.model.replace(/[^0-9,.]*/g,'');
        }
        
      };
      function reformat (input) {
        var num = parseFloat(input.model.replace(',','.')).toFixed(2);
        console.log(num);
        input.model = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
      }
    }
});
