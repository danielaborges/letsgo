'use strict';

/* Controllers */

angular.module('letsgoApp.controllers', [])
  .controller('EventCtrl', ['$scope', function($scope) {

		$scope.eventList = [	{"id": 1, "name":"Event 1"},
								{"id": 2, "name":"Event 2"},
								{"id": 3, "name":"Event 3"} ]
  }])
  .controller('EventDataCtrl', ['$scope', '$routeParams', 'EventFactory',
		function($scope, $routeParams, EventFactory) {
		// TODO :: homework!
	$scope.eventId = $routeParams.eventId;
	$scope.hello = '';
	EventFactory.getData($scope.eventId).then(function(result) {
		$scope.hello =  result.data;
	});

	
		
  }]);
