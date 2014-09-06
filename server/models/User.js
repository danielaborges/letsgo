"use strict";

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
       
        password: { //TODO use bycript on save
            type: DataTypes.STRING
        },
       

    }, {
        classMethods: {
            findById: function (id, resultsCallback) {                  

                this
                .find({ where: {id: id} })
                .complete(function(err, results) {
                    if (err) {
                        console.log('An error occurred while searching for id', err)   
                    } else if (!results) {
                        console.log('No user with this ID has been found.')
                    }
                    resultsCallback(err, results);  
                })
            },
            getAll: function (resultsCallback) {                  
				this.findAll().complete(function(err, users) {
					resultsCallback(err, users);                   
				})
			},
        },

        instanceMethods: {
            init: function (resultsCallback) {
                //TODO
            }
        }
    });
}
