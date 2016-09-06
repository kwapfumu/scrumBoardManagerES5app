(function(){
  'use strict';

function AboutComponent($scope) {
  $scope.message = 'Hello';
}

angular.module('scrumBoardEs5AppApp')
  .component('about', {
    templateUrl: 'app/about/about.html',
    controller: AboutComponent
  });

})();
