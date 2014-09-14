'use strict';

/* Services */

appServices.factory('EventListFactory', ['$http', function($http){
    
    
    function getEventList(){
        return $http({
            method: 'GET', 
            url: '/event/all'
        });
    }
    
    function addEvent(name){
        console.log("Name:" + name);
        return $http({
            method: 'POST', 
            url: '/create/event',
            data: {'name': name }
        });
    }
    
    function deleteEvent(id){
        return $http({
            method: 'DELETE', 
            url: '/delete/' + id           
        });
    }

    return {
        getEventList : getEventList,
        addEvent : addEvent,
        deleteEvent : deleteEvent
    }
}]);
