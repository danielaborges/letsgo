'use strict';

exports.ParticipantService = (function () {

    var instance;

    function ParticipantService() {}


    ParticipantService.prototype.createParticipant = function(callback) {  
        //TODO
    }

    ParticipantService.prototype.getParticipant = function(participantId, callback) {	
        //TODO    
    } 

    ParticipantService.prototype.getAllActivities = function(callback) {
        //TODO	
    }  

    ParticipantService.prototype.updateParticipant = function(participantId, dataToUpdate, callback) {
        //TODO
    }

    ParticipantService.prototype.removeParticipant = function(participantId, callback) {
        //TODO
    }

    return {
        getInstance: function() {

            if (!instance){
                instance = new ParticipantService();
            }
            return instance;
        }
    }
})();
