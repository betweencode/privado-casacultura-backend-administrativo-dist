"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const periodo_1 = require("./casacultura/periodos/models/periodo");
const taller_1 = require("./casacultura/taller/models/taller");
const casacultura_module_1 = require("./casacultura/casacultura.module");
const Versionesxmodulos_1 = require("./catalogos/versiones/models/Versionesxmodulos");
const Versiones_1 = require("./catalogos/versiones/models/Versiones");
const versiones_module_1 = require("./catalogos/versiones/versiones.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const administracion_module_1 = require("./administracion/administracion.module");
const Usuarios_1 = require("./administracion/usuarios/models/Usuarios");
const autenticacion_module_1 = require("./autenticacion/autenticacion.module");
const catalogos_module_1 = require("./catalogos/catalogos.module");
const Modulos_1 = require("./catalogos/modulos/models/Modulos");
const Permisos_1 = require("./catalogos/permisos/models/Permisos");
const Roles_1 = require("./catalogos/roles/models/Roles");
const RolesPermisos_1 = require("./catalogos/roles/models/RolesPermisos");
const Submodulos_1 = require("./catalogos/submodulos/models/Submodulos");
const Empresas_1 = require("./administracion/empresa/models/Empresas");
const ayuda_module_1 = require("./ayuda/ayuda.module");
const categoriaTaller_1 = require("./casacultura/categoriataller/models/categoriaTaller");
const personas_1 = require("./casacultura/personas/models/personas");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: '192.168.0.1',
                port: 5432,
                username: 'usuarioprincipal',
                password: '12345',
                database: 'casaculturadb',
                entities: [Permisos_1.Permisos, Modulos_1.Modulos, Submodulos_1.Submodulos, Roles_1.Roles, RolesPermisos_1.RolesxPermisos, Usuarios_1.Usuarios, Empresas_1.Empresas, Versiones_1.Versiones, Versionesxmodulos_1.Versionesxmodulos, personas_1.Personas,
                    categoriaTaller_1.CategoriaTaller, taller_1.Taller, periodo_1.Periodos],
                synchronize: true,
            }),
            catalogos_module_1.CatalogosModule, administracion_module_1.AdministracionModule, autenticacion_module_1.AutenticacionModule, ayuda_module_1.AyudaModule, versiones_module_1.VersionesModule, casacultura_module_1.CasaculturaModule],
        controllers: [],
        exports: [],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map