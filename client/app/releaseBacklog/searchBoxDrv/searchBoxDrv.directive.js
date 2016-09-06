(function(){
  'use strict';
  /**
    @name searchBoxDrv
    @desc searchBox directive inheriting from
  */
  angular.module('scrumBoardEs5AppApp')
    .directive('searchBoxDrv', searchBoxDrvFx);

    function searchBoxDrvFx() {
      return {
        restrict: 'EA',
        scope:true,
        templateUrl: 'app/releaseBacklog/searchBoxDrv/searchBoxDrv.html',
        link: function (scope, element, attrs) {
        }
      };
    }

})();
