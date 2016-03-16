'use strict';

angular.module('scrumBoardEs5AppApp')
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('releaseBacklog', {
      url: '/releaseBacklog',
      abstract:true,
      templateUrl: 'app/releaseBacklog/releaseBacklog.html',
      controller: 'ReleaseBacklogCtrl'
    })
    .state('releaseBacklog.thisReleaseBacklog', {
      url: '',
      templateUrl: 'app/releaseBacklog/backlogPanelDrv/backlogPanelDrv.html',
      controller: 'ReleaseBacklogCtrl'
    })
    .state('releaseBacklog.myTasks', {
      url: '/myTasks',
      templateUrl: 'app/releaseBacklog/myTasksDrv/myTasksDrv.html',
      controller: 'ReleaseBacklogCtrl'
    })
    .state('releaseBacklog.sprints',{
      url:'/sprints',
      controller: 'SprintsCtrl',
      templateUrl:'app/sprints/sprints.html'
    })
    .state('releaseBacklog.currentSprint',{
      url:'/currentSprint',
      templateUrl:'app/sprints/sprintPanelDrv/sprintPanelDrv.html'
    });
}]);
