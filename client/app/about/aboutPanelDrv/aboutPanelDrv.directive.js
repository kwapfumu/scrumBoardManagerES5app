(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .directive('aboutPanelDrv', aboutPanelDrvFx);

    function aboutPanelDrvFx(){
      return {
        restrict: 'EA',
        templateUrl: 'app/about/aboutPanelDrv/aboutPanelDrv.html',
        link: function (scope, element, attrs) {
        }
      };
    }

})();
