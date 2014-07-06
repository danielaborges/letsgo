// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply.view('index', {
                title: 'Lets go'
            });
        },
        app: {
            name: 'index'
        }
    },
	getdata: {
        handler: function(request, reply){
			var id = request.query.id;
            reply('Superheroic id : ' + id);
        },
        app: {
            name: 'getdata'
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
