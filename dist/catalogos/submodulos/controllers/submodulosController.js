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
exports.SubmodulosController = void 0;
const common_1 = require("@nestjs/common");
const submodulosServices_1 = require("../services/submodulosServices");
let SubmodulosController = class SubmodulosController {
    constructor(submodulosPrd) {
        this.submodulosPrd = submodulosPrd;
    }
    async consultarAll() {
        return await this.submodulosPrd.getall();
    }
    async consultarById(id) {
        return await this.submodulosPrd.getById(id);
    }
};
__decorate([
    (0, common_1.Get)("submodulos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubmodulosController.prototype, "consultarAll", null);
__decorate([
    (0, common_1.Get)("submodulos/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubmodulosController.prototype, "consultarById", null);
SubmodulosController = __decorate([
    (0, common_1.Controller)("catalogos"),
    __metadata("design:paramtypes", [submodulosServices_1.SubmodulosServices])
], SubmodulosController);
exports.SubmodulosController = SubmodulosController;
//# sourceMappingURL=submodulosController.js.map