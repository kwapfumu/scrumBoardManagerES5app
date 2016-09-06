(function(){
  'use strict';
  /**
    @name PopUpSrv
    @desc Service showing a popup to confirm the deletion of a user
  */
  angular.module('scrumBoardEs5AppApp')
    .service('PopUpSrv', PopUpSrv);

    PopUpSrv.$inject = ['$window'];

    function PopUpSrv($window) {
      this.showPopup = function(message){
        return $window.confirm(message);
      };
    }
    //Todo:still have to configure the cancel button so that when clicked it doesn't
    //delete user
})();
