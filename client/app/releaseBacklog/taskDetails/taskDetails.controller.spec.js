'use strict';

describe('Controller: TaskDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var TaskDetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskDetailsCtrl = $controller('TaskDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should test if task property is defined', function () {
    expect(scope.task).toBeDefined();
  });
});
