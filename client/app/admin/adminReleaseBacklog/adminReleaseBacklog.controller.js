(function(){
  'use strict';
  /**
    @name AdminReleaseBacklogCtrl
    @desc top controller  with admin priviledges on the releaseBacklog
    in which tasks can be deleted and launches the editTaskForm
  */
  angular.module('scrumBoardEs5AppApp')
  .controller('AdminReleaseBacklogCtrl', AdminReleaseBacklogCtrl);

  AdminReleaseBacklogCtrl.$inject = ['$scope', '$state', '$http', 'Auth', 'TasksFctr', 'PopUpSrv', '$location'];

  function AdminReleaseBacklogCtrl($scope, $state, $http, Auth, TasksFctr, PopUpSrv, $location) {
    var adminReleaseBacklogVm = this;
    adminReleaseBacklogVm.isLoggedIn = Auth.isLoggedIn;
    adminReleaseBacklogVm.getCurrentUser = Auth.getCurrentUser;
    adminReleaseBacklogVm.isAdmin = Auth.isAdmin;
    //instantiate a TasksFctr Instance
    adminReleaseBacklogVm.taskResrcInstance = new TasksFctr();
    //checks if a task was created by the current user
    adminReleaseBacklogVm.isTaskIadded = isTaskIadded;
    //delete selected task in releaseBacklog view but not in db
    adminReleaseBacklogVm.deleteTask = deleteTask;
    //redirects to edit form with the right task id
    adminReleaseBacklogVm.showEditTaskForm = showEditTaskForm;

    adminReleaseBacklogVm.isActive = isActive;

    //checks if a task was created by the current user
    //@params {task}
    //@returns boolean
    function isTaskIadded(task){
      return Auth.isLoggedIn() && task.user && task.user._id === Auth.getCurrentUser()._id;
    }

    //delete selected task in releaseBacklog view but not in db
    //@params {task}
    //redirects to releaseBacklog view
    function deleteTask(task){
      // Ask for confirmation
      if (PopUpSrv.showPopup('Really delete' + task.taskName +'?')) {
        adminReleaseBacklogVm.taskResrcInstance.$remove({ id: task._id }, function(){
          angular.forEach(adminReleaseBacklogVm.tasks, function(v, i) {
            if (v === task) {
              adminReleaseBacklogVm.tasks.splice(i, 1);
            }
          });
          $state.go('admin.releaseBacklog', undefined,{reload:true});
        });
      }
    }

    //redirects to edit form with the right task id
    //@params {id} - a task id
    function showEditTaskForm(id){
      $state.go('admin.editTask',{id:id});
    }
    //checks if a route is active
    //@params {route}
    //@returns a boolean
    function isActive(route) {
      return route === $location.path();
    }
  }
})();
