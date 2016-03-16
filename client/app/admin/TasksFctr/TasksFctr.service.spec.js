'use strict';

describe('Service: TasksFctr', function () {

  // load the service's module
  beforeEach(module('scrumBoardEs5AppApp'));

  // instantiate service
  var TasksFctr;
  beforeEach(inject(function (_TasksFctr_) {
    TasksFctr = _TasksFctr_;
  }));

  it('should do something', function () {
    expect(!!TasksFctr).toBe(true);
  });

});
