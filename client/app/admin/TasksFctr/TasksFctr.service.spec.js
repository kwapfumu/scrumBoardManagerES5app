'use strict';

describe('Service: TasksFctr', function () {

  // load the service's module
  beforeEach(module('scrumBoardEs5AppApp'));

  // instantiate service
  var TasksFctr, $httpBackend, getUrl, postUrl;
  beforeEach(inject(function (_TasksFctr_, $injector, $httpBackend) {
    TasksFctr = _TasksFctr_;
    //$httpBackend = $injector.get('$httpBackend');
    $httpBackend = $httpBackend;
    getUrl = '/admin/tasks/:id';
    posttUrl = '/admin/tasks/new';
    $httpBackend.when('GET', url).respond({data: {taskName: 'task 1', taskDescription:'blah blah', developer:'pfumu'}});
  }));

  /*Write an afterEach function calling the relevant methods to verify that all HTTP
  requests were made and there are none to be flushed:*/
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  //testing GET
  it('should make a GET request', function () {
    $httpBackend.expectGET(getUrl);
    $httpBackend.flush();
  });
  //testing POST
  it('should make a POST request', function () {
    var aTask = {taskName: 'task 1', taskDescription:'blah blah', developer:'pfumu'};
    $httpBackend.expectPOST(postUrl, aTask).respond(201, '');
    //TasksFctr.$save(aTask);
    $httpBackend.flush();
  });
});
