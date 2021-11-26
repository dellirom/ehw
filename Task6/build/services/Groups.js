"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Groups_1 = __importDefault(require("../data-access/Groups"));
class GroupsService {
    constructor() {
        this.group = new Groups_1.default();
    }
    getData(params) {
        return this.group.getData(params);
    }
    getDataOne(id, params) {
        return this.group.getDataOne(id, params);
    }
    addData(params) {
        return this.group.addData(params);
    }
    updateData(id, params) {
        return this.group.updateData(id, params);
    }
    deleteData(id, params) {
        return this.group.deleteData(id, params);
    }
}
exports.default = GroupsService;
