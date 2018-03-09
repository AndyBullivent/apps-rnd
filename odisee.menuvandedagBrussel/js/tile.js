(function() {
    'use strict';

    var moduleBase = 'odisee.menuvandedagBrussel';
    var moduleName = 'tile.' + moduleBase;
    var moduleCampus = 'Brussel';
    
  angular
    .module(moduleName, [])
    .controller(moduleName, TileCtrl)
    .dependencies = ['OdiseeMenuvandedagService'];


  function TileCtrl($scope, MydaySidebar, OdiseeMenuvandedagService, MydayConfig) {

    // The tile object representing this tile is accessed at $scope.tile
      var tile = $scope.tile;

      $scope.myCampus = moduleCampus;
      $scope.myLang = (MydayConfig.lang == 'nl') ? 'dutch' : 'english';

      //debugger;

      MydaySidebar.setAppNotifications(moduleBase, 0);

    if (tile.template === 'multiline') {

        OdiseeMenuvandedagService.getMenu().then(function (result) {

            $scope.menu = [];

            var today = new Date();

            var todayArr = new Array(today.getFullYear(), today.getMonth() + 1, today.getDate());

            for (var dag in result) {

                var dagArr = dag.split("-");

                if (todayArr[0] == dagArr[0] && todayArr[1] == dagArr[1] && todayArr[2] == dagArr[2]) {

                    for (var campus in result[dag]) {

                        if (campus == $scope.myCampus) {

                            var talen = [];

                            for (var taal in result[dag][campus]) {
                                talen.push(taal);
                            }

                            var backupTaal = 'dutch';

                            if (talen.length > 0) {
                                if (talen.indexOf('english') > -1 && $scope.myLang != 'dutch') {
                                    backupTaal = 'english';
                                }
                            }

                            for (var taal in result[dag][campus]) {

                                if (taal == backupTaal) {
                                    
                                    for (var nummer in result[dag][campus][taal]) {

                                        var category = result[dag][campus][taal][nummer].category;

                                        var dish = result[dag][campus][taal][nummer].dish;
                                        
                                        $scope.menu.push({
                                            category: category,
                                            dish: dish,
                                        });

                                    }

                                }

                            }
                        }
                    }
                }
            }

            var slideLimit = tile.properties.slideLimit || 5;
            var limit = $scope.menu.length < slideLimit ? $scope.menu.length : slideLimit;

            for (var x = 0; x < limit; x++) {

                var category = $scope.menu[x].category;

                var dish = $scope.menu[x].dish;

                tile.content.push({
                    title: category,
                    subtitle: dish,
                    translationMap: {
                        title: false,
                        subtitle: true
                    }
                });
            }

        });
    }

    tile.ready();
  }

})();
