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
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const { ModelDb } = require('../models/model-db');
const { indexOfObjectToArray } = require('../libs/helper');
function UsersModel() {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: DataTypes.TEXT,
        password: DataTypes.TEXT,
        age: DataTypes.INTEGER,
        isDeleted: DataTypes.BOOLEAN
    };
    const db = new ModelDb('users', 'users', attributes).connect();
    const fields = indexOfObjectToArray(attributes);
    return {
        find: function (params) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield db.findAll({
                        attributes: fields,
                        raw: true,
                        where: {
                            isDeleted: false
                        }
                    });
                }
                catch (error) {
                    console.error(`Error: ${error.message}`);
                }
            });
        },
        add: function (params) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield db.create(params);
                }
                catch (error) {
                    console.error(`Error: ${error.message}`);
                }
            });
        },
        update: function (id, params) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield db.update(params, {
                        where: {
                            id: id
                        },
                        returning: true,
                        plain: true
                    });
                }
                catch (error) {
                    console.error(`Error: ${error.message}`);
                }
            });
        },
        delete: function (id, params) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield db.softDelete(params, {
                        where: {
                            id: id
                        },
                        returning: true,
                        plain: true
                    });
                }
                catch (error) {
                    console.error(`Error: ${error.message}`);
                }
            });
        }
    };
}
exports.default = UsersModel;
