(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
  .config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      abstract:true,
      templateUrl: 'app/admin/admin.html',
      controller: 'AdminCtrl'
    })
    .state('admin.releaseBacklog',{
      url:'/tasks',
      controller:'ReleaseBacklogCtrl',
      templateUrl:'app/releaseBacklog/backlogPanelDrv/backlogPanelDrv.html'
    })
    .state('admin.viewAllUsers',{
      url:'',
      controller: 'AdminCtrl',
      templateUrl:'app/admin/partialViews/adminUsers.html'
    })
    .state('admin.addTask',{
      url:'/tasks/new',
      controller: 'AdminAddTaskCtrl',
      templateUrl:'app/admin/createTaskFormDrv/createTaskFormDrv.html'
    })
    .state('admin.aTask',{
      url:'/tasks/:id',
      controller: 'TaskDetailsCtrl',
      templateUrl:'app/releaseBacklog/taskDetailsDrv/taskDetailsDrv.html'
    })
    .state('admin.editTask',{
      url:'/tasks/:id/edit',
      controller:'AdminEditTaskCtrl',
      templateUrl:'app/admin/editTaskFormDrv/editTaskFormDrv.html'
    })
    .state('admin.deleteTask',{
      url:'/tasks/:id/delete',
      controller:'AdminDeleteTaskCtrl',
      templateUrl:'app/adminUpdateDirective/adminUpdateDirective.html'
    })
    .state('admin.sprints',{
      url:'/sprints',
      controller: 'SprintsCtrl',
      templateUrl:'app/sprints/sprints.html'
    })
    .state('admin.sprints.aSprint',{
      url:'/sprints/:sprintNumber',
      controller: 'SprintsCtrl',
      templateUrl:'app/sprints/sprintPanelDrv/sprintPanelDrv.html'
    })
    .state('admin.currentSprint',{
      url:'/currentSprint',
      controller: 'SprintsCtrl',
      templateUrl:'app/sprints/currentSprintDrv/currentSprintDrv.html'
    });
  }]);

})();
