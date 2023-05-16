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
const common_1 = require("@nestjs/common");
const periodosServices_1 = require("../services/periodosServices");
const periodo_1 = require("../models/periodo");
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
PeriodosController = __decorate([
    (0, common_1.Controller)("periodos"),
    __metadata("design:paramtypes", [periodosServices_1.PeriodosServices])
], PeriodosController);
exports.PeriodosController = PeriodosController;
//# sourceMappingURL=periodosController.js.map