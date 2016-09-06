(function(){
  'use strict';
  /**
    @name sprintPanelDrv
  */
  angular.module('scrumBoardEs5AppApp')
    .directive('sprintPanelDrv', sprintPanelDrvFx);

    function sprintPanelDrvFx() {
      return {
        restrict: 'EA',
        templateUrl: 'app/sprints/sprintPanelDrv/sprintPanelDrv.html',
        scope:true,
        transclude:true,
        link: function (scope, element, attrs) {
          /*at the click of sprintnumber in the table, isSprintPanelVisible is also changed,
          therefore we need to tell the child scopes that it has changed...*/
          scope.$on('changedIsSprintPanelVisible', function(event, data){
            console.log(' sprintPanel received isSprintPanel changed to ' + data);
          });

          /*function getSprintStartDate(){

          }*/
        }
      };
    }

})();
