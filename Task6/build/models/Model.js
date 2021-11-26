"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../loaders/db"));
class Model {
    constructor(modelName, tableName, attributes) {
        try {
            db_1.default.authenticate().then();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        this._attr = attributes;
        this.db = db_1.default.define(modelName, attributes, {
            tableName: tableName
        });
    }
    connect() {
        return db_1.default;
    }
    define() {
        return this.db;
    }
    allFields() {
        const array = [];
        for (let index in this._attr) {
            if (this._attr.hasOwnProperty(index)) {
                array.push(index);
            }
        }
        return array;
    }
}
module.exports = { Model };
