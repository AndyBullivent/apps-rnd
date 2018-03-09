(function() {
  'use strict';

  angular
    .module('tile.cumbria.preferencemgr', [])
    .controller('tile.cumbria.preferencemgr', TileCtrl);



  function TileCtrl ($scope, MydaySidebar) {

    // The tile object representing this tile is accessed at $scope.tile
    var tile = $scope.tile;

    MydaySidebar.setAppNotifications('cumbria.preferencemgr', 0);

    // Depending on the template, display different content.
    if (tile.template === 'info') {
      tile.content.push({
        //title: 'UoC Preferences',
        //subtitle: 'app.cumbria-preferencemgr.tile.ICON',
        //icon: 'app.cumbria-preferencemgr.tile.icon',
        translationMap: {
          title: false,
          subtitle: true
        }
      });

    }
    else if (tile.template === 'icon') {
      tile.content.push({
          //title: 'UoC Preferences',
          //subtitle: 'app.cumbria-preferencemgr.tile.ICON',
          //icon: 'app.cumbria-preferencemgr.tile.icon',
          translationMap: {
            title: false,
            subtitle: true
          }
      });  
    }
    tile.ready();
  }

})();
