'use strict';
describe('Controller: AdminCtrl', function () {

  beforeEach(module('scrumBoardEs5AppApp'));

  var rootScope, scope;

  beforeEach(inject(function($rootScope){
    rootScope = $rootScope;
    scope = $rootScope.$new();
  }));

  beforeEach(inject(function($controller){
    //registers an new instance of AdminCtrl providing the scope
    $controller('AdminCtrl',{
      $scope:scope
    });
  }));
  //testing if the scope receives users...
  it('should set the scope property users to be greater than 1', function(){
    expect(scope.users.length).toBeGreaterThan(1);
  });
  //testing the delete method
});
