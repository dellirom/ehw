"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../data-access/users"));
class UsersService {
    constructor(data) {
        this.user = (0, users_1.default)();
        this.data = data;
    }
    getData() {
        return this.user.find(this.data);
    }
    addData() {
        return this.user.add(this.data);
    }
    updateData(id) {
        return this.user.update(id, this.data);
    }
    deleteData(id) {
        return this.user.delete(id, { 'isDeleted': true });
    }
}
exports.default = UsersService;
