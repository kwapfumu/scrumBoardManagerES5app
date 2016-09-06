(function(){
  'use strict';
  /**
    @name CurrentSprintCtrl
    @desc Controller handling the current sprint view according to todayzDate
  */
  angular.module('scrumBoardEs5AppApp')
  .controller('CurrentSprintCtrl', CurrentSprintCtrl);

  CurrentSprintCtrl.$inject = ['$scope', '$state', '$stateParams', 'Auth', 'TasksFctr'];

  function CurrentSprintCtrl($scope, $state, $stateParams, Auth, TasksFctr) {
    var currentSprintVm = this;
    currentSprintVm.isLoggedIn = Auth.isLoggedIn;
    //sprintPanel visible by default i.e. you click on sprint number, sprintNumber
    currentSprintVm.isSprintPanelVisible = true;
    //gets an array of all tasks from the server
    currentSprintVm.sprints = TasksFctr.query();
    //currentSprint tasks
    currentSprintVm.tasksBySprint = getCurrentSprintTasks;
    //currentSprintInfo i.e. startDate and endDate
    currentSprintVm.startDate = currentSprintVm.tasksBySprint[0].sprintInfo.startDate;
    currentSprintVm.endDate = currentSprintVm.tasksBySprint[0].sprintInfo.endDate;

    function getCurrentSprintTasks(){
      var toDaysDate = Date.now();
          var arrayOfTasks = [];
          Object.assign(arrayOfTasks, currentSprintVm.sprints);
          arrayOfTasks.filter(function(task){
            return task.sprintInfo.startDate >= toDaysDate && task.sprintInfo.endDate <= toDaysDate;
          });
    }
  }
})();
