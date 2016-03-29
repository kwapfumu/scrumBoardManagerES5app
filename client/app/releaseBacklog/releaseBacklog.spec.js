'use strict';
describe('releaseBacklog routes testing', function () {

  beforeEach(module('scrumBoardEs5AppApp'));

  var scope, state;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($templateCache, $rootScope, $state) {
    $templateCache.put('releaseBacklog.html', '');
    scope = $rootScope.$new();
    state = $state;
  }));

  //tests the default state to be admin
  it('default state should be releaseBacklog', function () {
    scope.$apply();
    expect(state.current.name).toEqual('releaseBacklog');
  });
  //tests the admin templateurl
  it('state templateUrl should be releaseBacklog.html',inject(function($rootScope, $state) {
    $rootScope.$apply();
    expect($state.current.templateUrl).toEqual('releaseBacklog.html');
  }));
  //tests the controller
  it('state controller should be ReleaseBacklogCtrl',inject(function($rootScope, $state) {
    $rootScope.$apply();
    expect($state.current.controller).toEqual('ReleaseBacklogCtrl');
  }));
  //testing transitioning states
  it('should transition toreleaseBacklog.myTasks state', function () {
    state.go('releaseBacklog.myTasks');
    scope.$apply();
    expect(state.current.name).toEqual('releaseBacklog.myTasks');
  });
  it('should transition to releaseBacklog.sprints state', function () {
    state.go('releaseBacklog.sprints');
    scope.$apply();
    expect(state.current.name).toEqual('releaseBacklog.sprints');
  });
  it('should transition to releaseBacklog.currentSprint state passing the correct id param', function() {
      state.go('releaseBacklog.currentSprint', {id:'1'});
      scope.$apply();
      expect(state.params.id).toEqual(id);
    });

});
