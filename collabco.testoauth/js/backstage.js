(function () {
  'use strict';

  angular
    .module('app.collabco.testoauth', [])
    .config(['$stateProvider', config]);



  function config ($stateProvider) {

    var main = {
      appId: 'collabco.testoauth',
      html: 'main',
      controller: 'CollabcoTestoauthCtrl as vm',
      dependencies: ['CollabcoTestoauthService'],
      resolve: {
        // Dependencies is myday app framework keyword, used to get dependencies from the 'dependencies' property of the state
        authorised: function (Dependencies,CollabcoTestoauthService) {
          return CollabcoTestoauthService.initRenew(true);
        }
      }
    };

    $stateProvider.appState(main);
  }


})();
