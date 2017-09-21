define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.controller('TreeViewController', TreeViewController);

  TreeViewController.$inject = ['$uibModalInstance', 'data', 'description'];

  function TreeViewController($uibModalInstance, data, description) {
    var vm = this;
    var previouslySelectedFound = false;

    vm.data = data;
    vm.searchTerm = null;
    vm.sharedProperties = {
      selectedNode: null,
      okModal: okModal,
    };

    vm.search = search;
    vm.nextCoincidence = nextCoincidence;
    vm.okModal = okModal;
    vm.closeModal = closeModal;
    vm.$onInit = $onInit;

    function $onInit() {
      if (description != null) {
        vm.searchTerm = description;
        search();
      }
    }

    function search(nodeToSearch, searchNext) {
      if (nodeToSearch == null) {
        nodeToSearch = vm.data;
      } else {
        nodeToSearch = nodeToSearch.entry;
      }

      if (searchNext == null) {
        vm.sharedProperties.selectedNode = null;
      }

      return searchInChildren(nodeToSearch, searchNext);
    }

    function searchInChildren(nodeToSearch, searchNext) {
      var node;
      var nodeFound = null;

      for (var i = 0, length = nodeToSearch.length; i < length; i++) {
        node = nodeToSearch[i];

        if (node.entry != null && node.entry.length > 0) {
          nodeFound = search(node, searchNext);
        }

        if (node.description != null && node.description.toLowerCase().indexOf(vm.searchTerm.toLowerCase()) >= 0) {
          nodeFound = checkCoincidence(node, searchNext);
        }

        if (nodeFound != null) {
          node.opened = true;
          return nodeFound;
        }
      }
    }

    function checkCoincidence(node, searchNext) {
      if (vm.sharedProperties.selectedNode == null) {
        vm.sharedProperties.selectedNode = node;
        return node;
      }

      if (searchNext) {
        if (previouslySelectedFound) {
          vm.sharedProperties.selectedNode = node;
          return node;
        }

        if (node === vm.sharedProperties.selectedNode) {
          previouslySelectedFound = true;
        }
      }
    }

    function nextCoincidence() {
      var nextCoincidence;

      nextCoincidence = search(null, true);
      previouslySelectedFound = false;

      if (nextCoincidence == null) {
        alert('No existen más coincidencias, se volverá a mostrar la primera.');
        search();
      }
    }

    function okModal() {
      var selectedNode = {
        code: null,
        description: null,
      };

      if (vm.sharedProperties.selectedNode != null) {
        selectedNode.code = parseInt(vm.sharedProperties.selectedNode.code);
        selectedNode.description = vm.sharedProperties.selectedNode.description;
      } else {
        selectedNode.code = vm.sharedProperties.selectedNode;
      }

      $uibModalInstance.close(selectedNode);
    }

    function closeModal() {
      $uibModalInstance.dismiss('cancel');
    }
  }
});
