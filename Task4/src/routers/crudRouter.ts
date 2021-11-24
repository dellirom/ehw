import {NextFunction, Request, Response, Router} from "express";
import ICrudService from "../iterfaces/crudserv";
import {Logger} from "winston"

function crudRouter(router:Router, service:ICrudService){

    router
        .get('/', async (request:Request,response,next)=> {
            try{
                const data = await service.getData(request.query);
                return response.status(200).json(data);
            } catch (e){
                next(e);
            }
        })
        .post('/', async (request:Request, response:Response, next:NextFunction) => {
            try{
                const userData = await service.addData(request.body);
                return response.status(200).json({'data': 'Created'});
            }catch (e) {
                next(e)
            }
        })

    router
        .get('/:id', async (request:Request,response:Response,next:NextFunction)=> {
            try{
                const result = await service.getDataOne(request.params.id, request.query)
                return response.status(200).json({'data': result});
            }catch(e){
                next(e);
            }

        })
        .put('/:id', async (request:Request, response:Response,next:NextFunction) => {
            try{
                const data = await service.updateData(request.params.id, request.body);
                return response.status(200).json({'data': 'Updated'});
            } catch (error){
                next(error);
            }
        })
        .delete('/:id', async  (request:Request,response:Response,next)=> {
            try{
                const data  = await  service.deleteData(request.params.id, request.body )
                return response.status(200).json(data);
            } catch(error){
                next(error)
            }
        })
}

export default crudRouter;