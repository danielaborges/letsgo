var Sequelize = require('sequelize');


// initialize database connection
var sequelize = new Sequelize('test', 
                              'alvazil', '#Zpx1234', //'letsgo', 'something'
                              {logging: true, 
                               pool: {maxConnections:5, maxIdleTime:30}
                              }); 

// load models
var models = [
    'User',
    'Event',
    'Task'
];
models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '../../../models/' + model);
});

// describe relationships
(function(m) {
    m.User.hasMany(m.Event);
    m.Event.hasMany(m.User); 

    m.Event.hasMany(m.Task);
    m.Task.belongsTo(m.Event);

    //an user is responsible by a task
    m.Task.hasOne(m.User);
    m.User.belongsTo(m.Task);

    
    //create tables
    sequelize
   // .sync({ force: true })
     .sync()
    .complete(function(err) {
        if (!!err) {
            console.log('An error occurred while creating the table:', err)
        } else {
            console.log('It worked!')
        }
    })


})(module.exports);

// export connection
module.exports.sequelize = sequelize;