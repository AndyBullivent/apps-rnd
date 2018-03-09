(function () {
    'use strict';

    var moduleBase = 'odisee.menuvandedagBrussel';
    var moduleName = 'app.' + moduleBase;
    var moduleCampus = 'Brussel';

    angular
      .module(moduleName)
      .controller('OdiseeMenuvandedagCtrl', OdiseeMenuvandedagCtrl);

    function OdiseeMenuvandedagCtrl($scope, OdiseeMenuvandedagService) {

        $scope.myCampus = moduleCampus;
        $scope.myLang = (MydayConfig.lang == 'nl') ? 'dutch' : 'english';

        OdiseeMenuvandedagService.getMenu()
            .then(function (result) {
          $scope.menu = result;
      });
    }

})();

