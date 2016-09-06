(function(){
  'use strict';
  /**
    @name createTaskFormDrv
    @desc directive that handles the creation of a task, inherits states and cancel
    scopes from AdminCtrl and handling events listeners on click of save and cancel
  */
  angular.module('scrumBoardEs5AppApp')
    .directive('createTaskFormDrv', createTaskFormDrvFx);

    function createTaskFormDrvFx() {
      return {
        templateUrl: 'app/admin/createTaskFormDrv/createTaskFormDrv.html',
        restrict: 'EA',
        scope:{
          states:'@',
          cancel:'&'
        },
        link: function (scope, element, attrs) {
          //set event listeners on click of save and cancel(not sure if necessary)
        }
      };
    }
})();
