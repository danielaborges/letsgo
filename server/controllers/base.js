module.exports = {
    
    index: {

        handler: function(request, reply){
            reply.view('index');
        }
    },

    missing: {
        handler: function(request, reply){
            reply.view('404', {
                title: 'You found a missing page, but won the 404 error!'
            }).code(404);
        },
        app: {
            name: '404'
        }
    }
}
