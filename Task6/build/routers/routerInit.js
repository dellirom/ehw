"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./controllers/users"));
const groups_1 = __importDefault(require("./controllers/groups"));
const userGroup_1 = __importDefault(require("./controllers/userGroup"));
const errorHandle_1 = __importDefault(require("../loaders/errorHandle"));
function routerInit(app) {
    app.use(express_1.default.json());
    (0, userGroup_1.default)(app);
    (0, users_1.default)(app);
    (0, groups_1.default)(app);
    (0, errorHandle_1.default)(app);
}
exports.default = routerInit;
