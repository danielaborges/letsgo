'use strict'

/* Activity class */

function Activity (id, type, description) {
    this.id = id | "";
    this.type = type | "";           //ex. cinema, theatre, football game...
    this.description = description | "";
    this.optionList = [];
    this.eventList = [];     // an activity could be part of multiple events, and vice-versa
    
}

Activity.prototype.getId = function(){
    return id;
};
   
Activity.prototype.setId = function(id){
    id = id;
};
    
Activity.prototype.getType = function(){
    return type;
};
   
Activity.prototype.setType = function(type){
    type = type;
};

Activity.prototype.getDescription = function(){
    return description;
};
   
Activity.prototype.setDescription = function(description){
    description = description;
};
    
//TODO more methods...
}