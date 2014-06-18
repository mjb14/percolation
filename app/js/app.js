'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wquf', {templateUrl: 'partials/wquf.html', controller: 'WqufController'});
  $routeProvider.otherwise({redirectTo: '/wquf'});
}]);
