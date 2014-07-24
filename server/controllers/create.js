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
            var event = new Event();
            console.log(event);
            new event(1, request.query.name);
            reply(event);
            
        },
        validate: { 
            query: { 
                name: Joi.string().min(1).required()
        } }
    }
}