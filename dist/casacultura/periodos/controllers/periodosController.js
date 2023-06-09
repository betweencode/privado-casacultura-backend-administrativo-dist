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
exports.PeriodosController = void 0;
const Usuarios_1 = require("./../../../administracion/usuarios/models/Usuarios");
const constants_1 = require("./../../../autenticacion/contants/constants");
const common_1 = require("@nestjs/common");
const periodosServices_1 = require("../services/periodosServices");
const periodo_1 = require("../models/periodo");
const tallerPeriodoxpersona_1 = require("../models/tallerPeriodoxpersona");
let PeriodosController = class PeriodosController {
    constructor(periodoPrd) {
        this.periodoPrd = periodoPrd;
    }
    async getAll() {
        return await this.periodoPrd.getAll();
    }
    async getAllActivos() {
        return await this.periodoPrd.getAllactivos();
    }
    async guardar(request) {
        return await this.periodoPrd.guardar(request);
    }
    async guardarPersonaPeriodo(request) {
        return await this.periodoPrd.guardarDatosAlumnoTaller(request);
    }
    async guardarPersonaPeriodoArreglo(usuario, request) {
        return await this.periodoPrd.guardarDatosAlumnoTallerArreglo(usuario, request);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PeriodosController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("activos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PeriodosController.prototype, "getAllActivos", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [periodo_1.Periodos]),
    __metadata("design:returntype", Promise)
], PeriodosController.prototype, "guardar", null);
__decorate([
    (0, common_1.Post)("guardarTaller"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tallerPeriodoxpersona_1.TallerPeriodoxPersona]),
    __metadata("design:returntype", Promise)
], PeriodosController.prototype, "guardarPersonaPeriodo", null);
__decorate([
    (0, common_1.Post)("guardarTallerArreglo"),
    __param(0, (0, constants_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Usuarios_1.Usuarios, Array]),
    __metadata("design:returntype", Promise)
], PeriodosController.prototype, "guardarPersonaPeriodoArreglo", null);
PeriodosController = __decorate([
    (0, common_1.Controller)("periodos"),
    __metadata("design:paramtypes", [periodosServices_1.PeriodosServices])
], PeriodosController);
exports.PeriodosController = PeriodosController;
//# sourceMappingURL=periodosController.js.map