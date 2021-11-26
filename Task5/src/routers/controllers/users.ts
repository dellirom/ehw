import express, {Router} from "express";
import UsersService from "../../services/Users";
import usersValidation from "../validation/users"
import crudRouter from "../crudRouter";
require('dotenv').config();

function usersController(app:any){

    const router = express.Router();

    app.use('/api/users', router);

    usersValidation(router);

    crudRouter(router, new UsersService());
}

export default usersController;
