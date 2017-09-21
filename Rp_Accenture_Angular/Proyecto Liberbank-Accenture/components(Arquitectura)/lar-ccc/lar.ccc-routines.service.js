define(function (require) {
  var app = require('architectureApp/lar.public.module');

  app.factory('cccRoutinesService', cccRoutinesService);

  cccRoutinesService.$inject = [];

  function cccRoutinesService() {
    //TODO Tabla cargada del JSON con los códigos de las familias válidas, eliminar cuando se obtenga desde JSON
    var accountFamilies = ['00', '01', '02', '03', '04', '20', '30', '65'];

    return {
      accountFamilies: accountFamilies,
      calculateControlDigitOfFullAccount: calculateControlDigitOfFullAccount,
    };

    //////////////////////////////////////////////////////////////////////////////////////

    /**
     * Calcula los dígitos de control según entity, branch y account
     * @param  {String} entity - Entidad
     * @param  {String} branch - Sucursal
     * @param  {String} account - Cuenta
     * @return {String | Null} Dígito de control calculado
     */
    function calculateControlDigitOfFullAccount(entity, branch, account) {
      var entityBranch;
      var firstControlDigit;
      var secondControlDigit;
      var controlDigit;

      if (entity == null || branch == null || account == null) {
        return null;
      }

      entityBranch = entity + branch;

      firstControlDigit = calculateControlDigit(entityBranch, 3);
      secondControlDigit = calculateControlDigit(account, 1);

      controlDigit = firstControlDigit + secondControlDigit;

      return controlDigit.toString();
    }

    /**
     * Calcula el dígito de control de una serie de números, ya sea la suma de entidad y sucursal o la cuenta
     * @param  {String} number - Número de cuenta o número de sucursal y entidad
     * @param  {Number} sequenceOffset - Desplazamiento en el array
     * @return {String} Dígito de control
     */
    function calculateControlDigit(number, sequenceOffset) {
      var acum = 0;
      var control = 0;
      var controlDigit;
      var num;
      var sequence = [0, 1, 2, 4, 8, 5, 10, 9, 7, 3, 6];

      for (var i = 0, length = number.length; i < length; i++) {
        num = number.charAt(i);
        acum += parseInt(num) * sequence[i + sequenceOffset];
      }

      control = 11 - acum % 11;

      if (control === 10) {
        controlDigit = 1;
      } else if (control === 11) {
        controlDigit = 0;
      } else {
        controlDigit = control;
      }

      return controlDigit;
    }
  }
});
