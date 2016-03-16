(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
  .controller('AdminAssignSprintCtrl', AdminAssignSprintCtrl);
  AdminAssignSprintCtrl.$inject = ['$scope'];

  function AdminAssignSprintCtrl($scope) {
    // Update existing task
    this.update = function(updatedTask) {
      var task = updatedTask;

      task.$update(function() {}, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

  }
})();
