const {DataTypes} = require('sequelize');
const {ModelDb} = require('../models/model-db');
const {indexOfObjectToArray} =  require('../libs/helper')

function UsersModel() {

    const attributes:object = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: DataTypes.TEXT,
        password: DataTypes.TEXT,
        age: DataTypes.INTEGER,
        isDeleted: DataTypes.BOOLEAN
    }

    const db = new ModelDb('users', 'users', attributes).connect();

    const fields:Array<string> = indexOfObjectToArray(attributes);

    return {
        find: async function (params: object) {
            try {
                return  await  db.findAll({
                    attributes: fields,
                    raw: true,
                    where: {
                        isDeleted: false
                    }
                });
            } catch (error: any) {
                console.error(`Error: ${error.message}`)
            }
        },
        add: async function (params: object) {
            try {
                return await db.create(params);
            } catch (error: any) {
                console.error(`Error: ${error.message}`)
            }
        },
        update: async function (id:string, params:object)  {
            try {
                return await db.update(params, {
                    where: {
                        id: id
                    },
                    returning: true,
                    plain: true
                });
            } catch (error: any) {
                console.error(`Error: ${error.message}`)
            }
        },
        delete: async function (id:string, params:object){
            try {
                return await db.softDelete(params,{
                    where: {
                        id: id
                    },
                    returning: true,
                    plain: true
                })
            } catch (error: any) {
                console.error(`Error: ${error.message}`)
            }
        }
    }
}

export default UsersModel;