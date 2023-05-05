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
exports.EmpresasServices = void 0;
const VersionesServices_1 = require("./../../../catalogos/versiones/services/VersionesServices");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const Empresas_1 = require("../models/Empresas");
let EmpresasServices = class EmpresasServices {
    constructor(empresasRepository, versionPrd) {
        this.empresasRepository = empresasRepository;
        this.versionPrd = versionPrd;
    }
    async getAll() {
        return await this.empresasRepository.find({ where: { isCliente: true }, relations: { versiones: true } });
    }
    async guardarEmpresaInicial(parametros) {
        const empresa = new Empresas_1.Empresas();
        const { nombre, razonsocial, version, esCliente } = parametros;
        empresa.nombre = nombre;
        empresa.razonSocial = razonsocial;
        empresa.isCliente = Boolean(esCliente);
        empresa.versiones = [...version];
        return await this.empresasRepository.save(empresa);
    }
    async eliminarEmpresaInicial(idEmpresa) {
        const empresa = new Empresas_1.Empresas();
        empresa.idEmpresa = idEmpresa;
        await this.empresasRepository.delete(empresa);
    }
    async getEspecificaEmpresa(idEmpresa) {
        const empresa = await this.empresasRepository.findOne({ where: { idEmpresa: idEmpresa }, relations: {
                versiones: { modulosxversion: { permiso: true, submodulo: true, modulo: true } }
            } });
        empresa.versiones.forEach(s => {
            s.modulos = this.versionPrd.filtroRelaciones(s);
        });
        return empresa;
    }
};
EmpresasServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Empresas_1.Empresas)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        VersionesServices_1.VersionesServices])
], EmpresasServices);
exports.EmpresasServices = EmpresasServices;
//# sourceMappingURL=EmpresasServices.js.map