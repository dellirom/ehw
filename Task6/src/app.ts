import express from "express";
import Logger from './loaders/logger'
import config from './config';
import routerInit from "./routers/routerInit";

const app = express();

routerInit(app)



app.listen(process.env.APP_PORT, () => {
    console.log(`
     ###############################################
     🛡️  Server listening at http://localhost:${config.PORT} 🛡️
     ###############################################
     `)
}).on('error', error => {
    Logger.info(error);
    process.exit(1);
})



