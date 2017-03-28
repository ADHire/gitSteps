var app = angular.module('gitMod');

app.controller('ultimateController', function($scope) {

  $('.pop-modal').on('mouseenter', function() {
    $(this).css({'cursor': 'pointer'});
  }).on('mouseleave', function() {
    $(this).css({'cursor': 'default'});
  }).on('click', function() {
    $('.modal').modal('show');
  });

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

});
