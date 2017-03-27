var app = angular.module('gitMod');

app.controller('optionsController', function($scope) {

  $scope.userReady = false;

  $scope.commands = "./components/images/pasteCommands.png";

  $scope.firstStep = function() {
    $scope.userReady = true;
  };
});
