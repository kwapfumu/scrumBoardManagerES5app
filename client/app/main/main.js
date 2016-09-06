(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl'
        });
    }]);
    
})();
