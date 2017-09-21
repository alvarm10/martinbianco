define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.controller('CodeTreeController', CodeTreeController);

  CodeTreeController.$inject = ['$uibModal', 'helper'];

  function CodeTreeController($uibModal, helper) {
    var vm = this;
    var parsedData = [];

    // Input
    vm.data = [
      {
        entry: [{
          ent: 'ZZZZ',
          code: '101',
          description: 'EDUCACION',
          code2: '101CNAE',
        }, {
          ent: 'ZZZZ',
          code: '102',
          description: 'SANIDAD',
          code2: '102CNAE',
        }, {
          ent: 'ZZZZ',
          code: '103',
          description: 'VETERINARIA',
          code2: '103CNAE',
        },],
        id: '10CNAE_es_ES',
        tableName: '10CNAE',
        multientity: 'False',
      }, {
        entry: [{
          entry: [{
            ent: 'ZZZZ',
            code: '104',
            description: 'MILITAR',
            code2: '101CNAE',
          }, {
            ent: 'ZZZZ',
            code: '105',
            description: 'DEFENSA',
            code2: '102CNAE',
          }, {
            ent: 'ZZZZ',
            code: '106',
            description: 'ECONOMÍA',
            code2: '103CNAE',
          },],
          id: '30KOE_es_ES',
          tableName: 'Armada',
          multientity: 'False',
        }, {
          ent: 'ZZZZ',
          code: '107',
          description: 'JUSTICIA',
          code2: '101CNAE',
        }, {
          ent: 'ZZZZ',
          code: '108',
          description: 'VIVIENDA',
          code2: '102CNAE',
        }, {
          ent: 'ZZZZ',
          code: '109',
          description: 'ECONOMÍA',
          code2: '103CNAE',
        },],
        id: '30KOE_es_ES',
        tableName: 'Estado',
        multientity: 'False',
      },
    ];

    vm.description = null;

    vm.open = open;
    vm.codeChanged = codeChanged;
    vm.validateKey = validateKey;
    vm.$onInit = $onInit;

    function $onInit() {
      parseData(vm.data);
    }

    function parseData(array) {
      for (var i = array.length - 1; i >= 0; i--) {
        if (array[i].code == null && array[i].entry != null) {
          parseData(array[i].entry);
        } else {
          parsedData.push(array[i]);
        }
      }
    }

    function codeChanged() {
      vm.description = null;

      for (var i = parsedData.length - 1; i >= 0; i--) {
        if (parsedData[i].code.toString() === vm.code.toString()) {
          vm.description = parsedData[i].description;
        }
      }
    }

    function validateKey(event) {
      var key;
      var selectionProperties;

      if (event.char == null) {
        key = event.key;
      } else {
        key = event.char;
      }

      selectionProperties = helper.getSelectedTextProperties(event.target);

      if (key < '0' || key > '9' ||
      vm.code != null && vm.code.toString().length >= 4 && selectionProperties.selectedLength === 0) {
        event.preventDefault();
      }
    }

    function open(size) {
      var modalInstance = $uibModal.open({
        templateUrl: '/lar/components/lar-code-tree/tree-view/lar.tree-view.view.html',
        controller: 'TreeViewController',
        controllerAs: 'larTreeView',
        size: size,
        backdrop: 'static',
        resolve: {
          data: function () {
            return vm.data;
          },

          description: function () {
            return vm.description;
          },
        },
      });

      modalInstance.result
        .then(function (selectedNode) {
          vm.code = selectedNode.code;
          vm.description = selectedNode.description;
        });
    }
  }
});
