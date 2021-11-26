"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupModel = void 0;
const Groups_1 = require("./Groups");
const Users_1 = require("./Users");
const { Model } = require('./Model');
const { DataTypes } = require('sequelize');
class UsersGroupsModel extends Model {
    constructor() {
        const attributes = {
            UserId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: Users_1.UsersModel.define(),
                    key: 'id'
                }
            },
            GroupId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Groups_1.GroupsModel.define(),
                    key: 'id'
                }
            }
        };
        super('UserGroup', 'UserGroup', attributes);
    }
}
exports.UserGroupModel = new UsersGroupsModel;
