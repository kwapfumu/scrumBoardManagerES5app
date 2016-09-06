(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .controller('SettingsCtrl', SettingsCtrl);

    SettingsCtrl.$inject = ['$scope', 'User', 'Auth'];

    function SettingsCtrl($scope, User, Auth) {
      var settingsVm = this;
      settingsVm.errors = {};
      settingsVm.changePassword = changePassword;

      function changePassword(form) {
        settingsVm.submitted = true;
        if(form.$valid) {
          Auth.changePassword( settingsVm.user.oldPassword, settingsVm.user.newPassword )
          .then( function() {
            settingsVm.message = 'Password successfully changed.';
          })
          .catch( function() {
            form.password.$setValidity('mongoose', false);
            settingsVm.errors.other = 'Incorrect password';
            settingsVm.message = '';
          });
        }
  		}

    }

});
