define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.component('larDatepickerRange', {
    templateUrl: '/lar/components/lar-datepicker-range/lar.datepicker-range.view.html',
    controller: 'LarDatepickerRangeController',
    controllerAs: 'larDatepickerRange',
    bindings: {
        beginDate: '=?',
        beginDateLabel: '@?',
        beginDateName: '@',
        endDate: '=?',
        endDateLabel: '@?',
        endDateName: '@',
      },
  });
});
