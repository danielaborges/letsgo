module.exports = {
    
    index: {

        handler: function(request, reply){

        //    reply.view('testindex');
            reply.view('index');
        }
    },
    getdata: {

        handler: function(request, reply){
            var id = request.query.id;
            reply('Superheroic id : ' + id);
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
