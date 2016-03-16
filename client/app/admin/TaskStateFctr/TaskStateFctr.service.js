(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
      .factory('TaskStateFctr', TaskStateFctr);
    TaskStateFctr.$inject = [];

    function TaskStateFctr() {
      //slect state options
  		return {
        getStates: function(){
          var states = [
      			{name:'todo'},
      			{name:'inProgress'},
            {name:'done'}
      		];
          return states;
        }
      };
    }
})();
