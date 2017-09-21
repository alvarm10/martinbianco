define(function (require) {
  require('architectureApp/lar.public.module');

  angular.module('architecture').directive('larTable', larTable);

  larTable.$inject = [];

  function larTable() {
    return {
      templateUrl: '/lar/components/lar-table/lar.lar-table.view.html',
      restrict: 'E',
      controller: 'LarTableController',
      controllerAs: 'larTable',
      scope: {
        type: '=', // [TABLE_TYPE] Tipo de tabla a representar, obtiene el valor de la constante TABLE_TYPE
        columns: '=', // [Array] Array de objetos con las propiedades key, text, haveTotal
        tableData: '=?', // [Array] Array con los datos de la tabla mostrados por pantalla, OPCIONAL porque puede cogerlos del servidor
        itemsByPage: '@?', // [Number] Número de filas que se mostrarán por página
      },
      bindToController: true,
    };
  }
});
