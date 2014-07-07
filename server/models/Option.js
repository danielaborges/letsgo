'use strict'

/* Option class */

function Option (id, place, hour) {
    this.id = id | "";
    this.place = place | ""; 
    this.hour = hour | "";
}

Option.prototype.getId = function(){
    return id;
};

Option.prototype.setId = function(id){
    id = id;
};