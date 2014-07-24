'use strict'

/* Resource class */

function Resource (id, name, quantity) {
    this.id = id || "";
    this.name = name || "";
    this.quantity = quantity || "";
}

Resource.prototype.getId = function(){
    return this.id;
};

Resource.prototype.setId = function(id){
    this.id = id;
};

Resource.prototype.getName = function(){
    return this.name;
};

Resource.prototype.setName = function(name){
    this.name = name;
};

Resource.prototype.getQuantity = function(){
    return this.quantity;
};

Resource.prototype.setQuantity = function(quantity){
    this.quantity = quantity;
};

module.exports = Resource;