import express from "express";
import usersController from "./controllers/users";
import groupsController from "./controllers/groups";
import userToGroupController from "./controllers/userGroup";


function routerInit(app:any){

    app.use(express.json());

    userToGroupController(app);

    usersController(app);

    groupsController(app);

}

export default routerInit;