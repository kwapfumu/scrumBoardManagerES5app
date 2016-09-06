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

  //testing if isSprintPanelVisible is set to true
  it('should set the scope property isSprintPanelVisible to true', function(){
    expect(scope.isSprintPanelVisible).toBeTruthy();
  });
  //testing if tasksBySprint is an array
  it('should tests if tasksBySprint is an array of length greater than 0', function(){
    expect(scope.tasksBySprint.length).toBeGreaterThan(0);
  });
  //testing if startDate is defined
  it('should check if startDate is defined', function(){
    expect(scope.startDate).toBeDefined();
  });
  //testing if startDate is defined
  it('should check if endDate is defined', function(){
    expect(scope.endDate).toBeDefined();
  });
});
