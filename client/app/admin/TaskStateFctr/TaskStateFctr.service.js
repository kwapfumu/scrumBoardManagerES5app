(function(){
  'use strict';
  /**
    @name TaskStateFctr
    @desc service returning the different states of a task in ht backlog
  */
  angular.module('scrumBoardEs5AppApp')
      .factory('TaskStateFctr', TaskStateFctr);

    TaskStateFctr.$inject = [];

    function TaskStateFctr() {
      //creating states object/array
      var states = [
        {name:'todo'},
        {name:'inProgress'},
        {name:'done'}
      ];
      //return state options
  		return {
        getStates: function getStates(){
          return states;
        }
      };
    }
})();
