/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

(function(){
  'use strict';

  var SprintsPage = function() {
        //clicks sprint 1
    this.clickSprintNumber1 = function(){
      element(by.linkText('1')).click();
    };
    //clicks sprint 2
    this.clickSprintNumber2 = function(){
      element(by.linkText('2')).click();
    };

  };

  module.exports = new SprintsPage();
})();
