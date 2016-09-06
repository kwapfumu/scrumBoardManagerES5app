(function(){
  'use strict';
  /**
    @name sprintsTaskPanelDrv
  */
  angular.module('scrumBoardEs5AppApp')
  .directive('sprintsTaskPanelDrv', sprintsTaskPanelDrvFx);

  function sprintsTaskPanelDrvFx() {
    return {
      restrict: 'EA',
      templateUrl: 'app/sprints/sprintsTaskPanelDrv/sprintsTaskPanelDrv.html',
      transclude:true,
      link: function (scope, element, attrs) {
      }
    };
  }

})();
