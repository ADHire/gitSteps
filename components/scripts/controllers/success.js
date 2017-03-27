var app = angular.module('gitMod');

app.controller('yayController', function($scope) {

  $scope.userReady = false;

  $scope.success = "./components/images/yaySuccess.png";

  $scope.firstStep = function() {
    $scope.userReady = true;
  };

});
