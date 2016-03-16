(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .directive('createTaskFormDrv', createTaskFormDrvFx);

    function createTaskFormDrvFx() {
      return {
        templateUrl: 'app/admin/createTaskFormDrv/createTaskFormDrv.html',
        restrict: 'EA',
        scope:{},
        link: function (scope, element, attrs) {
          //set event listeners on click of save and cancel(not sure if necessary)
        }
      };
    }
})();
