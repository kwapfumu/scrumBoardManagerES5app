'use strict';

describe('Directive: adminTaskFormDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/admin/adminTaskFormDrv/adminTaskFormDrv.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('AdminAddTaskCtrl',{$scope: scope});
  }));

  it('should update taskname field with defined input value', function(){

  });

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<admin-task-form-drv></admin-task-form-drv>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
