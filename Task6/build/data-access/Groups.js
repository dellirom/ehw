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
const Groups_1 = require("../models/Groups");
const Users_1 = require("../models/Users");
const logger_1 = __importDefault(require("../loaders/logger"));
class Groups {
    constructor() {
        this.Db = Groups_1.GroupsModel.connect();
        this.Model = Groups_1.GroupsModel.define();
        this.UserModel = Users_1.UsersModel.define();
        this.Model.belongsToMany(this.UserModel, {
            through: "UserGroup",
            as: "user",
            foreignKey: "GroupId",
        });
    }
    getData(params) {
        return __awaiter(this, arguments, void 0, function* () {
            try {
                return yield this.Model.findAll({
                    attributes: ['permission'],
                    raw: true,
                    include: [
                        {
                            model: this.UserModel,
                            as: "user",
                            attributes: ['login', 'age']
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
                return yield this.Model.findOne({
                    where: {
                        id: id
                    },
                    attributes: ['permission'],
                    raw: true,
                    include: [
                        {
                            model: this.UserModel,
                            as: "user",
                            attributes: ['login', 'age']
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
        return __awaiter(this, void 0, void 0, function* () {
            const t = yield this.Db.transaction();
            try {
                const data = yield this.Model.create(params, { transaction: t });
                yield t.commit();
                return data;
            }
            catch (error) {
                yield t.rollback();
                console.error(`Error: ${error.message}`);
            }
        });
    }
    updateData(id, params) {
        return __awaiter(this, arguments, void 0, function* () {
            try {
                return yield this.Model.update(params, {
                    where: {
                        id: id
                    },
                    returning: true,
                    plain: true
                });
            }
            catch (error) {
                logger_1.default.error(error.message, { 'method': `${this.constructor.name}.updateData`, 'arguments': arguments });
            }
        });
    }
    deleteData(id, params) {
        return __awaiter(this, arguments, void 0, function* () {
            try {
                return yield this.Model.destroy({
                    where: {
                        id: id
                    }
                });
            }
            catch (error) {
                logger_1.default.error(error.message, { 'method': `${this.constructor.name}.deleteData`, 'arguments': arguments });
            }
        });
    }
}
exports.default = Groups;
