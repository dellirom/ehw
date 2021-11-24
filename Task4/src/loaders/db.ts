require('dotenv').config();
const {Sequelize} = require("sequelize");

export default new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

