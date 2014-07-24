'use strict'

/* Option class */

function Option (id, place, hour) {
    this.id = id || "";
    this.place = place || ""; 
    this.hour = hour || "";
}

Option.prototype.getId = function(){
    return this.id;
};

Option.prototype.setId = function(id){
    this.id = id;
};

Option.prototype.getPlace = function(){
    return this.place;
};

Option.prototype.setPlace = function(place){
    this.place = place;
};

Option.prototype.getHour = function(){
    return this.hour;
};

Option.prototype.setHour = function(hour){
    this.hour = hour;
};

module.exports = Option;