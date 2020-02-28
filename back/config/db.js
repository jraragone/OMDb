const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/OMDB', {
    loggin: false,
})

module.exports=db