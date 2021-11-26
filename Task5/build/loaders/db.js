"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const { Sequelize } = require("sequelize");
function sequelize() {
    try {
        return new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
            host: process.env.DB_HOST,
            dialect: 'postgres',
        });
    }
    catch (e) {
        throw new Error();
    }
}
exports.default = sequelize();
