(function () {
  'use strict';

  angular
    .module('app.cumbria.preferencemgr')
    .controller('CumbriaPreferencemgrCtrl', CumbriaPreferencemgrCtrl);



  function CumbriaPreferencemgrCtrl (CumbriaPreferencemgrService,MydayApp, toaster) {
    var vm = this;
    vm.message = "Loading 'My Preferences'";
    vm.saving = false;
    
    vm.updateUserMembership = function(group){
      CumbriaPreferencemgrService.updateUserMembership(group)
      .then(function(response){
        //Save was successful
        toaster.pop('success', "Saved", "Your preferences will take effect after logging off and on again from the Hub.");
      });
    }

    if (MydayApp.isInAnyRole(['TenantAdmin'])) {
      vm.tab = "";
      CumbriaPreferencemgrService.getWhitelist()
      .then(function(response){
        vm.whiteList = response;
        console.log(response);
      });

      vm.save = function(whiteList){
        vm.saving = true;
        CumbriaPreferencemgrService.saveWhitelist(whiteList).then(function(){
          vm.saving = false;
          console.log("Saved!");
        });
      }
    
      vm.setActiveTab = function(activeTab){
        vm.tab = activeTab;
      }

    }

    CumbriaPreferencemgrService.getCategories()
    .then(function(response){
      vm.categories = response;
      console.log("categories");
      console.log(response);

      
    });

    CumbriaPreferencemgrService.getUserGroups()
    .then(function(response){
      vm.userGroups = response;

      console.log("user groups");
      console.log(response);

      //Display the user tab onLoad
      vm.tab = '2';

    });

    vm.isUserInGroup = function (groupId){

      for (var i in vm.userGroups) {

        if (vm.userGroups[i].id == groupId && vm.userGroups[i].isMember == true) {
          return true;
        }
        
      }

    }

    vm.back = function (){
      history.back();
    }


  }



})();
