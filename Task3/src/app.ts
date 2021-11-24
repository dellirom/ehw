import express, {request, response} from "express";
const {usersController} = require('./routers/controllers/users');
require('dotenv').config();

const app = express();

const usersApiRouter = express.Router();

app.use(express.json());

app.use('/api', usersApiRouter);

usersController(usersApiRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`App listening at http://localhost:${process.env.APP_PORT}`)
})
