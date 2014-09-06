var Sequelize = require('sequelize');


// initialize database connection
var sequelize = new Sequelize('test', 
							  'letsgouser', 'letsgo123#'); 

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
    m.Task.belongsTo(m.User);
	m.User.belongsTo(m.Task);
})(module.exports);

// export connection
module.exports.sequelize = sequelize;