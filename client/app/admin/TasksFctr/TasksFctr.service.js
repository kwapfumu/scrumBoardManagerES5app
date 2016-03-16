(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .factory('TasksFctr', TasksFctr);

    TasksFctr.$inject = ['$resource'];

    function TasksFctr($resource) {    
      return $resource('/admin/tasks/:id', { id: '@_id' },
      {
        update: {
          method: 'PUT' // this method issues a PUT request
        }
      });
    }
})();
