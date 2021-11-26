import ICrudService from "../iterfaces/crudserv";
import Users from "../data-access/Users";

class UsersService implements ICrudService{

    protected user:any;

    constructor() {

        this.user = new Users();

    }

    getData(params:object){
        return   this.user.getData(params);
    }

    getDataOne(id:string, params:object){
        return this.user.getDataOne(id, params);
    }

    async addData(params:object){
        const result = await this.user.addData(params);
        return result
            ? {'data': 'Created'}
            : {'error': 'Not created'}
    }

    async updateData(id:string, params:object){
        const result = await this.user.updateData(id, params);
        return result
            ? {'data': 'Updated'}
            : {'error': 'Not updated'}

    }

    async deleteData(id:string, params:object){
        const result = await this.user.deleteData(id, params);
        return result
            ? {'data': 'Deleted'}
            : {'error': 'Not deleted'}
    }
}

export default UsersService;