'use strict';

describe('Service: NotifyFctr', function () {

  // load the service's module
  beforeEach(module('scrumBoardEs5AppApp'));

  // instantiate service
  var NotifyFctr;
  beforeEach(inject(function (_NotifyFctr_) {
    NotifyFctr = _NotifyFctr_;
  }));

  it('should do something', function () {
    expect(!!NotifyFctr).toBe(true);
  });

});
