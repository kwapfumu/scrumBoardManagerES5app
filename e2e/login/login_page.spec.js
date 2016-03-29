(function(){
  'use strict';

  describe('Testing Login Page', function() {
    var login_page;

    beforeEach(function() {
      browser.get('http://localhost:9000/login');
      login_page = require('./login_page.po');
    });

    it('should login a test user and test navbar links', function(){
      login_page.enterEmail('test@test.com');
      var touchedEmailInputField = element(by.model('user.email'));
      expect(touchedEmailInputField.getAttribute('value')).toEqual('test@test.com');
      login_page.enterPassword('test');
      var touchedPasswordInputField = element(by.model('user.password'));
      expect(touchedPasswordInputField.getAttribute('value')).toEqual('test');
      login_page.clickLoginButton();
      var releaseBacklogLink = element(by.linkText('Release Backlog'));
      expect(releaseBacklogLink.isDisplayed()).toBeTruthy();
      var logoutLink = element(by.linkText('Logout'));
      expect(logoutLink.isPresent()).toBeTruthy();
    });
    //clicks register button
    it('should click on register button and redirects to signup page', function(){
      login_page.clickRegisterButton();
      expect(browser.getLocationAbsUrl()).toContain('/signup');
    });
  });
})();
