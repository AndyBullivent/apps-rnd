(function () {
  'use strict';

  angular
    .module('providers.collabco.libloadtester')
    .service('CollabcoLibloadtesterService', CollabcoLibloadtesterService);



  function CollabcoLibloadtesterService () {

    this.getSomething = function(){
      return "something";
    };
  }

})();
