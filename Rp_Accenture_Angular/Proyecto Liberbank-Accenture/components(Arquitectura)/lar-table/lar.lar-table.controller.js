define(function (require) {
  var app = require('architectureApp/lar.public.module');
  var moment = require('moment');

  // TODO Controlar que pasaría si se le pasan mal las cabeceras y el resto de parámetros
  // TODO ¿Unificar showTotals y showTotalsSum?
  // TODO Al devolver los datos de la tabla, las fechas deben pasarse de string a tipo fecha

  app.controller('LarTableController', LarTableController);

  LarTableController.$inject = ['TABLE_TYPE'];

  function LarTableController(TABLE_TYPE) {
    var vm = this;
    var DEFAULT_ITEMS_BY_PAGE = 10;
    var VALID_COLUMN_TYPES = ['text', 'number', 'date'];

    vm.showTotals = null;
    vm.showTotalsSum = null;
    vm.showFilters = true;
    vm.allowSelection = false;
    vm.allowMultipleSelection = null;
    vm.allowDoubleHeader = null;

    vm.mainCheckbox = false;
    vm.totals = [];
    vm.totalSum = 0;
    vm.superiorHeaders = [];
    vm.headers = [];
    vm.editingCells = {};

    vm.parseValueOnEdit = parseValueOnEdit;
    vm.parseValue = parseValue;
    vm.rowClicked = rowClicked;
    vm.toggleAllCheckboxes = toggleAllCheckboxes;
    vm.doneEditingRow = doneEditingRow;
    vm.cancelEditingRow = cancelEditingRow;
    vm.editRow = editRow;
    vm.disableRowSelection = disableRowSelection;

    vm.getters = {
      sorting: function (header) {
        return function (value) {
          value = value[header.key];

          if (header.type === 'date') {
            return moment(value, 'L');
          }

          return value;
        };
      },
    };

    init();

    function init() {
      if (vm.type === TABLE_TYPE.POSITION_ADDITION && vm.itemsByPage == null) {
        throw new Error('Debe establecer el valor de la propiedad "items-by-page" para la tabla de tipo POSITION_ADDITION');
      }

      if (vm.columns == null || vm.tableData == null) {
        throw new Error('Los parámetros de entrada columns y tableData no pueden estar vacíos');
      }

      if (vm.itemsByPage == null) {
        vm.itemsByPage = DEFAULT_ITEMS_BY_PAGE;
      }

      // TODO Este moment.locale debería definirse a la hora de seleccionar el idioma
      moment.locale('es');

      setOptionsForTableType();
      limitItemsByPageIfNoPagination();
      distributeHeaders();
      iterateData();
    }

    function iterateData() {
      var row;
      var column;

      for (var i = 0; i < vm.tableData.length; i++) {
        row = vm.tableData[i];

        for (var j = 0; j < vm.headers.length; j++) {
          column = vm.headers[j];

          parseIfDate(row, column);
          validateColumnType(column);
          setEditableAndObligatoryAttributes(column);
          calculateTotal(row, column, j);
        }
      }
    }

    function parseIfDate(row, column) {
      if (column.type === 'date') {
        row[column.key] = moment(new Date(row[column.key])).format('L');
      }
    }

    function validateColumnType(column) {
      if (VALID_COLUMN_TYPES.indexOf(column.type) === -1) {
        throw new Error('El tipo de input no es válido en la columna ' + column.text + ': ' + column.type + '. Los valores soportados son ' + VALID_COLUMN_TYPES);
      }
    }

    function setEditableAndObligatoryAttributes(column) {
      if (column.editable == null) {
        column.editable = true;
      }

      if (column.obligatory == null) {
        column.obligatory = false;
      }
    }

    function calculateTotal(row, column, columnIndex) {
      var total = 0;
      var data;

      if (!column.haveTotal) {
        return;
      }

      if (vm.totals[columnIndex] == null) {
        vm.totals[columnIndex] = 0;
      }

      data = row[column.key];
      total += parseInt(data);

      vm.totals[columnIndex] += total;
      vm.totalSum += total;
    }

    function parseValue(type, value) {
      if (type === 'date' && value instanceof Date) {
        return moment(new Date(value)).format('L');
      }

      return value;
    }

    function parseValueOnEdit(type, value, key) {
      var newValue;

      if (type === 'date') {
        newValue = new Date(moment(value, 'L'));
      }

      vm.editingCells[key] = newValue || value;
    }

    function toggleAllCheckboxes() {
      for (var i = vm.tableData.length - 1; i >= 0; i--) {
        vm.tableData[i].isSelected = vm.mainCheckbox;
      }
    }

    function rowClicked(row) {
      if (!vm.allowSelection || row.editing) {
        disableRowSelection(row);
      }
    }

    function editRow(row) {
      if (!_.isEmpty(vm.editingCells)) {
        return;
      }

      row.editing = true;
      disableRowSelection(row);

      angular.forEach(row, function (value, key) {
        vm.editingCells[key] = value;
      });
    }

    function doneEditingRow(row) {
      var column;
      var error = false;

      angular.forEach(vm.editingCells, function (value, key) {
        column = _.findWhere(vm.headers, {key: key});
        if (column != null && column.obligatory === true && value == null) {
          error = true;
        } else {
          row[key] = value;
        }
      });

      if (!error) {
        row.editing = false;
        vm.editingCells = {};
      }
    }

    function disableRowSelection(row) {
      row.isSelected = !row.isSelected;
    }

    function cancelEditingRow(row) {
      row.editing = false;
      vm.editingCells = {};
      disableRowSelection(row);
    }

    function setOptionsForTableType() {
      switch (vm.type) {
        case TABLE_TYPE.CPP:
          vm.allowSelection = true;
          break;

        case TABLE_TYPE.CONTACTS_CONSULT:
          break;

        case TABLE_TYPE.POSITION_ADDITION:
          vm.showTotals = true;
          vm.showTotalsSum = true;
          vm.allowDoubleHeader = true;
          break;

        case TABLE_TYPE.CONTRACT_LINK:
          vm.allowSelection = true;
          vm.allowMultipleSelection = true;
          break;

        case TABLE_TYPE.ESTATE_DETAIL:
          vm.allowSelection = true;
          vm.showTotals = true;
          vm.showTotalsSum = true;
          break;

        case TABLE_TYPE.SURVEY_REPLICA:
          vm.allowSelection = true;
          vm.allowMultipleSelection = true;
          vm.allowEdition = true;
          break;

        default:
          vm.showTotals = true;
          vm.showTotalsSum = true;
          vm.showFilters = true;
          vm.allowSelection = true;
          vm.allowMultipleSelection = true;
          vm.allowDoubleHeader = true;
          break;
      }
    }

    function limitItemsByPageIfNoPagination() {
      if (vm.itemsByPage !== DEFAULT_ITEMS_BY_PAGE) {
        vm.tableData = vm.tableData.slice(0, vm.itemsByPage);
      }
    }

    /**
     * Separa las cabeceras en superiorHeaders y headers si hubiera cabeceras dobles
     */
    function distributeHeaders() {
      var header;
      var superiorHeader;

      for (var i = 0; i < vm.columns.length; i++) {
        header = vm.columns[i];

        if (header.columns) {
          if (!vm.allowDoubleHeader) {
            throw new Error('No se permiten cabeceras dobles con este tipo de tabla');
          }

          superiorHeader = {
            colspan: header.columns.length,
            text: header.text,
          };

          vm.superiorHeaders.push(superiorHeader);

          for (var j = 0; j < header.columns.length; j++) {
            vm.headers.push(header.columns[j]);
          }
        } else {
          vm.headers.push(header);
          vm.superiorHeaders.push({});
        }
      }
    }
  }
});
