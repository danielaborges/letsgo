/**
* Dependencies.
*/
var requireDirectory = require('require-directory');

module.exports = function(server) {

    var controller = requireDirectory(module, './server/controllers');

    // Array of routes for Hapi
    var routeTable = [
        
        //AUTHENTICATION
       {   
            method: 'GET',
            path: '/authenticate/google',   //Google redirect URI
            config: controller.auth.googleauth
        },


        {
            method: ['GET', 'POST'],
            path: '/login',
            config: controller.auth.login
           
        },   

        {
            method: 'GET',
            path: '/logout',
            config: controller.auth.logout
        },   
        {
            method: ['GET', 'POST'],
            path: '/signup',
            config: controller.auth.signup
           
        },  
        
        
        //NORMAL ROUTES

        {
            method: 'GET',
            path: '/',
            config: controller.base.index
            
        },       
        {
            method: 'GET',
            path: '/getdata',
            config: controller.base.getdata
        },
        {
            method: 'POST',
            path: '/create/event',
            config: controller.events.event
        },     
        {
            method: 'GET',
            path: '/event/all',
            config: controller.events.getAllEvents
        },     
        
        
        
        
        // ASSETS, JS, CSS, ETC.
        {
            method: 'GET',
            path: '/partials/{path*}',
            config: controller.assets.partials
        },
        {
            method: 'GET',
            path: '/images/{path*}',
            config: controller.assets.images
        },
        {
            method: 'GET',
            path: '/css/{path*}',
            config: controller.assets.css
        },
        {
            method: 'GET',
            path: '/js/{path*}',
            config: controller.assets.js
        },
        {
            method: 'GET',
            path: '/bower_components/{path*}',
            config: controller.assets.bower
        }
    ];
    return routeTable;
}
