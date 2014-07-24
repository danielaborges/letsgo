'use strict'

/* Activity class */

function Activity (id, type, description) {
    this.id = id || "";
    this.type = type || "";  //ex. cinema, theatre, football game...
    this.description = description || "";
    this.optionList = [];
    this.eventList = [];     // an activity could be part of multiple events, and vice-versa
    this.resourceList = [];  //[{resource (id, name)}, quantity]
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

Activity.prototype.getOptionList = function(){
    return this.optionList;
};

Activity.prototype.getEventList = function(){
    return this.eventList;
};

Activity.prototype.addOption = function(Option){
    this.optionList.push(Option);
};

Activity.prototype.addEvent = function(Event){
    this.eventList.push(Event);
};

Activity.prototype.getResourceList = function(){
    return this.resourceList;
};

Activity.prototype.addResource = function(Resource){
    this.resourceList.push(Resource);
};

module.exports = Activity;