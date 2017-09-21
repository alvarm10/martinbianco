define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.factory('cccService', cccService);

  cccService.$inject = ['helper', 'cccRoutinesService'];

  function cccService(helper, cccRoutinesService) {
    var ACCOUNT_SEPARATOR = '.';
    var DEFAULT_BRANCH = '0001';
    var DEFAULT_ACCOUNT = '0000000000';
    var CCC_MAX_LENGTH = 15;
    var ACCOUNT_LENGTH = 10;
    var BRANCH_LENGTH = 4;
    var ACCOUNT_ASTURIAS_LENGTH = 9;
    var INFOCAJA_WEIGHT_TABLE = [1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2];

    return {
      ACCOUNT_SEPARATOR: ACCOUNT_SEPARATOR,
      validateKey: validateKey,
      completeAccountNumber: completeAccountNumber,
      validateAccount: validateAccount,
    };

    ///////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Comprueba si la tecla pulsada es válida
     * @param  {String} cccValue - Valor actual del campo CCC
     * @param  {Object} event - Evento de pulsación de tecla
     * @return {Boolean} True si la tecla es válida
     */
    function validateKey(cccValue, event) {
      var key;
      var isValid = true;
      var isSeparator = false;
      var isDigit = false;
      var selectionProperties = {};

      if (cccValue === undefined) {
        cccValue = '';
      }

      if (event.char == null) {
        key = event.key;
      } else {
        key = event.char;
      }

      if (key === ACCOUNT_SEPARATOR) {
        isSeparator = true;
      } else if (key >= '0' && key <= '9') {
        isDigit = true;
      }

      selectionProperties = helper.getSelectedTextProperties(event.target);

      if (!isDigit && !isSeparator) {
        isValid = false;
      } else if (isSeparator) {
        isValid = checkSeparatorRules(cccValue, selectionProperties);
      } else if (isDigit) {
        isValid = checkDigitRules(cccValue, selectionProperties);
      }

      if (!isValid) {
        event.preventDefault();
      }

      return isValid;
    }

    /**
     * Autocompleta el número de cuenta si es un tipo de cuenta nueva
     * @param  {String} cccValue - Valor actual del campo CCC
     * @return {String} Cuenta autocompletada o el valor actual si no cumple las condiciones
     */
    function completeAccountNumber(cccValue) {
      if (cccValue == null || cccValue === '') {
        return cccValue;
      }

      cccValue = trimCCCIfLongestThanMaxLength(cccValue);

      return getCompletedBranchNumber(cccValue) + ACCOUNT_SEPARATOR + getCompletedAccountNumber(cccValue);
    }

    /**
     * Recorta por el final los caracteres que excedan la longitud máxima. Esto solo ocurrirá en caso de que alguien intente corromper el componente.
     * @param  {String} cccValue - Valor actual del campo CCC
     * @return {String} Valor del campo CCC recortado a su longitud máxima
     */
    function trimCCCIfLongestThanMaxLength(cccValue) {
      if (cccValue.length > CCC_MAX_LENGTH) {
        return cccValue.substring(0, CCC_MAX_LENGTH - 1);
      }

      return cccValue;
    }

    /**
     * Comprueba si el tipo de cuenta es nueva
     * @param  {String}  cccValue - Valor actual del campo CCC
     * @return {Boolean} True si la cuenta es de tipo nueva
     */
    function isNewAccountType(cccValue) {
      if (cccValue.length <= 16 && hasSeparator(cccValue)) {
        return true;
      }

      return false;
    }

    function isOldAccountType(cccValue) {
      if (hasSeparator(cccValue) && getAccountNumber(cccValue).length === 9) {}
    }

    function validateAndCompleteIfCajaAsturAccount(cccValue) {
      var account = getAccountNumber(cccValue);
      var cajaAsturAccount;

      if (hasSeparator(cccValue) && account.length === ACCOUNT_ASTURIAS_LENGTH) {
        cajaAsturAccount = '0' + account;
        cccValue = cccValue.replace(account, cajaAsturAccount);
      }

      return cccValue;
    }

    function validateFamily(cccValue) {
      var accountFamilies = cccRoutinesService.accountFamilies;
      var family = getAccountFamilyNumber(cccValue);

      for (var i = accountFamilies.length - 1; i >= 0; i--) {
        if (family === accountFamilies[i]) {
          return true;
        }
      }

      return false;
    }

    /**
     * Comprueba si cumple las reglas cuando se escribe un separador
     * @param  {String} cccValue - Valor actual del campo CCC
     * @param  {Object} selectionProperties - Parámetros relacionados con el texto seleccionado
     * @return {Boolean} True si cumple las reglas establecidas al separador
     */
    function checkSeparatorRules(cccValue, selectionProperties) {
      var isValid = true;

      if (selectionProperties.caretPosition > 4 ||
        hasSeparator(cccValue) && !hasSeparator(selectionProperties.selectedText) ||
        cccValue.length === 0 || selectionProperties.caretPosition === 0) {
        isValid = false;
      }

      return isValid;
    }

    /**
     * Comprueba si cumple las reglas cuando se escribe un dígito
     * @param  {String} cccValue - Valor actual del campo CCC
     * @param  {Object} selectionProperties - Parámetros relacionados con el texto seleccionado
     * @return {Boolean} True si cumple las reglas establecidas a los dígitos
     */
    function checkDigitRules(cccValue, selectionProperties) {
      var isValid = true;

      //Disallow write more digits if is an old account number type
      if (cccValue.length + 1 > ACCOUNT_LENGTH && (!hasSeparator(cccValue) && selectionProperties.selectedText.length === 0)) {
        isValid = false;
      }

      return isValid;
    }

    /**
     * Comprueba si la cadena que se le pasa contiene un separador
     * @param  {String}  string - Cadena de texto en la que buscar el separador
     * @return {Boolean} True si contiene un separador
     */
    function hasSeparator(string) {
      return helper.checkIfContains(string, ACCOUNT_SEPARATOR);
    }

    /**
     * Obtiene el número de rama completado. Puede ser con ceros a la izquierda o
     * con el número de rama por defecto
     * @return {String} Número autocompletado de rama
     */
    function getCompletedBranchNumber(cccValue) {
      var pointIndex = cccValue.indexOf(ACCOUNT_SEPARATOR);
      var branchNumber = DEFAULT_BRANCH;

      if (pointIndex > 0) {
        branchNumber = cccValue.substring(0, pointIndex);
        branchNumber = helper.padString(branchNumber, '0000');
      }

      return branchNumber;
    }

    /**
     * Obtiene el número de cuenta completado. Este se completa con el número de cuenta
     * por defecto con los números que falten a su izquierda
     * @return {String} Número autocompletado de cuenta
     */
    function getCompletedAccountNumber(cccValue) {
      var pointIndex = cccValue.indexOf(ACCOUNT_SEPARATOR);
      var accountNumber = DEFAULT_ACCOUNT;

      if (pointIndex >= -1) {
        accountNumber = cccValue.substring(pointIndex + 1, cccValue.length);
        accountNumber = helper.padString(accountNumber, DEFAULT_ACCOUNT);
      }

      return accountNumber;
    }

    /**
     * Obtiene el número de entidad de un CCC completo
     * @param  {String} cccValue - Valor actual del campo CCC
     * @return {String} Número de entidad
     */
    function getEntityNumber(cccValue) {
      //TODO Por conocer como se obtiene el código de entidad

      cccValue = '';

      return '2048';
    }

    /**
     * Obtiene el número de sucursal de un CCC
     * @param  {String} cccValue - Valor actual del campo CCC
     * @return {String} Número de sucursal
     */
    function getBranchNumber(cccValue) {
      var branchNumber = null;

      if (isNewAccountType(cccValue)) {
        branchNumber = cccValue.substr(0, cccValue.indexOf(ACCOUNT_SEPARATOR));
      } else {
        branchNumber = DEFAULT_BRANCH;
      }

      return branchNumber;
    }

    /**
     * Obtiene el número de cuenta de un CCC
     * @param  {String} cccValue - Valor actual del campo CCC
     * @return {String} Número de cuenta
     */
    function getAccountNumber(cccValue) {
      var accountNumber = null;

      if (isNewAccountType(cccValue)) {
        accountNumber = cccValue.substr(cccValue.indexOf(ACCOUNT_SEPARATOR) + 1, 10);
      } else {
        accountNumber = cccValue;
      }

      return accountNumber;
    }

    function getAccountFamilyNumber(cccValue) {
      var account = getAccountNumber(cccValue);

      return account.substr(0, 2);
    }

    /**
     * Obtiene el dígito de control de un CCC
     * @param  {String} cccValue - Valor actual del campo CCC
     * @return {String} Dígito de control
     */
    function getControlDigit(cccValue) {
      var controlDigit = null;

      if (isNewAccountType(cccValue)) {
        controlDigit = cccValue.substr(cccValue.length - 1, 1);
      } else {
        controlDigit = cccValue.substr(cccValue.length - 1, 1);
      }

      return parseInt(controlDigit);
    }

    /**
     * Calcula el dígito de control según el valor de CCC completo con entity, branch y account
     * @param  {String} cccValue - Valor actual del campo CCC
     * @return {Number} Dígito de control calculado del actual valor de CCC
     */
    function calculateControlDigitOfFullAccount(cccValue) {
      var entity;
      var branch;
      var account;

      entity = getEntityNumber(cccValue);
      branch = getBranchNumber(cccValue);
      account = getAccountNumber(cccValue);

      //TODO Hay que mirar en los métodos checkNewAccount y checkOldAccount de JAVA que es lo que hace la parte del switch offline

      return cccRoutinesService.calculateControlDigitOfFullAccount(entity, branch, account);
    }

    /**
     * Comprueba si el valor CCC es válido
     * @param  {String} cccValue - Valor actual del campo CCC
     * @return {Boolean} True si el valor CCC es válido
     */
    function validateAccount(cccValue) {
      var controlDigit;
      var calculatedControlDigit;

      if (cccValue == null || cccValue.length === 0 || !validateFamily(cccValue)) {
        return false;
      }

      controlDigit = getControlDigit(cccValue);

      if (isNewAccountType(cccValue)) {
        calculatedControlDigit = calculateInfocajaControlDigit(cccValue);
      } else {
        calculatedControlDigit = calculateControlDigit(cccValue);
      }

      console.log('ControlDigit', controlDigit);
      console.log('CalculatedControlDigit', calculatedControlDigit);

      return controlDigit === calculatedControlDigit;
    }

    function calculateInfocajaControlDigit(account) {
      var digit = 0;
      var sum = 0;
      var aux;

      account = getBranchNumber(account) + getAccountNumberWithoutControlDigit(account);

      for (var i = 0; i < account.length; i++) {
        aux = account.charAt(i) * INFOCAJA_WEIGHT_TABLE[i];

        if (aux > 9) {
          aux -= 9; //Usar %?
        }

        sum += aux;
      }

      digit = sum % 10;

      if (digit > 0) {
        digit = 10 - digit;
      }

      return digit;
    }

    function calculateControlDigit(account) {
      var digit = 0;
      var accountLength;
      var sum = 0;
      var num;
      var branch = getBranchNumber(account);
      var accountNumber = getAccountNumber(account);

      account = accountNumber.substring(1, 3) + branch.substring(1, 4) + accountNumber.substring(3, 9);
      accountLength = account.length;

      // Sums account's digits in even positions
      for (var i = 1; i < accountLength; i = i + 2) {
        sum += parseInt(account.substring(i, i + 1));
      }

      // Multiplies digits in odd positions by two and accumulates them
      for (i = 0; i < accountLength; i = i + 2) {
        num = parseInt(account.substring(i, i + 1));

        sum += num * 2;

        if (num > 4) {
          sum++;
        }
      }

      // Calculates control digit
      digit = 10 - sum % 10;
      if (digit === 10) {
        digit = 0;
      }

      return digit;
    }

    function getAccountNumberWithoutControlDigit(cccValue) {
      var account = getAccountNumber(cccValue);

      return account.substr(0, account.length - 1);
    }
  }
});
