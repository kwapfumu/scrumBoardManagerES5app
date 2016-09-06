(function(){
  'use strict';
  /**
    @name ReleaseBacklogCtrl
    @desc controller handling the loading of tasks in the backlog from the backend
  */
  angular.module('scrumBoardEs5AppApp')
  .controller('ReleaseBacklogCtrl', ReleaseBacklogCtrl);
  ReleaseBacklogCtrl.$inject = ['$scope', 'Auth', '$http','$stateParams', 'socket', '$interval', 'TasksFctr'];

  function ReleaseBacklogCtrl($scope, Auth, $http, $stateParams, socket, $interval, TasksFctr) {
    var releaseBacklogVm = this;
    releaseBacklogVm.isLoggedIn = Auth.isLoggedIn;
    releaseBacklogVm.getCurrentUser = Auth.getCurrentUser;

    //releaseBacklogVm.loadTasks = loadTasks;
    //releaseBacklogVm.getTasksUsingHttp = getTasksUsingHttp;
    //releaseBacklogVm.getTasksUsingTasksFctr = getTasksUsingTasksFctr;
    //releaseBacklogVm.endTasksPulling = endTasksPulling;

    /*function loadTasks(){
      $interval(function(){
        $http.get('/admin/tasks', {cache:false}).success(function(data){
          console.log(data);
          releaseBacklogVm.tasks = data;
        });
      }, 3000);
    }
    //loadTasks();
    $scope.$on('$destroy', function(){
      if(angular.isDefined(releaseBacklogVm.loadTasks)){
        $interval.cancel(releaseBacklogVm.loadTasks);
        releaseBacklogVm.loadTasks = undefined;
      }
    });*/

    function getTasksUsingTasksFctr(){
      TasksFctr.query(function(response){
        console.log(response);
        angular.forEach(response, function(item){
          if(item.numFound > 0){
            for(var i=0;i < item.numFound;i++){
              releaseBacklogVm.tasks[i] = item.docs[i];
            }
          }
        });

      });
      return releaseBacklogVm.tasks;
    }

    // Find a list of Tasks
    /*function getTasksUsingHttp() {
      $http.get('/admin/tasks', {cache:false}).then(function (response) {
        console.log(response);//if log response i get a html template
        releaseBacklogVm.tasks = response.data;
        socket.syncUpdates('task', releaseBacklogVm.tasks);
      });
    }*/

    releaseBacklogVm.tasks = TasksFctr.query(function(response){
      console.log(response);
      angular.forEach(response,function(item){
        if(item._id){
          releaseBacklogVm.items.push(item._id);
        }
      });
    });

    /* dummy tasks used for testing
    releaseBacklogVm.tasks = [
      {
        '_id':'573af467e98ee3f12bbe752a',
        'projectName':'Test Project',
        'taskName':'task 01',
        'taskDescription':'pfffffff',
        'storyPoints':1,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':1, 'startDate':'2016-05-17T22:00:00.000Z', 'endDate':'2016-05-19T22:00:00.000Z'},
        'state':'todo'
      },
      {
        '_id':'573af467e98ee3f12bbe752b',
        'projectName':'Test Project',
        'taskName':'task 02',
        'taskDescription':'pfffffff',
        'storyPoints':2,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':2, 'startDate':'2016-05-17T22:00:00.000Z', 'endDate':'2016-05-20T22:00:00.000Z'},
        'state':'todo'
      },
      {
        '_id': '573af467e98ee3f12bbe7528',
        'projectName':'Test Project',
        'taskName':'task 03',
        'taskDescription':'pfffffff',
        'storyPoints':6,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':3, 'startDate':'2016-05-17T22:00:00.000Z', 'endDate':'2016-05-28T22:00:00.000Z'},
        'state':'todo'
      },
      {
        '_id': '573af467e98ee3f12bbe7529',
        'projectName':'Test Project',
        'taskName':'task 04',
        'taskDescription':'pfffffff',
        'storyPoints':1,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':1, 'startDate':'2016-05-17T22:00:00.000Z', 'endDate':'2016-05-25T22:00:00.000Z'},
        'state':'todo'
      },
      {
        '_id': '573af467e98ee3f12bbe752c',
        'projectName':'Test Project',
        'taskName':'task 05',
        'taskDescription':'pfffffff',
        'storyPoints':5,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':3, 'startDate':'2016-05-17T22:00:00.000Z', 'endDate':'2016-05-23T22:00:00.000Z'},
        'state':'todo'
      }
    ];*/


  }

})();
