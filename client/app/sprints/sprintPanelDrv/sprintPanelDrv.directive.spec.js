'use strict';

describe('Directive: sprintPanelDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/sprints/sprintPanelDrv/sprintPanelDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sprint-panel-drv></sprint-panel-drv>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
