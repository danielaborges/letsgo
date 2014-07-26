'use strict';

/* Services */

appServices.factory('EventFactory', ['$http', function($http){
	function getEventData(id){
		return $http({
			method: 'GET', 
			url: '/event/data',
			params: {'id': id }
		});
	}
	
    return {
		getEventData : getEventData
	}
}]);
