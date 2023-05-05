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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionServices = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const roles_service_1 = require("../../catalogos/roles/services/roles.service");
const UsuariosServices_1 = require("../../administracion/usuarios/services/UsuariosServices");
let AutenticacionServices = class AutenticacionServices {
    constructor(usuariosPrd, jwtService, rolesPrd) {
        this.usuariosPrd = usuariosPrd;
        this.jwtService = jwtService;
        this.rolesPrd = rolesPrd;
    }
    async validateUser(correo, pass) {
        const user = await this.usuariosPrd.getUsuarioByEmail(correo);
        console.log("USUARIO", user);
        if (user && user.password === pass) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(user) {
        const rol = await this.rolesPrd.getById(user.rol.id);
        const { permisosxsubmodulos } = rol, cargar = __rest(rol, ["permisosxsubmodulos"]);
        const payload = { correo: user.correo, nombre: user.nombre, rol: cargar };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
AutenticacionServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [UsuariosServices_1.UsuariosSevices, jwt_1.JwtService, roles_service_1.RolesService])
], AutenticacionServices);
exports.AutenticacionServices = AutenticacionServices;
//# sourceMappingURL=autenticacionServices.js.map