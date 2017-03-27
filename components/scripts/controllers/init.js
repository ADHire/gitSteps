var app = angular.module('gitMod');

app.controller('initController', function($scope) {

  $scope.userReady = false;

  $scope.gitInit = "./components/images/gitInit.png";

  $scope.firstStep = function() {
    $scope.userReady = true;
  };

});
