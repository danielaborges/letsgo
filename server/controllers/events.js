var Joi = require('joi');
var EventService = require('../services/EventService').EventService.getInstance();

// This is the create controller. Goal is to serve as the creator for all classes.
module.exports = {
    createEvent: {
        handler: function(request, reply){
            if (!request.auth.isAuthenticated) {
                return reply.redirect('/');
            }

            var event = new Event(1, request.payload.name)

            reply({
                event: event
            }).code(event? 200 : 400);


        },
        validate: { 
            payload: { 
                name: Joi.string().min(1).required()
            }
        }
    },

    getEventData: {

        handler: function(request, reply){

            if (!request.auth.isAuthenticated) {
                return reply.redirect('/');
            }

            var id = request.query.id;
           
            reply({
                eventData: id
            }).code(id? 200 : 400);

        }
    },

    getAllEvents : {
        handler: function(request, reply){
            if (!request.auth.isAuthenticated) {
                return reply.redirect('/');
            }

            //FIXME            
            var eventList = [{"id": 1, "name":"Event 1"}, {"id": 2, "name":"Event 2"}, {"id": 3, "name":"Event 3"}];

            reply({
                eventList: eventList
            }).code(eventList? 200 : 400);

        },

    }
}