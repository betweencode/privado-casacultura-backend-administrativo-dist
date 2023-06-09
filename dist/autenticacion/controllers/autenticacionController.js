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
exports.AutenticacionController = void 0;
const UsuariosServices_1 = require("./../../administracion/usuarios/services/UsuariosServices");
const Usuarios_1 = require("./../../administracion/usuarios/models/Usuarios");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const autenticacionServices_1 = require("../services/autenticacionServices");
const constants_1 = require("../contants/constants");
let AutenticacionController = class AutenticacionController {
    constructor(authServices, usuariosPrd) {
        this.authServices = authServices;
        this.usuariosPrd = usuariosPrd;
    }
    login(req) {
        return this.authServices.login(req.user);
    }
    async registrar(usuario) {
        return await this.usuariosPrd.registrarUsuario(usuario);
        ;
    }
};
__decorate([
    (0, constants_1.Public)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutenticacionController.prototype, "login", null);
__decorate([
    (0, constants_1.Public)(),
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Usuarios_1.Usuarios]),
    __metadata("design:returntype", Promise)
], AutenticacionController.prototype, "registrar", null);
AutenticacionController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [autenticacionServices_1.AutenticacionServices, UsuariosServices_1.UsuariosSevices])
], AutenticacionController);
exports.AutenticacionController = AutenticacionController;
//# sourceMappingURL=autenticacionController.js.map