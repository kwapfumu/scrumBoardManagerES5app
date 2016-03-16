(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .directive('editTaskFormDrv', editTaskFormDrvFx);

    function editTaskFormDrvFx() {
      return {
        templateUrl: 'app/admin/editTaskFormDrv/editTaskFormDrv.html',
        restrict: 'EA',
        link: function (scope, element, attrs) {
        }
      };
    }    
})();
