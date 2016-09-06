'use strict';
//most of the features of this controller are user interactions tested
//using protractor in e2e files i.e for tests regarding this part check e2e files
describe('Controller: AdminReleaseBacklogCtrl', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var AdminReleaseBacklogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminReleaseBacklogCtrl = $controller('AdminReleaseBacklogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
