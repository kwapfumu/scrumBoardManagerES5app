(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
    .service('PopUpSrv', PopUpSrv);

    PopUpSrv.$inject = ['$window'];

    function PopUpSrv($window) {
      this.showPopup = function(message){
        return $window.confirm(message);
      };
    }
})();
