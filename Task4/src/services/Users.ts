import ICrudService from "../iterfaces/crudserv";
import Users from "../data-access/Users";

class UsersService implements ICrudService{

    protected user:any;

    constructor() {

        this.user = new Users();

    }

    getData(params:object){
        return  this.user.getData(params);
    }

    getDataOne(id:string, params:object){
        return this.user.getDataOne(id, params);
    }

    addData(params:object){
        return this.user.addData(params);
    }

    updateData(id:string, params:object){
        return this.user.updateData(id, params);
    }

    deleteData(id:string, params:object){
        return this.user(id, params);
    }
}

export default UsersService;