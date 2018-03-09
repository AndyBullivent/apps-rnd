(function() {
  'use strict';

  angular
    .module('tile.collabco.testoauth', [])
    .controller('tile.collabco.testoauth', TileCtrl)
    .dependencies = ['CollabcoTestoauthService'];



  function TileCtrl ($scope, MydaySidebar,CollabcoTestoauthService) {
    // The tile object representing this tile is accessed at $scope.tile
    var tile = $scope.tile;
    CollabcoTestoauthService
      .initRenew()
      .then(function(){
        tile.content.push({
            title: "Authenticated",
            subtitle: 'Access Granted',
            translationMap: {
              title: false,
              subtitle: true
          }
        });
    
        tile.ready();


      })
    .catch(function (error) {
  
      if (error === 'Not authenticated.') {
        tile.error('Unauthorised', 'Click here to grant access to your Instagram Account.');
      }
      else {
        tile.error(null, 'Cannot load data from Instagram');
      }
    });

  }

})();
