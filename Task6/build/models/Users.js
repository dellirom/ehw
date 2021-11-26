"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
const { DataTypes } = require('sequelize');
const { Model } = require('./Model');
class UserModel extends Model {
    constructor() {
        const attributes = {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            login: DataTypes.STRING,
            password: DataTypes.STRING,
            age: DataTypes.INTEGER,
            isDeleted: DataTypes.BOOLEAN
        };
        super('Users', 'Users', attributes);
    }
}
exports.UsersModel = new UserModel;
