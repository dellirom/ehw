import {NextFunction, Request, Response} from "express";
import Logger from "./logger"

function errorHandle(app:any){

    process.on('uncaughtException', (error) => {
        Logger.error(error.message);
    })

    process.on('unhandledRejection', (error) => {
        Logger.error(error);
    });

    app.use((error:Error, request:Request,response:Response,next:NextFunction) => {
        Logger.info({message: error.message, error: error.stack})
        response.status(500).json({"Error": "Internal Server Error"})
        next();
    })
}

export default errorHandle;