'use strict';

/* Controllers */

appControllers.controller('EventCtrl', ['$scope', 'EventListFactory', function($scope, EventListFactory) {

    $scope.fakeAddedEvent = null;
    
    function initialize(){
        EventListFactory.getEventList().then(function(result) {
            $scope.eventList =  result.data;
        });
    }
    
    initialize();

    $scope.addEvent = function(){
        EventListFactory.addEvent($scope.eventName).then(function(result) {
            console.log(result.data);
            $scope.fakeAddedEvent = result.data;

        });

    }

    }]);
