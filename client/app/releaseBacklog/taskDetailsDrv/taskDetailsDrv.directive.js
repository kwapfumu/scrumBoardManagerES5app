(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .directive('taskDetailsDrv', taskDetailsDrvFx);

    function taskDetailsDrvFx() {
      return {
        restrict: 'EA',
        templateUrl: 'app/releaseBacklog/taskDetailsDrv/taskDetailsDrv.html',        
        link: function (scope, element, attrs) {
        }
      };
    }

})();
