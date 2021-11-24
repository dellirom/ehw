import express from "express";
import routerInit from "./routers/routerInit";
require('dotenv').config();

const app = express();

routerInit(app)

app.listen(process.env.APP_PORT, () => {
    console.log(`
     ##################################################################
     🛡️  Server listening at http://localhost:${process.env.APP_PORT} 🛡️
     ##################################################################
     `)
})



