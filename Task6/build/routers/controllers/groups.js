"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crudRouter_1 = __importDefault(require("../crudRouter"));
const Groups_1 = __importDefault(require("../../services/Groups"));
function groupsController(app) {
    const router = (0, express_1.Router)();
    app.use('/api/groups', router);
    (0, crudRouter_1.default)(router, new Groups_1.default());
}
exports.default = groupsController;
