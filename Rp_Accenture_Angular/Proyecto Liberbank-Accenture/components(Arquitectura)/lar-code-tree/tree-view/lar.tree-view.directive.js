define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.component('larTreeView', {
    templateUrl: '/lar/components/lar-code-tree/tree-view/lar.tree-view.view.html',
    controller: 'TreeViewController',
    controllerAs: 'larTreeView',
    bindings: {
      data: '=',
    },
  });
});
