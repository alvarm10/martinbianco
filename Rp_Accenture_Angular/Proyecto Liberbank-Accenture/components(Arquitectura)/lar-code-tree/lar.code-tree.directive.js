define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.component('larCodeTree', {
    templateUrl: '/lar/components/lar-code-tree/lar.code-tree.view.html',
    controller: 'CodeTreeController',
    controllerAs: 'larCodeTree',
    bindings: {
      data: '=?',
      code: '=?ngModel',
      label: '@',
      name: '@',
    },
  });
});
