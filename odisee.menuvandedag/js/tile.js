(function() {
  'use strict';

  angular
    .module('tile.odisee.menuvandedag', [])
    .controller('tile.odisee.menuvandedag', TileCtrl);



  function TileCtrl ($scope) {

    // The tile object representing this tile is accessed at $scope.tile
    var tile = $scope.tile;
    var stateAppId = 'app.' + tile.appId.replace('.', '-');
    var params = {
      campus : tile.properties.campus || 'Aalst'
    };

    tile.onActivated = function(){
      $state.go(stateAppId,params);
    }

    tile.ready();
  }

})();
