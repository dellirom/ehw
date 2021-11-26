import {UserGroupModel} from "../models/UserGroup";
import Logger from "../loaders/logger";

class UserGroup {

    private Model: any;

    private Db: any;

    constructor() {

        this.Model =  UserGroupModel.define()

        this.Db = UserGroupModel.connect();

    }

    async addData(params:object){
        const t = await this.Db.transaction();
        try {
            const user = await this.Model.create( params, { transaction: t });
            await t.commit();
            return user;
        } catch (error:any) {
            await t.rollback();
            Logger.error(error.message, {'method': `${this.constructor.name}.addData`, 'arguments': arguments});
        }
    }

}

export default UserGroup;