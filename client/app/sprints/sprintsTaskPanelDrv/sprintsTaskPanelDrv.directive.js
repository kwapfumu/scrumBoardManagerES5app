'use strict';

angular.module('scrumBoardEs5AppApp')
.directive('sprintsTaskPanelDrv', sprintsTaskPanelDrvFx);

function sprintsTaskPanelDrvFx() {
  return {
    templateUrl: 'app/sprints/sprintsTaskPanelDrv/sprintsTaskPanelDrv.html',
    restrict: 'EA',
    transclude:true,
    link: function (scope, element, attrs) {
    }
  };
}
