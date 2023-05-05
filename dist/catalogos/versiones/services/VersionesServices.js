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
exports.VersionesServices = void 0;
const Modulos_1 = require("./../../modulos/models/Modulos");
const Submodulos_1 = require("./../../submodulos/models/Submodulos");
const Permisos_1 = require("./../../permisos/models/Permisos");
const Versionesxmodulos_1 = require("./../models/Versionesxmodulos");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Versiones_1 = require("../models/Versiones");
const typeorm_2 = require("typeorm");
let VersionesServices = class VersionesServices {
    constructor(repositoryVersiones, repositoryVersionesmodulos) {
        this.repositoryVersiones = repositoryVersiones;
        this.repositoryVersionesmodulos = repositoryVersionesmodulos;
    }
    async getVersionesClientes() {
        return await this.repositoryVersiones.find({ where: { esCliente: true, esActivo: true } });
    }
    async insertVersion(version) {
        return await this.repositoryVersiones.save(version);
    }
    async getVersionById(idVersion) {
        return await this.repositoryVersiones.findOne({ where: { idVersion: idVersion } });
    }
    async eliminarRelacion(idVersion) {
        const version = await this.repositoryVersiones.findOne({ where: { idVersion: idVersion }, relations: { modulosxversion: true } });
        await this.repositoryVersionesmodulos.remove(version.modulosxversion);
        version.modulosxversion = [];
        await this.repositoryVersiones.remove(version);
    }
    async insertarRelacionVersiones(parametros) {
        const { idmodulo, idsubmodulo, idpermiso, idversion } = parametros;
        const versionesxmodulos = new Versionesxmodulos_1.Versionesxmodulos();
        const modulo = new Modulos_1.Modulos();
        modulo.idModulo = idmodulo;
        const submodulo = new Submodulos_1.Submodulos();
        submodulo.idSubmodulo = idsubmodulo;
        const permisos = new Permisos_1.Permisos();
        permisos.id = idpermiso;
        versionesxmodulos.modulo = modulo;
        versionesxmodulos.permiso = permisos;
        versionesxmodulos.submodulo = submodulo;
        const version = await this.repositoryVersiones.findOne({ where: { idVersion: idversion }, relations: { modulosxversion: true } });
        version.modulosxversion.push(versionesxmodulos);
        this.repositoryVersiones.save(version);
    }
    async obtenerRelacioncorrectaVersionesById(idversion) {
        const version = await this.repositoryVersiones.findOne({ where: { idVersion: idversion }, relations: { modulosxversion: { modulo: true, submodulo: true, permiso: true } } });
        version.modulos = this.filtroRelaciones(version);
        return version;
    }
    async obtenerRelacioncorrectaVersiones() {
        const version = await this.repositoryVersiones.find({ where: { esActivo: true }, relations: { modulosxversion: { modulo: true, submodulo: true, permiso: true } } });
        version.forEach(version => {
            version.modulos = this.filtroRelaciones(version);
        });
        return version;
    }
    filtroRelaciones(version) {
        const modulos = [];
        if (version && version.modulosxversion) {
            version.modulosxversion.forEach(s => {
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
};
VersionesServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Versiones_1.Versiones)),
    __param(1, (0, typeorm_1.InjectRepository)(Versionesxmodulos_1.Versionesxmodulos)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], VersionesServices);
exports.VersionesServices = VersionesServices;
//# sourceMappingURL=VersionesServices.js.map