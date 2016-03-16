'use strict';

angular.module('scrumBoardEs5AppApp')
  .directive('sprintPanelDrv', sprintPanelDrvFx);
  function sprintPanelDrvFx() {
    return {
      templateUrl: 'app/sprints/sprintPanelDrv/sprintPanelDrv.html',
      restrict: 'EA',
      transclude:true,
      link: function (scope, element, attrs) {
        //sprintPanel invisible by default i.e. you click on sprint number  , sprintNumber
        scope.isSprintPanelVisible = false;

        scope.toggleContent = function(){
          scope.isSprintPanelVisible =!scope.isSprintPanelVisible;
        };
      }
    };
  }
