'use strict';

describe('Controller: AdminAddTaskCtrl', function () {

  // load the controller's module
  beforeEach(module('scrumBoardEs5AppApp'));

  var AdminAddTaskCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    //creates a new instance of this controller TODO: inject TasksFctr
    AdminAddTaskCtrl = $controller('AdminAddTaskCtrl', {
      $scope: scope
    });
  }));

  //testing if the scope receives states...
  it('should set the scope property states element to be 3', function(){
    expect(scope.states.length).toBe(3);
  });
  //testing if the save button is set to "Save"
  it('should set the scope property taskFormButtonText to Save', function(){
    expect(scope.taskFormButtonText).toBe('Save');
  });
});
