'use strict';

describe('Directive: aboutPanelDrv', function () {

  // load the directive's module and view
  beforeEach(module('scrumBoardEs5AppApp'));
  beforeEach(module('app/about/aboutPanelDrv/aboutPanelDrv.html'));

  var element, scope, aboutText;

  beforeEach(function(){
    aboutText='This was a project implemented by';
  });
  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.aboutText = aboutText;
    element = angular.element('<about-panel-drv></about-panel-drv>');
    $compile(element)(scope);
    scope.$digest();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<about-panel-drv></about-panel-drv>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
  it('should return a h4 element using find()', function(){
    var h4 = element.find('h4');
    expect(h4[0]).toBeDefined();
  });
  it('should display the correct text in the DOM', function(){
    var anH4 = element.find('h4');
    expect(anH4.text()).toBe(aboutText);
  });
  it('should display the correct text in the DOM', function(){
    var anH4 = element.find('h4');
    expect(anH4.text()).toBe(aboutText);
  });

});
