'use strict';

describe('Directive: backlogPanelDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/releaseBacklog/backlogPanelDrv/backlogPanelDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<backlog-panel-drv></backlog-panel-drv>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the backlogPanelDrv directive');
  }));
});