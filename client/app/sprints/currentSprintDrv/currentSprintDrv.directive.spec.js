'use strict';

describe('Directive: currentSprintDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/sprints/currentSprintDrv/currentSprintDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<current-sprint-drv></current-sprint-drv>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
