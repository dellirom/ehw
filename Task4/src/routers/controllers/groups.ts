import  {Router} from "express";
import crudRouter from "../crudRouter";
import GroupsService from "../../services/Groups";
import usersValidation from "../validation/users";

function groupsController(app:any){

    const router = Router();

    app.use('/api/groups', router);

    crudRouter(router, new GroupsService());

}

export default groupsController;
