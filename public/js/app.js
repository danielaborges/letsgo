'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {

   /* $routeProvider.when('/', {
        templateUrl: '',
        controller: ''
    });
*/
    $routeProvider.when('/event', {
        templateUrl: 'partials/ListEvents/event-list.html', 
        controller: 'EventCtrl'
    });

    $routeProvider.when('/event/:eventId', {
        templateUrl: 'partials/EventData/event-data.html', 
        controller: 'EventDataCtrl'
    });

    $routeProvider.otherwise({
        redirectTo: '/event'
    });

}]);



