"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Users_1 = __importDefault(require("../../services/Users"));
const users_1 = __importDefault(require("../validation/users"));
const crudRouter_1 = __importDefault(require("../crudRouter"));
require('dotenv').config();
function usersController(app) {
    const router = express_1.default.Router();
    app.use('/api/users', router);
    (0, users_1.default)(router);
    (0, crudRouter_1.default)(router, new Users_1.default());
}
exports.default = usersController;
