"use strict";

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Task', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
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
                        console.log('No task with this ID has been found.')
                    }
                    resultsCallback(err, results);  
                })
            }
        },

        instanceMethods: {
            init: function (resultsCallback) {
                //TODO
            }
        }
    });
}
