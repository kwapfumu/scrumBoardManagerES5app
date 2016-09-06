(function(){
  'use strict';
  /**
    @name adminReleasebacklogHeaderDrv
    @desc directive that contains the releaseBacklog header with addTask link
  */
  angular.module('scrumBoardEs5AppApp')
    .directive('adminReleasebacklogHeaderDrv', adminReleasebacklogHeaderDrvFx);

    function adminReleasebacklogHeaderDrvFx() {
      return {
        restrict: 'EA',
        scope:true,
        templateUrl: 'app/admin/adminReleasebacklogHeaderDrv/adminReleasebacklogHeaderDrv.html',
        link: function (scope, element, attrs) {
          //emit to releaseBacklogCtrl that clicked listTasks and addTasks
          scope.$emit('clicked listTasks', 'admin clicked listTasks!');

          scope.$emit('clicked addTasks', 'admin clicked addTasks!');
        }
      };
    }

})();
