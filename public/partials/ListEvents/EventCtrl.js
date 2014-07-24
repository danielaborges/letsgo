'use strict';

/* Controllers */

appControllers.controller('EventCtrl', ['$scope', 'EventListFactory', function($scope, EventListFactory) {


    function initialize(){
        EventListFactory.getEventList().then(function(result) {
            $scope.eventList =  result.data;
        });
    }
    
    initialize();

    $scope.addEvent = function(){
        EventListFactory.addEvent($scope.eventName).then(function(result) {
            console.log(result.data);

        });

    }

    }]);
