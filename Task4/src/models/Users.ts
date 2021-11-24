const {DataTypes} = require('sequelize');
const {Model} = require('./Model');

 class UserModel extends Model{

     constructor() {

         const attributes:object = {
             id: {
                 type: DataTypes.INTEGER,
                 primaryKey: true,
                 autoIncrement: true
             },
             login: DataTypes.STRING,
             password: DataTypes.STRING,
             age: DataTypes.INTEGER,
             isDeleted: DataTypes.BOOLEAN
         }

         super('Users', 'Users', attributes)

     }
}

export const UsersModel = new UserModel


