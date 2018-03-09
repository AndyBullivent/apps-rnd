(function () {
  'use strict';

  angular
    .module('app.collabco.libloadtester', [])
    .config(['$stateProvider', config]);



  function config ($stateProvider) {

    var main = {
      appId: 'collabco.libloadtester',
      html: 'main',
      controller: 'CollabcoLibloadtesterCtrl as vm',
      css: 'angular-growl.min',
      resolve:{
        deps: function (AppResources) {
          return AppResources.load([
            'js/providers/angular-growl.min.js'
          ]);
        }
      }
    };

    $stateProvider.appState(main);
  }


})();
