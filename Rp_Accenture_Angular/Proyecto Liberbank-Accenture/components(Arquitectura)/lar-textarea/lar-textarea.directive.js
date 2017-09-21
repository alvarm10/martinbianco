define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.component('larTextarea', {
    templateUrl: '/lar/components/lar-textarea/lar-textarea.view.html',
    controller: 'LarTextareaController',
    controllerAs: 'larTextarea',
    bindings: {
      maxlength: '=',
      charactersCount: '=?',
      minlength: '=?',
      textValue: '=?ngModel',
      label: '@',
      name: '@',
    },
  });
});
