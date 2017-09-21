var angular = require('angular');

var Soa = require('./lir/components/SOA/lir.Soa');
var Dropdown = require('./lir/components/Dropdown/lir.Dropdown');
var Title = require('./lir/components/Title/lir.Title');
var LinksPanel = require('./lir/components/LinksPanel/lir.LinksPanel');
var TooltipLri = require('./lir/components/Tooltip/lir.Tooltip');
var Input = require('./lir/components/Input/lir.Input');
var Emails = require('./lir/components/Emails/lir.Emails');
var Alert = require('./lir/components/Alert/lir.Alert');
var Bloque8_Ficha_Litigio = require('./lir/containers/lir.Bloque8_Ficha_Litigio');
var Bloque8_Certificado_Deuda = require('./lir/containers/lir.Bloque8_Certificado_Deuda');
var Bloque3 = require('./lir/containers/lir.Bloque3');
var Bloque1 = require('./lir/containers/lir.Bloque1');
var BotonComponent = require('./lir/components/Boton/lir.Boton');
var Checkbox = require('./lir/components/Checkbox/lir.Checkbox');
require('angular-ui-router');
var routesConfig = require('./routes');

import './index.css';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('lirBloque8FichaLitigio', Bloque8_Ficha_Litigio)
  .component('lirBloque8CertificadoDeuda', Bloque8_Certificado_Deuda)
  .component('lirBloque3', Bloque3)
  .component('lirBloque1',Bloque1)
  .component('titleComponent', Title)
  .component('linksPanelComponent',LinksPanel)
  .component('tooltipComponent', TooltipLri)
  .component('inputComponent', Input)
  .component('checkboxComponent', Checkbox)
  .component('emailsComponent', Emails)
  .component('dropdownComponent', Dropdown)
  .component('botonComponent', BotonComponent)
  .component('soaComponent', Soa)
  .component('alertComponent', Alert)
  

