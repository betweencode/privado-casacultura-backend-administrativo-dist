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
exports.VersionxmoduloPageController = void 0;
const VersionesServices_1 = require("./../catalogos/versiones/services/VersionesServices");
const PermisosServices_1 = require("./../catalogos/permisos/services/PermisosServices");
const submodulosServices_1 = require("./../catalogos/submodulos/services/submodulosServices");
const modulosServices_1 = require("./../catalogos/modulos/services/modulosServices");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let VersionxmoduloPageController = class VersionxmoduloPageController {
    constructor(modulosPrd, submodulosPrd, permisosPrd, versionesPrd) {
        this.modulosPrd = modulosPrd;
        this.submodulosPrd = submodulosPrd;
        this.permisosPrd = permisosPrd;
        this.versionesPrd = versionesPrd;
    }
    async renderizar(request) {
        const modulos = await this.modulosPrd.getAll();
        const submodulos = await this.submodulosPrd.getall();
        const permisos = await this.permisosPrd.consultarTodos();
        const relacion = await this.versionesPrd.obtenerRelacioncorrectaVersionesById(request.id);
        return { mensaje: "Relacionar", nombre: request.nombre, id: request.id, modulos, submodulos, permisos, relacion };
    }
    async guardarRelaciones(req) {
        const { idmodulo, idsubmodulo, idpermiso, idversion } = req.body;
        await this.versionesPrd.insertarRelacionVersiones({ idmodulo, idsubmodulo, idpermiso, idversion });
        return { url: "versionxsubmodulopage?id=" + idversion };
    }
    async eliminarRelaciones(req) {
        const { idversion } = req;
        await this.versionesPrd.eliminarRelacion(idversion);
    }
};
__decorate([
    (0, common_1.Get)("versionxsubmodulopage"),
    (0, common_1.Render)("pagerelationsmodulosxversion"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VersionxmoduloPageController.prototype, "renderizar", null);
__decorate([
    (0, common_1.Post)("guardarrelacion"),
    (0, common_1.Redirect)("/vistainicial/versionxsubmodulopage", 302),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VersionxmoduloPageController.prototype, "guardarRelaciones", null);
__decorate([
    (0, common_1.Get)("eliminarVersiones"),
    (0, common_1.Redirect)("/vistainicial/versiones", 302),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VersionxmoduloPageController.prototype, "eliminarRelaciones", null);
VersionxmoduloPageController = __decorate([
    (0, common_2.Controller)("vistainicial"),
    __metadata("design:paramtypes", [modulosServices_1.ModulosServices, submodulosServices_1.SubmodulosServices,
        PermisosServices_1.PermisosServices, VersionesServices_1.VersionesServices])
], VersionxmoduloPageController);
exports.VersionxmoduloPageController = VersionxmoduloPageController;
//# sourceMappingURL=versionxmoduloPageController.js.map