var app = angular.module('gitMod');

app.controller('remoteAddController', function($scope) {

  $scope.userReady = false;

  $scope.remoteadd = "./components/images/addRemotePushToOrigin.png";

  $scope.firstStep = function() {
    $scope.userReady = true;
  };

});
