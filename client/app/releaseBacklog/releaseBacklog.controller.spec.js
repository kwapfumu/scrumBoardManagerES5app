'use strict';

describe('Controller: ReleaseBacklogCtrl', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var ReleaseBacklogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReleaseBacklogCtrl = $controller('ReleaseBacklogCtrl', {
      $scope: scope
    });
  }));
  //tests if tasks property if an array of length greater than 0
  it('should tasks property to be an array of length greater than 0', function () {
    expect(scope.tasks.length).toBeGreaterThan(0);
  });
});
