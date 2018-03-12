(function () {
  'use strict';

  angular
    .module('providers.odisee.menuvandedag')
    .service('OdiseeMenuvandedagService', OdiseeMenuvandedagService);

  var _base = '/api/endpoint/proxyStuvoMenu';

  function OdiseeMenuvandedagService ($q,$http) {

    var self = this;
    
    this.getMenu = function () {
      var deferred = $q.defer();
      var endpoint = _base;

      return $http.get(endpoint)
      .then(function (response) {
          deferred.resolve(response.data);
          return deferred.promise;
      });
    }
  }

})();
