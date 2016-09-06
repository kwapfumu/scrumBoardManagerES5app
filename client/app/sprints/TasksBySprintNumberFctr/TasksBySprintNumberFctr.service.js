(function(){
  'use strict';

  angular.module('scrumBoardEs5AppApp')
  .factory('TasksBySprintNumberFctr', TasksBySprintNumberFctr);

  function TasksBySprintNumberFctr() {
    var tasksBySprintNumber = [
      {
        taskName:'task 01',
        taskDescription:'pfffffff',
        storyPoints:1,
        developer:'pfumu',
        sprintInfo:{sprintNumber:1, startDate:Date.now, endDate:Date.now},
        state:'todo'
      },
      {
        taskName:'task 02',
        taskDescription:'pfffffff',
        storyPoints:2,
        developer:'pfumu',
        sprintInfo:{sprintNumber:2, startDate:Date.now, endDate:Date.now},
        state:'todo'
      },
      {
        taskName:'task 03',
        taskDescription:'pfffffff',
        storyPoints:6,
        developer:'pfumu',
        sprintInfo:{sprintNumber:3, startDate:Date.now, endDate:Date.now},
        state:'todo'
      },
      {
        taskName:'task 04',
        taskDescription:'pfffffff',
        storyPoints:1,
        developer:'pfumu',
        sprintInfo:{sprintNumber:1, startDate:Date.now, endDate:Date.now},
        state:'todo'
      },
      {
        taskName:'task 05',
        taskDescription:'pfffffff',
        storyPoints:5,
        developer:'pfumu',
        sprintInfo:{sprintNumber:3, startDate:Date.now, endDate:Date.now},
        state:'todo'
      }];
    return {//TODO pass in sprintNumber as a parameter
      getTasksBySprintNumber: function getTasksBySprintNumber() {
        return tasksBySprintNumber;
      }
    };
  }

})();
