(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .factory('User', User);

    User.$inject = ['$resource'];

    function User($resource) {
      return $resource('/api/users/:id/:controller', { id: '@_id'},
      {
        changePassword: {
          method: 'PUT',
          params: { controller:'password'}
        },
        get: {
          method: 'GET',
          params: { id:'me'}
        }
  	  });
    }

})();
