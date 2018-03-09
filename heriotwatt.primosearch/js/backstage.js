(function () {
  'use strict';

  angular
    .module('app.heriotwatt.primosearch', [])
    .config(config);



  function config ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when('/app/heriotwatt.primosearch', '/');
    var main = {
      appId: 'heriotwatt.primosearch',
      html: 'main',
      controller: 'HeriotwattPrimosearchCtrl as vm'
      //dependencies: ['HeriotwattPrimosearchService']

    };

    $stateProvider.appState(main);
  }


})();
