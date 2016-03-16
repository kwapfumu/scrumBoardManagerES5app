(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
  .controller('AdminEditTaskCtrl', AdminEditTaskCtrl);

  AdminEditTaskCtrl.$inject = ['$scope','$state', '$stateParams', 'TaskStateFctr', 'TasksFctr'];

  function AdminEditTaskCtrl($scope, $state, $stateParams, TaskStateFctr, TasksFctr) {
    //dynamically loads the state options fron the factory
    $scope.states = TaskStateFctr.getStates();
    //instantiates a Resource Instance
    $scope.taskResrcInstance = new TasksFctr();
    //redirects to edit form with the right task id
    function showEditTaskForm(id){
      $state.go('admin.editTask',{id:id});
    }

    $scope.savEditedTask = function(editedTask){
      $scope.taskResrcInstance.editedTask = editedTask;
      $scope.taskResrcInstance.$update(function(){
        //redirects to releaseBacklog
        $state.go('admin.releaseBacklog');
      });
    };
    //handles the click on edit icon of taskPanelDrv.html
    $scope.editTask = $scope.taskResrcInstance.get({id:$stateParams.id}, function(task2edit){
      //redirects to editTaskForm
      showEditTaskForm(task2edit.id);
    });
  }
})();
