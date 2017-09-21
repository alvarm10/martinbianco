define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.controller('CccController', CccController);

  CccController.$inject = ['cccService'];

  function CccController(cccService) {
    var vm = this;

    vm.label = vm.label | 'Cuenta:';
    vm.cccForm = null;

    vm.checkKeyIsValid = checkKeyIsValid;
    vm.autocompleteAccount = autocompleteAccount;
    vm.validateAccount = validateAccount;

    /**
     * Realiza las comprobaciones necesaria sobre la tecla pulsada
     * @param  {Object} event - Evento de pulsación de tecla
     * @return {Boolean} Si la tecla pulsada es admitida
     */
    function checkKeyIsValid(event) {
      return cccService.validateKey(vm.cccValue, event);
    }

    /**
     * Autocompleta el número de cuenta si es un tipo de cuenta nueva
     */
    function autocompleteAccount() {
      if (vm.cccValue == null || vm.cccValue.length === 0) {
        return null;
      }

      vm.cccValue = cccService.completeAccountNumber(vm.cccValue);

      return vm.cccValue;
    }

    function validateAccount() {
      vm.cccForm[vm.name].$setValidity('', cccService.validateAccount(vm.cccValue));
    }
  }
});
