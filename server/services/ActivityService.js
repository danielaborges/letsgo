'use strict';

exports.ActivityService = (function () {

    var instance;

    function ActivityService() {}


    ActivityService.prototype.createActivity = function(callback) {  
        //TODO
        
        //also adds options and resources
    }

    ActivityService.prototype.getActivity = function(activityId, callback) {	
        //TODO    
    } 

    ActivityService.prototype.getAllActivities = function(callback) {
        //TODO	
    }  

    ActivityService.prototype.updateActivity = function(activityId, dataToUpdate, callback) {
        //TODO
    }

    ActivityService.prototype.removeActivity = function(activityId, callback) {
        //TODO
    }

    return {
        getInstance: function() {

            if (!instance){
                instance = new ActivityService();
            }
            return instance;
        }
    }
})();
