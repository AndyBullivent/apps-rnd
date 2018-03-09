(function () {
  'use strict';

  angular
    .module('providers.heriotwatt.primosearch')
    .service('HeriotwattPrimosearchService', HeriotwattPrimosearchService);



  function HeriotwattPrimosearchService () {

    this.getSomething = function(){
      return "something";
    };
  }

})();
