(function () {
    'use strict';

    var moduleBase = 'odisee.menuvandedagBrussel';
    var moduleName = 'providers.' + moduleBase;
    var moduleCampus = 'Brussel';
    
    var endpoint = '/api/endpoint/proxyStuvoMenu';

  angular
    .module(moduleName)
    .service('OdiseeMenuvandedagService', OdiseeMenuvandedagService);

  function OdiseeMenuvandedagService($http, $q, MydayConfig) {

      //debugger;

      return {
          getMenu: function () {
              var deferred = $q.defer();
              return $http.get(endpoint)
              .then(function (response) {
                  deferred.resolve(response.data);
                  return deferred.promise;
                  });
          }
      };
  }

})();
