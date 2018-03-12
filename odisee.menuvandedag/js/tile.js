(function() {
  'use strict';

  angular
    .module('tile.odisee.menuvandedag', [])
    .controller('tile.odisee.menuvandedag', TileCtrl);

  function TileCtrl ($scope, $state) {

    // The tile object representing this tile is accessed at $scope.tile
    var tile = $scope.tile;
    var stateAppId = 'app.' + tile.appId.replace('.', '-');
    debugger
    var params = {
      campus :  tile.properties.campus || 'Aalst'
    };

    tile.onActivated = function(){
      var str = stateAppId + '.menu' ;
      $state.go(str,tile.properties.campus);
    }

    tile.ready();
  }

})();
