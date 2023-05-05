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
exports.AyudaController = void 0;
const UsuariosServices_1 = require("./../administracion/usuarios/services/UsuariosServices");
const Versiones_1 = require("./../catalogos/versiones/models/Versiones");
const VersionesServices_1 = require("./../catalogos/versiones/services/VersionesServices");
const EmpresasServices_1 = require("./../administracion/empresa/services/EmpresasServices");
const common_1 = require("@nestjs/common");
let AyudaController = class AyudaController {
    constructor(empresaprd, versionesPrd, usuariosPrd) {
        this.empresaprd = empresaprd;
        this.versionesPrd = versionesPrd;
        this.usuariosPrd = usuariosPrd;
    }
    async root() {
        return { mensaje: "Carga inicial de catálogos" };
    }
    async versiones() {
        const listaVersiones = await this.versionesPrd.getVersionesClientes();
        return { mensaje: 'Versiones para empresas', versiones: listaVersiones };
    }
    async clientes() {
        const listaVersiones = await this.versionesPrd.getVersionesClientes();
        const listaEmpresa = await this.empresaprd.getAll();
        const listaFinal = [];
        for (const item of listaEmpresa) {
            const usuarios = await this.usuariosPrd.getUsuarioByEmpresa(item.idEmpresa);
            listaFinal.push({ empresa: item, usuarios: usuarios });
        }
        return { mensaje: 'Empresas iniciales', empresas: listaFinal, listaVersiones: listaVersiones };
    }
    async modulos() {
        return { mensaje: 'Ingresar módulos del todo el sistema' };
    }
    async guardarEmpresaInicial(request) {
        const nombre = request.body.nombre;
        const razonsocial = request.body.razonsocial;
        const idVersion = request.body.version;
        const esCliente = request.body.esCliente;
        const version = [];
        if (Array.isArray(idVersion)) {
            for (const ids of idVersion) {
                version.push(await this.versionesPrd.getVersionById(ids));
            }
        }
        else {
            version.push(await this.versionesPrd.getVersionById(idVersion));
        }
        await this.empresaprd.guardarEmpresaInicial({ nombre, razonsocial, esCliente, version: version });
    }
    async guardarVersionInicialCliente(request) {
        const { nombre, nombrecorto } = request.body;
        const version = new Versiones_1.Versiones();
        version.esActivo = true;
        version.esCliente = true;
        version.nombre = nombre;
        version.nombrecorto = nombrecorto;
        await this.versionesPrd.insertVersion(version);
    }
    async eliminarEmpresaInicial(request) {
        const idempresa = request.idempresa;
        await this.empresaprd.eliminarEmpresaInicial(idempresa);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('inicial'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AyudaController.prototype, "root", null);
__decorate([
    (0, common_1.Get)("versiones"),
    (0, common_1.Render)('versiones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AyudaController.prototype, "versiones", null);
__decorate([
    (0, common_1.Get)("clientes"),
    (0, common_1.Render)('clientes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AyudaController.prototype, "clientes", null);
__decorate([
    (0, common_1.Get)("modulos"),
    (0, common_1.Render)('modulos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AyudaController.prototype, "modulos", null);
__decorate([
    (0, common_1.Post)("guardarEmpresa"),
    (0, common_1.Redirect)('/vistainicial/clientes', 302),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AyudaController.prototype, "guardarEmpresaInicial", null);
__decorate([
    (0, common_1.Post)("guardarVersiones"),
    (0, common_1.Redirect)('/vistainicial/versiones', 302),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AyudaController.prototype, "guardarVersionInicialCliente", null);
__decorate([
    (0, common_1.Get)("eliminarEmpresa"),
    (0, common_1.Redirect)('/vistainicial/clientes', 302),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AyudaController.prototype, "eliminarEmpresaInicial", null);
AyudaController = __decorate([
    (0, common_1.Controller)("vistainicial"),
    __metadata("design:paramtypes", [EmpresasServices_1.EmpresasServices, VersionesServices_1.VersionesServices,
        UsuariosServices_1.UsuariosSevices])
], AyudaController);
exports.AyudaController = AyudaController;
//# sourceMappingURL=ayudaController.js.map