//user testing...
var users = {
    daniela: {
        id: 'daniela',
        password: 'admin', //TODO:: bycript must be used.. 
        name: 'John Doe'
    },
    pedro: {
        id: 'pedro',
        password: 'admin', //TODO:: bycript must be used.. 
        name: 'John Doe'
    },
};

var uuid = 1;       // Use seq instead of proper unique identifiers for demo only

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    googleauth: {
        auth: 'google',
        handler: function(request, reply){
            
            //TODO:: add user to user list
            
            //Google authorized this login
            var sid = String(++uuid);
            var account = users['daniela']; //test, cause data is not saved and users not added
            request.server.app.cache.set(sid, { account: account }, 0, function (err) {

                if (err) {
                    reply(err);
                }

                request.auth.session.set({ sid: sid });
                return reply.redirect('/');
            });
           
        }
    },

    login: {

        handler: function(request, reply){

            if (request.auth.isAuthenticated) {
                return reply.redirect('/');
            }

            var message = '';
            var account = null;

            if (request.method === 'post') {

                if (!request.payload.username ||
                    !request.payload.password) {

                    message = 'Missing username or password';
                }
                else {
                    account = users[request.payload.username];
                    if (!account ||
                        account.password !== request.payload.password) {

                        message = 'Invalid username or password';
                    }
                }
            }

            if (request.method === 'get' ||
                message) {
                return reply.view('login');
            }

            var sid = String(++uuid);
            request.server.app.cache.set(sid, { account: account }, 0, function (err) {

                if (err) {
                    reply(err);
                }

                request.auth.session.set({ sid: sid });
                return reply.redirect('/');
            });

        },

        auth: {
            mode: 'try'
        },
        plugins: {
            'hapi-auth-cookie': {
                redirectTo: false
            }
        }

    },

    logout : {
        handler: function(request, reply){
            request.auth.session.clear();
            return reply.redirect('/login'); //reply.redirect('/');
        }        
    },


    index: {

        handler: function(request, reply){
            // Render the view with the custom greeting
            /*   reply.view('index', {
                    title: 'Lets go'
                });*/
            reply.view('testindex');
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
