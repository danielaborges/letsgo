'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var appServices = angular.module('letsgoApp.services', []);
   	
appServices.factory('EventFactory', ['$http', function($http){
	function getData(id){
		return $http({
			method: 'GET', 
			url: '/getdata',
			params: {'id': id }
		});
	}
	
    return {
		getData : getData
	}
}]);
