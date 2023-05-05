"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermisosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const permisos_controller_1 = require("./controllers/permisos.controller");
const Permisos_1 = require("./models/Permisos");
const PermisosServices_1 = require("./services/PermisosServices");
let PermisosModule = class PermisosModule {
};
PermisosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Permisos_1.Permisos])],
        controllers: [permisos_controller_1.PermisosController],
        providers: [PermisosServices_1.PermisosServices],
        exports: [PermisosServices_1.PermisosServices, typeorm_1.TypeOrmModule]
    })
], PermisosModule);
exports.PermisosModule = PermisosModule;
//# sourceMappingURL=permisos.module.js.map