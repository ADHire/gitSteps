var app = angular.module('gitMod');

app.controller('commitController', function($scope) {

  $scope.userReady = false;

  $scope.commit = "./components/images/gitCommit.png";

  $scope.firstStep = function() {
    $scope.userReady = true;
  };

});
