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
exports.PersonasServices = void 0;
const personas_1 = require("./../models/personas");
const Usuarios_1 = require("./../../../administracion/usuarios/models/Usuarios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const AwsS3Comunicacion_services_1 = require("../../../serviciosexternos/services/AwsS3Comunicacion.services");
let PersonasServices = class PersonasServices {
    constructor(repository, repositoryUsuarios, s3Provices) {
        this.repository = repository;
        this.repositoryUsuarios = repositoryUsuarios;
        this.s3Provices = s3Provices;
    }
    async getAll() {
        return await this.repository.find();
    }
    async getTalleresPorPeriodoPersona(usuario) {
        const tablaDetalle = await this.repositoryUsuarios.findOne({ where: { correo: usuario, personas: { detallePeriodoPersonas: { periodos: { esActivo: true } } } }, relations: { personas: { detallePeriodoPersonas: { talleres: true } } } });
        const personasPorPeriodo = tablaDetalle && tablaDetalle.personas ? tablaDetalle.personas : [];
        return personasPorPeriodo;
    }
    async getTalleresPorPeriodoPersonaIdPersona(usuario, idPersona) {
        const tablaDetalle = await this.repositoryUsuarios.findOne({ where: { correo: usuario, personas: { idPersona: idPersona, detallePeriodoPersonas: { periodos: { esActivo: true } } } }, relations: { personas: { detallePeriodoPersonas: { talleres: true } } } });
        const personasPorPeriodo = tablaDetalle && tablaDetalle.personas ? tablaDetalle.personas : [];
        return personasPorPeriodo;
    }
    async getPersonasSesion(usuario) {
        const usuarioencontrado = await this.repositoryUsuarios.findOne({ where: {
                correo: usuario
            }, relations: {
                personas: true
            } });
        const personas = usuarioencontrado.personas || [];
        return personas;
    }
    async guardarPersona(username, persona) {
        const usuario = await this.repositoryUsuarios.findOne({ where: { correo: username } });
        persona.usuario = usuario;
        return await this.repository.save(persona);
    }
    async getPersonaById(idPersona) {
        return await this.repository.findOne({ where: { idPersona: idPersona } });
    }
};
PersonasServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(personas_1.Personas)),
    __param(1, (0, typeorm_1.InjectRepository)(Usuarios_1.Usuarios)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        AwsS3Comunicacion_services_1.AwsS3ComunicacionServices])
], PersonasServices);
exports.PersonasServices = PersonasServices;
//# sourceMappingURL=personas.services.js.map