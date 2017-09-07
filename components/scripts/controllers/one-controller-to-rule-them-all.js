var app = angular.module('gitMod');

app.controller('ultimateController', function($scope) {

});

app.directive('link', function() {

  return {
    restrict: 'C',
    link: function(scope, element) {
      element.bind('click', function(e) {
        angular.element(document).find('a').removeClass('visited');
        element.addClass("visited");
      });
    }
  }

});
