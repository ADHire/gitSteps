var app = angular.module('gitMod');

app.controller('addController', function($scope) {

  $scope.userReady = false;

  $scope.statusAfter = "./components/images/gitAddgitStatus.png";

  $scope.firstStep = function() {
    $scope.userReady = true;
  };

});
