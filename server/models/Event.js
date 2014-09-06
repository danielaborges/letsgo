"use strict";

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Event', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },

        location: {
            type: DataTypes.STRING
        },
        hour: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
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
                        console.log('No event with this ID has been found.')
                    }
                    resultsCallback(err, results);  
                })
            },
            getAll: function (resultsCallback) {                  
                this.findAll().complete(function(err, events) {
                    resultsCallback(err, events);                   
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
