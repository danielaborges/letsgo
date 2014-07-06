'use strict'

/* Option class */

function Option (id, place, hour) {
    this.id = id | "";
    this.place = place | ""; 
    this.hour = hour | "";
    
    this.getId = function(){
        return id;
    };
   
    this.setId = function(id){
        id = id;
    };
}