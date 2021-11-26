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
const Users_1 = require("../models/Users");
const Groups_1 = require("../models/Groups");
const logger_1 = __importDefault(require("../loaders/logger"));
class Users {
    constructor() {
        this.Db = Users_1.UsersModel.connect();
        this.UserModel = Users_1.UsersModel.define();
        this.GroupModel = Groups_1.GroupsModel.define();
        this.UserModel.belongsToMany(this.GroupModel, {
            through: "UserGroup",
            as: "group",
            foreignKey: "UserId",
        });
    }
    getData(params) {
        return __awaiter(this, arguments, void 0, function* () {
            try {
                return yield this.UserModel.findAll({
                    attributes: ['login', 'password', 'age'],
                    raw: true,
                    where: {
                        isDeleted: false
                    },
                    include: [
                        {
                            model: this.GroupModel,
                            as: "group",
                            attributes: ['permission']
                        },
                    ],
                });
            }
            catch (error) {
                logger_1.default.error(error.message, { 'method': `${this.constructor.name}.getData`, 'arguments': arguments });
            }
        });
    }
    getDataOne(id, params) {
        return __awaiter(this, arguments, void 0, function* () {
            try {
                return yield this.UserModel.findAll({
                    attributes: ['login', 'password', 'age'],
                    raw: true,
                    where: {
                        id: id
                    },
                    include: [
                        {
                            model: this.GroupModel,
                            as: "group",
                            attributes: ['permission']
                        },
                    ],
                });
            }
            catch (error) {
                logger_1.default.error(error.message, { 'method': `${this.constructor.name}.getDataOne`, 'arguments': arguments });
            }
        });
    }
    addData(params) {
        return __awaiter(this, arguments, void 0, function* () {
            const t = yield this.Db.transaction();
            try {
                const data = yield this.UserModel.create(params, { transaction: t });
                yield t.commit();
                return data;
            }
            catch (error) {
                yield t.rollback();
                logger_1.default.error(error.message, { 'method': `${this.constructor.name}.addData`, 'arguments': arguments });
            }
        });
    }
    updateData(id, params) {
        return __awaiter(this, arguments, void 0, function* () {
            try {
                const data = yield this.UserModel.update(params, {
                    where: {
                        id: id
                    },
                    returning: true,
                    plain: true
                });
                return data;
            }
            catch (error) {
                logger_1.default.error(error.message, { 'method': `${this.constructor.name}.updateData`, 'arguments': arguments });
            }
        });
    }
    deleteData(id, params) {
        return __awaiter(this, arguments, void 0, function* () {
            try {
                const result = yield this.UserModel.update({ 'isDeleted': true }, {
                    where: {
                        id: id
                    },
                    returning: true,
                    // plain: true
                });
                return result[1][0] ? true : false;
            }
            catch (error) {
                logger_1.default.error(error.message, { 'method': `${this.constructor.name}.deleteData`, 'arguments': arguments });
            }
        });
    }
}
exports.default = Users;
