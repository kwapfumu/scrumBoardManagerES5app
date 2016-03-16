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

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
