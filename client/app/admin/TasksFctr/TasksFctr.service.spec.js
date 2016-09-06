(function(){
  'use strict';

  describe('Service: TasksFctr', function () {
    // load the service's module
    beforeEach(module('scrumBoardEs5AppApp'));

    // instantiate service
    var TasksFctr, $httpBackend, getUrl, queryUrl, postUrl;
    beforeEach(inject(function (_TasksFctr_, $injector, $httpBackend) {
      TasksFctr = _TasksFctr_;
      //$httpBackend = $injector.get('$httpBackend');
      $httpBackend = $httpBackend;
      queryUrl = '/admin/tasks';
      getUrl = '/admin/tasks/:id';
      postUrl = '/admin/tasks/new';
      $httpBackend.when('GET', queryUrl).respond({data: [
        {
        '_id': '571f0645f79b55374df67811',
        'taskName':'task 01',
        'taskDescription':'pfffffff',
        'storyPoints':1,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':1, 'startDate':null, 'endDate':null},
        'state':'todo'
      },
      {
        '_id': '571f0645f79b55374df67810',
        'taskName':'task 02',
        'taskDescription':'pfffffff',
        'storyPoints':2,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':2, 'startDate':null, 'endDate':null},
        'state':'todo'
      },
      {'_id': '571f0645f79b55374df67812',
        'taskName':'task 03',
        'taskDescription':'pfffffff',
        'storyPoints':6,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':3, 'startDate':null, 'endDate':null},
        'state':'todo'
      },
      {
        '_id': '571f0645f79b55374df6780f',
        'taskName':'task 04',
        'taskDescription':'pfffffff',
        'storyPoints':1,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':1, 'startDate':null, 'endDate':null},
        'state':'todo'
      },
      {'_id':'571f0645f79b55374df67813',
        'taskName':'task 05',
        'taskDescription':'pfffffff',
        'storyPoints':5,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':3, 'startDate':null, 'endDate':null},
        'state':'todo'
      }]});

    /*Write an afterEach function calling the relevant methods to verify that all HTTP
    requests were made and there are none to be flushed:*/
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
    //testing if TasksFctr is accessible and exposes get()
    it('should be accessible and exposing  get method', function(){
      expect(TasksFctr.get()).toBeDefined();
    });
    //testing if TasksFctr is accessible and exposes query()
    it('should be accessible and exposing  query method', function(){
      expect(TasksFctr.query()).toBeDefined();
    });
    //testing if TasksFctr is accessible and exposes save()
    it('should be accessible and exposing  save method', function(){
      expect(TasksFctr.save()).toBeDefined();
    });
    //testing if TasksFctr is accessible and exposes update()
    it('should be accessible and exposing  update method', function(){
      expect(TasksFctr.update()).toBeDefined();
    });
    //testing GET
    it('should make a GET request', function () {
      $httpBackend.expectGET(getUrl);
      TasksFctr.get();
      $httpBackend.flush();
    });
    //testing GET
    it('should make a GET/query request', function () {
      $httpBackend.expectGET(queryUrl);
      TasksFctr.query();
      $httpBackend.flush();
    });
    //testing POST
    it('should make a POST request', function () {
      var aTask = {
        '_id':'571f0645f79b55374df67814',
        'taskName':'task 06',
        'taskDescription':'pfffffff',
        'storyPoints':6,
        'developer':'pfumu',
        'sprintInfo':{'sprintNumber':2, 'startDate':null, 'endDate':null},
        'state':'todo'
      };
      $httpBackend.expectPOST(postUrl, aTask).respond(201, '');
      TasksFctr.$save(aTask);
      $httpBackend.flush();
    });
  });
})();
