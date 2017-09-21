define(function (require) {
  require('architectureApp/components/lar-code-tree/lar.code-tree.controller');

  describe('app: CodeTreeController ->', function () {
    var CodeTreeController;
    var mocks;
    var returnedValue;
    var vm;

    var $uibModalInstance;

    beforeEach(function () {
      CodeTreeController = quickmock({
        providerName: 'CodeTreeController',
        moduleName: 'architecture',
        mockModules: ['MocksForTest'],
      });

      mocks = CodeTreeController.$mocks;
      vm = CodeTreeController;
      returnedValue = null;
    });

    describe('open', function () {
      it('should return the selected code', function () {
        var returnedObject = {
          code: '99',
          description: 'description',
        };

        $uibModalInstance = {
          result: {
            then: function (confirmCallback) {
              confirmCallback(returnedObject);
            },
          },
        };

        mocks.$uibModal.open.and.returnValue($uibModalInstance);

        CodeTreeController.open('md');

        expect(vm.code).toBe('99');
      });
    });
  });
});
