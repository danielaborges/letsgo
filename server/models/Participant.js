'use strict'

/* Participant class */

function Participant (id, name, email) {
    this.id = id | "";
    this.name = name | "";
    this.email = email | "";
    this.resourceList = [];
}

Participant.prototype.getId = function(){
    return id;
};

Participant.prototype.setId = function(id){
    id = id;
};