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
exports.PermisosPageController = void 0;
const common_1 = require("@nestjs/common");
const PermisosServices_1 = require("./../catalogos/permisos/services/PermisosServices");
let PermisosPageController = class PermisosPageController {
    constructor(permisosPrd) {
        this.permisosPrd = permisosPrd;
    }
    async submodulosPage() {
        const permisos = await this.permisosPrd.consultarTodos();
        return { mensaje: "Catálogos permisos", permisos: permisos };
    }
    async guardarModulo(request) {
        const permiso = Object.assign({}, request.body);
        await this.permisosPrd.guardar(permiso);
    }
    async eliminarModulo(request) {
        const permisos = Object.assign({}, request);
        await this.permisosPrd.eliminar(permisos);
    }
};
__decorate([
    (0, common_1.Get)("pagepermisos"),
    (0, common_1.Render)("pagepermisos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PermisosPageController.prototype, "submodulosPage", null);
__decorate([
    (0, common_1.Post)("pagepermisos/guardarpermisos"),
    (0, common_1.Redirect)('/vistainicial/pagepermisos', 302),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PermisosPageController.prototype, "guardarModulo", null);
__decorate([
    (0, common_1.Get)("pagepermisos/eliminarpermisos"),
    (0, common_1.Redirect)("/vistainicial/pagepermisos", 302),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PermisosPageController.prototype, "eliminarModulo", null);
PermisosPageController = __decorate([
    (0, common_1.Controller)("vistainicial"),
    __metadata("design:paramtypes", [PermisosServices_1.PermisosServices])
], PermisosPageController);
exports.PermisosPageController = PermisosPageController;
//# sourceMappingURL=permisosPageController.js.map