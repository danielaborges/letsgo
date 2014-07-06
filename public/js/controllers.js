'use strict';

/* Controllers */

angular.module('lisbonBigApp.controllers', [])
  .controller('ItineraryCtrl', ['$scope', function($scope) {

		$scope.itineraryList = [{"id": 1, "name":"Night in Lisbon", "kilometers":3},
								{"id": 2, "name":"City Centre", "kilometers":5},
								{"id": 3, "name":"Castle", "kilometers":2} ]
  }])
  .controller('ItineraryDataCtrl', ['$scope', '$routeParams', 'ItineraryFactory',
		function($scope, $routeParams, ItineraryFactory) {
		// TODO :: homework!
	$scope.itId = $routeParams.itineraryId;
	$scope.hello = '';
	ItineraryFactory.getData($scope.itId).then(function(result) {
		$scope.hello =  result.data;
	});

	
		
  }]);
