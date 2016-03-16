'use strict';

describe('Directive: taskDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/releaseBacklog/taskDrv/taskDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<task-drv></task-drv>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the taskDrv directive');
  }));
});