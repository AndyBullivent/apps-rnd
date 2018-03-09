(function () {
  'use strict';

  angular
    .module('app.odisee.menuvandedag', [])
    .config(['$stateProvider', config]);



  function config ($stateProvider) {

    var main = {
      appId: 'odisee.menuvandedag',
      html: 'main',
      url: '/:campus',
      controller: 'OdiseeMenuvandedagCtrl as vm',
      params:{
        campus: { value: 'Aalst'}
      }
    };

    $stateProvider.appState(main);
  }


})();
