'use strict';

describe('Controller: AdminAssignSprintCtrl', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var AdminAssignSprintCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminAssignSprintCtrl = $controller('AdminAssignSprintCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
