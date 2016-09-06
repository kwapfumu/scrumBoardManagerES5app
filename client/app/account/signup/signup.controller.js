(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .controller('SignupCtrl', SignupCtrl);

    SignupCtrl.$inject = ['$scope', 'Auth', '$location', '$window'];

    function SignupCtrl($scope, Auth, $location, $window) {
      var signupVm = this;
      signupVm.user = {};
      signupVm.errors = {};
      signupVm.register = register;
      signupVm.loginOauth = loginOauth;

      function register(form) {
        signupVm.submitted = true;
        if(form.$valid) {
          Auth.createUser({
            name: signupVm.user.name,
            email: signupVm.user.email,
            password: signupVm.user.password
          })
          .then( function() {
            // Account created, redirect to home
            $location.path('/');
          })
          .catch( function(err) {
            err = err.data;
            signupVm.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              signupVm.errors[field] = error.message;
            });
          });
        }
      }

      function loginOauth(provider) {
        $window.location.href = '/auth/' + provider;
      }
    }

})();
