(function(){
  'use strict';
  /**
    @name SprintNumberFctr
    @desc 
  */
  angular.module('scrumBoardEs5AppApp')
  .factory('SprintNumberFctr', SprintNumberFctr);

  SprintNumberFctr.$inject = [];

  function SprintNumberFctr() {
    //dummy sprintNumbers
    //TODO: get sprintNumbers from MongoDB...(:D fun aggregation stuff...)
    var sprintsNumbers = [1,2,3,4];
    var sprints = [
      {sprintNumber:1, startDate:Date.now(), endDate:Date.now()},
      {sprintNumber:2, startDate:Date.now(), endDate:Date.now()},
      {sprintNumber:3, startDate:Date.now(), endDate:Date.now()}
    ];
    return {
      getSprintsNumbers: function getSprintsNumbers() {
        return sprintsNumbers;
      },
      getSprints: function getSprints() {
        return sprints;
      }
    };
  }

})();
