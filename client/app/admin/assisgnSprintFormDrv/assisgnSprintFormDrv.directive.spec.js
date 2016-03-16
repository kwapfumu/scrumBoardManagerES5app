'use strict';

describe('Directive: assisgnSprintFormDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/admin/assisgnSprintFormDrv/assisgnSprintFormDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<assisgn-sprint-form-drv></assisgn-sprint-form-drv>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the assisgnSprintFormDrv directive');
  }));
});