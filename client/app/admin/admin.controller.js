(function(){
  'use strict';
  /**
    @name AdminCtrl
    @desc top Admin controller handling most of the admin tasks and priviledges i.e.
    deleting user, cancelling a form, tasks states
  */
  angular.module('scrumBoardEs5AppApp')
  .controller('AdminCtrl', AdminCtrl);

  AdminCtrl.$inject = ['$scope', '$state', '$http', 'Auth', 'User', 'TaskStateFctr', 'PopUpSrv'];

  function AdminCtrl($scope, $state, $http, Auth, User, TaskStateFctr, PopUpSrv) {
    var adminVm = this;
    // Use the User $resource to fetch all users
    adminVm.users = User.query();
    //deletes a user
    adminVm.deleteUser = deleteUser;
    //dynamically loads the state options fron the factory
    adminVm.states = TaskStateFctr.getStates();
    //cancels the form and redirects to release backlog
    adminVm.cancel = cancel;

    //deletes a user
    //@params {user}
    function deleteUser(user) {
      //TODO: makes sure even click of cancel doesn't delete user!!!
      PopUpSrv.showPopup('Are you sure you want to delete ' + user.name + '?');
      User.remove({ id: user._id });
      angular.forEach(adminVm.users, function(u, i) {
        if (u === user) {
          adminVm.users.splice(i, 1);
        }
      });
    }
    //cancels the form and redirects to release backlog
    function cancel(){
      $state.go('admin.releaseBacklog');
    }
  }
})();
