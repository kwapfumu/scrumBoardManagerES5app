'use strict';

describe('Directive: adminReleasebacklogHeaderDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/admin/adminReleasebacklogHeaderDrv/adminReleasebacklogHeaderDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<admin-releasebacklog-header-drv></admin-releasebacklog-header-drv>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
