import express, {Response, Request, NextFunction} from "express";
import usersController from "./controllers/users";
import groupsController from "./controllers/groups";
import userToGroupController from "./controllers/userGroup";
import errorHandle from "../loaders/errorHandle";

function routerInit(app:any){

    app.use(express.json());

    userToGroupController(app);

    usersController(app);

    groupsController(app);

    errorHandle(app);
}

export default routerInit;