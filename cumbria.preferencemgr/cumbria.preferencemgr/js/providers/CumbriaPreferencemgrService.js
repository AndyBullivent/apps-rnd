(function () {
  'use strict';

  angular
    .module('providers.cumbria.preferencemgr')
    .service('CumbriaPreferencemgrService', CumbriaPreferencemgrService);



  function CumbriaPreferencemgrService($http, $q, MydayEnv) {
      
      //var _baseUrl = 'https://unmetneeds.cumbria.ac.uk/api/v1/';
      var _baseUrl = 'https://apps.cumbria.ac.uk/UoC_Preferences/api/v1/';

      console.log("_baseUrl " + _baseUrl);
  
      this.getClaims  = function(){
        return _http({
            url: 'group/claims',
            method: 'GET'
          });
      };

      this.getWhitelist  = function(){
        return _http({
            url: 'groupadmin',
            method: 'GET'
          });
      };

      this.saveWhitelist = function(whiteList){
        return _http({
          url:'groupadmin',
          method:'POST',
          data: whiteList
        });
      }

      this.getUserGroups = function(){
        return _http({
          url:'group',
          method:'GET'
        })
      }

      this.updateUserMembership = function(group){
        return _http({
          url:'group',
          method:'POST',
          data: group
        });
      }

      this.getCategories = function(){
        return _http({
          url:'category',
          method:'GET'
        })
      }
  
      this.helloWorldString = function(id){
        return _http({
            url: 'helloworld/'+id,
            method: 'GET'
          });
      };
  
      this.helloWorldVersion = function(){
        return $http({
            url: 'helloworld/version',
            method: 'GET'
          });
      };
    
  
      /**
       * myday identity server setup (open id connect)
       */
      var redirectPrefix = window.location.protocol + '//' + window.location.host + '/auth/';
      var oidcSettings = {
        authority: MydayEnv.idSrvUrl,
        client_id: MydayEnv.idSrvClientId,
        popup_redirect_uri: redirectPrefix + 'popup.html',
        silent_renew: true,
        silent_redirect_uri: redirectPrefix + 'silent-renew.html',
        response_type: 'token',
        scope: 'myday-api',
        persistKey: 'TokenManager.cumbria-preferencemgr2', // -> new - identifies locally stored data from OIDC manager as belonging to this app
        request_state_key: 'TokenManager.cumbria-preferencemgr2.progress', // -> new - identifies the current state of the oidc object
        filter_protocol_claims: true // -> new - removes unnecessary OIDC claims
      };
  
      var oidcMgr = new OidcTokenManager(oidcSettings);
  
      var inProgress;
  
      function ip () {
        inProgress = false;
      }
      function ipFail (error) {
        //debugger
        inProgress = false;
      }
      ip();
  
      var renew = function () {
        if (window.cordova) { // -> new - checks if the app is currently running in the mobile application
          return $q.when();
         }
        if (inProgress && typeof inProgress.then === 'function') {
          return inProgress;
        }
        if (!oidcMgr.access_token || oidcMgr.expired || oidcMgr.expires_in < 15) {
          var df = $q.defer();
          oidcMgr.renewTokenSilentAsync().catch(function(e){
            oidcMgr._callSilentTokenRenewFailed();
            //debugger
            console.error(e && e.message || "Unknown error");// => Throw the error this line
          }).then(df.resolve, df.reject);
          inProgress = df.promise.then(ip, ipFail);
          return inProgress;
        }
        return $q.when();
      };
  
    /**
    * Helper wrapper for all $http requests
    * This makes sure that token is renewed and added to the header
    */
    function _http (request) {
      return renew()
      .then(function () {
     
        request.url = _baseUrl + request.url;
        if (window.cordova) { // -> new
          request.sendMydayBearerToken = true;
        } else {
          request.headers = request.headers||{};
          request.headers.Authorization = 'Bearer ' + oidcMgr.access_token;
        }
        return $http(request);
      })
      .then(function (response) {
        return response.data;
      });

    } 


  }
})();