(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .controller('CreateSprintCtrl', CreateSprintCtrl);

    CreateSprintCtrl.$inject = ['$scope'];
    
    function CreateSprintCtrl($scope) {
      $scope.message = 'Hello';
    }
})();
