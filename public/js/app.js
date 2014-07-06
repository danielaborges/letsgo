'use strict';


// Declare app level module which depends on filters, and services
angular.module('letsgoApp', [
  'ngRoute',
  'letsgoApp.filters',
  'letsgoApp.services',
  'letsgoApp.directives',
  'letsgoApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/event', {
	templateUrl: 'partials/event-list.html', 
	controller: 'EventCtrl'});
  $routeProvider.when('/event/:eventId', {
	templateUrl: 'partials/event-data.html', 
	controller: 'EventDataCtrl'});
  $routeProvider.otherwise({
	redirectTo: '/event'
  });
}]);



