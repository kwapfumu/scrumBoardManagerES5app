(function(){
  'use strict';
  /**
    @name NotifyFctr
    @desc 
  */
  angular.module('scrumBoardEs5AppApp')
  .factory('NotifyFctr', NotifyFctr);

  NotifyFctr.$inject = ['$rootScope'];

  function NotifyFctr($rootScope) {
    var notify = {};

    notify.sendMsg = function(msg, data) {
      data = data || {};
      $rootScope.$emit(msg, data);
      console.log('message sent!');
    };

    notify.getMsg = function(msg, func, scope){
      var unbind = $rootScope.$on(msg, func);
      if (scope){
        scope.$on('destroy', unbind);
      }
    };

    return notify;
  }

})();
