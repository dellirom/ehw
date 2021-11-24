import UsersModel  from "../data-access/users";

interface UsersServiceInterface {
    getData:object;
}
class UsersService implements UsersServiceInterface{

    protected data:object;

    private user:any;

    constructor(data:object) {
        this.user = UsersModel();
        this.data = data;
    }
     getData(){
        return this.user.find(this.data);
    }
    addData(){
        return this.user.add(this.data);
    }
    updateData(id:string){
        return this.user.update(id,this.data);
    }
    deleteData(id:string){
        return this.user.delete(id,{'isDeleted': true});
    }
}
export default UsersService;