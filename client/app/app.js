'use strict';

angular.module('scrumBoardEs5AppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'pascalprecht.translate'
])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $translateProvider) {
  $urlRouterProvider
  .otherwise('/');

  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push('authInterceptor');
  // add translation table
  /*$translateProvider.translations('fr', translations).preferredLanguage('en');*/
})

.factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
  return {
    // Add authorization token to headers
    request: function (config) {
      config.headers = config.headers || {};
      if ($cookieStore.get('token')) {
        config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError: function(response) {
      if(response.status === 401) {
        $location.path('/login');
        // remove any stale tokens
        $cookieStore.remove('token');
        return $q.reject(response);
      }
      else {
        return $q.reject(response);
      }
    }
  };
})

.run(function ($rootScope, $location, $translate, Auth) {
  // Redirect to login if route requires auth and you're not logged in
  $rootScope.$on('$stateChangeStart', function (event, next) {
    Auth.isLoggedInAsync(function(loggedIn) {
      if (next.authenticate && !loggedIn) {
        event.preventDefault();
        $location.path('/login');
      }
    });
  });
  //languages stuff
  //applies the active class conditionally to the toggle buttons
  $rootScope.languagePreference = {currentLanguage:'en'};
  $rootScope.languagePreference.switchLanguage=function(key){
    //takes a key and loads the translations written against it
    $translate.use(key);
    $rootScope.languagePreference.currentLanguage = key;
  };
});
