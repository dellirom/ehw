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
const UserGroup_1 = require("../models/UserGroup");
const logger_1 = __importDefault(require("../loaders/logger"));
class UserGroup {
    constructor() {
        this.Model = UserGroup_1.UserGroupModel.define();
        this.Db = UserGroup_1.UserGroupModel.connect();
    }
    addData(params) {
        return __awaiter(this, arguments, void 0, function* () {
            const t = yield this.Db.transaction();
            try {
                const user = yield this.Model.create(params, { transaction: t });
                yield t.commit();
                return user;
            }
            catch (error) {
                yield t.rollback();
                logger_1.default.error(error.message, { 'method': `${this.constructor.name}.addData`, 'arguments': arguments });
            }
        });
    }
}
exports.default = UserGroup;
