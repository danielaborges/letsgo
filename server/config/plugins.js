module.exports = function(server) {
    // Options to pass into the 'Good' plugin
    /* not working..
    var goodOptions = {
        subscribers: {
            console: ['ops', 'request', 'log', 'error'],
            'tmp/logs/': ['ops', 'request', 'log', 'error']
        }
    };
    */
    // The Assets Configuration Options
    var assetOptions = require('../../assets');

    server.pack.register([
        /* not working..
        {
            plugin: require("good"),
            options: goodOptions
        },
        */
        {
            plugin: require("hapi-assets"),
            options: assetOptions
        },
        {
            plugin: require("hapi-named-routes")
        },
        {
            plugin: require("hapi-cache-buster")
        }
    ], function(err) {
        if (err) throw err;
    });
};