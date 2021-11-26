import {NextFunction, Request, Response, Router} from "express";
import userGroup from "../../services/UserGroup";
import Logger from "../../loaders/logger";
require('dotenv').config();

function userToGroupController(app:any){

    const router = Router();

    const service = new userGroup();

    app.use('/api/user-to-group', router);

    router
        .post('/', async (request:Request, response:Response, next:NextFunction) => {
            try{
                const result = await service.addData(request.body);
                return response.status(200).json(result);
            }catch (e) {
                Logger.error( service.constructor.name, {'method': 'addData', 'args': request.body, e})
                next(e)
            }
        })
}

export default userToGroupController;
