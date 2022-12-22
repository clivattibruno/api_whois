const Sequelize = require('sequelize');
const db = require('./db');

//Define tabela
const Clientes = db.define('clientes', {
    //atributos
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    owner: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING,
    },
    asnumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ipv4: {
        type: Sequelize.TEXT
    },
    ipv6: {
        type: Sequelize.STRING
    },
    aspath: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pathignore: {
        type: Sequelize.STRING
    }
});

Clientes.sync({ alter: true });

module.exports = Clientes;