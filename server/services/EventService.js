'use strict';

var models = require('../config/database');


var Event = models.Event;

exports.EventService = (function () {

    var instance;

    function EventService() {}


    EventService.prototype.createEvent = function(eventData, callback) {  
        //TODO

        console.log(eventData);

        Event
        .create({
            name: eventData
        })
        .complete(function(err, event) {
            console.log("created event:");
            console.log(event);
            callback(err, event.id);

        })

    }

    EventService.prototype.getEvent = function(eventId, callback) {	
        //TODO    
    }

    EventService.prototype.getAllEvents = function(callback) {	
        //TODO    
        //   var eventList = [{"id": 1, "name":"Event 1"}, {"id": 2, "name":"Event 2"}, {"id": 3, "name":"Event 3"}];


        Event
        .findAll()
        .complete(function(err, results) {
            if (!!err) {
                console.log('An error occurred while searching:', err)
            } else if (!results) {
                console.log('No results found.')
            } else {
                console.log('Results found.');
            }
        })
    }

    
    
    
    EventService.prototype.updateEvent = function(eventId, dataToUpdate, callback) {
        //TODO
    }

    EventService.prototype.removeEvent = function(eventId, callback) {
        //TODO
    }

    return {
        getInstance: function() {

            if (!instance){
                instance = new EventService();
            }
            return instance;
        }
    }
})();
