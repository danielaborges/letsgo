//user testing...
var users = [
    {
        "id": "administrator",
        "password": "admin"     
    }
]

var uuid = 1;       // Use seq instead of proper unique identifiers for demo only

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.

function getUserIfExists(account){

    for(var i in users){
        var user = users[i];       

        if(user.id === account.id)
            return user;
    }
    return false;
}


function addAccountToServerCache(request, reply, account){
    var sid = String(++uuid);
    request.server.app.cache.set(sid, { account: account }, 0, function (err) {

        if (err) {
            reply(err);
        }

        request.auth.session.set({ sid: sid });
        return reply.redirect('/');
    });
}

module.exports = {
    googleauth: {
        auth: 'google',
        handler: function(request, reply){

            //Google authorized this login

            //TODO:: add user to user list
            //if not exists, create

            //autorize fake account...
            var fakeAcc = getUserIfExists({"id": "administrator", "password": "admin"}); 
            addAccountToServerCache(request, reply, fakeAcc);

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

                if (!request.payload.username || !request.payload.password) {

                    message = 'Missing username or password';
                }
                else {

                    var userAcc = {
                        "id": request.payload.username,
                        "password": request.payload.password  
                    }  
                    account = getUserIfExists(userAcc);
                    if (!account ||
                        account.password !== request.payload.password) {

                        message = 'Invalid username or password';
                    }
                }
            }

            if (request.method === 'get' || message) {
                return reply.view('login');
            }

            addAccountToServerCache(request, reply, account);

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
            return reply.redirect('/login'); 
        }        
    },

    signup : {
        handler: function(request, reply){
            if (request.auth.isAuthenticated) {
                return reply.redirect('/');
            }

            var message = '';
            var account = null;

            if (request.method === 'post') {
                if (!request.payload.username || !request.payload.password) {
                    reply('Missing username or password');
                }
                else{

                    var userAcc = {
                            "id": request.payload.username,
                            "password": request.payload.password  
                    }                
                    //TODO:: validate input data...
                    
                    users.push(userAcc);
                    console.log("--- List of users updated ---")
                    console.log(users)
                    addAccountToServerCache(request, reply, userAcc);
                }
            }
            if (request.method === 'get' || message) {
                return reply.view('signup');
            }

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

}
