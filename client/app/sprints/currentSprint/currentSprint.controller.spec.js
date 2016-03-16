'use strict';

describe('Controller: CurrentSprintCtrl', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var CurrentSprintCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrentSprintCtrl = $controller('CurrentSprintCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
