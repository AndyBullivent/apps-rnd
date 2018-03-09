(function (){

	'use strict';
	angular
		.module('app.heriotwatt.primosearch.settings', [])
		.controller('HeriotWattPrimosearchSettingsCtrl',HeriotWattPrimosearchSettingsCtrl);

	function HeriotWattPrimosearchSettingsCtrl($scope){
		var settingsObj = $scope.modal.app.tenantSettings;

		if(typeof settingsObj.baseUrl === 'undefined'){
			settingsObj.baseUrl = "http://discovery.hw.ac.uk/primo-explore/search";
		}
	}

})();