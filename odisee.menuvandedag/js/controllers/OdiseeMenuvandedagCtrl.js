(function () {
  'use strict';

  angular
    .module('app.odisee.menuvandedag')
    .controller('OdiseeMenuvandedagCtrl', OdiseeMenuvandedagCtrl);

  
  function OdiseeMenuvandedagCtrl ($stateParams) {
    
     $scope.myCampus = $stateParams.menuId; //moduleCampus; Needs to be passed in from a state



  }

})();
