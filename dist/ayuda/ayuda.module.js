"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AyudaModule = void 0;
const usuarios_module_1 = require("./../administracion/usuarios/usuarios.module");
const clientesadministrarpageController_1 = require("./clientesadministrarpageController");
const submodulosPageController_1 = require("./submodulosPageController");
const catalogos_module_1 = require("./../catalogos/catalogos.module");
const permisosPageController_1 = require("./permisosPageController");
const empresas_module_1 = require("./../administracion/empresa/empresas.module");
const common_1 = require("@nestjs/common");
const ayudaController_1 = require("./ayudaController");
const modulosPageController_1 = require("./modulosPageController");
const versionxmoduloPageController_1 = require("./versionxmoduloPageController");
let AyudaModule = class AyudaModule {
};
AyudaModule = __decorate([
    (0, common_1.Module)({
        imports: [empresas_module_1.EmpresasModule, catalogos_module_1.CatalogosModule, usuarios_module_1.UsuariosModule],
        controllers: [ayudaController_1.AyudaController, modulosPageController_1.ModulosPageController, submodulosPageController_1.SubmodulosPageController, permisosPageController_1.PermisosPageController, versionxmoduloPageController_1.VersionxmoduloPageController,
            clientesadministrarpageController_1.ClientesAdministrarPageController]
    })
], AyudaModule);
exports.AyudaModule = AyudaModule;
//# sourceMappingURL=ayuda.module.js.map