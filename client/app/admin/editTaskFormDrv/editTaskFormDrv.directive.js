(function(){
  'use strict';
  /**
    @name editTaskFormDrv
    @desc directive that show the edit taskForm, inherits states and cancel from
    AdminCtrl
  */
  angular.module('scrumBoardEs5AppApp')
    .directive('editTaskFormDrv', editTaskFormDrvFx);

    function editTaskFormDrvFx() {
      return {
        templateUrl: 'app/admin/editTaskFormDrv/editTaskFormDrv.html',
        restrict: 'EA',
        scope:{
          states:'@',
          cancel:'&'
        },
        link: function (scope, element, attrs) {
          //set event listeners on click of Update and cancel(not sure if necessary)
        }
      };
    }
})();
