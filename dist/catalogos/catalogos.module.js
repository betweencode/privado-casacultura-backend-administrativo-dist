"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogosModule = void 0;
const common_1 = require("@nestjs/common");
const modulos_module_1 = require("./modulos/modulos.module");
const permisos_module_1 = require("./permisos/permisos.module");
const roles_module_1 = require("./roles/roles.module");
const submodulos_module_1 = require("./submodulos/submodulos.module");
const versiones_module_1 = require("./versiones/versiones.module");
let CatalogosModule = class CatalogosModule {
};
CatalogosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            roles_module_1.RolesModule,
            permisos_module_1.PermisosModule,
            submodulos_module_1.SubmodulosModule,
            modulos_module_1.ModulosModule,
            versiones_module_1.VersionesModule
        ],
        exports: [
            permisos_module_1.PermisosModule,
            submodulos_module_1.SubmodulosModule,
            modulos_module_1.ModulosModule,
            versiones_module_1.VersionesModule,
            roles_module_1.RolesModule
        ]
    })
], CatalogosModule);
exports.CatalogosModule = CatalogosModule;
//# sourceMappingURL=catalogos.module.js.map