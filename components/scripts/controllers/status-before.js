var app = angular.module('gitMod');

app.controller('beforeController', function($scope) {

  $scope.userReady = false;

  $scope.statusBefore = "./components/images/gitStatusBeforeAdd.png"

  $scope.firstStep = function() {
    $scope.userReady = true;
  };

});
