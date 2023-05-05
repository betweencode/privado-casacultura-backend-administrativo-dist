"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresasModule = void 0;
const catalogos_module_1 = require("./../../catalogos/catalogos.module");
const common_1 = require("@nestjs/common");
const Empresas_1 = require("./models/Empresas");
const typeorm_1 = require("@nestjs/typeorm");
const empresasController_1 = require("./controllers/empresasController");
const EmpresasServices_1 = require("./services/EmpresasServices");
let EmpresasModule = class EmpresasModule {
};
EmpresasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Empresas_1.Empresas]), catalogos_module_1.CatalogosModule],
        controllers: [empresasController_1.EmpresasController],
        providers: [EmpresasServices_1.EmpresasServices],
        exports: [typeorm_1.TypeOrmModule, EmpresasServices_1.EmpresasServices]
    })
], EmpresasModule);
exports.EmpresasModule = EmpresasModule;
//# sourceMappingURL=empresas.module.js.map