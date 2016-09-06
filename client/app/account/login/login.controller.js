(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
  .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', 'Auth', '$location', '$window'];

  function LoginCtrl($scope, Auth, $location, $window) {
    var loginVm = this;
    loginVm.user = {};
    loginVm.errors = {};

    loginVm.login = login;
    loginVm.loginOauth = loginOauth;

    function login(form) {
      loginVm.submitted = true;
      if(form.$valid) {
        Auth.login({
          email: loginVm.user.email,
          password: loginVm.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          loginVm.errors.other = err.message;
        });
      }
    }

    function loginOauth(provider) {
      $window.location.href = '/auth/' + provider;
    }
  }

})();
