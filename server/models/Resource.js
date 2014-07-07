'use strict'

/* Resource class */

function Resource (id, name, quantity) {
    this.id = id | "";
    this.name = name | "";
    this.quantity = quantity | "";
}

Resource.prototype.getId = function(){
    return id;
};

Resource.prototype.setId = function(id){
    id = id;
};