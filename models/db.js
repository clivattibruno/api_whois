const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(function() {
        console.log("Conexão com banco OK")
    }).catch(function() {
        console.log("Erro de conexão")
    });

module.exports = sequelize;