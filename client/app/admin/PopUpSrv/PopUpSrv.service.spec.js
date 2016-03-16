'use strict';

describe('Service: PopUpSrv', function () {

  // load the service's module
  beforeEach(module('scrumBoardEs5AppApp'));

  // instantiate service
  var PopUpSrv;
  beforeEach(inject(function (_PopUpSrv_) {
    PopUpSrv = _PopUpSrv_;
  }));

  it('should do something', function () {
    expect(!!PopUpSrv).toBe(true);
  });

});
