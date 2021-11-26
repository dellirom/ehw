"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserGroup_1 = __importDefault(require("../../services/UserGroup"));
const logger_1 = __importDefault(require("../../loaders/logger"));
require('dotenv').config();
function userToGroupController(app) {
    const router = (0, express_1.Router)();
    const service = new UserGroup_1.default();
    app.use('/api/user-to-group', router);
    router
        .post('/', (request, response, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield service.addData(request.body);
            return response.status(200).json(result);
        }
        catch (e) {
            logger_1.default.error(service.constructor.name, { 'method': 'addData', 'args': request.body, e });
            next(e);
        }
    }));
}
exports.default = userToGroupController;
