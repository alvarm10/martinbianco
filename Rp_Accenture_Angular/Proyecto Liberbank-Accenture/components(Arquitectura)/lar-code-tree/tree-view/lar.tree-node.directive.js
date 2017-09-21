define(function (require) {
  var app = require('architectureApp/lar.public.module');
  require('architectureApp/shared/lar.recursion-helper.service');

  app.directive('larTreeNode', larTreeNode);

  larTreeNode.$inject = ['$compile', 'RecursionHelper'];

  function larTreeNode($compile, RecursionHelper) {
    return {
      restrict: 'E',
      templateUrl: '/lar/components/lar-code-tree/tree-view/lar.tree-node.view.html',
      scope: {
        node: '=', // Selected father node
        data: '=', // Complete tree
        sharedProperties: '=', // Properties shared from the parent controller, if it's modified this property will change in the parent controller too
      },
      compile: function (element) {
        // Use the compile function from the RecursionHelper,
        // And return the linking function(s) which it returns
        return RecursionHelper.compile(element);
      },
    };
  }
});
