'use strict';

describe('Controller: AdminEditTaskCtrl', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var AdminEditTaskCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminEditTaskCtrl = $controller('AdminEditTaskCtrl', {
      $scope: scope
    });
  }));

  //testing if the scope receives states...
  it('should set the scope property states element to be 3', function(){
    expect(scope.states.length).toBe(3);
  });
  //testing if the save button is set to "Save"
  it('should set the scope property taskFormButtonText to Update', function(){
    expect(scope.taskFormButtonText).toBe('Update');
  });
});
