const Sequelize = require('sequelize')
const sequelize = require('../config/db');
const User = require('./User')


class Favorite extends Sequelize.Model { }

User.init({
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    movie: {
        type: Sequelize.STRING,
        allowNull: false

    }

}, {
        sequelize,
        modelName: 'users'
    });




module.exports = Favorite;