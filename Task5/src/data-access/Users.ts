import {UsersModel}  from "../models/Users";
import {GroupsModel} from "../models/Groups";
import Logger from "../loaders/logger";

class Users {

    private readonly UserModel:any;

    private readonly GroupModel:any;

    private Db:any

    constructor() {

        this.Db = UsersModel.connect();

        this.UserModel  =  UsersModel.define();

        this.GroupModel = GroupsModel.define();

        this.UserModel.belongsToMany(this.GroupModel, {
            through: "UserGroup",
            as: "group",
            foreignKey: "UserId",
        });
    }

    async getData(params:object){
        try {
            return  await  this.UserModel.findAll({
                attributes: ['login', 'password', 'age'],
                raw: true,
                where: {
                    isDeleted: false
                },
                include: [
                    {
                        model: this.GroupModel,
                        as: "group",
                        attributes: ['permission']
                    },
                ],
            });
        } catch (error: any) {
            Logger.error(error.message, {'method': `${this.constructor.name}.getData`, 'arguments': arguments})
        }
    }

    async getDataOne(id:string, params:object){
        try {
            return  await  this.UserModel.findAll({
                attributes: ['login', 'password', 'age'],
                raw: true,
                where: {
                    id: id
                },
                include: [
                    {
                        model: this.GroupModel,
                        as: "group",
                        attributes: ['permission']
                    },
                ],
            });
        } catch (error: any) {
            Logger.error(error.message, {'method': `${this.constructor.name}.getDataOne`, 'arguments': arguments});
        }
    }

    async addData(params:object){
        const t = await this.Db.transaction();
        try {
            const data = await this.UserModel.create( params, { transaction: t });
            await t.commit();
            return data;
        } catch (error: any) {
            await t.rollback();
            Logger.error(error.message, {'method': `${this.constructor.name}.addData`, 'arguments': arguments});
        }
    }

    async updateData(id:string, params:object){
        try {
            const data = await this.UserModel.update(params, {
                where: {
                    id: id
                },
                returning: true,
                plain: true
            });
            return data;
        } catch (error: any) {
            Logger.error(error.message, {'method': `${this.constructor.name}.updateData`, 'arguments': arguments});
        }
    }

    async deleteData(id:string, params:object){
        try {
            const result = await this.UserModel.update({'isDeleted': true},{
                where: {
                    id: id
                },
                returning: true,
                // plain: true
            })
            return result[1][0] ? true : false;
        } catch (error: any) {
            Logger.error(error.message, {'method': `${this.constructor.name}.deleteData`, 'arguments': arguments});
        }
    }
}

export default Users;