'use strict';

describe('Component: AboutComponent', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var AboutComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AboutComponent = $componentController('AboutComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
