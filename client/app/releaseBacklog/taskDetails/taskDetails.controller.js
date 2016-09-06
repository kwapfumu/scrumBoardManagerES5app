(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .controller('TaskDetailsCtrl', TaskDetailsCtrl);
    TaskDetailsCtrl.$inject = ['$scope', '$stateParams','TasksFctr'];

    function TaskDetailsCtrl($scope, $stateParams, TasksFctr) {
      var taskDetailsVm = this;
      taskDetailsVm.task = TasksFctr.get({id:$stateParams.id});
    }
})();
