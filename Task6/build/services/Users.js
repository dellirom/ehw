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
const Users_1 = __importDefault(require("../data-access/Users"));
class UsersService {
    constructor() {
        this.user = new Users_1.default();
    }
    getData(params) {
        return this.user.getData(params);
    }
    getDataOne(id, params) {
        return this.user.getDataOne(id, params);
    }
    addData(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.user.addData(params);
            return result
                ? { 'data': 'Created' }
                : { 'error': 'Not created' };
        });
    }
    updateData(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.user.updateData(id, params);
            return result
                ? { 'data': 'Updated' }
                : { 'error': 'Not updated' };
        });
    }
    deleteData(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.user.deleteData(id, params);
            return result
                ? { 'data': 'Deleted' }
                : { 'error': 'Not deleted' };
        });
    }
}
exports.default = UsersService;
