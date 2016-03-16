'use strict';

describe('Service: TaskStateFctr', function () {

  // load the service's module
  beforeEach(module('scrumBoardEs5AppApp'));

  // instantiate service
  var TaskStateFctr;
  beforeEach(inject(function (_TaskStateFctr_) {
    TaskStateFctr = _TaskStateFctr_;
  }));

  it('should do something', function () {
    expect(!!TaskStateFctr).toBe(true);
  });

});
