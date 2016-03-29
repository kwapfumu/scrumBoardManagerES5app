/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */
(function(){
  'use strict';
  var email;
  var passwd;
  var main_page = require('../main/main.po.js');
  var signup_page = require('../signup/signup_page.po.js');
  var LoginPage = function() {
    //inserts email
    this.enterEmail = function(email){
      element(by.model('user.email')).sendKeys(email);
    };
    //inserts email
    this.getEnteredEmail = function(email){
      enterEmail(email);
      return element(by.model('user.email')).getText();
    };
    //inserts passwd
    this.enterPassword = function(passwd){
      element(by.model('user.password')).sendKeys(passwd);
    };
    //click Login button
    this.clickLoginButton = function(){
      element(by.buttonText('Login')).click();
      return main_page;
    };
    //click Register button
    this.clickRegisterButton = function(){
      element(by.cssContainingText('.btn-register','Register')).click();
      return signup_page;
    };
  };

  module.exports = new LoginPage();
})();
