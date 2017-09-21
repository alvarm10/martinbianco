define(function(require) {
  require('lri/lri.main.module');
  require('lri/lri.main.route');
  require('lri/lri.main.controller');
  require('lri/containers/bloque8/lri.Bloque8_Certificado_Deuda.controller');
  require('lri/containers/bloque8/lri.Bloque8_Certificado_Deuda.directive');
  require('lri/containers/bloque8/lri.Bloque8_Ficha_litigio.controller');
  require('lri/containers/bloque8/lri.Bloque8_Ficha_litigio.directive');
  require('lri/containers/bloque3/lri.Bloque3.controller');
  require('lri/containers/bloque3/lri.Bloque3.directive');
  require('lri/components/Alert/lri.Alert.controller');
  require('lri/components/Alert/lri.Alert.directive');
  require('lri/components/Button/lri.Button.controller');
  require('lri/components/Button/lri.Button.directive');
  require('lri/components/Checkbox/lri.Checkbox.controller');
  require('lri/components/Checkbox/lri.Checkbox.directive');
  require('lri/components/Dropdown/lri.Dropdown.controller');
  require('lri/components/Dropdown/lri.Dropdown.directive');
  require('lri/components/Input/lri.Input.controller');
  require('lri/components/Input/lri.Input.directive');
  require('lri/components/LinksPanel/lri.LinksPanel.controller');
  require('lri/components/LinksPanel/lri.LinksPanel.directive');
  require('lri/components/Title/lri.Title.controller');
  require('lri/components/Title/lri.Title.directive');
  require('lri/components/Tooltip/lri.Tooltip.controller');
  require('lri/components/Tooltip/lri.Tooltip.directive');

  var $html = angular.element(document.getElementById('lri'));

  angular.element($html).ready(function() {
    // bootstrap the app manually
    angular.bootstrap($html, ['lri']);
  });
});
