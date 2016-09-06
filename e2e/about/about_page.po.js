/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

(function(){
  'use strict';
  var main_page = require('../main/main.po.js');

  var AboutPage = function() {

    //clicks the pfumu link
    this.clickPfumu = function(){
      element(by.cssContainingText('h4 a','pfumu')).click();
    };
    //clicks the here link
    this.clickSourcecodeLink = function(){
      element(by.cssContainingText('h4 a','here')).click();
    };
    //tests link to home Page
    this.clickScrumBoardWtvBrandname = function(){
      element(by.cssContainingText('.navbar-brand','scrum-board-es5-app')).click();
      return main_page;
    };

  };

  module.exports = new AboutPage();
})();
