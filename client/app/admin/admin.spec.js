'use strict';
describe('admin routes testing', function () {

  beforeEach(module('scrumBoardEs5AppApp'));
  
  var AdminCtrl, scope, state;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($templateCache, $rootScope, $state) {
    $templateCache.put('admin.html', '');
    scope = $rootScope.$new();
    state = $state;
  }));

  //tests the default state to be admin
  it('default state should be admin', function () {
    scope.$apply();
    expect(state.current.name).toEqual('admin');
  });
  //tests the admin templateurl
  it('state templateUrl should be admin.html',inject(function($rootScope, $state) {
    $rootScope.$apply();
    expect($state.current.templateUrl).toEqual('admin.html');
  }));
  //tests the controller
  it('state controller should be AdminCtrl',inject(function($rootScope, $state) {
    $rootScope.$apply();
    expect($state.current.controller).toEqual('AdminCtrl');
  }));
  //testing transitioning states
  it('should transition to admin.viewAllUsers state', function () {
    state.go('admin.viewAllUsers');
    scope.$apply();
    expect(state.current.name).toEqual('admin.viewAllUsers');
  });
  it('should transition to admin.releaseBacklog state', function () {
    state.go('admin.releaseBacklog');
    scope.$apply();
    expect(state.current.name).toEqual('admin.releaseBacklog');
  });
  it('should transition to admin.addTask state', function () {
    state.go('admin.addTask');
    scope.$apply();
    expect(state.current.name).toEqual('admin.addTask');
  });
  it('should transition to admin.sprints state', function () {
    state.go('admin.sprints');
    scope.$apply();
    expect(state.current.name).toEqual('admin.sprints');
  });
  //testing url parameters
  it('should transition to admin.aTask state passing the correct id param', function() {
    state.go('admin.aTask', {id:'1'});
    scope.$apply();
    expect(state.params.id).toEqual(id);
  });
  it('should transition to admin.editTask state passing the correct id param', function() {
    state.go('admin.editTask', {id:'1'});
    scope.$apply();
    expect(state.params.id).toEqual(id);
  });
  it('should transition to admin.deleteTask state passing the correct id param', function() {
      state.go('admin.deleteTask', {id:'1'});
      scope.$apply();
      expect(state.params.id).toEqual(id);
    });

});
