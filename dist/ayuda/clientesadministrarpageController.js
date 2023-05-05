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
exports.ClientesAdministrarPageController = void 0;
const UsuariosServices_1 = require("./../administracion/usuarios/services/UsuariosServices");
const EmpresasServices_1 = require("./../administracion/empresa/services/EmpresasServices");
const Empresas_1 = require("./../administracion/empresa/models/Empresas");
const Roles_1 = require("./../catalogos/roles/models/Roles");
const roles_service_1 = require("./../catalogos/roles/services/roles.service");
const common_1 = require("@nestjs/common");
let ClientesAdministrarPageController = class ClientesAdministrarPageController {
    constructor(rolesPrd, empresasPrd, usuariosPrd) {
        this.rolesPrd = rolesPrd;
        this.empresasPrd = empresasPrd;
        this.usuariosPrd = usuariosPrd;
    }
    async getPaginaRenderizador(req) {
        const { idempresa } = req;
        const roles = await this.rolesPrd.getRolesByEmpresa(idempresa);
        return { mensaje: "Ingresar roles y usuario", idempresa, roles };
    }
    async guardarRoles(req) {
        const rol = Object.assign({}, req.body);
        const { idempresa } = req.body;
        const em = new Empresas_1.Empresas();
        em.idEmpresa = idempresa;
        rol.empresas = em;
        await this.rolesPrd.guardar(rol);
        return { url: "administrar?idempresa=" + idempresa };
    }
    async eliminar(req) {
        const { idempresa, idrol } = req;
        await this.rolesPrd.eliminarRol(idempresa, idrol);
        return { url: "administrar?idempresa=" + idempresa };
    }
    async guardarUsuario(req) {
        const usuario = Object.assign({}, req.body);
        const { idempresa, idrol } = req.body;
        const rol = new Roles_1.Roles();
        rol.id = idrol;
        usuario.rol = rol;
        await this.usuariosPrd.guardar(usuario);
        return { url: "administrar?idempresa=" + idempresa };
    }
    async getPaginaRenderizadorRelacionRol(req) {
        const { idempresa, idrol } = req;
        const relacion = await this.rolesPrd.getRolesByEmpresaAndrol(idempresa, idrol);
        const empresa = await this.empresasPrd.getEspecificaEmpresa(idempresa);
        return { relacion, id: idrol, empresa, parseando: (obj) => { return JSON.stringify(obj); } };
    }
    async guardarRelaciones(req) {
        const { idmodulo, idsubmodulo, idpermiso, idrol, idempresa } = req.body;
        await this.rolesPrd.insertarRelacionRoles({ idmodulo, idsubmodulo, idpermiso, idrol, idempresa });
        return { url: "/vistainicial/clientes/administrar/roles?idempresa=" + idempresa + "&idrol=" + idrol };
    }
};
__decorate([
    (0, common_1.Get)("administrar"),
    (0, common_1.Render)("clientesadministrar"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesAdministrarPageController.prototype, "getPaginaRenderizador", null);
__decorate([
    (0, common_1.Post)("guardarrol"),
    (0, common_1.Redirect)("/vistainicial/clientes/administrar"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesAdministrarPageController.prototype, "guardarRoles", null);
__decorate([
    (0, common_1.Get)("eliminarrrol"),
    (0, common_1.Redirect)("/vistainicial/clientes/administrar"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesAdministrarPageController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)("guardarusuario"),
    (0, common_1.Redirect)("/vistainicial/clientes/administrar"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesAdministrarPageController.prototype, "guardarUsuario", null);
__decorate([
    (0, common_1.Get)("administrar/roles"),
    (0, common_1.Render)("clientesadministrarrelacion"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesAdministrarPageController.prototype, "getPaginaRenderizadorRelacionRol", null);
__decorate([
    (0, common_1.Post)("guardarrelacion"),
    (0, common_1.Redirect)("vistainicial/clientes/administrar/roles", 302),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesAdministrarPageController.prototype, "guardarRelaciones", null);
ClientesAdministrarPageController = __decorate([
    (0, common_1.Controller)("vistainicial/clientes"),
    __metadata("design:paramtypes", [roles_service_1.RolesService, EmpresasServices_1.EmpresasServices,
        UsuariosServices_1.UsuariosSevices])
], ClientesAdministrarPageController);
exports.ClientesAdministrarPageController = ClientesAdministrarPageController;
//# sourceMappingURL=clientesadministrarpageController.js.map