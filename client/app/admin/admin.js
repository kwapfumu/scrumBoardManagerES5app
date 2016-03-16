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
      controller: 'AdminReleaseBacklogCtrl',
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
      controller: 'PostDetailsCtrl',
      templateUrl:'app/releaseBacklog/taskDrv/taskDrv.html'
    })
    .state('admin.editTask',{
      url:'/tasks/:id/edit',
      controller: 'AdminUpdatePostCtrl',
      templateUrl:'app/admin/adminUpdatePostDrv/adminUpdatePostDrv.html'
    })
    .state('admin.deleteTask',{
      url:'/tasks/:id/delete',
      controller: 'AdminDeletePostCtrl',
      templateUrl:'app/adminUpdateDirective/adminUpdateDirective.html'
    })
    .state('admin.sprints',{
      url:'/sprints',
      controller: 'SprintsCtrl',
      templateUrl:'app/sprints/sprints.html'
    })
    .state('admin.currentSprint',{
      url:'/currentSprint',
      templateUrl:'app/sprints/sprintPanelDrv/sprintPanelDrv.html'
    });
  }]);
  
})();
