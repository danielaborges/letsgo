'use strict';

/* Services */

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
