(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .directive('assisgnSprintFormDrv', assisgnSprintFormDrvFx);

    function assisgnSprintFormDrvFx() {
      return {
        templateUrl: 'app/admin/assisgnSprintFormDrv/assisgnSprintFormDrv.html',
        restrict: 'EA',
        link: function (scope, element, attrs) {
        }
      };
    }
})();
