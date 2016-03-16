'use strict';

describe('Controller: MyTasksCtrl', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var MyTasksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyTasksCtrl = $controller('MyTasksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
