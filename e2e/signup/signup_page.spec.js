(function(){
  'use strict';

  describe('Testing Signup Page', function() {
    var signup_page;

    beforeEach(function() {
      browser.get('http://localhost:9000/signup');
      signup_page = require('./signup_page.po');
    });

    it('should signup a user and redirect to releaseBacklog', function(){
      signup_page.enterName('bobo');
      var touchedNameInputField = element(by.model('user.name'));
      expect(touchedNameInputField.getAttribute('value')).toEqual('bobo');
      signup_page.enterEmail('bobo@marsupilami.com');
      var touchedEmailInputField = element(by.model('user.email'));
      expect(touchedEmailInputField.getAttribute('value')).toEqual('bobo@marsupilami.com');
      signup_page.enterPassword('bobo');
      var touchedPasswordInputField = element(by.model('user.password'));
      expect(touchedPasswordInputField.getAttribute('value')).toEqual('bobo');
      signup_page.clickSignup();
    });
    //clicks login button
    it('should click on login link and redirects to login page', function(){
      signup_page.clickLoginButton();
      expect(browser.getLocationAbsUrl()).toContain('/login');
    });
  });
})();
