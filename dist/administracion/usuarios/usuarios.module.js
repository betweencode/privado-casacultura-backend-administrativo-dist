"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosModule = void 0;
const roles_module_1 = require("./../../catalogos/roles/roles.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuariosController_1 = require("./controllers/usuariosController");
const Usuarios_1 = require("./models/Usuarios");
const UsuariosServices_1 = require("./services/UsuariosServices");
let UsuariosModule = class UsuariosModule {
};
UsuariosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Usuarios_1.Usuarios]), roles_module_1.RolesModule],
        controllers: [usuariosController_1.UsuariosController],
        providers: [UsuariosServices_1.UsuariosSevices],
        exports: [typeorm_1.TypeOrmModule, UsuariosServices_1.UsuariosSevices]
    })
], UsuariosModule);
exports.UsuariosModule = UsuariosModule;
//# sourceMappingURL=usuarios.module.js.map