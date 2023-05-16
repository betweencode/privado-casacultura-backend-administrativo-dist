"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulosController = void 0;
const constants_1 = require("./../../../autenticacion/contants/constants");
const common_1 = require("@nestjs/common");
const modulosServices_1 = require("../services/modulosServices");
let ModulosController = class ModulosController {
    constructor(modulosPrd) {
        this.modulosPrd = modulosPrd;
    }
    async getAllModulos() {
        return await this.modulosPrd.getAll();
    }
    async obtenerporid(id) {
        return this.modulosPrd.getById(id);
    }
};
__decorate([
    (0, constants_1.Public)(),
    (0, common_1.Get)("modulos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModulosController.prototype, "getAllModulos", null);
__decorate([
    (0, common_1.Get)("modulos/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ModulosController.prototype, "obtenerporid", null);
ModulosController = __decorate([
    (0, common_1.Controller)("catalogos"),
    __metadata("design:paramtypes", [modulosServices_1.ModulosServices])
], ModulosController);
exports.ModulosController = ModulosController;
//# sourceMappingURL=modulosController.js.map