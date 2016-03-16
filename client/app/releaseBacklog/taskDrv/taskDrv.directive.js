'use strict';

angular.module('scrumBoardEs5AppApp')
.directive('taskDrv', taskDrvFx);
function taskDrvFx() {
  return {
    restrict: 'EA',
    replace: true,
    transclude: 'element',
    templateUrl: 'app/releaseBacklog/taskDrv/taskDrv.html',
    link: function (scope, element, attrs) {
    }
  };
}
