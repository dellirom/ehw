import express, {NextFunction, Request, Response, Router} from "express";
import UsersService from "../../services/users";
import usersValidation from "../validation/users"
require('dotenv').config();

function usersController(router:Router){

    usersValidation(router);

    router.get('/users', (request:Request,response)=> {
        new UsersService(request.query).getData()
            .then((result:any) => {
                return response.status(200).json({'data': result});
            }).catch((error:any) => {
                return response.status(400).json({'error': error})
        });
    })

    router.post('/users', (request:Request, response:Response) => {
        const userData = new UsersService(request.body).addData();
        return response.status(200).json({'data': 'Created'});
    })

    router.put('/users/:id', (request:Request, response:Response) => {
        new UsersService(request.body).updateData(request.params.id)
            .then((result:any) => {
                return response.status(200).json({'data': 'Updated'});
            })
            .catch((error:any) => {
                return response.status(400).json({'error': `${error.message}`});
            })
    })

    router.delete('/users/:id', (request:Request,response:Response)=> {
        new UsersService(request.body).deleteData(request.params.id)
            .then((result:any) =>{
                return response.status(200).json({'data': 'Deleted'});
            })
            .catch((error:any) => {
                return response.status(400).json({'error': `${error}`});
            })
    })
}

module.exports = {usersController}