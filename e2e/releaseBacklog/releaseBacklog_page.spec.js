(function(){
  'use strict';

  describe('Testing ReleaseBacklog Page', function() {
    var releaseBacklog_page;

    beforeEach(function() {
      browser.get('http://localhost:9000/releaseBacklog');
      releaseBacklog_page = require('./releaseBacklog_page.po.js');
    });
    //tests search box
    it('should test the search box', function(){
      releaseBacklog_page.enterSearchText('task 01');
      var touchedSearchInputField = element(by.model('searchText'));
      expect(touchedSearchInputField.getAttribute('value')).toEqual('task 01');
      releaseBacklog_page.clickSearchButton();
    });
    //tests side navigation
    it('should click ReleaseBacklog link', function () {
      releaseBacklog_page.clickReleaseBacklogSideLink();
      expect(browser.getLocationAbsUrl()).toContain('/releaseBacklog');
    });
    it('should click Sprints', function(){
      releaseBacklog_page.clickSprintsSideLink();
      expect(browser.getCurrentUrl()).toBe('http://localhost:9000/releaseBacklog/sprints');
    });
    it('should click Current sprint', function(){
      releaseBacklog_page.clickCurrentSprintSideLink();
      expect(browser.getLocationAbsUrl()).toContain('/currentSprint');
    });
    it('should click My tasks', function(){
      releaseBacklog_page.clickMyTasksSideLink();
      expect(browser.getLocationAbsUrl()).toContain('/myTasks');
    });
    //tests navigation
    it('should navigate to about page on click of the About link', function () {
      releaseBacklog_page.clickAboutNavbarLink();
      expect(browser.getLocationAbsUrl()).toContain('/about');
    });
    it('should navigate to Realease Backlog page on click of the Realease Backlog link', function () {
      releaseBacklog_page.clickReleaseBacklogNavbarLink();
      expect(browser.getLocationAbsUrl()).toContain('/releaseBacklog');
    });
    it('should redirect to home page if an unknown url is provided',function () {
      browser.get('http://localhost:9000/releaseBacklog/bibu');
      expect(browser.getCurrentUrl()).toBe('http://localhost:9000/');
    });
  });
})();
