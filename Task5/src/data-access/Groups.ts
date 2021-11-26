import {GroupsModel} from "../models/Groups";
import {UsersModel} from "../models/Users";
import Logger from "../loaders/logger";

class Groups {

    private readonly Model:any;

    private readonly UserModel:any

    private Db:any

    constructor() {

        this.Db = GroupsModel.connect();

        this.Model =  GroupsModel.define()

        this.UserModel  = UsersModel.define();

        this.Model.belongsToMany(this.UserModel, {
            through: "UserGroup",
            as: "user",
            foreignKey: "GroupId",
        });
    }
    async getData(params:object){
        try {
            return  await  this.Model.findAll({
                attributes: ['permission'],
                raw: true,
                include: [
                    {
                        model: this.UserModel,
                        as: "user",
                        attributes: ['login', 'age']
                    },
                ],
            });
        } catch (error: any) {
            Logger.error(error.message, {'method': `${this.constructor.name}.getData`, 'arguments': arguments});

        }
    }
    async getDataOne(id:string, params:object){
        try {
            return  await  this.Model.findOne({
                where:{
                    id: id
                },
                attributes: ['permission'],
                raw: true,
                include: [
                    {
                        model: this.UserModel,
                        as: "user",
                        attributes: ['login', 'age']
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
            const data = await this.Model.create( params, { transaction: t });

            await t.commit();

            return data;

        } catch (error: any) {
            await t.rollback();
            console.error(`Error: ${error.message}`)
        }
    }
    async updateData(id:string, params:object){
        try {
            return await this.Model.update(params, {
                where: {
                    id: id
                },
                returning: true,
                plain: true
            });
        } catch (error: any) {
            Logger.error(error.message, {'method': `${this.constructor.name}.updateData`, 'arguments': arguments});

        }
    }
    async deleteData(id:string, params:object){
        try {
            return await this.Model.destroy({
                where: {
                    id: id
                }
            })
        } catch (error: any) {
            Logger.error(error.message, {'method': `${this.constructor.name}.deleteData`, 'arguments': arguments});
        }
    }
}
export default Groups;