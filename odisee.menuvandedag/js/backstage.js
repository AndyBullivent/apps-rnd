(function () {
  'use strict';

  angular
    .module('app.odisee.menuvandedag', [])
    .config(['$stateProvider', config]);



  function config ($stateProvider) {

    var main = {
      appId: 'odisee.menuvandedag',
      html: 'main',
      controller: 'OdiseeMenuvandedagCtrl as vm',
    };

    var menu = {
      name: 'menu',
      url: '/menu/{:campus}',
      controller: 'OdiseeMenuvandedagMenuCtrl as vm',
      dependencies: ['OdiseeMenuvandedagService'],
    }

    $stateProvider.appState(main);
    $stateProvider.appState(menu);
  }


})();
