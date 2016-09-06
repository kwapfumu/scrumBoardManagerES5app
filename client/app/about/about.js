(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html'
    });
    
  }]);

})();
