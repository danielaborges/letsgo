'use strict';

/* Controllers */

appControllers.controller('EventCtrl', ['$scope', 'EventListFactory', function($scope, EventListFactory) {

    // ** VARIABLES ** //
    
    $scope.addedEvent = null;
    $scope.eventList = null;

    
    // delete variables
    $scope.eventIdToDelete;
    $scope.eventNameToDelete;

    // ** FUNCTIONS ** //


    $scope.loadAllEvents = function(){

        EventListFactory.getEventList().then(function(result) {

            console.log(result)
            $scope.eventList =  result.data.eventList;
        });
    }


    $scope.addEvent = function(){
        EventListFactory.addEvent($scope.eventName).then(function(result) {
            $scope.addedEvent = result.data;

            //update
            $scope.loadAllEvents();

        });

    }



    /* 
    * delete event action 
    *
    */



    $scope.deleteEventPopup = function(id, name){

        $scope.eventIdToDelete = id;
        $scope.eventNameToDelete = name;

    }

    $scope.confirmDeleteEventPopup = function(){

        //send delete mesage to server
        EventListFactory.deleteEvent($scope.eventIdToDelete).then(function(result) {
            
            //update
            $scope.loadAllEvents();

            //close popup
            
        });


    }




    function initialize(){
        $scope.loadAllEvents();
    }

    initialize();

}]);
