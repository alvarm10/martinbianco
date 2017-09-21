define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.controller('LarDatepickerRangeController', LarDatepickerRangeController);

  LarDatepickerRangeController.$inject = [];

  function LarDatepickerRangeController() {
    var vm = this;

    var formats = [
      'dd-MMMM-yyyy',
      'yyyy/MM/dd',
      'dd/MM/yyyy',
      'shortDate',
    ];

    vm.beginDateOptions = null;
    vm.endDateOptions = null;
    vm.format = null;
    vm.beginDateOpened = false;
    vm.endDateOpened = false;
    vm.message = null;

    vm.checkdate = checkdate;

    init();

    function init() {
      vm.beginDateOptions = {
        formatYear: 'dd/MMMM/yyy',
        maxDate: null,
        startingDay: 1,
      };

      vm.beginDateLabel = vm.beginDateLabel | 'Desde:';
      vm.endDateLabel = vm.endDateLabel | 'Hasta:';

      vm.endDateOptions = angular.copy(vm.beginDateOptions);

      vm.format = formats[2];
    }

    function checkdate(form) {
      vm.endDateOptions.minDate = new Date(vm.beginDate);

      form.endDate.$setValidity('endDateGreaterThanBeginDate', true);

      if (form.beginDate.$dirty && vm.beginDate == null || vm.beginDate === '') {
        vm.beginDateMessage = 'Por favor, complete correctamente la fecha de inicio';
        vm.endDateOptions.minDate = null;
      }

      if (form.endDate.$dirty && vm.endDate == null || vm.endDate === '') {
        vm.endDateMessage = 'Por favor, complete correctamente la fecha de fin';
      } else if (vm.beginDate > vm.endDate) {
        vm.endDateMessage = 'La fecha de fin debe ser mayor o igual que la fecha de inicio. Por favor, complete correctamente la fecha de fin';
        form.endDate.$setValidity('endDateGreaterThanBeginDate', false);
      }
    }
  }
});
