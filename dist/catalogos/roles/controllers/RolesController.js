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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const Roles_1 = require("../models/Roles");
const roles_service_1 = require("../services/roles.service");
let RolesController = class RolesController {
    constructor(rolesPrd) {
        this.rolesPrd = rolesPrd;
    }
    async getAll() {
        return await this.rolesPrd.getAll();
    }
    async getById(idRol) {
        return await this.rolesPrd.getById(idRol);
    }
    async insertRoles(rol) {
        return await this.rolesPrd.guardar(rol);
    }
    async updateRoles(idRol, body) {
        return await this.rolesPrd.actualizar(idRol, body);
    }
    async delete(idRol, idEmpresa) {
        return await this.rolesPrd.eliminarRol(idEmpresa, idRol);
    }
    async eliminarMasivo(roles) {
        return await this.rolesPrd.eliminarMasivo(roles);
    }
};
__decorate([
    (0, common_1.Get)("roles"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("roles/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)("roles"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Roles_1.Roles]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "insertRoles", null);
__decorate([
    (0, common_1.Put)("roles/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "updateRoles", null);
__decorate([
    (0, common_1.Delete)("roles/:id/empresa/:idempresa"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("idempreesa", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)("roles/eliminar"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "eliminarMasivo", null);
RolesController = __decorate([
    (0, common_1.Controller)("catalogos"),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=RolesController.js.map