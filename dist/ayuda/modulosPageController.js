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
exports.ModulosPageController = void 0;
const modulosServices_1 = require("./../catalogos/modulos/services/modulosServices");
const common_1 = require("@nestjs/common");
let ModulosPageController = class ModulosPageController {
    constructor(modulosPrd) {
        this.modulosPrd = modulosPrd;
    }
    async modulosPage() {
        const modulos = await this.modulosPrd.getAll();
        return { mensaje: "Catálogos módulos", modulos: modulos };
    }
    async guardarModulo(request) {
        const modulo = Object.assign({}, request.body);
        await this.modulosPrd.guardar(modulo);
    }
    async eliminarModulo(request) {
        const modulo = Object.assign({}, request);
        await this.modulosPrd.eliminar(modulo);
    }
};
__decorate([
    (0, common_1.Get)("pagemodulos"),
    (0, common_1.Render)("pagemodulos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModulosPageController.prototype, "modulosPage", null);
__decorate([
    (0, common_1.Post)("pagemodulos/guardarmodulo"),
    (0, common_1.Redirect)('/vistainicial/pagemodulos', 302),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModulosPageController.prototype, "guardarModulo", null);
__decorate([
    (0, common_1.Get)("pagemodulos/eliminarmodulo"),
    (0, common_1.Redirect)("/vistainicial/pagemodulos", 302),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModulosPageController.prototype, "eliminarModulo", null);
ModulosPageController = __decorate([
    (0, common_1.Controller)("vistainicial"),
    __metadata("design:paramtypes", [modulosServices_1.ModulosServices])
], ModulosPageController);
exports.ModulosPageController = ModulosPageController;
//# sourceMappingURL=modulosPageController.js.map