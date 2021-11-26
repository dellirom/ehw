"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
function errorHandle(app) {
    process.on('uncaughtException', (error) => {
        logger_1.default.error(error.message);
    });
    process.on('unhandledRejection', (error) => {
        logger_1.default.error(error);
    });
    app.use((error, request, response, next) => {
        logger_1.default.info({ message: error.message, error: error.stack });
        response.status(500).json({ "Error": "Internal Server Error" });
        next();
    });
}
exports.default = errorHandle;
