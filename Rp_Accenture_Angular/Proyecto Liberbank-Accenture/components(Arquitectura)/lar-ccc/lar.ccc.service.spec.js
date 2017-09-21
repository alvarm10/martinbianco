define(function (require) {
  require('architectureApp/components/lar-ccc/lar.ccc.service');

  describe('app: cccService ->', function () {
    var cccService;
    var mocks;
    var returnedValue;
    var selectionProperties;
    var ACCOUNT_SEPARATOR;
    var accountFamilies = ['00', '01', '02', '03', '04', '20', '30', '65'];

    beforeEach(function () {
      cccService = quickmock({
        providerName: 'cccService',
        moduleName: 'architecture',
        mockModules: ['MocksForTest'],
        mocks: {
          cccUtilitiesService: quickmock.USE_ACTUAL,
        },
      });

      mocks = cccService.$mocks;
      returnedValue = null;
      ACCOUNT_SEPARATOR = cccService.ACCOUNT_SEPARATOR;
      mocks.cccRoutinesService.accountFamilies = accountFamilies;

      selectionProperties = {
        caretPosition: 1,
        selectedLength: 0,
        selectedText: '',
      };

      mocks.helper.getSelectedTextProperties.and.returnValue(selectionProperties);
    });

    describe('completeAccountNumber', function () {
      it('should return a complete new account if the cccValue is a new account type', function () {
        mocks.helper.checkIfContains.and.returnValue(true);
        mocks.helper.padString.and.returnValues('0012', '2000000123');

        returnedValue = cccService.completeAccountNumber('12' + ACCOUNT_SEPARATOR + '123');

        expect(returnedValue).toBe('0012' + ACCOUNT_SEPARATOR + '2000000123');
      });

      it('should return a complete new account if the cccValue is a complete new account type', function () {
        mocks.helper.checkIfContains.and.returnValue(true);
        mocks.helper.padString.and.returnValues('1234', '1234567890');

        returnedValue = cccService.completeAccountNumber('1234' + ACCOUNT_SEPARATOR + '1234567890');

        expect(returnedValue).toBe('1234' + ACCOUNT_SEPARATOR + '1234567890');
      });

      xit('should return a complete old account if the cccValue is an old account type', function () {
        mocks.helper.checkIfContains.and.returnValue(false);

        returnedValue = cccService.completeAccountNumber('123456');

        expect(returnedValue).toBe('123456');
      });

      xit('should return a complete old account if the cccValue is a complete old account type', function () {
        mocks.helper.checkIfContains.and.returnValue(false);

        returnedValue = cccService.completeAccountNumber('123456789012');

        expect(returnedValue).toBe('123456789012');
      });

      it('should return null if the cccValue is null', function () {
        returnedValue = cccService.completeAccountNumber(null);

        expect(returnedValue).toBe(null);
      });

      it('should return undefined if the cccValue is undefined', function () {
        returnedValue = cccService.completeAccountNumber(undefined);

        expect(returnedValue).toBe(undefined);
      });

      it('should return empty string if the cccValue is an empty string', function () {
        returnedValue = cccService.completeAccountNumber('');

        expect(returnedValue).toBe('');
      });
    });

    describe('validateKey', function () {
      var event;

      beforeEach(function () {
        event = jasmine.createSpyObj('event', ['preventDefault']);
      });

      it('should return false if the key is a special char and not a separator', function () {
        event.key = '_';
        returnedValue = cccService.validateKey('0000', event);
        expect(returnedValue).toBe(false);
      });

      it('should return false if the key is a letter', function () {
        event.key = 'A';
        returnedValue = cccService.validateKey('0000', event);
        expect(returnedValue).toBe(false);
      });

      describe('if the key is a separator it', function () {
        it('should return true', function () {
          // mocks.helper.checkIfContains.and.returnValue(true);
          // mocks.cccUtilitiesService.hasSeparator.and.returnValue(true);

          event.key = ACCOUNT_SEPARATOR;
          returnedValue = cccService.validateKey('123.1234', event);
          expect(returnedValue).toBe(true);
        });

        it('should return false if the cccValue is undefined', function () {
          event.key = '.';
          returnedValue = cccService.validateKey(undefined, event);

          expect(returnedValue).toBe(false);
        });

        it('should return true if the caret position is 4', function () {
          mocks.helper.checkIfContains.and.returnValue(false);

          selectionProperties.caretPosition = 4;

          event.key = ACCOUNT_SEPARATOR;
          returnedValue = cccService.validateKey('1234.5678901234', event);
          expect(returnedValue).toBe(true);
        });

        it('should return true if the caret position is less or equal to 4 and greater than 0', function () {
          mocks.helper.checkIfContains.and.returnValue(false);

          selectionProperties.caretPosition = 2;

          event.key = ACCOUNT_SEPARATOR;
          returnedValue = cccService.validateKey('1234.5678901234', event);
          expect(returnedValue).toBe(true);
        });

        it('should return false if the caret position is greater than 4', function () {
          mocks.helper.checkIfContains.and.returnValue(false);

          selectionProperties.caretPosition = 5;

          event.key = ACCOUNT_SEPARATOR;
          returnedValue = cccService.validateKey('1234.5678901234', event);
          expect(returnedValue).toBe(false);
        });

        it('should return false if the cccValue has a separator and there is no separator in the selected text', function () {
          mocks.helper.checkIfContains.and.callFake(function (value) {
            if (value === selectionProperties.selectedText) {
              return false;
            }

            return true;
          });

          event.key = ACCOUNT_SEPARATOR;
          returnedValue = cccService.validateKey('1234.5678901234', event);
          expect(returnedValue).toBe(false);
        });

        it('should return true if the cccValue has a separator and the caret position is less or equal to 4', function () {
          mocks.helper.checkIfContains.and.returnValue(true);

          selectionProperties.caretPosition = 4;

          event.key = ACCOUNT_SEPARATOR;
          returnedValue = cccService.validateKey('1234.5678901234', event);
          expect(returnedValue).toBe(true);
        });

        it('should return false if the cccValue is empty', function () {
          mocks.helper.checkIfContains.and.returnValue(false);

          event.key = ACCOUNT_SEPARATOR;
          returnedValue = cccService.validateKey('', event);
          expect(returnedValue).toBe(false);
        });

        it('should return false if the caret position is 0', function () {
          mocks.helper.checkIfContains.and.returnValue(false);

          event.key = ACCOUNT_SEPARATOR;
          returnedValue = cccService.validateKey('', event);
          expect(returnedValue).toBe(false);
        });
      });

      describe('if the key is a digit it', function () {
        it('should return true', function () {
          mocks.helper.checkIfContains.and.returnValue(true);

          event.key = 1;
          returnedValue = cccService.validateKey('123.1234', event);
          expect(returnedValue).toBe(true);
        });

        it('should return true if the cccValue is undefined', function () {
          event.key = '1';
          returnedValue = cccService.validateKey(undefined, event);

          expect(returnedValue).toBe(true);
        });

        it('should return true if the cccValue length is bigger than 11 and has a separator', function () {
          mocks.helper.checkIfContains.and.returnValue(true);

          event.key = 1;
          returnedValue = cccService.validateKey('1234.1234567890', event);
          expect(returnedValue).toBe(true);
        });

        it('should return false if the cccValue length is bigger than 11, does not have a separator and there is no selected text', function () {
          mocks.helper.checkIfContains.and.returnValue(false);

          event.key = 1;
          returnedValue = cccService.validateKey('123456789012345', event);
          expect(returnedValue).toBe(false);
        });
      });
    });

    describe('validateAccount', function () {
      it('should return true if the account is a valid new account', function () {
        mocks.helper.checkIfContains.and.returnValue(true);
        mocks.cccRoutinesService.calculateControlDigitFromAccount.and.returnValue('0');

        returnedValue = cccService.validateAccount('0044.3000100307');

        expect(returnedValue).toBe(true);
      });

      it('should return true if the account is a valid old account', function () {
        mocks.helper.checkIfContains.and.returnValue(false);
        mocks.cccRoutinesService.calculateControlDigitFromAccount.and.returnValue('2');

        returnedValue = cccService.validateAccount('0044300013');

        expect(returnedValue).toBe(false);
      });

      it('should return false if the account is null', function () {
        mocks.helper.checkIfContains.and.returnValue(true);
        mocks.cccRoutinesService.calculateControlDigitFromAccount.and.returnValue('0');

        returnedValue = cccService.validateAccount(null);

        expect(returnedValue).toBe(false);
      });

      it('should return false if the account is empty', function () {
        mocks.helper.checkIfContains.and.returnValue(true);
        mocks.cccRoutinesService.calculateControlDigitFromAccount.and.returnValue('0');

        returnedValue = cccService.validateAccount('');

        expect(returnedValue).toBe(false);
      });
    });
  });
});
