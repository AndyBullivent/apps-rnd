(function () {
  'use strict';

  angular
    .module('app.collabco.libloadtester')
    .controller('CollabcoLibloadtesterCtrl', CollabcoLibloadtesterCtrl);


  CollabcoLibloadtesterCtrl.$inject = ['growl'];
  function CollabcoLibloadtesterCtrl (growl) {
    growl.warning("This adds a warn message");
  }

})();
