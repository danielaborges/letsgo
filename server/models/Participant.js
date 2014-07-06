'use strict'

/* Participant class */

function Participant (id, name, email) {
    this.id = id | "";
    this.name = name | "";
    this.email = email | "";
    this.resourceList = [];
    
    this.getId = function(){
        return id;
    };
   
    this.setId = function(id){
        id = id;
    };
}