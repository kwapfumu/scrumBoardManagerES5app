(function(){
  'use strict';
  /**
    @name MyTasksCtrl
    @desc controller handling specific non-admin user tasks and operations
  */
  angular.module('scrumBoardEs5AppApp')
  .controller('MyTasksCtrl', MyTasksCtrl);
  MyTasksCtrl.$inject = ['$scope', 'Auth'];

  function MyTasksCtrl($scope, Auth) {
    var myTasksVm = this;
    myTasksVm.isLoggedIn = Auth.isLoggedIn;
    myTasksVm.getCurrentUser = Auth.getCurrentUser;
    //sprintPanel visible by default i.e. you click on sprint number, sprintNumber
    myTasksVm.isSprintPanelVisible = true;

  }
})();
