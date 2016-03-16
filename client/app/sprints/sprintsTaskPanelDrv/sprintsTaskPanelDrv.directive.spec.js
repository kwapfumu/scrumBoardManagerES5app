'use strict';

describe('Directive: sprintsTaskPanelDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/sprints/sprintsTaskPanelDrv/sprintsTaskPanelDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sprints-task-panel-drv></sprints-task-panel-drv>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the sprintsTaskPanelDrv directive');
  }));
});