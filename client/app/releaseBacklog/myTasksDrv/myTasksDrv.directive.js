'use strict';

angular.module('scrumBoardEs5AppApp')
  .directive('myTasksDrv', function () {
    return {
      templateUrl: 'app/releaseBacklog/myTasksDrv/myTasksDrv.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });