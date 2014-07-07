'use strict'

/* Event class */

function Event (id, name) {
    this.id = id | "";
    this.name = name | "";
    this.ActivityList = [];  // an event could be part of multiple activities, and vice-versa
}
    
Event.prototype.getId = function(){
    return id;
};
   
Event.prototype.setId = function(id){
    id = id;
};
