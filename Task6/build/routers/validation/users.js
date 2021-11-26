"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
function usersValidation(router) {
    const createUserSchema = joi_1.default.object({
        id: joi_1.default.string(),
        login: joi_1.default.string().required().alphanum(),
        password: joi_1.default.string().required(),
        age: joi_1.default.number().required().min(3).max(130),
        isDeleted: joi_1.default.boolean()
    });
    const querySchema = joi_1.default.object({
        limit: joi_1.default.number().max(20)
    });
    const paramSchema = joi_1.default.object({
        id: joi_1.default.number()
    });
    router.use((request, response, next) => {
        const { error } = querySchema.validate(request.query);
        (error) ? next(error) : next();
    });
    /**
     * Create and update body request validation
     */
    router.use((request, response, next) => {
        if (request.method === 'POST' || request.method === 'PUT') {
            const { error } = createUserSchema.validate(request.body);
            if (error) {
                next(error);
                return;
            }
        }
        next();
    });
    router.use((error, request, response, next) => {
        if (error) {
            return response.status(400).json({ 'message': `Error: ${error.message}` });
        }
    });
}
exports.default = usersValidation;
