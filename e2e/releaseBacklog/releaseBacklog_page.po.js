/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

(function(){
  'use strict';

  var ReleaseBacklogPage = function() {
    var textTosearchBy;

    //inserts search text
    this.enterSearchText = function(textTosearchBy){
      element(by.model('searchText')).sendKeys(textTosearchBy);
    };
    //clicks the search buttonText
    this.clickSearchButton = function(){
      element(by.buttonText('Go!')).click();
    };
    //clicks the ReleaseBacklog sde navigation link
    this.clickReleaseBacklogSideLink = function(){
      element(by.linkText('ReleaseBacklog')).click();
    };
    //clicks the Sprints sde navigation link
    this.clickSprintsSideLink = function(){
      element(by.linkText('Sprints')).click();
    };
    //clicks the Current sprint sde navigation link
    this.clickCurrentSprintSideLink = function(){
      element(by.linkText('Current sprint')).click();
    };
    //clicks the myTasks side navigation link
    this.clickMyTasksSideLink = function(){
      element(by.linkText('My tasks')).click();
    };
    //clicks the About link
    this.clickAboutNavbarLink = function(){
      element.all(by.repeater('item in menu')).then(function(menu){
        var aboutNavbarLink = menu[0].element(by.cssContainingText('a', 'About'));
        aboutNavbarLink.click();
      });    
    };
    //clicks the Release Backlog link
    this.clickReleaseBacklogNavbarLink = function(){
      element(by.linkText('Release Backlog')).click();
    };
  };

  module.exports = new ReleaseBacklogPage();
})();
