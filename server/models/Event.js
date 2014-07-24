'use strict'

/* Event class */

function Event (id, name) {
    this.id = id || "";
    this.name = name || "";
    this.activityList = [];  // an event could be part of multiple activities, and vice-versa
}
    
Event.prototype.getId = function(){
    return this.id;
};
   
Event.prototype.setId = function(id){
    this.id = id;
};

Event.prototype.getName = function(){
    return this.name;
};
   
Event.prototype.setName = function(name){
    this.name = name;
};

Event.prototype.getActivityList = function(){
    return this.activityList;
};

Event.prototype.addActivity = function(Activity){
    this.activityList.push(Activity);
};


module.exports = Event;	