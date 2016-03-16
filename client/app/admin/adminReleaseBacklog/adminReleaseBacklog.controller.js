(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .controller('AdminReleaseBacklogCtrl', AdminReleaseBacklogCtrl);

    AdminReleaseBacklogCtrl.$inject = ['$scope', '$http', '$state', 'Auth', '$stateParams', 'TasksFctr'];

    function AdminReleaseBacklogCtrl($scope, $http, $state, $stateParams, Auth, TasksFctr) {
      $scope.isAdmin = Auth.isAdmin;
      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.getCurrentUser = Auth.getCurrentUser;

  		// Find a list of Tasks
  		//$scope.tasks = TasksFctr.query();
      $scope.listTasks = function () {
        $http.get('/admin/tasks').success(function (data) {
          console.log(data);
          $scope.tasks = data;
        });
      };

      $scope.listTasks();

      //checks if a task was created by the current user
      $scope.isTaskIadded = function(task){
        return Auth.isLoggedIn() && task.user && task.user._id === Auth.getCurrentUser()._id;
      };

      /*$scope.isActive = function(route) {
        return route === $location.path();
      };*/
  	}
})();
