(function(){
  'use strict';
  /**
    @name sprintsTableDrv
  */
  angular.module('scrumBoardEs5AppApp')
  .directive('sprintsTableDrv', sprintsTableDrvFx);

  function sprintsTableDrvFx() {
    return {
      restrict: 'EA',
      templateUrl: 'app/sprints/sprintsTableDrv/sprintsTableDrv.html',
      scope:true,
      replace:true,
      link: function (scope, element, attrs) {
        //emitting the click of a sprintnumber to SprintsCtrl
        //scope.$emit('clickedAsprintNumber', 'clicked a SprintNumber in table');
        //listening on the click of a sprintnumber
        scope.$on('clickedAsprintNumber', function(event, data){
          console.log( 'sprintsTableDrv received ' + data);
        });
        //listening on the changing of .isSprintPanelVisible
        scope.$on('changedIsSprintPanelVisible', function(event, data){
          console.log('sprintsTableDrv received isSprintPanelVisible changed to ' + data);
        });
      }
    };
  }

})();
