'use strict';

describe('Directive: taskDetailsDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/releaseBacklog/taskDetailsDrv/taskDetailsDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<task-details-drv></task-details-drv>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
