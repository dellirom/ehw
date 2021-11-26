"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./loaders/logger"));
const routerInit_1 = __importDefault(require("./routers/routerInit"));
require('dotenv').config();
const app = (0, express_1.default)();
(0, routerInit_1.default)(app);
app.listen(process.env.APP_PORT, () => {
    console.log(`
     ###############################################
     🛡️  Server listening at http://localhost:${process.env.APP_PORT} 🛡️
     ###############################################
     `);
}).on('error', error => {
    logger_1.default.info(error);
    process.exit(1);
});
