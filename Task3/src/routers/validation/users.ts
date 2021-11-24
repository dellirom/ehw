import {NextFunction, Request, Response, Router} from "express";
import Joi from "joi";

function usersValidation(router:Router):void{

    const createUserSchema = Joi.object({
        id: Joi.string(),
        login: Joi.string().required().alphanum(),
        password: Joi.string().required(),
        age: Joi.number().required().min(3).max(130),
        isDeleted: Joi.boolean()
    });

    const querySchema = Joi.object({
        limit: Joi.number().max(20)
    });

    const paramSchema = Joi.object({
        id: Joi.number()
    });
    router.use((request:Request, response:Response, next:NextFunction) => {
        const {error} = querySchema.validate(request.query);
        (error) ?  next(error) : next();
    });

    /**
     * Create and update body request validation
     */
    router.use((request:Request, response:Response, next:NextFunction)=> {
        if (request.method === 'POST' || request.method === 'PUT'){
            const { error } = createUserSchema.validate(request.body);
            if (error){
                next(error);
                return;
            }
        }
        next();
    });

    router.use((error:any ,request:Request,response:Response,next:NextFunction) => {
        if(error){
            return response.status(400).json({'message': `Error: ${error.message}`})
        }
    });
}

export default  usersValidation;
