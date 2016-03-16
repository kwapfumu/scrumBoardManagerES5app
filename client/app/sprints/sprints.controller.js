'use strict';

angular.module('scrumBoardEs5AppApp')
  .controller('SprintsCtrl', SprintsCtrl);
    SprintsCtrl.$inject = ['$scope','$stateParams', '$http', 'Authentication', 'SprintnumberFctr'];

    function SprintsCtrl($scope, $stateParams, $http, Authentication, SprintnumberFctr) {
  		this.authentication = Authentication;

  		// Find an array of Tasks .query returns an array
  		this.tasks = SprintnumberFctr.query();
  		this.aSprintNumber = $stateParams.sprintNumber;

  		this.tasksBySprint = [];

  		$scope.loadSprinTasks = function(aSprintNumber){
  			$scope.tasksSprint = SprintnumberFctr.query({sprintNumber:aSprintNumber});
  			/*$http.get('/sprints/:sprintNumber').success(function(data){
          $scope.tasksBySprint = data;
        });*/
  		};
  	}
