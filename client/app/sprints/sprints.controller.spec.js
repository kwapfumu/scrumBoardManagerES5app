'use strict';

describe('Controller: SprintsCtrl', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var SprintsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SprintsCtrl = $controller('SprintsCtrl', {
      $scope: scope
    });
  }));
  //tests if sprints property is an array of length greater than 0
  it('should test if sprints is an array of length greater than 0', function () {
    expect(scope.sprints.length).toBeGreaterThan(0);
  });
});
