import UserGroup from "../data-access/UserGroup";
import Logger from "../loaders/logger";

class UserGroupsService  {

    private UserGroup: any;

    constructor() {
        this.UserGroup =  new UserGroup();
    }

    async addData(params:object){
        try{
            const result = await this.UserGroup.addData(params);
            return result
                ? {'data': 'User added to group'}
                : {'error': 'Not added!'}
        } catch (error){
            Logger.error(this.constructor.name, {error: error})

        }
    }
}

export default UserGroupsService;