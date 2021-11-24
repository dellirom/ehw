"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../../services/users"));
const users_2 = __importDefault(require("../validation/users"));
require('dotenv').config();
function usersController(router) {
    (0, users_2.default)(router);
    router.get('/users', (request, response) => {
        new users_1.default(request.query).getData()
            .then((result) => {
            return response.status(200).json({ 'data': result });
        }).catch((error) => {
            return response.status(400).json({ 'error': error });
        });
    });
    router.post('/users', (request, response) => {
        const userData = new users_1.default(request.body).addData();
        return response.status(200).json({ 'data': 'Created' });
    });
    router.put('/users/:id', (request, response) => {
        new users_1.default(request.body).updateData(request.params.id)
            .then((result) => {
            return response.status(200).json({ 'data': 'Updated' });
        })
            .catch((error) => {
            return response.status(400).json({ 'error': `${error.message}` });
        });
    });
    router.delete('/users/:id', (request, response) => {
        new users_1.default(request.body).deleteData(request.params.id)
            .then((result) => {
            return response.status(200).json({ 'data': 'Deleted' });
        })
            .catch((error) => {
            return response.status(400).json({ 'error': `${error}` });
        });
    });
}
module.exports = { usersController };
