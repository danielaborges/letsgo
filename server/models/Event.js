'use strict'

/* Event class */

function Event (id, name) {
    this.id = id | "";
    this.name = name | "";
    this.ActivityList = [];  // an event could be part of multiple activities, and vice-versa

    this.getId = function(){
        return id;
    };
   
    this.setId = function(id){
        id = id;
    };

}