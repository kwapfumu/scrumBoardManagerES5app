(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
  .controller('AdminDeleteTaskCtrl', AdminDeleteTaskCtrl);
  AdminDeleteTaskCtrl.$inject = ['$scope', '$state', '$stateParams', 'TasksFctr'];

  function AdminDeleteTaskCtrl($scope, $state, $stateParams, TasksFctr) {
    //instantiates a Resource Instance
    $scope.taskResrcInstance = new TasksFctr();
    $scope.deleteTask = function(){
      $scope.taskResrcInstance.get({id:$stateParams.id}, function(task2delete){
        $scope.taskResrcInstance.task2beDeleted = task2delete;
        $scope.taskResrcInstance.$remove(function(){
          $state.go('admin.releaseBacklog');
        });
      });
    };
  }
})();
