(function(){
  'use strict';
  /**
    @name TasksFctr
    @desc factory returning all task related methods
  */
  angular.module('scrumBoardEs5AppApp')
  .factory('TasksFctr', TasksFctr);

  TasksFctr.$inject = ['$resource'];

  function TasksFctr($resource) {
    return $resource('/admin/tasks', {id:'@_id'},
    {
      get: {
        method: 'GET',
        params:{id:'@_id'}
      },
      save:{
        method:'POST',
        url:'/admin/tasks/new'
      },
      update: {
        method: 'PUT',
        params:{id:'@_id'},
        url:'/admin/tasks/:id/edit'
      }
    });
  }
})();
