import {GroupsModel} from "../models/Groups";
import {UsersModel} from "../models/Users";

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
            console.error(`Error: ${error.message}`)
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
            console.error(`Error: ${error.message}`)
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
            console.error(`Error: ${error.message}`)
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
            console.error(`Error: ${error.message}, ${error.error}`)
        }
    }
}

export default Groups;