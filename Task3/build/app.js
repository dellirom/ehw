"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { usersController } = require('./routers/controllers/users');
require('dotenv').config();
const app = (0, express_1.default)();
const usersApiRouter = express_1.default.Router();
app.use(express_1.default.json());
app.use('/api', usersApiRouter);
usersController(usersApiRouter);
app.listen(process.env.APP_PORT, () => {
    console.log(`App listening at http://localhost:${process.env.APP_PORT}`);
});
