define(function (require) {
  require('architectureApp/components/lar-ccc/lar.ccc-routines.service');

  describe('app: cccRoutinesService ->', function () {
    var cccRoutinesService;
    var mocks;
    var returnedValue;

    var defaultValue = {
      entity: '24',
      branch: '1234',
      account: '2000012345',
    };

    beforeEach(function () {
      cccRoutinesService = quickmock({
        providerName: 'cccRoutinesService',
        moduleName: 'architecture',
        mockModules: ['MocksForTest'],
      });

      mocks = cccRoutinesService.$mocks;
      returnedValue = null;
    });

    describe('calculateControlDigitOfFullAccount', function () {
      it('should return the correct control digit', function () {
        var data = [
          {
            entity: '24',
            branch: '0001',
            account: '2000000030',
            expect: '8',
        },
          {
            entity: '85',
            branch: '6542',
            account: '8456123181',
            expect: '10',
        },
      ];

        for (var i = data.length - 1; i >= 0; i--) {
          returnedValue = cccRoutinesService.calculateControlDigitOfFullAccount(data[i].entity, data[i].branch, data[i].account);

          expect(returnedValue).toBe(data[i].expect);
        }
      });

      it('should return the control digit as a string', function () {
        returnedValue = cccRoutinesService.calculateControlDigitOfFullAccount(defaultValue.entity, defaultValue.branch, defaultValue.account);

        expect(typeof returnedValue).toBe('string');
      });

      it('should return null if the entity is null', function () {
        returnedValue = cccRoutinesService.calculateControlDigitOfFullAccount(null, defaultValue.branch, defaultValue.account);

        expect(returnedValue).toBe(null);
      });

      it('should return null if the branch is null', function () {
        returnedValue = cccRoutinesService.calculateControlDigitOfFullAccount(defaultValue.entity, null, defaultValue.account);

        expect(returnedValue).toBe(null);
      });

      it('should return null if the account is null', function () {
        returnedValue = cccRoutinesService.calculateControlDigitOfFullAccount(defaultValue.entity, defaultValue.branch, null);

        expect(returnedValue).toBe(null);
      });

      it('should return null if the entity is undefined', function () {
        returnedValue = cccRoutinesService.calculateControlDigitOfFullAccount(null, defaultValue.branch, defaultValue.account);

        expect(returnedValue).toBe(null);
      });

      it('should return null if the branch is undefined', function () {
        returnedValue = cccRoutinesService.calculateControlDigitOfFullAccount(defaultValue.entity, null, defaultValue.account);

        expect(returnedValue).toBe(null);
      });

      it('should return null if the account is undefined', function () {
        returnedValue = cccRoutinesService.calculateControlDigitOfFullAccount(defaultValue.entity, defaultValue.branch, null);

        expect(returnedValue).toBe(null);
      });
    });
  });
});
