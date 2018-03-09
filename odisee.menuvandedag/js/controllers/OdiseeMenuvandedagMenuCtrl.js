(function () {
    'use strict';
  
    angular
      .module('app.odisee.menuvandedag')
      .controller('OdiseeMenuvandedagMenuCtrl', OdiseeMenuvandedagMenuCtrl);
  
    OdiseeMenuvandedagMenuCtrl.$inject = ['OdiseeMenuvandedagService'];
    function OdiseeMenuvandedagCtrl ($scope, OdiseeMenuvandedagService) {
      
      // $scope.myCampus = moduleCampus; replace with tile property
      $scope.myLang = (MydayConfig.lang == 'nl') ? 'dutch' : 'english';
  
      OdiseeMenuvandedagService.getMenu()
        .then(function (result) {
          $scope.menu = result;
      });
    }
  
  })();