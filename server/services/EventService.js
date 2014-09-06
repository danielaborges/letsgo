'use strict';

var models = require('../config/database');


var Event = models.Event;

exports.EventService = (function () {

    var instance;

    function EventService() {}


    EventService.prototype.createEvent = function(callback) {  
        //TODO
    }

    EventService.prototype.getEvent = function(eventId, callback) {	
        //TODO    
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
