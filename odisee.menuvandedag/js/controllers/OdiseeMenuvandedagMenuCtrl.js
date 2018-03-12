(function () {
    'use strict';
  
    angular
      .module('app.odisee.menuvandedag')
      .controller('OdiseeMenuvandedagMenuCtrl', OdiseeMenuvandedagMenuCtrl);
  
    
    function OdiseeMenuvandedagMenuCtrl ($scope, $stateParams, OdiseeMenuvandedagService) {
      debugger
       $scope.myCampus = $stateParams.campus; //moduleCampus; Needs to be passed in from a state
       $scope.myLang = (MydayConfig.lang == 'nl') ? 'dutch' : 'english';
    
       OdiseeMenuvandedagService.getMenu()
         .then(function (result) {
           $scope.menu = result;
       });
  
  
    }
  
  })();