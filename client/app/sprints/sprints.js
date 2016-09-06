(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('sprints', {
          url: '/sprints',
          abstract:true,
          templateUrl: 'app/sprints/sprints.html',
          controller: 'SprintsCtrl'
        })
        .state('sprints.aSprint', {
          url: '/sprints/:sprintNumber',
          templateUrl:'app/sprints/sprintPanelDrv/sprintPanelDrv.html',
          controller: 'SprintsCtrl'
        })
        .state('sprints.currentSprint',{
          url:'/sprints/currentSprint',
          controller: 'CurrentSprintCtrl',
          templateUrl:'app/sprints/sprintPanelDrv/sprintPanelDrv.html'
        });
    }]);
})();
