'use strict';

describe('Service: TaskStateFctr', function () {

  // load the service's module
  beforeEach(module('scrumBoardEs5AppApp'));

  // instantiate service
  var TaskStateFctr;
  beforeEach(inject(function (_TaskStateFctr_) {
    TaskStateFctr = _TaskStateFctr_;
  }));
  /*beforeEach(inject(function($injector) {
      TaskStateFctr = $injector.get('TaskStateFctr');
    }));*/
    //testing if getStates method is defined
  it('should have a getStates method defined', function () {
    expect(TaskStateFctr.getStates).toBeDefined();
  });
  //testing if getStates returns is an array of length 3
  it('should have a getStates method that returns 3 element', function () {
    expect(TaskStateFctr.getStates.length).toEqual(3);
  });
});
