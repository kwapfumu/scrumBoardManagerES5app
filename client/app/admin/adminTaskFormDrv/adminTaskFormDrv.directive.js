(function(){
  'use strict';
  /**
    @name adminTaskFormDrv
    @desc directive that contains the taskForm for either adding or editing a task
  */
  angular.module('scrumBoardEs5AppApp')
    .directive('adminTaskFormDrv', adminTaskFormDrvFx);

    function adminTaskFormDrvFx() {
      return {
        restrict: 'EA',
        templateUrl: 'app/admin/adminTaskFormDrv/adminTaskFormDrv.html',
        scope: true,
        link: function (scope, element, attrs) {
          //set event listeners on click of save and cancel(not sure if necessary)

        }
      };
    }

})();
