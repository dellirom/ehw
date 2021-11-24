import UserGroup from "../data-access/UserGroup";


class UserGroupsService  {

    private UserGroup: any;

    constructor() {
        this.UserGroup =  new UserGroup();
    }

    async addData(params:object){
      return this.UserGroup.addData(params);
    }
}

export default UserGroupsService;