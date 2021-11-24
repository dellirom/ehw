import {UserGroupModel} from "../models/UserGroup";

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

        } catch (error) {
            await t.rollback();
        }
    }

}

export default UserGroup;