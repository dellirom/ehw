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
function crudRouter(router, service) {
    router
        .get('/', (request, response, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield service.getData(request.query);
            return response.status(200).json(result);
        }
        catch (e) {
            next(e);
        }
    }))
        .post('/', (request, response, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield service.addData(request.body);
            return response.status(200).json(result);
        }
        catch (e) {
            next(e);
        }
    }));
    router
        .get('/:id', (request, response, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield service.getDataOne(request.params.id, request.query);
            return response.status(200).json({ 'data': result });
        }
        catch (e) {
            next(e);
        }
    }))
        .put('/:id', (request, response, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield service.updateData(request.params.id, request.body);
            return response.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    }))
        .delete('/:id', (request, response, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield service.deleteData(request.params.id, request.body);
            return response.status(200).json(data);
        }
        catch (error) {
            next(error);
        }
    }));
}
exports.default = crudRouter;
