import {UsersModel}  from "../models/Users";
import {GroupsModel} from "../models/Groups";

class Users {

    private readonly UserModel:any;

    private readonly GroupModel:any;

    constructor() {

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
            console.error(`Error: ${error.message} `)
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
            console.error(`Error: ${error.message}`)
        }
    }

    async addData(params:object){
        try {
            const t = await this.UserModel.transaction();

            try {
                const data = await this.UserModel.create( params, { transaction: t });

                await t.commit();

                return data;

            } catch (error: any) {
                await t.rollback();
                console.error(`Error: ${error.message}`)
            }
        } catch (error: any) {
            console.error(`Error: ${error.message}`)
        }
    }

    async updateData(id:string, params:object){
        try {
            return await this.UserModel.update(params, {
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
            return await this.UserModel.update(params,{
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

export default Users;