(function(){
  'use strict';

  describe('Testing Main Page', function() {
    var main_page;

    beforeEach(function() {
      browser.get('/');
      main_page = require('./main.po');
    });

    it('should include jumbotron with correct data', function() {
      expect(main_page.h1El.getText()).toBe('\'Allo, \'Allo!');
      expect(main_page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
      expect(main_page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
    });

    //clicks About link
    it('should click on About link and redirects to About page', function(){
      main_page.clickAbout();
    });
    //clicks Signup link
    it('should click on Signup link and redirects to login page', function(){
      main_page.clickSignup();
    });
    //clicks login link
    it('should click on login link and redirects to login page', function(){
      main_page.clickLogin();
    });
  });

})();
