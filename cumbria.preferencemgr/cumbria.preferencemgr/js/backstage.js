(function () {
  'use strict';

  angular
    .module('app.cumbria.preferencemgr', [])
    .config(['$stateProvider', config]);



  function config ($stateProvider) {

    var main = {
      appId: 'cumbria.preferencemgr',
      html: 'main',
      css: 'main',
      controller: 'CumbriaPreferencemgrCtrl as vm',
      dependencies: ['CumbriaPreferencemgrService']
    };

    $stateProvider.appState(main);
  }

})();
