var app = angular.module('gitMod', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ultimateController',
      templateUrl: './components/partials/home.html'
    })
    .when('/init', {
      controller: 'ultimateController',
      templateUrl: './components/partials/init.html'
    })
    .when('/before', {
      controller: 'ultimateController',
      templateUrl: './components/partials/status-before.html'
    })
    .when('/add', {
      controller: 'ultimateController',
      templateUrl: './components/partials/status-add.html'
    })
    .when('/commit', {
      controller: 'ultimateController',
      templateUrl: './components/partials/commit.html'
    })
    .when('/repo', {
      controller: 'ultimateController',
      templateUrl: './components/partials/create-repo.html'
    })
    .when('/remoteadd', {
      controller: 'ultimateController',
      templateUrl: './components/partials/add-origin.html'
    })
    .when('/selectcommands', {
      controller: 'ultimateController',
      templateUrl: './components/partials/commands.html'
    })
    .when('/yay', {
      controller: 'ultimateController',
      templateUrl: './components/partials/success.html'
    })
    .when('/changes', {
      controller: 'ultimateController',
      templateUrl: './components/partials/changes.html'
    })
    .otherwise({ redirectTo: '/' });

})
