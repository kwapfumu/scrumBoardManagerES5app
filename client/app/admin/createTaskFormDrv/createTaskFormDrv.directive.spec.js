'use strict';

describe('Directive: createTaskFormDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/admin/createTaskFormDrv/createTaskFormDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<create-task-form-drv></create-task-form-drv>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the createTaskFormDrv directive');
  }));
});