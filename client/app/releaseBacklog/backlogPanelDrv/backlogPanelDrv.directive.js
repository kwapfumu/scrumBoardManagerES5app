(function(){
  'use strict';
  /**
    @name backlogPanelDrv
    @desc directive for the backlog panel
    with $on listeners on click addtask and listTask events
  */
  angular.module('scrumBoardEs5AppApp')
  .directive('backlogPanelDrv', backlogPanelDrvFx);
  function backlogPanelDrvFx() {
    return {
      restrict: 'EA',
      templateUrl: 'app/releaseBacklog/backlogPanelDrv/backlogPanelDrv.html',
      link: function (scope, element, attrs) {
        //handling click event on addTask link
        scope.showAddTaskForm = function($state){
          $state.go('admin.addTask');
        };
        //emit to releaseBacklogCtrl that clicked listTasks and addTasks
        scope.$on('clicked listTasks', function(event, data){
          console.log('received clicked listTasks event');
          event.stopPropagation();
          //once data has arrived attach it to scope.Tasks
        });
        //not sure if necessary to listen to this one might be better to listen to save button click only
        scope.$on('clicked addTasks', function(event, data){
          console.log('received clicked addTasks event');
        });

        scope.$on('clicked save button of new Task page', function(event, data){
          console.log('received clicked saved button');
          //sync the newly added tasks to backlogpanel
        });


      }
    };
  }

})();
