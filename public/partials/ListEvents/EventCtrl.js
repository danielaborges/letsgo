'use strict';

/* Controllers */

appControllers.controller('EventCtrl', ['$scope', 'EventListFactory', function($scope, EventListFactory) {

    $scope.fakeAddedEvent = null;
    $scope.eventList = null;



    $scope.loadAllEvents = function(){

        EventListFactory.getEventList().then(function(result) {

            console.log(result)
            $scope.eventList =  result.data.eventList;
        });
    }


    $scope.addEvent = function(){
        EventListFactory.addEvent($scope.eventName).then(function(result) {
            $scope.fakeAddedEvent = result.data;

            //update
            $scope.loadAllEvents();

        });

    }


    function initialize(){
        $scope.loadAllEvents();
    }

    initialize();

}]);
