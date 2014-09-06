/**
* Dependencies.
*/
var Hapi = require('hapi'),
    config = require('./server/config/settings'),
    hapiauth = require('hapi-auth-cookie'),
    bell = require('bell');

var cacheExpireTime = 3 * 24 * 60 * 60 * 1000;

// Create a server with a host, port, and options
var server = Hapi.createServer('0.0.0.0', config.port, config.hapi.options);

// Bootstrap Hapi Server Plugins, passes the server object to the plugins
require('./server/config/plugins')(server);

// Register bell with the server


// Declare an authentication strategy using the bell scheme
// with the name of the provider, cookie encryption password,
// and the OAuth client credentials.
server.pack.register(bell, function (err) {
    server.auth.strategy('google', 'bell', {
        provider: 'google',
        password: 'password',   // FIXME:: what is this for?
        clientId: '36695556021-g52f21iaqg8fblgq9unjjjspulr4jaqk',
        clientSecret: 'teCFIgwF-3SC8Wo-WgSgmtHY',
        isSecure: false     // Terrible idea but required if not using HTTPS
    });
});

var cache = server.cache('sessions', { expiresIn: cacheExpireTime });
server.app.cache = cache;

server.pack.register(hapiauth, function (err) {
    server.auth.strategy('session', 'cookie', true, {
        password: 'secret',
        cookie: 'sid-letsGo',
        redirectTo: '/login',
        isSecure: false,
        validateFunc: function (session, callback) {

            cache.get(session.sid, function (err, cached) {

                if (err) {
                    return callback(err, false);
                }

                if (!cached) {
                    return callback(null, false);
                }

                return callback(null, true, cached.item.account)
            })
        }
    });
});
// Require the routes and pass the server object.
var routes = require('./server/config/routes')(server);
// Add the server routes
server.route(routes);

//Start the server
server.start(function() {
    //Log to the console the host and port info
    console.log('Server started at: ' + server.info.uri);    
});


