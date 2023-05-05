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
exports.PermisosController = void 0;
const common_1 = require("@nestjs/common");
const Permisos_1 = require("../models/Permisos");
const PermisosServices_1 = require("../services/PermisosServices");
let PermisosController = class PermisosController {
    constructor(permisosPrd) {
        this.permisosPrd = permisosPrd;
    }
    async consultaAll() {
        return await this.permisosPrd.consultarTodos();
    }
    async consultarById(id) {
        return await this.permisosPrd.consultarById(id);
    }
    async guardar(permisos) {
        return await this.permisosPrd.guardar(permisos);
    }
    async modificar(id, permisos) {
        return await this.permisosPrd.modificar(id, permisos);
    }
};
__decorate([
    (0, common_1.Get)("permisos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PermisosController.prototype, "consultaAll", null);
__decorate([
    (0, common_1.Get)("permisos/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PermisosController.prototype, "consultarById", null);
__decorate([
    (0, common_1.Post)("permisos"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Permisos_1.Permisos]),
    __metadata("design:returntype", Promise)
], PermisosController.prototype, "guardar", null);
__decorate([
    (0, common_1.Put)("permisos/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Permisos_1.Permisos]),
    __metadata("design:returntype", Promise)
], PermisosController.prototype, "modificar", null);
PermisosController = __decorate([
    (0, common_1.Controller)('catalogos'),
    __metadata("design:paramtypes", [PermisosServices_1.PermisosServices])
], PermisosController);
exports.PermisosController = PermisosController;
//# sourceMappingURL=permisos.controller.js.map