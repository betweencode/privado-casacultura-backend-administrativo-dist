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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresasController = void 0;
const common_1 = require("@nestjs/common");
const EmpresasServices_1 = require("../services/EmpresasServices");
let EmpresasController = class EmpresasController {
    constructor(empresasPrd) {
        this.empresasPrd = empresasPrd;
    }
    async obtenertodasEmpresas() {
        return await this.empresasPrd.getAll();
    }
};
__decorate([
    (0, common_1.Get)("empresas"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmpresasController.prototype, "obtenertodasEmpresas", null);
EmpresasController = __decorate([
    (0, common_1.Controller)("administracion"),
    __metadata("design:paramtypes", [EmpresasServices_1.EmpresasServices])
], EmpresasController);
exports.EmpresasController = EmpresasController;
//# sourceMappingURL=empresasController.js.map