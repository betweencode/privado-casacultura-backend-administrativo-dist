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
exports.PeriodosServices = void 0;
const personas_services_1 = require("./../../personas/services/personas.services");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const periodo_1 = require("../models/periodo");
const tallerPeriodoxpersona_1 = require("../models/tallerPeriodoxpersona");
let PeriodosServices = class PeriodosServices {
    constructor(repository, repositorypersonaPeriodo, personasPrd) {
        this.repository = repository;
        this.repositorypersonaPeriodo = repositorypersonaPeriodo;
        this.personasPrd = personasPrd;
    }
    async getAll() {
        return await this.repository.find();
    }
    async getAllactivos() {
        const resultado = await this.repository.findOne({ where: { esActivo: true } });
        return resultado;
    }
    async guardar(obj) {
        const resultado = { resultado: false, mensaje: "No se pudo guardar el registor", datos: undefined };
        try {
            const data = await this.repository.save(obj);
            resultado.mensaje = "Registro guardado con exito";
            resultado.resultado = true;
            resultado.datos = data;
        }
        catch (e) {
            console.log(e);
        }
        return resultado;
    }
    async guardarDatosAlumnoTaller(periodoxPersona) {
        const periodo = await this.repository.findOne({ where: { esActivo: true } });
        periodoxPersona.periodos = periodo;
        periodoxPersona.proceso = "wait";
        return await this.repositorypersonaPeriodo.save(periodoxPersona);
    }
};
PeriodosServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(periodo_1.Periodos)),
    __param(1, (0, typeorm_1.InjectRepository)(tallerPeriodoxpersona_1.TallerPeriodoxPersona)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        personas_services_1.PersonasServices])
], PeriodosServices);
exports.PeriodosServices = PeriodosServices;
//# sourceMappingURL=periodosServices.js.map