'use strict'

/* Participant class */

function Participant (id, name, email, password) {
    this.id = id || "";             //must be a GUID (see https://www.npmjs.org/package/guid)
    this.name = name || "";
    this.email = email || "";
    this.password = password || ""; //bycript needed (see https://www.npmjs.org/package/bcrypt-nodejs)
    this.resourceList = [];     //[{resource (id, name)}, quantity]
}

Participant.prototype.getId = function(){
    return this.id;
};

Participant.prototype.setId = function(id){
    this.id = id;
};

Participant.prototype.getName = function(){
    return this.name;
};

Participant.prototype.setName = function(name){
    this.name = name;
};

Participant.prototype.getEmail = function(){
    return this.email;
};

Participant.prototype.setEmail = function(email){
    this.email = email;
};

Participant.prototype.getResourceList = function(){
    return this.resourceList;
};

Participant.prototype.addResource = function(Resource){
    this.resourceList.push(Resource);
};

module.exports = Participant;