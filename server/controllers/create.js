var Joi = require('joi');
var Event = require('../models/Event');

// This is the create controller. Goal is to serve as the creator for all classes.
module.exports = {
    event: {
        handler: function(request, reply){
            if (!request.auth.isAuthenticated) {
                return reply.redirect('/');
            }
            console.log(request.query.name);
            reply(new Event(1, request.payload.name));
            
        },
        validate: { 
            payload: { 
                name: Joi.string().min(1).required()
        } }
    }
}