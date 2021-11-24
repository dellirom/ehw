import {GroupsModel} from "./Groups";
import {UsersModel} from "./Users";
const {Model} = require('./Model');
const {DataTypes} = require('sequelize');

class UsersGroupsModel  extends Model{

    constructor() {
        const attributes: object = {
            UserId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: UsersModel.define(),
                    key: 'id'
                }
            },
            GroupId: {
                type: DataTypes.INTEGER,
                references: {
                    model: GroupsModel.define(),
                    key: 'id'
                }
            }
        }
        super('UserGroup', 'UserGroup', attributes);
    }
}

export const  UserGroupModel =  new UsersGroupsModel
