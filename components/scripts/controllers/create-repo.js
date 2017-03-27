var app = angular.module('gitMod');

app.controller('repoController', function($scope) {

  $scope.userReady = false;

  $scope.createRepo = "./components/images/repoCreate.png"

  $scope.firstStep = function() {
    $scope.userReady = true;
  };

});
