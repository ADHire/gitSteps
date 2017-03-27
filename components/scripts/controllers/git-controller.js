var app = angular.module('gitMod');

app.controller('gitController', function($scope) {

  $scope.userReady = false;

  $scope.steps = {
    gitInit: "./components/images/gitInit.png",
    statusBefore: "./components/images/gitStatusBeforeAdd.png",
    statusAdd: "./components/images/gitAddgitStatus.png",
    gitCommit: "./components/images/gitCommit.png",
    repoCreate: "./components/images/repoCreate.png",
    addRemote: "./components/images/addRemotePushToOrigin.png",
    paste: "./components/images/pasteCommands.png",
    yay: "./components/images/yaySuccess.png"
  };

  $scope.firstStep = function() {
    $scope.userReady = true;
  };

  console.log($scope.steps);

});
