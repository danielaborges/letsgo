var Joi = require('joi');
var eventService = require('../services/EventService').EventService.getInstance();

module.exports = {
    createEvent: {
        handler: function(request, reply){
            if (!request.auth.isAuthenticated) {
                return reply.redirect('/');
            }

                var eventData = request.payload.name;

                eventService.createEvent(eventData, function(err, eventId){


                reply({
                    eventId: eventId,
                    message: ''
                }).code(eventId? 200 : 400);
            });

        }/*,
        validate: { 
            payload: { 
                name: Joi.string().min(1).required()
            }
        }*/
    },

    getEventData: {

        handler: function(request, reply){

            if (!request.auth.isAuthenticated) {
                return reply.redirect('/');
            }

            var eventId = request.query.id;
            
            eventService.getEvent(eventId, function(err, eventData){

                reply({
                    eventData: eventData,
                    message: ''
                }).code(eventData? 200 : 400);

            });


        }
    },
    
    deleteEvent: {

        handler: function(request, reply){

            if (!request.auth.isAuthenticated) {
                return reply.redirect('/');
            }

            var eventId = request.params.id;
            console.log("----------- id " + eventId)
            eventService.removeEvent(eventId, function(err, eventData){

                reply({
                    eventData: eventData,
                    message: ''
                }).code(eventData? 200 : 400);

            });


        }
    },

    getAllEvents : {
        handler: function(request, reply){
            if (!request.auth.isAuthenticated) {
                return reply.redirect('/');
            }

            eventService.getAllEvents(function(err, eventList){

                reply({
                    eventList: eventList,
                    message: ''
                }).code(eventList? 200 : 400);


            });

        },

    }
}