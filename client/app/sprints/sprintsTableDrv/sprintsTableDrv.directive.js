'use strict';

angular.module('scrumBoardEs5AppApp')
  .directive('sprintsTableDrv', sprintsTableDrvFx);
  
  function sprintsTableDrvFx() {
    return {
      templateUrl: 'app/sprints/sprintsTableDrv/sprintsTableDrv.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }
