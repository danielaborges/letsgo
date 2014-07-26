'use strict';

/* Controllers */

appControllers.controller('EventDataCtrl', ['$scope', '$routeParams', 'EventFactory',                                            function($scope, $routeParams, EventFactory) {

    $scope.eventId = $routeParams.eventId;
    $scope.eventData = '';

    function initialize(){
        EventFactory.getEventData($scope.eventId).then(function(result) {
            $scope.eventData =  result.data.eventData;
        });
    }


    initialize();

}]);
