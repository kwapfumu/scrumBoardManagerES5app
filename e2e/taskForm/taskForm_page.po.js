(function(){
  'use strict';
 var releaseBacklog_page = require('../releaseBacklog/releaseBacklog_page.po.js');
  var taskFormPage = function() {
    //inserts taskName
    this.insertTaskName = function(){
      element(by.model('task.taskName')).sendKeys('test task');
    };
    //inserts description
    this.insertTaskDescription = function(){
      element(by.model('task.taskDescription')).sendKeys('description');
    };
    //inserts storypoints
    this.insertStoryPoints = function(){
      element(by.model('task.storyPoints')).sendKeys(1);
    };
    //inserts developer
    this.insertDeveloper = function(){
      element(by.model('task.developer')).sendKeys('jewe');
    };
    //selects state
    this.selectState = function(){
      element(by.cssContainingText('option', 'todo')).click();
      //element(by.model('task.state')).$('[value="'+index+'"]').click();
    };
    //inserts sprintNumber
    this.insertSprintNumber = function(){
      element(by.model('task.sprintInfo.sprintNumber')).sendKeys('1');
    };
    //selects sprint Start date
    this.selectSprintStartDate = function(){
      element(by.model('task.sprintInfo.startDate')).sendKeys('03/04/2016');
    };
    //selects sprint End date
    this.selectSprintEndDate = function(){
      element(by.model('task.sprintInfo.endDate')).sendKeys('05/04/2016');
    };
    //clicks Save
    this.clickSave = function(){
      element(by.buttonText('Save')).click();
      return releaseBacklog_page;
    };
    //clicks Update
    this.clickUpdate = function(){
      element(by.buttonText('Update')).click();
      return releaseBacklog_page;
    };
    //clicks Cancel
    this.clickCancel = function(){
      element(by.buttonText('Cancel')).click();
      return releaseBacklog_page;
    };

  };

  module.exports = new taskFormPage();
})();
