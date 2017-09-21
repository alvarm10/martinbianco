define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.controller('LarTextareaController', LarTextareaController);

  LarTextareaController.$inject = [];

  function LarTextareaController() {
    var vm = this;

    vm.remainingCharacters = vm.maxlength;
    vm.active = true;

    vm.changeRemainingCharacters = changeRemainingCharacters;

    function changeRemainingCharacters() {
      vm.active = true;
      vm.remainingCharacters = vm.maxlength - vm.textValue.length;
    }
  }
});
