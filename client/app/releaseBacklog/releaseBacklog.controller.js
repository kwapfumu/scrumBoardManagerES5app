'use strict';

angular.module('scrumBoardEs5AppApp')
  .controller('ReleaseBacklogCtrl', ReleaseBacklogCtrl);
    ReleaseBacklogCtrl.$inject = ['$scope', 'Auth', '$stateParams', 'TasksFctr'];

  	function ReleaseBacklogCtrl($scope, $stateParams, Auth, TasksFctr) {
      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.getCurrentUser = Auth.getCurrentUser;

  		// Find a list of Tasks
      /*$interval(function(){},3000);*/
  		//$scope.tasks = TasksFctr.query();

  	}
