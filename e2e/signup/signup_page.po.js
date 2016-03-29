/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */
(function(){
  'use strict';
  var name= 'bobo';
  var email = 'bobo@marsupilami.com';
  var passwd = 'bobo';
  var login_page = require('../login/login_page.po.js');
  var releaseBacklog_page = require('../releaseBacklog/releaseBacklog_page.po.js');
  var SignupPage = function() {
    //inserts email
    this.enterName = function(name){
      element(by.model('user.name')).sendKeys(name);
    };
    //inserts email
    this.enterEmail = function(email){
      element(by.model('user.email')).sendKeys(email);
    };
    //inserts passwd
    this.enterPassword = function(passwd){
      element(by.model('user.password')).sendKeys(passwd);
    };
    //click Signup button
    this.clickSignup = function(){
      element(by.buttonText('Sign up')).click();
      return releaseBacklog_page;
    };
    //click Login button
    this.clickLoginButton = function(){
      element(by.cssContainingText('.btn-register','Login')).click();
      return login_page;
    };
    //click ConnectWithFacebook link
    this.clickConnectWithFacebook = function(){
      element(by.linkText('Connect with Facebook')).click();
      return facebook_page;
    };
    //click ConnectWithGoogle link
    this.clickConnectWithGoogle = function(){
      element(by.linkText('Connect with Google+')).click();
      return googlePlus_page;
    };
    //click ConnectWithTwitter link
    this.clickConnectwithTwitter = function(){
      element(by.linkText('Connect with Twitter')).click();
      return twitter_page;
    };
  };

  module.exports = new SignupPage();
})();
