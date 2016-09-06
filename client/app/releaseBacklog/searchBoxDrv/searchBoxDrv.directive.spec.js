'use strict';

describe('Directive: searchBoxDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/releaseBacklog/searchBoxDrv/searchBoxDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-box-drv></search-box-drv>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
