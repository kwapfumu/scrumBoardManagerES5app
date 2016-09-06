(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .controller('NavbarCtrl', NavbarCtrl);

    NavbarCtrl.$inject = ['$scope', '$location', 'Auth', '$translate'];

    function NavbarCtrl($scope, $location, Auth, $translate) {
      var navbarVm = this;
      navbarVm.menu = [
        {
        'title': 'About',
        'link': '/about'
      },
      {
        'title': 'Gikona',
        'link': '/gikonawtv'
      }
    ];

      navbarVm.isCollapsed = true;
      navbarVm.isLoggedIn = Auth.isLoggedIn;
      navbarVm.isAdmin = Auth.isAdmin;
      navbarVm.getCurrentUser = Auth.getCurrentUser;

      navbarVm.logout = function() {
        Auth.logout();
        $location.path('/login');
      };

      navbarVm.isActive = function(route) {
        return route === $location.path();
      };

      // expose translation via `$translate` service
  $translate('About').then(function (headline) {
    $scope.headline = headline;
  });
  $translate('Settings').then(function (paragraph) {
    $scope.paragraph = paragraph;
  });
  $translate(['About', 'Settings', 'Signup', 'Login']).then(function (translations) {
    navbarVm.About = translations.About;
    navbarVm.Settings = translations.Settings;
    navbarVm.Signup = translations.Signup;
    navbarVm.Login = translations.Login;
    navbarVm.namespaced_paragraph = translations['NAMESPACE.PARAGRAPH'];
  });

    }
})();
