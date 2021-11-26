"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsModel = void 0;
const { DataTypes } = require('sequelize');
const { Model } = require('./Model');
class GroupModel extends Model {
    constructor() {
        const attributes = {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            permission: DataTypes.ARRAY(DataTypes.STRING),
        };
        super('Groups', 'Groups', attributes);
    }
}
exports.GroupsModel = new GroupModel();
