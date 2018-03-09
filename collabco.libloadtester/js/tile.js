(function() {
  'use strict';

  angular
    .module('tile.collabco.libloadtester', [])
    .controller('tile.collabco.libloadtester', TileCtrl);



  function TileCtrl ($scope, MydaySidebar) {

    // The tile object representing this tile is accessed at $scope.tile
    var tile = $scope.tile;

    MydaySidebar.setAppNotifications('collabco.libloadtester', 0);

    // Depending on the template, display different content.
    if (tile.template === 'info') {

      tile.content.push({
        title: template1,
        subtitle: 'app.collabco-libloadtester.tile.TITLE1',
        translationMap: {
          title: false,
          subtitle: true
        }
      });

      tile.content.push({
        title: template2,
        subtitle: 'app.collabco-libloadtester.tile.TITLE2',
        translationMap: {
          title: false,
          subtitle: true
        }
      });

    }
    tile.ready();
  }

})();
