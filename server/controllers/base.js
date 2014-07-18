// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    googleauth: {
        auth: 'google',
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply("GOOGLE auth with Bell DONE!");
        }
    },
    index: {
      //  auth: 'google',
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply.view('index', {
                title: 'Lets go'
            });
        }
    },
	getdata: {
     //   auth: 'google',
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
