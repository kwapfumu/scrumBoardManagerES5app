(function(){
  'use strict';
  /**
    @name SprintsCtrl
    @desc controller handling the loading of tasks in SprintsPanel and
    toggling the view of tasks view/sprintPanel
  */
  angular.module('scrumBoardEs5AppApp')
  .controller('SprintsCtrl', SprintsCtrl);
  SprintsCtrl.$inject = ['$scope','$state', '$stateParams', 'Auth', 'SprintNumberFctr', 'TasksBySprintNumberFctr'];

  function SprintsCtrl($scope, $state, $stateParams, Auth, SprintNumberFctr, TasksBySprintNumberFctr) {
    var sprintsVm = this;
    sprintsVm.isLoggedIn = Auth.isLoggedIn;
    //gets sprintsData
    sprintsVm.sprints = SprintNumberFctr.getSprints();
    //gets sprintNumber from stateParams
    sprintsVm.aSprintNumber = $stateParams.sprintNumber;
    //sprintPanel invisible by default i.e. you click on sprint number, sprintNumber
    sprintsVm.isSprintPanelVisible = false;
    //toggle show Sprint Panel
    sprintsVm.toggleContent = toggleContent;
    //returns an array of tasks by sprintNumber normally takes aSprintNumber as a parameter
    sprintsVm.loadSprintTasks = loadSprintTasks;


    //toggle show Sprint Panel
    function toggleContent(){
      sprintsVm.isSprintPanelVisible =!sprintsVm.isSprintPanelVisible;
      /*broadcasting to the child scopes that it has changed...*/
      $scope.$broadcast('changedIsSprintPanelVisible', sprintsVm.isSprintPanelVisible);
    }


    //returns the most updated sprints info
    /*function getSprintsInfo(){
    $setInterval(function () {
    $http.get('/sprints').success(function(sprintsInfo){
    sprintsVm.sprints = sprintsInfo;
    });
    }, 3000);
    }*/

     /*function loadCurrentSprintTasks(){
      //use sprints whis is already an array of tasks
      var allTasks = [];
      Object.assign(allTasks, sprintsVm.sprints);
      allTasks.filter(function(){
      return sprint.SprintInfo.start
    });

     }*/

    //returns an array of tasks by sprintNumber normally takes aSprintNumber as a parameter
    function loadSprintTasks(aSprintNumber){
      //emitting the click of a sprintnumber to SprintsCtrl
      $scope.$broadcast('clickedAsprintNumber', 'clicked a SprintNumber in table');
      //normally use TasksBySprintNumberFctr.query({sprintNumber:aSprintNumber})
      var tasksbySprintNumber = TasksBySprintNumberFctr.getTasksBySprintNumber();
      sprintsVm.tasksBySprint = tasksbySprintNumber;
      $state.go('admin.sprints.aSprint',{sprintNumber:aSprintNumber});
      //return tasksbySprintNumber;
      /*chose to use $http.get() instead of result from TasksBySprintNumberFctr koz a factory and service
      only gets called once at load time of controller and results are cached for future use... */
      /*$http.get('/sprints/:sprintNumber').success(function(data){
      sprintsVm.tasksBySprint = data;
      console.log(data);
      });*/
    }

    $scope.$on('clickedAsprintNumber', function(event, data){
      console.log('sprintsCtrl received ' + data);
      //stops the event propagation up...i only need it here...
      //event.stopPropagation()
      //broadcasting the click of a sprintnumber to SprintsCtrl
      //$scope.$broadcast('clickedAsprintNumber', 'clicked a SprintNumber in table');

    });


      //listening on the changing of .isSprintPanelVisible
      $scope.$on('changedIsSprintPanelVisible', function(event, data){
        console.log('sprintsCtrl received isSprintPanelVisible changed to ' + data);
        //stops the event propagation up...i only need it here...
        //event.stopPropagation()
        //broadcasting to the child scopes that it has changed...*/
        //$scope.$broadcast('changedIsSprintPanelVisible', data);
      });

      /*$scope.$watch('pagination.Page', function (newVal, oldVal) {
        $scope.$broadcast('changedIsSprintPanelVisible', sprintsVm.isSprintPanelVisible);
        //$scope.$broadcast('pageChanged', { page: newVal });
      });*/


  }

})();
