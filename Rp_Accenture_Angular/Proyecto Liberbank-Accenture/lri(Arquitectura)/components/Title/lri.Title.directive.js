'use strict';

define(function() {
    var app = require('lri/lri.main.module');
 
    app.component('lriTitle', {
      templateUrl: '/lri/components/Title/lri.Title.html',
      controller: 'lriTitle',
      controllerAs: 'lriTitle',
    bindings: {
      classContainer: '@',
      title: '@',
      classTitle: '@'
    }
    });
});