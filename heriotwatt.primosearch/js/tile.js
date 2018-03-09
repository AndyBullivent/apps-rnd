(function() {
  'use strict';

  angular
    .module('tile.heriotwatt.primosearch', [])
    .controller('tile.heriotwatt.primosearch', TileCtrl);



  function TileCtrl ($scope,$window, $httpParamSerializer, MydaySidebar,AppResources, Apps) {

    // The tile object representing this tile is accessed at $scope.tile
    var tile = $scope.tile;
    tile.onActivated = angular.noop;

    // get the url base for primo search
    var _settings = Apps.getAppSettings('heriotwatt.primosearch');
    var _baseurl = "";
    if(_settings){
      if(_settings.baseUrl){
        _baseurl = _settings.baseUrl;
      }
    }

    // set up the model, scopeand query
    tile.model = {};
    tile.query = "";
    tile.scope = "Edinburgh";
    tile.model = {
      institution: "44HWA",
      vid: "44HWA_V1",
      tab: "default_tab",
      search_scope: tile.properties.scope,
      mode: "Basic",
      displayMode:"full",
      bulkSize:10,
      highlight:"true",
      dum: "true",  
      query: "any,contains,",
      displayField:"all",
      pcAvailabiltyMode:"true"
    }

    // search function
    tile.searchPrimo = function() {
      tile.model.query += tile.query;
      var qs = $httpParamSerializer(tile.model);
      $window.open(_baseurl + qs, "_blank");
      tile.model.query = "any,contains,";
      tile.query = "";
    }

    // load CSS to style the tile
    AppResources.load(["css/main.css"],"heriotwatt.primosearch");

    MydaySidebar.setAppNotifications('heriotwatt.primosearch', 0);
    tile.ready();
  }

})();
