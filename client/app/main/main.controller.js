(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .controller('MainCtrl', MainCtrl);
    MainCtrl.$inject = ['$scope', '$http', 'socket'];

    function MainCtrl($scope, $http, socket) {
      var mainVm = this;
      mainVm.awesomeThings = [];
      mainVm.addThing = addThing;
      mainVm.deleteThing = deleteThing;

      $http.get('/api/things').success(function(awesomeThings) {
        mainVm.awesomeThings = awesomeThings;
        socket.syncUpdates('thing', mainVm.awesomeThings);
      });

      function addThing() {
        if(mainVm.newThing === '') {
          return;
        }else{
          $http.post('/api/things', { name: mainVm.newThing });
          mainVm.newThing = '';
        }
      }

      function deleteThing(thing) {
        $http.delete('/api/things/' + thing._id);
      }

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('thing');
      });
    }

})();
