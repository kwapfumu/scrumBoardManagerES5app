(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
  .controller('AdminEditTaskCtrl', AdminEditTaskCtrl);

  AdminEditTaskCtrl.$inject = ['$scope','$state', '$stateParams', 'TasksFctr', 'SaveOrEditButtonTextFctr'];

  function AdminEditTaskCtrl($scope, $state, $stateParams, TasksFctr, SaveOrEditButtonTextFctr) {
    var adminEditTaskVm = this;
    //instantiate an empty task object
    adminEditTaskVm.taskResrcInstance = new TasksFctr();
    //fills in the Update button text
    adminEditTaskVm.taskFormButtonText = SaveOrEditButtonTextFctr.getUpdateButtonText();
    //saves edited task
    adminEditTaskVm.savEditedTask = savEditedTask;

    function loadsTask2Edit(){
      TasksFctr.get({id:$stateParams.id}, function(task2Edit){
        adminEditTaskVm.task = task2Edit;
      });
    }

    //loads the task from the backend
    adminEditTaskVm.task = loadsTask2Edit();

    //saves edited task
    function savEditedTask(editedTask){
      adminEditTaskVm.taskResrcInstance.data = editedTask;
      adminEditTaskVm.taskResrcInstance.$update(function(){
        //redirects to releaseBacklog
        $state.go('admin.releaseBacklog');
      });
    }

  }
})();
