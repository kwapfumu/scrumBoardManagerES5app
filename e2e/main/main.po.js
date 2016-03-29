/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */
(function(){
  'use strict';
  var about_page = require('../about/about_page.po.js');
  var releaseBacklog_page = require('../releaseBacklog/releaseBacklog_page.po.js');
  var signup_page = require('../signup/signup_page.po.js');
  var login_page = require('../login/login_page.po.js');
  var MainPage = function() {
    this.heroEl = element(by.css('.hero-unit'));
    this.h1El = this.heroEl.element(by.css('h1'));
    this.imgEl = this.heroEl.element(by.css('img'));

    this.clickAbout = function(){
      element(by.linkText('About')).click();
      return about_page;
    };

    this.clickReleaseBacklog = function(){
      element(by.linkText('release Backlog')).click();
      return releaseBacklog_page;
    };

    this.clickSignup = function(){
      element(by.cssContainingText('.navbar-right li a','Sign up')).click();
      return signup_page;
    };

    this.clickLogin = function(){
      element(by.cssContainingText('.navbar-right li a','Login')).click();
      return login_page;
    };
  };

  module.exports = new MainPage();
})();
