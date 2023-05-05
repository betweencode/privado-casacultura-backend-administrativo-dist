"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const roles_module_1 = require("../catalogos/roles/roles.module");
const usuarios_module_1 = require("../administracion/usuarios/usuarios.module");
const constants_1 = require("./contants/constants");
const autenticacionController_1 = require("./controllers/autenticacionController");
const autenticacionServices_1 = require("./services/autenticacionServices");
const local_strategy_1 = require("./services/local.strategy");
let AutenticacionModule = class AutenticacionModule {
};
AutenticacionModule = __decorate([
    (0, common_1.Module)({
        controllers: [autenticacionController_1.AutenticacionController],
        imports: [passport_1.PassportModule, usuarios_module_1.UsuariosModule, jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }), roles_module_1.RolesModule],
        providers: [autenticacionServices_1.AutenticacionServices, local_strategy_1.LocalStrategy]
    })
], AutenticacionModule);
exports.AutenticacionModule = AutenticacionModule;
//# sourceMappingURL=autenticacion.module.js.map