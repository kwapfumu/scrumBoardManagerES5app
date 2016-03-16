(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .controller('AdminAddTaskCtrl', AdminAddTaskCtrl);
      AdminAddTaskCtrl.$inject = ['$scope', '$state', 'taskStateFctr', 'TasksFctr','NotifyFctr'];

      function AdminAddTaskCtrl($scope, $state, taskStateFctr, TasksFctr, NotifyFctr) {
        $scope.textPattern = new RegExp('^[a-z]');
        //dynamically loads the state options fron the factory
        $scope.states = taskStateFctr.getStates();
        //instantiate a resource class
        $scope.taskResrcInstance = new TasksFctr();
        //closes the form
        $scope.ok = function(){
          if(createTaskForm.$valid){
            $state.go('admin.releaseBacklog');
          }
        };
        //cancels the form and redirects to release backlog
        $scope.cancel = function(){
          $state.go('admin.releaseBacklog');
        };
        //gets form validation error messages
        $scope.getError = function (error) {
          if (angular.isDefined(error)) {
            if (error.required) {
              return 'Please enter a value';
            } else if (error.email) {
              return 'Please enter a valid email address';
            }
          }
        };
    		// Creates new task
    		$scope.createTask = function(newTask) {
    			// Create new Releasebacklog object/task
    			$scope.taskResrcInstance.addedTask = {
    				taskName: newTask.taskName,
    				taskDescription: newTask.taskDescription,
    				storyPoints: newTask.storyPoints,
    				developer: newTask.developer,
    				backlogName: newTask.backlogName,
    				state: newTask.state,
    				sprintInfo: newTask.sprintInfo
    			};

          //here taskResrcInstance is passed as json body
          $scope.taskResrcInstance.$save(function(response) {
            NotifyFctr.sendMsg('NewTask',{'id':response._id});
    				// Clear form fields
    				$scope.taskName = '';
    				$scope.taskDescription = '';
    				$scope.storyPoints = '';
    				$scope.developer = '';
    				$scope.backlogName = '';
    				$scope.state = '';
    				$scope.sprintInfo = '';
            //redirects when save successfull
            $state.go('admin.releaseBacklog');
    			},function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
      };
    }
})();
