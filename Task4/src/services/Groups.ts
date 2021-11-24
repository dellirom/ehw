import ICrudService from "../iterfaces/crudserv";
import Groups from "../data-access/Groups";


class GroupsService implements ICrudService{

    protected group;

    constructor() {
        this.group = new Groups();
    }

    getData(params:object){
        return this.group.getData(params);
    }

    getDataOne(id:string, params:object){
        return this.group.getDataOne(id,params);
    }

    addData(params:object){
        return this.group.addData(params);
    }

    updateData(id:string, params:object){
        return this.group.updateData(id, params);
    }

    deleteData(id:string, params:object){
        return this.group.deleteData(id, params);
    }
}
export default GroupsService;