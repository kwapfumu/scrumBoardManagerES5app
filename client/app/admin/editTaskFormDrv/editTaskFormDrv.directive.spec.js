'use strict';

describe('Directive: editTaskFormDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/admin/editTaskFormDrv/editTaskFormDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-task-form-drv></edit-task-form-drv>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the editTaskFormDrv directive');
  }));
});