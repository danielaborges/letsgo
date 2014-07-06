'use strict'

/* Activity class */

function Activity (id, type, description) {
    this.id = id | "";
    this.type = type | "";           //ex. cinema, theatre, football game...
    this.description = description | "";
    this.optionList = [];
    this.eventList = [];     // an activity could be part of multiple events, and vice-versa
    
    
    this.getId = function(){
        return id;
    };
   
    this.setId = function(id){
        id = id;
    };
    
    this.getType = function(){
        return type;
    };
   
    this.setType = function(type){
        type = type;
    };
    
    //TODO more methods...
}