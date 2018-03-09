(function () {
    'use strict';

    var moduleBase = 'odisee.menuvandedagBrussel';
    var moduleName = 'app.' + moduleBase;
    var moduleCampus = 'Brussel';
    
    angular
      .module(moduleName, [])
      .config(['$stateProvider', config]);

    function config($stateProvider) {

        var main = {
            appId: moduleBase,
            html: 'main',
            controller: 'OdiseeMenuvandedagCtrl as vm',
            dependencies: ['OdiseeMenuvandedagService']
        };

        $stateProvider.appState(main);
    }

})();
