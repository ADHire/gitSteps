var app = angular.module('gitMod', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/init', {
      controller: 'initController',
      templateUrl: './components/partials/init.html'
    })
    .when('/before', {
      controller: 'beforeController',
      templateUrl: './components/partials/status-before.html'
    })
    .when('/add', {
      controller: 'addController',
      templateUrl: './components/partials/status-add.html'
    })
    .when('/commit', {
      controller: 'commitController',
      templateUrl: './components/partials/commit.html'
    })
    .when('/repo', {
      controller: 'repoController',
      templateUrl: './components/partials/create-repo.html'
    })
    .when('/remoteadd', {
      controller: 'remoteAddController',
      templateUrl: './components/partials/add-origin.html'
    })
    .when('/selectcommands', {
      controller: 'optionsController',
      templateUrl: './components/partials/commands.html'
    })
    .when('/yay', {
      controller: 'yayController',
      templateUrl: './components/partials/success.html'
    })
    .when('/changes', {
      controller: 'yayController',
      templateUrl: './components/partials/changes.html'
    });

})
