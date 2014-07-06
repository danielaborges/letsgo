'use strict'

/* Resource class */

function Resource (id, name, quantity) {
    this.id = id | "";
    this.name = name | "";
    this.quantity = quantity | "";
    
    this.getId = function(){
        return id;
    };
   
    this.setId = function(id){
        id = id;
    };
}