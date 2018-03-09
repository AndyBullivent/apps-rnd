(function () {
  'use strict';

  angular
    .module('providers.collabco.testoauth')
    .service('CollabcoTestoauthService', CollabcoTestoauthService);



  function CollabcoTestoauthService ($http, $q, MydayOAuthService) {

		var _huAPI = Object.create(MydayOAuthService);
		_huAPI.serviceId = 'HU';
		_huAPI.isTenantScope = true;
    var _baseUrl = 'https://api.instagram.com/v1';

    
    _huAPI.initRenew = function (redirect) {

      var deferred = $q.defer();

      _huAPI.init().then(function (authenticated) {
        if (authenticated) {
          deferred.resolve('Authenticated.');
        }
        else {
          if (redirect) {
            _huAPI.authenticate();
          }
          else{
            deferred.reject('Not authenticated.');
          }
        }
      });

      return deferred.promise;
    };
      

      return _huAPI;
  }



})();
