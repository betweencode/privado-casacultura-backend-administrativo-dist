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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const Usuarios_1 = require("../models/Usuarios");
const UsuariosServices_1 = require("../services/UsuariosServices");
let UsuariosController = class UsuariosController {
    constructor(usuariosPrd) {
        this.usuariosPrd = usuariosPrd;
    }
    async getUsuarios() {
        return await this.usuariosPrd.getAll();
    }
    async guardar(usuario) {
        return await this.usuariosPrd.guardar(usuario);
    }
    async eliminarUsuarios(usuario) {
        return await this.usuariosPrd.eliminarMasivo(usuario);
    }
    async modificar(id, usuario) {
        return await this.usuariosPrd.modificar(id, usuario);
    }
    async eliminar(id) {
        return await this.usuariosPrd.eliminar(id);
    }
};
__decorate([
    (0, common_1.Get)("usuarios"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "getUsuarios", null);
__decorate([
    (0, common_1.Post)("usuarios"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Usuarios_1.Usuarios]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "guardar", null);
__decorate([
    (0, common_1.Post)("usuarios/eliminar"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "eliminarUsuarios", null);
__decorate([
    (0, common_1.Put)("usuarios/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Usuarios_1.Usuarios]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)("usuarios/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "eliminar", null);
UsuariosController = __decorate([
    (0, common_1.Controller)("administracion"),
    __metadata("design:paramtypes", [UsuariosServices_1.UsuariosSevices])
], UsuariosController);
exports.UsuariosController = UsuariosController;
//# sourceMappingURL=usuariosController.js.map