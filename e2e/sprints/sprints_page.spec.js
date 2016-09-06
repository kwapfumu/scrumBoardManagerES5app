(function(){
  'use strict';

  describe('Testing Sprints Page', function() {
    var sprints_page;

    beforeEach(function() {
      browser.get('http://localhost:9000/releaseBacklog/sprints');
       sprints_page = require('./sprints_page.po.js');
    });

    //tests click sprint 1
    it('should click sprint 1 link', function () {
      sprints_page.clickSprintNumber1();
      expect(browser.getLocationAbsUrl()).toContain('/sprints/');
    });
    //tests click sprint 2
    it('should click sprint 2 link', function () {
      sprints_page.clickSprintNumber2();
      expect(browser.getLocationAbsUrl()).toContain('/sprints/');
    });






  });
})();
