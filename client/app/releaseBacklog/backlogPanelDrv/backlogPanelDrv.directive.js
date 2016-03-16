'use strict';

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
    }
  };
}
