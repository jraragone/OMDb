const Sequelize = require('sequelize')
const sequelize = require('../config/db');

const crypto = require('crypto')


class User extends Sequelize.Model { }

User.init({
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false

    },
    salt: {
        type: Sequelize.STRING
    }
}, {
        sequelize,
        modelName: 'users'
    });


User.beforeCreate((user) => {
    user.salt = crypto.randomBytes(20).toString('hex');

    user.password = crypto.createHmac('sha1', user.salt).update(user.password).digest('hex')
})


User.prototype.validPassword = function (password) {
    const newPassword = crypto.createHmac('sha1', this.salt).update(password).digest('hex')
    console.log('PASWORDDDDDDDS', newPassword, 'otra', this.password)
    return newPassword === this.password;
}

module.exports = User;