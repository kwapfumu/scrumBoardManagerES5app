'use strict';

describe('Controller: AdminAddTaskCtrl', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var AdminAddTaskCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminAddTaskCtrl = $controller('AdminAddTaskCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
