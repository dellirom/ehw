const {DataTypes} = require('sequelize');
const {Model} = require('./Model');

 class GroupModel extends Model{
    constructor() {
        const attributes:object = {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            permission: DataTypes.ARRAY(DataTypes.STRING),
        }
        super('Groups', 'Groups', attributes)
    }
}

export const GroupsModel = new GroupModel()