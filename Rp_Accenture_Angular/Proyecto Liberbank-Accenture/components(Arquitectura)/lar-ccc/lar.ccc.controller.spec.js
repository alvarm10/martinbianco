define(function (require) {
  require('architectureApp/components/lar-ccc/lar.ccc.controller');

  describe('app: CccController ->', function () {
    var CccController;
    var mocks;
    var returnedValue;
    var vm;
    var ACCOUNT_SEPARATOR;

    beforeEach(function () {
      CccController = quickmock({
        providerName: 'CccController',
        moduleName: 'architecture',
        mockModules: ['MocksForTest'],
      });

      mocks = CccController.$mocks;
      vm = CccController;
      returnedValue = null;
      ACCOUNT_SEPARATOR = mocks.cccService.ACCOUNT_SEPARATOR;
    });

    describe('autocompleteAccount', function () {
      it('should work with old account', function () {
        vm.cccValue = '00001';
        vm.autocompleteAccount();

        expect(mocks.cccService.completeAccountNumber).toHaveBeenCalled();
      });

      it('should work with a complete old account', function () {
        vm.cccValue = '123456789012';
        vm.autocompleteAccount();

        expect(mocks.cccService.completeAccountNumber).toHaveBeenCalled();
      });

      it('should work with new account', function () {
        vm.cccValue = '27' + ACCOUNT_SEPARATOR + '354';
        vm.autocompleteAccount();

        expect(mocks.cccService.completeAccountNumber).toHaveBeenCalled();
      });

      it('should work with a complete new account', function () {
        vm.cccValue = '0034' + ACCOUNT_SEPARATOR + '1234567890';
        vm.autocompleteAccount();

        expect(mocks.cccService.completeAccountNumber).toHaveBeenCalled();
      });

      it('should return null if the cccValue is untouched', function () {
        returnedValue = vm.autocompleteAccount();

        expect(returnedValue).toBe(null);
      });

      it('should return null if the cccValue is null', function () {
        vm.cccValue = null;
        returnedValue = vm.autocompleteAccount();

        expect(returnedValue).toBe(null);
      });

      it('should return null if the cccValue is undefined', function () {
        vm.cccValue = undefined;
        returnedValue = vm.autocompleteAccount();

        expect(returnedValue).toBe(null);
      });

      it('should return null if the cccValue length is zero', function () {
        vm.cccValue = '';
        returnedValue = vm.autocompleteAccount();

        expect(returnedValue).toBe(null);
      });
    });

    describe('checkKeyIsValid', function () {
      it('should work with a valid string', function () {
        vm.cccValue = '1234';
        vm.checkKeyIsValid();

        expect(mocks.cccService.validateKey).toHaveBeenCalled();
      });

      it('should work with a valid number', function () {
        vm.cccValue = 1234;
        vm.checkKeyIsValid();

        expect(mocks.cccService.validateKey).toHaveBeenCalled();
      });
    });
  });
});
