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
exports.RolesService = void 0;
const Modulos_1 = require("./../../modulos/models/Modulos");
const Permisos_1 = require("./../../permisos/models/Permisos");
const RolesPermisos_1 = require("./../models/RolesPermisos");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Submodulos_1 = require("../../../catalogos/submodulos/models/Submodulos");
const typeorm_2 = require("typeorm");
const Roles_1 = require("../models/Roles");
let RolesService = class RolesService {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    async getAll() {
        return null;
    }
    async getById(idRol) {
        const aux = await this.rolesRepository.findOne({ relations: { permisosxsubmodulos: { permiso: true, submodulo: true, modulo: true } }, where: { id: idRol, esActivo: true } });
        aux.modulos = this.filtroRelaciones(aux);
        return aux;
    }
    async guardar(obj) {
        return await this.rolesRepository.save(obj);
    }
    async actualizar(id, obj) {
        const rol = await this.getById(id);
        obj.id = id;
        obj.nombre = rol.nombre === obj.nombre ? undefined : obj.nombre;
        return await this.rolesRepository.save(obj);
    }
    async eliminarRol(idempresa, idrol) {
        const rol = await this.rolesRepository.findOne({ where: { id: idrol, empresas: { idEmpresa: idempresa } }, relations: { permisosxsubmodulos: { permiso: true, modulo: true, submodulo: true } } });
        rol.esActivo = false;
        return await this.rolesRepository.save(rol);
    }
    async eliminarMasivo(roles) {
        roles.forEach(async (s) => {
            const rol = await this.getById(s.id);
            rol.esActivo = false;
            await this.rolesRepository.save(rol);
        });
        return { "respuesta": "Operación realizada con éxito" };
    }
    async insertarRelacionRoles(parametros) {
        const { idmodulo, idsubmodulo, idpermiso, idrol, idempresa } = parametros;
        const rolesxmodulos = new RolesPermisos_1.RolesxPermisos();
        const modulo = new Modulos_1.Modulos();
        modulo.idModulo = idmodulo;
        const submodulo = new Submodulos_1.Submodulos();
        submodulo.idSubmodulo = idsubmodulo;
        const permisos = new Permisos_1.Permisos();
        permisos.id = idpermiso;
        rolesxmodulos.modulo = modulo;
        rolesxmodulos.permiso = permisos;
        rolesxmodulos.submodulo = submodulo;
        const rol = await this.rolesRepository.findOne({ where: { id: idrol, empresas: { idEmpresa: idempresa } }, relations: { permisosxsubmodulos: true, empresas: true } });
        rol.permisosxsubmodulos.push(rolesxmodulos);
        await this.rolesRepository.save(rol);
    }
    async getRolesByEmpresa(idEmpresa) {
        return await this.rolesRepository.find({ where: { empresas: { idEmpresa: idEmpresa }, esActivo: true }, relations: { permisosxsubmodulos: { modulo: true, submodulo: true, permiso: true } } });
    }
    async getRolesByEmpresaAndrol(idEmpresa, idrol) {
        const rol = await this.rolesRepository.findOne({ where: { empresas: { idEmpresa: idEmpresa }, esActivo: true, id: idrol }, relations: { permisosxsubmodulos: { modulo: true, submodulo: true, permiso: true } } });
        rol.modulos = this.filtroRelaciones(rol);
        return rol;
    }
    filtroRelaciones(version) {
        const modulos = [];
        if (version && version.permisosxsubmodulos) {
            version.permisosxsubmodulos.forEach(s => {
                let modulo = s.modulo;
                let submodulo = s.submodulo;
                if (!modulos.some(mm => mm.idModulo == modulo.idModulo)) {
                    modulos.push(modulo);
                }
                else {
                    modulo = modulos.find(s => s.idModulo == modulo.idModulo);
                }
                if (!modulo.submodulos.some(mm => mm.idSubmodulo == submodulo.idSubmodulo)) {
                    modulo.submodulos.push(submodulo);
                }
                else {
                    submodulo = modulo.submodulos.find(s => s.idSubmodulo == submodulo.idSubmodulo);
                }
                submodulo.permisos.push(s.permiso);
            });
        }
        return modulos;
    }
    async obtenerRolesInicialesRegister(proceso) {
        return await this.rolesRepository.findOne({ where: { proceso: proceso, esActivo: true } });
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Roles_1.Roles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map