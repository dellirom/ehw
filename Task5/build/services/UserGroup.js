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
const UserGroup_1 = __importDefault(require("../data-access/UserGroup"));
const logger_1 = __importDefault(require("../loaders/logger"));
class UserGroupsService {
    constructor() {
        this.UserGroup = new UserGroup_1.default();
    }
    addData(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.UserGroup.addData(params);
                return result
                    ? { 'data': 'User added to group' }
                    : { 'error': 'Not added!' };
            }
            catch (error) {
                logger_1.default.error(this.constructor.name, { error: error });
            }
        });
    }
}
exports.default = UserGroupsService;
