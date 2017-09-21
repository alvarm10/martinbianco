define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.component('larCcc', {
    templateUrl: '/lar/components/lar-ccc/lar.ccc.view.html',
    controller: 'CccController',
    controllerAs: 'ccc',
    bindings: {
      cccValue: '=?ngModel',
      label: '@?',
      name: '@',
    },
  });
});
