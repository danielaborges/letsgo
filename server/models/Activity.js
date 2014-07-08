'use strict'

/* Activity class */

function Activity (id, type, description) {
    this.id = id || "";
    this.type = type || "";           //ex. cinema, theatre, football game...
    this.description = description || "";
    this.optionList = [];
    this.eventList = [];     // an activity could be part of multiple events, and vice-versa
    
}

Activity.prototype.getId = function(){
    return this.id;
};
   
Activity.prototype.setId = function(id){
    this.id = id;
};
    
Activity.prototype.getType = function(){
    return this.type;
};
   
Activity.prototype.setType = function(type){
    this.type = type;
};

Activity.prototype.getDescription = function(){
    return this.description;
};
   
Activity.prototype.setDescription = function(description){
    this.description = description;
};
  
//TODO more methods...
