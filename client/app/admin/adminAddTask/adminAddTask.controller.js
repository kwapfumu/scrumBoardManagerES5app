(function(){
  'use strict';
  /**
    @name AdminAddTaskCtrl
    @desc admin controller handling the creation of a task
  */
  angular.module('scrumBoardEs5AppApp')
  .controller('AdminAddTaskCtrl', AdminAddTaskCtrl);
  AdminAddTaskCtrl.$inject = ['$scope', '$state', 'TasksFctr','NotifyFctr', 'SaveOrEditButtonTextFctr'];

  function AdminAddTaskCtrl($scope, $state,TasksFctr, NotifyFctr, SaveOrEditButtonTextFctr) {
    var adminAddTaskVm = this;
    adminAddTaskVm.textPattern = new RegExp('^[a-z]');
    //dynamically loads the buttonText from the factory
    adminAddTaskVm.taskFormButtonText = SaveOrEditButtonTextFctr.getSaveButtonText();
    //fills in the save button text
    //adminAddTaskVm.taskFormButtonText = 'Save';
    //create an empty task object
    adminAddTaskVm.task = {};
    //closes the form
    adminAddTaskVm.ok = ok;
    //gets form validation error messages
    adminAddTaskVm.getError = getError;
    // Creates new task
    adminAddTaskVm.createTask = createTask;

    //closes the form and redirects to releaeBacklog View
    function ok(){
      if(adminTaskForm.$valid){
        $state.go('admin.releaseBacklog');
      }
    }

    //gets form validation error messages
    //@params {error}
    function getError(error) {
      if (angular.isDefined(error)) {
        if (error.required) {
          return 'Please enter a value';
        } else if (error.email) {
          return 'Please enter a valid email address';
        }
      }
    }

      // Creates new task
      //@params {newTask}
    function createTask(newTask) {
      //instantiate a resource class with the passed in task
      adminAddTaskVm.taskResrcInstance = new TasksFctr({
        projectName: newTask.projectName,
        taskName: newTask.taskName,
        taskDescription: newTask.taskDescription,
        storyPoints: newTask.storyPoints,
        developer: newTask.developer,
        backlogName: newTask.backlogName,
        state: newTask.state,
        sprintInfo: newTask.sprintInfo
      });

      //here taskResrcInstance is passed as json body
      adminAddTaskVm.taskResrcInstance.$save(function(response) {
        NotifyFctr.sendMsg('task',{'id':response._id});
        // Clear form fields
        adminAddTaskVm.task.projectName = '';
        adminAddTaskVm.task.taskName = '';
        adminAddTaskVm.task.taskDescription = '';
        adminAddTaskVm.task.storyPoints = '';
        adminAddTaskVm.task.developer = '';
        adminAddTaskVm.task.backlogName = '';
        adminAddTaskVm.task.state = '';
        adminAddTaskVm.task.sprintInfo = '';
      }, function(errorResponse) {
        adminAddTaskVm.error = errorResponse.data.message;
      });
    }

  }
})();
