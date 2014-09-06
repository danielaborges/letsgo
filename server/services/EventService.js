'use strict';

var models = require('../config/database');


var Event = models.Event;

exports.EventService = (function () {

    var instance;

    function EventService() {}


    EventService.prototype.createEvent = function(eventData, callback) {  

        Event
        .create({name: eventData})
        .complete(function(err, event) {
            callback(err, event.id);
        })

    }

    EventService.prototype.getEvent = function(eventId, callback) {	
        Event.findById(eventId, function(err, results){
            callback(err, results);
        });

    }

    EventService.prototype.getAllEvents = function(callback) {	
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
            callback(err, results);
        })
    }


    EventService.prototype.updateEvent = function(eventId, dataToUpdate, callback) {
        Event
        .findById(eventId,  function(err, user){

            user.updateAttributes(dataToUpdate/*, ['name']*/).success(function() {             
                callback(err, results);
            });
        });
    }

    EventService.prototype.removeEvent = function(eventId, callback) {

        Event
        .findById(eventId,  function(err, results){
            event.destroy().success(function() {
                callback(err, results);
            });
        });
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
