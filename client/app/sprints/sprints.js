'use strict';

angular.module('scrumBoardEs5AppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sprints', {
        url: '/sprints',
        templateUrl: 'app/sprints/sprints.html',
        controller: 'SprintsCtrl'
      });
  });