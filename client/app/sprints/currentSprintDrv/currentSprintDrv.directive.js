(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .directive('currentSprintDrv', currentSprintDrvFx);

    function currentSprintDrvFx() {
      return {
        templateUrl: 'app/sprints/currentSprintDrv/currentSprintDrv.html',
        restrict: 'EA',
        scope:{},
        link: function (scope, element, attrs) {          
        }
      };
    }

})();
