(function(){
  'use strict';

  describe('Testing About Page', function() {
    var about_page;

    beforeEach(function() {
      browser.get('http://localhost:9000/about');
      about_page = require('./about_page.po.js');
    });

    //tests pfumu link
    it('should click pfumu link and redirect to github account', function () {
      about_page.clickPfumu();
      expect(browser.getLocationAbsUrl()).toContain('/kwapfumu');
    });
    //tests link to source code
    it('should click source code link and redirect to github repo', function () {
      about_page.clickSourcecodeLink();
      expect(browser.getLocationAbsUrl()).toContain('/scrumBoardManagerES5app');
    });
    //testing navigation
    it('should redirect to home page if brandname is clicked',function () {
      about_page.clickScrumBoardWtvBrandname();
      expect(browser.getCurrentUrl()).toBe('http://localhost:9000');
    });
    it('should redirect to home page if an unknown url is provided',function () {
      browser.get('http://localhost:9000/releaseBacklog/bibu');
      expect(browser.getCurrentUrl()).toBe('http://localhost:9000');
    });
  });
})();
